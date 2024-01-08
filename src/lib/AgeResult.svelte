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

  const options = {
    duration: 1
  };

  afterUpdate(() => {
    if (isNaN(years) || isNaN(months) || isNaN(days)) {
      return;
    }
    if (!yearsCount) {
      yearsCount = new CountUp(yearsEl, years, options);
      yearsCount.start();
    }
    yearsCount.update(years);
    if (!monthsCount) {
      monthsCount = new CountUp(monthsEl, months, options);
      monthsCount.start();
    }
    monthsCount.update(months);
    if (!daysCount) {
      daysCount = new CountUp(daysEl, days, options);
      daysCount.start();
    }
    daysCount.update(days);
  });
</script>

<ol class="results">
  <li class="result__years">
    <div class="years__value" bind:this={yearsEl}>{years}</div> <span class="sr-only">years</span>
  </li>
  <li class="result__months">
    <div class="months__value" bind:this={monthsEl}>{months}</div> <span class="sr-only">months</span>
  </li>
  <li class="result__days">
    <div class="days__value" bind:this={daysEl}>{days}</div> <span class="sr-only">days</span>
  </li>
</ol>

<style>
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
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

  .years__value::after, .months__value::after, .days__value::after {
    color: var(--off-black);
    padding-left: 5px;
  }

  .years__value::after {
    content: 'years';
  }

  .months__value::after {
    content: 'months';  
  }

  .days__value::after {
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
