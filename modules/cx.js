// Module 9: Customer Experience (CX) Hub Module Component

export const CXModule = {
    render(container, mockStore) {
        const state = mockStore.getState();

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Page Title Header -->
                <div class="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">Customer Experience (CX) Dashboard</h2>
                        <p class="text-xs text-slate-500">Monitor Net Promoter Scores (NPS), Customer Satisfaction Index (CSAT), and launch loyalty retention marketing templates.</p>
                    </div>
                </div>

                <!-- CX KPI Cards -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center flex items-center justify-between">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Net Promoter Score (NPS)</span>
                            <span class="text-lg font-bold text-green-400">74 <span class="text-[10px] text-slate-500 font-normal">/100</span></span>
                        </div>
                        <i data-lucide="award" class="w-8 h-8 text-green-500/20"></i>
                    </div>

                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center flex items-center justify-between">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">CSAT Satisfaction</span>
                            <span class="text-lg font-bold text-cyan-400">89.4%</span>
                        </div>
                        <i data-lucide="smile" class="w-8 h-8 text-cyan-500/20"></i>
                    </div>

                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center flex items-center justify-between">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Customer Effort Score</span>
                            <span class="text-lg font-bold text-white">4.2 <span class="text-[10px] text-slate-500 font-normal">/5</span></span>
                        </div>
                        <i data-lucide="thumbs-up" class="w-8 h-8 text-slate-500/20"></i>
                    </div>

                    <div class="glass-panel p-4 rounded-xl border border-slate-900 text-center flex items-center justify-between">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Complaint Resolution</span>
                            <span class="text-lg font-bold text-green-400">2 hours <span class="text-[10px] text-slate-500 font-normal">AHT</span></span>
                        </div>
                        <i data-lucide="check-circle" class="w-8 h-8 text-green-500/20"></i>
                    </div>

                </div>

                <!-- Main Section: Loyality & Communications Dispatcher -->
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    
                    <!-- Loyality Campaign Broadcaster -->
                    <div class="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col gap-4">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2 flex items-center gap-2">
                            <i data-lucide="send" class="w-4 h-4 text-cyan-500 animate-pulse"></i>
                            Omnichannel Communications Hub
                        </h3>

                        <p class="text-xs text-slate-400">Target qualified loyal borrowers or pre-closed loan customers with Top-Up or pre-approved personal offers.</p>

                        <div class="flex flex-col gap-3">
                            <div>
                                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Select Offer Template</label>
                                <select id="cx-template-select" class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-200">
                                    <option value="Pre-approved Personal Loan Top-up">Pre-approved Personal Loan Top-up (Extra ₹2 Lakhs limit)</option>
                                    <option value="IKONTEL Welcome Onboarding Loyalty Pack">Newly Onboarded Welcome Communication & Onboarding Guide</option>
                                    <option value="Aditya Birla Periodic Offers & Benefits Blast">Aditya Birla Periodic Offers & Benefits Blast (Insurance, Gold, Mutual Funds)</option>
                                    <option value="Digital Modes Adoption Campaign">Digital Modes Adoption Campaign (Statements, Certificates & Rates via Self-Service Portal)</option>
                                    <option value="Loan Pre-Closure Advance Alert">Advance Loan Closure Notice & No-Dues Process Alert</option>
                                    <option value="Post-Closure Personal Loan Top-up Promo">Post-Closure Personal Loan Top-up Promo (Gold Member 9.5% p.a.)</option>
                                </select>
                            </div>

                            <div>
                                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Target Customer Audience Pool</label>
                                <select class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-200">
                                    <option>Top 10% CSAT Rating Borrowers</option>
                                    <option>Customers in Good Standing (Zero default record)</option>
                                    <option>Leads under Onboarding stage</option>
                                </select>
                            </div>

                            <button id="btn-broadcast-cx-offer" class="w-full py-2.5 rounded-xl bg-brand-gradient text-white font-bold text-xs uppercase tracking-wider transition-all mt-2">
                                Broadcast Offer Blast (WhatsApp/SMS)
                            </button>
                        </div>
                    </div>

                    <!-- Gen AI Inbound Call Centre Voice Bot Simulator -->
                    <div class="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col gap-4">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2 flex items-center gap-2">
                            <i data-lucide="bot" class="w-4 h-4 text-cyan-500 animate-pulse"></i>
                            Gen AI Inbound Call Centre Voice Bot
                        </h3>
                        
                        <p class="text-xs text-slate-400">Simulate incoming customer questions handled automatically by Gen AI inbound voice channels.</p>

                        <div class="grid grid-cols-2 gap-2 text-xs">
                            <button class="cx-query-btn p-3 text-left rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/30 text-white font-bold flex flex-col gap-1 transition-all" data-query="emi">
                                <span>📅 Overdue EMI Check</span>
                                <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">LN-908821 details</span>
                            </button>
                            <button class="cx-query-btn p-3 text-left rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/30 text-white font-bold flex flex-col gap-1 transition-all" data-query="rate">
                                <span>📈 Personal Loan Rates</span>
                                <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Standard inquiry</span>
                            </button>
                            <button class="cx-query-btn p-3 text-left rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/30 text-white font-bold flex flex-col gap-1 transition-all" data-query="digital">
                                <span>💻 Digital Self-Service Help</span>
                                <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Tax Statements/Certificates</span>
                            </button>
                            <button class="cx-query-btn p-3 text-left rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/30 text-white font-bold flex flex-col gap-1 transition-all" data-query="closure">
                                <span>🎓 Loan Closure & Top-up Support</span>
                                <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Final NOC & Top-up offer</span>
                            </button>
                        </div>

                        <!-- Dialogue results -->
                        <div class="bg-slate-950 border border-slate-900 rounded-xl p-3 max-h-[160px] overflow-y-auto font-mono text-[10px] leading-relaxed flex flex-col gap-2 custom-scrollbar" id="cx-simulator-log">
                            <div class="text-center text-slate-600 py-6">[Select support card above to trigger dialogue...]</div>
                        </div>
                    </div>

                </div>

            </div>
        `;

        lucide.createIcons();
        this.setupEvents(mockStore);
    },

    setupEvents(mockStore) {
        const btnBroadcast = document.getElementById("btn-broadcast-cx-offer");
        const selectOffer = document.getElementById("cx-template-select");
        
        if (btnBroadcast) {
            btnBroadcast.addEventListener("click", () => {
                const offer = selectOffer.value;
                alert(`SUCCESS: Loyalty Broadcast triggered successfully. Spooling 1200 automated templates for campaign: '${offer}'.`);
            });
        }

        // Support Simulation
        const queryBtns = document.querySelectorAll(".cx-query-btn");
        const logPane = document.getElementById("cx-simulator-log");

        queryBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const query = btn.dataset.query;
                logPane.innerHTML = "";
                
                let dialogue = [];
                if (query === "emi") {
                    dialogue = [
                        { s: "CUSTOMER", t: "Hi, I wanted to double-check my next EMI payment due date." },
                        { s: "AI BOT", t: "Of course! Let me pull your active account. For Loan LN-908821 (Aarav Sharma), your next EMI of ₹15,000 is due on 5th June 2026." },
                        { s: "CUSTOMER", t: "Perfect. Will it be auto-debited?" },
                        { s: "AI BOT", t: "Yes, you have successfully set up NACH auto-debit via HDFC Bank, which will trigger automatically on the due date. No manual payment required." }
                    ];
                } else if (query === "rate") {
                    dialogue = [
                        { s: "CUSTOMER", t: "Hi, what are the current interest rates on personal loans?" },
                        { s: "AI BOT", t: "Hi there! Our Personal Loan interest rates currently start from just 10.5% p.a. and can go up to 18% depending on your credit history and salary bracket." },
                        { s: "CUSTOMER", t: "Can I do a digital KYC to check my customized limit?" },
                        { s: "AI BOT", t: "Absolutely! I can text a secure verification link to your WhatsApp right now. You just need to upload your PAN and Aadhaar for instant limit pre-approval." }
                    ];
                } else if (query === "digital") {
                    dialogue = [
                        { s: "CUSTOMER", t: "Hi, I need to download my loan interest certificate for tax filing. Do I need to visit a branch?" },
                        { s: "AI BOT", t: "Hello! No branch visit is required. You can instantly download Interest Certificates, Statements of Account, and check rates 24/7 on our online self-service portal." },
                        { s: "CUSTOMER", t: "Oh, that's incredibly simple! Can you send me the direct link?" },
                        { s: "AI BOT", t: "Done! I have texted the secure portal link (portal.adityabirlacapital.com) directly to your registered number. Skip the queues!" }
                    ];
                } else if (query === "closure") {
                    dialogue = [
                        { s: "CUSTOMER", t: "Hello, my loan is ending next month. What is the process for loan closure and getting my NOC?" },
                        { s: "AI BOT", t: "Congratulations on nearing your loan closure! Once your final scheduled EMI auto-debit is successfully processed, your digital No-Dues Certificate will be generated automatically in 3 working days." },
                        { s: "CUSTOMER", t: "Great! Can I get a top-up loan once this closes?" },
                        { s: "AI BOT", t: "Absolutely! Because of your excellent payment track record, you are pre-qualified for a gold-status Pre-Approved Top-Up Loan up to ₹5 Lakhs at a special rate of 9.5% p.a. I can dispatch the activation link right now!" }
                    ];
                }

                let idx = 0;
                const interval = setInterval(() => {
                    if (idx < dialogue.length) {
                        const line = dialogue[idx];
                        const div = document.createElement("div");
                        div.innerHTML = `<span class="${line.s === 'AI BOT' ? 'text-cyan-500' : 'text-red-400'} font-bold">[${line.s}]:</span> ${line.t}`;
                        logPane.appendChild(div);
                        logPane.scrollTop = logPane.scrollHeight;
                        idx++;
                    } else {
                        clearInterval(interval);
                    }
                }, 2000);
            });
        });
    }
};
