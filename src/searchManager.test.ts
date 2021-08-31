import { SearchManager, SearchType } from "./searchManager";

const cases = [
	{ a: [5], b: 4, expected: -1 }
	, { a: [1, 5, 6, 8, 10, 26], b: 26, expected: 5 }
	, { a: [1, 5, 8, 10, 26], b: 1, expected: 0 }
	, { a: [1, 5, 5, 10, 26], b: 5, expected: 1 }
	, { a: [], b: 10, expected: -1 }
];

const searcher = new SearchManager();

describe("linear search", () => {
	test.each(cases)('SearchManager._linearSearch($a, $b)', ({a, b, expected}) => {
		expect(searcher.searchIndex(a, b, SearchType.LINEAR)).toBe(expected);
	})
});

// describe("binary search", () => {
// 	test.each(cases)('SearchManager._binarySearch($a, $b)', ({a, b, expected}) => {
// 		expect(searcher.binarySearch(a, b, SearchType.LINEAR)).toBe(expected);
// 	})
// });