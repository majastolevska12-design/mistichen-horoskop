import { ZodiacId, ZodiacSignData } from './types';

// Sound effects based on elements
const SOUNDS = {
  FIRE: "https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3?filename=fire-magic-6923.mp3",
  EARTH: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_27565e6789.mp3?filename=earth-rumble-23582.mp3",
  AIR: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_8db1f115a9.mp3?filename=wind-chimes-20150.mp3",
  WATER: "https://cdn.pixabay.com/download/audio/2021/08/09/audio_03d6d75574.mp3?filename=water-droplet-6625.mp3"
};

export const ZODIAC_DATA: Record<ZodiacId, ZodiacSignData> = {
  [ZodiacId.Aries]: {
    id: ZodiacId.Aries,
    nameMk: 'Овен',
    dateRange: '21 Март - 19 Април',
    imageUrl: 'https://picsum.photos/seed/aries_fire/400/400',
    element: 'Оган',
    soundUrl: SOUNDS.FIRE
  },
  [ZodiacId.Taurus]: {
    id: ZodiacId.Taurus,
    nameMk: 'Бик',
    dateRange: '20 Април - 20 Мај',
    imageUrl: 'https://picsum.photos/seed/taurus_earth/400/400',
    element: 'Земја',
    soundUrl: SOUNDS.EARTH
  },
  [ZodiacId.Gemini]: {
    id: ZodiacId.Gemini,
    nameMk: 'Близнаци',
    dateRange: '21 Мај - 20 Јуни',
    imageUrl: 'https://picsum.photos/seed/gemini_air/400/400',
    element: 'Воздух',
    soundUrl: SOUNDS.AIR
  },
  [ZodiacId.Cancer]: {
    id: ZodiacId.Cancer,
    nameMk: 'Рак',
    dateRange: '21 Јуни - 22 Јули',
    imageUrl: 'https://picsum.photos/seed/cancer_water/400/400',
    element: 'Вода',
    soundUrl: SOUNDS.WATER
  },
  [ZodiacId.Leo]: {
    id: ZodiacId.Leo,
    nameMk: 'Лав',
    dateRange: '23 Јули - 22 Август',
    imageUrl: 'https://picsum.photos/seed/leo_sun/400/400',
    element: 'Оган',
    soundUrl: SOUNDS.FIRE
  },
  [ZodiacId.Virgo]: {
    id: ZodiacId.Virgo,
    nameMk: 'Девица',
    dateRange: '23 Август - 22 Септември',
    imageUrl: 'https://picsum.photos/seed/virgo_nature/400/400',
    element: 'Земја',
    soundUrl: SOUNDS.EARTH
  },
  [ZodiacId.Libra]: {
    id: ZodiacId.Libra,
    nameMk: 'Вага',
    dateRange: '23 Септември - 22 Октомври',
    imageUrl: 'https://picsum.photos/seed/libra_balance/400/400',
    element: 'Воздух',
    soundUrl: SOUNDS.AIR
  },
  [ZodiacId.Scorpio]: {
    id: ZodiacId.Scorpio,
    nameMk: 'Шкорпија',
    dateRange: '23 Октомври - 21 Ноември',
    imageUrl: 'https://picsum.photos/seed/scorpio_mystic/400/400',
    element: 'Вода',
    soundUrl: SOUNDS.WATER
  },
  [ZodiacId.Sagittarius]: {
    id: ZodiacId.Sagittarius,
    nameMk: 'Стрелец',
    dateRange: '22 Ноември - 21 Декември',
    imageUrl: 'https://picsum.photos/seed/sagittarius_arrow/400/400',
    element: 'Оган',
    soundUrl: SOUNDS.FIRE
  },
  [ZodiacId.Capricorn]: {
    id: ZodiacId.Capricorn,
    nameMk: 'Јарец',
    dateRange: '22 Декември - 19 Јануари',
    imageUrl: 'https://picsum.photos/seed/capricorn_mountain/400/400',
    element: 'Земја',
    soundUrl: SOUNDS.EARTH
  },
  [ZodiacId.Aquarius]: {
    id: ZodiacId.Aquarius,
    nameMk: 'Водолија',
    dateRange: '20 Јануари - 18 Февруари',
    imageUrl: 'https://picsum.photos/seed/aquarius_future/400/400',
    element: 'Воздух',
    soundUrl: SOUNDS.AIR
  },
  [ZodiacId.Pisces]: {
    id: ZodiacId.Pisces,
    nameMk: 'Риби',
    dateRange: '19 Февруари - 20 Март',
    imageUrl: 'https://picsum.photos/seed/pisces_dream/400/400',
    element: 'Вода',
    soundUrl: SOUNDS.WATER
  }
};

// Ambient mystical music
export const BG_MUSIC_URL = "https://cdn.pixabay.com/download/audio/2022/10/25/audio_27743d5732.mp3?filename=meditative-rain-119333.mp3";