import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function PercentageCalculator() {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculatePercentage = () => {
    const val = parseFloat(value);
    const perc = parseFloat(percentage);
    
    if (!isNaN(val) && !isNaN(perc)) {
      setResult((val * perc) / 100);
    }
  };

  const calculatePercentageOf = () => {
    const val = parseFloat(value);
    const perc = parseFloat(percentage);
    
    if (!isNaN(val) && !isNaN(perc)) {
      setResult((perc / val) * 100);
    }
  };

  const calculatePercentageIncrease = () => {
    const val = parseFloat(value);
    const perc = parseFloat(percentage);
    
    if (!isNaN(val) && !isNaN(perc)) {
      setResult(val + (val * perc) / 100);
    }
  };

  const calculatePercentageDecrease = () => {
    const val = parseFloat(value);
    const perc = parseFloat(percentage);
    
    if (!isNaN(val) && !isNaN(perc)) {
      setResult(val - (val * perc) / 100);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="value" className="text-foreground">Value</Label>
          <Input
            id="value"
            type="number"
            placeholder="Enter value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="text-lg h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="percentage" className="text-foreground">Percentage</Label>
          <Input
            id="percentage"
            type="number"
            placeholder="Enter percentage"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="text-lg h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button 
          onClick={calculatePercentage}
          className="calc-button bg-secondary/20 hover:bg-secondary/30 text-secondary"
        >
          % of Value
        </button>
        <button 
          onClick={calculatePercentageOf}
          className="calc-button bg-secondary/20 hover:bg-secondary/30 text-secondary"
        >
          What % is
        </button>
        <button 
          onClick={calculatePercentageIncrease}
          className="calc-button bg-primary/20 hover:bg-primary/30 text-primary"
        >
          + Increase
        </button>
        <button 
          onClick={calculatePercentageDecrease}
          className="calc-button bg-primary/20 hover:bg-primary/30 text-primary"
        >
          - Decrease
        </button>
      </div>

      {result !== null && (
        <div className="calc-display text-3xl animate-scale-in">
          {result.toFixed(2)}
        </div>
      )}
    </div>
  );
}
