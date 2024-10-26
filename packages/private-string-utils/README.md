# String Utils

A simple TypeScript package for string manipulation.

## Installation

```bash
npm install @ashisj/private-string-utils
```

## USage

```ts
import { capitalizeWords, reverseString, countWords } from '@ashisj/string-utils';

// Capitalize words
console.log(capitalizeWords('hello world')); // Output: "Hello World"

// Reverse string
console.log(reverseString('hello')); // Output: "olleh"

// Count words
console.log(countWords('hello world')); // Output: 2
```

## API

__capitalizeWords(str: string): string__

_Capitalizes the first letter of each word in a string_

__reverseString(str: string): string__

_Reverses all characters in a string._

__countWords(str: string): number__

_Counts the number of words in a string._