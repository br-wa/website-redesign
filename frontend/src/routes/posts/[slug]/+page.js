// from https://joyofcode.xyz/sveltekit-markdown-blog

import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../../lib/posts/${params.slug}.md`)
		const { title, date } = post.metadata;
		const dateString = (new Date(date)).toISOString().split('T')[0];	

		return {
			content: post.default,
			title: title,
			date: dateString
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}