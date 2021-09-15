export const zip = (a: Array<any>, b: Array<any>) =>
	Array.from(Array(Math.min(b.length, a.length)), (_, i) => [a[i], b[i]]);
