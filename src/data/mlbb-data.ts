/**
 * ML Meta Hub - Static Data
 * Mobile Legends: Bang Bang Heroes, Builds, and Tier Lists
 * Data current as of February 2026 (Patch 1.9.20)
 */

import type { Hero, Build, TierListData, PatchVersion, HeroRole, TierRank } from '@/types';

// Patch Versions
export const patchVersions: PatchVersion[] = [
  { version: '1.9.20', label: 'Patch 1.9.20 (Current)', isCurrent: true },
  { version: '1.9.18', label: 'Patch 1.9.18', isCurrent: false },
  { version: '1.9.16', label: 'Patch 1.9.16', isCurrent: false },
  { version: '1.9.14', label: 'Patch 1.9.14', isCurrent: false },
];

// Hero Roles for filtering
export const heroRoles: HeroRole[] = ['Tank', 'Mage', 'Assassin', 'Marksman', 'Support', 'Fighter'];

// Tier Rankings
export const tierRanks: TierRank[] = ['S+', 'S', 'A', 'B', 'C'];

// Hero Database - 20 Meta Heroes (February 2026)
export const heroes: Hero[] = [
  {
    id: 'gloo',
    name: 'Gloo',
    role: 'Tank',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/e/e7/Hero01101-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/3/3e/Gloo_splash.jpg',
    tier: 'S+',
    winRate: 54.2,
    pickRate: 18.5,
    banRate: 22.3,
    difficulty: 'Medium',
    description: 'The Swamp Spirit with incredible crowd control and team fight presence.',
  },
  {
    id: 'sora',
    name: 'Sora',
    role: 'Support',
    secondaryRole: 'Mage',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/5/56/Hero01151-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/8/8e/Sora_splash.jpg',
    tier: 'S+',
    winRate: 53.8,
    pickRate: 15.2,
    banRate: 19.7,
    difficulty: 'Hard',
    description: 'The Temporal Mage who manipulates time to save allies and control fights.',
  },
  {
    id: 'freya',
    name: 'Freya',
    role: 'Fighter',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/3/3e/Hero00221-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/0/0e/Freya_splash.jpg',
    tier: 'S',
    winRate: 52.6,
    pickRate: 12.8,
    banRate: 8.5,
    difficulty: 'Medium',
    description: 'The Valkyrie with high mobility and burst damage in team fights.',
  },
  {
    id: 'helcurt',
    name: 'Helcurt',
    role: 'Assassin',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/5/5f/Hero00281-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/9/9a/Helcurt_splash.jpg',
    tier: 'S',
    winRate: 51.9,
    pickRate: 14.3,
    banRate: 15.2,
    difficulty: 'Hard',
    description: 'The Shadowbringer who silences enemies and strikes from darkness.',
  },
  {
    id: 'ixia',
    name: 'Ixia',
    role: 'Marksman',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/8/8d/Hero01081-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/9/9d/Ixia_splash.jpg',
    tier: 'S',
    winRate: 52.1,
    pickRate: 11.5,
    banRate: 6.8,
    difficulty: 'Medium',
    description: 'The Siren Priestess with life steal and area damage capabilities.',
  },
  {
    id: 'julian',
    name: 'Julian',
    role: 'Mage',
    secondaryRole: 'Assassin',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/9/9e/Hero01141-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/8/8f/Julian_splash.jpg',
    tier: 'S',
    winRate: 51.5,
    pickRate: 13.7,
    banRate: 11.3,
    difficulty: 'Hard',
    description: 'The Scarlet Raven with versatile skill combinations and high burst.',
  },
  {
    id: 'tigreal',
    name: 'Tigreal',
    role: 'Tank',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/4/4f/Hero00061-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/6/6e/Tigreal_splash.jpg',
    tier: 'A',
    winRate: 50.8,
    pickRate: 9.2,
    banRate: 3.5,
    difficulty: 'Easy',
    description: 'The Warrior of Dawn with strong initiation and crowd control.',
  },
  {
    id: 'atlas',
    name: 'Atlas',
    role: 'Tank',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/8/8a/Hero00961-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/9/9c/Atlas_splash.jpg',
    tier: 'A',
    winRate: 50.3,
    pickRate: 8.7,
    banRate: 5.2,
    difficulty: 'Hard',
    description: 'The Ocean Gladiator with map-wide ultimate and chain crowd control.',
  },
  {
    id: 'edith',
    name: 'Edith',
    role: 'Tank',
    secondaryRole: 'Marksman',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/7/7e/Hero01041-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/3/3e/Edith_splash.jpg',
    tier: 'A',
    winRate: 49.8,
    pickRate: 7.5,
    banRate: 4.1,
    difficulty: 'Medium',
    description: 'The Forsaken Guardian who transforms between tank and marksman modes.',
  },
  {
    id: 'alice',
    name: 'Alice',
    role: 'Mage',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/2/2e/Hero00161-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/4/4e/Alice_splash.jpg',
    tier: 'A',
    winRate: 50.1,
    pickRate: 6.8,
    banRate: 2.3,
    difficulty: 'Medium',
    description: 'The Queen of Blood with sustained damage and life steal.',
  },
  {
    id: 'ling',
    name: 'Ling',
    role: 'Assassin',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/7/7e/Hero00841-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/8/8e/Ling_splash.jpg',
    tier: 'A',
    winRate: 49.5,
    pickRate: 10.2,
    banRate: 12.5,
    difficulty: 'Hard',
    description: 'The Cyan Finch with wall-running mobility and high burst damage.',
  },
  {
    id: 'brody',
    name: 'Brody',
    role: 'Marksman',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/9/9e/Hero00911-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/0/0e/Brody_splash.jpg',
    tier: 'A',
    winRate: 50.6,
    pickRate: 8.9,
    banRate: 4.7,
    difficulty: 'Medium',
    description: 'The Lone Star with high burst damage and mobility.',
  },
  {
    id: 'angela',
    name: 'Angela',
    role: 'Support',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/5/5e/Hero00251-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/6/6e/Angela_splash.jpg',
    tier: 'B',
    winRate: 48.9,
    pickRate: 7.3,
    banRate: 6.2,
    difficulty: 'Easy',
    description: 'The Bunnylove with powerful healing and ultimate attachment.',
  },
  {
    id: 'zilong',
    name: 'Zilong',
    role: 'Fighter',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/2/2e/Hero00111-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/3/3e/Zilong_splash.jpg',
    tier: 'B',
    winRate: 48.2,
    pickRate: 5.8,
    banRate: 1.5,
    difficulty: 'Easy',
    description: 'The Dragon Warrior with high split-push pressure and dueling.',
  },
  {
    id: 'eudora',
    name: 'Eudora',
    role: 'Mage',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/4/4e/Hero00151-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/5/5e/Eudora_splash.jpg',
    tier: 'B',
    winRate: 47.8,
    pickRate: 4.9,
    banRate: 1.2,
    difficulty: 'Easy',
    description: 'The Lightning Sorceress with burst damage and stuns.',
  },
  {
    id: 'alucard',
    name: 'Alucard',
    role: 'Fighter',
    secondaryRole: 'Assassin',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/8/8e/Hero00071-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/9/9e/Alucard_splash.jpg',
    tier: 'C',
    winRate: 46.5,
    pickRate: 4.2,
    banRate: 0.8,
    difficulty: 'Medium',
    description: 'The Demon Hunter with high life steal and chase potential.',
  },
  {
    id: 'miya',
    name: 'Miya',
    role: 'Marksman',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/3/3e/Hero00011-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/4/4e/Miya_splash.jpg',
    tier: 'C',
    winRate: 45.8,
    pickRate: 3.5,
    banRate: 0.5,
    difficulty: 'Easy',
    description: 'The Moonlight Archer with attack speed and invisibility.',
  },
  {
    id: 'rafaela',
    name: 'Rafaela',
    role: 'Support',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/6/6e/Hero00141-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/7/7e/Rafaela_splash.jpg',
    tier: 'B',
    winRate: 48.1,
    pickRate: 5.2,
    banRate: 1.8,
    difficulty: 'Easy',
    description: 'The Wings of Holiness with healing and crowd control.',
  },
  {
    id: 'paquito',
    name: 'Paquito',
    role: 'Fighter',
    secondaryRole: 'Assassin',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/8/8e/Hero01021-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/9/9e/Paquito_splash.jpg',
    tier: 'S',
    winRate: 51.8,
    pickRate: 11.3,
    banRate: 9.5,
    difficulty: 'Hard',
    description: 'The Heavenly Fist with combo-based fighting style.',
  },
  {
    id: 'beatrix',
    name: 'Beatrix',
    role: 'Marksman',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/9/9e/Hero01051-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/0/0e/Beatrix_splash.jpg',
    tier: 'A',
    winRate: 50.2,
    pickRate: 9.7,
    banRate: 5.8,
    difficulty: 'Hard',
    description: 'The Dawnbreaker with four unique weapons and high skill ceiling.',
  },
  {
    id: 'yve',
    name: 'Yve',
    role: 'Mage',
    image: 'https://static.wikia.nocookie.net/mobile-legends/images/7/7e/Hero01031-portrait.png',
    splashImage: 'https://static.wikia.nocookie.net/mobile-legends/images/8/8e/Yve_splash.jpg',
    tier: 'A',
    winRate: 49.6,
    pickRate: 7.8,
    banRate: 4.2,
    difficulty: 'Medium',
    description: 'The Astrowarden with zone control and global ultimate.',
  },
];

