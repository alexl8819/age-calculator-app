import { screen, render } from '@testing-library/svelte';
import AgeResult from './AgeResult';

describe('AgeResult', () => {
  test('Should display all three fields (years, months and days) with default values as two dashes', () => {
    render(AgeResult);

    expect(screen.getAllByText('--')).toHaveLength(3);
  });

  // test('Should only display a numeric value when passed down', () => {});
});
