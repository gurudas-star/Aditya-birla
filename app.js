// IKONTEL Omnichannel Master Application Router & UI Shell Controller

import { mockStore } from "./data/mockStore.js";
import { Sidebar } from "./components/sidebar.js";
import { Navbar } from "./components/navbar.js";
import { ChatSimulator } from "./components/chatSimulator.js";

// Import modules
import { LoginModule } from "./modules/login.js";
import { DashboardModule } from "./modules/dashboard.js";
import { CampaignModule } from "./modules/campaign.js";
import { LeadsModule } from "./modules/leads.js";
import { OnboardingModule } from "./modules/onboarding.js";
import { LoanModule } from "./modules/loan.js";
import { CollectionsModule } from "./modules/collections.js";
import { LegalModule } from "./modules/legal.js";
import { CXModule } from "./modules/cx.js";
import { AICenterModule } from "./modules/ai_center.js";
import { ReportsModule } from "./modules/reports.js";
import { UserMgmtModule } from "./modules/user_mgmt.js";
import { SettingsModule } from "./modules/settings.js";

class AppShell {
    constructor() {
        this.appContainer = document.getElementById("app");
        this.isSidebarCollapsed = false;
        this.isMobileSidebarOpen = false;
        
        this.init();
    }

    init() {
        // Initialize theme class on startup
        const state = mockStore.getState();
        const theme = state.theme || "dark";
        if (theme === "light") {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        }

        // Router listener
        window.addEventListener("hashchange", () => this.handleRouting());
        
        // Listen to global store updates
        mockStore.subscribe(() => this.handleStoreUpdates());
        window.addEventListener("storeUpdated", () => this.handleStoreUpdates());

        // Default route
        if (!window.location.hash) {
            window.location.hash = "#login";
        } else {
            this.handleRouting();
        }
    }

    handleRouting() {
        const hash = window.location.hash || "#login";
        const state = mockStore.getState();

        if (hash === "#login") {
            // Render full viewport login without navigation shell
            LoginModule.render(this.appContainer, mockStore);
            return;
        }

        // Check if user session role is authenticated, otherwise redirect
        if (!state.userRole) {
            window.location.hash = "#login";
            return;
        }

        // Render Admin Dashboard layout shell if not already loaded
        if (!document.getElementById("main-layout-shell")) {
            this.renderMainLayout();
        }

        // Update active sidebar selection highlight
        const activePage = hash.substring(1);
        mockStore.update(s => { s.activePage = activePage; });

        this.renderActivePage(activePage);
    }

    renderMainLayout() {
        const state = mockStore.getState();

        this.appContainer.innerHTML = `
            <div class="flex h-screen w-screen overflow-hidden bg-slate-950" id="main-layout-shell">
                
                <!-- Sidebar Mobile Overlay Backdrop -->
                <div id="sidebar-backdrop" class="fixed inset-0 bg-black/60 z-30 lg:hidden hidden transition-opacity duration-300"></div>

                <!-- Left Sidebar Drawer -->
                <aside id="sidebar-container" class="h-screen flex-shrink-0 transition-all duration-300 z-40"></aside>

                <!-- Right Workspace -->
                <div class="flex-1 flex flex-col h-full overflow-hidden">
                    
                    <!-- Top Navigation Bar -->
                    <div id="navbar-container"></div>

                    <!-- Main Dynamic Pane Scroll Container -->
                    <main class="flex-1 overflow-y-auto bg-[#0b0f19] relative custom-scrollbar" id="main-content-pane"></main>

                </div>

                <!-- Floating Simulators Drawer overlay -->
                <div id="simulator-container"></div>

            </div>
        `;

        // Render fixed items
        this.renderSidebar();
        this.renderNavbar();
        
        // Chat Drawer
        const simContainer = document.getElementById("simulator-container");
        simContainer.innerHTML = ChatSimulator.render();
        ChatSimulator.setupEvents(mockStore);

        // Core events
        this.setupLayoutEvents();
    }

