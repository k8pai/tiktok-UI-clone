import React, { useEffect, useState } from 'react'
import Video from './Video'
import './App.css'

const API_URL =
	'https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json'

export default function App() {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetch(API_URL).
			then(data => data.json()).
			then(data => setVideos(data));
	}, [])

	return (
		<div className="app">
			<div className="container">
				{videos.map((data, ind) => {
					return <Video 
								key={data.url}
								channel={data.channel}
								description={data.description}
								song={data.song}
								likes={data.likes}
								shares={data.shares}
								messages={data.messages}
								url={data.url}
								 />
				})}
			</div>
		</div>
	)
}
