<script>
  const handleKeypress (maxLength) {
    return (e) => {
      if (e.keyCode !== 37 && e.keyCode !== 39 && e.keyCode !== 8 && e.keyCode !== ' ' && e.code.includes('Key')) {
        e.preventDefault();
      } else if (e.target.value.length >= maxLength && e.keyCode !== 37 && e.keyCode !== 39 && e.keyCode !== 8 && e.keyCode !== ' ') {
        e.preventDefault();
      }
    }
  }
</script>

<form name="ageCalculator" class="calculator__form">
  <fieldset class="form__fieldset">
    <legend class="sr-only">Enter age date:</legend>
      <div>
        <input type="number" id="day" name="day" class="form__day" min="1" step="1" placeholder="DD" required />
        <label for="day" class="form__label">Day</label>
      </div>
      <div>
        <input type="number" id="month" name="month" class="form__month" min="1" step="1" placeholder="MM" required />
        <label for="month" class="form__label">Month</label>
      </div>
      <div>
        <input type="number" id="year" name="year" class="form__year" min="1000" max="2023" step="1" placeholder="YYYY" required />
        <label for="year" class="form__label">Year</label>
      </div>
 </fieldset>
 <button type="submit" class="form__submit">
   <img src="./assets/images/icon-arrow.svg" alt="arrow icon" />
 </button>
</form>

<style>
  .calculator__form {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }

  .form__fieldset {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none
  }

  div {
    display: flex;
    flex-direction: column-reverse;
    width: 33.33%;
  }

  .form__day, .form__month, .form__year {
    appearance: textfield;
    padding: 10px;
    border-radius: 8px;
  }
      
  .form__day:empty, .form__month:empty, .form__year:empty {
    border: 1px solid red;
  }

  .form__day, .form__month {
    width: 85px;
  }

  .form__year {
    width: 85px;
  }

  .form__submit {
    display: flex;
    align-self: center;
    width: 56px;
    border-radius: 999px;
  }
</style>
