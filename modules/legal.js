// Module 8: Legal Case Tracker & Automated Notice Creator Module Component

export const LegalModule = {
    render(container, mockStore) {
        const state = mockStore.getState();
        const activeCase = state.legalCases.find(c => c.id === state.activeCaseId) || state.legalCases[0];

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Page Title Header -->
                <div class="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">Legal case management</h2>
                        <p class="text-xs text-slate-500">Track arbitration, Sec 138 notices, Lok Adalat disputes, and auto-generate legal warnings.</p>
                    </div>
                </div>

                <!-- KPI Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Legal Notices Dispatched</span>
                        <span class="text-lg font-bold text-cyan-400">128 notices</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Arbitration cases</span>
                        <span class="text-lg font-bold text-red-400">42 hearings</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Out of Court Settlements</span>
                        <span class="text-lg font-bold text-green-400">₹84.5 Lakhs</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Active Lawyers Panel</span>
                        <span class="text-lg font-bold text-white">8 Counselors</span>
                    </div>
                </div>

                <!-- Main Layout -->
                <div class="grid grid-cols-1 xl:grid-cols-12 gap-6">
                    
                    <!-- Panel 1: Case list Directory (Col span 5) -->
                    <div class="glass-panel rounded-2xl p-5 xl:col-span-5 flex flex-col gap-4 max-h-[480px] overflow-hidden">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Arbitration Case Docket</h3>
                        
                        <div class="overflow-y-auto flex-1 custom-scrollbar">
                            <table class="w-full text-left text-xs text-slate-300 border-collapse">
                                <thead>
                                    <tr class="border-b border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
                                        <th class="py-2.5 px-2">Case Index</th>
                                        <th class="py-2.5 px-2">Borrower</th>
                                        <th class="py-2.5 px-2">Arrears</th>
                                        <th class="py-2.5 px-2">Stage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${state.legalCases.map(l => {
                                        const isSelected = l.id === activeCase.id;
                                        const selectBg = isSelected ? "bg-slate-900 border-l-4 border-cyan-500" : "hover:bg-slate-900/40 border-l-4 border-transparent";
                                        
                                        return `
                                            <tr class="border-b border-slate-900/50 cursor-pointer transition-colors ${selectBg}" data-case-item-id="${l.id}">
                                                <td class="py-3 px-2 font-bold font-mono text-slate-400">${l.caseId}</td>
                                                <td class="py-3 px-2 font-bold text-white">${l.customerName}</td>
                                                <td class="py-3 px-2 font-bold text-red-400">₹${l.amountOverdue.toLocaleString()}</td>
                                                <td class="py-3 px-2"><span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-900 text-cyan-400 border border-slate-800">${l.status}</span></td>
                                            </tr>
                                        `;
                                    }).join("")}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Panel 2: Case Details & Automation Notice Generator (Col span 7) -->
                    <div class="xl:col-span-7 flex flex-col gap-6">
                        <div class="glass-panel rounded-2xl p-5 border border-slate-800/80 flex flex-col gap-4">
                            <div class="flex justify-between items-start border-b border-slate-900 pb-2">
                                <div>
                                    <span class="text-[9px] text-slate-500 font-bold font-mono uppercase tracking-widest">${activeCase.caseId}</span>
                                    <h3 class="text-base font-bold text-white tracking-wide">Case Summary: ${activeCase.customerName}</h3>
                                    <p class="text-xs text-slate-400">Arrears: ₹${activeCase.amountOverdue.toLocaleString()} | Lawyer: ${activeCase.lawyerName}</p>
                                </div>
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900 text-red-400 border border-slate-800 uppercase tracking-widest">${activeCase.status}</span>
                            </div>

                            <!-- Case Attributes Info -->
                            <div class="grid grid-cols-3 gap-3 text-xs bg-slate-950/40 p-4 border border-slate-900 rounded-xl">
                                <div>
                                    <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Court Node</span>
                                    <span class="text-white font-bold">${activeCase.court}</span>
                                </div>
                                <div>
                                    <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Hearing Date</span>
                                    <span class="text-white font-bold font-mono">${activeCase.hearingDate}</span>
                                </div>
                                <div>
                                    <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Attached Files</span>
                                    <span class="text-cyan-400 font-bold cursor-pointer hover:underline flex items-center gap-1">
                                        <i data-lucide="paperclip" class="w-3.5 h-3.5"></i>
                                        ${activeCase.documents.length} Files
                                    </span>
                                </div>
                            </div>

                            <!-- Notices Generated History List -->
                            <div class="flex flex-col gap-2">
                                <span class="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Dispatched Notices History</span>
                                <div class="flex flex-col gap-2">
                                    ${activeCase.noticesSent.map(n => {
                                        return `
                                            <div class="p-2.5 bg-slate-950/20 border border-slate-900 rounded-xl flex items-center justify-between">
                                                <span class="text-xs font-semibold text-slate-300">${n}</span>
                                                <span class="px-2 py-0.5 rounded text-[8px] font-bold bg-slate-900 text-green-400 border border-green-900/30">Delivered</span>
                                            </div>
                                        `;
                                    }).join("")}
                                </div>
                            </div>

                            <!-- Document Notice Generator Drawer Trigger -->
                            <div class="flex justify-end border-t border-slate-900 pt-3">
                                <button id="btn-open-notice-generator" class="px-4 py-2 bg-brand-gradient hover:from-red-800 hover:to-red-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-all">
                                    <i data-lucide="file-plus-2" class="w-4 h-4 text-cyan-400"></i>
                                    Auto-Generate Legal Notice
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <!-- Print Notice Preview Modal Overlay -->
            <div id="notice-modal" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 hidden select-none animate-fade-in">
                <div class="w-full max-w-2xl bg-white text-slate-900 rounded-3xl p-8 shadow-2xl flex flex-col justify-between max-h-[90vh]">
                    
                    <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                        <h4 class="text-sm font-bold text-slate-800 uppercase tracking-wider">Legal Document Notice Generator</h4>
                        <button id="btn-close-notice-modal" class="text-slate-400 hover:text-slate-900 transition-colors">
                            <i data-lucide="x" class="w-5 h-5"></i>
                        </button>
                    </div>

                    <!-- Notice Document Text body (Simulates a physical document!) -->
                    <div class="flex-1 overflow-y-auto border border-slate-200 bg-slate-50 p-6 rounded-xl font-serif text-[11px] leading-relaxed shadow-inner pr-2 custom-scrollbar text-slate-800">
                        <div class="text-center font-bold text-sm tracking-wide border-b border-slate-300 pb-3 mb-4 uppercase">
                            IKONTEL RECOVERY CELL<br>
                            <span class="text-[10px] font-normal font-sans">NODA CENTER: BANDRA WEST, MUMBAI</span>
                        </div>

                        <p class="mb-4"><strong>Ref ID:</strong> ABC/SEC-138/WARN-${activeCase.caseId.substring(8)}<br><strong>Date:</strong> ${new Date().toISOString().split("T")[0]}</p>

                        <p class="mb-4">To,<br><strong>Mr. ${activeCase.customerName.toUpperCase()}</strong><br>Registered Debtor Address,<br>Mumbai Area Region</p>

                        <p class="mb-4 text-justify font-bold"><strong>SUBJECT: FINAL STATUTORY LEGAL WARNING REGARDING UNPAID LENDING ARREARS</strong></p>

                        <p class="mb-4 text-justify">Under instruction from our client, IKONTEL, you are hereby given statutory notice that your Account Number: <strong>${activeCase.loanId}</strong> remains under material default with outstanding arrears of <strong>₹${activeCase.amountOverdue.toLocaleString()}</strong>.</p>

                        <p class="mb-4 text-justify">Despite multiple alerts via SMS, WhatsApp, and AI Voice Assistant channels, you have consistently failed to cure the delinquency. Therefore, you are hereby required to settle the complete default within <strong>7 Days</strong> from receipt of this notice, failing which our counsel <strong>${activeCase.lawyerName}</strong> will initiate statutory recovery proceedings under Section 138 of Negotiable Instruments Act or Civil Arbitration in Mumbai Jurisdiction.</p>

                        <div class="mt-8 flex justify-between">
                            <div>
                                <p class="font-sans text-[10px]">Issued by,</p>
                                <div class="w-24 border-b border-slate-400 mt-8 mb-1"></div>
                                <p class="font-bold font-sans text-[10px]">Legal Recovery Board</p>
                            </div>
                            <div class="text-right">
                                <p class="font-sans text-[10px]">Counsel Assigned,</p>
                                <p class="font-bold font-sans text-[10px] mt-8">${activeCase.lawyerName}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex gap-2 justify-end border-t border-slate-200 pt-4 mt-4">
                        <button id="btn-print-notice" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-700 rounded-xl transition-all flex items-center gap-1">
                            <i data-lucide="printer" class="w-4 h-4"></i>
                            Download PDF Notice
                        </button>
                        <button id="btn-dispatch-notice" class="px-4 py-2 bg-red-800 hover:bg-red-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all">
                            Dispatch via Speed Post & Email
                        </button>
                    </div>

                </div>
            </div>
        `;

        lucide.createIcons();
        this.setupEvents(mockStore);
    },

    setupEvents(mockStore) {
        const container = document.getElementById("main-content-pane");
        const modal = document.getElementById("notice-modal");
        
        const btnOpen = document.getElementById("btn-open-notice-generator");
        const btnClose = document.getElementById("btn-close-notice-modal");
        
        const btnPrint = document.getElementById("btn-print-notice");
        const btnDispatch = document.getElementById("btn-dispatch-notice");

        // Select Case
        const caseRows = document.querySelectorAll("[data-case-item-id]");
        caseRows.forEach(row => {
            row.addEventListener("click", () => {
                const caseId = row.dataset.caseItemId;
                mockStore.update(s => {
                    s.activeCaseId = caseId;
                });
                this.render(container, mockStore);
            });
        });

        // Open Notice Preview Modal
        if (btnOpen) {
            btnOpen.addEventListener("click", () => {
                modal.classList.remove("hidden");
                lucide.createIcons();
            });
        }

        const closeModal = () => {
            modal.classList.add("hidden");
        };

        if (btnClose) btnClose.addEventListener("click", closeModal);

        if (btnPrint) {
            btnPrint.addEventListener("click", () => {
                alert("PRINTING DOCUMENT: Generating local PDF draft. Check browser print prompts.");
            });
        }

        if (btnDispatch) {
            btnDispatch.addEventListener("click", () => {
                const caseId = mockStore.getState().activeCaseId;
                mockStore.addLegalNotice(caseId, "Statutory Notice Sec-138 Dispatched");
                
                alert("SUCCESS: Notice dispatch logged. Registered tracking number: ABC-SPEED-POST-99211.");
                closeModal();
                this.render(container, mockStore);

                const e = new CustomEvent("storeUpdated");
                window.dispatchEvent(e);
            });
        }
    }
};
