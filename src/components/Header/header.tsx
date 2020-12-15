import { Link } from "gatsby"
import React from "react"
import { slide as Menu } from "react-burger-menu"
import SocialLinks from "../SocialLinks/sociallinks"

import "./header.scss"

const Header = props => (
	<header className={`Header ${props.className}`}>
		<Menu right className="Header__menu">
			<Link to="/" className="Header__menu__item menuTitle">
				{!props.siteTitle || props.siteTitle === ""
					? `Undefined`
					: props.siteTitle}
			</Link>
			<SocialLinks className="Header__SocialLinks" />
			<Link to="/about" className="Header__menu__item">
				About
			</Link>
			<Link to="/all-writings" className="Header__menu__item">
				Writings
			</Link>
		</Menu>
	</header>
)

export default Header
