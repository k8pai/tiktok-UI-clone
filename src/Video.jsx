import React, { useRef } from 'react'
import './Video.css'
import VideoFooter from './FooterLeft';
import FooterRight from './FooterRight';

export default function Video(props) {
	// write your code here
	const { url, channel, description, song, likes, shares, messages } = props;
	const videoRef = useRef(null);

	const onVideoPress = () => {
		if(videoRef.current.paused){
			videoRef.current.play()
		} else {
			videoRef.current.pause()
		}
	}


	return <div className='video'>
		<video 
			className='player' 
			onClick={onVideoPress}
			muted 
			ref={videoRef}
			loop
			src={url}>

		</video>
		<div className='bottom-controls'>
			<VideoFooter channel={channel} description={description} song={song} />
			<FooterRight likes={likes} shares={shares} messages={messages} />
		</div>
	</div>
}
