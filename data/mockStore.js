// IKONTEL Unified State Store

const initialLeads = [
    {
        id: "AB-LD-98402",
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        phone: "+91 98765 43210",
        amount: 850000,
        city: "Mumbai",
        product: "Personal Loan",
        source: "Website Landing",
        status: "Disbursed",
        conversionProb: 94,
        dropRisk: "Low",
        sentiment: "Highly Positive",
        bestChannel: "WhatsApp",
        pan: "ABCDE1234F",
        aadhaar: "1234 5678 9012",
        income: 120000,
        tenure: 36,
        kycStatus: "Approved",
        kycDocs: { panUploaded: true, aadhaarUploaded: true, incomeUploaded: true },
        timeline: [
            { date: "2026-05-20 10:15", type: "system", msg: "Lead created via Web Form" },
            { date: "2026-05-20 14:30", type: "bot_call", msg: "AI Voice Bot call completed. Intent: Interested. Sentiment: Positive." },
            { date: "2026-05-21 09:00", type: "whatsapp", msg: "Pre-approved offer link sent via WhatsApp. Link clicked." },
            { date: "2026-05-22 11:45", type: "kyc", msg: "PAN & Aadhaar uploaded and verified via AI OCR" },
            { date: "2026-05-24 16:30", type: "loan", msg: "Loan Approved & Disbursed. Bank Ref: TXN998811" }
        ],
        whatsappLogs: [
            { sender: "bot", msg: "Hello Aarav! You are eligible for a pre-approved IKONTEL Personal Loan of up to ₹10 Lakhs. Would you like to proceed?", time: "09:00" },
            { sender: "customer", msg: "Yes, I need ₹8.5 Lakhs. What are the interest rates?", time: "09:02" },
            { sender: "bot", msg: "Great! Our interest rates start at just 10.5% p.a. You can complete your KYC in 2 minutes here: [Link]", time: "09:03" },
            { sender: "customer", msg: "Okay, let me upload my documents.", time: "09:10" }
        ],
        voiceLogs: [
            { speaker: "bot", text: "Hello, am I speaking with Aarav Sharma?", time: "0" },
            { speaker: "customer", text: "Yes, who is this?", time: "3" },
            { speaker: "bot", text: "I am calling from IKONTEL. I see you recently checked your home loan eligibility on our site. I'm happy to inform you that you have a pre-qualified loan offer. Do you have a minute to chat?", time: "6" },
            { speaker: "customer", text: "Oh, yes. I am looking for a personal loan actually, not home loan.", time: "16" },
            { speaker: "bot", text: "No worries! We can instantly process a Personal Loan up to ₹10 Lakhs with minimum documentation. Would you like me to send you the direct application link on WhatsApp?", time: "22" },
            { speaker: "customer", text: "Sure, that would be very helpful. Please send it.", time: "32" },
            { speaker: "bot", text: "Perfect! I have sent the details to your registered WhatsApp number. Have a wonderful day!", time: "36" }
        ]
    },
    {
        id: "AB-LD-98403",
        name: "Priyanka Patel",
        email: "priyanka.patel@example.com",
        phone: "+91 99887 76655",
        amount: 2500000,
        city: "Ahmedabad",
        product: "Business Loan",
        source: "WhatsApp BOT",
        status: "Documents Pending",
        conversionProb: 72,
        dropRisk: "Medium",
        sentiment: "Neutral",
        bestChannel: "Voice Bot",
        pan: "FGHIJ5678K",
        aadhaar: "9876 5432 1098",
        income: 350000,
        tenure: 60,
        kycStatus: "Pending Verification",
        kycDocs: { panUploaded: true, aadhaarUploaded: true, incomeUploaded: false },
        timeline: [
            { date: "2026-05-22 11:00", type: "system", msg: "Lead created via WhatsApp BOT" },
            { date: "2026-05-22 11:05", type: "whatsapp", msg: "PAN & Aadhaar collected via interactive WhatsApp session" },
            { date: "2026-05-23 15:20", type: "bot_call", msg: "Follow-up AI Voice Bot call: Requested Salary Slips/Bank Statement." }
        ],
        whatsappLogs: [
            { sender: "bot", msg: "Hi Priyanka! Thanks for expressing interest in our Business Loans. Please upload your PAN and Aadhaar here to unlock your customized limit.", time: "11:01" },
            { sender: "customer", msg: "Sent. Here is my PAN [Image] and Aadhaar [Image]", time: "11:03" },
            { sender: "bot", msg: "Received and validated! To finalize the ₹25 Lakhs limit approval, please upload your past 6 months Bank Statement.", time: "11:04" },
            { sender: "customer", msg: "I will do it by evening.", time: "11:05" }
        ],
        voiceLogs: [
            { speaker: "bot", text: "Hello Priyanka, this is Ikon, your AI Assistant from IKONTEL. I am calling regarding your Business Loan application.", time: "0" },
            { speaker: "customer", text: "Yes, hi. Is the document upload completed?", time: "6" },
            { speaker: "bot", text: "We have successfully verified your identity documents! We just need your bank statements to verify your business turnover. Can we help you pull them directly via Account Aggregator?", time: "11" },
            { speaker: "customer", text: "No, I will upload the PDF statement myself later today.", time: "22" },
            { speaker: "bot", text: "Understood. I've sent a secure upload link to your WhatsApp. Please complete it so we can disburse within 24 hours.", time: "28" }
        ]
    },
    {
        id: "AB-LD-98404",
        name: "Vikram Malhotra",
        email: "vikram.m@example.com",
        phone: "+91 91234 56789",
        amount: 4500000,
        city: "Delhi",
        product: "Home Loan",
        source: "Google Ads",
        status: "Verified",
        conversionProb: 88,
        dropRisk: "Low",
        sentiment: "Positive",
        bestChannel: "Agent Call",
        pan: "KLMNO9012P",
        aadhaar: "2468 1357 9024",
        income: 250000,
        tenure: 180,
        kycStatus: "Approved",
        kycDocs: { panUploaded: true, aadhaarUploaded: true, incomeUploaded: true },
        timeline: [
            { date: "2026-05-23 14:00", type: "system", msg: "Lead created via Google Search Campaign" },
            { date: "2026-05-23 18:10", type: "bot_call", msg: "AI Voice Bot call: Qualified. Interested in Home Loan." },
            { date: "2026-05-24 10:00", type: "kyc", msg: "All KYC and income documents successfully verified via automated workflow" }
        ],
        whatsappLogs: [],
        voiceLogs: []
    },
    {
        id: "AB-LD-98405",
        name: "Sneha Reddy",
        email: "sneha.reddy@example.com",
        phone: "+91 98888 77777",
        amount: 500000,
        city: "Bengaluru",
        product: "Personal Loan",
        source: "Partner API",
        status: "New Lead",
        conversionProb: 45,
        dropRisk: "High",
        sentiment: "Negative",
        bestChannel: "SMS",
        pan: "QRSTU3456V",
        aadhaar: "1122 3344 5566",
        income: 60000,
        tenure: 24,
        kycStatus: "Not Started",
        kycDocs: { panUploaded: false, aadhaarUploaded: false, incomeUploaded: false },
        timeline: [
            { date: "2026-05-25 09:30", type: "system", msg: "Lead received from Paisabazaar Partner API" }
        ],
        whatsappLogs: [],
        voiceLogs: []
    },
    {
        id: "AB-LD-98406",
        name: "Rahul Verma",
        email: "rahul.verma@example.com",
        phone: "+91 97777 66666",
        amount: 1500000,
        city: "Pune",
        product: "Car Loan",
        source: "SMS Campaign",
        status: "Contacted",
        conversionProb: 60,
        dropRisk: "Medium",
        sentiment: "Neutral",
        bestChannel: "WhatsApp",
        pan: "WXYZA7890B",
        aadhaar: "9988 7766 5544",
        income: 950000,
        tenure: 60,
        kycStatus: "Not Started",
        kycDocs: { panUploaded: false, aadhaarUploaded: false, incomeUploaded: false },
        timeline: [
            { date: "2026-05-24 12:00", type: "system", msg: "Lead created via SMS Blast Response" },
            { date: "2026-05-25 10:15", type: "bot_call", msg: "AI Voice Bot call completed. Customer busy, requested callback." }
        ],
        whatsappLogs: [],
        voiceLogs: []
    }
];

