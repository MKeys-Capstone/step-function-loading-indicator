import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCaseCamel',
})
export class TitleCaseCamelPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    // Insert spaces before uppercase letters and apply title case
    const formattedString = value
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // Add space between camelCase words
      .split(' ') // Split words by space
      .map((word) => this.titleCase(word)) // Apply title case to each word
      .join(' '); // Join words with space

    return formattedString;
  }

  // Helper function to capitalize the first letter of each word and lowercase the rest
  private titleCase(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}
