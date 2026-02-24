/**
 * ML Meta Hub - Hero Grid Component
 * Responsive grid layout for hero cards
 */

import { motion } from 'framer-motion';
import type { Hero } from '@/types';
import { HeroCard } from './HeroCard';

interface HeroGridProps {
  heroes: Hero[];
  columns?: 2 | 3 | 4 | 5 | 6;
  showStats?: boolean;
  size?: 'sm' | 'md' | 'lg';
  emptyMessage?: string;
}

const columnClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export function HeroGrid({ 
  heroes, 
  columns = 4, 
  showStats = true, 
  size = 'md',
  emptyMessage = 'No heroes found' 
}: HeroGridProps) {
  if (heroes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4">
          <span className="text-3xl">🔍</span>
        </div>
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`grid ${columnClasses[columns]} gap-3`}
    >
      {heroes.map((hero) => (
        <motion.div key={hero.id} variants={itemVariants}>
          <HeroCard hero={hero} showStats={showStats} size={size} />
        </motion.div>
      ))}
    </motion.div>
  );
}
