import React from 'react'
import { ProjectCard } from '../components/project_card'
const projects = [1, 2, 3, 4, 5]
export const ProjectsPage = () => {
	return (
		<div className={`flex flex-center flex-column flex-wrap`}>
			<h1>Some projects</h1>
			<div className={`projects-wrapper`}>
				{projects.map(() => {
					return <ProjectCard />
				})}
			</div>
		</div>
	)
}
