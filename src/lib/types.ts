/// The type of the metadata of a download
export type Download = {
	name: string;
	url: string;
	description: string;
	tags: string[];
	platforms: string[];
};

/// The type of the metadata of a tutorial
export type Tutorial = {
	name: string;
	tags: string[];
	description: string;
	slug: string;
};
