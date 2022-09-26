import React from 'react'

interface Props {
	imgSrc: string
	imgAlt: string
	linkURL: string
}

export const ContactLink: React.FC<Props> = ({ imgAlt, imgSrc, linkURL }) => {
	return (
		<a className={`contact-link`} href={linkURL}>
			<img className={`contact-link-img`} src={imgSrc} alt={imgAlt} />
		</a>
	)
}
