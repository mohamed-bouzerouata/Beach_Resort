import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Hero>
                    <Banner title='luxurious rooms'
                            desc='deluxe rooms starting at 299$'>
                            <Link to='/rooms' className='btn-primary'>
                                our rooms
                            </Link>
                    </Banner>
                </Hero>
                <Services />
            </div>
        )
    }
}

export default Home 
