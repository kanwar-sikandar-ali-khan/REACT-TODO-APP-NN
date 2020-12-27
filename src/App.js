import React from 'react';
import './App.css';
import To from './components/To'
import Todoinput from './components/todoinput'


////////////////// this file is for state and functions


export class App extends React.Component {

  state = {
      todos:[{id:0,content:'buy some milk'},{id:1,content:'buy some egg'}]
  }

  delteTodo = (id) =>{

    const deleteTodo = this.state.todos.filter((v)=>{
      
        return v.id !==id
    });

    this.setState({
        todos:deleteTodo
    })

  }


  todoinput = (todo) =>{
    todo.id = Math.random();
    // console.log(todo)
    let todos_zz = [...this.state.todos,todo];
    this.setState({
      todos: todos_zz
    })

  }
  render() {
      return (
          <div className="appCompo">

              
              <Todoinput todoinput={this.todoinput} />

              

              <To  delteTodo={this.delteTodo} todoState={this.state.todos}/>
              
          </div>
      )
  }
}

export default App;
