import React, { Component } from 'react'
import { MyContext } from '../UseContext'
import { Link } from 'react-router-dom'

class SingleRoom extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            slug : this.props.match.params.slug
        }
    }
    //for one api call 
    // componentDidMount(){

    // }
    
    static contextType = MyContext
    render() {
        const {getRoom} = this.context
        const { slug } = this.state
        const room = getRoom(slug) 
        
        if(!room) {
            return(
                <div className='error '>
                <h3>No such Room could be found ...</h3>
                <Link to='/rooms' className='btn btn-primary'>
                    Back To Rooms
                </Link>
                </div>
            );
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default SingleRoom
