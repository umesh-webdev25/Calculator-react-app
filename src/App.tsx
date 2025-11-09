import { useState } from 'react';
import { Calculator, Percent, ArrowLeftRight } from 'lucide-react';
import { BasicCalculator } from './components/BasicCalculator';
import { PercentageCalculator } from './components/PercentageCalculator';
import { UnitConverter } from './components/UnitConverter';
import { Toaster } from './components/ui/sonner';

type Tab = 'calculator' | 'percentage' | 'converter';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('calculator');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-3">
            Smart Calculator
          </h1>
          <p className="text-muted-foreground text-lg">
            All-in-one calculator with unit conversions
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-border">
            <div className="flex gap-2 mb-8 p-1 bg-muted/50 rounded-xl">
              <button
                onClick={() => setActiveTab('calculator')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
                  activeTab === 'calculator'
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Calculator className="w-5 h-5" />
                <span className="hidden sm:inline">Calculator</span>
              </button>
              <button
                onClick={() => setActiveTab('percentage')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
                  activeTab === 'percentage'
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Percent className="w-5 h-5" />
                <span className="hidden sm:inline">Percentage</span>
              </button>
              <button
                onClick={() => setActiveTab('converter')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
                  activeTab === 'converter'
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg scale-105'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <ArrowLeftRight className="w-5 h-5" />
                <span className="hidden sm:inline">Converter</span>
              </button>
            </div>

            <div className="mt-6">
              {activeTab === 'calculator' && <BasicCalculator />}
              {activeTab === 'percentage' && <PercentageCalculator />}
              {activeTab === 'converter' && <UnitConverter />}
            </div>
          </div>

          <div className="mt-8 text-center text-muted-foreground text-sm">
            <p>© 2024 Smart Calculator. Built with React & TypeScript</p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
