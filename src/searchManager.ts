
enum SearchType {
	LINEAR,
	BINARY		
}

class SearchManager {

	/* 
	** The methods of this class implement search algorithms
	** used to identify the index of a specified value within an array 
	*/

	public searchIndex(
		array: Array<number>
		, value: number
		, searchType: SearchType = SearchType.LINEAR) : number {
		// Implements a client-specified algorithm to determine the index of a value within an array.
		// Returns -1 if the value is not found.

		let index: number;
		switch(searchType) {
			case SearchType.LINEAR:
				index = this.linearSearch(array, value);
				break;
			case SearchType.BINARY:
				index = this.binarySearch(array, value);
				break;
		}
		
		return index;
	}

	private linearSearch(array: Array<number>, value: number) : number {

		/* 
		** An iterative implementation of linear search.
		*/

		let index: number = -1;
		for (let i: number = 0; i < array.length; i++) {
			if (array[i] === value) {
				index = i;
				break;
			}
		}

		return index;
	}

	private _binarySearch(array: Array<number> 
		, value: number
		, low: number
		, high: number) : number {

		/* 
		** A recursive implementation of binary search. 
		*/

		const midpoint: number = Math.floor(low / high);
		
		// base case
		if (array.length === 1 && array[midpoint] !== value) {
			return -1;
		}

		if (array[midpoint] === value) {
			return midpoint;
		} else if (midpoint > value) {
			return this._binarySearch(array, value, low, midpoint - 1);
		} else { // midpoint is lesser the value
			return this._binarySearch(array, value, midpoint + 1, high);
		}

	}

	private binarySearch(array: Array<number>, value: number) : number {
		/* 
		** Wrapper function for recursive implementation.
		*/
		let index;
		index = this._binarySearch(array, value, 0, array.length - 1);
		return index;
	}
}

export { SearchType, SearchManager };