import React, { Component } from 'react'


const MyContext =   React.createContext();
const UserConsumer = MyContext.Consumer;

class UseContext extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    
    render() {
        return (
            <MyContext.Provider   value='hello'>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export { MyContext,  UseContext }

