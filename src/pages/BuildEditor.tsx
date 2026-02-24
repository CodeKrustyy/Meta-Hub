/**
 * Meta Hub - Build Editor Page
 * Create and share custom hero builds
 */

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Save, Plus, X, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCommunityBuilds, useUserProfile } from '@/hooks/useLocalStorage';
import { allHeroes } from '@/data/heroes-data';
import { allItems, battleSpells, emblemSets } from '@/data/items-data';

export function BuildEditor() {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const { addBuild } = useCommunityBuilds();
  const { profile, isLoggedIn } = useUserProfile();

  const [selectedHero, setSelectedHero] = useState(heroId || '');
  const [buildName, setBuildName] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedEmblem, setSelectedEmblem] = useState('');
  const [selectedEmblemTalent, setSelectedEmblemTalent] = useState('');
  const [selectedSpell, setSelectedSpell] = useState('');
  const [playstyleNotes, setPlaystyleNotes] = useState<string[]>(['']);
  const [showItemSelector, setShowItemSelector] = useState(false);

  const hero = allHeroes.find(h => h.id === selectedHero);
  const emblem = emblemSets.find(e => e.name === selectedEmblem);

  const handleAddItem = (itemId: string) => {
    if (selectedItems.length < 6 && !selectedItems.includes(itemId)) {
      setSelectedItems([...selectedItems, itemId]);
    }
    setShowItemSelector(false);
  };

  const handleRemoveItem = (index: number) => {
    setSelectedItems(selectedItems.filter((_, i) => i !== index));
  };

  const handleAddNote = () => {
    setPlaystyleNotes([...playstyleNotes, '']);
  };

  const handleUpdateNote = (index: number, value: string) => {
    const newNotes = [...playstyleNotes];
    newNotes[index] = value;
    setPlaystyleNotes(newNotes);
  };

  const handleRemoveNote = (index: number) => {
    setPlaystyleNotes(playstyleNotes.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (!isLoggedIn || !profile) {
      alert('Please sign in to create a build');
      return;
    }

    if (!selectedHero || !buildName || selectedItems.length === 0 || !selectedEmblem || !selectedSpell) {
      alert('Please fill in all required fields');
      return;
    }

    addBuild({
      name: buildName,
      heroId: selectedHero,
      itemIds: selectedItems,
      emblemName: selectedEmblem,
      emblemTalent: selectedEmblemTalent || emblem?.talents[0] || '',
      spellName: selectedSpell,
      playstyleNotes: playstyleNotes.filter(n => n.trim()),
      author: profile.username,
      authorId: profile.id,
      patchVersion: '1.9.20',
    });

    navigate('/builds');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen animated-bg flex items-center justify-center">
        <div className="text-center">
          <Hammer className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-bold text-foreground mb-2">Sign in Required</h2>
          <p className="text-muted-foreground">Please sign in to create builds</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animated-bg">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Hammer className="w-8 h-8 text-orange-400" />
              <h1 className="text-2xl font-bold text-foreground">Create Build</h1>
            </div>
            <Button onClick={handleSave} className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600">
              <Save className="w-4 h-4" />
              Save Build
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Hero Selection */}
            <div className="glass-card p-4">
              <label className="block text-sm font-medium text-muted-foreground mb-2">Select Hero *</label>
              <select
                value={selectedHero}
                onChange={(e) => setSelectedHero(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground focus:border-cyan-500/50 focus:outline-none"
              >
                <option value="">Choose a hero...</option>
                {allHeroes.map(hero => (
                  <option key={hero.id} value={hero.id}>{hero.name}</option>
                ))}
              </select>
              {hero && (
                <div className="mt-4 flex items-center gap-4">
                  <img src={hero.image} alt={hero.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-bold text-foreground">{hero.name}</h3>
                    <p className="text-sm text-muted-foreground">{hero.role}{hero.secondaryRole && ` / ${hero.secondaryRole}`}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Build Name */}
            <div className="glass-card p-4">
              <label className="block text-sm font-medium text-muted-foreground mb-2">Build Name *</label>
              <Input
                value={buildName}
                onChange={(e) => setBuildName(e.target.value)}
                placeholder="e.g., Meta Tank Build"
                className="search-input"
              />
            </div>

            {/* Items Selection */}
            <div className="glass-card p-4">
              <label className="block text-sm font-medium text-muted-foreground mb-2">Items ({selectedItems.length}/6) *</label>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedItems.map((itemId, index) => {
                  const item = allItems.find(i => i.id === itemId);
                  return (
                    <div key={index} className="relative group">
                      <div className="w-14 h-14 rounded-lg bg-secondary/50 flex items-center justify-center border border-border">
                        {item?.icon ? (
                          <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
                        ) : (
                          <span className="text-xs">?</span>
                        )}
                      </div>
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  );
                })}
                {selectedItems.length < 6 && (
                  <button
                    onClick={() => setShowItemSelector(!showItemSelector)}
                    className="w-14 h-14 rounded-lg bg-secondary/30 border border-dashed border-border flex items-center justify-center hover:border-cyan-500/50 transition-colors"
                  >
                    <Plus className="w-6 h-6 text-muted-foreground" />
                  </button>
                )}
              </div>

              {/* Item Selector */}
              {showItemSelector && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="border border-border rounded-lg p-4 max-h-64 overflow-y-auto"
                >
                  <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
                    {allItems.map(item => (
                      <button
                        key={item.id}
                        onClick={() => handleAddItem(item.id)}
                        disabled={selectedItems.includes(item.id)}
                        className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center disabled:opacity-50 hover:border-cyan-500/50 border border-transparent transition-colors`}
                        title={item.name}
                      >
                        {item.icon ? (
                          <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                        ) : (
                          <span className="text-xs">{item.name.charAt(0)}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Emblem & Spell */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <label className="block text-sm font-medium text-muted-foreground mb-2">Emblem Set *</label>
                <select
                  value={selectedEmblem}
                  onChange={(e) => {
                    setSelectedEmblem(e.target.value);
                    setSelectedEmblemTalent('');
                  }}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground focus:border-cyan-500/50 focus:outline-none"
                >
                  <option value="">Select emblem...</option>
                  {emblemSets.map(emblem => (
                    <option key={emblem.name} value={emblem.name}>{emblem.name}</option>
                  ))}
                </select>
                {emblem && (
                  <select
                    value={selectedEmblemTalent}
                    onChange={(e) => setSelectedEmblemTalent(e.target.value)}
                    className="w-full mt-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground focus:border-cyan-500/50 focus:outline-none"
                  >
                    <option value="">Select talent...</option>
                    {emblem.talents.map(talent => (
                      <option key={talent} value={talent}>{talent}</option>
                    ))}
                  </select>
                )}
              </div>

              <div className="glass-card p-4">
                <label className="block text-sm font-medium text-muted-foreground mb-2">Battle Spell *</label>
                <select
                  value={selectedSpell}
                  onChange={(e) => setSelectedSpell(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground focus:border-cyan-500/50 focus:outline-none"
                >
                  <option value="">Select spell...</option>
                  {battleSpells.map(spell => (
                    <option key={spell.name} value={spell.name}>{spell.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Playstyle Notes */}
            <div className="glass-card p-4">
              <label className="block text-sm font-medium text-muted-foreground mb-2">Playstyle Tips</label>
              <div className="space-y-2">
                {playstyleNotes.map((note, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={note}
                      onChange={(e) => handleUpdateNote(index, e.target.value)}
                      placeholder={`Tip ${index + 1}`}
                      className="search-input flex-1"
                    />
                    {playstyleNotes.length > 1 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveNote(index)}
                        className="text-red-400"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAddNote}
                className="mt-2 gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Tip
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
