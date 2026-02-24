/**
 * ML Meta Hub - Build Card Component
 * Displays equipment build with items, emblem, spell, and notes
 */

import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles, Scroll, User, Award } from 'lucide-react';
import type { Build } from '@/types';
import { CopyButton } from './CopyButton';

interface BuildCardProps {
  build: Build;
  heroName: string;
}

export function BuildCard({ build, heroName }: BuildCardProps) {
  // Format build for clipboard
  const formatBuildForClipboard = (): string => {
    const items = build.items.map(i => i.name).join(', ');
    const emblem = `${build.emblem.name} (${build.emblem.talents.join(', ')})`;
    const spell = build.spell.name;
    const notes = build.playstyleNotes.join('\n• ');
    
    return `[${build.name}] - ${heroName}\n\nItems: ${items}\nEmblem: ${emblem}\nSpell: ${spell}\n\nPlaystyle:\n• ${notes}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="build-card"
    >
      {/* Build Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-bold text-foreground">{build.name}</h4>
            {build.isProBuild && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs">
                <Award className="w-3 h-3" />
                Pro
              </span>
            )}
          </div>
          {build.author && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
              <User className="w-3 h-3" />
              <span>{build.author}</span>
            </div>
          )}
        </div>
        <CopyButton 
          text={formatBuildForClipboard()} 
          label="Copy Build"
        />
      </div>

      {/* Equipment Items */}
      <div className="mb-4">
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <Zap className="w-3 h-3" />
          <span>Equipment</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {build.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/70 border border-border hover:border-cyan-500/50 flex items-center justify-center text-lg transition-colors duration-200">
                {item.icon}
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Emblem & Spell */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Emblem */}
        <div className="p-3 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
            <Shield className="w-3 h-3" />
            <span>Emblem</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">{build.emblem.icon}</span>
            <div>
              <p className="text-sm font-medium text-foreground">{build.emblem.name}</p>
              <p className="text-[10px] text-muted-foreground">{build.emblem.talents[0]}</p>
            </div>
          </div>
        </div>

        {/* Battle Spell */}
        <div className="p-3 rounded-lg bg-secondary/50 border border-border">
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Spell</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg">{build.spell.icon}</span>
            <p className="text-sm font-medium text-foreground">{build.spell.name}</p>
          </div>
        </div>
      </div>

      {/* Playstyle Notes */}
      <div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <Scroll className="w-3 h-3" />
          <span>Playstyle Tips</span>
        </div>
        <ul className="space-y-1.5">
          {build.playstyleNotes.map((note, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-foreground/80">
              <span className="w-1 h-1 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Patch Version */}
      <div className="mt-4 pt-3 border-t border-border">
        <span className="text-[10px] text-muted-foreground">
          Patch {build.patchVersion}
        </span>
      </div>
    </motion.div>
  );
}
