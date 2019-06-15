import React from 'react';
const mongodb = require('mongodb');
const axios = require('axios')




class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {input: ''};
        this.inputChange = this.inputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    inputChange(event){
        this.setState({ input:  event.target.value})
    }

    submit(){
        e.preventDefault()ls
        let item = this.state.input;
       
    }

    render(){
        return(
            <div>
                <form>
                     <input onChange={this.inputChange} type="text" placeholder = "to do?"/>
                     <button onClick={this.submit}> submit</button>
                </form>
            </div>
        )
    }
}

export default Input;