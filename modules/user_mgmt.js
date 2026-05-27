// Module 12: User Management & Corporate Roles Matrix Module Component

export const UserMgmtModule = {
    render(container, mockStore) {
        const state = mockStore.getState();

        container.innerHTML = `
            <div class="p-6 flex flex-col gap-6 select-none animate-fade-in">
                
                <!-- Page Title Header -->
                <div class="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div>
                        <h2 class="text-xl font-bold text-white tracking-wide">User & Access Management</h2>
                        <p class="text-xs text-slate-500">Configure role permission security matrices, monitor region allocations, and log active corporate VPN nodes.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    
                    <!-- Left: Role Access Toggles Security Matrix -->
                    <div class="glass-panel rounded-2xl p-5 border border-slate-800/80 flex flex-col gap-4">
                        <div class="border-b border-slate-900 pb-2 flex justify-between items-center">
                            <h3 class="text-sm font-bold text-white uppercase tracking-wider">Access Permission Matrix</h3>
                            <span class="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold">SHA-256 Vault Linked</span>
                        </div>

                        <p class="text-xs text-slate-400">Toggling checkmarks dynamically locks or unlocks dashboard navigation sections for that corporate role.</p>

                        <!-- Permission checks list -->
                        <div class="flex flex-col gap-3.5 text-xs text-slate-200">
                            
                            <!-- Row 1 -->
                            <div class="p-3 bg-slate-950/40 border border-slate-900 rounded-xl flex items-center justify-between">
                                <div>
                                    <h4 class="font-bold text-white">System Administrator (Admin)</h4>
                                    <p class="text-[10px] text-slate-500 mt-0.5">Complete root console, system modifications, and legal notices dispatch.</p>
                                </div>
                                <input type="checkbox" checked disabled class="w-4.5 h-4.5 accent-cyan-500 cursor-not-allowed">
                            </div>

                            <!-- Row 2 -->
                            <div class="p-3 bg-slate-950/40 border border-slate-900 rounded-xl flex items-center justify-between">
                                <div>
                                    <h4 class="font-bold text-white">Campaign Manager</h4>
                                    <p class="text-[10px] text-slate-500 mt-0.5">Access campaign panels, construct bot IVR templates, check dialer metrics.</p>
                                </div>
                                <input type="checkbox" checked class="w-4.5 h-4.5 accent-cyan-500 cursor-pointer">
                            </div>

                            <!-- Row 3 -->
                            <div class="p-3 bg-slate-950/40 border border-slate-900 rounded-xl flex items-center justify-between">
                                <div>
                                    <h4 class="font-bold text-white">Collection Manager</h4>
                                    <p class="text-[10px] text-slate-500 mt-0.5">Access DPD recovery trackers, log collection promises, trace field visits.</p>
                                </div>
                                <input type="checkbox" checked class="w-4.5 h-4.5 accent-cyan-500 cursor-pointer">
                            </div>

                            <!-- Row 4 -->
                            <div class="p-3 bg-slate-950/40 border border-slate-900 rounded-xl flex items-center justify-between">
                                <div>
                                    <h4 class="font-bold text-white">Legal Counselor</h4>
                                    <p class="text-[10px] text-slate-500 mt-0.5">Access case docket tables, print Sec 138 notices, attach case files.</p>
                                </div>
                                <input type="checkbox" checked class="w-4.5 h-4.5 accent-cyan-500 cursor-pointer">
                            </div>

                        </div>
                    </div>

                    <!-- Right: Region Allocations & Corporate VPN Nodes -->
                    <div class="glass-panel rounded-2xl p-5 border border-slate-800 flex flex-col gap-4">
                        <h3 class="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-900 pb-2">Regional Allocation Matrix</h3>
                        
                        <div class="overflow-x-auto">
                            <table class="w-full text-left text-xs text-slate-300 border-collapse">
                                <thead>
                                    <tr class="border-b border-slate-800 text-slate-500 font-bold uppercase tracking-wider">
                                        <th class="py-2">Zone</th>
                                        <th class="py-2">Allocation</th>
                                        <th class="py-2">Pending cases</th>
                                        <th class="py-2">Staff Count</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-slate-900/50 hover:bg-slate-900/10">
                                        <td class="py-2.5 font-bold text-white">Mumbai East Zone</td>
                                        <td class="py-2.5">₹45.5 Lakhs</td>
                                        <td class="py-2.5 text-red-400 font-bold">18 Accounts</td>
                                        <td class="py-2.5">4 Officers</td>
                                    </tr>
                                    <tr class="border-b border-slate-900/50 hover:bg-slate-900/10">
                                        <td class="py-2.5 font-bold text-white">Mumbai West Zone</td>
                                        <td class="py-2.5">₹82.1 Lakhs</td>
                                        <td class="py-2.5 text-red-400 font-bold">34 Accounts</td>
                                        <td class="py-2.5">6 Officers</td>
                                    </tr>
                                    <tr class="hover:bg-slate-900/10">
                                        <td class="py-2.5 font-bold text-white">Delhi NCR Node</td>
                                        <td class="py-2.5">₹56.0 Lakhs</td>
                                        <td class="py-2.5 text-red-400 font-bold">22 Accounts</td>
                                        <td class="py-2.5">5 Officers</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="border-t border-slate-900 pt-4 flex flex-col gap-2">
                            <span class="text-[9px] text-slate-500 uppercase font-bold tracking-wider">Active Corporate VPN Connections</span>
                            <div class="flex gap-2 items-center flex-wrap">
                                <span class="px-2.5 py-1 rounded-lg bg-slate-950/60 border border-slate-900 text-[10px] font-bold text-green-400 flex items-center gap-1">
                                    <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    VPN-MUM-01
                                </span>
                                <span class="px-2.5 py-1 rounded-lg bg-slate-950/60 border border-slate-900 text-[10px] font-bold text-green-400 flex items-center gap-1">
                                    <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    VPN-DEL-04
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        `;

        lucide.createIcons();
    }
};
