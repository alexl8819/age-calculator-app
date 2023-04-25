<script>
  import { createEventDispatcher } from 'svelte';

  import ArrowIcon from '../assets/images/icon-arrow.svg';

  const dispatch = createEventDispatcher();

  const handleKeypress = (maxLength) => {
    return (e) => {
      if (e.keyCode !== 37 && e.keyCode !== 39 && e.keyCode !== 8 && e.keyCode !== ' ' && e.code.includes('Key')) {
        e.preventDefault();
      } else if (e.target.value.length >= maxLength && e.keyCode !== 37 && e.keyCode !== 39 && e.keyCode !== 8 && e.keyCode !== ' ') {
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

  const submitDate = () => {
    dispatch('change', {
      year,
      month,
      day
    });
  }

  let year = '';
  let month = '';
  let day = '';
</script>

<form name="ageCalculator" class="calculator__form" on:submit|preventDefault={() => submitDate()}>
  <fieldset class="form__fieldset">
    <legend class="sr-only">Enter age date:</legend>
    <div class="form__field">
      <input type="number" id="day" name="day" class="form__day" min="1" step="1" placeholder="DD" on:input={handleInput('day')} on:keydown={handleKeypress(2)} required />
      <label for="day" class="form__label">Day</label>
      <p></p>
    </div>
    <div class="form__field">
      <input type="number" id="month" name="month" class="form__month" min="1" step="1" placeholder="MM" on:input={handleInput('month')} on:keydown={handleKeypress(2)} required />
      <label for="month" class="form__label">Month</label>
      <p></p>
    </div>
    <div class="form__field">
      <input type="number" id="year" name="year" class="form__year" min="1000" max="2023" step="1" placeholder="YYYY" on:input={handleInput('year')} on:keydown={handleKeypress(4)} required />
      <label for="year" class="form__label">Year</label>
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
    margin-top: 15px;
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

  .form__day, .form__month, .form__year {
    appearance: textfield;
    padding: 10px;
    border: 1px solid var(--smokey-grey);
    border-radius: 8px;
    font-size: 16px;
  }
      
  /*.form__day:empty, .form__month:empty, .form__year:empty {
    border: 1px solid var(--light-red);
  }*/

  .form__day, .form__month {
    width: 85px;
  }

  .form__year {
    width: 85px;
  }

  .form__submit {
    display: flex;
    align-self: center;
    border: none;
    width: 56px;
    padding: 10px;
    border-radius: 999px;
    background-color: var(--purple);
    cursor: pointer;
  }

  .form__submit:disabled {
    cursor: not-allowed;
  }
</style>
