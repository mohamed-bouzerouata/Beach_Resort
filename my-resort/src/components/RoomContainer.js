import React from 'react'
import { RoomFilter } from './RoomFilter'
import RoomList from './RoomList'
import { UserConsumer, MyContext } from '../UseContext'
import Rooms from '../Pages/Rooms'

const RoomContainer = () => {
    return (
        <UserConsumer>
            {value => {                
                const {loading, rooms, sortedRooms } = value
                console.log(value)
                return(
                    <>
                        <RoomFilter />
                        <RoomList key={rooms.id} rooms={rooms} />
                    </>
                )
            }}
            
        </UserConsumer>
    )
}

export default RoomContainer
