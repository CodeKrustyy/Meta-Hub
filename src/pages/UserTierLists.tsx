/**
 * Meta Hub - User Tier Lists Page
 * Browse community-created tier lists
 */

import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Plus, ThumbsUp, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUserTierLists } from '@/hooks/useLocalStorage';
import { allHeroes } from '@/data/heroes-data';
import { TierBadge } from '@/components/TierBadge';
import type { TierRank } from '@/types';

export function UserTierLists() {
  const { tierLists, voteTierList } = useUserTierLists();
  const [searchQuery, setSearchQuery] = useState('');

  const publicTierLists = useMemo(() => {
    return tierLists
      .filter(tl => tl.isPublic && (
        tl.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tl.author.toLowerCase().includes(searchQuery.toLowerCase())
      ))
      .sort((a, b) => b.votes - a.votes);
  }, [tierLists, searchQuery]);

  const getHeroById = (id: string) => allHeroes.find(h => h.id === id);

  return (
    <div className="min-h-screen animated-bg">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Community Tier Lists</h1>
                  <p className="text-sm text-muted-foreground">{publicTierLists.length} tier lists created</p>
                </div>
              </div>
            </div>
            <Link to="/tier-list-editor">
              <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
                <Plus className="w-4 h-4" />
                Create Tier List
              </Button>
            </Link>
          </div>

          {/* Search */}
          <div className="mt-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tier lists..."
                className="pl-10 search-input"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {publicTierLists.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {publicTierLists.map((tierList, index) => (
                <motion.div
                  key={tierList.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{tierList.name}</h3>
                      <p className="text-sm text-muted-foreground">by {tierList.author}</p>
                      {tierList.description && (
                        <p className="text-sm text-muted-foreground mt-1">{tierList.description}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => voteTierList(tierList.id)}
                        className="gap-1 text-cyan-400"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        {tierList.votes}
                      </Button>
                    </div>
                  </div>

                  {/* Tier Preview */}
                  <div className="space-y-2">
                    {(Object.keys(tierList.tiers) as TierRank[]).map(tier => {
                      const heroIds = tierList.tiers[tier];
                      if (heroIds.length === 0) return null;
                      
                      return (
                        <div key={tier} className="flex items-center gap-2">
                          <TierBadge tier={tier} size="sm" />
                          <div className="flex flex-wrap gap-1">
                            {heroIds.slice(0, 8).map(heroId => {
                              const hero = getHeroById(heroId);
                              if (!hero) return null;
                              return (
                                <img
                                  key={heroId}
                                  src={hero.image}
                                  alt={hero.name}
                                  className="w-8 h-8 rounded object-cover"
                                  title={hero.name}
                                />
                              );
                            })}
                            {heroIds.length > 8 && (
                              <span className="text-xs text-muted-foreground">+{heroIds.length - 8}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Patch {tierList.patchVersion}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(tierList.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No tier lists yet</h3>
              <p className="text-muted-foreground mb-4">Be the first to create a tier list!</p>
              <Link to="/tier-list-editor">
                <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
                  <Plus className="w-4 h-4" />
                  Create Tier List
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
