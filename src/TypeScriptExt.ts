export class TypeScriptExt {
	static mapValues<K, V, R>(
		map: Map<K, V>,
		fn: (value: V, key: K) => R
	): Map<K, R> {
		const newMap = new Map<K, R>();
		map.forEach((value, key) => {
			newMap.set(key, fn(value, key));
		});
		return newMap;
	}
}
