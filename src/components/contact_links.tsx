import React from 'react'
import { ContactLink } from './contact_link'
import githubIcon from '../../static/github_icon.svg'
import linkedInIcon from '../../static/linkedin_icon.svg'
import emailIcon from '../../static/email_icon.svg'

export const ContactLinks = () => {
	return (
		<>
			<ContactLink
				imgAlt="GitHub link"
				imgSrc={githubIcon}
				linkURL="https://github.com/JaredReando"
			/>
			<ContactLink
				imgAlt="LinkedIn link"
				imgSrc={linkedInIcon}
				linkURL="https://www.linkedin.com/in/jaredreando/"
			/>
			<ContactLink
				imgAlt="Email link"
				imgSrc={emailIcon}
				linkURL="mailto:jaredreando@gmail.com"
			/>
		</>
	)
}
