import { screen, render, waitFor, fireEvent } from '@testing-library/svelte';
import AgeForm from './AgeForm';

describe('AgeForm', () => {
  test('Should display an error in day field when entering a value greater than 31', async () => {
    render(AgeForm);

    const ageDayInputField = screen.getByPlaceholderText('DD');
    
    await fireEvent.input(ageDayInputField, { target: { value: '77' }});

    const submitBtn = screen.getByRole('button', { name: 'calculate' });
    
    await fireEvent.click(submitBtn);

    await waitFor(() => expect(screen.getByText('Must be a valid day')).toHaveTextContent('Must be a valid day'));
  });
});

