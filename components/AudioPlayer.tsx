import React, { useEffect, useRef, useState } from 'react';
import { BG_MUSIC_URL } from '../constants';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(BG_MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio play failed (interaction needed)", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={togglePlay}
      className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-all duration-300 shadow-lg ${
        isPlaying ? 'bg-purple-600 text-white animate-pulse' : 'bg-slate-700 text-gray-300'
      }`}
      aria-label="Toggle Music"
    >
      <i className={`fas ${isPlaying ? 'fa-volume-up' : 'fa-volume-mute'} text-xl`}></i>
    </button>
  );
};

export default AudioPlayer;