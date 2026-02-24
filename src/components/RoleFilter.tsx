/**
 * ML Meta Hub - Role Filter Component
 * Toggle buttons for filtering heroes by role
 */

import { motion } from 'framer-motion';
import { Shield, Sword, Zap, Sparkles, Crosshair, Heart } from 'lucide-react';
import type { HeroRole } from '@/types';

interface RoleFilterProps {
  selectedRole: HeroRole | 'All';
  onRoleChange: (role: HeroRole | 'All') => void;
}

const roles: { value: HeroRole | 'All'; label: string; icon: typeof Shield; color: string }[] = [
  { value: 'All', label: 'All', icon: Shield, color: 'text-foreground' },
  { value: 'Tank', label: 'Tank', icon: Shield, color: 'text-green-400' },
  { value: 'Fighter', label: 'Fighter', icon: Sword, color: 'text-orange-400' },
  { value: 'Assassin', label: 'Assassin', icon: Zap, color: 'text-purple-400' },
  { value: 'Mage', label: 'Mage', icon: Sparkles, color: 'text-cyan-400' },
  { value: 'Marksman', label: 'Marksman', icon: Crosshair, color: 'text-yellow-400' },
  { value: 'Support', label: 'Support', icon: Heart, color: 'text-pink-400' },
];

export function RoleFilter({ selectedRole, onRoleChange }: RoleFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {roles.map((role) => {
        const Icon = role.icon;
        const isActive = selectedRole === role.value;
        
        return (
          <motion.button
            key={role.value}
            onClick={() => onRoleChange(role.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              filter-btn flex items-center gap-1.5
              ${isActive 
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                : 'bg-secondary/50 text-muted-foreground border border-transparent hover:bg-secondary hover:text-foreground'
              }
            `}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : role.color}`} />
            <span>{role.label}</span>
            
            {/* Active Indicator */}
            {isActive && (
              <motion.div
                layoutId="activeRole"
                className="absolute inset-0 rounded-full border border-cyan-500/50"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
