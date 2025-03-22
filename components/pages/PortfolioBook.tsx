'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BookCover from '@/components/pages/CoverPage';
import AnimatedPage from '@/components/common/AnimatedPage';
import IndexPage from '@/components/pages/IndexPage';
import AboutPage from '@/components/pages/AboutPage';
import SkillsPage from '@/components/pages/SkillsPage';
import ProjectsPage from '@/components/pages/ProjectsPage';
import ContactPage from '@/components/pages/ContactPage';
import SideNav from '@/components/common/SideNav';
import {Pages} from '@/types/navigation'

export default function PortfolioBook() {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.COVER);
  const [direction, setDirection] = useState<number>(1);
  
  const navigateTo = (targetPage: Pages) => {
    const newDirection = targetPage > currentPage ? 1 : -1;
    setDirection(newDirection);
    setCurrentPage(targetPage);
  };

  const renderPage = () => {
    switch(currentPage) {
      case Pages.COVER:
        return <BookCover 
          onNext={() => navigateTo(Pages.INDEX)} 
          navigateTo={navigateTo} 
        />;
      case Pages.INDEX:
        return (
          <AnimatedPage
            direction={direction}
            onNext={() => navigateTo(Pages.ABOUT)}
            onPrev={() => navigateTo(Pages.COVER)}
          >
            <IndexPage 
              onNext={() => navigateTo(Pages.ABOUT)}
              onPrev={() => navigateTo(Pages.COVER)}
              navigateTo={navigateTo} />
          </AnimatedPage>
        );
      case Pages.ABOUT:
        return (
          <AnimatedPage
            direction={direction}
            onNext={() => navigateTo(Pages.SKILLS)}
            onPrev={() => navigateTo(Pages.INDEX)}
          >
            <SideNav navigateTo={navigateTo} currentPage={currentPage} />
            <AboutPage 
              direction={direction} 
              onNext={() => navigateTo(Pages.SKILLS)} 
              onPrev={() => navigateTo(Pages.INDEX)}/>
          </AnimatedPage>
        );
      case Pages.SKILLS:
        return (
          <AnimatedPage
            direction={direction}
            onNext={() => navigateTo(Pages.PROJECTS)}
            onPrev={() => navigateTo(Pages.ABOUT)}
          >
            <SkillsPage 
              onNext={() => navigateTo(Pages.PROJECTS)}
              onPrev={() => navigateTo(Pages.ABOUT)}
            />
            <SideNav navigateTo={navigateTo} currentPage={currentPage} />
          </AnimatedPage>
        );
      case Pages.PROJECTS:
        return (
          <AnimatedPage
            direction={direction}
            onNext={() => navigateTo(Pages.CONTACT)}
            onPrev={() => navigateTo(Pages.SKILLS)}
          >
            <ProjectsPage 
              onNext={() => navigateTo(Pages.CONTACT)}
              onPrev={() => navigateTo(Pages.SKILLS)}
            />
            <SideNav navigateTo={navigateTo} currentPage={currentPage} />
          </AnimatedPage>
        );
      case Pages.CONTACT:
        return (
          <AnimatedPage
            direction={direction}
            onNext={() => navigateTo(Pages.COVER)}
            onPrev={() => navigateTo(Pages.PROJECTS)}
          >
            <ContactPage 
              onNext={() => navigateTo(Pages.COVER)}
              onPrev={() => navigateTo(Pages.PROJECTS)}
            />
            <SideNav navigateTo={navigateTo} currentPage={currentPage} />
          </AnimatedPage>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full bg-gray-100">
      <AnimatePresence mode='wait'>
        {renderPage()}
      </AnimatePresence>
    </div>
  );
}

// Implement active state highlighting for the navbar