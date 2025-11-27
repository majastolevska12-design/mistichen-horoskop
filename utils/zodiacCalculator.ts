import { ZodiacId } from '../types';

const ORDERED_SIGNS: ZodiacId[] = [
  ZodiacId.Aries, ZodiacId.Taurus, ZodiacId.Gemini, ZodiacId.Cancer, 
  ZodiacId.Leo, ZodiacId.Virgo, ZodiacId.Libra, ZodiacId.Scorpio, 
  ZodiacId.Sagittarius, ZodiacId.Capricorn, ZodiacId.Aquarius, ZodiacId.Pisces
];

export const getZodiacSign = (dateString: string): ZodiacId | null => {
  if (!dateString) return null;

  // Expected format: YYYY-MM-DD
  const parts = dateString.split('-');
  
  if (parts.length !== 3) return null;

  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  if (isNaN(month) || isNaN(day)) return null;

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return ZodiacId.Aries;
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return ZodiacId.Taurus;
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return ZodiacId.Gemini;
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return ZodiacId.Cancer;
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return ZodiacId.Leo;
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return ZodiacId.Virgo;
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return ZodiacId.Libra;
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return ZodiacId.Scorpio;
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return ZodiacId.Sagittarius;
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return ZodiacId.Capricorn;
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return ZodiacId.Aquarius;
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return ZodiacId.Pisces;

  return null;
};

// Simplified Rising Sign calculator (Ascendant)
// NOTE: Accurate calculation requires Latitude/Longitude. 
// This is an approximation assuming sunrise at 6AM, moving 1 sign every 2 hours.
export const getRisingSign = (sunSignId: ZodiacId, hour: number): ZodiacId => {
  const sunSignIndex = ORDERED_SIGNS.indexOf(sunSignId);
  
  // Sunrise is roughly 6 AM (where rising sign == sun sign)
  // Every 2 hours, the rising sign moves forward by 1
  const sunriseHour = 6;
  const hourDiff = hour - sunriseHour;
  
  // Calculate offset (2 hours per sign)
  const offset = Math.floor(hourDiff / 2);
  
  // Calculate new index wrapping around 12
  let risingIndex = (sunSignIndex + offset) % 12;
  
  // Handle negative modulo if born before 6 AM
  if (risingIndex < 0) {
    risingIndex = risingIndex + 12;
  }

  return ORDERED_SIGNS[risingIndex];
};