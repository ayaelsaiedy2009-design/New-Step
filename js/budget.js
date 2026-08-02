document.addEventListener('DOMContentLoaded', () => {
  const calcBtn = document.getElementById('calcBtn');
  const resultSection = document.getElementById('resultSection');

  const ids = [
    'rentInput', 'electricityInput', 'waterInput', 'internetInput', 'gasInput',
    'groceriesInput', 'eatingOutInput', 'transportInput', 'otherInput'
  ];

  const labels = {
    rentInput: 'Rent',
    electricityInput: 'Electricity',
    waterInput: 'Water',
    internetInput: 'Internet',
    gasInput: 'Gas',
    groceriesInput: 'Groceries',
    eatingOutInput: 'Eating out',
    transportInput: 'Transport',
    otherInput: 'Other'
  };

  calcBtn.addEventListener('click', () => {
    const budget = num('budgetInput');
    const values = {};
    let total = 0;

    ids.forEach(id => {
      values[id] = num(id);
      total += values[id];
    });

    const remaining = budget - total;

    document.getElementById('totalExpenses').textContent = format(total);
    document.getElementById('remainingBudget').textContent = format(remaining);
    document.getElementById('remainingBudget').style.color = remaining < 0 ? '#c1546b' : '';

    const statusEl = document.getElementById('statusMessage');
    statusEl.classList.remove('ok', 'tight', 'over');

    if (budget === 0) {
      statusEl.textContent = 'Enter your monthly budget above to see how it compares.';
      statusEl.classList.add('tight');
    } else if (remaining < 0) {
      statusEl.textContent = `You're over budget by ${format(Math.abs(remaining))}. Look at eating out and transport first — they usually have the most room to cut.`;
      statusEl.classList.add('over');
    } else if (remaining < budget * 0.1) {
      statusEl.textContent = `Tight, but it works. Only ${format(remaining)} left over each month — worth keeping a small emergency buffer.`;
      statusEl.classList.add('tight');
    } else {
      statusEl.textContent = `Comfortable. You'll have ${format(remaining)} left every month after expenses.`;
      statusEl.classList.add('ok');
    }

    const breakdownEl = document.getElementById('breakdownBars');
    breakdownEl.innerHTML = '';
    const max = Math.max(...ids.map(id => values[id]), 1);

    ids.forEach(id => {
      if (values[id] <= 0) return;
      const row = document.createElement('div');
      row.className = 'bar-row';
      row.innerHTML = `
        <span class="bar-label">${labels[id]}</span>
        <span class="bar-track"><span class="bar-fill" style="width:${(values[id] / max) * 100}%"></span></span>
        <span class="bar-amount">${format(values[id])}</span>
      `;
      breakdownEl.appendChild(row);
    });

    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  function num(id) {
    const el = document.getElementById(id);
    const v = parseFloat(el.value);
    return isNaN(v) || v < 0 ? 0 : v;
  }

  function format(n) {
    return Math.round(n).toLocaleString('en-US') + ' EGP';
  }
});