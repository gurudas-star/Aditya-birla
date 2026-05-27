// Top Navigation Bar Component with Role Switcher, Interactive Search, and Notifications

import { mockStore } from "../data/mockStore.js";

export const Navbar = {
    render(userRole, notificationCount = 3) {
        // Read theme from mockStore to display correct icon
        const currentTheme = mockStore.getState().theme || "dark";
        const themeIcon = currentTheme === "dark" ? "sun" : "moon";
        
        const roles = [
            "Admin",
            "Campaign Manager",
            "Sales Agent",
            "Collection Manager",
            "Legal Team",
            "CX Team"
        ];

        const roleOptionsHtml = roles.map(role => {
            const isSelected = role === userRole ? "selected" : "";
            return `<option value="${role}" ${isSelected} class="bg-slate-900 text-white py-2">${role}</option>`;
        }).join("");

        return `
            <header class="h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-6 sticky top-0 z-20 relative select-none">
                <!-- Mobile Menu & Search Section -->
                <div class="flex items-center gap-2 lg:gap-3 w-1/2 lg:w-1/3">
                    <button id="mobile-menu-toggle" class="p-1.5 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white lg:hidden flex-shrink-0 transition-colors">
                        <i data-lucide="menu" class="w-5 h-5"></i>
                    </button>
                    <div class="relative w-full">
                        <i data-lucide="search" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"></i>
                        <input type="text" id="global-search" 
                               placeholder="Search..." 
                               class="w-full bg-slate-900 border border-slate-800 rounded-full py-1.5 pl-10 pr-4 text-xs lg:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors">
                    </div>
                </div>

                <!-- Utilities & Switchers -->
                <div class="flex items-center gap-4">
                    
                    <!-- Simulators Toggle Hub -->
                    <div class="flex items-center gap-2 border-r border-slate-800 pr-4">
                        <button id="btn-open-bot-sim" class="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900 text-teal-400 border border-teal-500/30 hover:bg-teal-500/10 transition-colors" title="AI Chat & Voice Bot">
                            <span class="relative flex h-2 w-2">
                              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                              <span class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            <i data-lucide="message-square-text" class="w-3.5 h-3.5"></i>
                            <span class="hidden md:inline">AI Chat & Voice Bot</span>
                        </button>
                    </div>

                    <!-- Role Selection Dropdown -->
                    <div class="flex items-center gap-2">
                        <label class="text-xs text-slate-500 font-semibold uppercase tracking-wider hidden lg:inline">Active Role:</label>
                        <select id="role-selector" 
                                class="bg-gradient-to-r from-indigo-950 to-slate-900 border border-indigo-800/40 rounded-lg text-xs font-bold text-teal-400 px-3 py-1.5 focus:outline-none focus:border-teal-500 transition-all hover:bg-indigo-900/10 cursor-pointer">
                            ${roleOptionsHtml}
                        </select>
                    </div>

                    <!-- Theme Toggle Button -->
                    <button id="theme-toggle" class="w-9 h-9 bg-slate-900 hover:bg-slate-800 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors" title="Toggle Light/Dark Theme">
                        <i data-lucide="${themeIcon}" class="w-4 h-4 text-teal-400"></i>
                    </button>

                    <!-- Notification System Dropdown -->
                    <div class="relative">
                        <button id="notification-bell" class="w-9 h-9 bg-slate-900 hover:bg-slate-800 rounded-full border border-slate-800 flex items-center justify-center relative text-slate-400 hover:text-white transition-colors">
                            <i data-lucide="bell" class="w-4 h-4"></i>
                            ${notificationCount > 0 ? `
                                <span class="absolute -top-1 -right-1 bg-red-600 text-[10px] font-extrabold text-white w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                                    ${notificationCount}
                                </span>
                            ` : ''}
                        </button>
                        
                        <!-- Notifications Popup Panel (Hidden by Default) -->
                        <div id="notifications-panel" class="hidden absolute right-0 mt-3 w-80 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl p-4 z-50">
                            <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                                <h4 class="text-xs font-bold text-white uppercase tracking-wider">Alerts & Actions</h4>
                                <span class="text-[10px] text-teal-400 font-semibold cursor-pointer hover:underline">Mark read</span>
                            </div>
                            <div class="flex flex-col gap-2 max-h-60 overflow-y-auto">
                                <div class="p-2 bg-slate-900/50 hover:bg-slate-900 border border-slate-800/40 rounded-lg cursor-pointer">
                                    <div class="flex gap-2">
                                        <div class="w-2 h-2 mt-1.5 rounded-full bg-teal-500"></div>
                                        <div>
                                            <p class="text-xs font-bold text-slate-200">KYC Update Needed</p>
                                            <p class="text-[10px] text-slate-400">Priyanka Patel uploaded new Aadhaar card.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 bg-slate-900/50 hover:bg-slate-900 border border-slate-800/40 rounded-lg cursor-pointer">
                                    <div class="flex gap-2">
                                        <div class="w-2 h-2 mt-1.5 rounded-full bg-green-500"></div>
                                        <div>
                                            <p class="text-xs font-bold text-slate-200">Disbursement Successful</p>
                                            <p class="text-[10px] text-slate-400">Aarav Sharma's personal loan credited successfully.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-2 bg-slate-900/50 hover:bg-slate-900 border border-slate-800/40 rounded-lg cursor-pointer">
                                    <div class="flex gap-2">
                                        <div class="w-2 h-2 mt-1.5 rounded-full bg-red-500"></div>
                                        <div>
                                            <p class="text-xs font-bold text-slate-200">Collection DPD High Risk</p>
                                            <p class="text-[10px] text-slate-400">Amit Deshmukh marked HIGH RISK: DPD 45.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- User Profile Avatar Card -->
                    <div class="flex items-center gap-3 border-l border-slate-800 pl-4">
                        <div class="flex flex-col text-right hidden sm:flex">
                            <span class="text-xs font-bold text-white">Ikon Staff Node</span>
                            <span class="text-[9px] text-slate-500 font-bold uppercase tracking-wider">${userRole} mode</span>
                        </div>
                        <div class="w-9 h-9 rounded-full bg-brand-gradient flex items-center justify-center border border-teal-500/20 shadow-md">
                            <i data-lucide="user" class="w-4 h-4 text-teal-400"></i>
                        </div>
                    </div>

                </div>
            </header>
        `;
    }
};
