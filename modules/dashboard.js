// Module 2: Main Executive Dashboard Module Component

export const DashboardModule = {
    render(container, mockStore) {
        const state = mockStore.getState();

        // Calculate aggregate dynamic figures
        const totalLeadsCount = state.leads.length * 5200; // Multiplied for scale
        const interestedLeadsCount = Math.floor(totalLeadsCount * 0.328);
        const approvedCount = Math.floor(interestedLeadsCount * 0.42);
        const totalDueVal = state.collections.reduce((sum, item) => sum + item.totalDue, 0);
        const collectedVal = state.collections.reduce((sum, item) => sum + item.collectedToday, 0);
        const totalCollectedScaled = collectedVal * 12 + 1240000;

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Welcome Title Header -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide flex items-center gap-2">
                            Executive Dashboard 
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 uppercase tracking-widest">
                                Live Command Center
                            </span>
                        </h2>
                        <p class="text-xs text-slate-500">Real-time lending lifecycle, collections, and AI Voice Bot performance diagnostics.</p>
                    </div>
                    
                    <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
                        <i data-lucide="clock" class="w-4 h-4 text-cyan-500"></i>
                        <span>System Last Synced: </span>
                        <span id="sync-timestamp" class="text-white">Just now</span>
                    </div>
                </div>

                <!-- TOP KPI CARDS (8 Widgets) -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    <!-- Card 1 -->
                    <div class="glass-panel glass-panel-hover p-4 rounded-2xl flex items-center justify-between">
                        <div>
                            <span class="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Total Pool Leads</span>
                            <span class="text-xl font-bold text-white tracking-tight">${totalLeadsCount.toLocaleString()}</span>
                            <span class="text-[10px] text-green-500 font-bold flex items-center mt-1.5">
                                <i data-lucide="arrow-up-right" class="w-3 h-3 mr-0.5"></i>
                                +14.2% <span class="text-slate-500 font-normal ml-1">MoM</span>
                            </span>
                        </div>
                        <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 text-cyan-500">
                            <i data-lucide="database" class="w-5 h-5"></i>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="glass-panel glass-panel-hover p-4 rounded-2xl flex items-center justify-between">
                        <div>
                            <span class="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Interested Leads</span>
                            <span class="text-xl font-bold text-white tracking-tight">${interestedLeadsCount.toLocaleString()}</span>
                            <span class="text-[10px] text-green-500 font-bold flex items-center mt-1.5">
                                <i data-lucide="arrow-up-right" class="w-3 h-3 mr-0.5"></i>
                                +8.9% <span class="text-slate-500 font-normal ml-1">vs target</span>
                            </span>
                        </div>
                        <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 text-cyan-500">
                            <i data-lucide="sparkles" class="w-5 h-5"></i>
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div class="glass-panel glass-panel-hover p-4 rounded-2xl flex items-center justify-between">
                        <div>
                            <span class="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Loan Applications</span>
                            <span class="text-xl font-bold text-white tracking-tight">${(approvedCount + 1200).toLocaleString()}</span>
                            <span class="text-[10px] text-cyan-500 font-bold flex items-center mt-1.5">
                                <i data-lucide="activity" class="w-3 h-3 mr-0.5"></i>
                                78.4% <span class="text-slate-500 font-normal ml-1">Conversion</span>
                            </span>
                        </div>
                        <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 text-cyan-500">
                            <i data-lucide="clipboard-list" class="w-5 h-5"></i>
                        </div>
                    </div>

                    <!-- Card 4 -->
                    <div class="glass-panel glass-panel-hover p-4 rounded-2xl flex items-center justify-between">
                        <div>
                            <span class="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Loans Approved</span>
                            <span class="text-xl font-bold text-white tracking-tight">${approvedCount.toLocaleString()}</span>
                            <span class="text-[10px] text-green-500 font-bold flex items-center mt-1.5">
                                <i data-lucide="check-circle-2" class="w-3 h-3 mr-0.5"></i>
                                89.2% <span class="text-slate-500 font-normal ml-1">Approval Ratio</span>
                            </span>
                        </div>
                        <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 text-cyan-500">
                            <i data-lucide="shield-check" class="w-5 h-5"></i>
                        </div>
                    </div>

                    <!-- Card 5 -->
                    <div class="glass-panel glass-panel-hover p-4 rounded-2xl flex items-center justify-between">
                        <div>
                            <span class="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Collections Today</span>
                            <span class="text-xl font-bold text-white tracking-tight">₹${totalCollectedScaled.toLocaleString()}</span>
                            <span class="text-[10px] text-green-500 font-bold flex items-center mt-1.5">
                                <i data-lucide="arrow-up-right" class="w-3 h-3 mr-0.5"></i>
                                +12.4% <span class="text-slate-500 font-normal ml-1">vs Yesterday</span>
                            </span>
                        </div>
                        <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 text-cyan-500">
                            <i data-lucide="wallet" class="w-5 h-5"></i>
                        </div>
                    </div>

                    <!-- Card 6 -->
                    <div class="glass-panel glass-panel-hover p-4 rounded-2xl flex items-center justify-between">
                        <div>
                            <span class="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Overdue DPD Accounts</span>
                            <span class="text-xl font-bold text-red-400 tracking-tight">2,840</span>
                            <span class="text-[10px] text-red-400 font-bold flex items-center mt-1.5">
                                <i data-lucide="arrow-down-right" class="w-3 h-3 mr-0.5"></i>
                                -3.5% <span class="text-slate-500 font-normal ml-1">delinquency</span>
                            </span>
                        </div>
                        <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 text-red-500">
                            <i data-lucide="alert-octagon" class="w-5 h-5"></i>
                        </div>
                    </div>

                    <!-- Card 7 -->
                    <div class="glass-panel glass-panel-hover p-4 rounded-2xl flex items-center justify-between">
                        <div>
                            <span class="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">AI BOT Resolution %</span>
                            <span class="text-xl font-bold text-white tracking-tight">87.5%</span>
                            <span class="text-[10px] text-green-500 font-bold flex items-center mt-1.5">
                                <i data-lucide="sparkles" class="w-3 h-3 mr-0.5"></i>
                                +2.3% <span class="text-slate-500 font-normal ml-1">AI FCR</span>
                            </span>
                        </div>
                        <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 text-cyan-500">
                            <i data-lucide="bot" class="w-5 h-5"></i>
                        </div>
                    </div>

                    <!-- Card 8 -->
                    <div class="glass-panel glass-panel-hover p-4 rounded-2xl flex items-center justify-between">
                        <div>
                            <span class="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Revenue Generated</span>
                            <span class="text-xl font-bold text-white tracking-tight">₹48.2 Cr</span>
                            <span class="text-[10px] text-green-500 font-bold flex items-center mt-1.5">
                                <i data-lucide="line-chart" class="w-3 h-3 mr-0.5"></i>
                                +18.5% <span class="text-slate-500 font-normal ml-1">YoY Growth</span>
                            </span>
                        </div>
                        <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-800 text-cyan-500">
                            <i data-lucide="banknote" class="w-5 h-5"></i>
                        </div>
                    </div>

                </div>

                <!-- CHARTS GRIDS -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    <!-- Chart 1: Lead Source Funnel -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-3 min-h-[360px]">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-2">
                            <h3 class="text-sm font-bold text-white uppercase tracking-wider">Lead Acquisition Source Funnel</h3>
                            <i data-lucide="filter" class="w-4 h-4 text-slate-500"></i>
                        </div>
                        <div id="lead-source-funnel-chart" class="flex-1 w-full min-h-[280px]"></div>
                    </div>

                    <!-- Chart 2: Omnichannel Engagement Radar -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-3 min-h-[360px]">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-2">
                            <h3 class="text-sm font-bold text-white uppercase tracking-wider">Omnichannel Communications Engagement</h3>
                            <i data-lucide="share-2" class="w-4 h-4 text-slate-500"></i>
                        </div>
                        <div id="engagement-radar-chart" class="flex-1 w-full min-h-[280px]"></div>
                    </div>

                </div>

                <!-- LIVE PANELS (Real-time logs) -->
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    
                    <!-- Real-Time Voice Bot Panel -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-3 h-[380px] overflow-hidden xl:col-span-2">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-2">
                            <div class="flex items-center gap-2">
                                <span class="relative flex h-2 w-2">
                                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                  <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                <h3 class="text-sm font-bold text-white uppercase tracking-wider">Active voice bot dialer supervisor</h3>
                            </div>
                            <span class="text-[10px] text-red-500 font-bold bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">36 Concurrent Streams</span>
                        </div>
                        
                        <!-- List of calls -->
                        <div class="flex-1 overflow-y-auto flex flex-col gap-2.5 pr-2 custom-scrollbar">
                            <div class="p-3 bg-slate-900/30 hover:bg-slate-900/60 border border-slate-800/40 rounded-xl flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-red-950 flex items-center justify-center border border-red-800 active-call-pulse">
                                        <i data-lucide="phone" class="w-3.5 h-3.5 text-red-500"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-xs font-bold text-white">Amit Deshmukh</h4>
                                        <p class="text-[9px] text-slate-500 uppercase font-bold tracking-wider">DPD 45 Collection Call</p>
                                    </div>
                                </div>
                                <div class="text-right flex flex-col items-end gap-1">
                                    <span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-red-950 text-red-400 border border-red-800/30">STRESSED SENTIMENT</span>
                                    <button class="btn-intercept-call px-2 py-0.5 rounded bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/20 text-[9px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1 mt-1" data-customer="Amit Deshmukh">
                                        <i data-lucide="headphones" class="w-2.5 h-2.5"></i>
                                        Intercept Call
                                    </button>
                                </div>
                            </div>

                            <div class="p-3 bg-slate-900/30 hover:bg-slate-900/60 border border-slate-800/40 rounded-xl flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                                        <i data-lucide="phone" class="w-3.5 h-3.5 text-green-500"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-xs font-bold text-white">Aarav Sharma</h4>
                                        <p class="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Personal Loan Lead</p>
                                    </div>
                                </div>
                                <div class="text-right flex flex-col items-end gap-1">
                                    <span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-green-950 text-green-400 border border-green-800/30">HIGHLY POSITIVE</span>
                                    <button class="btn-intercept-call px-2 py-0.5 rounded bg-green-500/10 hover:bg-green-500 text-green-400 hover:text-white border border-green-500/20 text-[9px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1 mt-1" data-customer="Aarav Sharma">
                                        <i data-lucide="headphones" class="w-2.5 h-2.5"></i>
                                        Listen In
                                    </button>
                                </div>
                            </div>

                            <div class="p-3 bg-slate-900/30 hover:bg-slate-900/60 border border-slate-800/40 rounded-xl flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                                        <i data-lucide="phone" class="w-3.5 h-3.5 text-cyan-500"></i>
                                    </div>
                                    <div>
                                        <h4 class="text-xs font-bold text-white">Priyanka Patel</h4>
                                        <p class="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Business Loan Lead</p>
                                    </div>
                                </div>
                                <div class="text-right flex flex-col items-end gap-1">
                                    <span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-cyan-950 text-cyan-400 border border-cyan-800/30">NEUTRAL / DISCUSSING</span>
                                    <button class="btn-intercept-call px-2 py-0.5 rounded bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-white border border-cyan-500/20 text-[9px] font-bold uppercase tracking-wider transition-colors flex items-center gap-1 mt-1" data-customer="Priyanka Patel">
                                        <i data-lucide="headphones" class="w-2.5 h-2.5"></i>
                                        Listen In
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- WhatsApp Campaign status metrics -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-4 h-[380px] overflow-hidden">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-2">
                            <h3 class="text-sm font-bold text-white uppercase tracking-wider">WhatsApp campaign flow status</h3>
                            <i data-lucide="message-square" class="w-4 h-4 text-slate-500"></i>
                        </div>

                        <div class="flex flex-col gap-4 flex-1 justify-center">
                            <div>
                                <div class="flex justify-between text-xs font-bold mb-1">
                                    <span class="text-slate-300">WhatsApp Delivered</span>
                                    <span class="text-cyan-400">92%</span>
                                </div>
                                <div class="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800/80">
                                    <div class="bg-cyan-500 h-full rounded-full" style="width: 92%"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between text-xs font-bold mb-1">
                                    <span class="text-slate-300">Message Read Rate</span>
                                    <span class="text-green-400">81%</span>
                                </div>
                                <div class="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800/80">
                                    <div class="bg-green-500 h-full rounded-full" style="width: 81%"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between text-xs font-bold mb-1">
                                    <span class="text-slate-300">Link CTR (Click Rate)</span>
                                    <span class="text-cyan-400">54%</span>
                                </div>
                                <div class="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800/80">
                                    <div class="bg-cyan-500 h-full rounded-full" style="width: 54%"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between text-xs font-bold mb-1">
                                    <span class="text-slate-300">Unread / Undelivered</span>
                                    <span class="text-red-400">8%</span>
                                </div>
                                <div class="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800/80">
                                    <div class="bg-red-600 h-full rounded-full" style="width: 8%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        `;

        lucide.createIcons();

        // Wire Live Intercept buttons to open the simulator drawer and trigger a voice call!
        const interceptButtons = container.querySelectorAll(".btn-intercept-call");
        interceptButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const customerName = btn.dataset.customer;
                
                // 1. Open the Chat Simulator drawer
                const drawer = document.getElementById("simulator-drawer");
                if (drawer) {
                    drawer.classList.remove("translate-x-full");
                }
                
                // 2. Select the AI Voice Bot tab in the simulator
                const tabVoice = document.getElementById("sim-tab-voice");
                if (tabVoice) {
                    tabVoice.click();
                }
                
                // 3. Select the customer in the IVR dropdown
                const selector = document.getElementById("voice-lead-selector");
                if (selector) {
                    selector.value = customerName;
                }
                
                // 4. Trigger the live voice call immediately!
                const btnStartCall = document.getElementById("btn-start-voice-call");
                if (btnStartCall) {
                    btnStartCall.click();
                }
            });
        });

        this.setupCharts(mockStore);
    },

    setupCharts(mockStore) {
        const currentTheme = mockStore.getState().theme || "dark";
        const labelColor = currentTheme === "light" ? "#334155" : "#94a3b8";

        // Funnel Chart for Lead Source
        const funnelOptions = {
            series: [{
                name: 'Leads',
                data: [15200, 8400, 5600, 3200, 1800]
            }],
            chart: {
                type: 'bar',
                height: 260,
                toolbar: { show: false },
                background: 'transparent'
            },
            colors: ['#4f46e5', '#3b82f6', '#06b6d4', '#0d9488', '#10b981'],
            plotOptions: {
                bar: {
                    borderRadius: 6,
                    horizontal: true,
                    distributed: true,
                    barHeight: '80%',
                    isFunnel: true,
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex] + ': ' + val;
                },
                dropShadow: { enabled: true },
                style: {
                    fontSize: '10px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 'bold',
                    colors: ['#fff']
                }
            },
            grid: { show: false },
            xaxis: {
                categories: ['Acquired', 'Contacted', 'Interested', 'Approved', 'Disbursed'],
                labels: { show: false }
            },
            yaxis: {
                labels: { show: false }
            },
            theme: { mode: currentTheme },
            legend: { show: false }
        };

        const funnelChart = new ApexCharts(document.querySelector("#lead-source-funnel-chart"), funnelOptions);
        funnelChart.render();

        // Engagement Radar Chart
        const radarOptions = {
            series: [{
                name: 'Response CTR %',
                data: [85, 72, 60, 45, 92, 58]
            }],
            chart: {
                type: 'radar',
                height: 260,
                toolbar: { show: false },
                background: 'transparent'
            },
            colors: ['#06b6d4'],
            stroke: { width: 2 },
            fill: {
                opacity: 0.2,
                colors: ['#06b6d4']
            },
            markers: {
                size: 4,
                colors: ['#4f46e5'],
                strokeWidth: 2
            },
            xaxis: {
                categories: ['Voice Bot', 'WhatsApp', 'SMS Blast', 'Direct Email', 'Agent Dialer', 'Field Contact'],
                labels: {
                    style: {
                        colors: [labelColor, labelColor, labelColor, labelColor, labelColor, labelColor],
                        fontSize: '9px',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 'bold'
                    }
                }
            },
            yaxis: {
                show: false
            },
            theme: { mode: currentTheme }
        };

        const radarChart = new ApexCharts(document.querySelector("#engagement-radar-chart"), radarOptions);
        radarChart.render();
    }
};
