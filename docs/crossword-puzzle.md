---
id: crossword-puzzle
title: Crossword Puzzle
sidebar_label: Crossword Puzzle
---

**A crossword is a word puzzle** that usually takes the form of a square or a rectangular grid of white-and black-shaded squares. The game's goal is to fill the white squares with letters, forming words or phrases, by solving clues, which lead to the answers. In languages that are written left-to-right, the answer words and phrases are placed in the grid from left to right and from top to bottom. The shaded squares are used to separate the words or phrases.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/CrosswordUSA.svg/500px-CrosswordUSA.svg.png" width="200" height="200"/>

## A basic crossword-solving algorithm

A large part of the research on this project centered around the creation and refinement of the following algorithm for filling in a crossword grid (under the character-based model described above).  It takes as input a grid and  a word list; with minor variations, the same algorithm can be used either to solve a puzzle (in which case the grid is input with "stops" already in place, and the word list is (possibly a subset of) the dictionary) or to generate a puzzle solution (in which case the grid is initially empty and the word list contains the words to fill into the grid).

Note that a subgrid, as used in the algorithm, is a section of the grid space whose upper left square is the first letter of both its horizontal and vertical words; the subgrid then extends to all squares which are part of words which intersect either the horizontal or vertical word starting from the initial position. 
 

- Initialization: Set all the squares in the grid to their unconstrained state, that is all character values are possible.  (For solving purposes, this is A-Z; for generation, A-Z plus a stop indicator, such as NUL.)
- Repeat the following for each subgrid:
  -  For each of the possible character values of the initial (upper left) position, get all words from the word list which begin with the given character, and which satisfy the length constraints for the down and across words, respectively.  If there is not at least one word which satisfies the length and initial letter constraints for each of the two words (that is, there must be at least one valid across word and one valid down word), move to the next character value.  Otherwise:
        - "Write in" each of the words which were determined to meet the across criteria into the grid, moving righward from the initial cell as you go.  For each character written, maintain a reference to what word caused it to be written in.
        - If at any point a letter cannot be written into a cell because it is no longer a possible value for the cell, remove the current word from the grid and proceed to the next word.
        - Repeat the above two steps for the down words, starting from the initial position and moving downward.
    - Move to the cell to the right of the initial position.  For each character in the list of possible values, find all words which meet the length and initial letter constraints (i.e. start with the correct letter and are the proper length).  Call this list words.
        - If words is empty, delete the current character from the list of possible values.  Propagate the deletion backwards and forwards in the grid by removing the word which caused the deleted character to be written in.  Repeat as necessary; if a cell ever loses all of its possible values, terminate the algorithm and return FAIL.
        - "Write in" each of the words, as above.  If a letter must be written into a cell for which it is not a possible value, remove the current word and propagate the changes.
Repeat the above step for each row of the grid, for the length of the initial down word.  This should completely traverse the subgrid.
- When all subgrids have been filled in, the grid should contain a representation of all possible solutions.  Output either one or all possible solutions using one of any number  of algorithms for enumerating the solutions.  (The grid consists of a collapsed tree of possible solutions, with each cell representing all the possible values for that cell.)

## Example

A 10 x 10 Crossword grid is provided, along with a set of words (or names of places) which need to be filled into the grid. The cells in the grid are initially, either + signs or – signs. Cells marked with a ‘+’ have to be left as they are. Cells marked with a ‘-‘ need to be filled up with an appropriate character.
You are also given an array of words that need to be filled in Crossword grid.

