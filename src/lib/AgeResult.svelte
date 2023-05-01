<script>
  export let years = '--';
  export let months = '--';
  export let days = '--';

  import { CountUp } from 'countup.js';
  import { afterUpdate } from 'svelte';

  let yearsEl;
  let yearsCount;
  let monthsEl;
  let monthsCount;
  let daysEl;
  let daysCount;

  afterUpdate(() => {
    if (isNaN(years) || isNaN(months) || isNaN(days)) {
      return;
    }
    if (!yearsCount) {
      yearsCount = new CountUp(yearsEl, years);
      yearsCount.start();
    }
    yearsCount.update(years);
    if (!monthsCount) {
      monthsCount = new CountUp(monthsEl, months);
      monthsCount.start();
    }
    monthsCount.update(months);
    if (!daysCount) {
      daysCount = new CountUp(daysEl, days);
      daysCount.start();
    }
    daysCount.update(days);
  });
</script>

<ol class="results">
  <li class="result__years" bind:this={yearsEl}>{years}</li>
  <li class="result__months" bind:this={monthsEl}>{months}</li>
  <li class="result__days" bind:this={daysEl}>{days}</li>
</ol>

<style>
  .results {
    margin-top: 40px;
    padding: 10px 15px;
    list-style: none;
  }

  .result__years, .result__months, .result__days {
    font-size: 52px;
    font-weight: 800;
    font-style: italic;
    letter-spacing: 0.01em;
    color: var(--purple);
    margin-top: -15px;
    margin-bottom: -15px;
  }

  .result__years::after, .result__months::after, .result__days::after {
    color: var(--off-black);
    padding-left: 5px;
  }

  .result__years::after {
    content: 'years';
  }

  .result__months::after {
    content: 'months';  
  }

  .result__days::after {
    content: 'days';
  }
  
  @media screen and (min-width: 1024px) {
    .results {
      margin-top: 0;
      padding: 50px 28px;
    }
    
    .result__years, .result__months, .result__days {
      font-size: 96px;
      margin-top: -28px;
      margin-bottom: -28px;
      letter-spacing: 0.05em;
    }
  }
</style>