const initialCollections = [
    {
        id: "AB-CL-1109",
        name: "Amit Deshmukh",
        phone: "+91 96655 44332",
        loanId: "LN-908821",
        loanProduct: "Personal Loan",
        totalDue: 45000,
        collectedToday: 0,
        dpd: 45,
        bucket: "DPD 30-60",
        riskScore: 82,
        riskLevel: "High Risk",
        promiseToPay: "No PTP",
        promiseDate: "",
        avatar: "AD",
        paymentHistory: [
            { date: "2026-04-05", amount: 15000, status: "Paid", channel: "UPI" },
            { date: "2026-03-05", amount: 15000, status: "Paid", channel: "NetBanking" },
            { date: "2026-02-05", amount: 15000, status: "Paid", channel: "UPI" }
        ],
        communicationTimeline: [
            { date: "2026-05-06", type: "SMS Reminder", status: "Delivered", msg: "EMI of ₹15,000 is overdue by 1 day. Pay now to avoid penalty." },
            { date: "2026-05-10", type: "WhatsApp Chat", status: "Read", msg: "Shared custom repayment payment gateway link." },
            { date: "2026-05-15", type: "AI Voice Bot Call", status: "Connected", msg: "Bot called customer. Customer stated financial difficulty. Sentiment: Stressed." },
            { date: "2026-05-22", type: "Agent Call", status: "No Answer", msg: "Collector Agent tried reaching out. No response." }
        ],
        fieldVisits: [
            { date: "2026-05-24", agent: "Rakesh Yadav", status: "Visited - Address Locked", notes: "Home door locked. Spoke to neighbor who said Amit is out of town." }
        ]
    },
    {
        id: "AB-CL-1110",
        name: "Sunita Rao",
        phone: "+91 95544 33221",
        loanId: "LN-908822",
        loanProduct: "Gold Loan",
        totalDue: 180000,
        collectedToday: 180000,
        dpd: 15,
        bucket: "DPD 1-30",
        riskScore: 35,
        riskLevel: "Low Risk",
        promiseToPay: "PTP Met",
        promiseDate: "2026-05-26",
        avatar: "SR",
        paymentHistory: [
            { date: "2026-05-26", amount: 180000, status: "Paid", channel: "Gold Auction/Direct Pay" },
            { date: "2026-04-05", amount: 12000, status: "Paid", channel: "UPI" }
        ],
        communicationTimeline: [
            { date: "2026-05-20", type: "WhatsApp Chat", status: "Replied", msg: "Customer promised to pay by 26th May. PTP created." }
        ],
        fieldVisits: []
    },
    {
        id: "AB-CL-1111",
        name: "Jaspreet Singh",
        phone: "+91 94433 22110",
        loanId: "LN-908823",
        loanProduct: "Business Loan",
        totalDue: 340000,
        collectedToday: 0,
        dpd: 95,
        bucket: "DPD 90+",
        riskScore: 95,
        riskLevel: "High Risk",
        promiseToPay: "No PTP",
        promiseDate: "",
        avatar: "JS",
        paymentHistory: [],
        communicationTimeline: [
            { date: "2026-05-01", type: "AI Voice Bot Call", status: "Aborted", msg: "Call cut repeatedly by borrower." },
            { date: "2026-05-10", type: "Legal Escalation", status: "Notice Sent", msg: "Section 138 Legal notice prepared and dispatched." }
        ],
        fieldVisits: [
            { date: "2026-05-18", agent: "Manpreet Singh", status: "Visited - Refused Payment", notes: "Met borrower at office. Refused to pay due to business cash crunch. Advised legal route." }
        ]
    }
];

