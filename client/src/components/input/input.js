import React from 'react';


class Input extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <form>
                     <input type="text" placeholder = "to do?"/>
                     <button>submit</button>
                </form>
            </div>
        )
    }
}

export default Input;