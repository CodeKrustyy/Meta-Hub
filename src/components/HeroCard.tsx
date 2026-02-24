/**
 * Meta Hub - Hero Card Component
 * Displays hero info with tier badge, role, stats, and favorite button
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Shield, Heart } from 'lucide-react';
import type { Hero, HeroRole } from '@/types';
import { TierBadge } from './TierBadge';
import { useFavorites } from '@/hooks/useLocalStorage';
import { Button } from './ui/button';

interface HeroCardProps {
  hero: Hero;
  showStats?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showFavorite?: boolean;
}

const roleColors: Record<HeroRole, string> = {
  Tank: 'text-green-400',
  Fighter: 'text-orange-400',
  Assassin: 'text-purple-400',
  Mage: 'text-cyan-400',
  Marksman: 'text-yellow-400',
  Support: 'text-pink-400',
};

const roleBgColors: Record<HeroRole, string> = {
  Tank: 'bg-green-500/10 border-green-500/20',
  Fighter: 'bg-orange-500/10 border-orange-500/20',
  Assassin: 'bg-purple-500/10 border-purple-500/20',
  Mage: 'bg-cyan-500/10 border-cyan-500/20',
  Marksman: 'bg-yellow-500/10 border-yellow-500/20',
  Support: 'bg-pink-500/10 border-pink-500/20',
};

const sizeClasses = {
  sm: {
    card: 'p-2',
    image: 'w-12 h-12',
    name: 'text-xs',
    role: 'text-[10px]',
  },
  md: {
    card: 'p-3',
    image: 'w-16 h-16',
    name: 'text-sm',
    role: 'text-xs',
  },
  lg: {
    card: 'p-4',
    image: 'w-20 h-20',
    name: 'text-base',
    role: 'text-sm',
  },
};

export function HeroCard({ hero, showStats = true, size = 'md', showFavorite = true }: HeroCardProps) {
  const sizes = sizeClasses[size];
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(hero.id);

  return (
    <div className="relative group">
      <Link to={`/hero/${hero.id}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`glass-card ${sizes.card} hero-card cursor-pointer relative overflow-hidden`}
        >
          {/* Glow Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
          </div>

          <div className="relative flex items-center gap-3">
            {/* Hero Image */}
            <div className={`${sizes.image} rounded-xl overflow-hidden border-2 border-white/10 group-hover:border-cyan-500/50 transition-colors duration-300 flex-shrink-0`}>
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/100x100/1a1f2e/00ffff?text=${hero.name.charAt(0)}`;
                }}
              />
            </div>

            {/* Hero Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className={`${sizes.name} font-bold text-foreground truncate`}>
                  {hero.name}
                </h3>
                <TierBadge tier={hero.tier} size="sm" />
              </div>

              {/* Role Badge */}
              <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border ${roleBgColors[hero.role]}`}>
                <Shield className={`w-3 h-3 ${roleColors[hero.role]}`} />
                <span className={`${sizes.role} ${roleColors[hero.role]} font-medium`}>
                  {hero.role}
                </span>
                {hero.secondaryRole && (
                  <span className={`${sizes.role} ${roleColors[hero.secondaryRole]}`}>
                    /{hero.secondaryRole}
                  </span>
                )}
              </div>

              {/* Stats */}
              {showStats && (
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span>{hero.winRate}% WR</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-blue-400" />
                    <span>{hero.pickRate}% PR</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Link>

      {/* Favorite Button */}
      {showFavorite && (
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(hero.id);
          }}
          className={`absolute top-2 right-2 w-7 h-7 rounded-full opacity-0 group-hover:opacity-100 transition-all ${
            favorite ? 'opacity-100 text-pink-400' : 'text-muted-foreground hover:text-pink-400'
          }`}
        >
          <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
        </Button>
      )}
    </div>
  );
}
