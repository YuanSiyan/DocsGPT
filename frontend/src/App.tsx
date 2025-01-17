import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Conversation from './conversation/Conversation';
import About from './About';
import { useState } from 'react';
import { ActiveState } from './models/misc';

export default function App() {
  //TODO : below media query is disjoint from tailwind. Please wire it together.
  const [navState, setNavState] = useState<ActiveState>(
    window.matchMedia('((min-width: 768px)').matches ? 'ACTIVE' : 'INACTIVE',
  );

  return (
    <div className="min-h-full min-w-full">
      <Navigation
        navState={navState}
        setNavState={(val: ActiveState) => setNavState(val)}
      />
      <div
        className={`transition-all duration-200 ${
          navState === 'ACTIVE' ? 'ml-0 md:ml-72 lg:ml-60' : 'ml-0 md:ml-16'
        }`}
      >
        <Routes>
          <Route path="/" element={<Conversation />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
