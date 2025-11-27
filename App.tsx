import React, { useState, useCallback } from 'react';
import AudioPlayer from './components/AudioPlayer';
import DateInput from './components/DateInput';
import ResultCard from './components/ResultCard';
import { getZodiacSign, getRisingSign } from './utils/zodiacCalculator';
import { getMysticalDescription } from './services/geminiService';
import { ZODIAC_DATA } from './constants';
import { ZodiacSignData } from './types';

const App: React.FC = () => {
  const [signData, setSignData] = useState<ZodiacSignData | null>(null);
  const [risingData, setRisingData] = useState<ZodiacSignData | null>(null);
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleAnalyze = useCallback(async (date: string, time: string) => {
    const zodiacId = getZodiacSign(date);
    
    if (zodiacId && ZODIAC_DATA[zodiacId]) {
      const mainSignData = ZODIAC_DATA[zodiacId];
      setSignData(mainSignData);
      
      // Calculate Rising Sign
      let risingSignName = undefined;
      let risingSignData = null;
      if (time) {
        const hour = parseInt(time.split(':')[0], 10);
        const risingId = getRisingSign(zodiacId, hour);
        if (risingId && ZODIAC_DATA[risingId]) {
          risingSignData = ZODIAC_DATA[risingId];
          setRisingData(risingSignData);
          risingSignName = risingSignData.nameMk;
        }
      }

      setLoading(true);
      
      // Fetch AI description
      try {
        const aiText = await getMysticalDescription(
          mainSignData.nameMk, 
          mainSignData.element,
          risingSignName
        );
        setDescription(aiText);
      } catch (err) {
        console.error(err);
        setDescription("Судбината е таинствена денес.");
      } finally {
        setLoading(false);
      }
    }
  }, []);

  const handleReset = () => {
    setSignData(null);
    setRisingData(null);
    setDescription('');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 z-10 font-sans">
      <AudioPlayer />
      
      <div className="mb-6 text-center animate-fade-in-down">
        <div className="inline-block p-3 rounded-full bg-slate-800/50 mb-4 border border-purple-500/30">
           <i className="fas fa-moon text-3xl text-purple-400"></i>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          Мистичен Хороскоп
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-xs mx-auto">
          Откријте што зборуваат ѕвездите за вашиот датум на раѓање.
        </p>
      </div>

      <div className="w-full flex justify-center">
        {!signData ? (
          <DateInput onAnalyze={handleAnalyze} />
        ) : (
          <ResultCard 
            data={signData} 
            risingData={risingData}
            description={description} 
            loading={loading}
            onReset={handleReset}
          />
        )}
      </div>

      <footer className="absolute bottom-4 text-slate-600 text-xs text-center w-full">
        <p>Создадено со Gemini AI</p>
      </footer>
    </div>
  );
};

export default App;