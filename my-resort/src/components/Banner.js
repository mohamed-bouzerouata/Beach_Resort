import React from 'react'

const Banner = ({ children, title, desc}) => {
    return (
        <div className='banner'>
                <h1>{title}</h1>
                <div />
                <p>{desc}</p>
                {children}
        </div>
    )
}


export default Banner
