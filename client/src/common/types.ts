import enGB from "~/strings/strings-en-GB.json";

type PrependWithTypeChecks<T extends string, delimiter extends string = ""> = [T] extends [
	never | keyof T,
]
	? ""
	: `${delimiter}${T}`;

/**
 * Type used to generate a flattened union type based on a given type without taking into account values
 * @example
 * type SampleType = FlattenedObjectKeys<{ a: { b: "c" }, d: { e: { f: "g" } } }> // "a.b" | "d.e.f"
 */
type FlattenedObjectKeys<T extends object | string> = keyof T extends infer K
	? K extends string & keyof T // Ensure inferred type is a key of T
		? T[K] extends object
			? `${K}${PrependWithTypeChecks<FlattenedObjectKeys<T[K]>, ".">}` // Prepend dot when value of key is object
			: T[K] extends string
				? `${K}${PrependWithTypeChecks<FlattenedObjectKeys<T[K]>>}`
				: never
		: never
	: never;

export type TranslationKeys = FlattenedObjectKeys<typeof enGB>;
