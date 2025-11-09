import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

type ConversionType = 'length' | 'weight' | 'volume';

const conversions = {
  length: {
    'Meter to Centimeter': (val: number) => val * 100,
    'Centimeter to Meter': (val: number) => val / 100,
    'Kilometer to Meter': (val: number) => val * 1000,
    'Meter to Kilometer': (val: number) => val / 1000,
    'Inch to Centimeter': (val: number) => val * 2.54,
    'Centimeter to Inch': (val: number) => val / 2.54,
    'Foot to Meter': (val: number) => val * 0.3048,
    'Meter to Foot': (val: number) => val / 0.3048,
  },
  weight: {
    'Kilogram to Gram': (val: number) => val * 1000,
    'Gram to Kilogram': (val: number) => val / 1000,
    'Kilogram to Pound': (val: number) => val * 2.20462,
    'Pound to Kilogram': (val: number) => val / 2.20462,
    'Gram to Milligram': (val: number) => val * 1000,
    'Milligram to Gram': (val: number) => val / 1000,
    'Ton to Kilogram': (val: number) => val * 1000,
    'Kilogram to Ton': (val: number) => val / 1000,
  },
  volume: {
    'Liter to Milliliter': (val: number) => val * 1000,
    'Milliliter to Liter': (val: number) => val / 1000,
    'Liter to Gallon': (val: number) => val * 0.264172,
    'Gallon to Liter': (val: number) => val / 0.264172,
    'Cubic Meter to Liter': (val: number) => val * 1000,
    'Liter to Cubic Meter': (val: number) => val / 1000,
  },
};

export function UnitConverter() {
  const [conversionType, setConversionType] = useState<ConversionType>('length');
  const [selectedConversion, setSelectedConversion] = useState<string>(
    Object.keys(conversions.length)[0]
  );
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const val = parseFloat(inputValue);
    if (!isNaN(val)) {
      const conversionFn = conversions[conversionType][selectedConversion as keyof typeof conversions[typeof conversionType]];
      setResult(conversionFn(val));
    }
  };

  const handleTypeChange = (type: ConversionType) => {
    setConversionType(type);
    setSelectedConversion(Object.keys(conversions[type])[0]);
    setResult(null);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 animate-fade-in">
      <div className="grid grid-cols-3 gap-2 p-1 bg-muted rounded-lg">
        <button
          onClick={() => handleTypeChange('length')}
          className={`py-2 px-4 rounded-md font-medium transition-all ${
            conversionType === 'length'
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Length
        </button>
        <button
          onClick={() => handleTypeChange('weight')}
          className={`py-2 px-4 rounded-md font-medium transition-all ${
            conversionType === 'weight'
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Weight
        </button>
        <button
          onClick={() => handleTypeChange('volume')}
          className={`py-2 px-4 rounded-md font-medium transition-all ${
            conversionType === 'volume'
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Volume
        </button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="conversion" className="text-foreground">Conversion Type</Label>
          <Select value={selectedConversion} onValueChange={setSelectedConversion}>
            <SelectTrigger id="conversion" className="h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(conversions[conversionType]).map((conversion) => (
                <SelectItem key={conversion} value={conversion}>
                  {conversion}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="input-value" className="text-foreground">Input Value</Label>
          <Input
            id="input-value"
            type="number"
            placeholder="Enter value to convert"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="text-lg h-12"
          />
        </div>

        <button
          onClick={handleConvert}
          className="w-full calc-button-equals"
        >
          Convert
        </button>
      </div>

      {result !== null && (
        <div className="space-y-2 animate-scale-in">
          <Label className="text-muted-foreground">Result</Label>
          <div className="calc-display text-3xl">
            {result.toFixed(4)}
          </div>
        </div>
      )}
    </div>
  );
}
