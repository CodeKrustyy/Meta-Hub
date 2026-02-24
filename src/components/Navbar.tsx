/**
 * Meta Hub - Navigation Bar Component
 * Responsive navbar with logo, navigation links, and mobile menu
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Gamepad2, 
  Swords, 
  Trophy, 
  Home, 
  MessageSquare, 
  User, 
  Heart,
  GitCompare,
  Hammer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUserProfile } from '@/hooks/useLocalStorage';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/heroes', label: 'Heroes', icon: Swords },
  { path: '/tier-list', label: 'Tier List', icon: Trophy },
  { path: '/builds', label: 'Builds', icon: Hammer },
  { path: '/chat', label: 'Chat', icon: MessageSquare },
];

const userItems = [
  { path: '/favorites', label: 'Favorites', icon: Heart },
  { path: '/compare', label: 'Compare', icon: GitCompare },
  { path: '/profile', label: 'Profile', icon: User },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { profile, isLoggedIn } = useUserProfile();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full glass-card border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 10 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
            >
              <Gamepad2 className="w-6 h-6 text-white" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gradient-cyan">Meta Hub</span>
              <span className="block text-[10px] text-muted-foreground -mt-1">Mobile Legends</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    className={`gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-1">
            {userItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-cyan-500/10 text-cyan-400'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                </Link>
              );
            })}
            
            {/* User Profile Indicator */}
            {isLoggedIn ? (
              <Link to="/profile">
                <div className="flex items-center gap-2 ml-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white">
                    {profile?.username.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm text-cyan-400 font-medium">{profile?.username}</span>
                </div>
              </Link>
            ) : (
              <Link to="/profile">
                <Button variant="outline" size="sm" className="ml-2 gap-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                  <User className="w-4 h-4" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-card/95 backdrop-blur-xl"
          >
            <div className="px-4 py-3 space-y-1">
              {/* Main Nav Items */}
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-cyan-500/10 text-cyan-400'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </Link>
                );
              })}
              
              {/* Divider */}
              <div className="h-px bg-white/10 my-2" />
              
              {/* User Items */}
              {userItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-cyan-500/10 text-cyan-400'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </Link>
                );
              })}
              
              {/* User Profile */}
              {isLoggedIn && (
                <div className="flex items-center gap-3 px-4 py-3 mt-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-sm font-bold text-white">
                    {profile?.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <span className="font-medium text-cyan-400">{profile?.username}</span>
                    <span className="block text-xs text-muted-foreground">Logged in</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
