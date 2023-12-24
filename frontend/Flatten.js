function flatten(value) {
	//flatten nested array
	const isArray = Array.isArray(value);
	const isObject = typeof value === "object" && !Array.isArray(value);

	if ((!isArray && !isObject) || value === null || value === undefined) {
		return value;
	}

	if (isArray) {
		return flattenArray(value);
	}

	if (isObject) {
		return flattenObject(value);
	}
}

const flattenArray = (arr) => {
	const result = [];
	arr.forEach((item) => {
		if (Array.isArray(item)) {
			result.push(...flattenArray(item));
		} else if (typeof value === "object") {
			result.push(flattenObject(item));
		} else {
			result.push(flatten(item));
		}
	});
	return result;
};

const flattenObject = (obj) => {
	let newObj = {};
	for (const [key, value] of Object.entries(obj)) {
		if (Array.isArray(value)) {
			newObj[key] = [...flattenArray(value)];
		} else if (typeof value === "object" && value !== null) {
			Object.assign(newObj, flatten(value));
		} else {
			newObj[key] = flatten(value);
		}
	}
	return newObj;
};
console.log(
	"answer > ",
	flatten({ a: 1, b: [2, 3, { c: 4, d: [5] }], e: { f: 6 } })
);
