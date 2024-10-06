export {};

declare global {
	type StringMap<TValue, TKey extends string | number | symbol = string> = {
		[key in TKey]: TValue;
	};

	type OptionalStringMap<TValue, TKey extends string | number | symbol = string> = {
		[key in TKey]?: TValue;
	};

	type DeepPartial<T> = T extends object
		? {
				[P in keyof T]?: DeepPartial<T[P]>;
			}
		: T;
}
