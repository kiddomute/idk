const tokenButtons = document.querySelectorAll('.token');
const amountInput = document.getElementById('amount');
const selectedToken = document.getElementById('selectedToken');
const projectedReturn = document.getElementById('projectedReturn');
const projectedPayout = document.getElementById('projectedPayout');
const status = document.getElementById('status');

let activeToken = 'USDT';

function refreshProjection() {
  const amount = Number(amountInput.value || 0);
  const cycleReturn = amount * 0.04;
  const payout = amount + cycleReturn;

  selectedToken.textContent = activeToken;
  projectedReturn.textContent = `${cycleReturn.toFixed(4)} ${activeToken}`;
  projectedPayout.textContent = `${payout.toFixed(4)} ${activeToken}`;
}

tokenButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tokenButtons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    activeToken = button.dataset.token;
    refreshProjection();
  });
});

amountInput.addEventListener('input', refreshProjection);

document.getElementById('simulateDeposit').addEventListener('click', () => {
  const amount = Number(amountInput.value || 0);
  if (amount <= 0) {
    status.textContent = 'Please enter a valid amount to simulate a deposit.';
    return;
  }
  status.textContent = `Simulated deposit: ${amount.toFixed(4)} ${activeToken}.`; 
});

document.getElementById('simulateWithdraw').addEventListener('click', () => {
  status.textContent = 'Simulated instant withdrawal completed successfully.';
});

refreshProjection();
