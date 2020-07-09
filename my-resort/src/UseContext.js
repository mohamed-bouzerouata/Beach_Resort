import React, { Component } from 'react'
import items from './data'; 

const MyContext =   React.createContext();
const UserConsumer = MyContext.Consumer;

class UseContext extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            rooms : [],
            sortedRooms : [],
            featuredRooms : [],
            loading : true,
            type : 'all',
            capacity : 0,
            price: 0,
            minPrice : 0,
            maxPrice : 0,
            size: 0,
            minSize: 0,
            maxSize: 0,
            breakfast : false,
            pets: false 
        }
    }

    componentDidMount() {
        // getData 
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true )
        
        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false
        })
    };
    //Put the Id and Images in the fields Object to structured Data 
    formatData(nestedData) {
        let tempItem = nestedData.map(el => {
                let id = el.sys.id
                let images = el.fields.images.map(image => 
                image.fields.file.url
            )

            let room = {...el.fields, id, images }
                return room
            })
            return tempItem
        }
    
    // its going to help us ones we open one single specific room page 
    // its help us accessing  specific room
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        let room = tempRooms.find((room) => room.slug === slug
        );
        return room 
    }
    //we gonna run this.applyFilter func as a callback function

    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(name, value);
        this.setState(
        {
                [name]: value
            },
            this.applyFilter
        );
    };
    //Depending on what we gonna do with input value
    //we're also gonna be changing this value 
    applyFilter = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets
        } = this.state;
        let tempRooms = [...rooms];
        
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        this.setState({
            sortedRooms: tempRooms
        });
        
    } 

    render() {
        return (
            <MyContext.Provider   
                value={{
                    ...this.state,
                    getRoom : this.getRoom,
                    handleChange : this.handleChange
                    }}> 
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext,  UseContext, UserConsumer }