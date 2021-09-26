import type { RequestHandler } from '@sveltejs/kit';
import type { Download } from '$lib/types';

const downloads: Download[] = [
	{
		name: 'Visual Studio Code',
		url: 'https://code.visualstudio.com',
		description: 'A free, lightweight, and open source text editor/IDE.',
		tags: ['Development', 'Open Source'],
		platforms: [
			'Linux',
			'Windows',
			'macOS'
		]
	},
	{
		name: 'OBS',
		url: 'https://obsproject.com',
		tags: ['Utilities', 'Open Source'],
		description: 'Free and open source software for live streaming and screen recording',
		platforms: [
			'Linux',
			'Windows',
			'macOS'
		]
	},
	{
		name: 'GitKraken',
		url: 'https://gitkraken.com',
		description: 'A free git GUI for all platforms',
		tags: ['Development'],
		platforms: [
			'Linux',
			'Windows',
			'macOS'
		]
	},
	{
		name: 'Google Chrome',
		url: 'https://chrome.google.com',
		description: 'The  most popular web browser, easy to use with great support',
		tags: ['Web'],
		platforms: [
			'Linux',
			'Windows',
			'macOS'
		]
	},
	{
		name: 'GIMP',
		url: 'https://www.gimp.org/',
		description: 'A free and open source image editor.',
		tags: ['Creativity', 'Open Source'],
		platforms: [
			'Linux',
			'Windows',
			'macOS'
		]
	},
	{
		name: 'balenaEtcher',
		url: 'https://www.balena.io/etcher/',
		description: 'Flash OS images to SD cards & USB drives, safely and easily.\n',
		tags: ['Util', 'Open Source'],
		platforms: [
			'Linux',
			'Windows',
			'macOS'
		]
	},
	{
		name: 'VLC Media player',
		url: 'https://www.videolan.org/',
		description: 'A free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.\n',
		tags: ['Util', 'Open Source'],
		platforms: [
			'Linux',
			'Windows',
			'macOS'
		]
	},
	{
		name: "Open Office",
		description: "A Free and Open Productivity Suite",
		url: 'https://www.openoffice.org/download/index.html',
		tags: ["Productivity", "Open Source"],
		platforms: [
			'Linux',
			'Windows',
			'macOS'
		]
	}
];

export const get: RequestHandler = () => {
	return {
		body: downloads
	};
};