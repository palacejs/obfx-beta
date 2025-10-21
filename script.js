// Storage keys
const STORAGE_KEYS = {
    PROFILE_DATA: 'msp2_profile_data',
    TARGET_PROFILES: 'msp2_target_profiles',
    REGION: 'msp2_region'
};

// API Endpoints
const API_ENDPOINTS = {
    us: {
        federationgateway: 'https://us.mspapis.com/federationgateway/graphql',
        pets: 'https://us.mspapis.com/pets/v1/pets',
        quests: 'https://us.mspapis.com/quests/v2/profiles',
        rewards: 'https://us.mspapis.com/timelimitedrewards/v2/profiles',
        matchmaker: 'https://us.mspapis.com/matchmaker/v1/games/j68d/reservations/'
    },
    eu: {
        federationgateway: 'https://eu.mspapis.com/federationgateway/graphql',
        pets: 'https://eu.mspapis.com/pets/v1/pets',
        quests: 'https://eu.mspapis.com/quests/v2/profiles',
        rewards: 'https://eu.mspapis.com/timelimitedrewards/v2/profiles',
        matchmaker: 'https://eu.mspapis.com/matchmaker/v1/games/j68d/reservations/'
    }
};

// Game data - Enhanced from JavaScript code
const PET_IDS = [
    "c55e18991cf44659a99e6347de2fc96f", "cf0589ffe9ed45369d70dcaaa9aa1db2",
    "6ca07ffa53e3468598e6f2a2e0d20ded", "d92645e7672142028f2731aeda6e8e6f",
    "055ec44d4489440e95ae07134b3b9b3e", "cf42a511688e49f795e387d43a78c758",
    "7e4f2d790d5c4b3e808f3737b30f6458", "39e585c334834622ab69fa636068d278",
    "d7e9cc6e6fbc458892ebb18c40bb9e16", "3924865e60fe426eb2862fd9a7a813b5",
    "c23f841894b743b980bab249bdb03c6b", "2c4fbcfc98994230a8ecc21ede5a8b48",
    "d5b3566099754b959569867aaaf1b6cc", "dcc72723df1c46d091091171ef8cdcd0",
    "3e6c2f6a552d40ea9bf53a088ff695ac", "1584eb7461b440fd8e916b935d0d8a2d",
    "8bf2ead043394fc6b14712af4dfab8f2", "1cfadcd775c44bd6b1e3397a4d54b776",
    "b0c79f7eb4d8400c85b273bc5e8bc75b", "bfbd5ba804e44566b68b0b5cb3bb01d0"
];

const DAILY_QUEST_TYPES = ["daily_pet_pets", "daily_spend_starcoins", "daily_spend_diamonds"];
const DAILY_GIFT_QUESTS = ["daily_open_gift_vip", "daily_open_gift_normal"];

// Enhanced Halloween rewards from JavaScript code
const HALLOWEEN_REWARDS = [
    "halloween_25_beach_monster", "halloween_25_spider_minigame",
    "halloween_25_plaza_monster", "halloween_25_spider_minigame_plaza",
    "halloween_25_vip_club_monster", "halloween_25_forest_monster",
    "halloween_25_spider_minigame_forest", "halloween_25_diamond_shop_monster", 
    "halloween_25_event_chatroom_monster", "halloween_25_spider_minigame_tokio",
    
    // Forest rewards
    "forest_halloween_12", "forest_halloween_18_vip", "forest_halloween_17",
    "forest_halloween_20", "forest_halloween_29",

    // Beach rewards
    "beach_halloween_11", "beach_halloween_11_vip", "beach_halloween_16",
    "beach_halloween_22", "beach_halloween_24", "beach_halloween_27",

    // Plaza rewards
    "plaza_halloween_11", "plaza_halloween_15", "plaza_halloween_12_vip",
    "plaza_halloween_16_vip", "plaza_halloween_19_vip", "plaza_halloween_13",
    "plaza_halloween_19", "plaza_halloween_26", "plaza_halloween_30",

    // Event Chatroom rewards
    "event_chatroom_halloween_23", "event_chatroom_halloween_25_vip",
    "event_chatroom_halloween_19", "event_chatroom_halloween_25",
    "event_chatroom_halloween_14", "event_chatroom_halloween_31"
];

