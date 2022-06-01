import React from "react";
import './Hemisphere.css'
import NorthernPic from './image/Northern.jpg';
import SouthernPic from './image/Southern.jpg';

const hemisphereConfig = {
    Northern: {
        text: 'It is Northern Hemisphere',
        picture: NorthernPic
    },
    Southern: {
        text: 'It is Southern Hemisphere',
        picture: SouthernPic
    }
}

const HemisphereDisplay = ({ latitude }) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern'
    const { text, picture } = hemisphereConfig[hemisphere]

    return (
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt="Hemisphere" width='400' />
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )

}

export default HemisphereDisplay;