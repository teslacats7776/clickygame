import React,{Component} from 'react';
import logo from './logo.svg';
// import './App.css';
import Card from "./components/card"
import NavBar from "./components/NavBar"
;
import Dogs from "./data/data.json";
class App extends Component {

  state={
    score:0,
    topScore:0,
    dogs:Dogs
  }

render (){
  return (
    <div className="container">
        <NavBar/>
        <Card data={this.state.dogs}/>
    </div>
  );

}

 
}

export default App;
