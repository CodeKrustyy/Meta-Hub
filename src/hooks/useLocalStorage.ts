/**
 * Meta Hub - Local Storage Hooks
 * Persistent storage for user data, builds, tier lists, and chat
 */

import { useState, useCallback } from 'react';
import type { UserBuild, UserTierList, ChatMessage, UserProfile, Notification } from '@/types';

// Generic local storage hook
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((prev: T) => T)) => {
    try {
      setStoredValue(prev => {
        const valueToStore = value instanceof Function ? value(prev) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        return valueToStore;
      });
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue];
}

// User Profile Hook
export function useUserProfile() {
  const [profile, setProfile] = useLocalStorage<UserProfile | null>('meta_hub_profile', null);

  const createProfile = useCallback((username: string) => {
    const newProfile: UserProfile = {
      id: `user_${Date.now()}`,
      username,
      favoriteHeroes: [],
      createdBuilds: [],
      createdTierLists: [],
      votedBuilds: [],
      joinedAt: new Date().toISOString(),
    };
    setProfile(newProfile);
    return newProfile;
  }, [setProfile]);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile(prev => prev ? { ...prev, ...updates } : null);
  }, [setProfile]);

  const addFavoriteHero = useCallback((heroId: string) => {
    setProfile(prev => {
      if (!prev) return null;
      if (prev.favoriteHeroes.includes(heroId)) return prev;
      return { ...prev, favoriteHeroes: [...prev.favoriteHeroes, heroId] };
    });
  }, [setProfile]);

  const removeFavoriteHero = useCallback((heroId: string) => {
    setProfile(prev => {
      if (!prev) return null;
      return { ...prev, favoriteHeroes: prev.favoriteHeroes.filter(id => id !== heroId) };
    });
  }, [setProfile]);

  return {
    profile,
    createProfile,
    updateProfile,
    addFavoriteHero,
    removeFavoriteHero,
    isLoggedIn: !!profile,
  };
}

// Community Builds Hook
export function useCommunityBuilds() {
  const [builds, setBuilds] = useLocalStorage<UserBuild[]>('meta_hub_community_builds', []);

  const addBuild = useCallback((build: Omit<UserBuild, 'id' | 'createdAt' | 'votes'>) => {
    const newBuild: UserBuild = {
      ...build,
      id: `build_${Date.now()}`,
      createdAt: new Date().toISOString(),
      votes: 0,
    };
    setBuilds(prev => [newBuild, ...prev]);
    return newBuild;
  }, [setBuilds]);

  const updateBuild = useCallback((id: string, updates: Partial<UserBuild>) => {
    setBuilds(prev => prev.map(build => 
      build.id === id ? { ...build, ...updates, updatedAt: new Date().toISOString() } : build
    ));
  }, [setBuilds]);

  const deleteBuild = useCallback((id: string) => {
    setBuilds(prev => prev.filter(build => build.id !== id));
  }, [setBuilds]);

  const voteBuild = useCallback((id: string, _userId: string) => {
    setBuilds(prev => prev.map(build => 
      build.id === id ? { ...build, votes: build.votes + 1 } : build
    ));
  }, [setBuilds]);

  const getBuildsByHero = useCallback((heroId: string) => {
    return builds.filter(build => build.heroId === heroId);
  }, [builds]);

  const getBuildsByUser = useCallback((userId: string) => {
    return builds.filter(build => build.authorId === userId);
  }, [builds]);

  const getTopBuilds = useCallback((limit: number = 10) => {
    return [...builds].sort((a, b) => b.votes - a.votes).slice(0, limit);
  }, [builds]);

  return {
    builds,
    addBuild,
    updateBuild,
    deleteBuild,
    voteBuild,
    getBuildsByHero,
    getBuildsByUser,
    getTopBuilds,
  };
}

// User Tier Lists Hook
export function useUserTierLists() {
  const [tierLists, setTierLists] = useLocalStorage<UserTierList[]>('meta_hub_user_tier_lists', []);

  const addTierList = useCallback((tierList: Omit<UserTierList, 'id' | 'createdAt' | 'votes'>) => {
    const newTierList: UserTierList = {
      ...tierList,
      id: `tierlist_${Date.now()}`,
      createdAt: new Date().toISOString(),
      votes: 0,
    };
    setTierLists(prev => [newTierList, ...prev]);
    return newTierList;
  }, [setTierLists]);

  const updateTierList = useCallback((id: string, updates: Partial<UserTierList>) => {
    setTierLists(prev => prev.map(tl => 
      tl.id === id ? { ...tl, ...updates, updatedAt: new Date().toISOString() } : tl
    ));
  }, [setTierLists]);

  const deleteTierList = useCallback((id: string) => {
    setTierLists(prev => prev.filter(tl => tl.id !== id));
  }, [setTierLists]);

  const voteTierList = useCallback((id: string) => {
    setTierLists(prev => prev.map(tl => 
      tl.id === id ? { ...tl, votes: tl.votes + 1 } : tl
    ));
  }, [setTierLists]);

  const getTierListsByUser = useCallback((userId: string) => {
    return tierLists.filter(tl => tl.authorId === userId);
  }, [tierLists]);

  const getPublicTierLists = useCallback(() => {
    return tierLists.filter(tl => tl.isPublic).sort((a, b) => b.votes - a.votes);
  }, [tierLists]);

  return {
    tierLists,
    addTierList,
    updateTierList,
    deleteTierList,
    voteTierList,
    getTierListsByUser,
    getPublicTierLists,
  };
}

// Chat Hook
export function useChat(roomId: string = 'general') {
  const [messages, setMessages] = useLocalStorage<ChatMessage[]>(`meta_hub_chat_${roomId}`, []);

  const sendMessage = useCallback((message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      ...message,
      id: `msg_${Date.now()}`,
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev.slice(-99), newMessage]); // Keep last 100 messages
    return newMessage;
  }, [setMessages]);

  const deleteMessage = useCallback((messageId: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
  }, [setMessages]);

  const getRecentMessages = useCallback((limit: number = 50) => {
    return messages.slice(-limit);
  }, [messages]);

  return {
    messages,
    sendMessage,
    deleteMessage,
    getRecentMessages,
  };
}

// Notifications Hook
export function useNotifications() {
  const [notifications, setNotifications] = useLocalStorage<Notification[]>('meta_hub_notifications', []);

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'createdAt' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: `notif_${Date.now()}`,
      createdAt: new Date().toISOString(),
      read: false,
    };
    setNotifications(prev => [newNotification, ...prev.slice(0, 49)]); // Keep last 50
    return newNotification;
  }, [setNotifications]);

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  }, [setNotifications]);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  }, [setNotifications]);

  const deleteNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, [setNotifications]);

  const unreadCount = notifications.filter(n => !n.read).length;

  return {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    deleteNotification,
  };
}

// Favorites Hook
export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<string[]>('meta_hub_favorites', []);

  const toggleFavorite = useCallback((heroId: string) => {
    setFavorites(prev => {
      if (prev.includes(heroId)) {
        return prev.filter(id => id !== heroId);
      }
      return [...prev, heroId];
    });
  }, [setFavorites]);

  const isFavorite = useCallback((heroId: string) => {
    return favorites.includes(heroId);
  }, [favorites]);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}

export default useLocalStorage;