```cpp
#include <bits/stdc++.h> 
using namespace std; 

// ways are to calculate the number of 
// possible ways to fill the grid 
int ways = 0; 

// this function is used to print 
// the resultant matrix 
void printMatrix(vector<string>& matrix, int n) 
{ 
	for (int i = 0; i < n; i++) 
		cout << matrix[i] << endl; 
} 

// this function checks for the current word 
// if it can be placed horizontally or not 
// x -> it represent index of row 
// y -> it represent index of column 
// currentWord -> it represent the 
// current word in word array 
vector<string> checkHorizontal(int x, int y, 
							vector<string> matrix, 
							string currentWord) 
{ 
	int n = currentWord.length(); 

	for (int i = 0; i < n; i++) { 
		if (matrix[x][y + i] == '#' || 
			matrix[x][y + i] == currentWord[i]) { 
			matrix[x][y + i] = currentWord[i]; 
		} 
		else { 

			// this shows that word cannot 
			// be placed horizontally 
			matrix[0][0] = '@'; 
			return matrix; 
		} 
	} 

	return matrix; 
} 

// this function checks for the current word 
// if it can be placed vertically or not 
// x -> it represent index of row 
// y -> it represent index of column 
// currentWord -> it represent the 
// current word in word array 
vector<string> checkVertical(int x, int y, 
							vector<string> matrix, 
							string currentWord) 
{ 
	int n = currentWord.length(); 

	for (int i = 0; i < n; i++) { 
		if (matrix[x + i][y] == '#' || 
			matrix[x + i][y] == currentWord[i]) { 
			matrix[x + i][y] = currentWord[i]; 
		} 
		else { 

			// this shows that word 
			// cannot be placed vertically 
			matrix[0][0] = '@'; 
			return matrix; 
		} 
	} 
	return matrix; 
} 

// this function recursively checks for every 
// word that can align vertically in one loop 
// and in another loop it checks for those words 
// that can align horizontally words -> it 
// contains all the words to fill in a crossword 
// puzzle matrix -> it contain the current 
// state of crossword index -> it represent 
// the index of current word n -> it represent 
// the length of row or column of the square matrix 
void solvePuzzle(vector<string>& words, 
				vector<string> matrix, 
				int index, int n) 
{ 
	if (index < words.size()) { 
		string currentWord = words[index]; 
		int maxLen = n - currentWord.length(); 

		// loop to check the words that can align vertically. 
		for (int i = 0; i < n; i++) { 
			for (int j = 0; j <= maxLen; j++) { 
				vector<string> temp = checkVertical(j, i, 
										matrix, currentWord); 

				if (temp[0][0] != '@') { 
					solvePuzzle(words, temp, index + 1, n); 
				} 
			} 
		} 

		// loop to check the words that can align horizontally. 
		for (int i = 0; i < n; i++) { 
			for (int j = 0; j <= maxLen; j++) { 
				vector<string> temp = checkHorizontal(i, j, 
									matrix, currentWord); 

				if (temp[0][0] != '@') { 
					solvePuzzle(words, temp, index + 1, n); 
				} 
			} 
		} 
	} 
	else { 
		// calling of print function to 
		// print the crossword puzzle 
		cout << (ways + 1) << " way to solve the puzzle "
			<< endl; 
		printMatrix(matrix, n); 
		cout << endl; 

		// increase the ways 
		ways++; 
		return; 
	} 
} 

// Driver Code 
int main() 
{ 
	// length of grid 
	int n1 = 10; 

	// matrix to hold the grid of puzzle 
	vector<string> matrix; 

	// take input of puzzle in matrix 
	// input of grid of size n1 x n1 
	matrix.push_back("*#********"); 
	matrix.push_back("*#********"); 
	matrix.push_back("*#****#***"); 
	matrix.push_back("*##***##**"); 
	matrix.push_back("*#****#***"); 
	matrix.push_back("*#****#***"); 
	matrix.push_back("*#****#***"); 
	matrix.push_back("*#*######*"); 
	matrix.push_back("*#********"); 
	matrix.push_back("***#######"); 

	vector<string> words; 

	// the words matrix will hold all 
	// the words need to be filled in the grid 
	words.push_back("PUNJAB"); 
	words.push_back("JHARKHAND"); 
	words.push_back("MIZORAM"); 
	words.push_back("MUMBAI"); 

	// initialize the number of ways 
	// to solve the puzzle to zero 
	ways = 0; 

	// recursive function to solve the puzzle 
	// Here 0 is the initial index of words array 
	// n1 is length of grid 
	solvePuzzle(words, matrix, 0, n1); 
	cout << "Number of ways to fill the grid is "
		<< ways << endl; 

	return 0; 
} 
```

## Implementations

| | Language | Link |
|:-: | :-: | :-: |
| <img src="https://cdn.jsdelivr.net/npm/@programming-languages-logos/java@0.0.0/java.svg" width="30px"> | Java | [CrosswordPuzzle.java](https://github.com/AllAlgorithms/java/blob/master/backtracking/CrosswordPuzzle.java) |
| <img src="https://cdn.jsdelivr.net/npm/@programming-languages-logos/cpp@0.0.2/cpp.svg" width="30px"> | C++ | [crossword_puzzle.cpp](https://github.com/AllAlgorithms/cpp/blob/master/backtracking/crossword_puzzle.cpp) |

## Videos

- [CrossWord Generator in C++ (part 1)](https://www.youtube.com/watch?v=L9vjKr1TYec)
- [CrossWord Generator in C++ (part 2)](https://www.youtube.com/watch?v=j7yAYBJnc58)
- [Stackathon Presentation: TRegex: A Regex Crossword Solver](https://www.youtube.com/watch?v=qo_3rtEZdKg)

## Helpful Links

- University of Columbia paper: [Crossword Puzzles as Constraint Satisfaction Problems](http://www.cs.columbia.edu/~evs/ais/finalprojs/steinthal/)
- StackOverflow: [Algorithm to generate a crossword](https://stackoverflow.com/questions/943113/algorithm-to-generate-a-crossword)
- Game mixed crossword puzzle with Regular Expressions: [RegexCrossword.com](https://regexcrossword.com/) ---
id: crossword-puzzle
title: Crossword puzzle
sidebar_label: Crossword puzzle
---

[Open a pull request](https://github.com/AllAlgorithms/algorithms/tree/master/docs/crossword-puzzle.md) to add the content for this algorithm.
