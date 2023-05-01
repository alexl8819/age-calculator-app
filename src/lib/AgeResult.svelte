<script>
  export let years = '--';
  export let months = '--';
  export let days = '--';
</script>

<ul class="results">
  <li class="result__years"><span>{ years }</span>years</li>
  <li class="result__months"><span>{ months }</span>months</li>
  <li class="result__days"><span>{ days }</span>days</li>
</ul>

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
    margin-top: -15px;
    margin-bottom: -15px;
  }
  
  .result__years > span, .result__months > span, .result__days > span {
    color: var(--purple);
    padding-right: 5px;
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
    }

    .result__years > span, .result__months > span, .result__days > span {
      letter-spacing: 0.05em;
    }
  }
</style>
