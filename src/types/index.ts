/**
 * Meta Hub - TypeScript Type Definitions
 * Mobile Legends: Bang Bang Gaming Hub
 */

// Hero Role Types
export type HeroRole = 'Tank' | 'Mage' | 'Assassin' | 'Marksman' | 'Support' | 'Fighter';

// Tier Rankings
export type TierRank = 'S+' | 'S' | 'A' | 'B' | 'C';

// Hero Interface
export interface Hero {
  id: string;
  name: string;
  role: HeroRole;
  secondaryRole?: HeroRole;
  image: string;
  splashImage: string;
  tier: TierRank;
  winRate: number;
  pickRate: number;
  banRate?: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description?: string;
}

// Equipment Item
export interface EquipmentItem {
  id: string;
  name: string;
  icon: string;
  category: 'Attack' | 'Magic' | 'Defense' | 'Movement' | 'Jungle' | 'Roaming';
}

// Emblem Set
export interface EmblemSet {
  name: string;
  icon: string;
  talents: string[];
}

// Battle Spell
export interface BattleSpell {
  name: string;
  icon: string;
}

// Build Configuration
export interface Build {
  id: string;
  name: string;
  heroId: string;
  items: EquipmentItem[];
  emblem: EmblemSet;
  spell: BattleSpell;
  playstyleNotes: string[];
  author?: string;
  isProBuild?: boolean;
  patchVersion: string;
  votes?: number;
  createdAt?: string;
  isCommunityBuild?: boolean;
}

// User-Created Build (for community submissions)
export interface UserBuild {
  id: string;
  name: string;
  heroId: string;
  itemIds: string[];
  emblemName: string;
  emblemTalent: string;
  spellName: string;
  playstyleNotes: string[];
  author: string;
  authorId: string;
  patchVersion: string;
  votes: number;
  createdAt: string;
  updatedAt?: string;
}

// Tier List Data
export interface TierListData {
  patchVersion: string;
  releaseDate: string;
  tiers: Record<TierRank, Hero[]>;
}

// User-Created Tier List
export interface UserTierList {
  id: string;
  name: string;
  author: string;
  authorId: string;
  patchVersion: string;
  description?: string;
  tiers: Record<TierRank, string[]>; // hero IDs
  createdAt: string;
  updatedAt?: string;
  votes: number;
  isPublic: boolean;
}

// Patch Version
export interface PatchVersion {
  version: string;
  label: string;
  isCurrent: boolean;
}

// Navigation Item
export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}

// Chat Message
export interface ChatMessage {
  id: string;
  userId: string;
  username: string;
  avatar?: string;
  message: string;
  timestamp: string;
  room: string;
  replyTo?: string;
}

// Chat Room
export interface ChatRoom {
  id: string;
  name: string;
  description: string;
  icon: string;
  memberCount: number;
  lastMessage?: ChatMessage;
}

// User Profile
export interface UserProfile {
  id: string;
  username: string;
  avatar?: string;
  bio?: string;
  favoriteHeroes: string[];
  createdBuilds: string[];
  createdTierLists: string[];
  votedBuilds: string[];
  joinedAt: string;
}

// Hero Comparison
export interface HeroComparison {
  heroIds: string[];
  stats: {
    winRate: number[];
    pickRate: number[];
    banRate: number[];
  };
}

// Notification
export interface Notification {
  id: string;
  type: 'build_vote' | 'tier_list_vote' | 'mention' | 'reply';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
}

// Filter Options
export interface HeroFilterOptions {
  role: HeroRole | 'All';
  tier: TierRank | 'All';
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'All';
  searchQuery: string;
  sortBy: 'name' | 'tier' | 'winRate' | 'pickRate';
  sortOrder: 'asc' | 'desc';
}
