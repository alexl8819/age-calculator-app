<script>
  import AgeForm from './lib/AgeForm.svelte';  
  import AgeResult from './lib/AgeResult.svelte'; 

  const handleChange = ({ detail }) => {
    years = detail.years;
    months = detail.months;
    days = detail.days;
  }

  let years;
  let months;
  let days;
</script>

<div class="container">
  <div class="calculator__container">
    <h1 class="sr-only">Age Calculator</h1>
    <AgeForm on:change={handleChange} />
    <AgeResult years={years} months={months} days={days} />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 320px;
    background-color: var(--neutral-off-white);
    font-family: 'Poppins', sans-serif;
  }

  .calculator__container {
    width: 21.5rem;
    padding: 10px;
    padding-bottom: 25px;
    border-radius: 18px;
    border-bottom-right-radius: 100px;
    background-color: var(--neutral-white);
  }

  @media screen and (min-width: 1024px) {
    .calculator__container {
      width: 52rem;
      padding: 30px;
      border-bottom-right-radius: 175px;
    }
  }
</style>
