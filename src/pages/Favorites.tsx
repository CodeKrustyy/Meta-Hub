/**
 * Meta Hub - Favorites Page
 * View and manage favorite heroes
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/hooks/useLocalStorage';
import { allHeroes } from '@/data/heroes-data';
import { HeroCard } from '@/components/HeroCard';

export function Favorites() {
  const { favorites } = useFavorites();
  const favoriteHeroes = allHeroes.filter(h => favorites.includes(h.id));

  return (
    <div className="min-h-screen animated-bg">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-pink-400" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">My Favorites</h1>
              <p className="text-sm text-muted-foreground">{favoriteHeroes.length} heroes saved</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {favoriteHeroes.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {favoriteHeroes.map((hero, index) => (
                <motion.div
                  key={hero.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <HeroCard hero={hero} showStats={true} size="md" />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No favorites yet</h3>
              <p className="text-muted-foreground mb-4">Save your favorite heroes for quick access</p>
              <Link to="/heroes">
                <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
                  Browse Heroes
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
