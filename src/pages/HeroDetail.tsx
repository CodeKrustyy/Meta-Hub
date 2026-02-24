/**
 * Meta Hub - Hero Detail Page
 * Hero information, stats, and build recommendations
 */

import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  Ban, 
  Target,
  Zap,
  Award,
  Users2,
  Sparkles,
  Heart,
  Hammer,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TierBadge } from '@/components/TierBadge';
import { BuildCard } from '@/components/BuildCard';
import { getHeroById, allHeroes } from '@/data/heroes-data';
import { useCommunityBuilds, useFavorites } from '@/hooks/useLocalStorage';
import type { HeroRole } from '@/types';

const roleColors: Record<HeroRole, string> = {
  Tank: 'text-green-400 bg-green-500/10 border-green-500/20',
  Fighter: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  Assassin: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  Mage: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  Marksman: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  Support: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
};

const difficultyColors = {
  Easy: 'text-green-400',
  Medium: 'text-yellow-400',
  Hard: 'text-red-400',
};

export function HeroDetail() {
  const { heroId } = useParams<{ heroId: string }>();
  const [activeTab, setActiveTab] = useState('recommended');
  const { getBuildsByHero } = useCommunityBuilds();
  const { isFavorite, toggleFavorite } = useFavorites();

  const hero = heroId ? getHeroById(heroId) : undefined;
  const builds = heroId ? getBuildsByHero(heroId) : [];
  const favorite = hero ? isFavorite(hero.id) : false;

  // Get related heroes (same role)
  const relatedHeroes = hero 
    ? allHeroes.filter(h => h.id !== hero.id && (h.role === hero.role || h.secondaryRole === hero.role)).slice(0, 4)
    : [];

  if (!hero) {
    return <Navigate to="/heroes" replace />;
  }

  return (
    <div className="min-h-screen animated-bg">
      {/* Hero Header */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${hero.splashImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Back Button */}
          <div className="flex items-center justify-between mb-6">
            <Link to="/heroes">
              <Button 
                variant="ghost" 
                className="gap-2 -ml-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Heroes
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleFavorite(hero.id)}
              className={`${favorite ? 'text-pink-400' : 'text-muted-foreground hover:text-pink-400'}`}
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Hero Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-shrink-0"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/200x200/1a1f2e/00ffff?text=${hero.name.charAt(0)}`;
                  }}
                />
              </div>
            </motion.div>

            {/* Hero Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{hero.name}</h1>
                <TierBadge tier={hero.tier} size="md" />
              </div>

              {/* Roles */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-medium ${roleColors[hero.role]}`}>
                  <Target className="w-3.5 h-3.5" />
                  {hero.role}
                </span>
                {hero.secondaryRole && (
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-medium ${roleColors[hero.secondaryRole]}`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    {hero.secondaryRole}
                  </span>
                )}
              </div>

              {/* Description */}
              {hero.description && (
                <p className="text-muted-foreground mb-4 max-w-2xl">{hero.description}</p>
              )}

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="glass-card p-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-xs">Win Rate</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">{hero.winRate}%</p>
                </div>

                <div className="glass-card p-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-xs">Pick Rate</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">{hero.pickRate}%</p>
                </div>

                {hero.banRate && (
                  <div className="glass-card p-3">
                    <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                      <Ban className="w-4 h-4 text-red-400" />
                      <span className="text-xs">Ban Rate</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">{hero.banRate}%</p>
                  </div>
                )}

                <div className="glass-card p-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs">Difficulty</span>
                  </div>
                  <p className={`text-lg font-bold ${difficultyColors[hero.difficulty]}`}>
                    {hero.difficulty}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Builds Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Hammer className="w-5 h-5 text-orange-400" />
              Builds
            </h2>
            <Link to={`/build-editor/${hero.id}`}>
              <Button variant="outline" size="sm" className="gap-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                <Plus className="w-4 h-4" />
                Add Build
              </Button>
            </Link>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex mb-6">
              <TabsTrigger value="recommended" className="gap-2">
                <Award className="w-4 h-4" />
                <span className="hidden sm:inline">Recommended</span>
                <span className="sm:hidden">Best</span>
              </TabsTrigger>
              <TabsTrigger value="pro" className="gap-2">
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">Pro Builds</span>
                <span className="sm:hidden">Pro</span>
              </TabsTrigger>
              <TabsTrigger value="community" className="gap-2">
                <Users2 className="w-4 h-4" />
                <span className="hidden sm:inline">Community</span>
                <span className="sm:hidden">Community</span>
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent value="recommended" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {builds.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {builds.slice(0, 2).map((build) => (
                        <BuildCard key={build.id} build={{
                          id: build.id,
                          name: build.name,
                          heroId: build.heroId,
                          items: [],
                          emblem: { name: build.emblemName, icon: '', talents: [build.emblemTalent] },
                          spell: { name: build.spellName, icon: '' },
                          playstyleNotes: build.playstyleNotes,
                          author: build.author,
                          patchVersion: build.patchVersion,
                          votes: build.votes,
                          isCommunityBuild: true,
                        }} heroName={hero.name} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 glass-card">
                      <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🛠️</span>
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">No builds yet</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Be the first to share a build for {hero.name}!
                      </p>
                      <Link to={`/build-editor/${hero.id}`}>
                        <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
                          <Plus className="w-4 h-4" />
                          Create Build
                        </Button>
                      </Link>
                    </div>
                  )}
                </motion.div>
              </TabsContent>

              <TabsContent value="pro" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center py-16 glass-card"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Pro builds coming soon</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional builds from MPL players will be added here.
                  </p>
                </motion.div>
              </TabsContent>

              <TabsContent value="community" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {builds.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {builds.map((build) => (
                        <BuildCard key={build.id} build={{
                          id: build.id,
                          name: build.name,
                          heroId: build.heroId,
                          items: [],
                          emblem: { name: build.emblemName, icon: '', talents: [build.emblemTalent] },
                          spell: { name: build.spellName, icon: '' },
                          playstyleNotes: build.playstyleNotes,
                          author: build.author,
                          patchVersion: build.patchVersion,
                          votes: build.votes,
                          isCommunityBuild: true,
                        }} heroName={hero.name} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 glass-card">
                      <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">👥</span>
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">No community builds yet</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Share your build with the community!
                      </p>
                      <Link to={`/build-editor/${hero.id}`}>
                        <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
                          <Plus className="w-4 h-4" />
                          Create Build
                        </Button>
                      </Link>
                    </div>
                  )}
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* Related Heroes */}
      {relatedHeroes.length > 0 && (
        <section className="py-8 sm:py-12 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Similar Heroes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedHeroes.map((relatedHero) => (
                <Link key={relatedHero.id} to={`/hero/${relatedHero.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-3 flex items-center gap-3 group"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                      <img
                        src={relatedHero.image}
                        alt={relatedHero.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://placehold.co/100x100/1a1f2e/00ffff?text=${relatedHero.name.charAt(0)}`;
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{relatedHero.name}</p>
                      <TierBadge tier={relatedHero.tier} size="sm" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
