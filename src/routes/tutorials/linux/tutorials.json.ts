import type { RequestHandler } from '@sveltejs/kit';
import loadProjects from '$lib/loadProjects';

export const get: RequestHandler = loadProjects(import.meta.glob("./*.md"));
