/**
 * Meta Hub - Tier List Editor Page
 * Create and edit custom tier lists
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Save, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useUserTierLists, useUserProfile } from '@/hooks/useLocalStorage';
import { allHeroes, tierRanks } from '@/data/heroes-data';
import { TierBadge } from '@/components/TierBadge';
import type { TierRank, Hero } from '@/types';

export function TierListEditor() {
  const navigate = useNavigate();
  const { addTierList } = useUserTierLists();
  const { profile, isLoggedIn } = useUserProfile();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tiers, setTiers] = useState<Record<TierRank, string[]>>({
    'S+': [],
    'S': [],
    'A': [],
    'B': [],
    'C': [],
  });
  const [showHeroSelector, setShowHeroSelector] = useState<TierRank | null>(null);

  const getHeroById = (id: string): Hero | undefined => allHeroes.find(h => h.id === id);

  const addHeroToTier = (tier: TierRank, heroId: string) => {
    // Remove from other tiers first
    const newTiers = { ...tiers };
    (Object.keys(newTiers) as TierRank[]).forEach(t => {
      newTiers[t] = newTiers[t].filter(id => id !== heroId);
    });
    newTiers[tier] = [...newTiers[tier], heroId];
    setTiers(newTiers);
    setShowHeroSelector(null);
  };

  const removeHeroFromTier = (tier: TierRank, heroId: string) => {
    setTiers({
      ...tiers,
      [tier]: tiers[tier].filter(id => id !== heroId),
    });
  };

  const handleSave = () => {
    if (!isLoggedIn || !profile) {
      alert('Please sign in to create a tier list');
      return;
    }

    if (!name.trim()) {
      alert('Please enter a name for your tier list');
      return;
    }

    addTierList({
      name: name.trim(),
      author: profile.username,
      authorId: profile.id,
      patchVersion: '1.9.20',
      description: description.trim(),
      tiers,
      isPublic: true,
    });

    navigate('/tier-lists');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen animated-bg flex items-center justify-center">
        <div className="text-center">
          <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">Sign in Required</h2>
          <p className="text-muted-foreground">Please sign in to create tier lists</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animated-bg">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <h1 className="text-2xl font-bold text-foreground">Create Tier List</h1>
            </div>
            <Button onClick={handleSave} className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
              <Save className="w-4 h-4" />
              Save Tier List
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tier List Info */}
          <div className="glass-card p-4 mb-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Tier List Name *</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., My Meta Tier List"
                  className="search-input"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Description</label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your tier list..."
                  className="search-input min-h-[80px]"
                />
              </div>
            </div>
          </div>

          {/* Tier Rows */}
          <div className="space-y-4">
            {tierRanks.map((tier) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-4"
              >
                <div className="flex items-start gap-4">
                  <TierBadge tier={tier} size="lg" />
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 min-h-[60px]">
                      {tiers[tier].map((heroId) => {
                        const hero = getHeroById(heroId);
                        if (!hero) return null;
                        return (
                          <motion.div
                            key={heroId}
                            layout
                            className="relative group"
                          >
                            <img
                              src={hero.image}
                              alt={hero.name}
                              className="w-12 h-12 rounded-lg object-cover"
                              title={hero.name}
                            />
                            <button
                              onClick={() => removeHeroFromTier(tier, heroId)}
                              className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </motion.div>
                        );
                      })}
                      <button
                        onClick={() => setShowHeroSelector(tier)}
                        className="w-12 h-12 rounded-lg bg-secondary/30 border border-dashed border-border flex items-center justify-center hover:border-cyan-500/50 transition-colors"
                      >
                        <Plus className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Selector Modal */}
      {showHeroSelector && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowHeroSelector(null)}
        >
          <div className="glass-card p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-foreground mb-4">Add Hero to Tier {showHeroSelector}</h2>
            <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 gap-2">
              {allHeroes.map(hero => (
                <button
                  key={hero.id}
                  onClick={() => addHeroToTier(showHeroSelector, hero.id)}
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <img src={hero.image} alt={hero.name} className="w-12 h-12 rounded-lg object-cover mx-auto mb-1" />
                  <p className="text-xs text-foreground truncate">{hero.name}</p>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
