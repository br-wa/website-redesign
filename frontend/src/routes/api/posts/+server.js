import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});
	const posts = sortedPosts.map((post) => {
		return {
			title: post.meta.title,
			date: (new Date(post.meta.date)).toISOString().split('T')[0],
			path: post.path
		};
	});

	return json(posts);
};