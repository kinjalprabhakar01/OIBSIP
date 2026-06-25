const convertBtn = document.getElementById('convertBtn');
const tempInput = document.getElementById('tempInput');
const errorMsg = document.getElementById('errorMsg');
const resultBox = document.getElementById('resultBox');
const res1 = document.getElementById('res1');
const res2 = document.getElementById('res2');

convertBtn.addEventListener('click', function () {

  const value = tempInput.value.trim();
  const unit = document.querySelector('input[name="unit"]:checked').value;

  // Validation
  if (value === '' || isNaN(value)) {
    errorMsg.classList.add('visible');
    resultBox.classList.remove('visible');
    return;
  }

  errorMsg.classList.remove('visible');

  const temp = parseFloat(value);
  let result1, result2;

  if (unit === 'celsius') {
    const f = (temp * 9/5) + 32;
    const k = temp + 273.15;
    result1 = `🌡️ ${f.toFixed(2)} °F`;
    result2 = `🌡️ ${k.toFixed(2)} K`;

  } else if (unit === 'fahrenheit') {
    const c = (temp - 32) * 5/9;
    const k = (temp - 32) * 5/9 + 273.15;
    result1 = `🌡️ ${c.toFixed(2)} °C`;
    result2 = `🌡️ ${k.toFixed(2)} K`;

  } else if (unit === 'kelvin') {
    const c = temp - 273.15;
    const f = (temp - 273.15) * 9/5 + 32;
    result1 = `🌡️ ${c.toFixed(2)} °C`;
    result2 = `🌡️ ${f.toFixed(2)} °F`;
  }

  res1.textContent = result1;
  res2.textContent = result2;
  resultBox.classList.add('visible');
});

// Allow Enter key to trigger conversion
tempInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    convertBtn.click();
  }
});