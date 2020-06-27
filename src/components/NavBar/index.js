import React from "react"
import "./index.css"
function NavBar (props)
 {

    return (
      <ul className="nav justify-content-center"  >
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Cliky Game- Find a Hound</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Score:{props.score}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Top Score:{props.topScore}</a>
  </li>

</ul>
    )
 }

 export default NavBar