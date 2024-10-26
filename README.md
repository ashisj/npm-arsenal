# How to setup monorepo

1. First, initialize your repository and set up the base files:

```bash
mkdir my-npm-packages
cd my-npm-packages
git init
npm init -y
```

2. Install necessary development dependencies:

```bash
npm install -D lerna typescript @types/node
npx lerna init
```

3. Here's the root package.json configuration:

```json
{
  "name": "root",
  "private": true,
  "workspaces": ["packages/*"],
  "scripts": {
    "build": "lerna run build",
    "test": "lerna run test",
    "publish": "lerna publish"
  },
  "devDependencies": {
    "lerna": "^7.0.0",
    "typescript": "^5.0.0",
    "@types/node": "^18.0.0"
  }
}
```

4. Create a base TypeScript configuration (tsconfig.base.json):

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## package project setup

1. First, create your package directory and initialize it:

```bash
mkdir string-utils
cd string-utils
npm init -y
```

2. Install necessary development dependencies:

```bash
npm install --save-dev typescript @types/node jest @types/jest ts-jest
```

3. Create a package.json file:

```json
{
  "name": "@your-scope/string-utils",
  "version": "1.0.0",
  "description": "Simple string manipulation utilities",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "tsc",
    "test": "jest",
    "prepare": "npm run build",
    "prepublishOnly": "npm test"
  },
  "keywords": ["string", "utilities", "typescript"],
  "author": "Your Name",
  "license": "MIT",
  "devDependencies": {
    "@types/jest": "^29.0.0",
    "@types/node": "^18.0.0",
    "jest": "^29.0.0",
    "ts-jest": "^29.0.0",
    "typescript": "^5.0.0"
  }
}
```

4. Create a tsconfig.json file:

```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/__tests__/*"]
}
```

5. Create a Jest configuration file jest.config.js:

```js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
};
```

6. Create a test file **tests**/index.test.ts

```js
import { capitalizeWords, reverseString, countWords } from '../src/index';

describe('String Utils', () => {
  describe('capitalizeWords', () => {
    it('should capitalize each word in a string', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('HELLO WORLD')).toBe('Hello World');
    });
  });

  describe('reverseString', () => {
    it('should reverse a string', () => {
      expect(reverseString('hello')).toBe('olleh');
    });
  });

  describe('countWords', () => {
    it('should count words in a string', () => {
      expect(countWords('hello world')).toBe(2);
      expect(countWords('   hello   world   ')).toBe(2);
    });
  });
});
```

7. Build and test your package:
```bash
npm run build
npm test
```
8. Create README.md about this package

9. Publish your package:
```bash
npm publish --access public
```

## Publish as private package:
1. Publish your package
```bash
npm publish --access restricted
```

2. To give access to team members:

```bash
# Create a team (if you haven't)
npm team create @your-scope/developers

# Add members to the team
npm team add @your-scope/developers username

# Grant team access to the package
npm access grant read @your-scope/developers @your-scope/string-utils
```
 
3. Managing package access:
```bash
# List all packages under your scope
npm search --scope=@your-scope

# See who has access to your package
npm access ls-collaborators @your-scope/string-utils

# Remove access
npm access revoke <user> @your-scope/string-utils
```

4. Creating a .npmrc file for the project:
```ini
@your-scope:registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

5. If you're using CI/CD, you'll need to set up the NPM_TOKEN in your environment variables.
To update the package:

## How TO Publish package in Mono repo

```bash
# Update version
npm version patch  # or minor or major

# Publish update
npm publish --access restricted

```

### Publish using Lerna:

```bash
npx lerna publish
```

### Making new changes:

```bash
# Create a new package
mkdir packages/new-package
cd packages/new-package
npm init -y

# Update multiple packages
npx lerna version
npx lerna publish
```

### Running scripts across all packages:

```bash
npx lerna run build  # Builds all packages
npx lerna run test   # Tests all packages
```

### Publishing specific packages:
```bash
# Publish a single package
cd packages/package-name
npm publish

# Or using Lerna
npx lerna publish --scope=@your-scope/package-name
```
