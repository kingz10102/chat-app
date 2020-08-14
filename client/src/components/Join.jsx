import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    return (
        <div className="outerContainer">
            <div className="innerContainer">
                <h1 className="header">Join</h1>
                <div>
                    <input
                        placeholder="Name"
                        className="joinInput"
                        type="text"
                        onChange={(e) => e.target.value} />
                </div>
                <div>
                    <input
                        placeholder="Room"
                        className="joinInput mt-20"
                        type="text"
                        onChange={} />
                </div>
                <Link>
                    <button className="button" type="submit">Sign In</button>
                </Link>
            
            
            
            </div>
        </div>
    )
}

export default Join;