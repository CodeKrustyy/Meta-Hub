/**
 * Meta Hub - Heroes List Page
 * Browse all 132 heroes with filtering and search
 */

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Swords, Grid3X3, List, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RoleFilter } from '@/components/RoleFilter';
import { SearchBar } from '@/components/SearchBar';
import { HeroGrid } from '@/components/HeroGrid';
import { allHeroes, tierRanks } from '@/data/heroes-data';
import { useFavorites } from '@/hooks/useLocalStorage';
import type { HeroRole, TierRank } from '@/types';

type ViewMode = 'grid' | 'list';
type SortOption = 'name' | 'tier' | 'winRate' | 'pickRate';

export function Heroes() {
  const [selectedRole, setSelectedRole] = useState<HeroRole | 'All'>('All');
  const [selectedTier, setSelectedTier] = useState<TierRank | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('tier');
  const { favorites } = useFavorites();
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Filter heroes
  const filteredHeroes = useMemo(() => {
    let heroes = allHeroes.filter(hero => {
      const matchesRole = selectedRole === 'All' || 
        hero.role === selectedRole || 
        hero.secondaryRole === selectedRole;
      
      const matchesTier = selectedTier === 'All' || hero.tier === selectedTier;
      
      const matchesSearch = hero.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFavorites = !showFavoritesOnly || favorites.includes(hero.id);
      
      return matchesRole && matchesTier && matchesSearch && matchesFavorites;
    });

    // Sort heroes
    const tierOrder = { 'S+': 0, 'S': 1, 'A': 2, 'B': 3, 'C': 4 };
    
    heroes.sort((a, b) => {
      switch (sortBy) {
        case 'tier':
          return tierOrder[a.tier] - tierOrder[b.tier];
        case 'name':
          return a.name.localeCompare(b.name);
        case 'winRate':
          return b.winRate - a.winRate;
        case 'pickRate':
          return b.pickRate - a.pickRate;
        default:
          return 0;
      }
    });

    return heroes;
  }, [selectedRole, selectedTier, searchQuery, favorites, showFavoritesOnly, sortBy]);

  return (
    <div className="min-h-screen animated-bg">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Title */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Swords className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">All Heroes</h1>
                  <p className="text-sm text-muted-foreground">
                    {filteredHeroes.length} of {allHeroes.length} heroes
                  </p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50' : ''}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50' : ''}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant={showFavoritesOnly ? 'default' : 'outline'}
                size="icon"
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={showFavoritesOnly ? 'bg-pink-500/20 text-pink-400 border-pink-500/50' : ''}
              >
                <Heart className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 space-y-4">
            <RoleFilter selectedRole={selectedRole} onRoleChange={setSelectedRole} />
            
            {/* Tier Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground mr-2">Tier:</span>
              {['All', ...tierRanks].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier as TierRank | 'All')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedTier === tier
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                      : 'bg-secondary/50 text-muted-foreground border border-transparent hover:bg-secondary'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>

            {/* Sort & Search */}
            <div className="flex flex-col sm:flex-row gap-4">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search heroes..."
                className="w-full sm:w-72"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-foreground focus:border-cyan-500/50 focus:outline-none"
              >
                <option value="tier">Sort by Tier</option>
                <option value="name">Sort by Name</option>
                <option value="winRate">Sort by Win Rate</option>
                <option value="pickRate">Sort by Pick Rate</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Heroes Grid */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <HeroGrid 
              heroes={filteredHeroes} 
              columns={viewMode === 'grid' ? 4 : 2}
              showStats={true}
              size={viewMode === 'grid' ? 'md' : 'sm'}
              emptyMessage="No heroes match your filters"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
