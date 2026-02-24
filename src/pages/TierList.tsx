/**
 * Meta Hub - Tier List Page
 * Complete tier list with filters, search, and patch selector
 */

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Info, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RoleFilter } from '@/components/RoleFilter';
import { SearchBar } from '@/components/SearchBar';
import { TierSection } from '@/components/TierSection';
import { 
  allHeroes, 
  tierRanks 
} from '@/data/heroes-data';
import type { HeroRole, TierRank } from '@/types';

export function TierList() {
  const [selectedRole, setSelectedRole] = useState<HeroRole | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter heroes based on role and search
  const filteredHeroes = useMemo(() => {
    return allHeroes.filter(hero => {
      const matchesRole = selectedRole === 'All' || 
        hero.role === selectedRole || 
        hero.secondaryRole === selectedRole;
      
      const matchesSearch = hero.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesRole && matchesSearch;
    });
  }, [selectedRole, searchQuery]);

  // Group filtered heroes by tier
  const tieredHeroes = useMemo(() => {
    const grouped: Record<TierRank, typeof allHeroes> = {
      'S+': [],
      'S': [],
      'A': [],
      'B': [],
      'C': [],
    };
    
    filteredHeroes.forEach(hero => {
      grouped[hero.tier].push(hero);
    });
    
    return grouped;
  }, [filteredHeroes]);

  // Count total filtered heroes
  const totalFiltered = filteredHeroes.length;
  const totalHeroes = allHeroes.length;

  return (
    <div className="min-h-screen animated-bg">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Title */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Official Tier List</h1>
                  <p className="text-sm text-muted-foreground">
                    Patch 1.9.20 • {totalFiltered} of {totalHeroes} heroes
                  </p>
                </div>
              </div>
            </div>

            {/* Create Tier List Button */}
            <Link to="/tier-list-editor">
              <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
                <Plus className="w-4 h-4" />
                Create Your Own
              </Button>
            </Link>
          </div>

          {/* Filters */}
          <div className="mt-6 space-y-4">
            <RoleFilter selectedRole={selectedRole} onRoleChange={setSelectedRole} />
            
            <div className="flex flex-col sm:flex-row gap-4">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search heroes..."
                className="w-full sm:w-72"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tier List Content */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-foreground">
                Tier rankings are based on professional play, high-elo solo queue performance, 
                and current meta trends. Individual skill and team composition can affect hero effectiveness.
              </p>
            </div>
          </motion.div>

          {/* Tier Sections */}
          {totalFiltered === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No heroes found</h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {tierRanks.map((tier) => (
                <TierSection
                  key={tier}
                  tier={tier}
                  heroes={tieredHeroes[tier]}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
