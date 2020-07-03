import React, { Component } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

class Rooms extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Hero>
                    <Banner title=''
                            desc=''>
                    </Banner>
                </Hero>
            </div>
        )
    }
}

export default Rooms