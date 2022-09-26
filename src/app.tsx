import React from 'react'
import { AboutPage, HomePage, WritingPage, ProjectsPage } from './pages'
import { NavWrapper } from './components/nav_wrapper'
import { Route, Routes, Navigate } from 'react-router-dom'
import './styles.css'

export const App = () => {
	return (
		<div className={`app-wrapper`}>
			<Routes>
				<Route path="/" element={<NavWrapper />}>
					<Route index element={<HomePage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/writing" element={<WritingPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>
		</div>
	)
}