const DAILY_PICKUP_REWARDS = ["daily_pickup", "daily_pickup_vip"];

// Application state
let currentRegion = localStorage.getItem(STORAGE_KEYS.REGION) || 'us';
let profileData = null;
let targetProfiles = [];
let autoSendInterval = null;
let isProcessing = false;
let notificationCounter = 0;

// DressUp WebSocket state
let gameSocket = null;
let isConnecting = false;
let isConnected = false;
let autoScrollEnabled = true;
let logMessages = [];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    loadStoredData();
    setupEventListeners();
    updateUI();
});

function loadStoredData() {
    // Load profile data
    const storedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE_DATA);
    if (storedProfile) {
        profileData = JSON.parse(storedProfile);
        updateProfileStatus();
    }

    // Load target profiles
    const storedTargets = localStorage.getItem(STORAGE_KEYS.TARGET_PROFILES);
    if (storedTargets) {
        targetProfiles = JSON.parse(storedTargets);
        updateSavedProfilesList();
    }

    // Load region
    currentRegion = localStorage.getItem(STORAGE_KEYS.REGION) || 'us';
    updateRegionButtons();
}

function setupEventListeners() {
    // Region selection
    document.getElementById('selectUS').addEventListener('click', () => selectRegion('us'));
    document.getElementById('selectEU').addEventListener('click', () => selectRegion('eu'));

    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Daily task events
    document.getElementById('saveProfileBtn').addEventListener('click', saveProfileData);
    document.getElementById('clearProfileBtn').addEventListener('click', clearProfileData);
    document.getElementById('startDailyTaskBtn').addEventListener('click', startEnhancedDailyTasks);

    // Autograph events
    document.getElementById('addTargetBtn').addEventListener('click', addTargetProfile);
    document.getElementById('clearAllProfilesBtn').addEventListener('click', clearAllProfiles);
    document.getElementById('startAutographBtn').addEventListener('click', startAutograph);
    document.getElementById('autoSendBtn').addEventListener('click', toggleAutoSend);

    // DressUp events
    document.getElementById('connectBtn').addEventListener('click', connectToGameServer);
    document.getElementById('disconnectBtn').addEventListener('click', disconnectFromGameServer);
    document.getElementById('clearLogBtn').addEventListener('click', clearWebSocketLog);
    document.getElementById('autoScrollBtn').addEventListener('click', toggleAutoScroll);

    // Enter key support
    document.getElementById('targetProfileInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTargetProfile();
        }
    });
}

function selectRegion(region) {
    currentRegion = region;
    localStorage.setItem(STORAGE_KEYS.REGION, region);
    updateRegionButtons();
    showNotification(`Region changed to ${region.toUpperCase()}`, 'success');
    
    // Disconnect if connected to avoid region mismatch
    if (isConnected) {
        disconnectFromGameServer();
        showNotification('Disconnected due to region change', 'info');
    }
}

function updateRegionButtons() {
    const usBtn = document.getElementById('selectUS');
    const euBtn = document.getElementById('selectEU');
    
    if (currentRegion === 'us') {
        usBtn.classList.add('active');
        euBtn.classList.remove('active');
    } else {
        euBtn.classList.add('active');
        usBtn.classList.remove('active');
    }
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Update tab panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(tabName + 'Tab').classList.add('active');
}

function parseWebSocketData(input) {
    try {
        // Remove WebSocket message prefix if present
        let cleanInput = input.trim();
        if (cleanInput.startsWith('42[')) {
            cleanInput = cleanInput.substring(2);
        }
        
        const parsed = JSON.parse(cleanInput);
        if (Array.isArray(parsed) && parsed.length > 1) {
            const data = parsed[1];
            if (data.profileId && data.accessToken) {
                return {
                    profileId: data.profileId,
                    accessToken: data.accessToken
                };
            }
        }
        return null;
    } catch (error) {
        return null;
    }
}

