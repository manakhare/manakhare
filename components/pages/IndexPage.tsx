'use client';

interface IndexPageProps {
  onNext: () => void;
}

export default function IndexPage({ onNext }: IndexPageProps) {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <h2 className="text-3xl mb-8 text-amber-900 font-bold">Index</h2>
      <ul className="space-y-4 w-[70%]">
        {['About Me', 'Projects', 'Contact'].map((item, index) => (
          <li key={item} className="text-xl hover:text-amber-700 cursor-pointer transition-colors flex w-full flex-row justify-between">
            {item} <span className="float-right">pg. {index + 2}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}