import React from 'react'

export default function Video(props) {
	// write your code here
	const { url } = props;
	return <div className='video'>
		<video className='player' src={url} loop></video>
	</div>
}
