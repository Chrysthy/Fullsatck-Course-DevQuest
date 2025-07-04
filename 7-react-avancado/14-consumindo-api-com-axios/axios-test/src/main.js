import './style.css'
import { fetchUserDetails } from '../axios.js'

document.querySelector('#app').innerHTML = `

  <div>
  
    <h1>GitHub User</h1>

    <div id="user"></div>

  </div>
`

fetchUserDetails(document.querySelector('#user'),'Chrysthy')