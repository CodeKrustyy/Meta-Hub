/**
 * ML Meta Hub - Tier Section Component
 * Displays heroes grouped by tier rank
 */

import { motion } from 'framer-motion';
import type { Hero, TierRank } from '@/types';
import { HeroGrid } from './HeroGrid';
import { TierBadge } from './TierBadge';

interface TierSectionProps {
  tier: TierRank;
  heroes: Hero[];
}

const tierDescriptions: Record<TierRank, string> = {
  'S+': 'Overpowered - Must pick/ban',
  'S': 'Excellent - Strong meta picks',
  'A': 'Good - Viable options',
  'B': 'Average - Situational picks',
  'C': 'Below Average - Needs buffs',
};

const tierGradients: Record<TierRank, string> = {
  'S+': 'from-emerald-500/20 to-green-500/10',
  'S': 'from-cyan-500/20 to-blue-500/10',
  'A': 'from-blue-500/20 to-indigo-500/10',
  'B': 'from-purple-500/20 to-violet-500/10',
  'C': 'from-gray-500/20 to-gray-400/10',
};

export function TierSection({ tier, heroes }: TierSectionProps) {
  if (heroes.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border border-white/5 bg-gradient-to-br ${tierGradients[tier]} p-4 sm:p-6`}
    >
      {/* Tier Header */}
      <div className="flex items-center gap-3 mb-4">
        <TierBadge tier={tier} size="lg" />
        <div>
          <h3 className="text-lg font-bold text-foreground">Tier {tier}</h3>
          <p className="text-xs text-muted-foreground">{tierDescriptions[tier]}</p>
        </div>
        <div className="ml-auto text-xs text-muted-foreground">
          {heroes.length} {heroes.length === 1 ? 'hero' : 'heroes'}
        </div>
      </div>

      {/* Heroes Grid */}
      <HeroGrid 
        heroes={heroes} 
        columns={5} 
        showStats={true} 
        size="sm"
      />
    </motion.div>
  );
}
