'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { Pages } from '@/types/navigation';

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
    navigateTo: (page: Pages) => void;
}

export const MobileNav = ({ isOpen, onClose, navigateTo }: MobileNavProps) => {
    const router = useRouter();

    const menuItems_primary = [
        { name: 'Home', path: '/' },
        { name: 'Classic', path: '/classic' },
        { name: 'Bookish', path: '/bookish' },
        { name: 'Resume', path: '/resume' },
    ];
    
    const menuItems_secondary = [
        { name: 'Book Cover', path: Pages.COVER },
        { name: 'About', path: Pages.ABOUT },
        { name: 'Projects', path: Pages.PROJECTS },
        { name: 'Skills', path: Pages.SKILLS },
        { name: 'Contact', path: Pages.CONTACT },
    ]

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween' }}
                    className="fixed inset-y-0 right-0 w-80 bg-[url(/page7.jpg)] bg-cover backdrop-blur-lg shadow-2xl z-50 p-4"
                >
                    <div className="flex justify-between items-center mb-8">
                        <button
                            onClick={onClose}
                            className="text-amber-900 hover:text-amber-700 transition-colors py-5"
                        >
                            <AiOutlineClose size={24} />
                        </button>
                    </div>

                    <nav className="space-y-8">
                        <div className='flex flex-col gap-8'>
                            {menuItems_secondary.map((item) => (
                                <motion.button
                                    key={item.path}
                                    whileHover={{ x: 10 }}
                                    className="block uppercase w-full border-b border-b-amber-900 font-serif text-lg font-semibold text-left text-amber-900 hover:text-amber-700 transition-colors"
                                    onClick={() => {
                                        navigateTo(item.path)
                                        onClose();
                                    }}
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </div>
                        <div className='flex flex-col gap-8'>
                            {menuItems_primary.map((item) => (
                                <motion.button
                                    key={item.path}
                                    whileHover={{ x: 10 }}
                                    className="block uppercase w-full border-b-amber-900 border-b text-left text-amber-900 text-lg font-semibold font-serif hover:text-amber-700 transition-colors"
                                    onClick={() => {
                                        router.push(item.path);
                                        onClose();
                                    }}
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </div>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// export function HomeButton() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const router = useRouter();

//     return (
//         <>
//             <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="fixed top-4 right-4 z-50 h-12 w-12 rounded-full bg-amber-100/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-amber-200 transition-colors"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//                 <AiOutlineHome className="text-amber-900 text-xl" />
//             </motion.button>

//             <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
//         </>
//     );
// }

// Usage in your layout/page component:
// Include <HomeButton /> in your main layout file