/**
 * ML Meta Hub - Copy Button Component
 * Clipboard copy functionality with feedback animation
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, label = 'Copy', className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      
      // Reset after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={`
        copy-btn gap-2 
        border-cyan-500/30 hover:border-cyan-500/60
        hover:bg-cyan-500/10 transition-all duration-200
        ${className}
      `}
      aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 text-green-400"
          >
            <Check className="w-4 h-4" />
            {label !== 'Copy' && <span>Copied!</span>}
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <Copy className="w-4 h-4" />
            {label !== 'Copy' && <span>{label}</span>}
          </motion.div>
        )}
      </AnimatePresence>
      {label === 'Copy' && (copied ? 'Copied!' : label)}
    </Button>
  );
}
