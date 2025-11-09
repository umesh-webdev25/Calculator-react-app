import { useState } from 'react';

export function BasicCalculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.');
      setNewNumber(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperation = (op: string) => {
    const current = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(current);
    } else if (operation) {
      const result = calculate(previousValue, current, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }
    
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return a / b;
      case '%': return a % b;
      default: return b;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const current = parseFloat(display);
      const result = calculate(previousValue, current, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
      setNewNumber(true);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4 animate-fade-in">
      <div className="calc-display">
        {display}
      </div>

      <div className="grid grid-cols-4 gap-3">
        <button onClick={handleClear} className="calc-button-clear">
          AC
        </button>
        <button onClick={handleBackspace} className="calc-button-operator">
          ⌫
        </button>
        <button onClick={() => handleOperation('%')} className="calc-button-operator">
          %
        </button>
        <button onClick={() => handleOperation('÷')} className="calc-button-operator">
          ÷
        </button>

        <button onClick={() => handleNumber('7')} className="calc-button-number">
          7
        </button>
        <button onClick={() => handleNumber('8')} className="calc-button-number">
          8
        </button>
        <button onClick={() => handleNumber('9')} className="calc-button-number">
          9
        </button>
        <button onClick={() => handleOperation('×')} className="calc-button-operator">
          ×
        </button>

        <button onClick={() => handleNumber('4')} className="calc-button-number">
          4
        </button>
        <button onClick={() => handleNumber('5')} className="calc-button-number">
          5
        </button>
        <button onClick={() => handleNumber('6')} className="calc-button-number">
          6
        </button>
        <button onClick={() => handleOperation('-')} className="calc-button-operator">
          -
        </button>

        <button onClick={() => handleNumber('1')} className="calc-button-number">
          1
        </button>
        <button onClick={() => handleNumber('2')} className="calc-button-number">
          2
        </button>
        <button onClick={() => handleNumber('3')} className="calc-button-number">
          3
        </button>
        <button onClick={() => handleOperation('+')} className="calc-button-operator">
          +
        </button>

        <button onClick={() => handleNumber('0')} className="calc-button-number col-span-2">
          0
        </button>
        <button onClick={handleDecimal} className="calc-button-number">
          .
        </button>
        <button onClick={handleEquals} className="calc-button-equals">
          =
        </button>
      </div>
    </div>
  );
}
