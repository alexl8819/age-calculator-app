<script>
  import dayjs from 'dayjs';
  import AgeForm from './lib/AgeForm.svelte';  
  
  dayjs.extend(require('dayjs/plugin/customParseFormat'));  

  const calculateSince = (date = '1984-09-24', since = dayjs()) {
    let pastDate = dayjs(date, 'YYYY-MM-DD', true);

    if (!pastDate.isValid()) {
      throw new Error('Failed strict date check: Date is invalid or format is wrong');
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
  
  const year = '';
  const month = '';
  const day = '';
</script>

<div class="container">
  <div class="calculator__container">
    <h1 class="sr-only">Age Calculator</h1>
    <AgeForm />
    <AgeResult />
  </div>
</div>

<style>
  :root {
    --neutral-white: hsl(0, 0%, 100%);
    --neutral-off-white: hsl(0, 0%, 94%); 
  }
  
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
    width: 21rem;
    padding: 10px;
    border-radius: 8px;
    background-color: var(--neutral-white);
  }
</style>
