<script>
  import dayjs from 'dayjs';
  import customParseFormat from 'dayjs/plugin/customParseFormat';
  import { createEventDispatcher } from 'svelte';

  import ArrowIcon from '../assets/images/icon-arrow.svg';
  
  const dispatch = createEventDispatcher();
  
  dayjs.extend(customParseFormat);

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
      invalidDate = false;
    }
  }

  const submitDate = () => {
    let calculatedAge;
    submitted = true;
    try {
      calculatedAge = calculateAgeSince(`${year}-${month}-${day}`);
    } catch (err) {
      console.log(err);
      invalidDate = true;
      return;
    }
    invalidDate = false;
    dispatch('change', {
      years: calculatedAge.years,
      months: calculatedAge.months,
      days: calculatedAge.days
    });
  }

  const calculateAgeSince = (date = '1984-09-24', since = dayjs()) => {
    let pastDate = dayjs(date, 'YYYY-MM-DD', true);

    if (!pastDate.isValid()) {
      throw new Error('Failed strict date check: Date is invalid or format is wrong');
    }

    if (pastDate.isAfter(since)) {
      throw new Error('Date cannot be later than todays date');
    }

    const yearsSince = since.diff(pastDate, 'years');
    pastDate = pastDate.add(yearsSince, 'year');
    const monthsSince = since.diff(pastDate, 'month');
    pastDate = pastDate.add(monthsSince, 'month');
    const daysSince = since.diff(pastDate, 'day');

    return Object.freeze({
      years: yearsSince,
      months: monthsSince,
      days: daysSince
    });
  }

  const currentYear = new Date().getFullYear();

  let year = '';
  
  $: isYearEmpty = year.length === 0 || /\s+/g.test(year);
  $: isValidYear = parseInt(year) >= 1000 && parseInt(year) <= currentYear;
  $: yearErrorMessage = isYearEmpty ? 'This field is required' : (!isValidYear ? 'Must be a valid year' : '');

  let month = '';

  $: isMonthEmpty = month.length === 0 || /\s+/g.test(month);
  $: isValidMonth = parseInt(month) >= 1 && parseInt(month) <= 12;
  $: monthErrorMessage = isMonthEmpty ? 'This field is required' : (!isValidMonth ? 'Must be a valid month' : '');

  let day = '';

  $: isDayEmpty = day.length === 0 || /\s+/g.test(day);
  $: isValidDay = parseInt(day) >= 1 && parseInt(day) <= 31;
  $: dayErrorMessage = isDayEmpty ? 'This field is required' : (!isValidDay ? 'Must be a valid day' : '');

  let submitted = false;
  let invalidDate = false;
  
  $: invalidErrorMessage = isValidYear && isValidMonth && isValidDay && invalidDate ? 'Must be a valid date' : '';
</script>

<form name="ageCalculator" class="calculator__form" on:submit|preventDefault={submitDate} noValidate>
  <fieldset class="form__fieldset">
    <legend class="sr-only">Enter age date:</legend>
    <div class="form__field">
      <p class="field__error">{ submitted ? (dayErrorMessage || invalidErrorMessage) : '' }</p>
      <input type="number" id="day" name="day" class={ submitted && (invalidDate || isDayEmpty || !isValidDay) ? 'field__day error' : 'field__day' } min="1" step="1" placeholder="DD" on:input={handleInput('day')} on:keydown={handleKeypress(2)} />
      <label for="day" class="field__label">Day</label>
    </div>
    <div class="form__field">
      <p class="field__error">{ submitted ? monthErrorMessage : '' }</p>
      <input type="number" id="month" name="month" class={ submitted && (invalidDate || isMonthEmpty || !isValidMonth) ? 'field__month error' : 'field__month' }  min="1" step="1" placeholder="MM" on:input={handleInput('month')} on:keydown={handleKeypress(2)} />
      <label for="month" class="field__label">Month</label>
    </div>
    <div class="form__field">
      <p class="field__error">{ submitted ? yearErrorMessage : ''}</p>
      <input type="number" id="year" name="year" class={ submitted && (invalidDate || isYearEmpty || !isValidYear) ? 'field__year error' : 'field__year' } min="1000" max={currentYear} step="1" placeholder="YYYY" on:input={handleInput('year')} on:keydown={handleKeypress(4)} />
      <label for="year" class="field__label">Year</label>
    </div>
  </fieldset>
  <button type="submit" class="form__submit">
    <img class="submit__icon" src={ArrowIcon} alt="arrow icon" />
  </button>
</form>

<style>
  .calculator__form {
    display: flex;
    flex-direction: column;
    height: 150px;
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
    padding: 0;
    padding-bottom: 15px;
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
    font-weight: 700;
    color: var(--smokey-grey);
    text-transform: uppercase;
    margin-bottom: 2px;
    padding-left: -5px;
  }

  .field__day, .field__month, .field__year {
    appearance: textfield;
    padding: 10px 13px;
    border: 1px solid var(--light-grey);
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    width: 85px;
    outline: none;
  }

  .field__error {
    visibility: visible;
    font-size: 0.6875rem;
    font-weight: 400;
    color: var(--light-red);
    font-style: italic;
    height: 15px;
    margin-top: 2px;
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button,
  input[type=number] { 
    -webkit-appearance: none;
    appearance: textfield; 
    margin: 0;
  }
      
  .error {
    border: 1px solid var(--light-red);
  }

  .error + .field__label {
    color: var(--light-red);
  }

  .form__submit {
    display: flex;
    align-self: center;
    border: none;
    width: 64px;
    padding: 20px;
    border-radius: 999px;
    background-color: var(--purple);
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    .calculator__form {
      margin: 10px;
    }

    .form__fieldset {
      max-width: 38rem;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .field__day, .field__month, .field__year {
      width: 155px;
      padding: 13px 20px;
      font-size: 28px;
    }

    .field__error {
      margin-top: 5px;
      font-size: 0.875rem;
    }

    .form__submit {
      align-self: end;
      width: 96px;
      padding: 25px;
      margin-top: -30px;
    }
  }
</style>
