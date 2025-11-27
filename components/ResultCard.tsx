import React, { useEffect, useRef } from 'react';
import { ZodiacSignData } from '../types';

interface ResultCardProps {
  data: ZodiacSignData;
  risingData: ZodiacSignData | null;
  description: string;
  loading: boolean;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ data, risingData, description, loading, onReset }) => {
  const soundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Play sound effect on mount
    if (data.soundUrl) {
      soundRef.current = new Audio(data.soundUrl);
      soundRef.current.volume = 0.6;
      soundRef.current.play().catch(e => console.log("Auto-play blocked", e));
    }
  }, [data.id]);

  return (
    <div className="w-full max-w-sm animate-fade-in pb-12">
      <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30 flex flex-col items-center pb-8">
        
        {/* Header Image Area */}
        <div className="relative w-full h-64">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800 z-10"></div>
           <img 
             src={data.imageUrl} 
             alt={data.nameMk} 
             className="w-full h-full object-cover opacity-80"
           />
           <div className="absolute bottom-4 left-0 right-0 z-20 text-center">
             <h2 className="text-4xl font-bold text-white tracking-widest uppercase drop-shadow-lg font-serif">
               {data.nameMk}
             </h2>
             <span className="text-purple-300 text-sm font-medium tracking-wide block">
               {data.dateRange}
             </span>
           </div>
        </div>

        {/* Content Area */}
        <div className="px-6 mt-2 w-full flex flex-col items-center gap-4 z-20">
          
          <div className="flex justify-center w-full gap-4">
            <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1 rounded-full border border-slate-600">
              <i className="fas fa-meteor text-yellow-400 text-xs"></i>
              <span className="text-xs text-gray-300 uppercase tracking-wider">{data.element}</span>
            </div>
            {risingData && (
              <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1 rounded-full border border-purple-500/50">
                <i className="fas fa-arrow-up text-purple-400 text-xs"></i>
                <span className="text-xs text-purple-200 uppercase tracking-wider">Подзнак: {risingData.nameMk}</span>
              </div>
            )}
          </div>

          <div className="min-h-[120px] flex items-center justify-center">
            {loading ? (
              <div className="flex flex-col items-center gap-3">
                 <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                 <p className="text-purple-300 text-sm animate-pulse">Ѕвездите шепотат...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-center text-gray-200 leading-relaxed font-light italic text-lg animate-fade-in">
                  "{description}"
                </p>
              </div>
            )}
          </div>

          <button 
            onClick={onReset}
            className="mt-4 px-8 py-2 border border-purple-500/50 text-purple-300 rounded-full hover:bg-purple-900/30 transition-colors text-sm"
          >
            Пробај повторно
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;