// Sample Builds for Top Heroes
export const builds: Build[] = [
  // Gloo Builds
  {
    id: 'gloo-tank-meta',
    name: 'Meta Tank Build',
    heroId: 'gloo',
    patchVersion: '1.9.20',
    items: [
      { id: 'cursed-helmet', name: 'Cursed Helmet', icon: '🛡️', category: 'Defense' },
      { id: 'warrior-boots', name: 'Warrior Boots', icon: '👢', category: 'Movement' },
      { id: 'oracle', name: 'Oracle', icon: '🔮', category: 'Defense' },
      { id: 'immortality', name: 'Immortality', icon: '💀', category: 'Defense' },
      { id: 'dominance-ice', name: 'Dominance Ice', icon: '❄️', category: 'Defense' },
      { id: 'antique-cuirass', name: 'Antique Cuirass', icon: '🛡️', category: 'Defense' },
    ],
    emblem: {
      name: 'Tank Emblem',
      icon: '🛡️',
      talents: ['Tenacity', 'Brave Smite', 'Concussive Blast'],
    },
    spell: { name: 'Vengeance', icon: '🔥' },
    playstyleNotes: [
      'Initiate fights with Skill 2 (Slam) followed by Ultimate',
      'Stick to enemy carries to disable them',
      'Use passive stacks for sustain in extended fights',
      'Build full tank - you are the frontline',
    ],
    isProBuild: true,
    author: 'MPL Pro Build',
  },
  {
    id: 'gloo-support',
    name: 'Roaming Support Build',
    heroId: 'gloo',
    patchVersion: '1.9.20',
    items: [
      { id: 'cursed-helmet', name: 'Cursed Helmet', icon: '🛡️', category: 'Defense' },
      { id: 'war-boots', name: 'War Boots', icon: '👢', category: 'Movement' },
      { id: 'oracle', name: 'Oracle', icon: '🔮', category: 'Defense' },
      { id: 'fleeting-time', name: 'Fleeting Time', icon: '⏱️', category: 'Magic' },
      { id: 'immortality', name: 'Immortality', icon: '💀', category: 'Defense' },
      { id: 'dominance-ice', name: 'Dominance Ice', icon: '❄️', category: 'Defense' },
    ],
    emblem: {
      name: 'Support Emblem',
      icon: '💚',
      talents: ['Focusing Mark', 'Gift', 'Pull Yourself Together'],
    },
    spell: { name: 'Flameshot', icon: '🔥' },
    playstyleNotes: [
      'Build Fleeting Time for ultimate cooldown reduction',
      'Use Flameshot to disengage or save allies',
      'Focus on protecting your marksman',
      'Roam early and secure vision',
    ],
    author: 'Top Global Gloo',
  },

  // Sora Builds
  {
    id: 'sora-support-meta',
    name: 'Meta Support Build',
    heroId: 'sora',
    patchVersion: '1.9.20',
    items: [
      { id: 'enchanted-talisman', name: 'Enchanted Talisman', icon: '🔮', category: 'Magic' },
      { id: 'demon-shoes', name: 'Demon Shoes', icon: '👢', category: 'Movement' },
      { id: 'fleeting-time', name: 'Fleeting Time', icon: '⏱️', category: 'Magic' },
      { id: 'winter-truncheon', name: 'Winter Truncheon', icon: '❄️', category: 'Magic' },
      { id: 'immortality', name: 'Immortality', icon: '💀', category: 'Defense' },
      { id: 'divine-glaive', name: 'Divine Glaive', icon: '⚔️', category: 'Magic' },
    ],
    emblem: {
      name: 'Support Emblem',
      icon: '💚',
      talents: ['Focusing Mark', 'Gift', 'Pull Yourself Together'],
    },
    spell: { name: 'Flameshot', icon: '🔥' },
    playstyleNotes: [
      'Use Ultimate to rewind time on low HP allies',
      'Position safely - you are squishy',
      'Max Skill 1 first for poke and sustain',
      'Build Fleeting Time for more ultimates',
    ],
    isProBuild: true,
    author: 'MPL Pro Build',
  },

  // Freya Builds
  {
    id: 'freya-fighter-meta',
    name: 'Meta Fighter Build',
    heroId: 'freya',
    patchVersion: '1.9.20',
    items: [
      { id: 'war-axe', name: 'War Axe', icon: '🪓', category: 'Attack' },
      { id: 'warrior-boots', name: 'Warrior Boots', icon: '👢', category: 'Movement' },
      { id: 'endless-battle', name: 'Endless Battle', icon: '⚔️', category: 'Attack' },
      { id: 'queens-wings', name: "Queen's Wings", icon: '🦋', category: 'Defense' },
      { id: 'immortality', name: 'Immortality', icon: '💀', category: 'Defense' },
      { id: 'blade-of-despair', name: 'Blade of Despair', icon: '⚔️', category: 'Attack' },
    ],
    emblem: {
      name: 'Fighter Emblem',
      icon: '⚔️',
      talents: ['Festival of Blood', 'Brave Smite', 'Deathly Alliance'],
    },
    spell: { name: 'Vengeance', icon: '🔥' },
    playstyleNotes: [
      'Stack passive before engaging',
      'Use Skill 2 for shield and damage',
      'Jump on backline with Skill 1 + Ultimate',
      'Build War Axe first for sustain',
    ],
    isProBuild: true,
    author: 'MPL Pro Build',
  },
  {
    id: 'freya-burst',
    name: 'Burst Damage Build',
    heroId: 'freya',
    patchVersion: '1.9.20',
    items: [
      { id: 'blade-of-despair', name: 'Blade of Despair', icon: '⚔️', category: 'Attack' },
      { id: 'swift-boots', name: 'Swift Boots', icon: '👢', category: 'Movement' },
      { id: 'endless-battle', name: 'Endless Battle', icon: '⚔️', category: 'Attack' },
      { id: 'berserkers-fury', name: "Berserker's Fury", icon: '🪓', category: 'Attack' },
      { id: 'malefic-roar', name: 'Malefic Roar', icon: '⚔️', category: 'Attack' },
      { id: 'immortality', name: 'Immortality', icon: '💀', category: 'Defense' },
    ],
    emblem: {
      name: 'Assassin Emblem',
      icon: '🗡️',
      talents: ['Killing Spree', 'Master Assassin', 'Impure Rage'],
    },
    spell: { name: 'Retribution', icon: '🔥' },
    playstyleNotes: [
      'Full damage build - delete squishies',
      'Time your ultimate for maximum damage',
      'Use in jungle for farm speed',
      'Position carefully - less tanky',
    ],
    author: 'Top Global Freya',
  },

  // Helcurt Builds
  {
    id: 'helcurt-assassin-meta',
    name: 'Meta Assassin Build',
    heroId: 'helcurt',
    patchVersion: '1.9.20',
    items: [
      { id: 'war-axe', name: 'War Axe', icon: '🪓', category: 'Attack' },
      { id: 'swift-boots', name: 'Swift Boots', icon: '👢', category: 'Movement' },
      { id: 'endless-battle', name: 'Endless Battle', icon: '⚔️', category: 'Attack' },
      { id: 'blade-of-despair', name: 'Blade of Despair', icon: '⚔️', category: 'Attack' },
      { id: 'malefic-roar', name: 'Malefic Roar', icon: '⚔️', category: 'Attack' },
      { id: 'immortality', name: 'Immortality', icon: '💀', category: 'Defense' },
    ],
    emblem: {
      name: 'Assassin Emblem',
      icon: '🗡️',
      talents: ['Killing Spree', 'Master Assassin', 'Impure Rage'],
    },
    spell: { name: 'Retribution', icon: '🔥' },
    playstyleNotes: [
      'Silence enemies before they can react',
      'Use ultimate to engage or escape',
      'Target mages and marksmen first',
      'Build War Axe for jungle clear and sustain',
    ],
    isProBuild: true,
    author: 'MPL Pro Build',
  },

  // Ixia Builds
  {
    id: 'ixia-marksman-meta',
    name: 'Meta Marksman Build',
    heroId: 'ixia',
    patchVersion: '1.9.20',
    items: [
      { id: 'swift-boots', name: 'Swift Boots', icon: '👢', category: 'Movement' },
      { id: 'endless-battle', name: 'Endless Battle', icon: '⚔️', category: 'Attack' },
      { id: 'golden-staff', name: 'Golden Staff', icon: '⚔️', category: 'Attack' },
      { id: 'corrosion-scythe', name: 'Corrosion Scythe', icon: '🪓', category: 'Attack' },
      { id: 'blade-of-despair', name: 'Blade of Despair', icon: '⚔️', category: 'Attack' },
      { id: 'immortality', name: 'Immortality', icon: '💀', category: 'Defense' },
    ],
    emblem: {
      name: 'Marksman Emblem',
      icon: '🏹',
      talents: ['Weapon Master', 'Weakness Finder', 'Thunder Strike'],
    },
    spell: { name: 'Flicker', icon: '✨' },
    playstyleNotes: [
      'Position behind tank in team fights',
      'Use Skill 1 for poke and sustain',
      'Ultimate when enemies are grouped',
      'Build Golden Staff for attack speed cap',
    ],
    isProBuild: true,
    author: 'MPL Pro Build',
  },

  // Julian Builds
  {
    id: 'julian-mage-meta',
    name: 'Meta Mage Build',
    heroId: 'julian',
    patchVersion: '1.9.20',
    items: [
      { id: 'enchanted-talisman', name: 'Enchanted Talisman', icon: '🔮', category: 'Magic' },
      { id: 'demon-shoes', name: 'Demon Shoes', icon: '👢', category: 'Movement' },
      { id: 'lightning-truncheon', name: 'Lightning Truncheon', icon: '⚡', category: 'Magic' },
      { id: 'holy-crystal', name: 'Holy Crystal', icon: '💎', category: 'Magic' },
      { id: 'divine-glaive', name: 'Divine Glaive', icon: '⚔️', category: 'Magic' },
      { id: 'immortality', name: 'Immortality', icon: '💀', category: 'Defense' },
    ],
    emblem: {
      name: 'Mage Emblem',
      icon: '🔮',
      talents: ['Mystery Shop', 'Impure Rage', 'Magic Worship'],
    },
    spell: { name: 'Flicker', icon: '✨' },
    playstyleNotes: [
      'Combo skills for maximum damage (1-2-3 or 2-1-3)',
      'Use Skill 1 for poke and sustain',
      'Ultimate when enemies are low or grouped',
      'Build Lightning Truncheon for burst',
    ],
    isProBuild: true,
    author: 'MPL Pro Build',
  },
];

