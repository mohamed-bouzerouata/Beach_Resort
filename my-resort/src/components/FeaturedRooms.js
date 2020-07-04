import React, { Component } from 'react'
import { MyContext } from '../UseContext'

class FeaturedRooms extends Component {
    static contextType = MyContext
    
    render() {
        let value = this.context;
        return (
            <h1>
                {value} world
            </h1>
        )
    }
}

export default FeaturedRooms
