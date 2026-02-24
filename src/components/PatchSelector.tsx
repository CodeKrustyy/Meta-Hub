/**
 * ML Meta Hub - Patch Selector Component
 * Dropdown for selecting patch version
 */

import { GitBranch } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { PatchVersion } from '@/types';

interface PatchSelectorProps {
  patches: PatchVersion[];
  selectedPatch: string;
  onPatchChange: (patch: string) => void;
}

export function PatchSelector({ patches, selectedPatch, onPatchChange }: PatchSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <GitBranch className="w-4 h-4 text-muted-foreground" />
      <Select value={selectedPatch} onValueChange={onPatchChange}>
        <SelectTrigger className="w-[180px] search-input">
          <SelectValue placeholder="Select patch" />
        </SelectTrigger>
        <SelectContent>
          {patches.map((patch) => (
            <SelectItem key={patch.version} value={patch.version}>
              <div className="flex items-center gap-2">
                <span>{patch.label}</span>
                {patch.isCurrent && (
                  <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px]">
                    Current
                  </span>
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
