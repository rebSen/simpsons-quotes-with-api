import React, { Component } from 'react';
import  GenerateNewQuote  from  './GenerateNewQuote';
import  DisplayQuotes   from  './DisplayQuotes';
import './App.css';

const firstImage = 
  {
   "quote": "Eat my shorts",
   "character": "Bart Simspon",
   "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
   
  }

  

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quotee:firstImage,
       
    }
}


GetQuotee = () => { 
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
  .then(response => response.json()) 
  .then(data => {
    this.setState({
      quotee:data[0]});
  });
  console.log("oula",this.state.quotee);
} 
  

  render() {

    
    console.log("oula",this.state.quotee);
    return (
      <div className="App">
        <DisplayQuotes 
         quotee={this.state.quotee}/>
        <GenerateNewQuote SelectQuote={() => this.GetQuotee()}/>
      </div>
    )
  
      
}
}