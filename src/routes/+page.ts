import { PUBLIC_CMS_BASE_PATH } from "$env/static/public"
import type { AllProjectResponse, ProjectOverview } from "$lib/dtos"
import type { Project } from "$lib/types"
import type { PageLoad } from "./$types"


export const load: PageLoad = async ({ fetch }) => {
	async function getProjects(): Promise<ProjectOverview[]> {
		try {
			const res = await fetch(`${PUBLIC_CMS_BASE_PATH}/api/collections/projects/records`)
			const data = await res.json() as AllProjectResponse 

			console.log(data)

			return data.items.map(mapProjectToProjectOverview)
		} catch (err) {
			console.error(err)
			return []
		}
	}

	return {
		projects: getProjects()
	}
}


function mapProjectToProjectOverview(project: Project): ProjectOverview {
	return {
		id: project.id,
		title: project.title,
		description: project.description,
		imgBasePath: project.imgBasePath,
		thumbnail: project.thumbnail,
		stack: project.stack,
		live: project.live
	}
}