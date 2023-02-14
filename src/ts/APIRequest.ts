import z from "zod";

export type APIRequest<T> = {
	bearer: string;
	data: T;
}

const apiRequestSchema = <T extends z.ZodTypeAny>(data: T) => z.object({
	bearer: z.string(),
	data
});

export default apiRequestSchema;
