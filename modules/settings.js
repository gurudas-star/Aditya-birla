// Module 13: Platform Settings & Interactive WhatsApp Template Customizer Component

export const SettingsModule = {
    render(container, mockStore) {
        const state = mockStore.getState();

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Page Title Header -->
                <div class="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">Platform Settings & Configs</h2>
                        <p class="text-xs text-slate-500">Configure AI Voice Bot concurrent limits, edit DPD collection scripts, and draft verified WhatsApp template bodies.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
                    
                    <!-- Left Column: Core Bot Parameters Configurations (Col span 5) -->
                    <div class="glass-panel rounded-2xl p-5 border border-slate-800 xl:col-span-5 flex flex-col gap-4">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">AI Voice Bot dialer configurations</h3>
                        
                        <div class="flex flex-col gap-4 text-xs">
                            <div>
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Max Concurrent Dialer Channels</label>
                                <input type="number" value="${state.settings.botConfigs.concurrentChannels}" id="set-concurrent" 
                                       class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-cyan-400 font-bold focus:outline-none focus:border-cyan-500">
                                <span class="text-[9px] text-slate-500 leading-normal mt-1 block">Configures concurrent VOIP SIP dial channels allocated to active campaigns.</span>
                            </div>

                            <div>
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Retry Attempt Threshold</label>
                                <select class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-cyan-400 font-bold focus:outline-none">
                                    <option value="3" ${state.settings.botConfigs.retryCount === 3 ? "selected" : ""}>3 Attempts (Standard Retries)</option>
                                    <option value="5" ${state.settings.botConfigs.retryCount === 5 ? "selected" : ""}>5 Attempts (High Delinquency Recovery)</option>
                                    <option value="1">1 Attempt (Low Priority Campaign)</option>
                                </select>
                            </div>

                            <div>
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Dialer Allowed Hours</label>
                                <input type="text" value="${state.settings.botConfigs.workingHours}" 
                                       class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-cyan-400 font-bold focus:outline-none">
                            </div>

                            <div>
                                <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Stress Sentiment Threshold Escalation</label>
                                <select class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-cyan-400 font-bold focus:outline-none">
                                    <option value="Highly Stressed" ${state.settings.botConfigs.sentimentEscalationThreshold === "Highly Stressed" ? "selected" : ""}>Highly Stressed / Angry (Automatic Human Transfer)</option>
                                    <option>Cooperative (Allow Voice Bot to finalize PTP)</option>
                                    <option>Never Escalate (100% Bot resolution target)</option>
                                </select>
                            </div>

                            <button id="btn-save-settings" class="w-full py-2.5 rounded-xl bg-brand-gradient text-white font-bold text-xs uppercase tracking-wider transition-all mt-2">
                                Save Platform Settings
                            </button>
                        </div>
                    </div>

                    <!-- Right Column: Interactive WhatsApp Template Customizer Panel & Mobile Screen (Col span 7) -->
                    <div class="xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        <!-- Template Editor Box -->
                        <div class="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col gap-4">
                            <h3 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">WhatsApp Template Builder</h3>
                            
                            <p class="text-xs text-slate-400 leading-normal">Edit template bodies in real time. Dynamic inputs map fields directly to the mobile preview window on the right.</p>

                            <div class="flex flex-col gap-3 text-xs">
                                <div>
                                    <label class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Selected Template</label>
                                    <select id="select-settings-wa-template" class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-cyan-400 font-bold">
                                        <option value="T-01">Pre-approved Loan Welcome</option>
                                        <option value="T-02">DPD EMI Reminder</option>
                                        <option value="T-03">Newly Onboarded Welcome</option>
                                        <option value="T-04">Online Account Access Guide</option>
                                        <option value="T-05">Digital Modes Self-Service Campaign</option>
                                        <option value="T-06">Loan Closure Advance Alert</option>
                                        <option value="T-07">Post-Closure Top-up Promo</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Template Body Content</label>
                                    <textarea id="settings-wa-textarea" rows="5" 
                                              class="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono leading-relaxed resize-none"></textarea>
                                </div>
                            </div>
                        </div>

                        <!-- Mobile Device Live Preview Frame -->
                        <div class="flex justify-center">
                            <div class="phone-frame w-[260px] h-[480px] flex flex-col">
                                <div class="phone-notch"></div>
                                
                                <!-- Screen Header -->
                                <div class="pt-5 px-3 pb-1.5 bg-slate-950 flex items-center justify-between text-[9px] font-bold text-slate-400">
                                    <span>09:41</span>
                                    <div class="flex items-center gap-1">
                                        <i data-lucide="wifi" class="w-3 h-3"></i>
                                        <i data-lucide="battery" class="w-3 h-3 text-green-500"></i>
                                    </div>
                                </div>

                                <!-- WhatsApp Chat Header -->
                                <div class="bg-slate-900 px-3 py-2 border-b border-slate-950 flex items-center gap-2">
                                    <div class="w-7 h-7 rounded-full bg-slate-950 flex items-center justify-center border border-slate-800 p-0.5">
                                        <img src="https://www.ikontel.com/assets/img/logo/iKonTel-logo.png" class="h-4 w-auto object-contain" alt="IK">
                                    </div>
                                    <div>
                                        <h4 class="text-[10px] font-bold text-white leading-tight">IKONTEL</h4>
                                        <p class="text-[8px] text-green-400">Official Business</p>
                                    </div>
                                </div>

                                <!-- Live Chat Message Body -->
                                <div class="flex-1 bg-slate-950 p-3 overflow-y-auto flex flex-col justify-end">
                                    <div class="bg-slate-900 border border-slate-800 rounded-xl rounded-tl-none p-3 max-w-[95%] self-start text-[10px] text-slate-200 leading-normal shadow flex flex-col gap-1.5">
                                        <p id="whatsapp-preview-body">Loading preview...</p>
                                        <span class="text-[8px] text-slate-500 text-right font-mono font-semibold">09:41</span>
                                    </div>
                                </div>

                                <!-- Screen bottom bar -->
                                <div class="p-2.5 bg-slate-900 border-t border-slate-950 text-center text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                                    Reply templates linked
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        `;

        lucide.createIcons();
        this.setupEvents(mockStore);
    },

    setupEvents(mockStore) {
        const btnSave = document.getElementById("btn-save-settings");
        const inputChannels = document.getElementById("set-concurrent");
        const selectTemplate = document.getElementById("select-settings-wa-template");
        const textarea = document.getElementById("settings-wa-textarea");
        const preview = document.getElementById("whatsapp-preview-body");

        // Load initial template text
        const loadTemplate = () => {
            const templates = mockStore.getState().settings.whatsappTemplates;
            const activeId = selectTemplate.value;
            const activeTemp = templates.find(t => t.id === activeId);

            // Populate textarea
            textarea.value = activeTemp.body;

            // Render mapped preview
            updatePreview(activeTemp.body);
        };

        const updatePreview = (body) => {
            // Replace templates placeholder variables with sample text
            let formatted = body
                .replaceAll("{{1}}", "Aarav Sharma")
                .replaceAll("{{2}}", "LN-908821")
                .replaceAll("{{3}}", "portal.adityabirlacapital.com")
                .replaceAll("{{4}}", "₹15,000 / ₹5,00,000");
            
            preview.textContent = formatted;
        };

        if (selectTemplate) {
            selectTemplate.addEventListener("change", loadTemplate);
            textarea.addEventListener("input", (e) => {
                const text = e.target.value;
                updatePreview(text);
                
                // Update store template state dynamically
                mockStore.update(s => {
                    const temp = s.settings.whatsappTemplates.find(t => t.id === selectTemplate.value);
                    if (temp) temp.body = text;
                });
            });
            
            loadTemplate();
        }

        if (btnSave) {
            btnSave.addEventListener("click", () => {
                const con = parseInt(inputChannels.value);
                mockStore.update(s => {
                    s.settings.botConfigs.concurrentChannels = con;
                });
                alert("SUCCESS: AI configurations saved and dispatched to Mumbai recovery cluster.");
            });
        }
    }
};
