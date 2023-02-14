import z from "zod";
import scriptTypeSchema from "./ScriptType";

export type ScriptSchema = z.TypeOf<ReturnType<typeof scriptSchema>>;

export const scriptSchema = () => z.object({
	author: z.string(),
	type: scriptTypeSchema(),
	displayName: z.string(),
	identifier: z.string()
});

export const scriptSubmitSchema = () => z.object({
	type: scriptTypeSchema(),
	displayName: z.string(),
	identifier: z.string()
});
