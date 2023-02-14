import z from "zod";

export type ScriptType = z.TypeOf<ReturnType<typeof scriptTypeSchema>>;

const scriptTypeSchema = () => z.union([
	z.literal("library"),
	z.literal("feature")
]);

export default scriptTypeSchema;