function saveProfileData() {
    const rawInput = document.getElementById('rawInput').value.trim();
    if (!rawInput) {
        showNotification('Please enter the WebSocket message data', 'error');
        return;
    }

    const parsed = parseWebSocketData(rawInput);
    if (!parsed) {
        showNotification('Invalid data format. Please check your input.', 'error');
        return;
    }

    profileData = parsed;
    localStorage.setItem(STORAGE_KEYS.PROFILE_DATA, JSON.stringify(profileData));
    document.getElementById('rawInput').value = '';
    updateProfileStatus();
    updateUI();
    showNotification('Profile data saved successfully!', 'success');
}

function clearProfileData() {
    profileData = null;
    document.getElementById('rawInput').value = '';
    localStorage.removeItem(STORAGE_KEYS.PROFILE_DATA);
    updateProfileStatus();
    updateUI();
    showNotification('Profile data cleared', 'info');
    
    // Disconnect if connected
    if (isConnected) {
        disconnectFromGameServer();
    }
}

function updateProfileStatus() {
    const statusElement = document.getElementById('profileStatus');
    if (profileData) {
        statusElement.textContent = `Profile ID: ${profileData.profileId.substring(0, 8)}...`;
        statusElement.classList.remove('empty');
    } else {
        statusElement.textContent = 'No profile data saved';
        statusElement.classList.add('empty');
    }
}

function addTargetProfile() {
    const input = document.getElementById('targetProfileInput');
    const profileId = input.value.trim();
    
    if (!profileId) {
        showNotification('Please enter a target profile ID', 'error');
        return;
    }

    if (targetProfiles.includes(profileId)) {
        showNotification('Profile already exists', 'info');
        return;
    }

    targetProfiles.push(profileId);
    localStorage.setItem(STORAGE_KEYS.TARGET_PROFILES, JSON.stringify(targetProfiles));
    input.value = '';
    updateSavedProfilesList();
    updateUI();
    showNotification('Target profile added successfully', 'success');
}

function removeTargetProfile(profileId) {
    targetProfiles = targetProfiles.filter(id => id !== profileId);
    localStorage.setItem(STORAGE_KEYS.TARGET_PROFILES, JSON.stringify(targetProfiles));
    updateSavedProfilesList();
    updateUI();
    showNotification('Profile removed', 'info');
}

function clearAllProfiles() {
    targetProfiles = [];
    localStorage.removeItem(STORAGE_KEYS.TARGET_PROFILES);
    updateSavedProfilesList();
    updateUI();
    showNotification('All profiles cleared', 'info');
}

function updateSavedProfilesList() {
    const listContainer = document.getElementById('savedProfilesList');
    
    if (targetProfiles.length === 0) {
        listContainer.innerHTML = '<div class="empty-state">No saved profiles</div>';
        return;
    }

    listContainer.innerHTML = targetProfiles.map(profileId => `
        <div class="profile-item">
            <span>${profileId}</span>
            <button class="remove-btn" onclick="removeTargetProfile('${profileId}')">×</button>
        </div>
    `).join('');
}

function updateUI() {
    // Update daily task button
    const dailyBtn = document.getElementById('startDailyTaskBtn');
    dailyBtn.disabled = !profileData || isProcessing;

    // Update autograph buttons
    const startBtn = document.getElementById('startAutographBtn');
    const autoBtn = document.getElementById('autoSendBtn');
    const canUseAutograph = profileData && targetProfiles.length > 0;
    
    startBtn.disabled = !canUseAutograph;
    autoBtn.disabled = !canUseAutograph;

    // Update DressUp buttons
    updateDressUpUI();
}

