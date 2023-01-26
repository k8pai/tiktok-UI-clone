import React from 'react'
import './Video.css'
import VideoFooter from './FooterLeft';
import FooterRight from './FooterRight';

export default function Video(props) {
	// write your code here
	const { url, channel, description, song, likes, shares, messages } = props;
	return <div className='video'>
		<video className='player' src={url} loop></video>
		<div className='bottom-controls'>
			<VideoFooter channel={channel} description={description} song={song} />
			<FooterRight likes={likes} shares={shares} messages={messages} />
		</div>
	</div>
}
