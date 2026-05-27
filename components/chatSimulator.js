// Floating Chat & Voice Bot Interactive Simulator Drawer Component

export const ChatSimulator = {
    render() {
        return `
            <div id="simulator-drawer" class="fixed right-0 top-0 h-screen w-full max-w-[420px] sm:w-[420px] bg-slate-950 border-l border-slate-800 shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col justify-between select-none">
                
                <!-- Drawer Header -->
                <div class="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
                    <div class="flex items-center gap-2">
                        <div class="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></div>
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider">AI Communication Lab</h3>
                    </div>
                    <button id="btn-close-sim" class="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors">
                        <i data-lucide="x" class="w-4 h-4"></i>
                    </button>
                </div>

                <!-- Simulator Tabs -->
                <div class="flex border-b border-slate-900 bg-slate-950/80">
                    <button id="sim-tab-whatsapp" class="flex-1 py-3 text-xs font-bold uppercase tracking-wider text-cyan-500 border-b-2 border-cyan-500 flex items-center justify-center gap-2">
                        <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
                        WhatsApp Bot
                    </button>
                    <button id="sim-tab-voice" class="flex-1 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 border-b-2 border-transparent hover:text-white hover:bg-slate-900/20 flex items-center justify-center gap-2">
                        <i data-lucide="phone-call" class="w-3.5 h-3.5"></i>
                        AI Voice Bot
                    </button>
                </div>

                <!-- Simulator Screens -->
                <div class="flex-1 overflow-y-auto p-4 flex flex-col justify-between">
                    
                    <!-- WHATSAPP SIMULATOR SCREEN -->
                    <div id="sim-screen-whatsapp" class="flex-1 flex flex-col h-full justify-between">
                        <!-- Chat Window -->
                        <div class="flex-1 bg-slate-900/40 border border-slate-800/80 rounded-xl p-3 mb-4 overflow-y-auto max-h-[460px] flex flex-col gap-3 custom-scrollbar" id="whatsapp-message-box">
                            <div class="text-[10px] text-slate-500 text-center font-bold uppercase tracking-widest my-2">IKONTEL AI Assistant Chat</div>
                            
                            <!-- Messages -->
                            <div class="flex flex-col gap-2">
                                <div class="bg-slate-800 text-slate-200 text-xs px-3 py-2 rounded-lg rounded-tl-none max-w-[85%] self-start border border-slate-700/30">
                                    Hello! I am your IKONTEL digital assistant. How can I help you today?
                                </div>
                            </div>
                        </div>

                        <!-- Chat Quick Options -->
                        <div class="border-t border-slate-900 pt-3">
                            <p class="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Select Response Option:</p>
                            <div class="flex flex-wrap gap-1.5 mb-2" id="whatsapp-quick-prompts">
                                <button class="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-[10px] font-bold text-slate-300 transition-colors" data-msg="I want to apply for a Personal Loan">
                                    💰 Apply Loan
                                </button>
                                <button class="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-[10px] font-bold text-slate-300 transition-colors" data-msg="Upload my KYC Documents">
                                    📁 Upload KYC
                                </button>
                                <button class="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-[10px] font-bold text-slate-300 transition-colors" data-msg="Can I get my latest EMI Statement?">
                                    📋 EMI Statement
                                </button>
                                <button class="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-[10px] font-bold text-slate-300 transition-colors" data-msg="How can I access my Loan details online?">
                                    🏠 Account Portal
                                </button>
                                <button class="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-[10px] font-bold text-slate-300 transition-colors" data-msg="Can I download my Tax Interest Certificate & Rates?">
                                    ⚡ Digital Service
                                </button>
                                <button class="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-[10px] font-bold text-slate-300 transition-colors" data-msg="What is the process for my upcoming Loan Closure & Top-up?">
                                    🎓 Closure & Top-up
                                </button>
                                <button class="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-[10px] font-bold text-slate-300 transition-colors" data-msg="Connect me to a Customer Agent">
                                    📞 Human Agent
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- VOICE BOT IVR SIMULATOR SCREEN -->
                    <div id="sim-screen-voice" class="hidden flex-1 flex flex-col justify-between">
                        <!-- Dialer Setup -->
                        <div id="voice-setup-panel" class="flex flex-col gap-4">
                            <label class="text-xs font-bold text-slate-400 uppercase tracking-wider block">Select Customer to Call:</label>
                            <select id="voice-lead-selector" class="w-full bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-cyan-400 p-2.5">
                                <option value="Aarav Sharma">Aarav Sharma (Personal Loan Lead - Interested)</option>
                                <option value="Priyanka Patel">Priyanka Patel (Business Loan Lead - Pending Documents)</option>
                                <option value="Amit Deshmukh">Amit Deshmukh (Collection Account DPD 45 - High Risk)</option>
                            </select>

                            <button id="btn-start-voice-call" class="w-full py-3 rounded-xl bg-brand-gradient hover:from-indigo-800 hover:to-indigo-950 border border-indigo-700/30 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-950/30 mt-2">
                                <i data-lucide="phone" class="w-4 h-4"></i>
                                Start AI Voice Bot Dialer
                            </button>
                        </div>

                        <!-- Active Call Screen (Hidden initially) -->
                        <div id="voice-active-panel" class="hidden flex-1 flex flex-col justify-between h-full">
                            <!-- Call Status Bar -->
                            <div class="glass-panel rounded-xl p-3 flex items-center justify-between border border-indigo-900/30">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-indigo-950 flex items-center justify-center border border-indigo-800 active-call-pulse">
                                        <i data-lucide="phone-forwarded" class="w-3.5 h-3.5 text-indigo-400"></i>
                                    </div>
                                    <div>
                                        <h4 id="voice-active-name" class="text-xs font-bold text-white">Aarav Sharma</h4>
                                        <p class="text-[9px] text-slate-500 uppercase tracking-wider font-bold">IKONTEL AI BOT #4092</p>
                                    </div>
                                </div>
                                <span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-green-950 text-green-400 border border-green-800">Connected</span>
                            </div>

                            <!-- Animated Wave visualizer -->
                            <div class="h-16 flex items-center justify-center gap-1.5 my-4">
                                <span class="w-1 bg-indigo-600 rounded-full h-8 animate-pulse"></span>
                                <span class="w-1 bg-teal-500 rounded-full h-12 animate-pulse" style="animation-delay: 0.2s"></span>
                                <span class="w-1 bg-indigo-600 rounded-full h-6 animate-pulse" style="animation-delay: 0.4s"></span>
                                <span class="w-1 bg-teal-500 rounded-full h-14 animate-pulse" style="animation-delay: 0.1s"></span>
                                <span class="w-1 bg-slate-700 rounded-full h-4 animate-pulse"></span>
                                <span class="w-1 bg-teal-500 rounded-full h-10 animate-pulse" style="animation-delay: 0.5s"></span>
                                <span class="w-1 bg-indigo-600 rounded-full h-7 animate-pulse" style="animation-delay: 0.3s"></span>
                            </div>

                            <!-- Live Sentiment & Intent Meters -->
                            <div class="grid grid-cols-2 gap-3 mb-4">
                                <div class="glass-panel p-2.5 rounded-lg border border-slate-900">
                                    <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold block mb-1">Intent Detected</span>
                                    <span id="voice-active-intent" class="text-xs font-bold text-teal-400 uppercase">Awaiting speech...</span>
                                </div>
                                <div class="glass-panel p-2.5 rounded-lg border border-slate-900">
                                    <span class="text-[9px] text-slate-500 uppercase tracking-wider font-semibold block mb-1">Sentiment Analysis</span>
                                    <span id="voice-active-sentiment" class="text-xs font-bold text-green-400 uppercase">Neutral</span>
                                </div>
                            </div>

                            <!-- Transcript Streaming Area -->
                            <div class="flex-1 bg-slate-900 border border-slate-800 rounded-lg p-3 overflow-y-auto max-h-[220px] font-mono text-[10px] leading-relaxed flex flex-col gap-2 custom-scrollbar" id="voice-transcript-box">
                                <div class="text-center text-slate-600 py-4">[Dialing sequence initiated...]</div>
                            </div>

                            <!-- Call Controls -->
                            <div class="flex gap-2 mt-4 pt-3 border-t border-slate-900">
                                <button id="btn-voice-escalate" class="flex-1 py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 hover:bg-teal-500 hover:text-slate-950 transition-all flex items-center justify-center gap-1.5">
                                    <i data-lucide="user-cog" class="w-3.5 h-3.5"></i>
                                    Agent Handoff
                                </button>
                                <button id="btn-end-voice-call" class="flex-1 py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors flex items-center justify-center gap-1.5">
                                    <i data-lucide="phone-off" class="w-3.5 h-3.5"></i>
                                    Disconnect
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                <!-- Footer Status Bar -->
                <div class="p-3 border-t border-slate-900 bg-slate-950 flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    <span>Active Gateway: IKON-SIP-VOIP</span>
                    <span class="flex items-center gap-1 text-green-500">
                        <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        Ready
                    </span>
                </div>

            </div>
        `;
    },

    setupEvents(mockStore) {
        const simDrawer = document.getElementById("simulator-drawer");
        const btnOpen = document.getElementById("btn-open-bot-sim");
        const btnClose = document.getElementById("btn-close-sim");
        
        const tabWhatsapp = document.getElementById("sim-tab-whatsapp");
        const tabVoice = document.getElementById("sim-tab-voice");
        
        const screenWhatsapp = document.getElementById("sim-screen-whatsapp");
        const screenVoice = document.getElementById("sim-screen-voice");
        
        // Open/Close
        btnOpen.addEventListener("click", () => {
            simDrawer.classList.remove("translate-x-full");
        });
        
        btnClose.addEventListener("click", () => {
            simDrawer.classList.add("translate-x-full");
        });

        // Tabs
        tabWhatsapp.addEventListener("click", () => {
            tabWhatsapp.className = "flex-1 py-3 text-xs font-bold uppercase tracking-wider text-cyan-500 border-b-2 border-cyan-500 flex items-center justify-center gap-2";
            tabVoice.className = "flex-1 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 border-b-2 border-transparent hover:text-white hover:bg-slate-900/20 flex items-center justify-center gap-2";
            screenWhatsapp.classList.remove("hidden");
            screenVoice.classList.add("hidden");
            lucide.createIcons();
        });

        tabVoice.addEventListener("click", () => {
            tabVoice.className = "flex-1 py-3 text-xs font-bold uppercase tracking-wider text-cyan-500 border-b-2 border-cyan-500 flex items-center justify-center gap-2";
            tabWhatsapp.className = "flex-1 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 border-b-2 border-transparent hover:text-white hover:bg-slate-900/20 flex items-center justify-center gap-2";
            screenVoice.classList.remove("hidden");
            screenWhatsapp.classList.add("hidden");
            lucide.createIcons();
        });

        // WhatsApp Chat Simulation Logic
        const chatBox = document.getElementById("whatsapp-message-box");
        const quickPrompts = document.getElementById("whatsapp-quick-prompts");

        quickPrompts.addEventListener("click", (e) => {
            const btn = e.target.closest("button");
            if (!btn) return;

            const userMsg = btn.dataset.msg;
            
            // Append User Message
            appendMessage("customer", userMsg);
            
            // Simulate Bot Response
            setTimeout(() => {
                let reply = "";
                if (userMsg.includes("apply")) {
                    reply = "Brilliant choice! Based on your profile, you have a pre-qualified limit of ₹10,000 to ₹10,00,000 at low interest. Please upload your identity documents to start verification.";
                } else if (userMsg.includes("Upload")) {
                    reply = "Excellent! Please click the 'Customer Onboarding' tab in your left navigation to access the high-speed OCR Document Scanner to scan PAN & Aadhaar.";
                } else if (userMsg.includes("EMI")) {
                    reply = "Certainly. Fetching active ledger... For Account LN-908821 (Aarav Sharma), your next EMI of ₹15,000 is due on 5th June 2026. Rest assured, you have set up auto-debit.";
                } else if (userMsg.includes("online") || userMsg.includes("details")) {
                    reply = "Hello! You can view your complete loan account details online at any time on the Aditya Birla Digital Customer Portal (portal.adityabirlacapital.com). I have sent your secure corporate login link to your registered mobile.";
                } else if (userMsg.includes("Tax") || userMsg.includes("Service")) {
                    reply = "Aditya Birla's secure self-service portal allows you to complete all regular tasks digitally. You can instantly download your Statement of Account, Interest Certificates for tax filings, and view applicable interest rates in under 1 minute without branch queues!";
                } else if (userMsg.includes("Closure") || userMsg.includes("Top-up")) {
                    reply = "Your loan is nearing closure with 1 EMI left. Once auto-debited, a digital No-Dues Certificate will be issued. Because of your excellent repayment track record, you are pre-qualified for an instant Top-Up Loan up to ₹5 Lakhs at a special rate of 9.5% p.a.! Type 'Apply Top-up' to proceed.";
                } else if (userMsg.includes("Agent")) {
                    reply = "Initiating human CRM agent escalation. Connecting you to Adv. Nanda or regional executive Rakesh Yadav. Please hold...";
                } else {
                    reply = "I've recorded your query. You can check all status logs and predictions directly in the 'AI Intelligence' tab.";
                }
                appendMessage("bot", reply);
            }, 1000);
        });

        function appendMessage(sender, text) {
            const msgDiv = document.createElement("div");
            if (sender === "customer") {
                msgDiv.className = "bg-red-950/40 text-slate-200 text-xs px-3 py-2 rounded-lg rounded-tr-none max-w-[85%] self-end border border-red-800/20";
            } else {
                msgDiv.className = "bg-slate-800 text-slate-200 text-xs px-3 py-2 rounded-lg rounded-tl-none max-w-[85%] self-start border border-slate-700/30 animate-fade-in";
            }
            msgDiv.textContent = text;
            chatBox.appendChild(msgDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        // Voice Bot Dialer Simulation Logic
        const btnStartCall = document.getElementById("btn-start-voice-call");
        const btnEndCall = document.getElementById("btn-end-voice-call");
        const setupPanel = document.getElementById("voice-setup-panel");
        const activePanel = document.getElementById("voice-active-panel");
        
        const activeName = document.getElementById("voice-active-name");
        const activeIntent = document.getElementById("voice-active-intent");
        const activeSentiment = document.getElementById("voice-active-sentiment");
        const transcriptBox = document.getElementById("voice-transcript-box");
        const leadSelector = document.getElementById("voice-lead-selector");
        
        const btnEscalate = document.getElementById("btn-voice-escalate");
        
        let callInterval = null;
        let callTimeout = null;

        btnStartCall.addEventListener("click", () => {
            const customer = leadSelector.value;
            activeName.textContent = customer;
            setupPanel.classList.add("hidden");
            activePanel.classList.remove("hidden");
            
            transcriptBox.innerHTML = "";
            activeIntent.textContent = "DIALING CUSTOMER...";
            activeSentiment.textContent = "AWAITING ANSWER";
            activeSentiment.className = "text-xs font-bold text-slate-400 uppercase";
            
            lucide.createIcons();
            
            // Choose script based on customer
            let script = [];
            if (customer.includes("Aarav")) {
                script = mockStore.getState().leads.find(l => l.name.includes("Aarav")).voiceLogs;
            } else if (customer.includes("Priyanka")) {
                script = mockStore.getState().leads.find(l => l.name.includes("Priyanka")).voiceLogs;
            } else {
                script = [
                    { speaker: "bot", text: "Hello, am I speaking with Amit Deshmukh?", time: "0" },
                    { speaker: "customer", text: "Yes, speaking. Who is this? I am in a meeting.", time: "4" },
                    { speaker: "bot", text: "I am calling from IKONTEL Recovery. I see that your EMI of ₹15,000 is overdue by 45 days. We want to help you settle this immediately to protect your credit score.", time: "8" },
                    { speaker: "customer", text: "I know, I know. I had a family medical emergency last month, so I was cash-strapped. It's not that I don't want to pay.", time: "16" },
                    { speaker: "bot", text: "I am very sorry to hear that, Amit. We can waive the late fee penalty if you agree to make a partial payment of ₹10,000 today. Would that work?", time: "25" },
                    { speaker: "customer", text: "Yes, if you waive the penalty, I can pay ₹10,000 through Google Pay right now.", time: "33" },
                    { speaker: "bot", text: "That is fantastic! I am generating your customized waive-link and sending it via WhatsApp immediately. Once paid, your account status will update to PTP Met.", time: "39" }
                ];
            }

            let index = 0;
            
            // Stream Dialog
            callInterval = setInterval(() => {
                if (index < script.length) {
                    const line = script[index];
                    
                    const lineDiv = document.createElement("div");
                    if (line.speaker === "bot") {
                        lineDiv.innerHTML = `<span class="text-cyan-400 font-bold">[AI BOT]:</span> ${line.text}`;
                    } else {
                        lineDiv.innerHTML = `<span class="text-red-400 font-bold">[CUSTOMER]:</span> ${line.text}`;
                    }
                    transcriptBox.appendChild(lineDiv);
                    transcriptBox.scrollTop = transcriptBox.scrollHeight;

                    // Update intent and sentiment metrics based on context clues
                    if (line.speaker === "customer") {
                        const txt = line.text.toLowerCase();
                        if (txt.includes("loan") || txt.includes("interested")) {
                            activeIntent.textContent = "INQUIRY / INTEREST";
                            activeSentiment.textContent = "POSITIVE";
                            activeSentiment.className = "text-xs font-bold text-green-400 uppercase";
                        } else if (txt.includes("meeting") || txt.includes("busy") || txt.includes("later")) {
                            activeIntent.textContent = "CALLBACK REQUEST";
                            activeSentiment.textContent = "NEUTRAL";
                            activeSentiment.className = "text-xs font-bold text-cyan-500 uppercase";
                        } else if (txt.includes("emergency") || txt.includes("late") || txt.includes("difficulty") || txt.includes("not pay")) {
                            activeIntent.textContent = "RECOVERY DISPUTE";
                            activeSentiment.textContent = "STRESSED";
                            activeSentiment.className = "text-xs font-bold text-red-500 uppercase";
                        } else if (txt.includes("pay") || txt.includes("google pay") || txt.includes("sure")) {
                            activeIntent.textContent = "PROMISE TO PAY";
                            activeSentiment.textContent = "COOPERATIVE";
                            activeSentiment.className = "text-xs font-bold text-green-400 uppercase";
                        }
                    } else {
                        activeIntent.textContent = "ENGAGING BORROWER";
                    }

                    index++;
                } else {
                    // Call Completed
                    clearInterval(callInterval);
                    activeIntent.textContent = "CALL COMPLETED";
                    
                    // Update main store if Amit Deshmukh paid
                    if (customer.includes("Amit")) {
                        mockStore.addPromiseToPay("AB-CL-1109", new Date().toISOString().split("T")[0], 10000);
                        // Trigger custom event or global rerender
                        const e = new CustomEvent("storeUpdated");
                        window.dispatchEvent(e);
                    }
                }
            }, 3000);

        });

        const resetCall = () => {
            clearInterval(callInterval);
            setupPanel.classList.remove("hidden");
            activePanel.classList.add("hidden");
            lucide.createIcons();
        };

        btnEndCall.addEventListener("click", resetCall);

        btnEscalate.addEventListener("click", () => {
            clearInterval(callInterval);
            activeIntent.textContent = "HUMAN AGENT ASSIGNED";
            activeSentiment.textContent = "ESCALATED";
            activeSentiment.className = "text-xs font-bold text-cyan-400 uppercase";
            
            const lineDiv = document.createElement("div");
            lineDiv.innerHTML = `<span class="text-blue-400 font-bold">[SYSTEM]:</span> AI Voice bot transferred call to Collector Supervisor Adv. Sen.`;
            transcriptBox.appendChild(lineDiv);
            transcriptBox.scrollTop = transcriptBox.scrollHeight;
        });

    }
};
