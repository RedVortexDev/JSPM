import type { APIRoute } from 'astro';
import makeApiResponse from '../../ts/APIResponse';
import apiRequestSchema from '../../ts/APIRequest';
import { scriptSubmitSchema } from '../../ts/ScriptSchema';

export const get: APIRoute = async () => {
	return makeApiResponse(true, "Hello World!");
}

export const post: APIRoute = async ({ request }) => {
	try {
		const req = apiRequestSchema(scriptSubmitSchema()).parse(await request.json());
		console.table(req.data);
		return makeApiResponse(true, "(unimplemented)");
	} catch (e) {
		return makeApiResponse(false, e);
	}
}
