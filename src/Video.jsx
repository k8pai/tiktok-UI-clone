import React from 'react'
import './Video.css'
import VideoFooter from './FooterLeft';

export default function Video(props) {
	// write your code here
	const { url, channel, description, song } = props;
	return <div className='video'>
		<video className='player' src={url} loop></video>
		<div className='bottom-controls'>
			<VideoFooter channel={channel} description={description} song={song} />

		</div>
	</div>
}