function updateDressUpUI() {
    const connectBtn = document.getElementById('connectBtn');
    const disconnectBtn = document.getElementById('disconnectBtn');
    const connectionStatus = document.getElementById('connectionStatus');
    
    if (isConnected) {
        connectBtn.style.display = 'none';
        disconnectBtn.style.display = 'block';
        disconnectBtn.disabled = false;
        connectionStatus.textContent = 'Connected to Game Server';
        connectionStatus.className = 'status-text connected';
    } else if (isConnecting) {
        connectBtn.disabled = true;
        connectBtn.innerHTML = '<span class="icon">⏳</span>Connecting...';
        disconnectBtn.style.display = 'none';
        connectionStatus.textContent = 'Connecting...';
        connectionStatus.className = 'status-text connecting';
    } else {
        connectBtn.style.display = 'block';
        connectBtn.disabled = !profileData;
        connectBtn.innerHTML = '<span class="icon">🔗</span>Connect';
        disconnectBtn.style.display = 'none';
        connectionStatus.textContent = 'Not Connected';
        connectionStatus.className = 'status-text';
    }
}

// ENHANCED DAILY TASKS - Directly from JavaScript code with 15-second completion
async function startEnhancedDailyTasks() {
    if (!profileData || isProcessing) return;

    isProcessing = true;
    updateUI();
    
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressStatus = document.getElementById('progressStatus');
    
    progressContainer.style.display = 'block';
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    progressStatus.textContent = 'Starting enhanced daily tasks...';

    showNotification('Starting enhanced daily tasks...', 'info');

    const endpoints = API_ENDPOINTS[currentRegion];
    const headers = {
        authorization: `Bearer ${profileData.accessToken}`,
        "content-type": "application/json"
    };

    try {
        let completed = 0;
        let total = 0;

        // Calculate total tasks
        total += PET_IDS.length; // Pet interactions
        total += DAILY_QUEST_TYPES.length; // Daily quests
        total += DAILY_GIFT_QUESTS.length * 5; // Daily gift quests (5 each)
        total += HALLOWEEN_REWARDS.length * 5; // Halloween rewards (5 each)  
        total += DAILY_PICKUP_REWARDS.length * 5; // Daily pickup rewards (5 each)

        // Calculate delay to complete in 15 seconds
        const totalTime = 15000; // 15 seconds
        const delayPerTask = totalTime / total;

        const updateProgress = () => {
            const percentage = Math.round((completed / total) * 100);
            progressBar.style.width = percentage + '%';
            progressText.textContent = percentage + '%';
        };

        // 1. Pet interactions
        progressStatus.textContent = 'Processing pet interactions...';
        for (const petId of PET_IDS) {
            try {
                await fetch(`${endpoints.pets}/${petId}/interactions`, {
                    method: "POST",
                    headers,
                    body: JSON.stringify({ 
                        profileId: profileData.profileId, 
                        gameId: "j68d" 
                    })
                });
            } catch (error) {
                // Continue on error
            }
            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 2. Complete daily quests
        progressStatus.textContent = 'Completing daily quests...';
        for (const questType of DAILY_QUEST_TYPES) {
            try {
                await fetch(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${questType}/state`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Complete" })
                });
            } catch (error) {
                // Continue on error
            }
            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 3. Daily gift quests
        progressStatus.textContent = 'Processing gift quests...';
        for (const questId of DAILY_GIFT_QUESTS) {
            for (let i = 0; i < 5; i++) {
                try {
                    await fetch(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${questId}/progress`, {
                        method: "PUT",
                        headers,
                        body: JSON.stringify({ progress: 1 })
                    });
                } catch (error) {
                    // Continue on error
                }
                completed++;
                updateProgress();
                await delay(delayPerTask);
            }
        }

        // 4. Halloween rewards
        progressStatus.textContent = 'Claiming Halloween rewards...';
        for (const rewardId of HALLOWEEN_REWARDS) {
            for (let i = 0; i < 5; i++) {
                try {
                    await fetch(`${endpoints.rewards}/${profileData.profileId}/games/j68d/rewards/${rewardId}`, {
                        method: "PUT",
                        headers,
                        body: JSON.stringify({ state: "Claimed" })
                    });
                } catch (error) {
                    // Continue on error
                }
                completed++;
                updateProgress();
                await delay(delayPerTask);
            }
        }

        // 5. Daily pickup rewards
        progressStatus.textContent = 'Claiming daily pickup rewards...';
        for (const rewardId of DAILY_PICKUP_REWARDS) {
            for (let i = 0; i < 5; i++) {
                try {
                    await fetch(`${endpoints.rewards}/${profileData.profileId}/games/j68d/rewards/${rewardId}`, {
                        method: "PUT",
                        headers,
                        body: JSON.stringify({ state: "Claimed" })
                    });
                } catch (error) {
                    // Continue on error
                }
                completed++;
                updateProgress();
                await delay(delayPerTask);
            }
        }

        // 6. Additional quests (from the JavaScript code)
        progressStatus.textContent = 'Processing additional quests...';
        try {
            const questTypes = ["EventQuest", "StaticDailyQuest", "RandomDailyQuest"];
            const queryString = questTypes.map(type => `questType=${type}`).join("&");
            const url = `${endpoints.quests}/${profileData.profileId}/games/j68d/quests?${queryString}`;

            const response = await fetch(url, { headers });
            const questData = await response.json();

            if (questData?.quests) {
                const activeQuests = questData.quests.filter(quest => quest.state === "Active");

                for (const quest of activeQuests) {
                    try {
                        await fetch(
                            `${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${quest.definitionId}/progress`,
                            {
                                method: "PUT",
                                headers,
                                body: JSON.stringify({ progress: 1 })
                            }
                        );
                    } catch (error) {}

                    try {
                        await fetch(
                            `${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${quest.definitionId}/state`,
                            {
                                method: "PUT",
                                headers,
                                body: JSON.stringify({ state: "Complete" })
                            }
                        );
                    } catch (error) {}

                    // Handle child quests
                    if (quest.children?.length > 0) {
                        for (const child of quest.children) {
                            if (child.state === "Active") {
                                try {
                                    await fetch(
                                        `${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${child.definitionId}/progress`,
                                        {
                                            method: "PUT",
                                            headers,
                                            body: JSON.stringify({ progress: 1 })
                                        }
                                    );
                                } catch (error) {}

                                try {
                                    await fetch(
                                        `${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${child.definitionId}/state`,
                                        {
                                            method: "PUT",
                                            headers,
                                            body: JSON.stringify({ state: "Complete" })
                                        }
                                    );
                                } catch (error) {}
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Additional quests error:', error);
        }

        progressBar.style.width = '100%';
        progressText.textContent = '100%';
        progressStatus.textContent = 'All enhanced daily tasks completed!';
        showNotification('All enhanced daily tasks completed successfully!', 'success');

    } catch (error) {
        progressStatus.textContent = 'Error during execution';
        showNotification('Error during daily tasks execution', 'error');
        console.error('Daily tasks error:', error);
    } finally {
        isProcessing = false;
        updateUI();
        
        // Hide progress bar after 3 seconds
        setTimeout(() => {
            progressContainer.style.display = 'none';
        }, 3000);
    }
}

async function startAutograph() {
    if (!profileData || targetProfiles.length === 0) {
        showNotification('Please save profile data and add target profiles', 'error');
        return;
    }

    const greetingType = document.getElementById('greetingTypeSelector').value;
    showNotification(`Sending ${greetingType} to ${targetProfiles.length} profiles...`, 'info');
    
    let successCount = 0;

    for (const targetId of targetProfiles) {
        const success = await sendGreeting(targetId, greetingType);
        if (success) successCount++;
        
        const statusMessage = `[${new Date().toLocaleTimeString()}] ${greetingType} to ${targetId}: ${success ? 'Success' : 'Failed'}`;
        updateAutographStatus(statusMessage);
        
        await delay(500);
    }

    showNotification(`${greetingType} sending completed! (${successCount}/${targetProfiles.length})`, 'success');
}

function toggleAutoSend() {
    if (autoSendInterval) {
        stopAutoSend();
    } else {
        startAutoSend();
    }
}

function startAutoSend() {
    if (!profileData || targetProfiles.length === 0) {
        showNotification('Please save profile data and add target profiles', 'error');
        return;
    }

    const autoBtn = document.getElementById('autoSendBtn');
    autoBtn.classList.add('active');
    autoBtn.innerHTML = '<span class="icon">⏹️</span>Stop Auto';

    updateAutographStatus('Auto Send started - sending every 2 minutes');
    showNotification('Auto Send started', 'success');

    // Send immediately first
    startAutograph();

    // Then set interval for every 2 minutes
    autoSendInterval = setInterval(() => {
        startAutograph();
    }, 2 * 60 * 1000);
}

function stopAutoSend() {
    if (autoSendInterval) {
        clearInterval(autoSendInterval);
        autoSendInterval = null;
    }

    const autoBtn = document.getElementById('autoSendBtn');
    autoBtn.classList.remove('active');
    autoBtn.innerHTML = '<span class="icon">🔄</span>Auto Send';

    updateAutographStatus('Auto Send stopped');
    showNotification('Auto Send stopped', 'info');
}

async function sendGreeting(targetProfileId, greetingType) {
    if (!profileData) return false;

    const endpoints = API_ENDPOINTS[currentRegion];
    const payload = {
        id: "SendGreetings-159BDD7706D824BB8F14874A7FAE3368",
        variables: {
            greetingType,
            receiverProfileId: targetProfileId,
            ignoreDailyCap: false
        }
    };

    try {
        const response = await fetch(endpoints.federationgateway, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${profileData.accessToken}`
            },
            body: JSON.stringify(payload)
        });
        return response.ok;
    } catch (error) {
        return false;
    }
}

function updateAutographStatus(message) {
    const statusDiv = document.getElementById('autographStatus');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    statusDiv.appendChild(messageDiv);
    
    // Keep only last 10 messages
    while (statusDiv.children.length > 10) {
        statusDiv.removeChild(statusDiv.firstChild);
    }
    
    statusDiv.scrollTop = statusDiv.scrollHeight;
}

// DRESSUP WEBSOCKET FUNCTIONS
async function connectToGameServer() {
    if (!profileData || isConnecting || isConnected) return;

    isConnecting = true;
    updateDressUpUI();
    
    try {
        addToWebSocketLog('🔄 Requesting game server reservation...', 'info');
        showNotification('Connecting to game server...', 'info');

        const endpoints = API_ENDPOINTS[currentRegion];
        const payload = {
            "joinType": "FindRoomByType",
            "roomType": "quiz",
            "roomInstanceId": null,
            "parameters": {
                "LoadMode": "Asset",
                "Level": "",
                "Version": "551",
                "Culture": "tr-TR"
            }
        };

        const response = await fetch(endpoints.matchmaker, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!data.hostUrl) {
            throw new Error('No hostUrl received from server');
        }

        addToWebSocketLog(`✅ Server reservation received: ${data.hostUrl}`, 'success');
        addToWebSocketLog(`🎯 Room ID: ${data.roomId}`, 'info');

        // Connect to WebSocket
        await connectWebSocket(data.hostUrl);

    } catch (error) {
        isConnecting = false;
        updateDressUpUI();
        addToWebSocketLog(`❌ Connection failed: ${error.message}`, 'error');
        showNotification('Failed to connect to game server', 'error');
        console.error('Connection error:', error);
    }
}

function connectWebSocket(hostUrl) {
    return new Promise((resolve, reject) => {
        try {
            addToWebSocketLog(`🔗 Connecting to WebSocket: ${hostUrl}`, 'info');
            
            gameSocket = new WebSocket(hostUrl);

            const connectionTimeout = setTimeout(() => {
                gameSocket.close();
                reject(new Error('Connection timeout'));
            }, 10000); // 10 second timeout

            gameSocket.onopen = () => {
                clearTimeout(connectionTimeout);
                isConnecting = false;
                isConnected = true;
                updateDressUpUI();
                addToWebSocketLog('✅ WebSocket connected successfully!', 'success');
                showNotification('Connected to game server!', 'success');
                resolve();
            };

            gameSocket.onmessage = (event) => {
                handleWebSocketMessage(event.data);
            };

            gameSocket.onclose = (event) => {
                clearTimeout(connectionTimeout);
                isConnected = false;
                isConnecting = false;
                updateDressUpUI();
                
                const reason = event.reason || 'Unknown reason';
                addToWebSocketLog(`❌ WebSocket disconnected: ${reason} (Code: ${event.code})`, 'error');
                
                if (!event.wasClean) {
                    showNotification('Connection lost', 'error');
                }
            };

            gameSocket.onerror = (error) => {
                clearTimeout(connectionTimeout);
                isConnecting = false;
                updateDressUpUI();
                addToWebSocketLog('❌ WebSocket error occurred', 'error');
                reject(error);
            };

        } catch (error) {
            isConnecting = false;
            updateDressUpUI();
            reject(error);
        }
    });
}

function disconnectFromGameServer() {
    if (gameSocket) {
        gameSocket.close(1000, 'User disconnected');
        gameSocket = null;
    }
    
    isConnected = false;
    isConnecting = false;
    updateDressUpUI();
    addToWebSocketLog('🔌 Manually disconnected', 'info');
    showNotification('Disconnected from game server', 'info');
}

function handleWebSocketMessage(data) {
    const timestamp = new Date().toLocaleTimeString();
    
    // Check if it's a Socket.IO message
    if (data.startsWith('42[')) {
        // Parse the Socket.IO message
        try {
            const cleanData = data.substring(2); // Remove '42' prefix
            const parsed = JSON.parse(cleanData);
            const messageType = parsed[0];
            const messageContent = parsed[1];
            
            addToWebSocketLog(`📨 [${timestamp}] Received: ${messageType}`, 'receive');
            addToWebSocketLog(`📄 Content: ${JSON.stringify(messageContent, null, 2)}`, 'data');
        } catch (error) {
            addToWebSocketLog(`📨 [${timestamp}] Raw: ${data}`, 'receive');
        }
    } else {
        // Handle other message types (heartbeat, etc.)
        addToWebSocketLog(`📨 [${timestamp}] Raw: ${data}`, 'receive');
    }
}

function addToWebSocketLog(message, type = 'info') {
    const logContainer = document.getElementById('websocketLog');
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry log-${type}`;
    logEntry.textContent = message;
    
    logMessages.push({ message, type, timestamp: Date.now() });
    
    // Remove placeholder if exists
    const placeholder = logContainer.querySelector('.log-placeholder');
    if (placeholder) {
        placeholder.remove();
    }
    
    logContainer.appendChild(logEntry);
    
    // Keep only last 100 messages
    while (logContainer.children.length > 100) {
        logContainer.removeChild(logContainer.firstChild);
        logMessages.shift();
    }
    
    // Auto scroll if enabled
    if (autoScrollEnabled) {
        logContainer.scrollTop = logContainer.scrollHeight;
    }
}

function clearWebSocketLog() {
    const logContainer = document.getElementById('websocketLog');
    logContainer.innerHTML = '<div class="log-placeholder">Connection logs will appear here...</div>';
    logMessages = [];
    showNotification('WebSocket log cleared', 'info');
}

function toggleAutoScroll() {
    const autoScrollBtn = document.getElementById('autoScrollBtn');
    autoScrollEnabled = !autoScrollEnabled;
    
    if (autoScrollEnabled) {
        autoScrollBtn.classList.add('active');
        autoScrollBtn.setAttribute('data-enabled', 'true');
        autoScrollBtn.textContent = 'Auto Scroll';
        
        // Scroll to bottom
        const logContainer = document.getElementById('websocketLog');
        logContainer.scrollTop = logContainer.scrollHeight;
    } else {
        autoScrollBtn.classList.remove('active');
        autoScrollBtn.setAttribute('data-enabled', 'false');
        autoScrollBtn.textContent = 'Manual Scroll';
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    container.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }, 3000);
}

// Make functions globally accessible
window.removeTargetProfile = removeTargetProfile;
