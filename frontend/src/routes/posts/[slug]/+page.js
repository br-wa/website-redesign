// from https://joyofcode.xyz/sveltekit-markdown-blog

import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../../lib/posts/${params.slug}.md`)
		const { title, date, subtitle, editors } = post.metadata;
		const dateString = (new Date(date)).toISOString().split('T')[0];	
		var hasEditors = false;
		if (editors && editors.length > 0) {
			hasEditors = true;
		}

		return {
			content: post.default,
			title: title,
			date: dateString,
			subtitle: subtitle,
			editors: editors,
			hasEditors: hasEditors
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}