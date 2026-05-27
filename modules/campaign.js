// Module 3: Campaign Manager Module Component

export const CampaignModule = {
    render(container, mockStore) {
        const state = mockStore.getState();

        // Calculate Campaign Reach KPI sums
        const totalReach = state.campaigns.reduce((sum, c) => sum + c.reach, 0);
        const totalAttempted = state.campaigns.reduce((sum, c) => sum + c.attempted, 0);
        const avgInterested = Math.floor((state.campaigns.reduce((sum, c) => sum + (c.interested || 0), 0) / totalReach) * 100);

        let campaignListHtml = state.campaigns.map(camp => {
            const statusClass = camp.status === "Active" 
                ? "bg-green-950 text-green-400 border-green-800" 
                : "bg-slate-900 text-slate-400 border-slate-700";

            return `
                <div class="p-4 bg-slate-900/30 border border-slate-800/80 rounded-xl hover:border-cyan-500/20 transition-all flex flex-col gap-3">
                    <div class="flex justify-between items-start">
                        <div>
                            <h4 class="text-xs font-bold text-white">${camp.name}</h4>
                            <span class="text-[9px] text-slate-500 font-bold uppercase tracking-wider">${camp.channel}</span>
                        </div>
                        <span class="px-2 py-0.5 rounded-full text-[9px] font-bold border ${statusClass}">${camp.status}</span>
                    </div>

                    <div class="grid grid-cols-3 gap-2 border-t border-slate-900 pt-3">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider block font-semibold">Total Reach</span>
                            <span class="text-xs font-bold text-white">${camp.reach.toLocaleString()}</span>
                        </div>
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider block font-semibold">Attempted</span>
                            <span class="text-xs font-bold text-white">${camp.attempted.toLocaleString()}</span>
                        </div>
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider block font-semibold">Interested</span>
                            <span class="text-xs font-bold text-cyan-400">${camp.interested ? camp.interested.toLocaleString() : 'N/A'}</span>
                        </div>
                    </div>
                </div>
            `;
        }).join("");

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Page Header -->
                <div class="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">Campaign Manager</h2>
                        <p class="text-xs text-slate-500">Qualify large volumes of lead pools through concurrent AI Voice Bot dialers and WhatsApp blasts.</p>
                    </div>
                    
                    <button id="btn-create-campaign-modal" class="px-3.5 py-2 bg-brand-gradient hover:from-red-800 hover:to-red-950 border border-red-700/30 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-indigo-950/30">
                        <i data-lucide="plus-circle" class="w-4 h-4 text-cyan-400"></i>
                        Launch New Campaign
                    </button>
                </div>

                <!-- KPI Grid -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div class="glass-panel p-4 rounded-xl flex items-center justify-between border border-slate-900">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Total Campaign Reach</span>
                            <span class="text-lg font-bold text-white">${totalReach.toLocaleString()}</span>
                        </div>
                        <i data-lucide="users" class="w-8 h-8 text-cyan-500/20"></i>
                    </div>

                    <div class="glass-panel p-4 rounded-xl flex items-center justify-between border border-slate-900">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Dialer Attempts</span>
                            <span class="text-lg font-bold text-white">${totalAttempted.toLocaleString()}</span>
                        </div>
                        <i data-lucide="phone-call" class="w-8 h-8 text-cyan-500/20"></i>
                    </div>

                    <div class="glass-panel p-4 rounded-xl flex items-center justify-between border border-slate-900">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Interested qualification %</span>
                            <span class="text-lg font-bold text-green-400">${avgInterested}%</span>
                        </div>
                        <i data-lucide="smile" class="w-8 h-8 text-green-500/20"></i>
                    </div>

                    <div class="glass-panel p-4 rounded-xl flex items-center justify-between border border-slate-900">
                        <div>
                            <span class="text-[9px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Bot Speech Accuracy</span>
                            <span class="text-lg font-bold text-white">87%</span>
                        </div>
                        <i data-lucide="sparkles" class="w-8 h-8 text-cyan-500/20"></i>
                    </div>
                </div>

                <!-- Main Layout Area (Active Campaigns on Left, Creation Form / Metrics on Right) -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    <!-- Left: Active Campaigns List -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-4 lg:col-span-2">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Active Campaign Queues</h3>
                        <div class="flex flex-col gap-3 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
                            ${campaignListHtml}
                        </div>
                    </div>

                    <!-- Right: Channels Effectiveness Analytics -->
                    <div class="glass-panel rounded-2xl p-5 flex flex-col gap-4">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Channel Performance Summary</h3>
                        <div id="channel-performance-pie" class="min-h-[220px]"></div>
                        
                        <div class="border-t border-slate-900 pt-4 flex flex-col gap-3 text-xs font-semibold text-slate-300">
                            <div class="flex justify-between">
                                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>Voice Bot Dialers</span>
                                <span class="text-white">45.2%</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>WhatsApp Broadcast</span>
                                <span class="text-white">35.8%</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-slate-600"></span>SMS Broadcast</span>
                                <span class="text-white">19.0%</span>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- IVR Dialer Live Logging Supervisor -->
                <div class="glass-panel rounded-2xl p-5 flex flex-col gap-3">
                    <div class="flex justify-between items-center border-b border-slate-900 pb-2 mb-2">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider">Active Voice Bot Dialer Supervisor</h3>
                        <span class="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold">100% Automated Queue</span>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs text-slate-300 border-collapse">
                            <thead>
                                <tr class="border-b border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
                                    <th class="py-2.5">Lead Name</th>
                                    <th class="py-2.5">Call Status</th>
                                    <th class="py-2.5">Call Duration</th>
                                    <th class="py-2.5">Sentiment analysis</th>
                                    <th class="py-2.5">Dial Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-slate-900/50 hover:bg-slate-900/10">
                                    <td class="py-3 font-bold text-white">Amit Deshmukh</td>
                                    <td class="py-3"><span class="px-2 py-0.5 rounded bg-green-950 text-green-400 border border-green-800 text-[10px]">Connected</span></td>
                                    <td class="py-3 font-mono">00:22</td>
                                    <td class="py-3 font-bold text-red-400">Stress Detected</td>
                                    <td class="py-3 text-slate-400">Collection Dialer Run #2</td>
                                </tr>
                                <tr class="border-b border-slate-900/50 hover:bg-slate-900/10">
                                    <td class="py-3 font-bold text-white">Aarav Sharma</td>
                                    <td class="py-3"><span class="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 text-[10px]">Disconnected</span></td>
                                    <td class="py-3 font-mono">00:36</td>
                                    <td class="py-3 font-bold text-green-400">Interested (Positive)</td>
                                    <td class="py-3 text-slate-400">Offer Blast Complete</td>
                                </tr>
                                <tr class="hover:bg-slate-900/10">
                                    <td class="py-3 font-bold text-white">Priyanka Patel</td>
                                    <td class="py-3"><span class="px-2 py-0.5 rounded bg-green-950 text-green-400 border border-green-800 text-[10px]">Connected</span></td>
                                    <td class="py-3 font-mono">00:15</td>
                                    <td class="py-3 font-bold text-cyan-500">Inquiry (Neutral)</td>
                                    <td class="py-3 text-slate-400">Salary Doc Pending follow up</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <!-- Campaign Creation Modal Dialog (Hidden by Default) -->
            <div id="campaign-modal" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 hidden select-none animate-fade-in">
                <div class="w-full max-w-lg glass-panel border border-slate-800 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
                    <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                            <i data-lucide="plus-circle" class="w-4 h-4 text-cyan-500"></i>
                            Launch New Campaign Queue
                        </h3>
                        <button id="btn-close-campaign-modal" class="text-slate-500 hover:text-white transition-colors">
                            <i data-lucide="x" class="w-4 h-4"></i>
                        </button>
                    </div>

                    <form id="form-new-campaign" class="flex flex-col gap-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2">
                                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Campaign Title</label>
                                <input type="text" id="camp-name" placeholder="e.g. Pre-Approved Business Loan Campaign" required
                                       class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors">
                            </div>

                            <div>
                                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Delivery Channel</label>
                                <select id="camp-channel" class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-200">
                                    <option value="Omnichannel (Bot + WhatsApp)">Omnichannel (Bot + WhatsApp)</option>
                                    <option value="AI Voice Bot Call">AI Voice Bot Call Only</option>
                                    <option value="WhatsApp Broadcast">WhatsApp Broadcast Only</option>
                                    <option value="SMS Blast Response">SMS Blast Response</option>
                                </select>
                            </div>

                            <div>
                                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Target Pool Size</label>
                                <input type="number" id="camp-reach" value="10000" min="1" required
                                       class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors">
                            </div>

                            <div>
                                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">IVR Voice Bot Script</label>
                                <select class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-200">
                                    <option>Personal Loan Pre-Approved Script v2.1</option>
                                    <option>Business Turnover Verification Script</option>
                                    <option>DPD Late Repayment Warning Voice Script</option>
                                </select>
                            </div>

                            <div>
                                <label class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Schedule Timing</label>
                                <select class="w-full bg-slate-900 border border-slate-800 rounded-xl py-2 px-3 text-xs text-slate-200">
                                    <option>Start Immediately (09:00 - 18:00)</option>
                                    <option>Schedule for Next Business Day</option>
                                    <option>Recurring Weekly Batch</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex gap-2 justify-end border-t border-slate-900 pt-4 mt-2">
                            <button type="button" id="btn-cancel-campaign" class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-400 transition-colors">
                                Cancel
                            </button>
                            <button type="submit" class="px-4 py-2 rounded-xl bg-brand-gradient text-white font-bold text-xs uppercase tracking-wider transition-all">
                                Deploy Campaign Queue
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        lucide.createIcons();
        this.setupCharts(mockStore);
        this.setupEvents(mockStore);
    },

    setupCharts(mockStore) {
        const currentTheme = mockStore.getState().theme || "dark";
        const labelNameColor = currentTheme === "light" ? "#475569" : "#94a3b8";
        const labelValColor = currentTheme === "light" ? "#0f172a" : "#ffffff";

        const pieOptions = {
            series: [45.2, 35.8, 19.0],
            chart: {
                type: 'donut',
                height: 220,
                background: 'transparent'
            },
            labels: ['Voice Bot', 'WhatsApp', 'SMS Blast'],
            colors: ['#4f46e5', '#06b6d4', '#475569'],
            dataLabels: { enabled: false },
            theme: { mode: currentTheme },
            legend: { show: false },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '10px',
                                fontFamily: 'Outfit, sans-serif',
                                fontWeight: 'bold',
                                color: labelNameColor,
                                offsetY: -4
                            },
                            value: {
                                show: true,
                                fontSize: '14px',
                                fontFamily: 'Outfit, sans-serif',
                                fontWeight: 'bold',
                                color: labelValColor,
                                offsetY: 4,
                                formatter: function (val) { return val + "%"; }
                            },
                            total: {
                                show: true,
                                label: 'Best Channel',
                                fontSize: '9px',
                                color: labelNameColor,
                                formatter: function () { return 'Voice Bot'; }
                            }
                        }
                    }
                }
            }
        };

        const pieChart = new ApexCharts(document.querySelector("#channel-performance-pie"), pieOptions);
        pieChart.render();
    },

    setupEvents(mockStore) {
        const btnOpen = document.getElementById("btn-create-campaign-modal");
        const btnClose = document.getElementById("btn-close-campaign-modal");
        const btnCancel = document.getElementById("btn-cancel-campaign");
        const modal = document.getElementById("campaign-modal");
        const form = document.getElementById("form-new-campaign");

        const toggleModal = () => {
            modal.classList.toggle("hidden");
            lucide.createIcons();
        };

        btnOpen.addEventListener("click", toggleModal);
        btnClose.addEventListener("click", toggleModal);
        btnCancel.addEventListener("click", toggleModal);

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("camp-name").value;
            const channel = document.getElementById("camp-channel").value;
            const reach = parseInt(document.getElementById("camp-reach").value);

            mockStore.addCampaign({ name, channel, reach });
            toggleModal();
            this.render(document.getElementById("main-content-pane"), mockStore);
        });
    }
};
