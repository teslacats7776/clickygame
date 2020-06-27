import React,{Component} from 'react';
import logo from './logo.svg';
// import './App.css';
import Card from "./components/card"
import NavBar from "./components/NavBar"
;
import Dogs from "./data/data.json";
import Container from './components/container';
class App extends Component {

  state={
    score:0,
    topScore:0,
    dogs:Dogs,
    originalDogs: Dogs
  }
  handleSubmit = userClickId=>{
      let newDogs = this.state.dogs.map (dog=>{
          if(userClickId===dog.id){
                 if(dog.clicked  === undefined){
                   this.setState({score:this.state.score+1})
                   if(this.state.score>=this.state.topScore){
                    this.setState({topScore:this.state.topScore+1 })
                   }
                    dog.clicked = true;

                 }  else {
                  this.setState({score:0})
                 }   
          }
          return dog
        })
      
        if (this.state.score===0){
        const original = this.state.originalDogs.sort(()=>Math.random()-0.5)
          this.setState({dogs:original});
        } else {
          newDogs = newDogs.sort(()=>Math.random()-0.5)
          this.setState({dogs:newDogs})
        }

       
  }

render (){
  return (
    <>
   <Container>
        <NavBar score={this.state.score} topScore={this.state.topScore}/>
        <Card data={this.state.dogs} handleSubmit={this.handleSubmit}/>

       
   </Container>
    {/* <Container>
    Hi this is phil
  </Container>
  <Container>
    Hi this is christina
  </Container> */}

  </>
  );

}

 
}

export default App;
