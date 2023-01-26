import React, { useState } from 'react'
import './FooterRight.css'
import FavouriteIcon from './icons/FavouriteIcon'
import FavoriteBorderIcon from './icons/FavouriteBordered'
import MessageIcon from './icons/Message'
import ShareIcon from './icons/Share'

function FooterRight({ likes, shares, messages}) {
	const [liked, setLiked] = useState(false)
	const [likeCount, setLikeCount] = useState(likes)
	
	return (
		<div className="footer-right">
			<div className="sidebar-icon">
				{liked?
					<FavouriteIcon
						style={{ width: '40px', height: '40px' }}
						onClick={() => {
							setLiked(value => !value);
							setLikeCount(value => value-1);
						}}
					/>:
					<FavoriteBorderIcon
						style={{ width: '40px', height: '40px' }}
						onClick={() => {
							setLiked(value => !value);
							setLikeCount(value => value+1);
						}}
					/>
				}
				<p>{likeCount}</p>
			</div>
			<div className="sidebar-icon">
				<MessageIcon style={{ width: '40px', height: '40px' }} />
				<p>{messages}</p>
			</div>
			<div className="sidebar-icon record-below">
				<ShareIcon style={{ width: '40px', height: '40px' }} />
				<p>{shares}</p>
			</div>
			<div className="sidebar-icon record">
				<img src="https://static.thenounproject.com/png/934821-200.png" />
			</div>
		</div>
	)
}

export default FooterRight;