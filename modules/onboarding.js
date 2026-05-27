// Module 5: Customer Onboarding & Digital KYC OCR Module Component

export const OnboardingModule = {
    render(container, mockStore) {
        const state = mockStore.getState();
        const activeLead = state.leads.find(l => l.id === state.activeLeadId) || state.leads[0];

        // Gather counts
        const approvedKyc = state.leads.filter(l => l.kycStatus === "Approved").length;
        const pendingKyc = state.leads.filter(l => l.kycStatus === "Pending Verification").length;
        const notStartedKyc = state.leads.filter(l => l.kycStatus === "Not Started").length;

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Header -->
                <div class="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">Customer Onboarding</h2>
                        <p class="text-xs text-slate-500">Perform digital KYC checks, parse documents using AI OCR scanning beams, and monitor onboarding logs.</p>
                    </div>
                </div>

                <!-- KYC Status Stats -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Approved KYC Files</span>
                        <span class="text-lg font-bold text-green-400">${approvedKyc} Customers</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Pending AI Verification</span>
                        <span class="text-lg font-bold text-cyan-400">${pendingKyc} Files</span>
                    </div>
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center">
                        <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">KYC Not Started</span>
                        <span class="text-lg font-bold text-slate-400">${notStartedKyc} Leads</span>
                    </div>
                </div>

                <!-- Main Layout -->
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    
                    <!-- Left: Onboarding list & Document Selector (Span 1) -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-4 max-h-[260px] xl:max-h-[580px] overflow-hidden">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Borrower KYC Pipeline</h3>
                        
                        <div class="overflow-y-auto flex-1 custom-scrollbar pr-1 flex flex-col gap-3">
                            ${state.leads.map(lead => {
                                const isSelected = lead.id === activeLead.id;
                                const activeClass = isSelected ? "bg-slate-900 border-cyan-500/40" : "bg-slate-900/20 border-slate-900 hover:border-slate-800";
                                
                                let badgeColor = "text-slate-500 bg-slate-900";
                                if (lead.kycStatus === "Approved") badgeColor = "text-green-400 bg-green-950/40 border border-green-800/30";
                                else if (lead.kycStatus === "Pending Verification") badgeColor = "text-cyan-400 bg-cyan-950/40 border border-cyan-800/30";

                                return `
                                    <div class="p-3.5 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${activeClass}" data-lead-kyc-id="${lead.id}">
                                        <div>
                                            <h4 class="text-xs font-bold text-white">${lead.name}</h4>
                                            <span class="text-[9px] text-slate-500 font-bold uppercase tracking-wider">${lead.product}</span>
                                        </div>
                                        <span class="px-2 py-0.5 rounded text-[9px] font-bold ${badgeColor}">${lead.kycStatus}</span>
                                    </div>
                                `;
                            }).join("")}
                        </div>
                    </div>

                    <!-- Right: OCR Scan Arena (Span 2) -->
                    <div class="xl:col-span-2 flex flex-col gap-6">
                        
                        <!-- Document Portal -->
                        <div class="glass-panel rounded-2xl p-5 border border-slate-800/80 flex flex-col gap-4">
                            <div class="flex justify-between items-center border-b border-slate-900 pb-2">
                                <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                    <i data-lucide="scan" class="w-4 h-4 text-cyan-500 animate-pulse"></i>
                                    Interactive AI OCR Scanner
                                </h3>
                                <span class="text-xs text-slate-400 font-bold">Files for: <span class="text-cyan-400">${activeLead.name}</span></span>
                            </div>

                            <p class="text-xs text-slate-400 leading-relaxed">Simulate automated Aadhaar and PAN extraction scans. Click "Run scan" below to trigger scanner beam and extract metadata fields.</p>

                            <!-- Document Upload Checklist Grid -->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
                                <!-- Doc 1 -->
                                <div class="glass-panel p-3.5 rounded-xl border border-slate-900/80 flex flex-col gap-2 relative">
                                    <div class="flex justify-between items-center">
                                        <span class="text-[10px] font-bold text-slate-300">PAN Card</span>
                                        <i data-lucide="${activeLead.kycDocs.panUploaded ? 'check-circle' : 'circle-dashed'}" class="w-4 h-4 ${activeLead.kycDocs.panUploaded ? 'text-green-500' : 'text-slate-600'}"></i>
                                    </div>
                                    <button id="btn-scan-pan" class="mt-2 py-1.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-cyan-400 hover:bg-cyan-500/10 transition-colors uppercase tracking-wider flex items-center justify-center gap-1">
                                        <i data-lucide="bolt" class="w-3 h-3"></i>
                                        ${activeLead.kycDocs.panUploaded ? 'Rescan PAN' : 'Scan PAN'}
                                    </button>
                                </div>

                                <!-- Doc 2 -->
                                <div class="glass-panel p-3.5 rounded-xl border border-slate-900/80 flex flex-col gap-2 relative">
                                    <div class="flex justify-between items-center">
                                        <span class="text-[10px] font-bold text-slate-300">Aadhaar Card</span>
                                        <i data-lucide="${activeLead.kycDocs.aadhaarUploaded ? 'check-circle' : 'circle-dashed'}" class="w-4 h-4 ${activeLead.kycDocs.aadhaarUploaded ? 'text-green-500' : 'text-slate-600'}"></i>
                                    </div>
                                    <button id="btn-scan-aadhaar" class="mt-2 py-1.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-cyan-400 hover:bg-cyan-500/10 transition-colors uppercase tracking-wider flex items-center justify-center gap-1">
                                        <i data-lucide="bolt" class="w-3 h-3"></i>
                                        ${activeLead.kycDocs.aadhaarUploaded ? 'Rescan UID' : 'Scan Aadhaar'}
                                    </button>
                                </div>

                                <!-- Doc 3 -->
                                <div class="glass-panel p-3.5 rounded-xl border border-slate-900/80 flex flex-col gap-2 relative">
                                    <div class="flex justify-between items-center">
                                        <span class="text-[10px] font-bold text-slate-300">Income Salary Slip</span>
                                        <i data-lucide="${activeLead.kycDocs.incomeUploaded ? 'check-circle' : 'circle-dashed'}" class="w-4 h-4 ${activeLead.kycDocs.incomeUploaded ? 'text-green-500' : 'text-slate-600'}"></i>
                                    </div>
                                    <button id="btn-scan-income" class="mt-2 py-1.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-cyan-400 hover:bg-cyan-500/10 transition-colors uppercase tracking-wider flex items-center justify-center gap-1">
                                        <i data-lucide="bolt" class="w-3 h-3"></i>
                                        ${activeLead.kycDocs.incomeUploaded ? 'Rescan Salary' : 'Scan Income'}
                                    </button>
                                </div>
                            </div>

                            <!-- Interactive Scanner Display Area -->
                            <div class="relative bg-slate-950 border border-slate-900 rounded-xl h-52 flex flex-col items-center justify-center overflow-hidden p-6" id="scanner-view-box">
                                <div class="scanner-line hidden" id="scan-bar"></div>
                                
                                <div class="text-center" id="scan-placeholder-content">
                                    <i data-lucide="file-text" class="w-10 h-10 text-slate-700 mx-auto mb-2 animate-bounce"></i>
                                    <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider">Awaiting Scan trigger</h4>
                                    <p class="text-[10px] text-slate-600 mt-1">Select a document card above to boot the AI OCR parser.</p>
                                </div>

                                <div class="w-full hidden flex-col gap-3 font-mono text-[10px] leading-relaxed text-slate-300" id="scan-loading-content">
                                    <div class="shimmer-bg h-4 rounded w-3/4"></div>
                                    <div class="shimmer-bg h-4 rounded w-1/2"></div>
                                    <div class="shimmer-bg h-4 rounded w-5/6"></div>
                                    <p class="text-center text-cyan-500 mt-2 font-bold animate-pulse">EXTRACTING METADATA DIALOGUES...</p>
                                </div>

                                <div class="w-full hidden flex-col gap-3" id="scan-success-content">
                                    <div class="flex items-center gap-2 border-b border-slate-900 pb-2 mb-1">
                                        <i data-lucide="shield-check" class="w-5 h-5 text-green-400"></i>
                                        <h4 class="text-xs font-bold text-white uppercase tracking-wider">AI OCR Extraction successful</h4>
                                    </div>
                                    <div class="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-300" id="ocr-results-pane">
                                        <!-- Filled via JS -->
                                    </div>
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
        const container = document.getElementById("main-content-pane");

        // Selecting different lead in onboarding directory
        const listCards = document.querySelectorAll("[data-lead-kyc-id]");
        listCards.forEach(card => {
            card.addEventListener("click", () => {
                const leadId = card.dataset.leadKycId;
                mockStore.update(s => {
                    s.activeLeadId = leadId;
                });
                this.render(container, mockStore);
            });
        });

        // OCR Actions
        const btnPan = document.getElementById("btn-scan-pan");
        const btnAadhaar = document.getElementById("btn-scan-aadhaar");
        const btnIncome = document.getElementById("btn-scan-income");

        const scanBar = document.getElementById("scan-bar");
        const boxPlaceholder = document.getElementById("scan-placeholder-content");
        const boxLoading = document.getElementById("scan-loading-content");
        const boxSuccess = document.getElementById("scan-success-content");
        const ocrResults = document.getElementById("ocr-results-pane");

        const runScan = (docType, resultsHtml) => {
            // Setup Visuals
            boxPlaceholder.classList.add("hidden");
            boxSuccess.classList.add("hidden");
            boxLoading.classList.remove("hidden");
            scanBar.classList.remove("hidden");
            
            lucide.createIcons();

            setTimeout(() => {
                // Done loading
                scanBar.classList.add("hidden");
                boxLoading.classList.add("hidden");
                boxSuccess.classList.remove("hidden");
                
                ocrResults.innerHTML = resultsHtml;
                lucide.createIcons();

                // Update state
                const activeLeadId = mockStore.getState().activeLeadId;
                mockStore.updateLeadKYCDoc(activeLeadId, docType, true);

                // Rerender dashboard sidebar indicator/alerts list (Custom triggers)
                const e = new CustomEvent("storeUpdated");
                window.dispatchEvent(e);

            }, 2500);
        };

        if (btnPan) {
            btnPan.addEventListener("click", () => {
                const activeLead = mockStore.getState().leads.find(l => l.id === mockStore.getState().activeLeadId);
                const html = `
                    <div><span class="text-slate-500 font-bold uppercase">Document:</span> Permanent Account Number (PAN)</div>
                    <div><span class="text-slate-500 font-bold uppercase">PAN Identifier:</span> ${activeLead.pan || 'ABCDE1234F'}</div>
                    <div><span class="text-slate-500 font-bold uppercase">Holder Name:</span> ${activeLead.name.toUpperCase()}</div>
                    <div><span class="text-slate-500 font-bold uppercase">Status Check:</span> <span class="text-green-400 font-bold">VALID / VERIFIED</span></div>
                `;
                runScan("panUploaded", html);
            });
        }

        if (btnAadhaar) {
            btnAadhaar.addEventListener("click", () => {
                const activeLead = mockStore.getState().leads.find(l => l.id === mockStore.getState().activeLeadId);
                const html = `
                    <div><span class="text-slate-500 font-bold uppercase">Document:</span> Aadhaar Card (UIDAI)</div>
                    <div><span class="text-slate-500 font-bold uppercase">UID Identifier:</span> ${activeLead.aadhaar || '1234 5678 9012'}</div>
                    <div><span class="text-slate-500 font-bold uppercase">Name Matched:</span> ${activeLead.name.toUpperCase()} (100% Match)</div>
                    <div><span class="text-slate-500 font-bold uppercase">Biometric Match:</span> <span class="text-green-400 font-bold">PASS (98%)</span></div>
                `;
                runScan("aadhaarUploaded", html);
            });
        }

        if (btnIncome) {
            btnIncome.addEventListener("click", () => {
                const activeLead = mockStore.getState().leads.find(l => l.id === mockStore.getState().activeLeadId);
                const html = `
                    <div><span class="text-slate-500 font-bold uppercase">Document:</span> HDFC Bank Past 6mo Amortized Statement</div>
                    <div><span class="text-slate-500 font-bold uppercase">Salary Extracted:</span> ₹${(activeLead.income || 120000).toLocaleString()}/mo</div>
                    <div><span class="text-slate-500 font-bold uppercase">Average Balance:</span> ₹${((activeLead.income || 120000) * 1.5).toLocaleString()}</div>
                    <div><span class="text-slate-500 font-bold uppercase">Income Status:</span> <span class="text-green-400 font-bold">APPROVED / CAPACITY CONFIRMED</span></div>
                `;
                runScan("incomeUploaded", html);
            });
        }
    }
};
