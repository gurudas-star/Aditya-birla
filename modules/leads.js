// Module 4: Lead Management & Customer 360 Module Component

export const LeadsModule = {
    render(container, mockStore) {
        const state = mockStore.getState();
        const activeLead = state.leads.find(l => l.id === state.activeLeadId) || state.leads[0];

        // Group counts
        const newLeads = state.leads.filter(l => l.status === "New Lead").length;
        const contacted = state.leads.filter(l => l.status === "Contacted").length;
        const docsPending = state.leads.filter(l => l.status === "Documents Pending").length;
        const verified = state.leads.filter(l => l.status === "Verified").length;
        const disbursed = state.leads.filter(l => l.status === "Disbursed").length;

        // Render lead rows
        const leadRowsHtml = state.leads.map(lead => {
            const isSelected = lead.id === activeLead.id;
            const selectBg = isSelected ? "bg-slate-900 border-l-4 border-cyan-500" : "hover:bg-slate-900/40 border-l-4 border-transparent";
            
            let statusBadge = "";
            if (lead.status === "Disbursed") statusBadge = "bg-green-950 text-green-400 border-green-800";
            else if (lead.status === "New Lead") statusBadge = "bg-blue-950 text-blue-400 border-blue-800";
            else if (lead.status === "Documents Pending") statusBadge = "bg-red-950 text-red-400 border-red-800";
            else statusBadge = "bg-cyan-950 text-cyan-400 border-cyan-800";

            return `
                <tr class="border-b border-slate-900/50 cursor-pointer transition-colors ${selectBg}" data-lead-id="${lead.id}">
                    <td class="py-3 px-4 font-bold text-white">${lead.name}</td>
                    <td class="py-3 px-4 text-slate-400">${lead.product}</td>
                    <td class="py-3 px-4 font-mono font-bold text-slate-200">₹${lead.amount.toLocaleString()}</td>
                    <td class="py-3 px-4">
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusBadge}">${lead.status}</span>
                    </td>
                    <td class="py-3 px-4 text-center font-bold text-cyan-500">${lead.conversionProb}%</td>
                </tr>
            `;
        }).join("");

        // Render Active Lead Timeline
        const timelineHtml = activeLead.timeline.map(t => {
            let icon = "activity";
            let color = "text-slate-500";
            if (t.type === "system") { icon = "database"; color = "text-cyan-500"; }
            else if (t.type === "bot_call") { icon = "phone"; color = "text-red-500"; }
            else if (t.type === "whatsapp") { icon = "message-square"; color = "text-green-500"; }
            else if (t.type === "kyc") { icon = "fingerprint"; color = "text-teal-400"; }
            else if (t.type === "loan") { icon = "banknote"; color = "text-green-400"; }

            return `
                <div class="flex gap-3 relative pb-5 group">
                    <div class="absolute left-4 top-8 bottom-0 w-0.5 bg-slate-800 group-last:hidden"></div>
                    <div class="w-8.5 h-8.5 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 flex-shrink-0 z-10">
                        <i data-lucide="${icon}" class="w-4 h-4 ${color}"></i>
                    </div>
                    <div class="glass-panel p-3 rounded-xl border border-slate-900 flex-1">
                        <div class="flex justify-between items-center mb-1">
                            <span class="text-[9px] text-slate-500 font-bold uppercase tracking-wider">${t.date}</span>
                            <span class="text-[8px] text-slate-600 font-bold uppercase">${t.type}</span>
                        </div>
                        <p class="text-xs text-slate-200">${t.msg}</p>
                    </div>
                </div>
            `;
        }).join("");

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Page Title -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">Lead Management Funnel</h2>
                        <p class="text-xs text-slate-500">Qualify, score, and track borrower leads across CRM pipelines integrated with predictive engines.</p>
                    </div>

                    <!-- View Toggle -->
                    <div class="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                        <button id="btn-leads-grid-view" class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md text-cyan-500 bg-slate-950 border border-slate-800">
                            Customer 360
                        </button>
                        <button id="btn-leads-kanban-view" class="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md text-slate-400 hover:text-white">
                            Kanban Pipeline
                        </button>
                    </div>
                </div>

                <!-- LEAD KPI CARDS -->
                <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">New Leads</span>
                        <span class="text-lg font-bold text-blue-400">${newLeads}</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Contacted / Call Run</span>
                        <span class="text-lg font-bold text-cyan-400">${contacted}</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Documents Pending</span>
                        <span class="text-lg font-bold text-red-400">${docsPending}</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Verified / Approved</span>
                        <span class="text-lg font-bold text-green-400">${verified}</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Loans Disbursed</span>
                        <span class="text-lg font-bold text-white">${disbursed}</span>
                    </div>
                </div>

                <!-- VIEW 1: CUSTOMER 360 DEEP ENGINE -->
                <div id="view-customer-360" class="grid grid-cols-1 xl:grid-cols-5 gap-6">
                    
                    <!-- Left Columns: Table of leads (Span 2) -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-4 xl:col-span-2 max-h-[260px] xl:max-h-[640px] overflow-hidden">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Active Lead Directory</h3>
                        
                        <div class="overflow-y-auto flex-1 custom-scrollbar">
                            <table class="w-full text-left text-xs text-slate-300 border-collapse">
                                <thead>
                                    <tr class="border-b border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
                                        <th class="py-2.5 px-4">Borrower</th>
                                        <th class="py-2.5 px-4">Product</th>
                                        <th class="py-2.5 px-4">Req. Amount</th>
                                        <th class="py-2.5 px-4">Status</th>
                                        <th class="py-2.5 px-4 text-center">AI Convert</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${leadRowsHtml}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Right Columns: Customer 360 Details (Span 3) -->
                    <div class="xl:col-span-3 flex flex-col gap-6 max-h-[500px] xl:max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
                        
                        <!-- Top Details Header -->
                        <div class="glass-panel rounded-2xl p-5 border border-slate-800/80 flex flex-col gap-4">
                            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                                <div>
                                    <span class="text-[9px] text-slate-500 uppercase font-bold tracking-widest">${activeLead.id}</span>
                                    <h3 class="text-lg font-bold text-white tracking-wide">${activeLead.name}</h3>
                                    <p class="text-xs text-slate-400">${activeLead.email} | ${activeLead.phone}</p>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-xs text-slate-400 font-bold">Pipeline Stage:</span>
                                    <select id="select-active-lead-status" class="bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-cyan-400 px-3 py-1.5">
                                        <option value="New Lead" ${activeLead.status === "New Lead" ? "selected" : ""}>New Lead</option>
                                        <option value="Contacted" ${activeLead.status === "Contacted" ? "selected" : ""}>Contacted</option>
                                        <option value="Interested" ${activeLead.status === "Interested" ? "selected" : ""}>Interested</option>
                                        <option value="Documents Pending" ${activeLead.status === "Documents Pending" ? "selected" : ""}>Documents Pending</option>
                                        <option value="Verified" ${activeLead.status === "Verified" ? "selected" : ""}>Verified</option>
                                        <option value="Disbursed" ${activeLead.status === "Disbursed" ? "selected" : ""}>Disbursed</option>
                                    </select>
                                </div>
                            </div>

                            <!-- AI Confidence Meter Widgets -->
                            <div class="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-950/40 p-4 border border-slate-900 rounded-xl">
                                <div>
                                    <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Conversion Prob.</span>
                                    <span class="text-md font-bold text-green-400 tracking-tight">${activeLead.conversionProb}%</span>
                                </div>
                                <div>
                                    <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Drop Out Risk</span>
                                    <span class="text-md font-bold text-red-400 tracking-tight">${activeLead.dropRisk}</span>
                                </div>
                                <div>
                                    <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Customer Sentiment</span>
                                    <span class="text-md font-bold text-cyan-400 tracking-tight">${activeLead.sentiment}</span>
                                </div>
                                <div>
                                    <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Best Channel</span>
                                    <span class="text-md font-bold text-white tracking-tight">${activeLead.bestChannel}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Lower Details Tabs (Timeline vs Transcripts) -->
                        <div class="glass-panel rounded-2xl p-5 flex flex-col gap-4">
                            <div class="flex border-b border-slate-900">
                                <button id="btn-tab-timeline" class="pb-2 text-xs font-bold uppercase tracking-wider text-cyan-500 border-b-2 border-cyan-500 mr-4">Timeline Journey</button>
                                <button id="btn-tab-whatsapp-log" class="pb-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white mr-4">WhatsApp History</button>
                                <button id="btn-tab-voice-log" class="pb-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white">Voice Bot Transcripts</button>
                            </div>

                            <!-- Tab 1: Timeline -->
                            <div id="leads-tab-timeline" class="flex flex-col gap-3">
                                ${timelineHtml}
                            </div>

                            <!-- Tab 2: WhatsApp Chat -->
                            <div id="leads-tab-whatsapp" class="hidden flex flex-col gap-3 bg-slate-950/40 p-4 border border-slate-900 rounded-xl max-h-[300px] overflow-y-auto custom-scrollbar">
                                ${activeLead.whatsappLogs.length > 0 ? activeLead.whatsappLogs.map(l => {
                                    const chatClass = l.sender === "customer" 
                                        ? "bg-red-950/40 text-slate-200 self-end rounded-tr-none border border-red-800/10" 
                                        : "bg-slate-900 text-slate-200 self-start rounded-tl-none border border-slate-800/40";
                                    return `
                                        <div class="px-3.5 py-2.5 rounded-xl text-xs max-w-[80%] flex flex-col gap-1 ${chatClass}">
                                            <span class="font-bold text-[9px] ${l.sender === 'customer' ? 'text-red-400' : 'text-cyan-400'}">${l.sender.toUpperCase()}</span>
                                            <p>${l.msg}</p>
                                            <span class="text-[8px] text-slate-500 text-right font-mono font-semibold">${l.time}</span>
                                        </div>
                                    `;
                                }).join("") : `<p class="text-xs text-slate-500 text-center py-8">No WhatsApp dialogues logged for this user.</p>`}
                            </div>

                            <!-- Tab 3: Voice Bot script -->
                            <div id="leads-tab-voice" class="hidden flex flex-col gap-2 font-mono text-[10px] leading-relaxed bg-slate-900/60 p-4 border border-slate-900 rounded-xl max-h-[300px] overflow-y-auto custom-scrollbar">
                                ${activeLead.voiceLogs.length > 0 ? activeLead.voiceLogs.map(v => {
                                    return `
                                        <div class="flex gap-2">
                                            <span class="${v.speaker === 'bot' ? 'text-cyan-500' : 'text-red-400'} font-bold">[${v.speaker.toUpperCase()}]:</span>
                                            <span class="text-slate-200">${v.text}</span>
                                        </div>
                                    `;
                                }).join("") : `<p class="text-xs text-slate-500 text-center py-8 font-sans">No voice recordings logged for this user.</p>`}
                            </div>

                        </div>

                    </div>

                </div>

                <div id="view-leads-kanban" class="hidden flex flex-row overflow-x-auto xl:grid md:grid md:grid-cols-3 xl:grid-cols-5 gap-4 pb-4 select-none flex-nowrap xl:flex-wrap w-full custom-scrollbar">
                    
                    <!-- Col 1 -->
                    <div class="glass-panel p-3.5 rounded-2xl flex flex-col gap-3 min-h-[500px] w-[280px] md:w-auto flex-shrink-0 md:flex-shrink">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-1.5">
                            <span class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-blue-500"></span>New Lead
                            </span>
                            <span class="text-[10px] bg-slate-900 px-1.5 py-0.5 rounded text-slate-400 font-bold">${newLeads}</span>
                        </div>
                        <div class="flex flex-col gap-2 overflow-y-auto max-h-[460px] custom-scrollbar">
                            ${renderKanbanCards(state.leads, "New Lead")}
                        </div>
                    </div>

                    <!-- Col 2 -->
                    <div class="glass-panel p-3.5 rounded-2xl flex flex-col gap-3 min-h-[500px] w-[280px] md:w-auto flex-shrink-0 md:flex-shrink">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-1.5">
                            <span class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-cyan-500"></span>Contacted
                            </span>
                            <span class="text-[10px] bg-slate-900 px-1.5 py-0.5 rounded text-slate-400 font-bold">${contacted}</span>
                        </div>
                        <div class="flex flex-col gap-2 overflow-y-auto max-h-[460px] custom-scrollbar">
                            ${renderKanbanCards(state.leads, "Contacted")}
                        </div>
                    </div>

                    <!-- Col 3 -->
                    <div class="glass-panel p-3.5 rounded-2xl flex flex-col gap-3 min-h-[500px] w-[280px] md:w-auto flex-shrink-0 md:flex-shrink">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-1.5">
                            <span class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-red-500"></span>Docs Pending
                            </span>
                            <span class="text-[10px] bg-slate-900 px-1.5 py-0.5 rounded text-slate-400 font-bold">${docsPending}</span>
                        </div>
                        <div class="flex flex-col gap-2 overflow-y-auto max-h-[460px] custom-scrollbar">
                            ${renderKanbanCards(state.leads, "Documents Pending")}
                        </div>
                    </div>

                    <!-- Col 4 -->
                    <div class="glass-panel p-3.5 rounded-2xl flex flex-col gap-3 min-h-[500px] w-[280px] md:w-auto flex-shrink-0 md:flex-shrink">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-1.5">
                            <span class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-green-500"></span>Verified
                            </span>
                            <span class="text-[10px] bg-slate-900 px-1.5 py-0.5 rounded text-slate-400 font-bold">${verified}</span>
                        </div>
                        <div class="flex flex-col gap-2 overflow-y-auto max-h-[460px] custom-scrollbar">
                            ${renderKanbanCards(state.leads, "Verified")}
                        </div>
                    </div>

                    <!-- Col 5 -->
                    <div class="glass-panel p-3.5 rounded-2xl flex flex-col gap-3 min-h-[500px] w-[280px] md:w-auto flex-shrink-0 md:flex-shrink">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-1.5">
                            <span class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-white"></span>Disbursed
                            </span>
                            <span class="text-[10px] bg-slate-900 px-1.5 py-0.5 rounded text-slate-400 font-bold">${disbursed}</span>
                        </div>
                        <div class="flex flex-col gap-2 overflow-y-auto max-h-[460px] custom-scrollbar">
                            ${renderKanbanCards(state.leads, "Disbursed")}
                        </div>
                    </div>

                </div>

            </div>
        `;

        // Helper function for rendering card lists in kanban
        function renderKanbanCards(leads, status) {
            const filtered = leads.filter(l => l.status === status);
            if (filtered.length === 0) return `<div class="text-[10px] text-slate-600 text-center py-8">Empty Column</div>`;
            return filtered.map(l => {
                return `
                    <div class="p-3 bg-slate-900/40 border border-slate-800 rounded-xl flex flex-col gap-2 hover:border-cyan-500/20 transition-colors">
                        <div>
                            <h4 class="text-xs font-bold text-white">${l.name}</h4>
                            <span class="text-[9px] text-slate-500 font-bold">${l.product}</span>
                        </div>
                        <div class="flex justify-between items-center border-t border-slate-900 pt-2 text-[10px] font-bold">
                            <span class="text-white">₹${(l.amount / 100000).toFixed(1)}L</span>
                            <span class="text-cyan-500">${l.conversionProb}% AI</span>
                        </div>
                    </div>
                `;
            }).join("");
        }

        lucide.createIcons();
        this.setupEvents(mockStore);
    },

    setupEvents(mockStore) {
        const btn360 = document.getElementById("btn-leads-grid-view");
        const btnKanban = document.getElementById("btn-leads-kanban-view");
        
        const view360 = document.getElementById("view-customer-360");
        const viewKanban = document.getElementById("view-leads-kanban");
        
        const container = document.getElementById("main-content-pane");

        // Toggle Views
        btn360.addEventListener("click", () => {
            btn360.className = "px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md text-cyan-500 bg-slate-950 border border-slate-800";
            btnKanban.className = "px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md text-slate-400 hover:text-white";
            view360.classList.remove("hidden");
            viewKanban.classList.add("hidden");
        });

        btnKanban.addEventListener("click", () => {
            btnKanban.className = "px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md text-cyan-500 bg-slate-950 border border-slate-800";
            btn360.className = "px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md text-slate-400 hover:text-white";
            viewKanban.classList.remove("hidden");
            view360.classList.add("hidden");
        });

        // Click Table Rows to Switch Active Lead
        const rows = document.querySelectorAll("tr[data-lead-id]");
        rows.forEach(row => {
            row.addEventListener("click", () => {
                const leadId = row.dataset.lead-id;
                mockStore.update(s => {
                    s.activeLeadId = leadId;
                });
                this.render(container, mockStore);
            });
        });

        // Dropdown to update Lead Pipeline Stage
        const selectStatus = document.getElementById("select-active-lead-status");
        if (selectStatus) {
            selectStatus.addEventListener("change", (e) => {
                const newStatus = e.target.value;
                const activeLeadId = mockStore.getState().activeLeadId;
                mockStore.updateLeadStatus(activeLeadId, newStatus);
                this.render(container, mockStore);
            });
        }

        // Details Tabs Switcher
        const tabTimeline = document.getElementById("btn-tab-timeline");
        const tabWhatsapp = document.getElementById("btn-tab-whatsapp-log");
        const tabVoice = document.getElementById("btn-tab-voice-log");

        const blockTimeline = document.getElementById("leads-tab-timeline");
        const blockWhatsapp = document.getElementById("leads-tab-whatsapp");
        const blockVoice = document.getElementById("leads-tab-voice");

        const clearTabs = () => {
            tabTimeline.className = "pb-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white mr-4 border-b-2 border-transparent";
            tabWhatsapp.className = "pb-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white mr-4 border-b-2 border-transparent";
            tabVoice.className = "pb-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white border-b-2 border-transparent";
            
            blockTimeline.classList.add("hidden");
            blockWhatsapp.classList.add("hidden");
            blockVoice.classList.add("hidden");
        };

        tabTimeline.addEventListener("click", () => {
            clearTabs();
            tabTimeline.className = "pb-2 text-xs font-bold uppercase tracking-wider text-cyan-500 border-b-2 border-cyan-500 mr-4";
            blockTimeline.classList.remove("hidden");
        });

        tabWhatsapp.addEventListener("click", () => {
            clearTabs();
            tabWhatsapp.className = "pb-2 text-xs font-bold uppercase tracking-wider text-cyan-500 border-b-2 border-cyan-500 mr-4";
            blockWhatsapp.classList.remove("hidden");
        });

        tabVoice.addEventListener("click", () => {
            clearTabs();
            tabVoice.className = "pb-2 text-xs font-bold uppercase tracking-wider text-cyan-500 border-b-2 border-cyan-500";
            blockVoice.classList.remove("hidden");
        });
    }
};
