import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail } from 'react-icons/fa'

export class Services extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            services : [
                {
                    icon : <FaCocktail />,
                    title: 'Free Cocktail' ,
                    info : 'you ca do whatever you want in this life with just determination and hard work'
                },
                {
                    icon : <FaCocktail />,
                    title: 'Free Cocktail' ,
                    info : 'you ca do whatever you want in this life with just determination and hard work'
                },
                {
                    icon : <FaCocktail />,
                    title: 'Free Cocktail' ,
                    info : 'you ca do whatever you want in this life with just determination and hard work'
                },
                {
                    icon : <FaCocktail />,
                    title: 'Free Cocktail' ,
                    info : 'you ca do whatever you want in this life with just determination and hard work'
                },
            ]
        }
    }
    
    render() {
        return (
            <section className='services'>
                <Title  title='Services'/>
                <div className='services-center'>
                    {this.state.services.map((item, i) => {
                        return (
                            <article key={i} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                
                            </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}

export default Services
