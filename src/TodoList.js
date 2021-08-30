import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todoList : []
        }
        this.addTD = this.addTD.bind(this);
        this.update = this.update.bind(this);
    }

    removeTD(id) {
        this.setState({
          todoList: this.state.todoList.filter(p => p.id !== id)
        });
    }

    addTD(TD){
        this.setState({
            todoList : [...this.state.todoList, TD]
        })
    }

    update(id, updatedTask){
        const updatedTodos = this.state.todoList.map(t => {
            if (t.id === id){
                return {...t, todo: updatedTask} //todo is what the actual string of the todo app is called
            }
            return t; //leaves the item unchanged 
        })
        this.setState({todoList : updatedTodos})
    }
    // completeTD(id){

    // }

    render(){
        let finalList = this.state.todoList.map( p => 
            <Todo 
            TD = {p.todo} 
            key = {p.id} 
            id = {p.id}
            removeTD = {() => this.removeTD(p.id)}
            editTD = {() => this.editTD(p.id)}
            completeTD = {() => this.completeTD(p.id)}
            update = {this.update}
            />
            );

        return(
            <div>
                <header>Todo List</header>
                {finalList}
                <NewTodoForm addTD = {this.addTD}/>
            </div>
        )
    }
}

export default TodoList;