    renderSidebar() {
        const sidebarContainer = document.getElementById("sidebar-container");
        if (!sidebarContainer) return;
        const state = mockStore.getState();
        sidebarContainer.innerHTML = Sidebar.render(state.activePage, state.userRole, this.isSidebarCollapsed, this.isMobileSidebarOpen);
        lucide.createIcons();

        // Sync Backdrop on Mobile
        const backdrop = document.getElementById("sidebar-backdrop");
        if (backdrop) {
            if (this.isMobileSidebarOpen) {
                backdrop.classList.remove("hidden");
            } else {
                backdrop.classList.add("hidden");
            }
        }

        // Wire sidebar collapse button
        const btnToggle = document.getElementById("toggle-sidebar");
        if (btnToggle) {
            btnToggle.addEventListener("click", () => {
                this.isSidebarCollapsed = !this.isSidebarCollapsed;
                this.renderSidebar();
            });
        }

        // Sidebar link clicks (routing helper)
        const links = sidebarContainer.querySelectorAll("a[data-page]");
        links.forEach(l => {
            l.addEventListener("click", (e) => {
                const page = l.dataset.page;
                this.isMobileSidebarOpen = false; // Close mobile drawer
                this.renderSidebar();
                window.location.hash = `#${page}`;
            });
        });
    }

