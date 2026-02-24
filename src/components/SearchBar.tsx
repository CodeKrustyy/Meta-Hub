/**
 * ML Meta Hub - Search Bar Component
 * Search input with icon and clear button
 */

import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ 
  value, 
  onChange, 
  placeholder = 'Search heroes...',
  className = '' 
}: SearchBarProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-10 search-input rounded-full"
      />
      {value && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 hover:bg-secondary"
          onClick={() => onChange('')}
          aria-label="Clear search"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </Button>
      )}
    </div>
  );
}
