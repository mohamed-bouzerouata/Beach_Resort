import React, { Component } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import RoomContainer from '../components/RoomContainer'

class Rooms extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar />
                    <Hero>
                        <Banner title=''
                                desc=''>
                        </Banner>
                    </Hero>
                </div>
                <RoomContainer />
            </>
        )
    }
}

export default Rooms