export enum ZodiacId {
  Aries = 'aries',
  Taurus = 'taurus',
  Gemini = 'gemini',
  Cancer = 'cancer',
  Leo = 'leo',
  Virgo = 'virgo',
  Libra = 'libra',
  Scorpio = 'scorpio',
  Sagittarius = 'sagittarius',
  Capricorn = 'capricorn',
  Aquarius = 'aquarius',
  Pisces = 'pisces'
}

export interface ZodiacSignData {
  id: ZodiacId;
  nameMk: string;
  dateRange: string;
  imageUrl: string;
  element: string; // Fire, Earth, Air, Water
  soundUrl: string;
}