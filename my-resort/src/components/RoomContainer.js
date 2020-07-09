import React from 'react'
import { RoomFilter } from './RoomFilter'
import RoomList from './RoomList'
import { UserConsumer, MyContext } from '../UseContext'


const RoomContainer = () => {
    return (
        <UserConsumer>
            {value => {                
                const {loading, rooms, sortedRooms } = value
                
                return(
                    <>
                        <RoomFilter  rooms={rooms}    />
                        <RoomList key={rooms.id} sortedRooms={sortedRooms} />
                    </>
                )
            }}
            
        </UserConsumer>
    )
}

export default RoomContainer
