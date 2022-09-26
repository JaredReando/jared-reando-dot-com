import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import hiHowAreYou from '../../static/hi_how_are_you_large.png'
import { ContactLinks } from './contact_links'

export const NavWrapper = () => {
	return (
		<>
			<nav className={`nav-bar-wrapper`}>
				<div className={'hiya-frog-wrapper'}>
					<img className={`nav-logo`} src={hiHowAreYou} alt="hi how are you?" />
					<p>hi how are you?</p>
				</div>
				<ul className={`nav-list`}>
					<li>
						<NavLink
							className={({ isActive }) =>
								`nav-base ${isActive ? 'nav-active' : 'nav-inactive'}`
							}
							to="/"
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								`nav-base ${isActive ? 'nav-active' : 'nav-inactive'}`
							}
							to="/about"
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								`nav-base ${isActive ? 'nav-active' : 'nav-inactive'}`
							}
							to="/projects"
						>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								`nav-base ${isActive ? 'nav-active' : 'nav-inactive'}`
							}
							to="/writing"
						>
							Writing
						</NavLink>
					</li>
				</ul>
			</nav>
			<section className={'main-content-wrapper'}>
				<Outlet />
			</section>
			<footer className={'footer-wrapper'}>
				<ContactLinks />
			</footer>
		</>
	)
}
