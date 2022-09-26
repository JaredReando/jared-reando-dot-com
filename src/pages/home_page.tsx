import React from 'react'
import gif from '../../static/web_jared_small.gif'

export const HomePage = () => {
	return (
		<div className={`flex flex-center flex-column flex-wrap`}>
			<h1>Jared Reando</h1>
			<code className={`word-box`}>software developer</code>
			<img
				className={'hero-gif'}
				src={gif}
				alt="the GIF that keeps on giving"
			/>
		</div>
	)
}
