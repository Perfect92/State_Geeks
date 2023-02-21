import React from "react";

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      name: 'ALEX', 
      age: 35
    }
    this.btClick = this.btClick.bind(this)
  }
  btClick(){
    this.setState({
      name : 'Geeks',
      age : 15
    })
  }
  render() {
  return(<div className="App">
    <p>Имя: {this.state.name} , Возраст: {this.state.age} </p>
    <button id="bt" onClick={this.btClick}>Нажми на меня</button> 
  </div>)
  }
}

export default App;
