import './reset.css'
import './style.css'
import { worker } from './mocks/browser'
import { SubmitForm,SubmitFormScript } from './components/SubmitForm'

worker.start({ onUnhandledRequest: 'bypass' });

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <div class="wrapper">
      <h1 class="title">Yourssu Todo List</h1>
        ${SubmitForm()}
        <ul class="item-list">
  
        </ul>
    </div>
  </main>
`;
SubmitFormScript();



/*
<li class="item">
<label for="1">
  TODO1
  <span class="cancle">&times;</span>
</label>
<input id="1" type="checkbox" checked/>
</li>
<li class="item">
<label for="2">
  TODO2
  <span class="cancle">&times;</span>
</label>
<input id="2" type="checkbox"/>
</li>
*/
