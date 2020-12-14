import React from "react"
import PropTypes from "prop-types"
import "./sociallinks.scss"

import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"
import { GrGatsbyjs } from "react-icons/gr"

// Edit these to add or remove social media icons.
const socialMediaAccounts = [
	{
		id: 1,
		icon: FaTwitter,
		url: "http://twitter.com/daguilaraguilar",
	},
	{
		id: 2,
		icon: FaGithub,
		url: "http://github.com/diegoaguilar",
	},
	{ id: 3,
		icon: FaEnvelope,
		url: "mailto:diegoaguilar@ciudades.dev"
	},
]

const SocialLinks = ({ className }) => (
	<div className={`SocialLinks ${className}`}>
		{socialMediaAccounts.map(account => (
			<a
				href={account.url}
				key={account.id}
				className={`SocialLinks__container ${className}__container`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<account.icon className={`SocialLinks__icon ${className}__icon`} />
			</a>
		))}
	</div>
)

export default SocialLinks
