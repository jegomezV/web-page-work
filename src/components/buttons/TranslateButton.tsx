import React from 'react';

export const TranslateButton: React.FC = (): JSX.Element => {
  return (
    <button
      onClick={() => { }}
      className="fixed z-40 right-6 top-1 inline-flex h-11 w-13 items-center justify-center overflow-hidden bg-transparent font-medium text-neutral-200"
      aria-label="Scroll to top"
    >
      <div className="duration-200 transition">
        <svg className='h-10 w-10 p-1' viewBox="0 -46 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m467 90h-140.101562l60.90625 181.128906c3.859374 12.804688 1.90625 29.195313-6.710938 40.75-7.082031 9.5-17.742188 15.515625-29.296875 17.316406l-90.804687 90.804688h206.007812c24.8125 0 45-20.1875 45-45v-240c0-24.8125-20.1875-45-45-45zm0 0" fill="#000000" style={{ fill: 'rgb(255, 255, 255)' }}></path><path d="m309.007812 330h-69.007812v69.007812zm0 0" fill="#000000" style={{ fill: 'rgb(255, 255, 255)' }}></path><path d="m45 300h300c4.746094 0 9.199219-2.242188 12.039062-6.050781 2.828126-3.792969 3.691407-8.714844 2.332032-13.257813l-83.585938-248.613281c-5.757812-19.1875-23.085937-32.078125-43.109375-32.078125h-187.675781c-24.8125 0-45 20.1875-45 45v210c0 24.8125 20.1875 45 45 45zm105-255c34.101562 0 66.210938 16.65625 85.867188 44.5625 4.777343 6.765625 3.152343 16.125-3.617188 20.902344-6.78125 4.773437-16.140625 3.148437-20.902344-3.617188-14.046875-19.9375-36.988281-31.847656-61.347656-31.847656-41.351562 0-75 33.648438-75 75s33.648438 75 75 75c36.226562 0 66.519531-25.8125 73.492188-60h-43.492188c-8.289062 0-15-6.710938-15-15s6.710938-15 15-15h60c8.289062 0 15 6.710938 15 15 0 57.890625-47.109375 105-105 105s-105-47.109375-105-105 47.109375-105 105-105zm0 0" fill="#000000" style={{ fill: 'rgb(255, 255, 255)' }}></path></svg>
      </div>
    </button>
  );
};
