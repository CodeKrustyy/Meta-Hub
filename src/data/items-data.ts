/**
 * Meta Hub - Complete Items Database
 * All Mobile Legends: Bang Bang Equipment Items
 * Images sourced from Mobile Legends Fandom Wiki
 */

import type { EquipmentItem, BattleSpell, EmblemSet } from '@/types';

// Attack Items
export const attackItems: EquipmentItem[] = [
  { id: 'berserkers-fury', name: "Berserker's Fury", icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Berserker%27s_Fury.png', category: 'Attack' },
  { id: 'blade-of-despair', name: 'Blade of Despair', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Blade_of_Despair.png', category: 'Attack' },
  { id: 'blade-of-the-heptaseas', name: 'Blade of the Heptaseas', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Blade_of_the_Heptaseas.png', category: 'Attack' },
  { id: 'corrosion-scythe', name: 'Corrosion Scythe', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Corrosion_Scythe.png', category: 'Attack' },
  { id: 'demon-hunter-sword', name: 'Demon Hunter Sword', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Demon_Hunter_Sword.png', category: 'Attack' },
  { id: 'endless-battle', name: 'Endless Battle', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Endless_Battle.png', category: 'Attack' },
  { id: 'fleeting-time', name: 'Fleeting Time', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Fleeting_Time.png', category: 'Attack' },
  { id: 'golden-staff', name: 'Golden Staff', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Golden_Staff.png', category: 'Attack' },
  { id: 'great-dragon-spear', name: 'Great Dragon Spear', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Great_Dragon_Spear.png', category: 'Attack' },
  { id: 'haas-claws', name: "Haas' Claws", icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Haas%27_Claws.png', category: 'Attack' },
  { id: 'hunter-strike', name: 'Hunter Strike', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Hunter_Strike.png', category: 'Attack' },
  { id: 'malefic-gun', name: 'Malefic Gun', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Malefic_Gun.png', category: 'Attack' },
  { id: 'malefic-roar', name: 'Malefic Roar', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Malefic_Roar.png', category: 'Attack' },
  { id: 'rose-gold-meteor', name: 'Rose Gold Meteor', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Rose_Gold_Meteor.png', category: 'Attack' },
  { id: 'sea-halberd', name: 'Sea Halberd', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Sea_Halberd.png', category: 'Attack' },
  { id: 'sky-piercer', name: 'Sky Piercer', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Sky_Piercer.png', category: 'Attack' },
  { id: 'war-axe', name: 'War Axe', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/War_Axe.png', category: 'Attack' },
  { id: 'wind-of-nature', name: 'Wind of Nature', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Wind_of_Nature.png', category: 'Attack' },
  { id: 'windtalker', name: 'Windtalker', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Windtalker.png', category: 'Attack' },
  { id: 'winter-crown', name: 'Winter Crown', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Winter_Crown.png', category: 'Attack' },
  { id: 'scarlet-phantom', name: 'Scarlet Phantom', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Scarlet_Phantom.png', category: 'Attack' },
  { id: 'starlium-scythe', name: 'Starlium Scythe', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Starlium_Scythe.png', category: 'Attack' },
  { id: 'shadow-twinblades', name: 'Shadow Twinblades', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Shadow_Twinblades.png', category: 'Attack' },
  { id: 'blade-armor', name: 'Blade Armor', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Blade_Armor.png', category: 'Attack' },
];

// Magic Items
export const magicItems: EquipmentItem[] = [
  { id: 'blood-wings', name: 'Blood Wings', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Blood_Wings.png', category: 'Magic' },
  { id: 'clock-of-destiny', name: 'Clock of Destiny', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Clock_of_Destiny.png', category: 'Magic' },
  { id: 'concentrated-energy', name: 'Concentrated Energy', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Concentrated_Energy.png', category: 'Magic' },
  { id: 'divine-glaive', name: 'Divine Glaive', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Divine_Glaive.png', category: 'Magic' },
  { id: 'enchanted-talisman', name: 'Enchanted Talisman', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Enchanted_Talisman.png', category: 'Magic' },
  { id: 'feather-of-heaven', name: 'Feather of Heaven', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Feather_of_Heaven.png', category: 'Magic' },
  { id: 'flask-of-the-oasis', name: 'Flask of the Oasis', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Flask_of_the_Oasis.png', category: 'Magic' },
  { id: 'genius-wand', name: 'Genius Wand', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Genius_Wand.png', category: 'Magic' },
  { id: 'glowing-wand', name: 'Glowing Wand', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Glowing_Wand.png', category: 'Magic' },
  { id: 'holy-crystal', name: 'Holy Crystal', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Holy_Crystal.png', category: 'Magic' },
  { id: 'ice-queen-wand', name: 'Ice Queen Wand', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Ice_Queen_Wand.png', category: 'Magic' },
  { id: 'lightning-truncheon', name: 'Lightning Truncheon', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Lightning_Truncheon.png', category: 'Magic' },
  { id: 'wishing-lantern', name: 'Wishing Lantern', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Wishing_Lantern.png', category: 'Magic' },
  { id: 'calamity-reaper', name: 'Calamity Reaper', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Calamity_Reaper.png', category: 'Magic' },
  { id: 'deadly-blade', name: 'Deadly Blade', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Deadly_Blade.png', category: 'Magic' },
  { id: 'necklace-of-durance', name: 'Necklace of Durance', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Necklace_of_Durance.png', category: 'Magic' },
  { id: 'azure-blade', name: 'Azure Blade', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Azure_Blade.png', category: 'Magic' },
  { id: 'elegant-gem', name: 'Elegant Gem', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Elegant_Gem.png', category: 'Magic' },
  { id: 'exotic-veil', name: 'Exotic Veil', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Exotic_Veil.png', category: 'Magic' },
  { id: 'magic-wand', name: 'Magic Wand', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Magic_Wand.png', category: 'Magic' },
  { id: 'tome-of-evil', name: 'Tome of Evil', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/magic/Tome_of_Evil.png', category: 'Magic' },
];

// Defense Items
export const defenseItems: EquipmentItem[] = [
  { id: 'antique-cuirass', name: 'Antique Cuirass', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Antique_Cuirass.png', category: 'Defense' },
  { id: 'athenas-shield', name: "Athena's Shield", icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Athena%27s_Shield.png', category: 'Defense' },
  { id: 'blade-armor', name: 'Blade Armor', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Blade_Armor.png', category: 'Defense' },
  { id: 'brute-force-breastplate', name: 'Brute Force Breastplate', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Brute_Force_Breastplate.png', category: 'Defense' },
  { id: 'cursed-helmet', name: 'Cursed Helmet', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Cursed_Helmet.png', category: 'Defense' },
  { id: 'dominance-ice', name: 'Dominance Ice', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Dominance_Ice.png', category: 'Defense' },
  { id: 'guardian-helmet', name: 'Guardian Helmet', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Guardian_Helmet.png', category: 'Defense' },
  { id: 'immortality', name: 'Immortality', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Immortality.png', category: 'Defense' },
  { id: 'oracle', name: 'Oracle', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Oracle.png', category: 'Defense' },
  { id: 'queens-wings', name: "Queen's Wings", icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Queen%27s_Wings.png', category: 'Defense' },
  { id: 'radiant-armor', name: 'Radiant Armor', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Radiant_Armor.png', category: 'Defense' },
  { id: 'thunder-belt', name: 'Thunder Belt', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Thunder_Belt.png', category: 'Defense' },
  { id: 'twilight-armor', name: 'Twilight Armor', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Twilight_Armor.png', category: 'Defense' },
  { id: 'ares-belt', name: 'Ares Belt', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Ares_Belt.png', category: 'Defense' },
  { id: 'black-ice-shield', name: 'Black Ice Shield', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Black_Ice_Shield.png', category: 'Defense' },
  { id: 'dreadnaught-armor', name: 'Dreadnaught Armor', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Dreadnaught_Armor.png', category: 'Defense' },
  { id: 'molten-essence', name: 'Molten Essence', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Molten_Essence.png', category: 'Defense' },
  { id: 'silence-robe', name: 'Silence Robe', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Silence_Robe.png', category: 'Defense' },
  { id: 'steel-legplates', name: 'Steel Legplates', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Steel_Legplates.png', category: 'Defense' },
  { id: 'healing-necklace', name: 'Healing Necklace', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Healing_Necklace.png', category: 'Defense' },
  { id: 'heros-ring', name: "Hero's Ring", icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Hero%27s_Ring.png', category: 'Defense' },
  { id: 'leather-jerkin', name: 'Leather Jerkin', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Leather_Jerkin.png', category: 'Defense' },
  { id: 'magic-resist-cloak', name: 'Magic Resist Cloak', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Magic_Resist_Cloak.png', category: 'Defense' },
  { id: 'vitality-crystal', name: 'Vitality Crystal', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Vitality_Crystal.png', category: 'Defense' },
  { id: 'chastise-pauldron', name: 'Chastise Pauldron', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/defense/Chastise_Pauldron.png', category: 'Defense' },
];

// Movement/Boots Items
export const movementItems: EquipmentItem[] = [
  { id: 'arcane-boots', name: 'Arcane Boots', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/boots/Arcane_Boots.png', category: 'Movement' },
  { id: 'demon-shoes', name: 'Demon Shoes', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/boots/Demon_Shoes.png', category: 'Movement' },
  { id: 'magic-shoes', name: 'Magic Shoes', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/boots/Magic_Shoes.png', category: 'Movement' },
  { id: 'rapid-boots', name: 'Rapid Boots', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/boots/Rapid_Boots.png', category: 'Movement' },
  { id: 'swift-boots', name: 'Swift Boots', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/boots/Swift_Boots.png', category: 'Movement' },
  { id: 'tough-boots', name: 'Tough Boots', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/boots/Tough_Boots.png', category: 'Movement' },
  { id: 'warrior-boots', name: 'Warrior Boots', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/boots/Warrior_Boots.png', category: 'Movement' },
  { id: 'boots', name: 'Boots', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/boots/Boots.png', category: 'Movement' },
];

// Jungle Items
export const jungleItems: EquipmentItem[] = [
  { id: 'beast-killer', name: 'Beast Killer', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/jungle/Beast_Killer.png', category: 'Jungle' },
  { id: 'bloodlust-axe', name: 'Bloodlust Axe', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/attack/Bloodlust_Axe.png', category: 'Jungle' },
  { id: 'hunter-knife', name: "Hunter's Knife", icon: 'https://static.wikia.nocookie.net/mobile-legends/images/jungle/Hunter%27s_Knife.png', category: 'Jungle' },
  { id: 'pillager-axe', name: 'Pillager Axe', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/jungle/Pillager_Axe.png', category: 'Jungle' },
  { id: 'raptor-machete', name: 'Raptor Machete', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/jungle/Raptor_Machete.png', category: 'Jungle' },
  { id: 'bloody-retribution', name: 'Bloody Retribution', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/jungle/Bloody_Retribution.png', category: 'Jungle' },
  { id: 'flame-retribution', name: 'Flame Retribution', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/jungle/Flame_Retribution.png', category: 'Jungle' },
  { id: 'ice-retribution', name: 'Ice Retribution', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/jungle/Ice_Retribution.png', category: 'Jungle' },
];

// Roaming Items
export const roamingItems: EquipmentItem[] = [
  { id: 'conceal', name: 'Conceal', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/roam/Conceal.png', category: 'Roaming' },
  { id: 'dire-hit', name: 'Dire Hit', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/roam/Dire_Hit.png', category: 'Roaming' },
  { id: 'encourage', name: 'Encourage', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/roam/Encourage.png', category: 'Roaming' },
  { id: 'favor', name: 'Favor', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/roam/Favor.png', category: 'Roaming' },
  { id: 'awe-mask', name: 'Awe Mask', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/roam/Awe_Mask.png', category: 'Roaming' },
  { id: 'courage-mask', name: 'Courage Mask', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/roam/Courage_Mask.png', category: 'Roaming' },
  { id: 'shadow-mask', name: 'Shadow Mask', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/roam/Shadow_Mask.png', category: 'Roaming' },
];

// All Items Combined
export const allItems: EquipmentItem[] = [
  ...attackItems,
  ...magicItems,
  ...defenseItems,
  ...movementItems,
  ...jungleItems,
  ...roamingItems,
];

// Battle Spells
export const battleSpells: BattleSpell[] = [
  { name: 'Retribution', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Retribution.png' },
  { name: 'Inspire', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Inspire.png' },
  { name: 'Sprint', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Sprint.png' },
  { name: 'Execute', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Execute.png' },
  { name: 'Revitalize', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Revitalize.png' },
  { name: 'Aegis', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Aegis.png' },
  { name: 'Petrify', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Petrify.png' },
  { name: 'Purify', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Purify.png' },
  { name: 'Flicker', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Flicker.png' },
  { name: 'Flameshot', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Flameshot.png' },
  { name: 'Arrival', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Arrival.png' },
  { name: 'Vengeance', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Vengeance.png' },
  { name: 'Surprise', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Surprise.png' },
  { name: 'Cherish', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Cherish.png' },
  { name: 'Greed', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/spells/Greed.png' },
];

// Emblem Sets
export const emblemSets: EmblemSet[] = [
  { name: 'Tank Emblem', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/emblems/Tank_Emblem.png', talents: ['Tenacity', 'Brave Smite', 'Concussive Blast', 'Focusing Mark', 'Life Drain'] },
  { name: 'Fighter Emblem', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/emblems/Fighter_Emblem.png', talents: ['Festival of Blood', 'Brave Smite', 'Deathly Alliance', 'Spell Vamp', 'Unbending Will'] },
  { name: 'Assassin Emblem', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/emblems/Assassin_Emblem.png', talents: ['Killing Spree', 'Master Assassin', 'Impure Rage', 'Quantum Charge', 'Seasoned Hunter'] },
  { name: 'Mage Emblem', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/emblems/Mage_Emblem.png', talents: ['Mystery Shop', 'Impure Rage', 'Magic Worship', 'Quantum Charge', 'Lethal Ignition'] },
  { name: 'Marksman Emblem', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/emblems/Marksman_Emblem.png', talents: ['Weapon Master', 'Weakness Finder', 'Thunder Strike', 'Quantum Charge', 'Tactical Pursuit'] },
  { name: 'Support Emblem', icon: 'https://static.wikia.nocookie.net/mobile-legends/images/emblems/Support_Emblem.png', talents: ['Focusing Mark', 'Gift', 'Pull Yourself Together', 'Healing Hand', 'Life Drain'] },
];

// Helper functions
export const getItemById = (id: string): EquipmentItem | undefined => {
  return allItems.find(item => item.id === id);
};

export const getItemsByCategory = (category: string): EquipmentItem[] => {
  return allItems.filter(item => item.category === category);
};

export const getSpellByName = (name: string): BattleSpell | undefined => {
  return battleSpells.find(spell => spell.name === name);
};

export const getEmblemByName = (name: string): EmblemSet | undefined => {
  return emblemSets.find(emblem => emblem.name === name);
};

export default allItems;
