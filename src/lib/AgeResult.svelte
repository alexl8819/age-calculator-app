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
  :root {
    --purple: hsl(259, 100%, 65%);
  }
  
  .result__years > span, .result__months > span, .result__days > span {
    color: var(--purple);
  }

</style>
