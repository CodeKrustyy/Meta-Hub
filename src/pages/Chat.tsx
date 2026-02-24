/**
 * Meta Hub - Chat Page
 * Real-time chat rooms for MLBB players
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useChat, useUserProfile } from '@/hooks/useLocalStorage';
import { formatDistanceToNow } from '@/lib/utils';

const chatRooms = [
  { id: 'general', name: 'General', description: 'General discussion', icon: '💬' },
  { id: 'meta', name: 'Meta Discussion', description: 'Talk about the current meta', icon: '📊' },
  { id: 'lfg', name: 'Looking for Group', description: 'Find teammates', icon: '🎮' },
  { id: 'strategy', name: 'Strategy', description: 'Share tips and strategies', icon: '📚' },
  { id: 'esports', name: 'Esports', description: 'Pro scene discussion', icon: '🏆' },
];

export function Chat() {
  const [activeRoom, setActiveRoom] = useState('general');
  const [message, setMessage] = useState('');
  const { messages, sendMessage } = useChat(activeRoom);
  const { profile, isLoggedIn } = useUserProfile();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!isLoggedIn || !profile || !message.trim()) return;

    sendMessage({
      userId: profile.id,
      username: profile.username,
      message: message.trim(),
      room: activeRoom,
    });
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen animated-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-8rem)]">
          {/* Rooms Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="glass-card p-4 h-full">
              <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Chat Rooms
              </h2>
              <div className="space-y-1">
                {chatRooms.map(room => (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoom(room.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                      activeRoom === room.id
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{room.icon}</span>
                      <span className="font-medium">{room.name}</span>
                    </div>
                    <p className="text-xs opacity-70 ml-6">{room.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            <div className="glass-card flex-1 flex flex-col overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{chatRooms.find(r => r.id === activeRoom)?.icon}</span>
                  <div>
                    <h3 className="font-bold text-foreground">{chatRooms.find(r => r.id === activeRoom)?.name}</h3>
                    <p className="text-xs text-muted-foreground">{chatRooms.find(r => r.id === activeRoom)?.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Users className="w-4 h-4" />
                  <span>Online</span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                <AnimatePresence>
                  {messages.length > 0 ? (
                    messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`flex gap-3 ${msg.userId === profile?.id ? 'flex-row-reverse' : ''}`}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                          {msg.username.charAt(0).toUpperCase()}
                        </div>
                        <div className={`max-w-[70%] ${msg.userId === profile?.id ? 'text-right' : ''}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium text-foreground">{msg.username}</span>
                            <span className="text-xs text-muted-foreground">
                              {formatDistanceToNow(msg.timestamp)}
                            </span>
                          </div>
                          <div className={`inline-block px-3 py-2 rounded-lg text-sm ${
                            msg.userId === profile?.id
                              ? 'bg-cyan-500/20 text-foreground border border-cyan-500/30'
                              : 'bg-secondary/50 text-foreground border border-border'
                          }`}>
                            {msg.message}
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>No messages yet. Be the first to say hello!</p>
                    </div>
                  )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/5">
                {isLoggedIn ? (
                  <div className="flex gap-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type a message..."
                      className="search-input flex-1"
                    />
                    <Button
                      onClick={handleSend}
                      disabled={!message.trim()}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-2 text-muted-foreground text-sm">
                    Please sign in to chat
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
