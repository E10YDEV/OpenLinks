export const themes = {
  default: {
    background: 'bg-gradient-to-br text-white from-slate-900 via-purple-900 to-slate-900',
    avatar: 'w-24 h-24 mx-auto rounded-full border-4 border-white/20 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center',
    links_button: 'bg-white/10 border border-white/20 rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-all duration-200 glass group',
    links_text: 'text-white font-medium group-hover:text-purple-200 transition-colors',
  },
  ocean: {
    background: 'text-white bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900',
    avatar: 'w-24 h-24 mx-auto rounded-full border-4 border-white/20 bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center',
    links_button: 'bg-white/10 border border-white/20 rounded-lg p-4 cursor-pointer hover:bg-cyan-700/30 transition-all duration-200 glass group',
    links_text: 'text-white font-medium group-hover:text-cyan-200 transition-colors',
  },
  forest: {
    background: 'bg-gradient-to-br text-green-300 from-green-900 via-emerald-800 to-green-900',
    avatar: 'w-24 h-24 mx-auto rounded-full border-4 border-white/20 bg-gradient-to-br from-emerald-400 to-lime-500 flex items-center justify-center',
    links_button: 'bg-white/10 border border-white/20 rounded-lg p-4 cursor-pointer hover:bg-lime-600/20 transition-all duration-200 glass group',
    links_text: 'text-white font-medium group-hover:text-lime-200 transition-colors',
  },
  sunrise: {
    background: 'bg-gradient-to-br text-white from-yellow-800 via-orange-700 to-rose-800',
    avatar: 'w-24 h-24 mx-auto rounded-full border-4 border-white/20 bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center',
    links_button: 'bg-white/10 border border-white/20 rounded-lg p-4 cursor-pointer hover:bg-orange-300/20 transition-all duration-200 glass group',
    links_text: 'text-white font-medium group-hover:text-orange-200 transition-colors',
  },
  ness: {
    background: 'press-start text-white text-xs bg-gradient-to-t bg-radial from-gray-800 to-zinc-900 ',
    avatar: 'w-28 h-28 mx-auto  border-4 border-white flex items-center justify-center',
    links_button: 'bg-white/10 press-start border pixel-corners p-4 cursor-pointer hover:bg-white/20 transition-all duration-200 glass group',
    links_text: 'text-white font-medium group-hover:text-zinc-300 transition-colors',
  },
  cherry: {
    background: 'text-white bg-gradient-to-br from-pink-800 via-rose-700 to-red-800',
    avatar: 'w-24 h-24 mx-auto rounded-full border-4 border-white/20 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center',
    links_button: 'bg-white/10 border border-white/20 rounded-lg p-4 cursor-pointer hover:bg-pink-600/30 transition-all duration-200 glass group',
    links_text: 'text-white font-medium group-hover:text-pink-200 transition-colors',
  },
  brutalism: {
    background: 'bg-black text-white min-h-screen font-mono',
    avatar: 'w-28 h-28 mx-auto bg-white text-black text-4xl font-bold flex items-center justify-center border-4 border-white shadow-md',
    links_button: 'bg-black border-2 border-white p-4 cursor-pointer transition-all duration-100 hover:bg-white grup-hover:text-center hover:text-black group',
    links_text: 'text-white font-bold uppercase tracking-wide group-hover:text-black hover:text-center transition-colors duration-100',

  }

} as const;

export type ThemeName = keyof typeof themes;
export type Theme = (typeof themes)[ThemeName];


