import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    const value = parseFloat(event.target.value);
    setNum1(value);
    setResult(value + num2);
  };

  const handleNum2Change = (event) => {
    const value = parseFloat(event.target.value);
    setNum2(value);
    setResult(num1 + value);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;