'use client';

import { Pages } from "@/app/page";

interface IndexPageProps {
  onNext: () => void;
  navigateTo: (page: Pages) => void;
}

export default function IndexPage({ onNext, navigateTo }: IndexPageProps) {

  const indexItems = [
    { label: 'About Me', page: Pages.ABOUT },
    { label: 'Skills', page: Pages.SKILLS },
    { label: 'Projects', page: Pages.PROJECTS },
    { label: 'Contact', page: Pages.CONTACT }
  ];

  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <h2 className="text-3xl mb-8 text-amber-900 font-bold">Index</h2>
      <ul className="space-y-4 w-[70%]">
        {indexItems.map((item, index) => (
          <li 
            key={item.label} 
            onClick={() => navigateTo(item.page)}
            className="text-xl hover:text-amber-700 cursor-pointer transition-colors flex w-full flex-row justify-between hover:bg-amber-100 px-4 py-2 rounded-lg"
          >
            {item.label} 
            <span className="text-amber-700">pg. {index + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}