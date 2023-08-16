import { okToken, githubUser } from '$lib/secrets'
import { Octokit } from 'octokit'

export const load = async () => {
	const octokit = new Octokit({ auth: okToken })

	const response = await octokit.request('GET /users/{username}/events?per_page=15', {
		username: githubUser,
		headers: {
			'X-GitHub-Api-Version': '2022-11-28'
		}
	})

	return {
		events: response.data
	}
}
