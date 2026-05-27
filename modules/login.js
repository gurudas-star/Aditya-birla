// Module 1: Login & Role Selection Page Component

export const LoginModule = {
    render(container, mockStore) {
        container.innerHTML = `
            <div class="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
                
                <!-- Ambient Backdrop Lights -->
                <div class="absolute w-[500px] h-[500px] rounded-full bg-indigo-900/10 blur-[120px] top-[-10%] left-[-10%] pointer-events-none"></div>
                <div class="absolute w-[500px] h-[500px] rounded-full bg-teal-900/5 blur-[120px] bottom-[-10%] right-[-10%] pointer-events-none"></div>

                <div class="w-full max-w-md glass-panel rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl relative z-10">
                    
                    <!-- Top Logo Branding -->
                    <div class="bg-brand-gradient py-8 px-6 text-center border-b border-indigo-950 flex flex-col items-center">
                        <div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shadow-inner mb-3 border border-white/20 p-2">
                            <img src="https://www.ikontel.com/assets/img/logo/iKonTel-logo.png" class="h-8 w-auto object-contain" alt="iKonTel">
                        </div>
                        <h1 class="text-xl font-bold tracking-wider text-white">IKONTEL</h1>
                        <p class="text-xs text-teal-400 font-bold tracking-widest uppercase mt-1">LENDING LIFE-CYCLE PLATFORM</p>
                    </div>

                    <!-- Main Auth Box -->
                    <div class="p-6 md:p-8" id="auth-box-body">
                        
                        <!-- Tabs -->
                        <div class="flex gap-2 mb-6 border-b border-slate-900 pb-2">
                            <button id="tab-login" class="flex-1 pb-2 text-xs font-bold uppercase tracking-wider text-teal-400 border-b-2 border-teal-400">Credential Sign-In</button>
                            <button id="tab-role-login" class="flex-1 pb-2 text-xs font-bold uppercase tracking-wider text-slate-500 border-b-2 border-transparent hover:text-white">Instant Demo Roles</button>
                        </div>

                        <!-- Form 1: Standard Login Form -->
                        <form id="form-standard-login" class="flex flex-col gap-4">
                            <div>
                                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Corporate Email Address</label>
                                <div class="relative">
                                    <i data-lucide="mail" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"></i>
                                    <input type="email" id="login-email" value="admin@ikontel.com" required
                                           class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-teal-500 transition-colors">
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between items-center mb-1">
                                    <label class="text-xs font-bold text-slate-400 uppercase tracking-wider">Access Password</label>
                                    <button type="button" id="btn-forgot" class="text-[10px] text-teal-400 hover:underline font-bold">Forgot?</button>
                                </div>
                                <div class="relative">
                                    <i data-lucide="lock" class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"></i>
                                    <input type="password" id="login-password" value="••••••••••••" required
                                           class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:border-teal-500 transition-colors">
                                </div>
                            </div>

                            <button type="submit" class="w-full py-2.5 rounded-xl bg-brand-gradient hover:from-indigo-800 hover:to-indigo-950 border border-indigo-700/30 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all mt-2">
                                <i data-lucide="log-in" class="w-4 h-4"></i>
                                Authenticate Corporate Account
                            </button>
                        </form>

                        <!-- Form 2: Instant Demo Roles (For Customer Demo Wow factor!) -->
                        <div id="panel-role-login" class="hidden flex flex-col gap-3">
                            <p class="text-xs text-slate-400 leading-relaxed mb-2">Select a business role to pre-configure the executive dashboard and navigation limits immediately.</p>
                            
                            <div class="grid grid-cols-2 gap-2">
                                <button class="role-btn px-3 py-2.5 text-left rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 text-xs font-bold flex flex-col gap-1 transition-all" data-role="Admin">
                                    <span class="text-white">🛡️ System Admin</span>
                                    <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Complete Access</span>
                                </button>
                                <button class="role-btn px-3 py-2.5 text-left rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 text-xs font-bold flex flex-col gap-1 transition-all" data-role="Campaign Manager">
                                    <span class="text-white">📢 Campaign Mgr</span>
                                    <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Leads & Dialer config</span>
                                </button>
                                <button class="role-btn px-3 py-2.5 text-left rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 text-xs font-bold flex flex-col gap-1 transition-all" data-role="Collection Manager">
                                    <span class="text-white">💸 Collections Mgr</span>
                                    <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">DPD & Recovery tracks</span>
                                </button>
                                <button class="role-btn px-3 py-2.5 text-left rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 text-xs font-bold flex flex-col gap-1 transition-all" data-role="Sales Agent">
                                    <span class="text-white">🤝 Sales Officer</span>
                                    <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Onboarding & Leads</span>
                                </button>
                                <button class="role-btn px-3 py-2.5 text-left rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 text-xs font-bold flex flex-col gap-1 transition-all" data-role="Legal Team">
                                    <span class="text-white">⚖️ Legal Counsel</span>
                                    <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Case Management</span>
                                </button>
                                <button class="role-btn px-3 py-2.5 text-left rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 text-xs font-bold flex flex-col gap-1 transition-all" data-role="CX Team">
                                    <span class="text-white">😊 Customer CX</span>
                                    <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">NPS & Satisfaction</span>
                                </button>
                            </div>
                        </div>

                    </div>

                    <!-- Footer Info bar -->
                    <div class="px-6 py-4 border-t border-slate-900/60 bg-slate-950/50 flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                        <span>Corporate Node: ikon-vpn-011</span>
                        <span>v1.2.0 Demo Ready</span>
                    </div>

                </div>
            </div>

            <!-- OTP Verification Modal Overlay -->
            <div id="otp-modal" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 hidden select-none">
                <div class="w-full max-w-sm glass-panel border border-slate-800 rounded-3xl p-6 shadow-2xl">
                    <div class="text-center mb-6">
                        <div class="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20 mx-auto mb-3">
                            <i data-lucide="shield-check" class="w-6 h-6 text-teal-400"></i>
                        </div>
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider">MFA Authorization</h3>
                        <p class="text-xs text-slate-500 mt-1">A secure OTP token has been dispatched to your corporate registered mobile device.</p>
                    </div>

                    <div class="flex justify-center gap-2 mb-6" id="otp-input-group">
                        <input type="text" maxlength="1" value="4" class="w-10 h-12 bg-slate-900 border border-slate-800 rounded-lg text-center text-lg font-bold text-teal-400 focus:outline-none focus:border-teal-500">
                        <input type="text" maxlength="1" value="9" class="w-10 h-12 bg-slate-900 border border-slate-800 rounded-lg text-center text-lg font-bold text-teal-400 focus:outline-none focus:border-teal-500">
                        <input type="text" maxlength="1" value="2" class="w-10 h-12 bg-slate-900 border border-slate-800 rounded-lg text-center text-lg font-bold text-teal-400 focus:outline-none focus:border-teal-500">
                        <input type="text" maxlength="1" value="8" class="w-10 h-12 bg-slate-900 border border-slate-800 rounded-lg text-center text-lg font-bold text-teal-400 focus:outline-none focus:border-teal-500">
                    </div>

                    <div class="flex gap-2">
                        <button id="btn-otp-close" class="flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 transition-colors">Abort</button>
                        <button id="btn-otp-verify" class="flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-brand-gradient text-white transition-all">Verify OTP</button>
                    </div>
                </div>
            </div>
        `;

        lucide.createIcons();
        this.setupEvents(mockStore);
    },

    setupEvents(mockStore) {
        const tabLogin = document.getElementById("tab-login");
        const tabRoleLogin = document.getElementById("tab-role-login");
        const formStandard = document.getElementById("form-standard-login");
        const panelRole = document.getElementById("panel-role-login");
        
        const otpModal = document.getElementById("otp-modal");
        const btnOtpClose = document.getElementById("btn-otp-close");
        const btnOtpVerify = document.getElementById("btn-otp-verify");
        const btnForgot = document.getElementById("btn-forgot");

        // Toggle Tabs
        tabLogin.addEventListener("click", () => {
            tabLogin.className = "flex-1 pb-2 text-xs font-bold uppercase tracking-wider text-teal-400 border-b-2 border-teal-400";
            tabRoleLogin.className = "flex-1 pb-2 text-xs font-bold uppercase tracking-wider text-slate-500 border-b-2 border-transparent hover:text-white";
            formStandard.classList.remove("hidden");
            panelRole.classList.add("hidden");
        });

        tabRoleLogin.addEventListener("click", () => {
            tabRoleLogin.className = "flex-1 pb-2 text-xs font-bold uppercase tracking-wider text-teal-400 border-b-2 border-teal-400";
            tabLogin.className = "flex-1 pb-2 text-xs font-bold uppercase tracking-wider text-slate-500 border-b-2 border-transparent hover:text-white";
            formStandard.classList.add("hidden");
            panelRole.classList.remove("hidden");
        });

        // Forgot password simulation
        btnForgot.addEventListener("click", () => {
            alert("A password reset link has been dispatched to corporate security vaults. Please consult IT administrator.");
        });

        // Trigger Standard MFA Modal
        formStandard.addEventListener("submit", (e) => {
            e.preventDefault();
            otpModal.classList.remove("hidden");
            lucide.createIcons();
        });

        btnOtpClose.addEventListener("click", () => {
            otpModal.classList.add("hidden");
        });

        btnOtpVerify.addEventListener("click", () => {
            otpModal.classList.add("hidden");
            mockStore.setRole("Admin");
            window.location.hash = "#dashboard";
        });

        // Click on Demo Roles (Bypass standard login for presentation efficiency!)
        const roleButtons = document.querySelectorAll(".role-btn");
        roleButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const role = btn.dataset.role;
                mockStore.setRole(role);
                window.location.hash = "#dashboard";
            });
        });
    }
};
