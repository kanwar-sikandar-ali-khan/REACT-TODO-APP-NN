import React from 'react'


                      //////this file render all data by taking props


const To = ({ todoState, delteTodo }) => {


    const todolist = todoState.length ? (todoState.map((v, i) => {

        return (
            <div key={i}>

                <li>
                    <span onClick={() => delteTodo(v.id)}>{v.content}</span>

                </li>


            </div>

        )
    })) : (
            <p>You have no todos left !</p>

        )
    return (
        <div>

            {todolist}

        </div>
    )
}

export default To;

