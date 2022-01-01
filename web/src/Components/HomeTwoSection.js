import React, { Component } from 'react'
import homeNft from '../images/homeNft.svg'
import '../App.css'

export default class HomeTwoSection extends Component {
    render() {
        return (
            <div>
                <img className='homeNftImg' src={homeNft} height='100%' width='100%' />
            </div>
        )
    }
}
