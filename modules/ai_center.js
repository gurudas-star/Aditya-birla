// Module 10: AI Intelligence Center & Predictive Analytics Module Component

export const AICenterModule = {
    render(container, mockStore) {
        const state = mockStore.getState();

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Title Header -->
                <div class="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">AI Intelligence Center</h2>
                        <p class="text-xs text-slate-500">Access conversational speech analytics, sentiment indexes, intent classification logs, and predictive best-recovery engines.</p>
                    </div>
                </div>

                <!-- AI Accuracy Metrics -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    <div class="glass-panel p-4 rounded-xl border border-slate-900 flex items-center justify-between">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Intent Recognition</span>
                            <span class="text-lg font-bold text-green-400">94.8% <span class="text-[10px] text-slate-500 font-normal">Accuracy</span></span>
                        </div>
                        <i data-lucide="sparkles" class="w-8 h-8 text-green-500/20"></i>
                    </div>

                    <div class="glass-panel p-4 rounded-xl border border-slate-900 flex items-center justify-between">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Sentiment Classification</span>
                            <span class="text-lg font-bold text-white">91.2%</span>
                        </div>
                        <i data-lucide="brain" class="w-8 h-8 text-slate-500/20"></i>
                    </div>

                    <div class="glass-panel p-4 rounded-xl border border-slate-900 flex items-center justify-between">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">AI FCR Automation Rate</span>
                            <span class="text-lg font-bold text-cyan-400">78.5%</span>
                        </div>
                        <i data-lucide="bot" class="w-8 h-8 text-cyan-500/20"></i>
                    </div>

                    <div class="glass-panel p-4 rounded-xl border border-slate-900 flex items-center justify-between">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Speech Transcription</span>
                            <span class="text-lg font-bold text-white">0.3s <span class="text-[10px] text-slate-500 font-normal">Latency</span></span>
                        </div>
                        <i data-lucide="activity" class="w-8 h-8 text-slate-500/20"></i>
                    </div>

                </div>

                <!-- Graphs Section -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    <!-- Chart 1: Sentiment Classification -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-3 min-h-[340px]">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-2">
                            <h3 class="text-sm font-bold text-white uppercase tracking-wider">Conversation Sentiment Analytics</h3>
                            <i data-lucide="smile" class="w-4 h-4 text-slate-500"></i>
                        </div>
                        <div id="ai-sentiment-trend-chart" class="flex-1 w-full min-h-[260px]"></div>
                    </div>

                    <!-- Chart 2: Intent Distribution -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-3 min-h-[340px]">
                        <div class="flex justify-between items-center border-b border-slate-900 pb-2">
                            <h3 class="text-sm font-bold text-white uppercase tracking-wider">Customer Intent Distribution</h3>
                            <i data-lucide="filter" class="w-4 h-4 text-slate-500"></i>
                        </div>
                        <div id="ai-intent-distribution-chart" class="flex-1 w-full min-h-[260px]"></div>
                    </div>

                </div>

                <!-- Recommendation Matrix Heatmap -->
                <div class="glass-panel rounded-2xl p-5 flex flex-col gap-3">
                    <div class="border-b border-slate-900 pb-2 flex justify-between items-center mb-2">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                            <i data-lucide="zap" class="w-4 h-4 text-cyan-400"></i>
                            AI Recommendation & Predictive Recovery Matrix
                        </h3>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                        
                        <!-- Block 1 -->
                        <div class="bg-slate-950/40 p-4 border border-slate-900 rounded-xl flex flex-col gap-2">
                            <span class="text-[9px] text-cyan-400 font-bold uppercase tracking-wider">Optimal Contact Timing</span>
                            <h4 class="text-xs font-bold text-white">Best Contact Window: 10:00 - 11:30</h4>
                            <p class="text-[10px] text-slate-500 leading-relaxed mt-1">Based on historical dial response logs, contact answer ratios increase by 34% during early morning brackets.</p>
                        </div>

                        <!-- Block 2 -->
                        <div class="bg-slate-950/40 p-4 border border-slate-900 rounded-xl flex flex-col gap-2">
                            <span class="text-[9px] text-cyan-400 font-bold uppercase tracking-wider">Default Risk Classification</span>
                            <h4 class="text-xs font-bold text-white">Top Risk Factor: Business Cash Crunch</h4>
                            <p class="text-[10px] text-slate-500 leading-relaxed mt-1">AI transcript classification detects 'Business Sales Slowdown' as the primary root cause for high overdue DPD accounts.</p>
                        </div>

                        <!-- Block 3 -->
                        <div class="bg-slate-950/40 p-4 border border-slate-900 rounded-xl flex flex-col gap-2">
                            <span class="text-[9px] text-cyan-400 font-bold uppercase tracking-wider">Upsell propensity modeling</span>
                            <h4 class="text-xs font-bold text-white">Optimal Upsell Rate: Pre-Approved Topup</h4>
                            <p class="text-[10px] text-slate-500 leading-relaxed mt-1">Calculates a 78% upsell success probability for customers completing 12 consecutive clean EMI payments.</p>
                        </div>

                    </div>
                </div>

            </div>
        `;

        lucide.createIcons();
        this.setupCharts(mockStore);
    },

    setupCharts(mockStore) {
        const currentTheme = mockStore.getState().theme || "dark";
        const labelColor = currentTheme === "light" ? "#334155" : "#94a3b8";
        const gridColor = currentTheme === "light" ? "#e2e8f0" : "#1e293b";

        // Sentiment Trend Area
        const sentimentOptions = {
            series: [
                { name: 'Positive %', data: [65, 70, 72, 78, 80, 84, 87] },
                { name: 'Neutral %', data: [25, 20, 20, 15, 14, 11, 10] },
                { name: 'Negative %', data: [10, 10, 8, 7, 6, 5, 3] }
            ],
            chart: {
                type: 'area',
                height: 250,
                toolbar: { show: false },
                background: 'transparent'
            },
            colors: ['#22c55e', '#eab308', '#ef4444'],
            stroke: { width: 1.5, curve: 'smooth' },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.25,
                    opacityTo: 0.05,
                    stops: [0, 90, 100]
                }
            },
            xaxis: {
                categories: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                labels: {
                    style: { colors: labelColor, fontSize: '9px', fontFamily: 'Outfit, sans-serif' }
                }
            },
            yaxis: {
                labels: {
                    style: { colors: labelColor, fontSize: '9px', fontFamily: 'Outfit, sans-serif' }
                }
            },
            grid: { borderColor: gridColor, strokeDashArray: 3 },
            theme: { mode: currentTheme },
            legend: { show: false }
        };

        const sentimentChart = new ApexCharts(document.querySelector("#ai-sentiment-trend-chart"), sentimentOptions);
        sentimentChart.render();

        // Intent Bar distribution
        const intentOptions = {
            series: [{
                name: 'Classification %',
                data: [42, 28, 15, 10, 5]
            }],
            chart: {
                type: 'bar',
                height: 250,
                toolbar: { show: false },
                background: 'transparent'
            },
            colors: ['#06b6d4'],
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    columnWidth: '55%',
                    distributed: false,
                }
            },
            xaxis: {
                categories: ['Loan Status Check', 'Repayment Waiver', 'Document Questions', 'Callback Requests', 'Escalations'],
                labels: {
                    style: { colors: labelColor, fontSize: '9px', fontFamily: 'Outfit, sans-serif' }
                }
            },
            yaxis: {
                labels: {
                    style: { colors: labelColor, fontSize: '9px', fontFamily: 'Outfit, sans-serif' }
                }
            },
            grid: { borderColor: gridColor, strokeDashArray: 3 },
            theme: { mode: currentTheme }
        };

        const intentChart = new ApexCharts(document.querySelector("#ai-intent-distribution-chart"), intentOptions);
        intentChart.render();
    }
};
