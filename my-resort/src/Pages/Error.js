import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <Navbar />
            <Hero>
                <Banner title='404'
                        desc='Page Not Found'>
                        <Link to='/home' className='btn-primary'>
                            Return Home
                        </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Error