const initialCampaigns = [
    {
        id: "CAMP-001",
        name: "IKON Personal Loan Pre-Approved Q2",
        channel: "Omnichannel (Bot + WhatsApp)",
        status: "Active",
        reach: 25000,
        attempted: 18200,
        interested: 3200,
        botConversion: 87,
        whatsappDelivered: 92,
        failed: 450,
        created: "2026-05-01"
    },
    {
        id: "CAMP-002",
        name: "DPD 30-60 Collection Dialers",
        channel: "AI Voice Bot Call",
        status: "Active",
        reach: 8400,
        attempted: 7600,
        interested: 1400,
        botConversion: 65,
        whatsappDelivered: 0,
        failed: 120,
        created: "2026-05-10"
    },
    {
        id: "CAMP-003",
        name: "Home Loan Topup Campaigns",
        channel: "WhatsApp Broadcast",
        status: "Paused",
        reach: 12000,
        attempted: 5000,
        interested: 850,
        botConversion: 0,
        whatsappDelivered: 96,
        failed: 200,
        created: "2026-05-15"
    }
];

const initialLegalCases = [
    {
        id: "LGL-9821",
        caseId: "AB/CASE-2026-102",
        customerName: "Jaspreet Singh",
        loanId: "LN-908823",
        amountOverdue: 340000,
        lawyerName: "Adv. K. R. Nanda",
        status: "Arbitration Initiated",
        court: "District Court Delhi",
        hearingDate: "2026-06-15",
        noticesSent: ["Sec 138 Notice - 2026-05-10"],
        documents: ["Loan Agreement.pdf", "Unpaid Cheques.pdf"]
    },
    {
        id: "LGL-9822",
        caseId: "AB/CASE-2026-105",
        customerName: "Harish Gupta",
        loanId: "LN-901144",
        amountOverdue: 520000,
        lawyerName: "Adv. Meera Sen",
        status: "Notice Stage",
        court: "High Court Mumbai",
        hearingDate: "2026-07-02",
        noticesSent: ["Legal Notice - 2026-05-24"],
        documents: ["Loan Agreement.pdf"]
    }
];

