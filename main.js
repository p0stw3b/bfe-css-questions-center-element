import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="outer">
    <div class="inner">
  </div>
`

setupCounter(document.querySelector('#counter'))
