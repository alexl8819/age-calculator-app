import { screen, render, waitFor, fireEvent } from '@testing-library/svelte';
import App from './App';

describe('App', () => {
  test('Filling in age date 12/15/1990 should render the value 33 in years field', async () => {
    render(App);

    const ageDayInputField = screen.getByPlaceholderText('DD');
    
    await fireEvent.input(ageDayInputField, { target: { value: '15' }});

    const ageMonthInputField = screen.getByPlaceholderText('MM');

    await fireEvent.input(ageMonthInputField, { target: { value: '12' }});

    const ageYearInputField = screen.getByPlaceholderText('YYYY');

    await fireEvent.input(ageYearInputField, { target: { value: '1990' }});
    
    const submitBtn = screen.getByRole('button', { name: 'calculate' });
    
    await fireEvent.click(submitBtn);

    await waitFor(() => expect(screen.getByText('33')).toHaveTextContent('33'));
  });
});