    renderNavbar() {
        const navbarContainer = document.getElementById("navbar-container");
        if (!navbarContainer) return;
        const state = mockStore.getState();
        
        // Calculate notification counts based on DPD defaults
        const overdueAlertsCount = state.collections.filter(c => c.riskScore > 80 && c.promiseToPay !== "PTP Met").length;

        navbarContainer.innerHTML = Navbar.render(state.userRole, overdueAlertsCount);
        lucide.createIcons();

        // Wire floating dialer open hooks inside top navbar
        const btnOpen = document.getElementById("btn-open-bot-sim");
        const drawer = document.getElementById("simulator-drawer");
        if (btnOpen && drawer) {
            btnOpen.addEventListener("click", () => {
                drawer.classList.remove("translate-x-full");
            });
        }

        // Wire mobile menu toggle
        const btnMobileMenu = document.getElementById("mobile-menu-toggle");
        if (btnMobileMenu) {
            btnMobileMenu.addEventListener("click", () => {
                this.isMobileSidebarOpen = true;
                this.renderSidebar();
            });
        }

        // Role Switcher hook
        const roleSelector = document.getElementById("role-selector");
        if (roleSelector) {
            roleSelector.addEventListener("change", (e) => {
                const newRole = e.target.value;
                
                // Set and redraw entire layout to reflect role-based menu security
                mockStore.setRole(newRole);
                this.renderSidebar();
                
                // If current page is not allowed under new role, route back to general dashboard
                const menuItems = [
                    { id: "dashboard", roles: ["Admin", "Campaign Manager", "Sales Agent", "Collection Manager", "Legal Team", "CX Team"] },
                    { id: "campaign", roles: ["Admin", "Campaign Manager"] },
                    { id: "leads", roles: ["Admin", "Campaign Manager", "Sales Agent"] },
                    { id: "onboarding", roles: ["Admin", "Sales Agent"] },
                    { id: "loan", roles: ["Admin", "Sales Agent", "Collection Manager"] },
                    { id: "collections", roles: ["Admin", "Collection Manager", "Field Officer"] },
                    { id: "legal", roles: ["Admin", "Legal Team"] },
                    { id: "cx", roles: ["Admin", "CX Team"] },
                    { id: "ai_center", roles: ["Admin", "Campaign Manager", "Collection Manager", "CX Team"] },
                    { id: "reports", roles: ["Admin", "Campaign Manager", "Collection Manager", "Legal Team"] },
                    { id: "user_mgmt", roles: ["Admin"] },
                    { id: "settings", roles: ["Admin", "Campaign Manager", "Collection Manager"] }
                ];
                const allowed = menuItems.find(item => item.id === state.activePage).roles.includes(newRole);
                if (!allowed) {
                    window.location.hash = "#dashboard";
                } else {
                    this.renderActivePage(state.activePage);
                }
            });
        }

        // Notification Bell dropdown toggler
        const bell = document.getElementById("notification-bell");
        const panel = document.getElementById("notifications-panel");
        if (bell && panel) {
            bell.addEventListener("click", (e) => {
                e.stopPropagation();
                panel.classList.toggle("hidden");
            });
            document.addEventListener("click", () => panel.classList.add("hidden"));
        }

        // Theme Toggle wire
        const btnTheme = document.getElementById("theme-toggle");
        if (btnTheme) {
            btnTheme.addEventListener("click", () => {
                this.toggleTheme();
            });
        }

        // Search Bar filter logic
        const searchInput = document.getElementById("global-search");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                const query = e.target.value.toLowerCase();
                const contentPane = document.getElementById("main-content-pane");
                
                if (query.length > 2) {
                    // Filter matches in active view
                    const cards = contentPane.querySelectorAll("[data-lead-id], [data-coll-item-id], [data-lead-kyc-id]");
                    cards.forEach(card => {
                        const txt = card.textContent.toLowerCase();
                        if (txt.includes(query)) {
                            card.classList.remove("hidden");
                        } else {
                            card.classList.add("hidden");
                        }
                    });
                } else {
                    const cards = contentPane.querySelectorAll("[data-lead-id], [data-coll-item-id], [data-lead-kyc-id]");
                    cards.forEach(card => card.classList.remove("hidden"));
                }
            });
        }
    }

    renderActivePage(page) {
        const contentPane = document.getElementById("main-content-pane");
        
        switch (page) {
            case "dashboard":
                DashboardModule.render(contentPane, mockStore);
                break;
            case "campaign":
                CampaignModule.render(contentPane, mockStore);
                break;
            case "leads":
                LeadsModule.render(contentPane, mockStore);
                break;
            case "onboarding":
                OnboardingModule.render(contentPane, mockStore);
                break;
            case "loan":
                LoanModule.render(contentPane, mockStore);
                break;
            case "collections":
                CollectionsModule.render(contentPane, mockStore);
                break;
            case "legal":
                LegalModule.render(contentPane, mockStore);
                break;
            case "cx":
                CXModule.render(contentPane, mockStore);
                break;
            case "ai_center":
                AICenterModule.render(contentPane, mockStore);
                break;
            case "reports":
                ReportsModule.render(contentPane, mockStore);
                break;
            case "user_mgmt":
                UserMgmtModule.render(contentPane, mockStore);
                break;
            case "settings":
                SettingsModule.render(contentPane, mockStore);
                break;
            default:
                contentPane.innerHTML = `<div class="p-6 text-center text-slate-500 py-16 text-sm font-bold uppercase">Section: '${page}' under active pipeline development</div>`;
                lucide.createIcons();
                break;
        }
    }

    setupLayoutEvents() {
        // Wire floating dialer open hooks inside top navbar
        const btnOpen = document.getElementById("btn-open-bot-sim");
        const drawer = document.getElementById("simulator-drawer");
        if (btnOpen && drawer) {
            btnOpen.addEventListener("click", () => {
                drawer.classList.remove("translate-x-full");
            });
        }

        // Wire mobile backdrop click to close
        const backdrop = document.getElementById("sidebar-backdrop");
        if (backdrop) {
            backdrop.addEventListener("click", () => {
                this.isMobileSidebarOpen = false;
                this.renderSidebar();
            });
        }
    }

    toggleTheme() {
        const state = mockStore.getState();
        const currentTheme = state.theme || "dark";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";

        mockStore.setTheme(nextTheme);

        if (nextTheme === "light") {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        }

        // Instantly re-render active page to redraw ApexCharts and swap inline styling states reactively
        this.renderActivePage(state.activePage);
    }

    handleStoreUpdates() {
        // Redraw critical aggregate metrics
        this.renderNavbar();
        this.renderSidebar();
    }
}

// Instantiate on window load
window.addEventListener("DOMContentLoaded", () => {
    window.AppShellInstance = new AppShell();
});
