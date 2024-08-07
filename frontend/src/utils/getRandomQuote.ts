// utils/getRandomQuote.ts
import { quotes } from './quotebook';

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};