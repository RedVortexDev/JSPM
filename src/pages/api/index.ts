import type { APIRoute } from 'astro';
import makeApiResponse from '../../ts/APIResponse';

export const get: APIRoute = async () => {
	return makeApiResponse(true, "Hello World!");
}

export const post: APIRoute = async () => {
	return makeApiResponse(false, "UNIMPLEMENTED");
}
