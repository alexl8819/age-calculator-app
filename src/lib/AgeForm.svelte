<script>
  import { createEventDispatcher } from 'svelte';

  import ArrowIcon from '../assets/images/icon-arrow.svg';

  const dispatch = createEventDispatcher();

  const handleKeypress = (maxLength) => {
    return (e) => {
      if (e.keyCode !== 37 && e.keyCode !== 39 && e.keyCode !== 8 && e.keyCode !== 9 && e.keyCode !== ' ' && e.code.includes('Key')) {
        e.preventDefault();
      } else if (e.target.value.length >= maxLength && e.keyCode !== 9 && e.keyCode !== 37 && e.keyCode !== 39 && e.keyCode !== 8 && e.keyCode !== ' ') {
        e.preventDefault();
      }
    }
  }

  const handleInput = (field) => {
    return ({ target }) => {
      if (field === 'year') {
        year = target.value;
      } else if (field === 'month') {
        month = target.value;
      } else if (field === 'day') {
        day = target.value;
      }
    }
  }

  const submitDate = (e) => {
    const parsedDay = parseInt(day);
    if (isNaN(parsedDay) || parsedDay < 1 || parsedDay > 31) { // TODO: error
      return;
    }
    const parsedMonth = parseInt(month);
    if (isNaN(parsedMonth) || parsedMonth < 1 || parsedMonth > 12) { // TODO: error
      return;
    }
    const parsedYear = parseInt(year);
    if (isNaN(parsedYear) || parsedYear < 1000 || parsedMonth > currentYear) { // TODO: error
      return;
    }
    dispatch('change', {
      year,
      month,
      day
    });
  }

  const currentYear = new Date().getFullYear();

  let year = '';
  let month = '';
  let day = '';
  let error = '';
</script>

<form name="ageCalculator" class="calculator__form" on:submit|preventDefault={(e) => submitDate()} novalidate>
  <fieldset class="form__fieldset">
    <legend class="sr-only">Enter age date:</legend>
    <div class="form__field">
      <input type="number" id="day" name="day" class="field__day" min="1" step="1" placeholder="DD" on:input={handleInput('day')} on:keydown={handleKeypress(2)} required />
      <label for="day" class="field__label">Day</label>
      <p></p>
    </div>
    <div class="form__field">
      <input type="number" id="month" name="month" class="field__month" min="1" step="1" placeholder="MM" on:input={handleInput('month')} on:keydown={handleKeypress(2)} required />
      <label for="month" class="field__label">Month</label>
      <p></p>
    </div>
    <div class="form__field">
      <input type="number" id="year" name="year" class="field__year" min="1000" max="2023" step="1" placeholder="YYYY" on:input={handleInput('year')} on:keydown={handleKeypress(4)} required />
      <label for="year" class="field__label">Year</label>
      <p></p>
    </div>
 </fieldset>
 <button type="submit" class="form__submit" disabled={!year.length || !month.length || !day.length}>
   <img class="submit__icon" src={ArrowIcon} alt="arrow icon" />
 </button>
</form>

<style>
  .calculator__form {
    display: flex;
    flex-direction: column;
    height: 130px;
    margin: 15px;
    border-bottom: 1px solid var(--light-grey);
  }

  .form__fieldset {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
  }

  .form__field {
    display: flex;
    flex-direction: column-reverse;
    width: 33.33%;
  }

  .field__label {
    letter-spacing: 0.2em;
    font-size: 0.75rem;
    color: var(--smokey-grey);
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  .field__day, .field__month, .field__year {
    appearance: textfield;
    padding: 10px;
    border: 1px solid var(--smokey-grey);
    border-radius: 8px;
    font-size: 16px;
    width: 70px;
  }

  .form__field input[type=number]::-webkit-inner-spin-button, 
  .form__field input[type=number]::-webkit-outer-spin-button,
  .form__field input[type=number] { 
    -webkit-appearance: none;
    appearance: textfield; 
    margin: 0;
  }
      
  .form__field input[type=number]:invalid {
    border: 1px solid var(--light-red);
  }

  .form__field input[type=number]:invalid + .field__label {
    color: var(--light-red);
  }

  .form__submit {
    display: flex;
    align-self: center;
    border: none;
    width: 56px;
    padding: 15px;
    border-radius: 999px;
    background-color: var(--purple);
    cursor: pointer;
  }

  .form__submit:disabled {
    cursor: not-allowed;
  }
</style>
