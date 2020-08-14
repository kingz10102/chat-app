import React from 'react';
import './StatBar.css';
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'

const StatBar = ({room}) => (
    <div className='StatBar'>
        <div className='leftInnerWrapper'>
            <img className="onlineIcon" src={onlineIcon} alt="online image" />
            <h3>{room}</h3>
        </div>
        <div className='rightInnerWrapper'>
            <a href="/"><img src={closeIcon} alt="close image"/></a>
        </div>
    </div>
)

export default StatBar;