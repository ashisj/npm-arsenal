export function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

export function countWords(str: string): number {
  return str.trim().split(/\s+/).length;
}
