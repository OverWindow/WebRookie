
export function TodoList():void {
    const $itemList = document.querySelector<HTMLUListElement>(".item-list"); //as HTMLUListElement;
    const $li = document.createElement('li');// as HTMLLIElement;
    $li.className = 'item';
    $itemList?.appendChild($li);

    fetch("/todo")
    .then((response) => response.json())
    .then((data:any) => {
        console.log(data);
        const length:number = data.todos.length - 1;
        $li.innerHTML = Item(data.todos[length]);
        const $cancelButton = $li.querySelector<HTMLSpanElement>(".cancel");
        const $checkButton = $li.querySelector<HTMLInputElement>("input");
        $cancelButton?.addEventListener("click",() => TodoDelete(data.todos[length],$li));
        $checkButton?.addEventListener("click",() => TodoCheck($checkButton,data.todos[length]) );
    })
    .catch(()=> console.log("GET error"));
    return;
}

function Item(todos:any):string { //for="${todos.id}" 뺌
    return `
    <label > 
        ${todos.item}
        <span class="cancel">&times;</span>
    </label>
    <input id="${todos.id}" type="checkbox" unchecked/>
    `
}


function TodoDelete(todos:any, $li :HTMLLIElement):void {
    fetch("/todo",{
        method: "DELETE",
        body: JSON.stringify({
            id: todos.id
        })
    })
    .then(response=>{
        console.log(response.json());
        $li.remove();
        fetch("/todo")
        .then((response) => response.json())
        .then((data:any) => console.log("After DELETE",data))
        .catch(()=> console.log ("GET error"));
    })
    .catch(error=>console.log(error));
    return;
}

function TodoCheck( check:HTMLInputElement, data:any):void {
    let todoCheckStatus: "DONE" | "NOT_DONE";
    if(check.checked) {
        todoCheckStatus = "DONE";
    } else {
        todoCheckStatus = "NOT_DONE";
    }
    fetch("/todo",{
        method:"PATCH",
        body:JSON.stringify({
            id: data.id,
            item: data.item,
            status: todoCheckStatus
        })
    }) 
    .then((response) => {
        console.log(response.json());
        fetch("/todo")
        .then((response) => response.json())
        .then((data:any) => console.log(data))
        .catch(()=> console.log("error"));
    })
    .catch(()=>console.log("GET error"));

    return;
}