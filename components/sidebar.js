// Collapsible Left Navigation Sidebar Component

export const Sidebar = {
    render(activePage, userRole, isCollapsed = false, isMobileOpen = false) {
        // Define navigation menu items with Lucide Icon mapping
        const menuItems = [
            { id: "dashboard", label: "Dashboard", icon: "layout-dashboard", roles: ["Admin", "Campaign Manager", "Sales Agent", "Collection Manager", "Legal Team", "CX Team"] },
            { id: "campaign", label: "Campaign Manager", icon: "megaphone", roles: ["Admin", "Campaign Manager"] },
            { id: "leads", label: "Lead Management", icon: "users-round", roles: ["Admin", "Campaign Manager", "Sales Agent"] },
            { id: "onboarding", label: "Customer Onboarding", icon: "clipboard-signature", roles: ["Admin", "Sales Agent"] },
            { id: "loan", label: "Loan Management", icon: "wallet", roles: ["Admin", "Sales Agent", "Collection Manager"] },
            { id: "collections", label: "Collections", icon: "hand-coins", roles: ["Admin", "Collection Manager", "Field Officer"] },
            { id: "legal", label: "Legal", icon: "gavel", roles: ["Admin", "Legal Team"] },
            { id: "cx", label: "Customer Experience", icon: "smile", roles: ["Admin", "CX Team"] },
            { id: "ai_center", label: "AI Intelligence", icon: "sparkles", roles: ["Admin", "Campaign Manager", "Collection Manager", "CX Team"] },
            { id: "reports", label: "Reports & Analytics", icon: "bar-chart-3", roles: ["Admin", "Campaign Manager", "Collection Manager", "Legal Team"] },
            { id: "user_mgmt", label: "User Management", icon: "shield-alert", roles: ["Admin"] },
            { id: "settings", label: "Settings", icon: "settings-2", roles: ["Admin", "Campaign Manager", "Collection Manager"] }
        ];

        // Filter menu items by userRole
        const filteredItems = menuItems.filter(item => item.roles.includes(userRole));

        const collapseClass = isCollapsed ? "lg:w-20" : "lg:w-64";
        const logoTextClass = isCollapsed ? "lg:hidden" : "lg:block";
        const activeMobileClass = isMobileOpen ? "translate-x-0" : "-translate-x-full";

        let menuHtml = filteredItems.map(item => {
            const isActive = item.id === activePage;
            const activeBgClass = isActive 
                ? "bg-brand-gradient text-white border-l-4 border-cyan-500 shadow-md shadow-cyan-950/30" 
                : "text-slate-400 hover:bg-slate-800/40 hover:text-white hover:border-l-4 hover:border-slate-600";
            
            return `
                <a href="#${item.id}" 
                   class="flex items-center gap-3 px-4 py-3 rounded-lg mx-2 my-1 transition-all duration-200 group font-medium text-sm ${activeBgClass}"
                   data-page="${item.id}">
                    <i data-lucide="${item.icon}" class="w-5 h-5 transition-transform group-hover:scale-110"></i>
                    <span class="${isCollapsed ? 'lg:hidden' : 'block'} origin-left transition-all duration-300">${item.label}</span>
                </a>
            `;
        }).join("");

        return `
            <div class="h-screen w-64 ${collapseClass} bg-slate-950 border-r border-slate-800 flex flex-col justify-between transition-all duration-300 ease-in-out select-none fixed lg:static inset-y-0 left-0 z-40 transform ${activeMobileClass} lg:translate-x-0 overflow-hidden">
                
                <!-- Logo / Brand Header (Sticky) -->
                <div class="flex items-center gap-3 px-5 py-6 border-b border-slate-900 flex-shrink-0">
                    <div class="w-10 h-10 rounded-xl bg-slate-900/50 flex items-center justify-center shadow-lg shadow-indigo-950/50 flex-shrink-0 p-1">
                        <img src="https://www.ikontel.com/assets/img/logo/iKonTel-logo.png" class="h-6 w-auto object-contain" alt="iKonTel">
                    </div>
                    <div class="${logoTextClass} origin-left transition-all duration-300">
                        <h1 class="text-md font-bold leading-tight tracking-wider text-white">IKONTEL</h1>
                        <p class="text-[10px] text-teal-400 font-bold tracking-widest uppercase">JOURNEY BUILDER</p>
                    </div>
                </div>

                <!-- Navigation Items (Scrollable container!) -->
                <nav class="mt-4 flex-1 overflow-y-auto custom-scrollbar py-2">
                    ${menuHtml}
                </nav>

                <!-- Footer Section (Sticky) -->
                <div class="flex-shrink-0">
                    <div class="border-t border-slate-900 p-4">
                        <button id="toggle-sidebar" class="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-500 hover:text-white hover:bg-slate-900 rounded-lg border border-slate-800 transition-colors">
                            <i data-lucide="${isCollapsed ? 'chevrons-right' : 'chevrons-left'}" class="w-4 h-4"></i>
                            <span class="${isCollapsed ? 'hidden' : 'inline'}">${isCollapsed ? 'Expand' : 'Collapse Sidebar'}</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
};
