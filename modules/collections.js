// Module 7: Collections & Omnichannel Journey Builder Module Component

export const CollectionsModule = {
    render(container, mockStore) {
        const state = mockStore.getState();
        const activeColl = state.collections.find(c => c.id === state.activeCollectionId) || state.collections[0];

        // Sum calculations
        const totalDue = state.collections.reduce((sum, c) => sum + c.totalDue, 0);
        const collectedVal = state.collections.reduce((sum, c) => sum + c.collectedToday, 0);
        const ptpSetCount = state.collections.filter(c => c.promiseToPay === "PTP Set").length;

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Title Header -->
                <div class="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">Collections & Debt Recovery</h2>
                        <p class="text-xs text-slate-500">Design omnichannel collections campaigns, monitor field agent activities, and utilize predictive recovery models.</p>
                    </div>
                </div>

                <!-- Collections KPIs -->
                <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Total Pool Overdue</span>
                        <span class="text-lg font-bold text-red-400">₹${totalDue.toLocaleString()}</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Collected Today</span>
                        <span class="text-lg font-bold text-green-400">₹${collectedVal.toLocaleString()}</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Promise to Pay (PTP)</span>
                        <span class="text-lg font-bold text-cyan-400">${ptpSetCount} Accounts</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Active Field Officers</span>
                        <span class="text-lg font-bold text-white">12 Agents</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">AI Resolution Rate</span>
                        <span class="text-lg font-bold text-cyan-500">65.4%</span>
                    </div>
                </div>

                <!-- Three Panel Workspace (Left Directory + Center Details + Right Mobile Simulator) -->
                <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
                    
                    <!-- Panel 1: Borrower Overdue Directory (Col span 3) -->
                    <div class="glass-panel rounded-2xl p-4 xl:col-span-3 flex flex-col gap-4 max-h-[240px] xl:max-h-[640px] overflow-hidden">
                        <h3 class="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Overdue Accounts</h3>
                        <div class="overflow-y-auto flex-1 custom-scrollbar pr-1 flex flex-col gap-2.5">
                            ${state.collections.map(col => {
            const isSelected = col.id === activeColl.id;
            const activeClass = isSelected ? "bg-slate-900 border-cyan-500/40" : "bg-slate-900/20 border-slate-900 hover:border-slate-800";

            let riskBadge = "text-green-400 bg-green-950/20 border border-green-900/30";
            if (col.riskScore >= 75) riskBadge = "text-red-400 bg-red-950/20 border border-red-900/30";
            else if (col.riskScore >= 40) riskBadge = "text-cyan-400 bg-cyan-950/20 border border-cyan-900/30";

            return `
                                    <div class="p-3 border rounded-xl flex flex-col gap-2 cursor-pointer transition-all ${activeClass}" data-coll-item-id="${col.id}">
                                        <div class="flex justify-between items-center">
                                            <h4 class="text-xs font-bold text-white">${col.name}</h4>
                                            <span class="px-1.5 py-0.5 rounded text-[8px] font-bold ${riskBadge}">${col.riskLevel}</span>
                                        </div>
                                        <div class="flex justify-between text-[10px] text-slate-400">
                                            <span>Due: ₹${col.totalDue.toLocaleString()}</span>
                                            <span class="text-cyan-500 font-bold font-mono">${col.bucket}</span>
                                        </div>
                                    </div>
                                `;
        }).join("")}
                        </div>
                    </div>

                    <!-- Panel 2: Collector 360 Workspace (Col span 5) -->
                    <div class="xl:col-span-5 flex flex-col gap-6 max-h-[460px] xl:max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
                        
                        <!-- Collector Card Details -->
                        <div class="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col gap-4">
                            <div class="flex justify-between items-start">
                                <div>
                                    <span class="text-[9px] text-slate-500 font-bold uppercase tracking-wider">${activeColl.loanId}</span>
                                    <h3 class="text-base font-bold text-white tracking-wide">${activeColl.name}</h3>
                                    <p class="text-xs text-slate-400">${activeColl.phone} | Product: ${activeColl.loanProduct}</p>
                                </div>
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-cyan-400 border border-slate-800 uppercase tracking-widest">${activeColl.promiseToPay}</span>
                            </div>

                            <!-- Metrics -->
                            <div class="grid grid-cols-3 gap-3 bg-slate-950/40 p-4 border border-slate-900 rounded-xl text-center">
                                <div>
                                    <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Total Overdue</span>
                                    <span class="text-xs font-bold text-red-400 tracking-tight font-mono">₹${activeColl.totalDue.toLocaleString()}</span>
                                </div>
                                <div>
                                    <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Collected Today</span>
                                    <span class="text-xs font-bold text-green-400 tracking-tight font-mono">₹${activeColl.collectedToday.toLocaleString()}</span>
                                </div>
                                <div>
                                    <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">AI Risk Score</span>
                                    <span class="text-xs font-bold text-cyan-500 tracking-tight font-mono">${activeColl.riskScore}%</span>
                                </div>
                            </div>

                            <!-- Actions Row -->
                            <div class="flex gap-2 border-t border-slate-900 pt-3">
                                <button id="btn-coll-wa" class="flex-1 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-green-500/50 text-[10px] font-bold text-slate-300 transition-colors uppercase tracking-wider flex items-center justify-center gap-1">
                                    <i data-lucide="message-square" class="w-3.5 h-3.5 text-green-500"></i>
                                    WA Reminder
                                </button>
                                <button id="btn-coll-bot" class="flex-1 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-red-500/50 text-[10px] font-bold text-slate-300 transition-colors uppercase tracking-wider flex items-center justify-center gap-1">
                                    <i data-lucide="phone" class="w-3.5 h-3.5 text-red-500"></i>
                                    Voice Bot Call
                                </button>
                                <button id="btn-coll-ptp" class="flex-1 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-[10px] font-bold text-slate-300 transition-colors uppercase tracking-wider flex items-center justify-center gap-1">
                                    <i data-lucide="calendar" class="w-3.5 h-3.5 text-cyan-500"></i>
                                    Log PTP
                                </button>
                            </div>
                        </div>

                        <!-- Repayment History & Contact Timeline -->
                        <div class="glass-panel rounded-2xl p-5 flex flex-col gap-4">
                            <div class="flex border-b border-slate-900 pb-2">
                                <h4 class="text-xs font-bold text-white uppercase tracking-wider">Communication Activity Ledger</h4>
                            </div>

                            <div class="flex flex-col gap-3">
                                ${activeColl.communicationTimeline.map(t => {
            return `
                                        <div class="p-3 bg-slate-950/40 border border-slate-900 rounded-xl flex justify-between items-start gap-4">
                                            <div>
                                                <span class="text-[8px] text-slate-500 font-mono font-bold uppercase block mb-0.5">${t.date}</span>
                                                <h5 class="text-xs font-bold text-white">${t.type}</h5>
                                                <p class="text-[10px] text-slate-400 mt-1">${t.msg}</p>
                                            </div>
                                            <span class="px-1.5 py-0.5 rounded text-[8px] font-bold bg-slate-900 text-slate-400 border border-slate-800">${t.status}</span>
                                        </div>
                                    `;
        }).join("")}
                            </div>
                        </div>

                    </div>

                    <!-- Panel 3: Physical framed Mobile Field Agent App Simulator (Col span 4) -->
                    <div class="xl:col-span-4 flex justify-center">
                        <div class="phone-frame w-[320px] h-[580px] flex flex-col select-none">
                            <div class="phone-notch"></div>
                            
                            <!-- Phone Top Bar -->
                            <div class="pt-5 px-4 pb-2 bg-slate-950 flex items-center justify-between text-[10px] font-bold text-slate-400 select-none">
                                <span>09:41</span>
                                <div class="flex items-center gap-1.5">
                                    <i data-lucide="wifi" class="w-3.5 h-3.5"></i>
                                    <i data-lucide="battery" class="w-3.5 h-3.5 text-cyan-500"></i>
                                </div>
                            </div>

                            <!-- Phone Header Area -->
                            <div class="bg-brand-gradient px-4 py-4 border-b border-indigo-950 shadow flex items-center gap-3">
                                <div class="w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                                    <i data-lucide="user-cog" class="w-4 h-4 text-cyan-400"></i>
                                </div>
                                <div>
                                    <h4 class="text-xs font-bold text-white">Rakesh Yadav (Field Agent)</h4>
                                    <p class="text-[9px] text-cyan-400 font-bold uppercase tracking-widest">Mumbai West region</p>
                                </div>
                            </div>

                            <!-- Phone Screen Scrollable Content -->
                            <div class="flex-1 overflow-y-auto bg-slate-950 p-3.5 flex flex-col gap-3 custom-scrollbar">
                                <div class="flex items-center justify-between border-b border-slate-900 pb-1">
                                    <h5 class="text-[10px] font-bold text-white uppercase tracking-wider">Scheduled Daily Visits</h5>
                                    <span class="text-[9px] text-cyan-500 font-bold uppercase tracking-widest">Maps linked</span>
                                </div>

                                <!-- Visit Card -->
                                <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl flex flex-col gap-2 relative">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <h4 class="text-xs font-bold text-white">Amit Deshmukh</h4>
                                            <p class="text-[9px] text-slate-500">45, Carter Road, Bandra West</p>
                                        </div>
                                        <span class="px-1.5 py-0.5 rounded text-[8px] font-bold bg-red-950 text-red-400 border border-red-800/30">DPD 45</span>
                                    </div>
                                    <div class="flex gap-2 justify-between border-t border-slate-950 pt-2 text-[9px] font-bold text-slate-400">
                                        <span>Overdue: ₹45,000</span>
                                        <span>PTP: None</span>
                                    </div>
                                    <!-- Log Collection button inside phone -->
                                    <button id="btn-phone-log-payment" class="mt-2 w-full py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors">
                                        <i data-lucide="hand-coins" class="w-3.5 h-3.5"></i>
                                        Log Cash/UPI Payment
                                    </button>
                                </div>

                                <div class="p-3 bg-slate-900/40 border border-slate-900 rounded-xl flex flex-col gap-2 opacity-60">
                                    <div class="flex justify-between items-start">
                                        <div>
                                            <h4 class="text-xs font-bold text-white">Harish Gupta</h4>
                                            <p class="text-[9px] text-slate-500">102, Linking Road, Santacruz</p>
                                        </div>
                                        <span class="px-1.5 py-0.5 rounded text-[8px] font-bold bg-cyan-950 text-cyan-400 border border-cyan-800/30">DPD 15</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Phone Bottom Nav Bar -->
                            <div class="p-3.5 bg-slate-950 border-t border-slate-900 flex justify-around text-slate-500 text-[9px] font-bold uppercase tracking-wider">
                                <span class="text-cyan-500 flex flex-col items-center gap-0.5"><i data-lucide="clipboard-list" class="w-4 h-4"></i>Visits</span>
                                <span class="flex flex-col items-center gap-0.5"><i data-lucide="map-pin" class="w-4 h-4"></i>Map Grid</span>
                                <span class="flex flex-col items-center gap-0.5"><i data-lucide="check-circle" class="w-4 h-4"></i>Sync logs</span>
                            </div>

                        </div>
                    </div>

                </div>

                <!-- OMNICHANNEL RECOVERY JOURNEY BUILDER -->
                <div class="glass-panel rounded-2xl p-5 flex flex-col gap-4 border border-slate-800">
                    <div class="flex justify-between items-center border-b border-slate-900 pb-2 mb-2">
                        <div>
                            <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                <i data-lucide="network" class="w-4 h-4 text-cyan-500 animate-pulse"></i>
                                IKONTEL JOURNEY BUILDER
                            </h3>
                            <p class="text-[10px] text-slate-500 mt-0.5">Drag-and-drop or configure the recovery follow-up sequence logic based on overdue age buckets.</p>
                        </div>
                        <button id="btn-add-journey-step" class="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-bold text-cyan-400 rounded-lg uppercase tracking-wider flex items-center gap-1.5 transition-colors">
                            <i data-lucide="plus-circle" class="w-4 h-4 text-cyan-500"></i>
                            Add Retry Sequence
                        </button>
                    </div>

                    <!-- Flow Canvas Grid -->
                    <div class="flex flex-col md:flex-row items-center gap-4 py-8 overflow-x-auto justify-center select-none" id="journey-flow-canvas">
                        ${renderJourneySteps(state.settings.journeySteps)}
                    </div>
                </div>

            </div>
        `;

        // Render steps for the Journey Canvas
        function renderJourneySteps(steps) {
            return steps.map((s, idx) => {
                const arrowHtml = idx < steps.length - 1
                    ? `
                        <div class="flex flex-col items-center justify-center flex-shrink-0 mx-2 text-slate-700 animate-pulse">
                            <i data-lucide="arrow-right" class="w-5 h-5 text-cyan-500 hidden md:block"></i>
                            <i data-lucide="arrow-down" class="w-5 h-5 text-cyan-500 md:hidden my-2"></i>
                        </div>
                    `
                    : "";

                let icon = "message-square";
                if (s.type === "SMS") icon = "smartphone";
                else if (s.type === "Voice Bot") icon = "bot";
                else if (s.type === "Agent Call") icon = "phone";
                else if (s.type === "Field Visit") icon = "map-pin";
                else if (s.type === "Legal Escalation") icon = "gavel";

                return `
                    <div class="flex items-center flex-col md:flex-row flex-shrink-0">
                        <div class="glass-panel p-4 rounded-2xl border border-slate-800/80 w-44 flex flex-col gap-2 relative shadow-md hover:border-cyan-500/30 transition-colors">
                            <div class="flex justify-between items-center">
                                <span class="px-2 py-0.5 rounded text-[8px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">${s.duration}</span>
                                <button class="btn-delete-journey-step text-slate-600 hover:text-red-500 transition-colors" data-step-idx="${idx}">
                                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                            <div class="flex items-center gap-2 mt-1">
                                <i data-lucide="${icon}" class="w-4 h-4 text-cyan-500"></i>
                                <span class="text-xs font-bold text-white">${s.type}</span>
                            </div>
                            <p class="text-[9px] text-slate-500 font-semibold leading-relaxed">${s.desc}</p>
                        </div>
                        ${arrowHtml}
                    </div>
                `;
            }).join("");
        }

        lucide.createIcons();
        this.setupEvents(mockStore);
    },

    setupEvents(mockStore) {
        const container = document.getElementById("main-content-pane");

        // Selecting overdue user directory card
        const overdueCards = document.querySelectorAll("[data-coll-item-id]");
        overdueCards.forEach(card => {
            card.addEventListener("click", () => {
                const collId = card.dataset.collItemId;
                mockStore.update(s => {
                    s.activeCollectionId = collId;
                });
                this.render(container, mockStore);
            });
        });

        // Trigger WhatsApp reminder alert
        const btnWa = document.getElementById("btn-coll-wa");
        if (btnWa) {
            btnWa.addEventListener("click", () => {
                const activeColl = mockStore.getState().collections.find(c => c.id === mockStore.getState().activeCollectionId);
                alert(`SUCCESS:Repayment gateway link issued to ${activeColl.name}'s WhatsApp registered endpoint.`);
            });
        }

        // Trigger Voice Bot dialer
        const btnBot = document.getElementById("btn-coll-bot");
        if (btnBot) {
            btnBot.addEventListener("click", () => {
                // Instantly open the global simulator drawer and select the Voice Bot dialer tab!
                const drawer = document.getElementById("simulator-drawer");
                drawer.classList.remove("translate-x-full");

                // Select the Voice tab
                const tabVoice = document.getElementById("sim-tab-voice");
                tabVoice.click();

                // Select active lead in voice dialer dropdown
                const voiceLeadSelector = document.getElementById("voice-lead-selector");
                if (voiceLeadSelector) {
                    voiceLeadSelector.value = "Amit Deshmukh";
                }
            });
        }

        // Log PTP details
        const btnPtp = document.getElementById("btn-coll-ptp");
        if (btnPtp) {
            btnPtp.addEventListener("click", () => {
                const date = prompt("Enter PTP Settlement Date (YYYY-MM-DD):", new Date().toISOString().split("T")[0]);
                if (date) {
                    const activeCollId = mockStore.getState().activeCollectionId;
                    mockStore.addPromiseToPay(activeCollId, date, 15000);
                    alert("SUCCESS: Repayment Promise logged and synced.");
                    this.render(container, mockStore);

                    const e = new CustomEvent("storeUpdated");
                    window.dispatchEvent(e);
                }
            });
        }

        // Log Payment inside Mobile Frame Simulator
        const btnPhoneLog = document.getElementById("btn-phone-log-payment");
        if (btnPhoneLog) {
            btnPhoneLog.addEventListener("click", () => {
                const activeCollId = mockStore.getState().activeCollectionId;
                mockStore.addPayment(activeCollId, 45000, "UPI Direct");
                alert("MOBILE TRANS: UPI payment logged. Receipt synced to Mumbai Command Node.");
                this.render(container, mockStore);

                const e = new CustomEvent("storeUpdated");
                window.dispatchEvent(e);
            });
        }

        // Add step to visual Journey Builder
        const btnAddStep = document.getElementById("btn-add-journey-step");
        if (btnAddStep) {
            btnAddStep.addEventListener("click", () => {
                const types = ["SMS", "WhatsApp", "Voice Bot", "Agent Call", "Field Visit", "Legal Escalation"];
                const selectType = prompt(`Select Channel Step Type (${types.join(", ")}):`, "WhatsApp");
                if (selectType && types.includes(selectType)) {
                    const duration = prompt("Enter Delay Bucket (e.g. Day 15):", "Day 15");
                    const desc = prompt("Enter Instruction (e.g. Dispatches Section 138 Warning):", "Retry repayment template");

                    mockStore.update(s => {
                        s.settings.journeySteps.push({
                            id: `step-${Math.random()}`,
                            type: selectType,
                            duration: duration || "Day 15",
                            title: `${selectType} Automated`,
                            desc: desc || "Auto notification"
                        });
                    });

                    this.render(container, mockStore);
                }
            });
        }

        // Delete step from visual Journey Builder
        const btnsDelete = document.querySelectorAll(".btn-delete-journey-step");
        btnsDelete.forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.dataset.stepIdx);
                mockStore.update(s => {
                    s.settings.journeySteps.splice(idx, 1);
                });
                this.render(container, mockStore);
            });
        });
    }
};
