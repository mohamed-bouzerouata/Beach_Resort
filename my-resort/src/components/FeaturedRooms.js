import React, { Component } from 'react'
import { MyContext } from '../UseContext'
import Room from './Room';
import Title from './Title'
import Loading from './Loading';

class FeaturedRooms extends Component {
    static contextType = MyContext
    
    render() {
        let { loading, featuredRooms} = this.context;
        let room = featuredRooms.map(room => {
            return <Room  key={room.id}  room={room} />
        })
        return (
            <section className='featured-rooms'>
                <Title  title='Featured Rooms'/>
                <div className='featured-rooms-center'>
                    {loading ? <Loading /> : room}
                </div>
            </section>
        )
    }
}

export default FeaturedRooms
