enum SortType {
	BUBBLE,
	SELECTION,
	INSERTION,
	QUICK, 
	MERGE
};

class SortManager {

	public sortArray(array: Array<number>, sortType: SortType) : Array<number> {
		return array;		
	}

	private bubbleSort(array: Array<number>) : Array<number> {
		return array;		
	}

	private selectionSort(array: Array<number>) : Array<number> {
		return array;		
	}

	private insertionSort(array: Array<number>) : Array<number> {
		return array;		
	}

	private partition(array: Array<number>) : Array<any> {
		// Returns the array at index 0 and the left pointer at index 1.
		const results: any = [];
		return results;			
	}

	private quickSort(array: Array<number>) : Array<number> {
		return array;		
	}

	private mergeSort(array: Array<number>) : Array<number> {
		return array;		
	}
};


export { SortType };