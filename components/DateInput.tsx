import React, { useState, useEffect } from 'react';

interface DateInputProps {
  onAnalyze: (date: string, time: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ onAnalyze }) => {
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [hour, setHour] = useState<string>('');
  const [minute, setMinute] = useState<string>('00');

  // Auto-fill current date roughly for year context
  useEffect(() => {
    // Optional: could set defaults, but empty is better for "game" feel
  }, []);

  const months = [
    { value: '1', label: 'Јануари' },
    { value: '2', label: 'Февруари' },
    { value: '3', label: 'Март' },
    { value: '4', label: 'Април' },
    { value: '5', label: 'Мај' },
    { value: '6', label: 'Јуни' },
    { value: '7', label: 'Јули' },
    { value: '8', label: 'Август' },
    { value: '9', label: 'Септември' },
    { value: '10', label: 'Октомври' },
    { value: '11', label: 'Ноември' },
    { value: '12', label: 'Декември' }
  ];

  // Generate days 1-31
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  
  // Generate years: 1940 - Current Year
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1939 }, (_, i) => currentYear - i);

  // Generate hours 0-23
  const hours = Array.from({ length: 24 }, (_, i) => i);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (day && month && year && hour) {
      // Construct date string YYYY-MM-DD
      const paddedMonth = month.padStart(2, '0');
      const paddedDay = day.toString().padStart(2, '0');
      const dateStr = `${year}-${paddedMonth}-${paddedDay}`;
      const timeStr = `${hour}:${minute}`;
      onAnalyze(dateStr, timeStr);
    }
  };

  const selectClass = "w-full p-3 bg-slate-900/80 border border-purple-500/50 rounded-xl text-white text-center appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner text-sm md:text-base";
  const labelClass = "block text-purple-300 text-xs mb-1 ml-1";

  return (
    <div className="w-full max-w-sm animate-fade-in-up px-2">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 bg-slate-800/60 backdrop-blur-lg p-6 md:p-8 rounded-3xl border border-purple-500/30 shadow-2xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-2">
            Внесете Податоци
          </h2>
          <p className="text-slate-400 text-sm">Внесете го точниот датум и час.</p>
        </div>

        {/* Date Section */}
        <div className="w-full space-y-4">
          <div className="w-full flex gap-2 justify-between">
            {/* Day Input */}
            <div className="flex-1 min-w-[70px]">
              <label className={labelClass}>Ден</label>
              <div className="relative">
                <select 
                  required
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>-</option>
                  {days.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Month Input */}
            <div className="flex-[2]">
              <label className={labelClass}>Месец</label>
              <div className="relative">
                <select 
                  required
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>Избери</option>
                  {months.map(m => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Year Input */}
            <div className="flex-1 min-w-[80px]">
              <label className={labelClass}>Година</label>
              <div className="relative">
                <select 
                  required
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>-</option>
                  {years.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Time Section */}
          <div className="w-full flex gap-2 items-end">
             <div className="flex-1">
               <label className={labelClass}>Час (0-23)</label>
               <select 
                  required
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  className={selectClass}
                >
                  <option value="" disabled>--</option>
                  {hours.map(h => (
                    <option key={h} value={h}>{h.toString().padStart(2, '0')}</option>
                  ))}
                </select>
             </div>
             <div className="flex-1">
               <label className={labelClass}>Минути</label>
                <select 
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                  className={selectClass}
                >
                  <option value="00">00</option>
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="45">45</option>
                  {/* Basic intervals for simplicity, or add full 60 */}
                </select>
             </div>
             <div className="text-xs text-slate-500 pb-3 flex-1 leading-tight text-center">
                *Потребно за подзнак
             </div>
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-200 mt-2"
        >
          Откриј ја Судбината
        </button>
      </form>
    </div>
  );
};

export default DateInput;