const initialSettings = {
    whatsappTemplates: [
        { id: "T-01", name: "Pre-approved Loan Welcome", body: "Hello {{1}}! Congratulations. You have a pre-approved Loan from IKONTEL of up to ₹{{2}} Lakhs. Click here to verify your KYC: {{3}}", channel: "WhatsApp" },
        { id: "T-02", name: "DPD EMI Reminder", body: "Dear Customer, your EMI for Loan {{1}} of amount ₹{{2}} is overdue by {{3}} days. Repay now using our secure payment link: {{4}} to avoid penalty.", channel: "WhatsApp" },
        { id: "T-03", name: "Newly Onboarded Welcome", body: "Hello {{1}}! Welcome to Aditya Birla Capital. Your Loan Account {{2}} is active. Manage your account online and download statements here: {{3}}", channel: "WhatsApp" },
        { id: "T-04", name: "Online Account Access Guide", body: "Hello {{1}}! View your active details for Loan {{2}} online on our portal: {{3}}. Skip the branch queues!", channel: "WhatsApp" },
        { id: "T-05", name: "Digital Modes Self-Service Campaign", body: "Hi {{1}}! Download Interest Certificates and Statements of Account instantly online: {{3}}. Access interest rates and certificates 24/7.", channel: "WhatsApp" },
        { id: "T-06", name: "Loan Closure Advance Alert", body: "Hello {{1}}! Your Loan {{2}} is nearing closure with 1 EMI left. Your final auto-debit of ₹{{4}} is scheduled on {{3}}.", channel: "WhatsApp" },
        { id: "T-07", name: "Post-Closure Top-up Promo", body: "Hi {{1}}! Congrats on closing Loan {{2}}. As a gold member, you qualify for an instant Top-Up Loan up to ₹{{4}} Lakhs at 9.5% p.a.! Tap: {{3}}", channel: "WhatsApp" }
    ],
    botConfigs: {
        concurrentChannels: 500,
        retryCount: 3,
        workingHours: "09:00 - 19:00",
        sentimentEscalationThreshold: "Highly Stressed"
    },
    journeySteps: [
        { id: "step-1", type: "SMS", duration: "Day 1", title: "Automated SMS Warning", desc: "Sends custom EMI notification" },
        { id: "step-2", type: "WhatsApp", duration: "Day 3", title: "WhatsApp Pay Link", desc: "Interactive button template" },
        { id: "step-3", type: "Voice Bot", duration: "Day 5", title: "AI Collection Dialer", desc: "Calls customer, captures PTP date" },
        { id: "step-4", type: "Agent Call", duration: "Day 10", title: "Human Collector Escalation", desc: "Assigned to best-performing agent" },
        { id: "step-5", type: "Field Visit", duration: "Day 20", title: "Field Officer Visit", desc: "Geo-tagged physical address check" }
    ]
};

// Global Store State
const store = {
    leads: initialLeads,
    collections: initialCollections,
    campaigns: initialCampaigns,
    legalCases: initialLegalCases,
    settings: initialSettings,
    userRole: "Admin", // Admin, Campaign Manager, Sales Agent, Collection Manager, Legal Team, CX Team, Field Officer
    activePage: "dashboard", // Routing state
    activeLeadId: "AB-LD-98402", // For Lead details / 360 View
    activeCollectionId: "AB-CL-1109", // For Collector 360 View
    activeCaseId: "LGL-9821", // For Legal details
    theme: "dark" // theme state ('dark' or 'light')
};

// Subscribers (for React-like automatic updates in UI)
const subscribers = [];

