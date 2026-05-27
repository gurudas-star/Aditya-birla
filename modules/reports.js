// Module 11: Reports & Operations Analytics Module Component

export const ReportsModule = {
    render(container, mockStore) {
        const state = mockStore.getState();

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Page Title Header -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">Reports & Analytics</h2>
                        <p class="text-xs text-slate-500">Query and compile regulatory compliance files, campaign performance reports, and financial audit ledgers.</p>
                    </div>

                    <button id="btn-export-reports" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-1.5 transition-all">
                        <i data-lucide="download" class="w-4 h-4"></i>
                        Export to Excel / CSV
                    </button>
                </div>

                <!-- Query Filters -->
                <div class="glass-panel p-4 rounded-xl border border-slate-900 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label class="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Select Module Report</label>
                        <select class="w-full bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-cyan-400 p-2 focus:outline-none">
                            <option>Lead Acquisition Funnel Audit</option>
                            <option>Collections & Recovery Logs</option>
                            <option>AI Dialer Call Dispositions</option>
                            <option>Aadhaar / PAN KYC OCR Verification Audit</option>
                        </select>
                    </div>

                    <div>
                        <label class="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Audit Time Range</label>
                        <select class="w-full bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-cyan-400 p-2 focus:outline-none">
                            <option>Past 30 Days (Current Month)</option>
                            <option>Past 6 Months (FY Q1-Q2)</option>
                            <option>Past 12 Months (FY Cumulative)</option>
                        </select>
                    </div>

                    <div>
                        <label class="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Region Allocation</label>
                        <select class="w-full bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-cyan-400 p-2 focus:outline-none">
                            <option>All Regions (National Scale)</option>
                            <option>Mumbai East/West Zone</option>
                            <option>Delhi NCR Node</option>
                        </select>
                    </div>

                    <div class="flex items-end">
                        <button class="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-white transition-colors">
                            Run Query Filter
                        </button>
                    </div>
                </div>

                <!-- Comprehensive Data Grid Table -->
                <div class="glass-panel rounded-2xl p-5 flex flex-col gap-3">
                    <div class="flex justify-between items-center border-b border-slate-900 pb-2 mb-2">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider">Acquisition Funnel Transaction ledger</h3>
                        <span class="text-[10px] text-slate-500 font-bold font-mono">1,824 Entries Resolved</span>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs text-slate-300 border-collapse">
                            <thead>
                                <tr class="border-b border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
                                    <th class="py-2.5">Borrower Index</th>
                                    <th class="py-2.5">Capital Amount</th>
                                    <th class="py-2.5">Product Type</th>
                                    <th class="py-2.5">KYC OCR Check</th>
                                    <th class="py-2.5">Call Disposition</th>
                                    <th class="py-2.5">Audit Stage</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${state.leads.map(l => {
                                    const isKycOk = l.kycDocs.panUploaded && l.kycDocs.aadhaarUploaded;
                                    return `
                                        <tr class="border-b border-slate-900/50 hover:bg-slate-900/10">
                                            <td class="py-3 font-bold text-white">${l.name}</td>
                                            <td class="py-3 font-bold font-mono text-slate-200">₹${l.amount.toLocaleString()}</td>
                                            <td class="py-3 text-slate-400 font-medium">${l.product}</td>
                                            <td class="py-3">
                                                <span class="px-2 py-0.5 rounded text-[9px] font-bold ${isKycOk ? 'bg-green-950 text-green-400 border border-green-800/30' : 'bg-red-950 text-red-400 border border-red-800/30'}">
                                                    ${isKycOk ? 'OCR APPROVED' : 'KYC MISSING'}
                                                </span>
                                            </td>
                                            <td class="py-3 font-mono text-[10px] text-slate-400">${l.bestChannel} Dialer Success</td>
                                            <td class="py-3"><span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-900 text-cyan-400 border border-slate-800">${l.status}</span></td>
                                        </tr>
                                    `;
                                }).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        `;

        lucide.createIcons();
        this.setupEvents(mockStore);
    },

    setupEvents(mockStore) {
        const btnExport = document.getElementById("btn-export-reports");
        if (btnExport) {
            btnExport.addEventListener("click", () => {
                alert("EXPORT SUCCESS: Compiling CSV. Check browser downloads container.");
            });
        }
    }
};
