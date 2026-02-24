/**
 * Meta Hub - User Profile Page
 * Manage user profile, favorites, and created content
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Heart, Hammer, Trophy, Edit2, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUserProfile, useCommunityBuilds, useUserTierLists, useFavorites } from '@/hooks/useLocalStorage';
import { allHeroes } from '@/data/heroes-data';
import { HeroCard } from '@/components/HeroCard';

export function Profile() {
  const { profile, createProfile, updateProfile, isLoggedIn } = useUserProfile();
  const { getBuildsByUser } = useCommunityBuilds();
  const { getTierListsByUser } = useUserTierLists();
  const { favorites } = useFavorites();
  
  const [username, setUsername] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editUsername, setEditUsername] = useState(profile?.username || '');

  const userBuilds = profile ? getBuildsByUser(profile.id) : [];
  const userTierLists = profile ? getTierListsByUser(profile.id) : [];
  const favoriteHeroes = allHeroes.filter(h => favorites.includes(h.id));

  const handleCreateProfile = () => {
    if (username.trim()) {
      createProfile(username.trim());
    }
  };

  const handleUpdateProfile = () => {
    if (editUsername.trim()) {
      updateProfile({ username: editUsername.trim() });
      setIsEditing(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen animated-bg flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 max-w-md w-full text-center"
        >
          <User className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Welcome to Meta Hub</h1>
          <p className="text-muted-foreground mb-6">Create a profile to save favorites, create builds, and join the chat!</p>
          <div className="space-y-4">
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="search-input"
            />
            <Button
              onClick={handleCreateProfile}
              disabled={!username.trim()}
              className="w-full gap-2 bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              <User className="w-4 h-4" />
              Create Profile
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animated-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl font-bold text-white">
              {profile?.username.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 text-center sm:text-left">
              {isEditing ? (
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Input
                    value={editUsername}
                    onChange={(e) => setEditUsername(e.target.value)}
                    className="search-input w-48"
                  />
                  <Button size="sm" onClick={handleUpdateProfile} className="gap-2">
                    <Save className="w-4 h-4" />
                    Save
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h1 className="text-2xl font-bold text-foreground">{profile?.username}</h1>
                  <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
                    <Edit2 className="w-4 h-4" />
                  </Button>
                </div>
              )}
              <p className="text-muted-foreground">Member since {new Date(profile?.joinedAt || '').toLocaleDateString()}</p>
            </div>
            <div className="flex gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400">{favoriteHeroes.length}</div>
                <div className="text-xs text-muted-foreground">Favorites</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">{userBuilds.length}</div>
                <div className="text-xs text-muted-foreground">Builds</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">{userTierLists.length}</div>
                <div className="text-xs text-muted-foreground">Tier Lists</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Favorites */}
          <div className="glass-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-foreground flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                Favorites
              </h2>
              <Link to="/favorites">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </div>
            {favoriteHeroes.length > 0 ? (
              <div className="space-y-2">
                {favoriteHeroes.slice(0, 3).map(hero => (
                  <HeroCard key={hero.id} hero={hero} showStats={false} size="sm" />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm text-center py-4">No favorites yet</p>
            )}
          </div>

          {/* My Builds */}
          <div className="glass-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-foreground flex items-center gap-2">
                <Hammer className="w-5 h-5 text-orange-400" />
                My Builds
              </h2>
              <Link to="/builds">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </div>
            {userBuilds.length > 0 ? (
              <div className="space-y-2">
                {userBuilds.slice(0, 3).map(build => (
                  <div key={build.id} className="p-3 rounded-lg bg-secondary/50">
                    <p className="font-medium text-foreground">{build.name}</p>
                    <p className="text-sm text-muted-foreground">for {allHeroes.find(h => h.id === build.heroId)?.name}</p>
                    <p className="text-xs text-cyan-400">{build.votes} votes</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm text-center py-4">No builds yet</p>
            )}
          </div>

          {/* My Tier Lists */}
          <div className="glass-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-foreground flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                My Tier Lists
              </h2>
              <Link to="/tier-lists">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </div>
            {userTierLists.length > 0 ? (
              <div className="space-y-2">
                {userTierLists.slice(0, 3).map(tierList => (
                  <div key={tierList.id} className="p-3 rounded-lg bg-secondary/50">
                    <p className="font-medium text-foreground">{tierList.name}</p>
                    <p className="text-xs text-muted-foreground">{tierList.votes} votes</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm text-center py-4">No tier lists yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
