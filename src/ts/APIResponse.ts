export type APIResponse<OK extends boolean> = {
	success: OK,
} & (OK extends true ? { response?: any } : { error: string | "Something went wrong." })

export function apiResponseData<OK extends boolean>(success: OK, responseOrError: OK extends true ? keyof any | undefined : string) {
	return (!success ? { error: `${responseOrError.toString()}`, success } : { response: responseOrError, success }) as APIResponse<OK>;
}

export default function makeApiResponse(success: false, error: string): Response;
export default function makeApiResponse(success: true, response: keyof any): Response;
export default function makeApiResponse<OK extends boolean>(success: OK, responseOrError: OK extends true ? keyof any | undefined : string) {
	return new Response(`${JSON.stringify(apiResponseData(success, responseOrError))}`);
}
