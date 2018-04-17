import React from 'react'
import {FacebookShareButton, TwitterShareButton, RedditShareButton, GooglePlusShareButton} from 'react-share'
import {FacebookIcon, TwitterIcon, RedditIcon, GooglePlusIcon} from 'react-share'
import './SocialMediaShare.css'


const SocialMediaShare = (props) => {
	const shareUrl = 'www.google.se'
	return (
			<div className='media-share-wrapper'>
				<div className='facebook-share'>
					<FacebookShareButton className='facebook-share-button share-button' url={shareUrl}>
						<FacebookIcon round size={48} />
					</FacebookShareButton>
				</div>
				<div className='twitter-share'>
					<TwitterShareButton className='twitter-share-button share-button' url={shareUrl}>
						<TwitterIcon round size={48} />
					</TwitterShareButton>
				</div>
				<div className='google-share'>
					<GooglePlusShareButton className='google-share-button share-button' url={shareUrl}>
						<GooglePlusIcon round size={48} />
					</GooglePlusShareButton>
				</div>
				<div className='reddit-share'>
					<RedditShareButton className='reddit-share-button share-button' url={shareUrl}>
						<RedditIcon round size={48} />
					</RedditShareButton>
				</div>
			</div>





		)
}
export default SocialMediaShare