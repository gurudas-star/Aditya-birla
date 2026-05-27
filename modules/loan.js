// Module 6: Loan Management & Interactive EMI Calculator Module Component

export const LoanModule = {
    render(container, mockStore) {
        const state = mockStore.getState();

        // Calculate pipeline summaries
        const approvedSum = state.leads.filter(l => ["Verified", "Disbursed"].includes(l.status)).length;
        const pendingSum = state.leads.filter(l => ["Documents Pending", "Contacted"].includes(l.status)).length;

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Header -->
                <div class="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">Loan Management</h2>
                        <p class="text-xs text-slate-500">Manage loan underwriting pipelines, calculate complex interest amortization tables, and disburse capital.</p>
                    </div>
                </div>

                <!-- Main Layout Grid -->
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    
                    <!-- Left: Interactive Amortization EMI Calculator -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-5 border border-slate-800/80">
                        <div class="border-b border-slate-900 pb-2">
                            <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                <i data-lucide="calculator" class="w-4 h-4 text-cyan-500"></i>
                                Real-Time Amortization Calculator
                            </h3>
                        </div>

                        <!-- principal slider -->
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-between text-xs font-bold text-slate-300">
                                <span>Requested Capital (Principal)</span>
                                <span class="text-cyan-400 font-mono" id="val-principal">₹10,00,000</span>
                            </div>
                            <input type="range" id="slider-principal" min="100000" max="5000000" step="50000" value="1000000" 
                                   class="w-full bg-slate-900 border border-slate-800 h-2 rounded-lg cursor-pointer accent-cyan-500">
                        </div>

                        <!-- tenure slider -->
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-between text-xs font-bold text-slate-300">
                                <span>Repayment Tenure (Months)</span>
                                <span class="text-cyan-400 font-mono" id="val-tenure">36 Months</span>
                            </div>
                            <input type="range" id="slider-tenure" min="12" max="120" step="6" value="36" 
                                   class="w-full bg-slate-900 border border-slate-800 h-2 rounded-lg cursor-pointer accent-cyan-500">
                        </div>

                        <!-- interest rate slider -->
                        <div class="flex flex-col gap-2">
                            <div class="flex justify-between text-xs font-bold text-slate-300">
                                <span>Annual Interest Rate (%)</span>
                                <span class="text-cyan-400 font-mono" id="val-interest">10.5% p.a.</span>
                            </div>
                            <input type="range" id="slider-interest" min="5" max="25" step="0.5" value="10.5" 
                                   class="w-full bg-slate-900 border border-slate-800 h-2 rounded-lg cursor-pointer accent-cyan-500">
                        </div>

                        <!-- Calculator Results Grid -->
                        <div class="grid grid-cols-3 gap-3 bg-slate-950/40 p-4 border border-slate-900 rounded-xl text-center mt-2">
                            <div>
                                <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Monthly EMI</span>
                                <span class="text-sm font-bold text-white tracking-tight font-mono" id="emi-monthly">₹32,502</span>
                            </div>
                            <div>
                                <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Interest Cost</span>
                                <span class="text-sm font-bold text-cyan-500 tracking-tight font-mono" id="emi-interest">₹1,70,088</span>
                            </div>
                            <div>
                                <span class="text-[9px] text-slate-500 uppercase font-bold block mb-1">Total Repayable</span>
                                <span class="text-sm font-bold text-green-400 tracking-tight font-mono" id="emi-total">₹11,70,088</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Active Underwriting Pipeline -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-4 max-h-[460px] overflow-hidden">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Active Credit Pipeline</h3>
                        
                        <div class="overflow-y-auto flex-1 custom-scrollbar">
                            <table class="w-full text-left text-xs text-slate-300 border-collapse">
                                <thead>
                                    <tr class="border-b border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
                                        <th class="py-2.5">Borrower</th>
                                        <th class="py-2.5">Doc Status</th>
                                        <th class="py-2.5">Income Verify</th>
                                        <th class="py-2.5">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${state.leads.map(lead => {
                                        const isKycOk = lead.kycDocs.panUploaded && lead.kycDocs.aadhaarUploaded;
                                        const isIncomeOk = lead.kycDocs.incomeUploaded;
                                        
                                        return `
                                            <tr class="border-b border-slate-900/50 hover:bg-slate-900/10">
                                                <td class="py-3 font-bold text-white">${lead.name}</td>
                                                <td class="py-3">
                                                    <span class="flex items-center gap-1.5 ${isKycOk ? 'text-green-400' : 'text-red-400'} font-bold">
                                                        <i data-lucide="${isKycOk ? 'check-circle' : 'alert-circle'}" class="w-3.5 h-3.5"></i>
                                                        ${isKycOk ? 'KYC Verified' : 'KYC Pending'}
                                                    </span>
                                                </td>
                                                <td class="py-3">
                                                    <span class="flex items-center gap-1.5 ${isIncomeOk ? 'text-green-400' : 'text-red-400'} font-bold">
                                                        <i data-lucide="${isIncomeOk ? 'check-circle' : 'alert-circle'}" class="w-3.5 h-3.5"></i>
                                                        ${isIncomeOk ? 'Income Extracted' : 'Awaiting slips'}
                                                    </span>
                                                </td>
                                                <td class="py-3">
                                                    ${lead.status === 'Disbursed' ? `
                                                        <span class="text-slate-500 font-bold text-[10px] uppercase">Disbursed</span>
                                                    ` : `
                                                        <button class="btn-disburse-lead px-2.5 py-1 rounded bg-green-600 hover:bg-green-700 text-white font-bold text-[10px] uppercase transition-colors" data-lead-disburse-id="${lead.id}">
                                                            Disburse
                                                        </button>
                                                    `}
                                                </td>
                                            </tr>
                                        `;
                                    }).join("")}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        `;

        lucide.createIcons();
        this.setupEvents(mockStore);
    },

    setupEvents(mockStore) {
        const sliderPrincipal = document.getElementById("slider-principal");
        const sliderTenure = document.getElementById("slider-tenure");
        const sliderInterest = document.getElementById("slider-interest");

        const valPrincipal = document.getElementById("val-principal");
        const valTenure = document.getElementById("val-tenure");
        const valInterest = document.getElementById("val-interest");

        const emiMonthly = document.getElementById("emi-monthly");
        const emiInterest = document.getElementById("emi-interest");
        const emiTotal = document.getElementById("emi-total");

        const container = document.getElementById("main-content-pane");

        // EMI Computation Math
        const calculateEMI = () => {
            const P = parseFloat(sliderPrincipal.value);
            const N = parseFloat(sliderTenure.value);
            const R = parseFloat(sliderInterest.value) / 12 / 100; // Monthly rate

            // EMI = [P x R x (1+R)^N]/[((1+R)^N)-1]
            const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
            const totalRepayment = emi * N;
            const totalInterest = totalRepayment - P;

            valPrincipal.textContent = `₹${P.toLocaleString()}`;
            valTenure.textContent = `${N} Months`;
            valInterest.textContent = `${sliderInterest.value}% p.a.`;

            emiMonthly.textContent = `₹${Math.round(emi).toLocaleString()}`;
            emiInterest.textContent = `₹${Math.round(totalInterest).toLocaleString()}`;
            emiTotal.textContent = `₹${Math.round(totalRepayment).toLocaleString()}`;
        };

        if (sliderPrincipal) {
            sliderPrincipal.addEventListener("input", calculateEMI);
            sliderTenure.addEventListener("input", calculateEMI);
            sliderInterest.addEventListener("input", calculateEMI);
        }

        // Action: Disburse Lead Funds
        const btnsDisburse = document.querySelectorAll("[data-lead-disburse-id]");
        btnsDisburse.forEach(btn => {
            btn.addEventListener("click", () => {
                const leadId = btn.dataset.leadDisburseId;
                const lead = mockStore.getState().leads.find(l => l.id === leadId);

                // Check KYC and income documents
                if (!lead.kycDocs.panUploaded || !lead.kycDocs.aadhaarUploaded || !lead.kycDocs.incomeUploaded) {
                    alert("WARNING: Cannot disburse funds! Borrower has incomplete digital KYC documents.");
                    return;
                }

                mockStore.updateLeadStatus(leadId, "Disbursed");
                alert(`SUCCESS: Loan ₹${lead.amount.toLocaleString()} disbursed to ${lead.name}'s verified bank account!`);
                this.render(container, mockStore);

                const e = new CustomEvent("storeUpdated");
                window.dispatchEvent(e);
            });
        });
    }
};
