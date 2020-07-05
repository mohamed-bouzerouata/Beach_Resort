import React from 'react'

const Room = ({room}) => {
    return (
        <div className='room'>
            <div className='img-container'>
                {room.images}
            </div>
        </div>
    )
}

export default Room
