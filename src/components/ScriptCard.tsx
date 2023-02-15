import type ScriptType from "../ts/ScriptType";

export interface Props {
	name: string;
	description: string;
	identifier: string; //* you add <a href={`/${identifier}/`}>goofy</a> idk where to put it.
	type: ScriptType;
}

export default function ScriptCard({ name, description, identifier, type }: Props) {

	return (
		<div class="w-[80%] sm:w-1/2 md:w-1/5 flex flex-col cursor-pointer">
			<div class="dark:bg-slate-600 bg-slate-100 rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
				<div class="p-4 flex-1 flex flex-col" style="">
					<h1 class="mb-2 text-md font-bold">{name}</h1>
					<div class="mb-4 text-grey-darker text-sm flex-1">
						<p>{description}</p>
					</div>

					<div class="flex flex-wrap space-x-2">
						<span class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
							{identifier}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
