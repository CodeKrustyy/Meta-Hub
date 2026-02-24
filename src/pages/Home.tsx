/**
 * Meta Hub - Home Page
 * Landing page with featured heroes, meta builds, and community highlights
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Trophy, 
  ArrowRight, 
  Gamepad2,
  Target,
  Users,
  MessageSquare,
  Hammer,
  Heart,
  GitCompare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroCard } from '@/components/HeroCard';
import { BuildCard } from '@/components/BuildCard';
import { TierBadge } from '@/components/TierBadge';
import { 
  getFeaturedHeroes, 
  allHeroes,
  getHeroById 
} from '@/data/heroes-data';
import { useCommunityBuilds, useUserTierLists } from '@/hooks/useLocalStorage';

export function Home() {
  const { getTopBuilds } = useCommunityBuilds();
  const { getPublicTierLists } = useUserTierLists();
  
  const featuredHeroes = getFeaturedHeroes();
  const topBuilds = getTopBuilds(4);
  const publicTierLists = getPublicTierLists().slice(0, 3);
  
  // Get S+ tier heroes for top tier section
  const topTierHeroes = allHeroes.filter(h => h.tier === 'S+').slice(0, 4);

  return (
    <div className="min-h-screen animated-bg">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center">
            {/* Game Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
            >
              <Gamepad2 className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Mobile Legends: Bang Bang</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
            >
              <span className="text-foreground">Master the </span>
              <span className="text-gradient-cyan">Meta</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Discover top-tier heroes, pro builds, and winning strategies for Mobile Legends. 
              Join our community to share builds, create tier lists, and chat with fellow players.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/tier-list">
                <Button 
                  size="lg" 
                  className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8"
                >
                  <Trophy className="w-5 h-5" />
                  View Tier List
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/heroes">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="gap-2 border-white/20 hover:bg-white/5"
                >
                  <Target className="w-5 h-5" />
                  Browse Heroes
                </Button>
              </Link>
              <Link to="/chat">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="gap-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                >
                  <MessageSquare className="w-5 h-5" />
                  Join Chat
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-cyan">132</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Heroes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient-gold">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">S+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Current Meta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">∞</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Builds</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Heroes Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Featured Heroes</h2>
              </div>
              <p className="text-sm text-muted-foreground">Top meta picks for Patch 1.9.20</p>
            </div>
            <Link to="/heroes">
              <Button variant="ghost" className="gap-2 text-cyan-400 hover:text-cyan-300">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredHeroes.map((hero, index) => (
              <motion.div
                key={hero.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HeroCard hero={hero} showStats={true} size="md" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Tier Heroes Section */}
      <section className="py-12 sm:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">S+ Tier Heroes</h2>
              </div>
              <p className="text-sm text-muted-foreground">The absolute best picks right now</p>
            </div>
            <Link to="/tier-list">
              <Button variant="ghost" className="gap-2 text-cyan-400 hover:text-cyan-300">
                Full Tier List
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topTierHeroes.map((hero, index) => (
              <motion.div
                key={hero.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <HeroCard hero={hero} showStats={true} size="md" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Builds Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Hammer className="w-5 h-5 text-orange-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Community Builds</h2>
              </div>
              <p className="text-sm text-muted-foreground">Top voted builds from the community</p>
            </div>
            <div className="flex gap-2">
              <Link to="/builds">
                <Button variant="ghost" className="gap-2 text-cyan-400 hover:text-cyan-300">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/build-editor">
                <Button variant="outline" size="sm" className="gap-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                  Create Build
                </Button>
              </Link>
            </div>
          </div>

          {topBuilds.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topBuilds.map((build, index) => {
                const hero = getHeroById(build.heroId);
                if (!hero) return null;
                
                return (
                  <motion.div
                    key={build.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <BuildCard 
                      build={{
                        id: build.id,
                        name: build.name,
                        heroId: build.heroId,
                        items: [], // Will be populated from item IDs
                        emblem: { name: build.emblemName, icon: '', talents: [build.emblemTalent] },
                        spell: { name: build.spellName, icon: '' },
                        playstyleNotes: build.playstyleNotes,
                        author: build.author,
                        patchVersion: build.patchVersion,
                        votes: build.votes,
                        isCommunityBuild: true,
                      }} 
                      heroName={hero.name} 
                    />
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 glass-card">
              <Hammer className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No community builds yet</h3>
              <p className="text-sm text-muted-foreground mb-4">Be the first to share your build!</p>
              <Link to="/build-editor">
                <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
                  <Hammer className="w-4 h-4" />
                  Create Build
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Community Tier Lists Section */}
      <section className="py-12 sm:py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Community Tier Lists</h2>
              </div>
              <p className="text-sm text-muted-foreground">See what the community thinks</p>
            </div>
            <div className="flex gap-2">
              <Link to="/tier-lists">
                <Button variant="ghost" className="gap-2 text-cyan-400 hover:text-cyan-300">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/tier-list-editor">
                <Button variant="outline" size="sm" className="gap-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                  Create Tier List
                </Button>
              </Link>
            </div>
          </div>

          {publicTierLists.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {publicTierLists.map((tierList, index) => (
                <motion.div
                  key={tierList.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 hover:border-cyan-500/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-foreground truncate">{tierList.name}</h3>
                    <span className="text-xs text-muted-foreground">{tierList.votes} votes</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">by {tierList.author}</p>
                  <div className="flex gap-2">
                    {(Object.keys(tierList.tiers) as Array<keyof typeof tierList.tiers>)
                      .filter(tier => tierList.tiers[tier].length > 0)
                      .slice(0, 3)
                      .map(tier => (
                        <TierBadge key={tier} tier={tier} size="sm" />
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 glass-card">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No tier lists yet</h3>
              <p className="text-sm text-muted-foreground mb-4">Create your own tier list!</p>
              <Link to="/tier-list-editor">
                <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
                  <Trophy className="w-4 h-4" />
                  Create Tier List
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link to="/heroes">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 text-center hover:border-cyan-500/30 transition-colors"
              >
                <Target className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-medium text-foreground">Browse Heroes</h3>
                <p className="text-xs text-muted-foreground mt-1">View all 132 heroes</p>
              </motion.div>
            </Link>
            <Link to="/favorites">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 text-center hover:border-pink-500/30 transition-colors"
              >
                <Heart className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h3 className="font-medium text-foreground">Favorites</h3>
                <p className="text-xs text-muted-foreground mt-1">Your saved heroes</p>
              </motion.div>
            </Link>
            <Link to="/compare">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 text-center hover:border-purple-500/30 transition-colors"
              >
                <GitCompare className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="font-medium text-foreground">Compare</h3>
                <p className="text-xs text-muted-foreground mt-1">Side by side stats</p>
              </motion.div>
            </Link>
            <Link to="/chat">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 text-center hover:border-green-500/30 transition-colors"
              >
                <MessageSquare className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-medium text-foreground">Chat</h3>
                <p className="text-xs text-muted-foreground mt-1">Talk with players</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
