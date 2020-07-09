import React, { useContext} from 'react'
import { MyContext } from '../UseContext'
import Title from './Title'


const UniqueRoomsType = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export const RoomFilter = () => {

    const context = useContext(MyContext)
    const { type, rooms, handleChange } = context
    //Get unique types
    let types = UniqueRoomsType(rooms, 'type')
    //Add all 
    types =[...types, 'all']
    //Render to jsx
    types = types.map((item, index) =>  {
        return <option key={index} value={item}>{item}</option>
    })
    
    return (
        <section className='filter-container'>
            <Title title='Search Rooms' />
            <form className='filter-form'>
                <div className='filter-groupe'>    
                    <label htmlFor='type'>room Type</label>
                    <select  
                        name='type'
                        id='type'
                        value={type}
                        className='form-control'
                        onChange={handleChange}>
                            {types}    
                        </select>
                        

                    
                </div>    
            </form>
        </section>
    )
}
