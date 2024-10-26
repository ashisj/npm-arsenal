import { capitalizeWords, reverseString, countWords } from '../src';

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