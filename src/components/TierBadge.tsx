/**
 * ML Meta Hub - Tier Badge Component
 * Colored tier indicator (S+, S, A, B, C)
 */

import type { TierRank } from '@/types';

interface TierBadgeProps {
  tier: TierRank;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const tierStyles: Record<TierRank, string> = {
  'S+': 'bg-gradient-to-r from-emerald-400 to-green-500 text-black',
  'S': 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black',
  'A': 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white',
  'B': 'bg-gradient-to-r from-purple-500 to-violet-500 text-white',
  'C': 'bg-gradient-to-r from-gray-500 to-gray-400 text-white',
};

const sizeClasses = {
  sm: 'text-[10px] px-1.5 py-0.5',
  md: 'text-xs px-2 py-0.5',
  lg: 'text-sm px-3 py-1',
};

export function TierBadge({ tier, size = 'md', className = '' }: TierBadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        rounded-md font-bold tracking-wider
        ${tierStyles[tier]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {tier}
    </span>
  );
}
