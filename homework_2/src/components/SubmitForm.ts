import { TodoList } from "./TodoList";

export function SubmitForm() :string{
  return `
  <form id="input-form" class="toto-form">
    <input id="input" type="text" placeholder="Write Your todo.." />
    <button type="submit">Submit</button>
  </form>
  `
}

export function SubmitFormScript() :void{
  const $toto_form = document.querySelector<HTMLFormElement>('#input-form');

  $toto_form?.addEventListener('submit', (event:any) => {
    event.preventDefault();
    const content:string = event.target.input.value;
    event.target['input'].value = '';

    fetch("/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: content,
        status: "NOT_DONE"
      }),
    })
    .then((response:Response) => {
      console.log(response);
      TodoList();
    })
    .catch(()=> console.log("Post error"));
  });
}