import React, { Component } from 'react'
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            isCompleted:false, 
            task : this.props.TD
        }
        this.editTD = this.editTD.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.completeTD = this.completeTD.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    };

    editTD(){
        this.setState({isEditing : !this.state.isEditing})
    }

    completeTD(){
        this.setState({isCompleted : !this.state.isCompleted})
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.update(this.props.id, this.state.task);
        this.setState({isEditing : false})
    }

    render(){
        let result;
        if (this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type = "text" 
                        value = {this.state.task}
                        name ='task'
                        onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        }
        // if (this.state.isCompleted){
        //     result = (
        //         <div className = "completed">
        //             <li >
        //                 {this.props.TD}
        //             </li> 
        //             <button onClick = {this.props.removeTD}>X</button>
        //         </div>
        //     )
        // }
        else{
            result =  (
                <div >
                    <li onClick = {this.completeTD} className = {this.state.isCompleted ? "completed" : ""}>
                        {this.props.TD}
                    </li>
                        <button onClick = {this.props.removeTD}>X</button>
                        <button onClick = {this.editTD}>Edit</button>
                </div>
                )
        }
        return result;
    }
}

export default Todo;