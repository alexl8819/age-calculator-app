<script>
  export let years = '--';
  export let months = '--';
  export let days = '--';
</script>

<div class="results">
  <p class="result__years"><span>{ years }</span> years</p>
  <p class="result__months"><span>{ months }</span> months</p>
  <p class="result__days"><span>{ days }</span> days</p>
</div>

<style>
  .results {
    padding: 10px 15px;
  }

  .result__years, .result__months, .result__days {
    font-size: 48px;
    font-weight: 800;
    font-style: italic;
  }
  
  .result__years > span, .result__months > span, .result__days > span {
    color: var(--purple);
  }

</style>
