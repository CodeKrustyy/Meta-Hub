/**
 * Meta Hub - Community Builds Page
 * Browse and vote on community-submitted builds
 */

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hammer, Plus, ThumbsUp, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCommunityBuilds, useUserProfile } from '@/hooks/useLocalStorage';
import { allHeroes } from '@/data/heroes-data';
import { allItems, battleSpells, emblemSets } from '@/data/items-data';
import type { Build } from '@/types';

export function Builds() {
  const { builds, voteBuild } = useCommunityBuilds();
  const { profile } = useUserProfile();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterHero, setFilterHero] = useState<string>('All');

  const filteredBuilds = useMemo(() => {
    return builds
      .filter(build => {
        const matchesSearch = build.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            build.author.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesHero = filterHero === 'All' || build.heroId === filterHero;
        return matchesSearch && matchesHero;
      })
      .sort((a, b) => b.votes - a.votes);
  }, [builds, searchQuery, filterHero]);

  const getHeroById = (id: string) => allHeroes.find(h => h.id === id);
  const getItemById = (id: string) => allItems.find(i => i.id === id);
  const getSpellByName = (name: string) => battleSpells.find(s => s.name === name);
  const getEmblemByName = (name: string) => emblemSets.find(e => e.name === name);

  return (
    <div className="min-h-screen animated-bg">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <Hammer className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Community Builds</h1>
                  <p className="text-sm text-muted-foreground">{filteredBuilds.length} builds shared</p>
                </div>
              </div>
            </div>
            <Link to="/build-editor">
              <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
                <Plus className="w-4 h-4" />
                Create Build
              </Button>
            </Link>
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search builds..."
                className="pl-10 search-input"
              />
            </div>
            <select
              value={filterHero}
              onChange={(e) => setFilterHero(e.target.value)}
              className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-foreground focus:border-cyan-500/50 focus:outline-none"
            >
              <option value="All">All Heroes</option>
              {allHeroes.map(hero => (
                <option key={hero.id} value={hero.id}>{hero.name}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBuilds.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredBuilds.map((userBuild, index) => {
                const hero = getHeroById(userBuild.heroId);
                if (!hero) return null;

                // Convert UserBuild to Build format
                const build: Build = {
                  id: userBuild.id,
                  name: userBuild.name,
                  heroId: userBuild.heroId,
                  items: userBuild.itemIds.map(id => getItemById(id) || { id, name: 'Unknown', icon: '', category: 'Attack' }),
                  emblem: getEmblemByName(userBuild.emblemName) || { name: userBuild.emblemName, icon: '', talents: [userBuild.emblemTalent] },
                  spell: getSpellByName(userBuild.spellName) || { name: userBuild.spellName, icon: '' },
                  playstyleNotes: userBuild.playstyleNotes,
                  author: userBuild.author,
                  patchVersion: userBuild.patchVersion,
                  votes: userBuild.votes,
                  isCommunityBuild: true,
                };

                return (
                  <motion.div
                    key={build.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card p-4"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img src={hero.image} alt={hero.name} className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <h3 className="font-bold text-foreground">{build.name}</h3>
                          <p className="text-sm text-muted-foreground">for {hero.name}</p>
                          <p className="text-xs text-muted-foreground">by {build.author}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => voteBuild(build.id, profile?.id || '')}
                          className="gap-1 text-cyan-400"
                        >
                          <ThumbsUp className="w-4 h-4" />
                          {build.votes}
                        </Button>
                      </div>
                    </div>

                    {/* Items */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {build.items.slice(0, 6).map((item, i) => (
                        <div key={i} className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center" title={item.name}>
                          {item.icon ? (
                            <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                          ) : (
                            <span className="text-xs">?</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Emblem & Spell */}
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Emblem:</span>
                        <span className="text-foreground">{build.emblem.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Spell:</span>
                        <span className="text-foreground">{build.spell.name}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <Hammer className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No builds found</h3>
              <p className="text-sm text-muted-foreground mb-4">Be the first to share a build!</p>
              <Link to="/build-editor">
                <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
                  <Plus className="w-4 h-4" />
                  Create Build
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
