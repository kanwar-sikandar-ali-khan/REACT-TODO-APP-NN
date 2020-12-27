import React, { Component } from 'react'

                   ////////// ye file content save kr kr dosri file me deti h

                   //////    khasiat ye h k 2 function call ho rahe hn


export class Todoinput extends Component {

    state = {
        content: ""
    }

    inputChange = (e) => {
        e.preventDefault();

        this.setState({
            content: e.target.value
        })
    }

                ///////onclick pr 2 function call horahe hn bht kaam ka h

    submitTodos = (e) => {
        
        e.preventDefault();
        this.props.todoinput(this.state);

        this.setState({
            content:""
        })

        
    }


    render() {
        return (
            <div>
                <h1>TODO APP</h1>
                <form action="">
                    <input value={this.state.content} type="text" placeholder="enter your todo" onChange={this.inputChange} />
                    <button onClick={this.submitTodos}>TODOS</button>
                </form>

            </div>
        )
    }
}

export default Todoinput
