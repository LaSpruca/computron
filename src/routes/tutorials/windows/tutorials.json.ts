import type { RequestHandler } from '@sveltejs/kit';
import loadTutorials from '$lib/loadTutorials';

/// Create function to get all tutorials
export const get: RequestHandler = loadTutorials(import.meta.glob("./*.md"));
