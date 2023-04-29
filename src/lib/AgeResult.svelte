<script>
  export let years = '--';
  export let months = '--';
  export let days = '--';
</script>

<div class="results">
  <p class="result__years"><span>{ years }</span>years</p>
  <p class="result__months"><span>{ months }</span>months</p>
  <p class="result__days"><span>{ days }</span>days</p>
</div>

<style>
  .results {
    margin-top: 40px;
    padding: 10px 15px;
  }

  .result__years, .result__months, .result__days {
    font-size: 48px;
    font-weight: 800;
    font-style: italic;
    letter-spacing: 0.01em;
    margin-top: -15px;
    margin-bottom: -15px;
  }
  
  .result__years > span, .result__months > span, .result__days > span {
    color: var(--purple);
    letter-spacing: 0.2em;
  }
  
  @media screen and (min-width: 1024px) {
    .results {
      margin-top: 0;
      padding: 20px 28px;
    }
    
    .result__years, .result__months, .result__days {
      font-size: 96px;
      margin-top: -28px;
      margin-bottom: -28px;
    }
  }
</style>
