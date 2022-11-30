import './style.css'
import {TITLE} from "./bases/01-types"
import {setupCounter} from './counter'
import {pikachu} from "./bases/03-classes";
import {charmanderAxios, charmanderFetch} from "./bases/04-injection";
import {charmander} from "./bases/05-decorators";
import {charmanderS} from "./bases/06-decorators-second";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h1>${TITLE}</h1>
  <br>
  <h4>${pikachu.name}</h4>
  <h4>${pikachu.imageUrl}</h4>
  <hr>
  <h4>${charmanderAxios.name}</h4>
  <hr>
  <h4>${charmanderFetch.name}</h4>
  <hr>
  <h4>${charmander.name}</h4>
    <hr>
  <h4>${charmander}</h4>
      <hr>
  <h4>${charmanderS}</h4>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
