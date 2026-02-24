/**
 * Meta Hub - Hero Comparison Page
 * Compare heroes side by side
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GitCompare, Plus, X, TrendingUp, Users, Ban, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { allHeroes } from '@/data/heroes-data';
import { TierBadge } from '@/components/TierBadge';

export function Compare() {
  const [selectedHeroes, setSelectedHeroes] = useState<string[]>([]);
  const [showSelector, setShowSelector] = useState(false);

  const heroesToCompare = allHeroes.filter(h => selectedHeroes.includes(h.id));

  const addHero = (heroId: string) => {
    if (selectedHeroes.length < 3 && !selectedHeroes.includes(heroId)) {
      setSelectedHeroes([...selectedHeroes, heroId]);
    }
    setShowSelector(false);
  };

  const removeHero = (heroId: string) => {
    setSelectedHeroes(selectedHeroes.filter(id => id !== heroId));
  };

  const getRoleColor = (role: string) => {
    const colors: Record<string, string> = {
      Tank: 'text-green-400',
      Fighter: 'text-orange-400',
      Assassin: 'text-purple-400',
      Mage: 'text-cyan-400',
      Marksman: 'text-yellow-400',
      Support: 'text-pink-400',
    };
    return colors[role] || 'text-gray-400';
  };

  return (
    <div className="min-h-screen animated-bg">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GitCompare className="w-8 h-8 text-purple-400" />
              <h1 className="text-2xl font-bold text-foreground">Compare Heroes</h1>
            </div>
            {selectedHeroes.length > 0 && (
              <Button variant="ghost" onClick={() => setSelectedHeroes([])}>
                Clear All
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Selection */}
          <div className="flex flex-wrap gap-4 mb-8">
            {heroesToCompare.map(hero => (
              <motion.div
                key={hero.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-4 relative"
              >
                <button
                  onClick={() => removeHero(hero.id)}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
                <img src={hero.image} alt={hero.name} className="w-20 h-20 rounded-lg object-cover mx-auto mb-2" />
                <h3 className="font-bold text-foreground text-center">{hero.name}</h3>
                <p className={`text-sm text-center ${getRoleColor(hero.role)}`}>{hero.role}</p>
              </motion.div>
            ))}
            
            {selectedHeroes.length < 3 && (
              <button
                onClick={() => setShowSelector(true)}
                className="glass-card p-4 w-32 h-32 flex flex-col items-center justify-center border-dashed border-2 border-border hover:border-cyan-500/50 transition-colors"
              >
                <Plus className="w-8 h-8 text-muted-foreground mb-2" />
                <span className="text-sm text-muted-foreground">Add Hero</span>
              </button>
            )}
          </div>

          {/* Hero Selector Modal */}
          {showSelector && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setShowSelector(false)}
            >
              <div className="glass-card p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <h2 className="text-xl font-bold text-foreground mb-4">Select Hero</h2>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {allHeroes.map(hero => (
                    <button
                      key={hero.id}
                      onClick={() => addHero(hero.id)}
                      disabled={selectedHeroes.includes(hero.id)}
                      className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary disabled:opacity-50 transition-colors"
                    >
                      <img src={hero.image} alt={hero.name} className="w-12 h-12 rounded-lg object-cover mx-auto mb-1" />
                      <p className="text-xs text-foreground truncate">{hero.name}</p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Comparison Table */}
          {heroesToCompare.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card overflow-hidden"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="p-4 text-left text-muted-foreground font-medium">Stat</th>
                    {heroesToCompare.map(hero => (
                      <th key={hero.id} className="p-4 text-center">
                        <img src={hero.image} alt={hero.name} className="w-10 h-10 rounded-lg object-cover mx-auto mb-1" />
                        <span className="text-sm text-foreground">{hero.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-muted-foreground">Tier</td>
                    {heroesToCompare.map(hero => (
                      <td key={hero.id} className="p-4 text-center">
                        <TierBadge tier={hero.tier} size="sm" />
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-muted-foreground">Role</td>
                    {heroesToCompare.map(hero => (
                      <td key={hero.id} className="p-4 text-center">
                        <span className={getRoleColor(hero.role)}>{hero.role}</span>
                        {hero.secondaryRole && <span className="text-muted-foreground"> / {hero.secondaryRole}</span>}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-muted-foreground flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> Win Rate
                    </td>
                    {heroesToCompare.map(hero => (
                      <td key={hero.id} className="p-4 text-center text-foreground">{hero.winRate}%</td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-muted-foreground flex items-center gap-2">
                      <Users className="w-4 h-4" /> Pick Rate
                    </td>
                    {heroesToCompare.map(hero => (
                      <td key={hero.id} className="p-4 text-center text-foreground">{hero.pickRate}%</td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-muted-foreground flex items-center gap-2">
                      <Ban className="w-4 h-4" /> Ban Rate
                    </td>
                    {heroesToCompare.map(hero => (
                      <td key={hero.id} className="p-4 text-center text-foreground">{hero.banRate || 'N/A'}%</td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4 text-muted-foreground flex items-center gap-2">
                      <Target className="w-4 h-4" /> Difficulty
                    </td>
                    {heroesToCompare.map(hero => (
                      <td key={hero.id} className="p-4 text-center">
                        <span className={
                          hero.difficulty === 'Easy' ? 'text-green-400' :
                          hero.difficulty === 'Medium' ? 'text-yellow-400' :
                          'text-red-400'
                        }>{hero.difficulty}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-muted-foreground">Description</td>
                    {heroesToCompare.map(hero => (
                      <td key={hero.id} className="p-4 text-center text-sm text-foreground">{hero.description}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </motion.div>
          )}

          {heroesToCompare.length === 0 && (
            <div className="text-center py-16">
              <GitCompare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">Compare Heroes</h3>
              <p className="text-muted-foreground">Add heroes to compare their stats side by side</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
