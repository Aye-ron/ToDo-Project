import React, { Component } from 'react'
const { v4: uuidv4 } = require('uuid');

class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {todo : "", id : uuidv4()};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })
    };

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addTD(this.state);
        this.setState({ todo : "", id : uuidv4() });
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label htmlFor='todo'>New Todo</label>
                    <input
                        type='text'
                        name='todo'
                        value={this.state.todo}
                        onChange={this.handleChange}
                        id= 'todo'
                    />
                </div>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;