// Current Tier List Data
export const currentTierList: TierListData = {
  patchVersion: '1.9.20',
  releaseDate: '2026-02-15',
  tiers: {
    'S+': heroes.filter(h => h.tier === 'S+'),
    'S': heroes.filter(h => h.tier === 'S'),
    'A': heroes.filter(h => h.tier === 'A'),
    'B': heroes.filter(h => h.tier === 'B'),
    'C': heroes.filter(h => h.tier === 'C'),
  },
};

// Featured Heroes for Home Page (Top Meta)
export const featuredHeroes = heroes.filter(h => h.tier === 'S+' || h.tier === 'S').slice(0, 8);

// Latest Meta Builds for Home Page
export const latestMetaBuilds = builds.filter(b => b.isProBuild).slice(0, 4);

// Helper function to get hero by ID
export const getHeroById = (id: string): Hero | undefined => {
  return heroes.find(h => h.id === id);
};

// Helper function to get builds for hero
export const getBuildsByHeroId = (heroId: string): Build[] => {
  return builds.filter(b => b.heroId === heroId);
};

// Helper function to get heroes by role
export const getHeroesByRole = (role: HeroRole): Hero[] => {
  return heroes.filter(h => h.role === role || h.secondaryRole === role);
};

// Helper function to get heroes by tier
export const getHeroesByTier = (tier: TierRank): Hero[] => {
  return heroes.filter(h => h.tier === tier);
};
