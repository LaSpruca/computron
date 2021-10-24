import type { RequestHandler } from '@sveltejs/kit';
import loadTutorials from '$lib/loadTutorials';

export const get: RequestHandler = loadTutorials(import.meta.glob("./*.md"));