export const mockStore = {
    getState() {
        return store;
    },

    subscribe(callback) {
        subscribers.push(callback);
        return () => {
            const index = subscribers.indexOf(callback);
            if (index > -1) {
                subscribers.splice(index, 1);
            }
        };
    },

    notify() {
        subscribers.forEach(cb => cb(store));
    },

    update(updater) {
        if (typeof updater === "function") {
            updater(store);
        } else {
            Object.assign(store, updater);
        }
        this.notify();
    },

    // Business Methods
    setRole(role) {
        this.update(s => {
            s.userRole = role;
        });
    },

    setTheme(theme) {
        this.update(s => {
            s.theme = theme;
        });
    },

    setActivePage(page) {
        this.update(s => {
            s.activePage = page;
        });
    },

    addLead(lead) {
        this.update(s => {
            s.leads.unshift({
                id: `AB-LD-${Math.floor(10000 + Math.random() * 90000)}`,
                timeline: [{ date: new Date().toISOString().substring(0, 16).replace("T", " "), type: "system", msg: "Lead manually uploaded / created." }],
                whatsappLogs: [],
                voiceLogs: [],
                kycDocs: { panUploaded: false, aadhaarUploaded: false, incomeUploaded: false },
                kycStatus: "Not Started",
                ...lead
            });
        });
    },

    updateLeadStatus(leadId, status) {
        this.update(s => {
            const lead = s.leads.find(l => l.id === leadId);
            if (lead) {
                lead.status = status;
                lead.timeline.unshift({
                    date: new Date().toISOString().substring(0, 16).replace("T", " "),
                    type: "system",
                    msg: `Lead status updated to: ${status}`
                });
            }
        });
    },

    updateLeadKYCDoc(leadId, docType, isUploaded) {
        this.update(s => {
            const lead = s.leads.find(l => l.id === leadId);
            if (lead) {
                lead.kycDocs[docType] = isUploaded;
                let kycCheck = lead.kycDocs.panUploaded && lead.kycDocs.aadhaarUploaded;
                lead.kycStatus = kycCheck ? (lead.kycDocs.incomeUploaded ? "Approved" : "Pending Verification") : "Not Started";
                lead.timeline.unshift({
                    date: new Date().toISOString().substring(0, 16).replace("T", " "),
                    type: "kyc",
                    msg: `KYC Document '${docType}' marked ${isUploaded ? "Uploaded" : "Removed"}`
                });
            }
        });
    },

    addCampaign(camp) {
        this.update(s => {
            s.campaigns.unshift({
                id: `CAMP-${Math.floor(100 + Math.random() * 900)}`,
                reach: camp.reach || 0,
                attempted: 0,
                interested: 0,
                botConversion: camp.channel.includes("Bot") ? 0 : null,
                whatsappDelivered: camp.channel.includes("WhatsApp") ? 0 : null,
                failed: 0,
                status: "Active",
                created: new Date().toISOString().split("T")[0],
                ...camp
            });
        });
    },

    addPromiseToPay(collectionId, date, amount) {
        this.update(s => {
            const col = s.collections.find(c => c.id === collectionId);
            if (col) {
                col.promiseToPay = "PTP Set";
                col.promiseDate = date;
                col.communicationTimeline.unshift({
                    date: new Date().toISOString().substring(0, 16).replace("T", " "),
                    type: "Agent Call",
                    status: "Replying",
                    msg: `Customer promised to pay ₹${amount || col.totalDue} on ${date}`
                });
            }
        });
    },

    addPayment(collectionId, amount, channel) {
        this.update(s => {
            const col = s.collections.find(c => c.id === collectionId);
            if (col) {
                col.collectedToday += amount;
                col.promiseToPay = "PTP Met";
                col.paymentHistory.unshift({
                    date: new Date().toISOString().split("T")[0],
                    amount,
                    status: "Paid",
                    channel
                });
                col.communicationTimeline.unshift({
                    date: new Date().toISOString().substring(0, 16).replace("T", " "),
                    type: "System Pay",
                    status: "Paid",
                    msg: `Payment of ₹${amount} received via ${channel}.`
                });
            }
        });
    },

    addLegalNotice(caseId, noticeText) {
        this.update(s => {
            const lgl = s.legalCases.find(c => c.id === caseId);
            if (lgl) {
                lgl.noticesSent.push(`${noticeText} - ${new Date().toISOString().split("T")[0]}`);
            }
        });
    }
};
