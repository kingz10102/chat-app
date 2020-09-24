import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

export default function SignIn() {
	const [ name, setName ] = useState('');
	const [ room, setRoom ] = useState('');

	return (
		<div className="joinOuterWrapper">
			<div className="joinInnerWrapper">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/JioChat_logo.svg/1280px-JioChat_logo.svg.png"
                alt=""/>
				<div>
					<input
						placeholder="Who are you ? ..."
						className="joinInput"
						type="text"
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div>
					<input
						placeholder="Where are you ? ..."
						className="joinInput mt-20"
						type="text"
						onChange={(event) => setRoom(event.target.value)}
					/>
				</div>
				<Link
					onClick={(e) => (!name || !room ? e.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}
				>
					<button className={'button mt-20'} type="submit">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
}
