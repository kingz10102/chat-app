import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';

const TextContainer = ({ users }) => (
	<div className="textContainer">
		<div>
			<h1>
				This is myChat-Space{' '}
				<span role="img" aria-label="emoji">
					💬 💬
				</span>
			</h1>
			<h2>
				Similar to Aim or Meebo. Its your place to explore <span role="img" aria-label="emoji" />
			</h2>
			<h2>
				Start chattin' now !{' '}
				<span role="img" aria-label="emoji">
					🗣🗣
				</span>
			</h2>
		</div>
		{users ? (
			<div>
				<h1>Chatters currently online:</h1>
				<div className="activeContainer">
					<h2>
						{users.map(({ name }) => (
							<div key={name} className="activeItem">
								{name}
								<img alt="Online Icon" src={onlineIcon} />
							</div>
						))}
					</h2>
				</div>
			</div>
		) : null}
	</div>
);

export default TextContainer;
