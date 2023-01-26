import React from 'react'
import './FooterLeft.css'
import MusicNote from './icons/MusicNote'

export default function VideoFooter(props) {
	const {channel, description, song} = props;
	return (
		<div className="footer-left">
			<div className="text">
				<h3>@{channel}</h3>
				<p>{description}</p>
				<div className="ticker">
					<MusicNote style={{ width: '30px' }} />
					<marquee direction="left" scrollamount="2">
						{song}
					</marquee>
				</div>
			</div>
		</div>
	)
}
