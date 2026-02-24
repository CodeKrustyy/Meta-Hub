/**
 * Meta Hub - Main Application Component
 * Mobile Legends: Bang Bang Gaming Hub
 * React Router v6 setup with all routes
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Home } from '@/pages/Home';
import { Heroes } from '@/pages/Heroes';
import { HeroDetail } from '@/pages/HeroDetail';
import { TierList } from '@/pages/TierList';
import { UserTierLists } from '@/pages/UserTierLists';
import { TierListEditor } from '@/pages/TierListEditor';
import { Builds } from '@/pages/Builds';
import { BuildEditor } from '@/pages/BuildEditor';
import { Chat } from '@/pages/Chat';
import { Profile } from '@/pages/Profile';
import { Compare } from '@/pages/Compare';
import { Favorites } from '@/pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/hero/:heroId" element={<HeroDetail />} />
            <Route path="/tier-list" element={<TierList />} />
            <Route path="/tier-lists" element={<UserTierLists />} />
            <Route path="/tier-list-editor" element={<TierListEditor />} />
            <Route path="/tier-list-editor/:id" element={<TierListEditor />} />
            <Route path="/builds" element={<Builds />} />
            <Route path="/build-editor" element={<BuildEditor />} />
            <Route path="/build-editor/:heroId" element={<BuildEditor />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/:roomId" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
