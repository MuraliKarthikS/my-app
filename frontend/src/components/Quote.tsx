import React, { useEffect, useState } from 'react';
import { getRandomQuote } from '../utils/getRandomQuote';

export const Quote: React.FC = () => {
  const [quote, setQuote] = useState({ text: '', author: '', title: '' });

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return <div className='bg-slate-200 h-screen flex justify-center flex-col'>
    <div className='flex justify-center'>
        <div className='max-w-lg'>
            <div className='text-3xl font-bold'>
                {quote.text}
            </div>
        <div className='max-w-md text-xl font-semibold text-left mt-4'>
          - {quote.author}
        </div>
        <div className='max-w-md text-sm font-light text-slate-400'> 
            {quote.title}
        </div>
        </div>
        
    </div>
  </div>
}


