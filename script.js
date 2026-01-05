// Storage keys
const STORAGE_KEYS = {
    PROFILE_DATA: 'msp2_profile_data',
    REGION: 'msp2_region',
    USER_DATA: 'msp2_user_data',
    GIFTS_DATA: 'msp2_gifts_data',
    LOGIN_ID: 'msp2_login_id',
    LANGUAGE: 'msp2_language',
    ZOOM_LEVEL: 'msp2_zoom_level',
    TOKEN_TIMESTAMP: 'msp2_token_timestamp',
    ACCOUNT_CREDENTIALS: 'msp2_account_credentials',
    FRIENDS_DATA: 'msp2_friends_data'
};

// Language translations
const TRANSLATIONS = {
    en: {
        title: 'MSP2 Tool - OBFX®',
        language: 'Language',
        zoom: 'Zoom',
        plan: 'Plan',
        autograph: 'Autograph',
        changePassword: 'Change Password',
        exit: 'Exit',
        welcomeTitle: 'Welcome to MSP2 Tool',
        welcomeSubtitle: 'Choose your login method',
        websocketLogin: 'WebSocket Login',
        accountLogin: 'Account Login',
        websocketPlaceholder: 'Paste WebSocket message here...',
        usernamePlaceholder: 'Username',
        passwordPlaceholder: 'Password',
        login: 'Login',
        querySent: 'Query sent...',
        approvedLogin: 'Approved Logging in...',
        banned: 'Banned!',
        bannedMessage: 'OBFX does not support login with this account',
        backToLogin: 'Back to Login',
        menu: 'Menu',
        changeMood: 'Change Mood',
        gender: 'Gender',
        gifts: 'Gifts',
        dailyTask: 'Daily Task',
        startEnhanced: 'Start Enhanced Daily Tasks',
        fastStart: 'Fast Start',
        applyMood: 'Apply Mood',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm New Password',
        cancel: 'Cancel',
        enterUsername: 'Enter username',
        findStart: 'Find & Start',
        stop: 'Stop',
        test: 'Test',
        totalFame: 'Total Fame:',
        close: 'Close',
        languageSelection: 'Language Selection',
        currentLanguage: 'Current Language:',
        zoomLevel: 'Zoom Level',
        selectRegion: 'Select Region',
        selectRegionDesc: 'Please select your region before logging in:',
        unitedStates: 'United States',
        europe: 'Europe',
        warning: 'Warning!',
        fastWarning1: 'Fast completion may lead to account suspension or ban.',
        startFastMode: 'Start Fast Mode',
        comments: 'Comments',
        noComments: 'No comments yet',
        status: 'Status',
        openAllGifts: 'Open All Gifts',
        sessionExpired: 'Session expired. Please login again.',
        tokenExpiring: 'Session will expire in 15 minutes.',
        loginSuccess: 'Login successful!',
        loginError: 'Login failed. Please check your credentials.',
        invalidCredentials: 'Invalid username or password.',
        connectionError: 'Connection error. Please try again.',
        friendsSettings: 'Friends Settings',
        friends: 'Friends',
        requestSenders: 'Request Senders',
        blocked: 'Blocked',
        deleteAll: 'Delete All',
        loadingFriends: 'Loading friends...',
        loadingRequests: 'Loading requests...',
        loadingBlocked: 'Loading blocked...',
        noFriends: 'No friends found',
        noRequests: 'No friend requests',
        noBlocked: 'No blocked users',
        level: 'Level',
        lastLogin: 'Last Login',
        remove: 'Remove',
        accept: 'Accept',
        reject: 'Reject',
        unblock: 'Unblock',
        dangerousAction: 'Dangerous Action!',
        deleteAllWarning: 'This action will remove ALL users from the selected category.',
        waitCountdown: 'Wait for countdown to finish...',
        yes: 'Yes',
        no: 'No',
        giftOpenSuccess: 'Gift opened successfully!',
        giftOpenError: 'Failed to open gift',
        giftOpening: 'Opening gift...',
        openingGifts: 'Opening gifts...',
        allGiftsOpened: 'All gifts opened successfully!',
        scammerTest: 'Scammer Test',
        securityStatus: 'Security Status',
        securitySafe: 'Safe',
        securitySuspicious: 'Suspicious',
        securityUnsafe: 'Unsafe',
        description: 'Description',
        loadingComments: 'Loading comments...',
        deletingComment: 'Deleting comment...',
        commentDeleted: 'Comment deleted successfully!',
        upgradeToObfxPlus: 'Upgrade to OBFX Plus',
        requiresLevel10OrPlus: 'Requires Level 10+ or OBFX Plus',
        planComparison: 'Plan Comparison',
        freePlan: 'Free Plan',
        plusPlan: 'OBFX Plus',
        recommended: 'Recommended',
        dailyTasksLevel10: 'Daily Tasks (Level 10+)',
        limitedMoods: 'Limited Moods (7)',
        noGifts: 'No Gifts Access',
        friendsManagement: 'Friends Management',
        unlimitedDailyTasks: 'Unlimited Daily Tasks',
        allMoods: 'All Moods (37)',
        giftsAccess: 'Full Gifts Access',
        advancedFriends: 'Advanced Friends',
        prioritySupport: 'Priority Support',
        fastFeatures: 'Fast Features',
        vipOnly: 'VIP Only'
    },
    tr: {
        title: 'MSP2 Aracı - OBFX®',
        language: 'Dil',
        zoom: 'Yakınlaştır',
        plan: 'Plan',
        autograph: 'İmza',
        changePassword: 'Şifre Değiştir',
        exit: 'Çıkış',
        welcomeTitle: 'MSP2 Aracına Hoş Geldiniz',
        welcomeSubtitle: 'Giriş yönteminizi seçin',
        websocketLogin: 'WebSocket Girişi',
        accountLogin: 'Hesap Girişi',
        websocketPlaceholder: 'WebSocket mesajını buraya yapıştırın...',
        usernamePlaceholder: 'Kullanıcı Adı',
        passwordPlaceholder: 'Şifre',
        login: 'Giriş Yap',
        querySent: 'Sorgu gönderildi...',
        approvedLogin: 'Onaylandı, giriş yapılıyor...',
        banned: 'Yasaklandınız!',
        bannedMessage: 'OBFX bu hesabı giriş yapmasını desteklemiyor',
        backToLogin: 'Giriş Ekranına Dön',
        menu: 'Menü',
        changeMood: 'Ruh Hali Değiştir',
        gender: 'Cinsiyet',
        gifts: 'Hediyeler',
        dailyTask: 'Günlük Görev',
        startEnhanced: 'Gelişmiş Günlük Görevleri Başlat',
        fastStart: 'Hızlı Başlat',
        applyMood: 'Ruh Halini Uygula',
        currentPassword: 'Mevcut Şifre',
        newPassword: 'Yeni Şifre',
        confirmPassword: 'Yeni Şifreyi Onayla',
        cancel: 'İptal',
        enterUsername: 'Kullanıcı adını girin',
        findStart: 'Bul ve Başlat',
        stop: 'Durdur',
        test: 'Test',
        totalFame: 'Toplam Şöhret:',
        close: 'Kapat',
        languageSelection: 'Dil Seçimi',
        currentLanguage: 'Mevcut Dil:',
        zoomLevel: 'Yakınlaştırma Seviyesi',
        selectRegion: 'Bölge Seç',
        selectRegionDesc: 'Giriş yapmadan önce lütfen bölgenizi seçin:',
        unitedStates: 'Amerika Birleşik Devletleri',
        europe: 'Avrupa',
        warning: 'Uyarı!',
        fastWarning1: 'Hızlı tamamlama hesap askıya alınmasına neden olabilir.',
        startFastMode: 'Hızlı Modu Başlat',
        comments: 'Yorumlar',
        noComments: 'Henüz yorum yok',
        status: 'Durum',
        openAllGifts: 'Tüm Hediyeleri Aç',
        sessionExpired: 'Oturum süresi doldu. Lütfen tekrar giriş yapın.',
        tokenExpiring: 'Oturum 15 dakika içinde sona erecek.',
        loginSuccess: 'Giriş başarılı!',
        loginError: 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.',
        invalidCredentials: 'Geçersiz kullanıcı adı veya şifre.',
        connectionError: 'Bağlantı hatası. Lütfen tekrar deneyin.',
        friendsSettings: 'Arkadaş Ayarları',
        friends: 'Arkadaşlar',
        requestSenders: 'İstek Gönderenler',
        blocked: 'Engellenenler',
        deleteAll: 'Tümünü Sil',
        loadingFriends: 'Arkadaşlar yükleniyor...',
        loadingRequests: 'İstekler yükleniyor...',
        loadingBlocked: 'Engellenenler yükleniyor...',
        noFriends: 'Arkadaş bulunamadı',
        noRequests: 'Arkadaşlık isteği yok',
        noBlocked: 'Engellenen kullanıcı yok',
        level: 'Seviye',
        lastLogin: 'Son Giriş',
        remove: 'Kaldır',
        accept: 'Kabul Et',
        reject: 'Reddet',
        unblock: 'Engeli Kaldır',
        dangerousAction: 'Tehlikeli Eylem!',
        deleteAllWarning: 'Bu eylem seçilen kategorideki TÜM kullanıcıları kaldıracak.',
        waitCountdown: 'Geri sayımın bitmesini bekleyin...',
        yes: 'Evet',
        no: 'Hayır',
        giftOpenSuccess: 'Hediye başarıyla açıldı!',
        giftOpenError: 'Hediye açılamadı',
        giftOpening: 'Hediye açılıyor...',
        openingGifts: 'Hediyeler açılıyor...',
        allGiftsOpened: 'Tüm hediyeler başarıyla açıldı!',
        scammerTest: 'Dolandırıcı Testi',
        securityStatus: 'Güvenlik Durumu',
        securitySafe: 'Güvenli',
        securitySuspicious: 'Şüpheli',
        securityUnsafe: 'Güvenli Değil',
        description: 'Açıklama',
        loadingComments: 'Yorumlar yükleniyor...',
        deletingComment: 'Yorum siliniyor...',
        commentDeleted: 'Yorum başarıyla silindi!',
        upgradeToObfxPlus: 'OBFX Plus\'a Yükselt',
        requiresLevel10OrPlus: 'Seviye 10+ veya OBFX Plus gerektirir',
        planComparison: 'Plan Karşılaştırması',
        freePlan: 'Ücretsiz Plan',
        plusPlan: 'OBFX Plus',
        recommended: 'Önerilen',
        dailyTasksLevel10: 'Günlük Görevler (Seviye 10+)',
        limitedMoods: 'Sınırlı Ruh Halleri (7)',
        noGifts: 'Hediye Erişimi Yok',
        friendsManagement: 'Arkadaş Yönetimi',
        unlimitedDailyTasks: 'Sınırsız Günlük Görevler',
        allMoods: 'Tüm Ruh Halleri (37)',
        giftsAccess: 'Tam Hediye Erişimi',
        advancedFriends: 'Gelişmiş Arkadaş Özellikleri',
        prioritySupport: 'Öncelikli Destek',
        fastFeatures: 'Hızlı Özellikler',
        vipOnly: 'Sadece VIP'
    },
    az: {
        title: 'MSP2 Aləti - OBFX®',
        language: 'Dil',
        zoom: 'Yaxınlaşdırma',
        plan: 'Plan',
        autograph: 'İmza',
        changePassword: 'Şifrəni Dəyiş',
        exit: 'Çıxış',
        welcomeTitle: 'MSP2 Alətinə Xoş Gəldiniz',
        welcomeSubtitle: 'Giriş üsulunuzu seçin',
        websocketLogin: 'WebSocket Girişi',
        accountLogin: 'Hesab Girişi',
        websocketPlaceholder: 'WebSocket mesajını bura yapışdırın...',
        usernamePlaceholder: 'İstifadəçi Adı',
        passwordPlaceholder: 'Şifrə',
        login: 'Giriş',
        querySent: 'Sorğu göndərildi...',
        approvedLogin: 'Təsdiqləndi, giriş edilir...',
        banned: 'Qadağan edildiniz!',
        bannedMessage: 'OBFX bu hesabla girişi dəstəkləmir',
        backToLogin: 'Giriş Ekranına Qayıt',
        menu: 'Menyu',
        changeMood: 'Əhval-Ruhiyyəni Dəyiş',
        gender: 'Cins',
        gifts: 'Hədiyyələr',
        dailyTask: 'Gündəlik Tapşırıq',
        startEnhanced: 'Təkmilləşdirilmiş Gündəlik Tapşırıqları Başlat',
        fastStart: 'Sürətli Başlat',
        applyMood: 'Əhval-Ruhiyyəni Tətbiq Et',
        currentPassword: 'Mövcud Şifrə',
        newPassword: 'Yeni Şifrə',
        confirmPassword: 'Yeni Şifrəni Təstiq Et',
        cancel: 'Ləğv Et',
        enterUsername: 'İstifadəçi adını daxil edin',
        findStart: 'Tap və Başlat',
        stop: 'Dayandır',
        test: 'Test',
        totalFame: 'Ümumi Şöhrət:',
        close: 'Bağla',
        languageSelection: 'Dil Seçimi',
        currentLanguage: 'Mövcud Dil:',
        zoomLevel: 'Yaxınlaşdırma Səviyyəsi',
        selectRegion: 'Region Seç',
        selectRegionDesc: 'Giriş etməzdən əvvəl regionunuzu seçin:',
        unitedStates: 'Amerika Birləşmiş Ştatları',
        europe: 'Avropa',
        warning: 'Xəbərdarlıq!',
        fastWarning1: 'Sürətli tamamlama hesabın askıya alınmasına səbəb ola bilər.',
        startFastMode: 'Sürətli Rejimi Başlat',
        comments: 'Şərhlər',
        noComments: 'Hələ şərh yoxdur',
        status: 'Vəziyyət',
        openAllGifts: 'Bütün Hədiyyələri Aç',
        sessionExpired: 'Sessiya müddəti bitdi. Təkrar giriş edin.',
        tokenExpiring: 'Sessiya 15 dəqiqədə sona çatacaq.',
        loginSuccess: 'Giriş uğurlu oldu!',
        loginError: 'Giriş uğursuz. Məlumatlarınızı yoxlayın.',
        invalidCredentials: 'Yanlış istifadəçi adı və ya şifrə.',
        connectionError: 'Bağlantı xətası. Təkrar cəhd edin.',
        friendsSettings: 'Dost Parametrləri',
        friends: 'Dostlar',
        requestSenders: 'İstək Göndərənlər',
        blocked: 'Əngəllənmiş',
        deleteAll: 'Hamısını Sil',
        loadingFriends: 'Dostlar yüklənir...',
        loadingRequests: 'İstəklər yüklənir...',
        loadingBlocked: 'Əngəllənmişlər yüklənir...',
        noFriends: 'Dost tapılmadı',
        noRequests: 'Dostluq istəyi yoxdur',
        noBlocked: 'Əngəllənmiş istifadəçi yoxdur',
        level: 'Səviyyə',
        lastLogin: 'Son Giriş',
        remove: 'Sil',
        accept: 'Qəbul Et',
        reject: 'Rədd Et',
        unblock: 'Əngəli Götür',
        dangerousAction: 'Təhlükəli Əməliyyat!',
        deleteAllWarning: 'Bu əməliyyat seçilən kateqoriyadakı BÜTÜN istifadəçiləri siləcək.',
        waitCountdown: 'Geri sayımın bitməsini gözləyin...',
        yes: 'Bəli',
        no: 'Xeyr',
        giftOpenSuccess: 'Hədiyyə uğurla açıldı!',
        giftOpenError: 'Hədiyyə açılmadı',
        giftOpening: 'Hədiyyə açılır...',
        openingGifts: 'Hədiyyələr açılır...',
        allGiftsOpened: 'Bütün hədiyyələr uğurla açıldı!',
        scammerTest: 'Fırıldaqçı Testi',
        securityStatus: 'Təhlükəsizlik Vəziyyəti',
        securitySafe: 'Təhlükəsiz',
        securitySuspicious: 'Şübhəli',
        securityUnsafe: 'Təhlükəsiz Deyil',
        description: 'Təsvir',
        loadingComments: 'Şərhlər yüklənir...',
        deletingComment: 'Şərh silinir...',
        commentDeleted: 'Şərh uğurla silindi!',
        upgradeToObfxPlus: 'OBFX Plus-a Yüksəlt',
        requiresLevel10OrPlus: 'Səviyyə 10+ və ya OBFX Plus tələb edir',
        planComparison: 'Plan Müqayisəsi',
        freePlan: 'Pulsuz Plan',
        plusPlan: 'OBFX Plus',
        recommended: 'Tövsiyə olunur',
        dailyTasksLevel10: 'Gündəlik Tapşırıqlar (Səviyyə 10+)',
        limitedMoods: 'Məhdud Əhval-Ruhiyyələr (7)',
        noGifts: 'Hədiyyə Girişi Yoxdur',
        friendsManagement: 'Dost İdarəetməsi',
        unlimitedDailyTasks: 'Məhdudiyyətsiz Gündəlik Tapşırıqlar',
        allMoods: 'Bütün Əhval-Ruhiyyələr (37)',
        giftsAccess: 'Tam Hədiyyə Girişi',
        advancedFriends: 'Təkmil Dost Xüsusiyyətləri',
        prioritySupport: 'Prioritet Dəstəyi',
        fastFeatures: 'Sürətli Xüsusiyyətlər',
        vipOnly: 'Yalnız VIP'
    }
};

// API Endpoints
const API_ENDPOINTS = {
    us: {
        federationgateway: 'https://us.mspapis.com/federationgateway/graphql',
        pets: 'https://us.mspapis.com/pets/v1/pets',
        quests: 'https://us.mspapis.com/quests/v2/profiles',
        rewards: 'https://us.mspapis.com/timelimitedrewards/v2/profiles',
        edgerelationships: 'https://us.mspapis.com/edgerelationships/graphql',
        experience: 'https://us.mspapis.com/experience/v1/profiles',
        profilerelationships: 'https://us.mspapis.com/profilerelationships/v2/profiles',
        profileidentity: 'https://us.mspapis.com/profileidentity/v1',
        edgeprofile: 'https://us.mspapis.com/edgeprofile/graphql',
        profileattributes: 'https://us.mspapis.com/profileattributes/v1/profiles',
        edgegifts: 'https://us.mspapis.com/edgegifts/graphql',
        edgecomments: 'https://us.mspapis.com/edgecomments/graphql'
    },
    eu: {
        federationgateway: 'https://eu.mspapis.com/federationgateway/graphql',
        pets: 'https://eu.mspapis.com/pets/v1/pets',
        quests: 'https://eu.mspapis.com/quests/v2/profiles',
        rewards: 'https://eu.mspapis.com/timelimitedrewards/v2/profiles',
        edgerelationships: 'https://eu.mspapis.com/edgerelationships/graphql',
        experience: 'https://eu.mspapis.com/experience/v1/profiles',
        profilerelationships: 'https://eu.mspapis.com/profilerelationships/v2/profiles',
        profileidentity: 'https://eu.mspapis.com/profileidentity/v1',
        edgeprofile: 'https://eu.mspapis.com/edgeprofile/graphql',
        profileattributes: 'https://eu.mspapis.com/profileattributes/v1/profiles',
        edgegifts: 'https://eu.mspapis.com/edgegifts/graphql',
        edgecomments: 'https://eu.mspapis.com/edgecomments/graphql'
    }
};

// Account login API URL
const ACCOUNT_API_URL = 'https://api-login-ltur.onrender.com';

// Game data
const PET_IDS = [
    "c55e18991cf44659a99e6347de2fc96f", "cf0589ffe9ed45369d70dcaaa9aa1db2",
    "6ca07ffa53e3468598e6f2a2e0d20ded", "d92645e7672142028f2731aeda6e8e6f",
    "055ec44d4489440e95ae07134b3b9b3e", "cf42a511688e49f795e387d43a78c758"
];

const DAILY_QUEST_TYPES = ["daily_pet_pets", "daily_spend_starcoins", "daily_spend_diamonds"];
const DAILY_GIFT_QUESTS = ["daily_open_gift_vip", "daily_open_gift_normal"];
const DAILY_PICKUP_REWARDS = ["daily_pickup", "daily_pickup_vip"];

// Mood list (cleaned & sorted by year: old → new)
const MOOD_LIST = [
    // Free moods (available for everyone)
    "cool_slide",
    "bambislide", 
    "noshoes_skating",
    "bunny_hold",
    "swim_new",
    "2023_spidercrawl_lsz",
    "2023_bended_lz",
    
    // Premium moods (require OBFX Plus)
    "spicyaftershave",
    "iceskate_ballerina",
    "im_in_love",
    "mood",
    "eparty_2022_walking_tired_dg",
    "xmas_2022_frosty_dg",
    "2022_easter_sackjump_dg",
    "2022_turkeywalk_lsz",
    "xmas_2022_freezing_lsz",
    "bad_2022_teenwalk_dg",
    "very_2022_froglike_lsz",
    "yule_2024_inthemist_lsz",
    "rare_2024_dance7_dg",
    "xmas_2024_skiing_lsz",
    "xmas_2024_snowboarding_lsz",
    "2024_snowballroll_lsz",
    "joy_2024_inthesnow_lsz",
    "dream_2024_onthemoon_lsz",
    "badd_2025_skateboardanim_lsz",
    "english_2025_glitter_lsz",
    "2025_loveclouds_lsz",
    "fuzz_2025_pillowanim_lsz",
    "velvet_2025_dragonfly_lsz",
    "default_sparkle_2025_lsz",
    "cinna_2025_wind_lsz",
    "cinna_2025_rainshield_dg",
    "bigcity_2025_stomping_lsz",
    "xmas_2025_crazyskiing_ls",
    "summer_2025_cabinbag_lsz",
    "easter_2025_rabbitjump_dg"
];

// Free moods list
const FREE_MOODS = ["cool_slide", "bambislide", "noshoes_skating", "bunny_hold", "swim_new", "2023_spidercrawl_lsz", "2023_bended_lz"];

// Application state
let currentRegion = 'us';
let currentLanguage = 'en';
let profileData = null;
let userData = null;
let giftsData = [];
let friendsData = { relationships: [], requestsIn: [], blocked: [] };
let isProcessing = false;
let currentGender = 'Boy';
let currentMoodIndex = 0;
let loginId = null;
let currentZoom = 1.0;
let currentWaydId = null;
let currentCommentsData = [];
let currentLoginMethod = 'websocket';
let savedCredentials = null;
let bannedIds = [];
let scammerData = [];
let plusIds = [];
let currentUserPlan = 'Free';

// Friends Settings state
let currentFriendsTab = 'friends';
let filteredFriendsData = { friends: [], requests: [], blocked: [] };
let friendsProfiles = {};
let currentFriendsPage = 0;
let currentRequestsPage = 0;
let currentBlockedPage = 0;
const FRIENDS_PER_PAGE = 10;
let isVipFilterActive = false;

// Token management
let tokenTimestamp = null;
let tokenExpiryTimer = null;
let tokenWarningTimer = null;

// Autograph state
let currentTargetProfileId = null;
let currentTargetUsername = null;
let autoSendInterval = null;
let isAutoGreeting = false;
let greetingStats = { count: 0, type: 'Autograph' };

// Gift opening state
let isOpeningGifts = false;

// Comments state
let allComments = [];
let currentCommentsPage = 0;
const COMMENTS_PER_PAGE = 10;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    loadStoredData();
    setupEventListeners();
    loadLanguage();
    loadZoom();
    loadBannedIds();
    loadScammerData();
    loadPlusIds();
});

async function loadPlusIds() {
    try {
        const response = await fetch('plus.txt');
        if (response.ok) {
            const text = await response.text();
            plusIds = text.split('\n').map(id => id.trim()).filter(id => id.length > 0);
        }
    } catch (error) {
        console.log('No plus.txt file found');
        plusIds = [];
    }
}

function checkUserPlan(profileId) {
    return plusIds.includes(profileId) ? 'Plus' : 'Free';
}

function updateUserPlan() {
    if (profileData && profileData.profileId) {
        currentUserPlan = checkUserPlan(profileData.profileId);
        const planElement = document.getElementById('userPlan');
        if (planElement) {
            planElement.textContent = currentUserPlan;
            planElement.className = `user-plan ${currentUserPlan.toLowerCase()}`;
        }
        
        // Update UI based on plan
        updateFeatureAccess();
    }
}

function updateFeatureAccess() {
    const userLevel = userData && userData.experience ? userData.experience.level : 1;
    const hasAccess = currentUserPlan === 'Plus' || userLevel >= 10;
    
    // Daily tasks access
    const dailyTaskOverlay = document.getElementById('dailyTaskPremiumOverlay');
    const fastStartOverlay = document.getElementById('fastStartPremiumOverlay');
    
    if (dailyTaskOverlay && fastStartOverlay) {
        if (hasAccess) {
            dailyTaskOverlay.style.display = 'none';
            fastStartOverlay.style.display = 'none';
        } else {
            dailyTaskOverlay.style.display = 'flex';
            fastStartOverlay.style.display = 'flex';
        }
    }
    
    // Gifts access (Plus only)
    const giftsOverlay = document.getElementById('giftsPremiumOverlay');
    if (giftsOverlay) {
        if (currentUserPlan === 'Plus') {
            giftsOverlay.style.display = 'none';
        } else {
            giftsOverlay.style.display = 'flex';
        }
    }
    
    // Friends Settings access - Premium tabs
    const requestsOverlay = document.getElementById('requestsTabPremiumOverlay');
    const blockedOverlay = document.getElementById('blockedTabPremiumOverlay');
    const vipFilterOverlay = document.getElementById('vipFilterPremiumOverlay');
    
    if (currentUserPlan === 'Plus') {
        if (requestsOverlay) requestsOverlay.style.display = 'none';
        if (blockedOverlay) blockedOverlay.style.display = 'none';
        if (vipFilterOverlay) vipFilterOverlay.style.display = 'none';
    } else {
        if (requestsOverlay) requestsOverlay.style.display = 'flex';
        if (blockedOverlay) blockedOverlay.style.display = 'flex';
        if (vipFilterOverlay) vipFilterOverlay.style.display = 'flex';
    }
    
    // Update mood restrictions
    updateMoodDisplay();
}

function canUseFeature(featureType) {
    const userLevel = userData && userData.experience ? userData.experience.level : 1;
    
    switch (featureType) {
        case 'dailyTasks':
            return currentUserPlan === 'Plus' || userLevel >= 10;
        case 'gifts':
            return currentUserPlan === 'Plus';
        case 'friendsAdvanced':
            return currentUserPlan === 'Plus';
        case 'mood':
            return true; // Everyone can access mood, but limited for free users
        default:
            return true;
    }
}

function showAccessDeniedNotification(featureType) {
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    const userLevel = userData && userData.experience ? userData.experience.level : 1;
    
    if (currentUserPlan === 'Free' && userLevel < 10) {
        showNotification(translations.requiresLevel10OrPlus, 'warning');
    } else {
        showNotification(translations.upgradeToObfxPlus, 'warning');
    }
}

async function loadScammerData() {
    try {
        const response = await fetch('scammer.json');
        if (response.ok) {
            scammerData = await response.json();
        }
    } catch (error) {
        console.error('Error loading scammer data:', error);
        scammerData = [];
    }
}

async function loadBannedIds() {
    try {
        const response = await fetch('banned.txt');
        if (response.ok) {
            const text = await response.text();
            bannedIds = text.split('\n').map(id => id.trim()).filter(id => id.length > 0);
        }
    } catch (error) {
        console.log('No banned.txt file found');
        bannedIds = [];
    }
}

function loadStoredData() {
    // Load stored language first
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        applyLanguage(currentLanguage);
    }

    // Load stored zoom level
    const savedZoom = localStorage.getItem(STORAGE_KEYS.ZOOM_LEVEL);
    if (savedZoom) {
        currentZoom = parseFloat(savedZoom);
        applyZoom(currentZoom);
    }

    // Load stored region
    const savedRegion = localStorage.getItem(STORAGE_KEYS.REGION);
    if (savedRegion) {
        currentRegion = savedRegion;
    }

    // Load stored credentials
    const storedCredentials = localStorage.getItem(STORAGE_KEYS.ACCOUNT_CREDENTIALS);
    if (storedCredentials) {
        try {
            savedCredentials = JSON.parse(storedCredentials);
        } catch (error) {
            savedCredentials = null;
        }
    }

    // Load stored friends data
    const storedFriendsData = localStorage.getItem(STORAGE_KEYS.FRIENDS_DATA);
    if (storedFriendsData) {
        try {
            friendsData = JSON.parse(storedFriendsData);
        } catch (error) {
            friendsData = { relationships: [], requestsIn: [], blocked: [] };
        }
    }

    // Load stored profile data and check token expiry
    const storedData = localStorage.getItem(STORAGE_KEYS.PROFILE_DATA);
    const storedTimestamp = localStorage.getItem(STORAGE_KEYS.TOKEN_TIMESTAMP);
    
    if (storedData && storedTimestamp) {
        const currentTime = Date.now();
        const tokenAge = currentTime - parseInt(storedTimestamp);
        const THREE_HOURS = 3 * 60 * 60 * 1000;
        
        if (tokenAge >= THREE_HOURS) {
            handleTokenExpiry();
            return;
        }
        
        profileData = JSON.parse(storedData);
        tokenTimestamp = parseInt(storedTimestamp);
        
        // Load stored login ID
        const storedLoginId = localStorage.getItem(STORAGE_KEYS.LOGIN_ID);
        if (storedLoginId) {
            loginId = storedLoginId;
        }
        
        // Set up expiry timers
        setupTokenExpiryTimers(tokenAge);
        
        // Auto load user data and show main menu
        showLoadingScreen();
        setTimeout(() => {
            showSuccessScreen();
            setTimeout(() => {
                loadUserData();
            }, 2000);
        }, 800);
    }
}

function setupTokenExpiryTimers(existingTokenAge = 0) {
    const THREE_HOURS = 3 * 60 * 60 * 1000;
    const FIFTEEN_MINUTES = 15 * 60 * 1000;
    
    const remainingTime = THREE_HOURS - existingTokenAge;
    const warningTime = remainingTime - FIFTEEN_MINUTES;
    
    if (tokenExpiryTimer) clearTimeout(tokenExpiryTimer);
    if (tokenWarningTimer) clearTimeout(tokenWarningTimer);
    
    if (warningTime > 0) {
        tokenWarningTimer = setTimeout(() => {
            const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
            showNotification(translations.tokenExpiring, 'warning');
        }, warningTime);
    }
    
    if (remainingTime > 0) {
        tokenExpiryTimer = setTimeout(() => {
            handleTokenExpiry();
        }, remainingTime);
    }
}

function handleTokenExpiry() {
    if (tokenExpiryTimer) clearTimeout(tokenExpiryTimer);
    if (tokenWarningTimer) clearTimeout(tokenWarningTimer);
    
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    showNotification(translations.sessionExpired, 'error');
    
    handleExit();
}

function checkTokenValidity() {
    if (!tokenTimestamp) return false;
    
    const currentTime = Date.now();
    const tokenAge = currentTime - tokenTimestamp;
    const THREE_HOURS = 3 * 60 * 60 * 1000;
    
    return tokenAge < THREE_HOURS;
}

async function makeAuthenticatedRequest(url, options = {}) {
    if (!checkTokenValidity()) {
        handleTokenExpiry();
        throw new Error('Token expired');
    }
    
    try {
        const response = await fetch(url, options);
        
        if (response.status === 401) {
            handleTokenExpiry();
            throw new Error('Unauthorized - Token expired');
        }
        
        return response;
    } catch (error) {
        if (error.message.includes('Token expired') || error.message.includes('Unauthorized')) {
            handleTokenExpiry();
        }
        throw error;
    }
}

function setupEventListeners() {
    // Login method selection
    document.getElementById('websocketMethodBtn').addEventListener('click', () => switchLoginMethod('websocket'));
    document.getElementById('accountMethodBtn').addEventListener('click', () => switchLoginMethod('account'));

    // Login buttons
    document.getElementById('websocketLoginBtn').addEventListener('click', showRegionDialog);
    document.getElementById('accountLoginBtn').addEventListener('click', showAccountRegionDialog);
    
    // Enter key handling for inputs
    document.getElementById('websocketInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') showRegionDialog();
    });

    document.getElementById('usernameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') showAccountRegionDialog();
    });

    document.getElementById('passwordInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') showAccountRegionDialog();
    });

    // Region dialog
    document.getElementById('regionUS').addEventListener('click', () => confirmRegion('us'));
    document.getElementById('regionEU').addEventListener('click', () => confirmRegion('eu'));

    // Banned screen
    document.getElementById('bannedBackBtn').addEventListener('click', () => {
        hideAllScreens();
        document.getElementById('loginScreen').style.display = 'flex';
    });

    // Daily task with access control
    document.getElementById('startDailyTaskBtn').addEventListener('click', () => {
        if (canUseFeature('dailyTasks')) {
            startEnhancedDailyTasks();
        } else {
            showAccessDeniedNotification('dailyTasks');
        }
    });
    
    document.getElementById('fastStartDailyTaskBtn').addEventListener('click', () => {
        if (canUseFeature('dailyTasks')) {
            showFastStartDialog();
        } else {
            showAccessDeniedNotification('dailyTasks');
        }
    });

    // Gifts with access control
    document.getElementById('giftsBtn').addEventListener('click', () => {
        if (canUseFeature('gifts')) {
            showGifts();
        } else {
            showAccessDeniedNotification('gifts');
        }
    });

    // Fast start dialog
    document.getElementById('cancelFastStartBtn').addEventListener('click', hideFastStartDialog);
    document.getElementById('confirmFastStartBtn').addEventListener('click', startFastDailyTasks);

    // Other event listeners...
    document.getElementById('autographBtn').addEventListener('click', showAutograph);
    document.getElementById('closeAutographBtn').addEventListener('click', hideAutograph);
    document.getElementById('startAutogreetBtn').addEventListener('click', handleAutogreetFromInput);
    document.getElementById('stopAutogreetBtn').addEventListener('click', stopAutoGreeting);

    document.getElementById('changeMoodBtn').addEventListener('click', showChangeMood);
    document.getElementById('changeGenderBtn').addEventListener('click', changeGender);
    document.getElementById('closeMoodBtn').addEventListener('click', () => showMainMenu());

    document.getElementById('prevMoodBtn').addEventListener('click', () => changeMoodIndex(-1));
    document.getElementById('nextMoodBtn').addEventListener('click', () => changeMoodIndex(1));
    document.getElementById('applyMoodBtn').addEventListener('click', applySelectedMood);

    document.getElementById('changePasswordBtn').addEventListener('click', showChangePassword);
    document.getElementById('closePasswordBtn').addEventListener('click', () => showMainMenu());
    document.getElementById('cancelPasswordBtn').addEventListener('click', () => showMainMenu());
    document.getElementById('submitPasswordBtn').addEventListener('click', handlePasswordChange);

    document.getElementById('commentsBtn').addEventListener('click', showComments);
    document.getElementById('closeCommentsBtn').addEventListener('click', () => showMainMenu());
    document.getElementById('prevCommentsBtn').addEventListener('click', () => changeCommentsPage(-1));
    document.getElementById('nextCommentsBtn').addEventListener('click', () => changeCommentsPage(1));

    document.getElementById('scammerTestBtn').addEventListener('click', showScammerTest);
    document.getElementById('closeScammerTestBtn').addEventListener('click', () => showMainMenu());
    document.getElementById('scammerTestUsernameInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleScammerTestInput();
    });
    document.getElementById('testScammerBtn').addEventListener('click', handleScammerTestInput);

    document.getElementById('friendsSettingsBtn').addEventListener('click', showFriendsSettings);
    document.getElementById('closeFriendsBtn').addEventListener('click', () => showMainMenu());

    document.getElementById('friendsTab').addEventListener('click', () => switchFriendsTab('friends'));
    document.getElementById('requestsTab').addEventListener('click', () => switchFriendsTab('requests'));
    document.getElementById('blockedTab').addEventListener('click', () => switchFriendsTab('blocked'));

    document.getElementById('levelFilter').addEventListener('input', applyFriendsFilters);
    document.getElementById('vipFilterBtn').addEventListener('click', toggleVipFilter);
    document.getElementById('deleteAllBtn').addEventListener('click', showDeleteAllDialog);

    // Friends pagination
    document.getElementById('prevFriendsBtn').addEventListener('click', () => changeFriendsPage('friends', -1));
    document.getElementById('nextFriendsBtn').addEventListener('click', () => changeFriendsPage('friends', 1));
    document.getElementById('prevRequestsBtn').addEventListener('click', () => changeFriendsPage('requests', -1));
    document.getElementById('nextRequestsBtn').addEventListener('click', () => changeFriendsPage('requests', 1));
    document.getElementById('prevBlockedBtn').addEventListener('click', () => changeFriendsPage('blocked', -1));
    document.getElementById('nextBlockedBtn').addEventListener('click', () => changeFriendsPage('blocked', 1));

    document.getElementById('cancelDeleteAllBtn').addEventListener('click', hideDeleteAllDialog);
    document.getElementById('confirmDeleteAllBtn').addEventListener('click', confirmDeleteAll);

    document.getElementById('closeGiftsBtn').addEventListener('click', () => showMainMenu());
    document.getElementById('openAllGiftsBtn').addEventListener('click', openAllGifts);

    document.getElementById('closeReceiptBtn').addEventListener('click', closeReceipt);

    document.getElementById('languageBtn').addEventListener('click', showLanguageDialog);
    document.getElementById('closeLanguageBtn').addEventListener('click', hideLanguageDialog);
    document.getElementById('englishBtn').addEventListener('click', () => switchLanguage('en'));
    document.getElementById('turkishBtn').addEventListener('click', () => switchLanguage('tr'));
    document.getElementById('azerbaijaniBtn').addEventListener('click', () => switchLanguage('az'));

    document.getElementById('planBtn').addEventListener('click', showPlanDialog);
    document.getElementById('closePlanBtn').addEventListener('click', hidePlanDialog);

    document.getElementById('zoomBtn').addEventListener('click', showZoomDialog);
    document.getElementById('closeZoomBtn').addEventListener('click', hideZoomDialog);
    document.getElementById('zoomInBtn').addEventListener('click', zoomIn);
    document.getElementById('zoomOutBtn').addEventListener('click', zoomOut);

    document.querySelectorAll('.zoom-preset').forEach(btn => {
        btn.addEventListener('click', function() {
            const zoomValue = parseFloat(this.dataset.zoom);
            setZoom(zoomValue);
        });
    });

    document.getElementById('exitBtn').addEventListener('click', handleExit);
}

// VIP Filter Functions
function toggleVipFilter() {
    if (currentUserPlan !== 'Plus') {
        showAccessDeniedNotification('friendsAdvanced');
        return;
    }
    
    isVipFilterActive = !isVipFilterActive;
    const btn = document.getElementById('vipFilterBtn');
    
    if (isVipFilterActive) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
    
    applyFriendsFilters();
}

// Friends Pagination Functions
function changeFriendsPage(tab, direction) {
    switch (tab) {
        case 'friends':
            currentFriendsPage += direction;
            break;
        case 'requests':
            currentRequestsPage += direction;
            break;
        case 'blocked':
            currentBlockedPage += direction;
            break;
    }
    
    applyFriendsFilters();
}

function updateFriendsPagination(data, tab) {
    const totalPages = Math.ceil(data.length / FRIENDS_PER_PAGE);
    let currentPage;
    let paginationElement;
    let pageInfoElement;
    let prevBtn;
    let nextBtn;
    
    switch (tab) {
        case 'friends':
            currentPage = currentFriendsPage;
            paginationElement = document.getElementById('friendsPagination');
            pageInfoElement = document.getElementById('friendsPageInfo');
            prevBtn = document.getElementById('prevFriendsBtn');
            nextBtn = document.getElementById('nextFriendsBtn');
            break;
        case 'requests':
            currentPage = currentRequestsPage;
            paginationElement = document.getElementById('requestsPagination');
            pageInfoElement = document.getElementById('requestsPageInfo');
            prevBtn = document.getElementById('prevRequestsBtn');
            nextBtn = document.getElementById('nextRequestsBtn');
            break;
        case 'blocked':
            currentPage = currentBlockedPage;
            paginationElement = document.getElementById('blockedPagination');
            pageInfoElement = document.getElementById('blockedPageInfo');
            prevBtn = document.getElementById('prevBlockedBtn');
            nextBtn = document.getElementById('nextBlockedBtn');
            break;
    }
    
    // Ensure current page is within bounds
    if (currentPage >= totalPages) {
        currentPage = Math.max(0, totalPages - 1);
        switch (tab) {
            case 'friends': currentFriendsPage = currentPage; break;
            case 'requests': currentRequestsPage = currentPage; break;
            case 'blocked': currentBlockedPage = currentPage; break;
        }
    } else if (currentPage < 0) {
        currentPage = 0;
        switch (tab) {
            case 'friends': currentFriendsPage = currentPage; break;
            case 'requests': currentRequestsPage = currentPage; break;
            case 'blocked': currentBlockedPage = currentPage; break;
        }
    }
    
    if (totalPages > 1) {
        paginationElement.style.display = 'flex';
        pageInfoElement.textContent = `${currentPage + 1} / ${totalPages}`;
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage >= totalPages - 1;
    } else {
        paginationElement.style.display = 'none';
    }
}

// Plan dialog functions
function showPlanDialog() {
    document.getElementById('planDialog').style.display = 'flex';
}

function hidePlanDialog() {
    document.getElementById('planDialog').style.display = 'none';
}

// Fast Start Dialog Functions
function showFastStartDialog() {
    document.getElementById('fastStartDialog').style.display = 'flex';
}

function hideFastStartDialog() {
    document.getElementById('fastStartDialog').style.display = 'none';
}

// Scammer Test Functions
function showScammerTest() {
    hideAllScreens();
    document.getElementById('scammerTestScreen').style.display = 'block';
    
    // Clear previous results
    document.getElementById('scammerTestUsernameInput').value = '';
    document.getElementById('scammerTestResult').style.display = 'none';
}

async function handleScammerTestInput() {
    const username = document.getElementById('scammerTestUsernameInput').value.trim();
    
    if (!username) {
        showNotification('Please enter a username', 'error');
        document.getElementById('scammerTestResult').style.display = 'none';
        return;
    }

    const profileId = await findProfileId(username);
    if (!profileId) {
        showNotification(`User ${username} not found`, 'error');
        document.getElementById('scammerTestResult').style.display = 'none';
        return;
    }

    // Show user profile
    const avatarUrl = await generateLatestAvatarUrl(profileId);
    document.getElementById('scammerUserAvatar').src = avatarUrl;
    document.getElementById('scammerUsername').textContent = username;
    
    // Check scammer status
    const scammerInfo = scammerData.find(item => item.id === profileId);
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    
    if (scammerInfo) {
        const colorClass = getSecurityColorClass(scammerInfo.güvenlik);
        const statusText = getSecurityStatusText(scammerInfo.güvenlik);
        
        document.getElementById('securityColor').className = `security-color ${colorClass}`;
        document.getElementById('securityText').textContent = statusText;
        document.getElementById('securityDescription').textContent = scammerInfo.açıklama;
    } else {
        document.getElementById('securityColor').className = 'security-color green';
        document.getElementById('securityText').textContent = translations.securitySafe || 'Safe';
        document.getElementById('securityDescription').textContent = 'No security issues reported for this user.';
    }
    
    document.getElementById('scammerTestResult').style.display = 'block';
}

function getSecurityColorClass(status) {
    switch (status) {
        case 'yeşil': return 'green';
        case 'sarı': return 'yellow';
        case 'kırmızı': return 'red';
        default: return 'green';
    }
}

function getSecurityStatusText(status) {
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    
    switch (status) {
        case 'yeşil': return translations.securitySafe || 'Safe';
        case 'sarı': return translations.securitySuspicious || 'Suspicious';
        case 'kırmızı': return translations.securityUnsafe || 'Unsafe';
        default: return translations.securitySafe || 'Safe';
    }
}

// Comments Functions
async function showComments() {
    hideAllScreens();
    document.getElementById('commentsScreen').style.display = 'block';
    
    // Reset pagination
    currentCommentsPage = 0;
    allComments = [];
    
    // Load comments
    await loadAllComments();
    displayComments();
}

async function loadAllComments() {
    if (!profileData || !currentWaydId) {
        const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
        document.getElementById('commentsList').innerHTML = `<div class="no-comments">${translations.noComments}</div>`;
        return;
    }

    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    document.getElementById('commentsList').innerHTML = `<div class="loading-comments">${translations.loadingComments}</div>`;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        let allLoadedComments = [];
        let cursor = "";
        let hasMore = true;

        while (hasMore) {
            const response = await makeAuthenticatedRequest(endpoints.edgecomments, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${profileData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `query GetComments($gameId: String!, $threadId: ID!, $entityType: EntityType!, $profileId: ID!, $pageSize: Int, $cursor: String) {
                        comments(threadId: $threadId, entityType: $entityType, pageSize: $pageSize, cursor: $cursor) {
                            comments {
                                commentId
                                author
                                text
                                created
                                deleted
                                profile {
                                    id
                                    name
                                    membership {
                                        lastTierExpiry
                                        lastTierSecondsLeft
                                    }
                                    avatar(preferredGameId: $gameId) {
                                        gameId
                                    }
                                }
                                reactions(profileId: $profileId) {
                                    reactionTypeId
                                    reacted
                                    count
                                }
                            }
                            cursor
                        }
                    }`,
                    variables: JSON.stringify({
                        gameId: "j68d",
                        threadId: currentWaydId,
                        entityType: "UGC",
                        profileId: profileData.profileId,
                        pageSize: 30,
                        cursor: cursor
                    })
                })
            });

            if (response.ok) {
                const data = await response.json();
                if (data.data && data.data.comments) {
                    const comments = data.data.comments.comments || [];
                    allLoadedComments = allLoadedComments.concat(comments);
                    
                    cursor = data.data.comments.cursor;
                    hasMore = cursor && cursor !== "";
                } else {
                    hasMore = false;
                }
            } else {
                hasMore = false;
            }
        }

        allComments = allLoadedComments.filter(comment => !comment.deleted);
        displayComments();

    } catch (error) {
        console.error('Error loading comments:', error);
        document.getElementById('commentsList').innerHTML = `<div class="no-comments">${translations.noComments}</div>`;
    }
}

function displayComments() {
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    const commentsList = document.getElementById('commentsList');
    const pagination = document.getElementById('commentsPagination');

    if (allComments.length === 0) {
        commentsList.innerHTML = `<div class="no-comments">${translations.noComments}</div>`;
        pagination.style.display = 'none';
        return;
    }

    // Calculate pagination
    const totalPages = Math.ceil(allComments.length / COMMENTS_PER_PAGE);
    const startIndex = currentCommentsPage * COMMENTS_PER_PAGE;
    const endIndex = startIndex + COMMENTS_PER_PAGE;
    const pageComments = allComments.slice(startIndex, endIndex);

    // Display comments
    commentsList.innerHTML = '';
    pageComments.forEach(comment => {
        const commentItem = createCommentItem(comment);
        commentsList.appendChild(commentItem);
    });

    // Update pagination
    if (totalPages > 1) {
        pagination.style.display = 'flex';
        document.getElementById('commentsPageInfo').textContent = `${currentCommentsPage + 1} / ${totalPages}`;
        document.getElementById('prevCommentsBtn').disabled = currentCommentsPage === 0;
        document.getElementById('nextCommentsBtn').disabled = currentCommentsPage >= totalPages - 1;
    } else {
        pagination.style.display = 'none';
    }
}

function createCommentItem(comment) {
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    
    const isVip = comment.profile.membership && 
                  comment.profile.membership.lastTierExpiry && 
                  new Date(comment.profile.membership.lastTierExpiry) > new Date();
    
    const avatarUrl = `https://cdn.moviestarplanet2.com/avatars/${comment.profile.id}/games/j68d/face/latest.png?t=${Date.now()}`;
    const timeStr = new Date(comment.created).toLocaleString();

    commentItem.innerHTML = `
        <div class="comment-avatar">
            <img src="${avatarUrl}" alt="${comment.profile.name}" />
            ${isVip ? '<div class="vip-indicator">VIP</div>' : ''}
        </div>
        <div class="comment-content">
            <div class="comment-author">${comment.profile.name}</div>
            <div class="comment-text">${comment.text}</div>
            <div class="comment-time">${timeStr}</div>
        </div>
        <button class="delete-comment-btn" onclick="deleteComment('${comment.commentId}')">
            🗑️
        </button>
    `;
    
    return commentItem;
}

function changeCommentsPage(direction) {
    const totalPages = Math.ceil(allComments.length / COMMENTS_PER_PAGE);
    currentCommentsPage += direction;
    
    if (currentCommentsPage < 0) {
        currentCommentsPage = 0;
    } else if (currentCommentsPage >= totalPages) {
        currentCommentsPage = totalPages - 1;
    }
    
    displayComments();
}

async function deleteComment(commentId) {
    if (!profileData) return;

    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    
    try {
        showNotification(translations.deletingComment, 'info');
        
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgecomments, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `mutation DeleteComment($commentId: ID!) {
                    deleteComment(input: {commentId: $commentId}) {
                        success
                    }
                }`,
                variables: JSON.stringify({
                    commentId: commentId
                })
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data && data.data.deleteComment && data.data.deleteComment.success) {
                showNotification(translations.commentDeleted, 'success');
                
                // Remove comment from allComments array
                allComments = allComments.filter(comment => comment.commentId !== commentId);
                
                // Update comments count
                await loadCommentsCount();
                
                // Refresh display
                displayComments();
            } else {
                showNotification('Failed to delete comment', 'error');
            }
        } else {
            showNotification('Failed to delete comment', 'error');
        }
    } catch (error) {
        console.error('Error deleting comment:', error);
        showNotification('Error deleting comment', 'error');
    }
}

// Login method switching
function switchLoginMethod(method) {
    currentLoginMethod = method;
    
    const websocketBtn = document.getElementById('websocketMethodBtn');
    const accountBtn = document.getElementById('accountMethodBtn');
    const websocketForm = document.getElementById('websocketLoginForm');
    const accountForm = document.getElementById('accountLoginForm');
    
    if (method === 'websocket') {
        websocketBtn.classList.add('active');
        accountBtn.classList.remove('active');
        websocketForm.classList.add('active');
        accountForm.classList.remove('active');
    } else {
        accountBtn.classList.add('active');
        websocketBtn.classList.remove('active');
        accountForm.classList.add('active');
        websocketForm.classList.remove('active');
        
        if (savedCredentials) {
            document.getElementById('usernameInput').value = savedCredentials.username || '';
            document.getElementById('passwordInput').value = savedCredentials.password || '';
        }
    }
}

function showRegionDialog() {
    if (currentLoginMethod !== 'websocket') return;
    
    const input = document.getElementById('websocketInput').value.trim();
    if (!input) {
        showNotification('Please enter the WebSocket message data', 'error');
        return;
    }

    const parsed = parseWebSocketData(input);
    if (!parsed) {
        showNotification('Invalid data format. Please check your input.', 'error');
        return;
    }

    window.tempProfileData = parsed;
    document.getElementById('regionDialog').style.display = 'flex';
}

function showAccountRegionDialog() {
    if (currentLoginMethod !== 'account') return;
    
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();
    
    if (!username || !password) {
        const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
        showNotification(translations.invalidCredentials, 'error');
        return;
    }

    window.tempCredentials = { username, password };
    document.getElementById('regionDialog').style.display = 'flex';
}

async function confirmRegion(region) {
    currentRegion = region;
    document.getElementById('regionDialog').style.display = 'none';

    if (currentLoginMethod === 'websocket') {
        profileData = window.tempProfileData;
        delete window.tempProfileData;

        // Check if user is banned
        if (bannedIds.includes(profileData.profileId)) {
            showBannedScreen();
            return;
        }

        // Update user plan
        updateUserPlan();

        const userData = getUserDataFromToken(profileData.accessToken);
        if (userData?.sub) {
            loginId = userData.sub;
            localStorage.setItem(STORAGE_KEYS.LOGIN_ID, loginId);
        }

        tokenTimestamp = Date.now();
        localStorage.setItem(STORAGE_KEYS.TOKEN_TIMESTAMP, tokenTimestamp.toString());
        setupTokenExpiryTimers();
        localStorage.setItem(STORAGE_KEYS.PROFILE_DATA, JSON.stringify(profileData));
        localStorage.setItem(STORAGE_KEYS.REGION, currentRegion);

        showLoadingScreen();
    } else {
        await handleAccountLogin();
    }
}

async function handleAccountLogin() {
    const credentials = window.tempCredentials;
    delete window.tempCredentials;
    
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    
    showLoadingScreen();
    
    try {
        const response = await fetch(`${ACCOUNT_API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            // Check if user is banned
            if (bannedIds.includes(result.profileId)) {
                showBannedScreen();
                return;
            }

            savedCredentials = credentials;
            localStorage.setItem(STORAGE_KEYS.ACCOUNT_CREDENTIALS, JSON.stringify(savedCredentials));
            
            currentRegion = result.culture && result.culture.toLowerCase().startsWith('en') ? 'us' : 'eu';
            localStorage.setItem(STORAGE_KEYS.REGION, currentRegion);
            
            profileData = {
                profileId: result.profileId,
                accessToken: result.accessToken
            };
            
            // Update user plan
            updateUserPlan();
            
            const userData = getUserDataFromToken(result.accessToken);
            if (userData?.sub) {
                loginId = userData.sub;
                localStorage.setItem(STORAGE_KEYS.LOGIN_ID, loginId);
            }
            
            tokenTimestamp = Date.now();
            localStorage.setItem(STORAGE_KEYS.TOKEN_TIMESTAMP, tokenTimestamp.toString());
            setupTokenExpiryTimers();
            localStorage.setItem(STORAGE_KEYS.PROFILE_DATA, JSON.stringify(profileData));
            
            showNotification(translations.loginSuccess, 'success');
            showSuccessScreen();
            setTimeout(() => {
                loadUserData();
            }, 2000);
            
        } else {
            hideAllScreens();
            document.getElementById('loginScreen').style.display = 'flex';
            showNotification(result.message || translations.invalidCredentials, 'error');
        }
        
    } catch (error) {
        console.error('Account login error:', error);
        hideAllScreens();
        document.getElementById('loginScreen').style.display = 'flex';
        showNotification(translations.connectionError, 'error');
    }
}

function showBannedScreen() {
    hideAllScreens();
    document.getElementById('bannedScreen').style.display = 'flex';
}

// Friends Settings Functions - UPDATED VERSION WITH PAGINATION
async function loadFriendsData() {
    if (!profileData) return;

    try {
        console.log('Loading friends data...');
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgerelationships, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query GetAllRelationships($profileId: String!, $gameId: String!) {
                    relationships(profileId: $profileId) {
                        nodes {
                            profileId
                            labels(gameId: $gameId)
                        }
                    }
                    requestsIn(profileId: $profileId) {
                        nodes {
                            profileId
                        }
                    }
                    blocked(profileId: $profileId) {
                        nodes {
                            profileId
                        }
                    }
                }`,
                variables: {
                    profileId: profileData.profileId,
                    gameId: "j68d"
                }
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Friends API Response:', data);
            
            if (data.data) {
                friendsData = {
                    relationships: data.data.relationships?.nodes || [],
                    requestsIn: data.data.requestsIn?.nodes || [],
                    blocked: data.data.blocked?.nodes || []
                };
                
                console.log('Friends data processed:', friendsData);
                localStorage.setItem(STORAGE_KEYS.FRIENDS_DATA, JSON.stringify(friendsData));
                
                // Reset profiles cache for fresh data
                friendsProfiles = {};
                
                // Load profile information using the new API
                await loadFriendsProfiles();
                updateFriendsTabCounts();
                applyFriendsFilters();
            }
        } else {
            console.error('Friends API response not OK:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error loading friends data:', error);
        showNotification('Error loading friends data', 'error');
    }
}

async function loadFriendsProfiles() {
    const endpoints = API_ENDPOINTS[currentRegion];
    
    // Collect all unique profile IDs
    const allProfileIds = [
        ...friendsData.relationships.map(r => r.profileId),
        ...friendsData.requestsIn.map(r => r.profileId),
        ...friendsData.blocked.map(r => r.profileId)
    ];
    
    const uniqueProfileIds = [...new Set(allProfileIds)];
    console.log('Loading profile info for IDs:', uniqueProfileIds);
    
    if (uniqueProfileIds.length === 0) {
        console.log('No profile IDs to load');
        return;
    }
    
    // Process profiles in batches to avoid API limits
    const batchSize = 30; // Limit batch size to avoid API issues
    
    for (let i = 0; i < uniqueProfileIds.length; i += batchSize) {
        const batchIds = uniqueProfileIds.slice(i, i + batchSize);
        console.log(`Loading batch ${Math.floor(i/batchSize) + 1}: ${batchIds.length} profiles`);
        
        try {
            const response = await makeAuthenticatedRequest(endpoints.edgerelationships, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${profileData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `query GetProfiles($profileIds: [String!]!, $gameId: String!) {
                        profiles(profileIds: $profileIds) {
                            id
                            name
                            culture
                            avatar(preferredGameId: $gameId) {
                                gameId
                            }
                            membership {
                                lastTierExpiry
                            }
                        }
                    }`,
                    variables: {
                        profileIds: batchIds,
                        gameId: "j68d"
                    }
                })
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log(`Batch response:`, data);
                
                if (data.data?.profiles) {
                    data.data.profiles.forEach(profile => {
                        console.log(`Processing profile: ${profile.id} - ${profile.name}`);
                        
                        // Check VIP status
                        const isVip = profile.membership && 
                                    profile.membership.lastTierExpiry && 
                                    new Date(profile.membership.lastTierExpiry) > new Date();
                        
                        // Generate avatar URL
                        const avatarUrl = `https://cdn.moviestarplanet2.com/avatars/${profile.id}/games/j68d/face/latest.png?t=${Date.now()}`;
                        
                        friendsProfiles[profile.id] = {
                            name: profile.name || 'Unknown User',
                            isVip: isVip,
                            culture: profile.culture || 'unknown',
                            avatar: avatarUrl,
                            level: 1 // Default level, will be updated if experience data is loaded
                        };
                        
                        console.log(`Added profile: ${profile.id}`, friendsProfiles[profile.id]);
                    });
                    
                    // Load experience data for each profile
                    await loadFriendsLevels(batchIds);
                    
                    // Update display after each batch
                    updateFriendDisplays();
                } else {
                    console.warn('No profiles data in response');
                }
            } else {
                console.error(`Batch request failed:`, response.status, response.statusText);
                // Add fallback data for failed batch
                batchIds.forEach(profileId => {
                    friendsProfiles[profileId] = {
                        name: 'Failed to Load',
                        isVip: false,
                        culture: 'unknown',
                        avatar: `https://cdn.moviestarplanet2.com/avatars/${profileId}/games/j68d/face/latest.png?t=${Date.now()}`,
                        level: 1
                    };
                });
            }
        } catch (error) {
            console.error(`Error loading batch:`, error);
            // Add fallback data for failed batch
            batchIds.forEach(profileId => {
                friendsProfiles[profileId] = {
                    name: 'Error Loading',
                    isVip: false,
                    culture: 'unknown',
                    avatar: `https://cdn.moviestarplanet2.com/avatars/${profileId}/games/j68d/face/latest.png?t=${Date.now()}`,
                    level: 1
                };
            });
        }
        
        // Add delay between batches to avoid rate limiting
        if (i + batchSize < uniqueProfileIds.length) {
            await delay(200);
        }
    }
    
    console.log(`Finished loading ${Object.keys(friendsProfiles).length} profiles`);
    updateFriendDisplays();
}

async function loadFriendsLevels(profileIds) {
    if (!profileIds || profileIds.length === 0) return;
    
    const endpoints = API_ENDPOINTS[currentRegion];
    
    // Load experience data for each profile
    for (const profileId of profileIds) {
        try {
            const response = await makeAuthenticatedRequest(`${endpoints.experience}/${profileId}/games/j68d/experience`, {
                headers: {
                    'Authorization': `Bearer ${profileData.accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                if (data.experience && friendsProfiles[profileId]) {
                    friendsProfiles[profileId].level = data.experience.level || 1;
                }
            }
        } catch (error) {
            console.error(`Error loading level for profile ${profileId}:`, error);
            // Keep default level 1
        }
        
        // Small delay to avoid overwhelming the API
        await delay(50);
    }
}

function updateFriendDisplays() {
    // Update the current displayed list if friends settings is open
    const friendsScreen = document.getElementById('friendsSettingsScreen');
    if (friendsScreen.style.display === 'block') {
        applyFriendsFilters();
    }
}

function showFriendsSettings() {
    hideAllScreens();
    document.getElementById('friendsSettingsScreen').style.display = 'block';
    
    document.getElementById('levelFilter').value = '';
    isVipFilterActive = false;
    document.getElementById('vipFilterBtn').classList.remove('active');
    
    // Reset pagination
    currentFriendsPage = 0;
    currentRequestsPage = 0;
    currentBlockedPage = 0;
    
    // Clear previous data and start fresh
    friendsProfiles = {};
    
    // Show loading messages
    document.getElementById('friendsList').innerHTML = '<div class="loading-friends">Loading friends...</div>';
    document.getElementById('requestsList').innerHTML = '<div class="loading-friends">Loading requests...</div>';
    document.getElementById('blockedList').innerHTML = '<div class="loading-friends">Loading blocked...</div>';
    
    loadFriendsData();
}

function switchFriendsTab(tab) {
    // Check if user can access premium tabs
    if ((tab === 'requests' || tab === 'blocked') && currentUserPlan !== 'Plus') {
        showAccessDeniedNotification('friendsAdvanced');
        return;
    }
    
    currentFriendsTab = tab;
    
    document.querySelectorAll('.friends-tab').forEach(tabBtn => {
        tabBtn.classList.remove('active');
    });
    document.getElementById(`${tab}Tab`).classList.add('active');
    
    document.querySelectorAll('.friends-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tab}Content`).classList.add('active');
    
    applyFriendsFilters();
}

function updateFriendsTabCounts() {
    document.getElementById('friendsTabCount').textContent = `(${friendsData.relationships.length})`;
    document.getElementById('requestsTabCount').textContent = `(${friendsData.requestsIn.length})`;
    document.getElementById('blockedTabCount').textContent = `(${friendsData.blocked.length})`;
}

function applyFriendsFilters() {
    let sourceData = [];
    let containerElement = null;
    
    switch (currentFriendsTab) {
        case 'friends':
            sourceData = friendsData.relationships;
            containerElement = document.getElementById('friendsList');
            break;
        case 'requests':
            sourceData = friendsData.requestsIn;
            containerElement = document.getElementById('requestsList');
            break;
        case 'blocked':
            sourceData = friendsData.blocked;
            containerElement = document.getElementById('blockedList');
            break;
    }
    
    // Apply filters
    let filteredData = sourceData;
    
    // Level filter
    const levelFilter = document.getElementById('levelFilter').value.trim();
    if (levelFilter) {
        const targetLevel = parseInt(levelFilter);
        if (!isNaN(targetLevel)) {
            filteredData = filteredData.filter(item => {
                const profile = friendsProfiles[item.profileId];
                return profile && profile.level === targetLevel;
            });
        }
    }
    
    // VIP filter
    if (isVipFilterActive) {
        filteredData = filteredData.filter(item => {
            const profile = friendsProfiles[item.profileId];
            return profile && profile.isVip;
        });
    }
    
    displayFriendsList(filteredData, containerElement, currentFriendsTab);
}

function displayFriendsList(data, container, type) {
    if (!container) return;
    
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    
    if (data.length === 0) {
        let emptyMessage = translations.noFriends;
        if (type === 'requests') emptyMessage = translations.noRequests;
        if (type === 'blocked') emptyMessage = translations.noBlocked;
        
        container.innerHTML = `<div class="no-friends-message">${emptyMessage}</div>`;
        updateFriendsPagination([], type);
        return;
    }
    
    // Calculate pagination
    let currentPage;
    switch (type) {
        case 'friends': currentPage = currentFriendsPage; break;
        case 'requests': currentPage = currentRequestsPage; break;
        case 'blocked': currentPage = currentBlockedPage; break;
    }
    
    const startIndex = currentPage * FRIENDS_PER_PAGE;
    const endIndex = startIndex + FRIENDS_PER_PAGE;
    const pageData = data.slice(startIndex, endIndex);
    
    container.innerHTML = '';
    
    pageData.forEach(item => {
        const profile = friendsProfiles[item.profileId];
        const userItem = document.createElement('div');
        userItem.className = 'friends-user-item';
        
        let actionButtons = '';
        
        if (type === 'friends') {
            actionButtons = `
                <button class="friends-action-btn remove-btn" onclick="removeFriend('${item.profileId}')">
                    <span class="icon">🗑️</span>
                </button>
            `;
        } else if (type === 'requests') {
            actionButtons = `
                <div class="request-actions">
                    <button class="friends-action-btn accept-btn" onclick="acceptRequest('${item.profileId}')">
                        <span class="icon">✓</span>
                    </button>
                    <button class="friends-action-btn reject-btn" onclick="rejectRequest('${item.profileId}')">
                        <span class="icon">✕</span>
                    </button>
                </div>
            `;
        } else if (type === 'blocked') {
            actionButtons = `
                <button class="friends-action-btn unblock-btn" onclick="unblockUser('${item.profileId}')">
                    <span class="icon">🔓</span>
                </button>
            `;
        }
        
        // Use profile data or loading/fallback values
        const displayName = profile ? profile.name : 'Loading...';
        const displayAvatar = profile ? profile.avatar : `https://cdn.moviestarplanet2.com/avatars/${item.profileId}/games/j68d/face/latest.png?t=${Date.now()}`;
        const isVip = profile ? profile.isVip : false;
        const level = profile ? profile.level : 1;
        
        userItem.innerHTML = `
            <div class="friends-user-avatar">
                <img src="${displayAvatar}" alt="${displayName}" />
                ${isVip ? '<div class="vip-indicator">VIP</div>' : ''}
            </div>
            <div class="friends-user-info">
                <div class="friends-user-name">
                    ${displayName}
                    <span class="friends-user-level">Level ${level}</span>
                </div>
                <div class="friends-user-culture">${profile ? (profile.culture || 'Unknown') : 'Loading...'}</div>
            </div>
            ${actionButtons}
        `;
        
        container.appendChild(userItem);
    });
    
    // Update pagination
    updateFriendsPagination(data, type);
}

async function removeFriend(profileId) {
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(`${endpoints.profilerelationships}/${profileData.profileId}/relationships/${profileId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            showNotification('Friend removed successfully', 'success');
            await loadFriendsData();
        } else {
            showNotification('Error removing friend', 'error');
        }
    } catch (error) {
        console.error('Error removing friend:', error);
        showNotification('Error removing friend', 'error');
    }
}

async function acceptRequest(profileId) {
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(`${endpoints.profilerelationships}/${profileId}/relationships/requests/${profileData.profileId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                profileId: profileData.profileId,
                state: "approved"
            })
        });

        if (response.ok) {
            showNotification('Friend request accepted', 'success');
            await loadFriendsData();
        } else {
            showNotification('Error accepting request', 'error');
        }
    } catch (error) {
        console.error('Error accepting request:', error);
        showNotification('Error accepting request', 'error');
    }
}

async function rejectRequest(profileId) {
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(`${endpoints.profilerelationships}/${profileId}/relationships/requests/${profileData.profileId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                profileId: profileData.profileId,
                state: "rejected"
            })
        });

        if (response.ok) {
            showNotification('Friend request rejected', 'success');
            await loadFriendsData();
        } else {
            showNotification('Error rejecting request', 'error');
        }
    } catch (error) {
        console.error('Error rejecting request:', error);
        showNotification('Error rejecting request', 'error');
    }
}

async function unblockUser(profileId) {
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    
    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(`${endpoints.profilerelationships}/${profileData.profileId}/relationships/${profileId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            showNotification('User unblocked successfully', 'success');
            await loadFriendsData();
        } else {
            showNotification('Error unblocking user', 'error');
        }
    } catch (error) {
        console.error('Error unblocking user:', error);
        showNotification('Error unblocking user', 'error');
    }
}

function showDeleteAllDialog() {
    let sourceData = [];
    
    switch (currentFriendsTab) {
        case 'friends':
            sourceData = friendsData.relationships;
            break;
        case 'requests':
            sourceData = friendsData.requestsIn;
            break;
        case 'blocked':
            sourceData = friendsData.blocked;
            break;
    }
    
    if (sourceData.length === 0) {
        showNotification('No users to delete in this category', 'info');
        return;
    }
    
    document.getElementById('deleteAllDialog').style.display = 'flex';
    startDeleteCountdown();
}

function hideDeleteAllDialog() {
    if (window.deleteAllCountdown) {
        clearInterval(window.deleteAllCountdown);
        window.deleteAllCountdown = null;
    }
    document.getElementById('deleteAllDialog').style.display = 'none';
    document.getElementById('confirmDeleteAllBtn').disabled = true;
    document.getElementById('countdownNumber').textContent = '5';
}

function startDeleteCountdown() {
    let count = 5;
    const countdownElement = document.getElementById('countdownNumber');
    const confirmBtn = document.getElementById('confirmDeleteAllBtn');
    
    confirmBtn.disabled = true;
    countdownElement.textContent = count;
    
    window.deleteAllCountdown = setInterval(() => {
        count--;
        countdownElement.textContent = count;
        
        if (count <= 0) {
            clearInterval(window.deleteAllCountdown);
            window.deleteAllCountdown = null;
            confirmBtn.disabled = false;
            countdownElement.textContent = '0';
        }
    }, 1000);
}

async function confirmDeleteAll() {
    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    hideDeleteAllDialog();
    
    let sourceData = [];
    
    switch (currentFriendsTab) {
        case 'friends':
            sourceData = friendsData.relationships;
            break;
        case 'requests':
            sourceData = friendsData.requestsIn;
            break;
        case 'blocked':
            sourceData = friendsData.blocked;
            break;
    }
    
    if (sourceData.length === 0) {
        return;
    }
    
    showNotification(`Removing ${sourceData.length} users...`, 'info');
    
    let successCount = 0;
    
    for (const item of sourceData) {
        try {
            if (currentFriendsTab === 'requests') {
                await rejectRequest(item.profileId);
            } else {
                const endpoints = API_ENDPOINTS[currentRegion];
                const response = await makeAuthenticatedRequest(`${endpoints.profilerelationships}/${profileData.profileId}/relationships/${item.profileId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${profileData.accessToken}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    successCount++;
                }
            }
            
            await delay(200);
        } catch (error) {
            console.error(`Error removing user ${item.profileId}:`, error);
        }
    }
    
    if (successCount > 0) {
        showNotification(`All users removed from category (${successCount}/${sourceData.length})`, 'success');
        await loadFriendsData();
    } else {
        showNotification('Error removing all users', 'error');
    }
}

// ENHANCED DAILY TASKS
async function startEnhancedDailyTasks() {
    if (!profileData || isProcessing) return;

    isProcessing = true;
    
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
        "Authorization": `Bearer ${profileData.accessToken}`,
        "content-type": "application/json"
    };

    try {
        let completed = 0;
        let total = 0;

        // Calculate total tasks
        total += PET_IDS.length; // Pet interactions
        total += DAILY_QUEST_TYPES.length; // Daily quests
        total += 3; // VIP pickup gifts (3 times)
        total += 4; // Normal pickup gifts (4 times)
        total += 3; // VIP rewards (3 times)
        total += 4; // Normal rewards (4 times)

        // Calculate delay to complete in 15 seconds
        const totalTime = 60000; // 15 seconds
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
                await makeAuthenticatedRequest(`${endpoints.pets}/${petId}/interactions`, {
                    method: "POST",
                    headers,
                    body: JSON.stringify({
                        profileId: profileData.profileId,
                        gameId: "j68d"
                    })
                });
            } catch (error) {}
            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 2. Complete daily quests
        progressStatus.textContent = 'Completing daily quests...';
        for (const questType of DAILY_QUEST_TYPES) {
            try {
                await makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${questType}/state`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Complete" })
                });
            } catch (error) {}
            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 3. VIP pickup gifts (3 times)
        progressStatus.textContent = 'Processing VIP gift quests...';
        for (let i = 0; i < 3; i++) {
            try {
                await makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/daily_open_gift_vip/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                });
            } catch (error) {}

            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 4. Normal pickup gifts (4 times)
        progressStatus.textContent = 'Processing normal gift quests...';
        for (let i = 0; i < 4; i++) {
            try {
                await makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/daily_open_gift_normal/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                });
            } catch (error) {}

            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 5. VIP pickup rewards (3 times)
        progressStatus.textContent = 'Claiming VIP pickup rewards...';
        for (let i = 0; i < 3; i++) {
            try {
                await makeAuthenticatedRequest(`${endpoints.rewards}/${profileData.profileId}/games/j68d/rewards/daily_pickup_vip`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                });
            } catch (error) {}

            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 6. Normal pickup rewards (4 times)
        progressStatus.textContent = 'Claiming normal pickup rewards...';
        for (let i = 0; i < 4; i++) {
            try {
                await makeAuthenticatedRequest(`${endpoints.rewards}/${profileData.profileId}/games/j68d/rewards/daily_pickup`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                });
            } catch (error) {}

            completed++;
            updateProgress();
            await delay(delayPerTask);
        }

        // 7. Additional quests
        progressStatus.textContent = 'Processing additional quests...';
        try {
            const questTypes = ["EventQuest", "StaticDailyQuest", "RandomDailyQuest"];
            const queryString = questTypes.map(type => `questType=${type}`).join("&");
            const url = `${endpoints.quests}/${profileData.profileId}/games/j68d/quests?${queryString}`;

            const response = await makeAuthenticatedRequest(url, { headers });
            const questData = await response.json();

            if (questData?.quests) {
                const activeQuests = questData.quests.filter(q => q.state === "Active");

                for (const quest of activeQuests) {
                    // main quest progress
                    try {
                        await makeAuthenticatedRequest(
                            `${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${quest.definitionId}/progress`,
                            {
                                method: "PUT",
                                headers,
                                body: JSON.stringify({ progress: 1 })
                            }
                        );
                    } catch (error) {}

                    try {
                        await makeAuthenticatedRequest(
                            `${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${quest.definitionId}/state`,
                            {
                                method: "PUT",
                                headers,
                                body: JSON.stringify({ state: "Complete" })
                            }
                        );
                    } catch (error) {}

                    // child quests
                    if (quest.children?.length > 0) {
                        for (const child of quest.children) {
                            if (child.state === "Active") {
                                try {
                                    await makeAuthenticatedRequest(
                                        `${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${child.definitionId}/progress`,
                                        {
                                            method: "PUT",
                                            headers,
                                            body: JSON.stringify({ progress: 1 })
                                        }
                                    );
                                } catch (error) {}

                                try {
                                    await makeAuthenticatedRequest(
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
        
        // Hide progress bar after 3 seconds
        setTimeout(() => {
            progressContainer.style.display = 'none';
        }, 3000);
    }
}

// FAST START FUNCTION
async function startFastDailyTasks() {
    hideFastStartDialog();
    
    if (!profileData || isProcessing) return;

    isProcessing = true;
    
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressStatus = document.getElementById('progressStatus');

    progressContainer.style.display = 'block';
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    progressStatus.textContent = 'Starting FAST daily tasks...';

    showNotification('Starting FAST daily tasks...', 'warning');

    const endpoints = API_ENDPOINTS[currentRegion];
    const headers = {
        "Authorization": `Bearer ${profileData.accessToken}`,
        "content-type": "application/json"
    };

    try {
        const allTasks = [];

        // 1. Pet interactions
        progressStatus.textContent = 'FAST: Processing pet interactions...';
        progressBar.style.width = '25%';
        progressText.textContent = '25%';
        
        for (const petId of PET_IDS) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.pets}/${petId}/interactions`, {
                    method: "POST",
                    headers,
                    body: JSON.stringify({ 
                        profileId: profileData.profileId, 
                        gameId: "j68d" 
                    })
                }).catch(() => {}) // Ignore errors
            );
        }

        // 2. Complete daily quests
        progressStatus.textContent = 'FAST: Completing daily quests...';
        progressBar.style.width = '50%';
        progressText.textContent = '50%';
        
        for (const questType of DAILY_QUEST_TYPES) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${questType}/state`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Complete" })
                }).catch(() => {}) // Ignore errors
            );
        }

        // 3. VIP pickup gifts (3 times)
        progressStatus.textContent = 'FAST: Processing VIP gift quests...';
        progressBar.style.width = '65%';
        progressText.textContent = '65%';
        
        for (let i = 0; i < 3; i++) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/daily_open_gift_vip/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                }).catch(() => {}) // Ignore errors
            );
        }

        // 4. Normal pickup gifts (4 times)
        progressStatus.textContent = 'FAST: Processing normal gift quests...';
        progressBar.style.width = '75%';
        progressText.textContent = '75%';
        
        for (let i = 0; i < 4; i++) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/daily_open_gift_normal/progress`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ progress: 1 })
                }).catch(() => {}) // Ignore errors
            );
        }

        // 5. VIP pickup rewards (3 times)
        progressStatus.textContent = 'FAST: Claiming VIP pickup rewards...';
        
        for (let i = 0; i < 3; i++) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.rewards}/${profileData.profileId}/games/j68d/rewards/daily_pickup_vip`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                }).catch(() => {}) // Ignore errors
            );
        }

        // 6. Normal pickup rewards (4 times)
        for (let i = 0; i < 4; i++) {
            allTasks.push(
                makeAuthenticatedRequest(`${endpoints.rewards}/${profileData.profileId}/games/j68d/rewards/daily_pickup`, {
                    method: "PUT",
                    headers,
                    body: JSON.stringify({ state: "Claimed" })
                }).catch(() => {}) // Ignore errors
            );
        }

        // 7. Additional quests
        try {
            const questTypes = ["EventQuest", "StaticDailyQuest", "RandomDailyQuest"];
            const queryString = questTypes.map(type => `questType=${type}`).join("&");
            const url = `${endpoints.quests}/${profileData.profileId}/games/j68d/quests?${queryString}`;

            const response = await makeAuthenticatedRequest(url, { headers });
            const questData = await response.json();

            if (questData?.quests) {
                const activeQuests = questData.quests.filter(quest => quest.state === "Active");

                for (const quest of activeQuests) {
                    allTasks.push(
                        makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${quest.definitionId}/progress`, {
                            method: "PUT",
                            headers,
                            body: JSON.stringify({ progress: 1 })
                        }).catch(() => {})
                    );

                    allTasks.push(
                        makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${quest.definitionId}/state`, {
                            method: "PUT",
                            headers,
                            body: JSON.stringify({ state: "Complete" })
                        }).catch(() => {})
                    );

                    // Handle child quests
                    if (quest.children?.length > 0) {
                        for (const child of quest.children) {
                            if (child.state === "Active") {
                                allTasks.push(
                                    makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${child.definitionId}/progress`, {
                                        method: "PUT",
                                        headers,
                                        body: JSON.stringify({ progress: 1 })
                                    }).catch(() => {})
                                );

                                allTasks.push(
                                    makeAuthenticatedRequest(`${endpoints.quests}/${profileData.profileId}/games/j68d/quests/${child.definitionId}/state`, {
                                        method: "PUT",
                                        headers,
                                        body: JSON.stringify({ state: "Complete" })
                                    }).catch(() => {})
                                );
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Additional quests error:', error);
        }

        // Execute all tasks in parallel
        progressStatus.textContent = 'FAST: Executing all tasks in parallel...';
        await Promise.all(allTasks);

        progressBar.style.width = '100%';
        progressText.textContent = '100%';
        progressStatus.textContent = 'All FAST daily tasks completed!';
        showNotification('All FAST daily tasks completed successfully!', 'success');

    } catch (error) {
        progressStatus.textContent = 'Error during execution';
        showNotification('Error during FAST daily tasks execution', 'error');
        console.error('FAST daily tasks error:', error);
    } finally {
        isProcessing = false;
        
        // Hide progress bar after 3 seconds
        setTimeout(() => {
            progressContainer.style.display = 'none';
        }, 3000);
    }
}

// Utility functions
function showLoadingScreen() {
    hideAllScreens();
    document.getElementById('loadingScreen').style.display = 'flex';

    setTimeout(() => {
        document.getElementById('loadingText').textContent = 'Waiting for a response...';
    }, 500);

    setTimeout(() => {
        showSuccessScreen();
    }, 800);
}

function showSuccessScreen() {
    hideAllScreens();
    document.getElementById('successScreen').style.display = 'flex';

    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
        console.log('Audio playback not supported');
    }

    setTimeout(() => {
        document.getElementById('successText').textContent = 'Static is being prepared...';
    }, 1000);

    setTimeout(() => {
        loadUserData();
    }, 2000);
}

async function loadUserData() {
    if (!profileData) return;

    try {
        await Promise.all([
            loadProfileIdentityData(),
            loadProfileData(),
            loadExperienceData(),
            loadGiftsData(),
            loadCurrentWAYD(),
            loadFriendsData()
        ]);
        
        // Update user plan after loading profile data
        updateUserPlan();
        
        showMainMenu();
    } catch (error) {
        console.error('Error loading user data:', error);
        showMainMenu();
    }
}

async function loadProfileIdentityData() {
    if (!profileData || !loginId) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(`${endpoints.profileidentity}/logins/${loginId}/profiles?pageSize=100&page=1`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                const profile = data[0];
                userData = {
                    ...userData,
                    name: profile.name
                };
                localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
                updateUserInfo();
            }
        }
    } catch (error) {
        console.error('Error loading profile identity data:', error);
    }
}

async function loadProfileData() {
    if (!profileData) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgeprofile, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                    query GetProfile($profileId: String!, $gameId:String!) {
                       profile(profileId: $profileId) {
                            name
                            balance(gameId: $gameId) {
                              available {
                                currency
                                count
                              }
                            }
                            memberships {
                              lastTierExpiry 
                            }
                        }
                    }`,
                variables: {
                    profileId: profileData.profileId,
                    gameId: "j68d"
                }
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data && data.data.profile) {
                const profile = data.data.profile;
                
                let starcoins = 0;
                let diamonds = 0;
                
                if (profile.balance && profile.balance.available) {
                    profile.balance.available.forEach(currency => {
                        if (currency.currency === 'soft') {
                            starcoins = currency.count;
                        } else if (currency.currency === 'hard') {
                            diamonds = currency.count;
                        }
                    });
                }

                userData = {
                    ...userData,
                    name: profile.name,
                    starcoins: starcoins,
                    diamonds: diamonds,
                    avatar: await generateLatestAvatarUrl(profileData.profileId)
                };
                
                localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
                updateUserInfo();
            }
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

async function loadExperienceData() {
    if (!profileData) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(`${endpoints.experience}/${profileData.profileId}/games/j68d/experience`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            userData = {
                ...userData,
                experience: data.experience
            };
            localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
            updateUserInfo();
            updateFeatureAccess(); // Update access control after loading level
        }
    } catch (error) {
        console.error('Error loading experience data:', error);
    }
}

async function loadGiftsData() {
    if (!profileData) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgegifts, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query CheckGifts($profileId: ID!, $gameId: String!, $pageSize: Int, $cursor: String) { 
                    gifts(input: {profileId: $profileId, gameId: $gameId, pageSize: $pageSize, cursor: $cursor }) { 
                        cursor 
                        gifts { 
                            giftId 
                            giverProfileId 
                            receiverProfileId 
                            gameId 
                            message 
                            additionalData 
                            state 
                            givenAt 
                            giverProfile {
                                id 
                                name 
                                membership {
                                    lastTierExpiry 
                                } 
                                avatar(preferredGameId: $gameId) {
                                    gameId
                                    face
                                    full
                                } 
                            } 
                        } 
                    } 
                }`,
                variables: {
                    profileId: profileData.profileId,
                    pageSize: 12,
                    gameId: "j68d",
                    cursor: null
                }
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data && data.data.gifts) {
                giftsData = data.data.gifts.gifts || [];
                updateGiftsCount();
            }
        }
    } catch (error) {
        console.error('Error loading gifts data:', error);
    }
}

async function loadCurrentWAYD() {
    if (!profileData) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(`${endpoints.profileattributes}/${profileData.profileId}/games/j68d/attributes`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            if (data.additionalData && data.additionalData.WAYD) {
                currentWaydId = data.additionalData.WAYD;
                await loadCommentsCount();
            } else {
                document.getElementById('commentsCount').textContent = '(0)';
            }
        }
    } catch (error) {
        console.error('Error loading current WAYD:', error);
        document.getElementById('commentsCount').textContent = '(0)';
    }
}

async function loadCommentsCount() {
    if (!profileData || !currentWaydId) {
        document.getElementById('commentsCount').textContent = '(0)';
        return;
    }

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgecomments, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query GetCommentsCount($entityType: EntityType!, $threadId: ID!) {
                    count(entityType: $entityType, threadId: $threadId) {
                        count 
                    }
                }`,
                variables: JSON.stringify({
                    entityType: "UGC",
                    threadId: currentWaydId
                })
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.data && data.data.count) {
                const count = data.data.count.count || 0;
                document.getElementById('commentsCount').textContent = `(${count})`;
            } else {
                document.getElementById('commentsCount').textContent = '(0)';
            }
        } else {
            document.getElementById('commentsCount').textContent = '(0)';
        }
    } catch (error) {
        console.error('Error loading comments count:', error);
        document.getElementById('commentsCount').textContent = '(0)';
    }
}

function updateUserInfo() {
    if (!userData) return;

    if (userData.name) {
        document.getElementById('username').textContent = userData.name;
        const passwordUsername = document.getElementById('passwordUsername');
        if (passwordUsername) {
            passwordUsername.textContent = userData.name;
        }
    }

    if (userData.starcoins !== undefined) {
        document.getElementById('starcoins').textContent = userData.starcoins.toLocaleString();
    }
    if (userData.diamonds !== undefined) {
        document.getElementById('diamonds').textContent = userData.diamonds.toLocaleString();
    }

    if (userData.experience) {
        const { level, xp, currentLevelXpMin, currentLevelXpMax } = userData.experience;
        
        document.getElementById('userLevel').textContent = level;
        
        const currentXp = xp - currentLevelXpMin;
        const maxXp = currentLevelXpMax - currentLevelXpMin;
        const percentage = (currentXp / maxXp) * 100;
        
        document.getElementById('xpProgress').style.width = `${percentage}%`;
        document.getElementById('xpText').textContent = `${currentXp} / ${maxXp}`;
    }

    if (userData.avatar) {
        document.getElementById('userAvatar').src = userData.avatar;
        const passwordAvatar = document.getElementById('passwordUserAvatar');
        if (passwordAvatar) {
            passwordAvatar.src = userData.avatar;
        }
    }
}

function updateGiftsCount() {
    document.getElementById('giftsCount').textContent = giftsData.length;
}

function showMainMenu() {
    hideAllScreens();
    document.getElementById('mainMenu').style.display = 'block';
    document.getElementById('exitBtn').style.display = 'flex';
    document.getElementById('languageBtn').style.display = 'flex';
    document.getElementById('zoomBtn').style.display = 'flex';
    document.getElementById('planBtn').style.display = 'flex';
    document.getElementById('autographBtn').style.display = 'flex';
    document.getElementById('changePasswordBtn').style.display = 'flex';
}

// Autograph functions
function showAutograph() {
    hideAllScreens();
    document.getElementById('autographScreen').style.display = 'block';
}

function hideAutograph() {
    document.getElementById('autographScreen').style.display = 'none';
    showMainMenu();
}

async function handleAutogreetFromInput() {
    const input = document.getElementById('autographUsernameInput');
    const username = input.value.trim();

    if (!username) {
        showNotification('Please enter a username', 'error');
        return;
    }

    await startAutoGreeting(username);
}

async function startAutoGreeting(username) {
    if (!profileData) {
        showNotification('Please login first', 'error');
        return;
    }

    if (isAutoGreeting) {
        showNotification('Auto-greeting is already running', 'info');
        return;
    }

    showNotification(`Searching for user: ${username}`, 'info');
    updateAutographLog(`Searching for user: ${username}...`);

    const profileId = await findProfileId(username);
    if (!profileId) {
        showNotification(`Could not find user ${username}`, 'error');
        updateAutographLog(`Error: Could not find user ${username}`);
        return;
    }

    currentTargetProfileId = profileId;
    currentTargetUsername = username;
    isAutoGreeting = true;
    greetingStats.count = 0;
    greetingStats.type = document.getElementById('greetingTypeSelector').value;

    await sendGreeting();

    autoSendInterval = setInterval(async () => {
        await sendGreeting();
    }, 120000);

    showNotification(`Auto-greeting started for ${username}`, 'success');
    updateAutographLog(`Auto-greeting started for ${username} - sending every 2 minutes`);
}

function stopAutoGreeting() {
    if (autoSendInterval) {
        clearInterval(autoSendInterval);
        autoSendInterval = null;
    }

    if (isAutoGreeting) {
        showReceipt();
    }

    setTimeout(() => {
        currentTargetProfileId = null;
        currentTargetUsername = null;
        isAutoGreeting = false;
        
        updateAutographLog('Auto-greeting stopped');
    }, 100);
}

async function findProfileId(username) {
    if (!profileData) return null;

    try {
        const userData = getUserDataFromToken(profileData.accessToken);
        if (!userData?.name) return null;

        const region = userData.name.split("|")[0];
        const endpoints = API_ENDPOINTS[currentRegion];

        const response = await makeAuthenticatedRequest(endpoints.edgerelationships, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${profileData.accessToken}`
            },
            body: JSON.stringify({
                query: `query GetProfileSearch($region: String!, $startsWith: String!, $pageSize: Int, $currentPage: Int, $preferredGameId: String!) {
                    findProfiles(region: $region, nameBeginsWith: $startsWith, pageSize: $pageSize, page: $currentPage) {
                        totalCount
                        nodes {
                            id
                            avatar(preferredGameId: $preferredGameId) {
                                gameId
                                face
                                full
                            }
                        }
                    }
                }`,
                variables: {
                    region: region,
                    startsWith: username,
                    pageSize: 50,
                    currentPage: 1,
                    preferredGameId: "j68d"
                }
            })
        });

        const result = await response.json();
        return result?.data?.findProfiles?.nodes?.[0]?.id || null;
    } catch (error) {
        console.error('Error finding profile:', error);
        return null;
    }
}

function getUserDataFromToken(token) {
    if (!token) return null;

    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        
        return JSON.parse(jsonPayload);
    } catch (error) {
        return null;
    }
}

async function sendGreeting() {
    if (!profileData || !currentTargetProfileId) return false;

    const greetingType = document.getElementById('greetingTypeSelector').value;
    const endpoints = API_ENDPOINTS[currentRegion];

    try {
        const response = await makeAuthenticatedRequest(endpoints.federationgateway, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${profileData.accessToken}`
            },
            body: JSON.stringify({
                id: "SendGreetings-159BDD7706D824BB8F14874A7FAE3368",
                variables: {
                    greetingType: greetingType,
                    receiverProfileId: currentTargetProfileId,
                    ignoreDailyCap: true
                }
            })
        });

        const result = await response.json();
        const success = result?.data?.greetings?.sendGreeting?.success || response.ok;
        
        if (success) {
            greetingStats.count++;
            greetingStats.type = greetingType;
        }
        
        const time = new Date().toLocaleTimeString();
        const statusMessage = `[${time}] ${greetingType} to ${currentTargetUsername}: ${success ? 'Success' : 'Failed'}`;
        updateAutographLog(statusMessage);
        
        return success;
    } catch (error) {
        const time = new Date().toLocaleTimeString();
        const statusMessage = `[${time}] ${greetingType} to ${currentTargetUsername}: Error`;
        updateAutographLog(statusMessage);
        return false;
    }
}

function updateAutographLog(message) {
    const logDiv = document.getElementById('autographLog');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    logDiv.appendChild(messageDiv);

    while (logDiv.children.length > 10) {
        logDiv.removeChild(logDiv.firstChild);
    }

    logDiv.scrollTop = logDiv.scrollHeight;
}

function showReceipt() {
    hideAllScreens();
    document.getElementById('receiptScreen').style.display = 'flex';

    document.getElementById('receiptGreetingType').textContent = greetingStats.type;
    document.getElementById('receiptCount').textContent = greetingStats.count;
    document.getElementById('receiptTotal').textContent = greetingStats.count;
}

function closeReceipt() {
    showMainMenu();
}

// Change Mood
function showChangeMood() {
    hideAllScreens();
    document.getElementById('changeMoodScreen').style.display = 'block';
    updateMoodDisplay();
}

function changeMoodIndex(direction) {
    currentMoodIndex += direction;
    
    if (currentMoodIndex < 0) {
        currentMoodIndex = MOOD_LIST.length - 1;
    } else if (currentMoodIndex >= MOOD_LIST.length) {
        currentMoodIndex = 0;
    }
    
    updateMoodDisplay();
}

function updateMoodDisplay() {
    const imageNumber = currentMoodIndex + 1;
    const moodName = MOOD_LIST[currentMoodIndex];
    const isFree = FREE_MOODS.includes(moodName);
    const canAccess = isFree || currentUserPlan === 'Plus';
    
    document.getElementById('currentMoodImage').src = `image/image${imageNumber}.jpg`;
    document.getElementById('currentMoodImage').onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iMTIiIGZpbGw9IiMzNDM0MzQiLz4KPHRLEHT4PSI2MCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SU1BR0U8L3RleHQ+Cjwvc3ZnPgo=';
    };
    
    document.getElementById('moodNumber').textContent = `#${imageNumber}`;
    document.getElementById('moodCounter').textContent = `${imageNumber} / ${MOOD_LIST.length}`;
    
    // Show/hide premium overlay
    const overlay = document.getElementById('moodPremiumOverlay');
    const applyBtn = document.getElementById('applyMoodBtn');
    
    if (!canAccess) {
        overlay.style.display = 'flex';
        applyBtn.disabled = true;
        applyBtn.style.opacity = '0.6';
    } else {
        overlay.style.display = 'none';
        applyBtn.disabled = false;
        applyBtn.style.opacity = '1';
    }
}

async function applySelectedMood() {
    if (!profileData) return;
    
    const selectedMood = MOOD_LIST[currentMoodIndex];
    const isFree = FREE_MOODS.includes(selectedMood);
    const canAccess = isFree || currentUserPlan === 'Plus';
    
    if (!canAccess) {
        showAccessDeniedNotification('mood');
        return;
    }

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        
        const getResponse = await makeAuthenticatedRequest(`${endpoints.profileattributes}/${profileData.profileId}/games/j68d/attributes`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (getResponse.ok) {
            const currentData = await getResponse.json();
            
            const updatedData = {
                ...currentData,
                additionalData: {
                    ...currentData.additionalData,
                    Mood: selectedMood
                }
            };

            const putResponse = await makeAuthenticatedRequest(`${endpoints.profileattributes}/${profileData.profileId}/games/j68d/attributes`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${profileData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });

            if (putResponse.ok) {
                showNotification('Mood changed successfully!', 'success');
                showMainMenu();
            } else {
                showNotification('Failed to change mood', 'error');
            }
        }
    } catch (error) {
        console.error('Error changing mood:', error);
        showNotification('Error changing mood', 'error');
    }
}

async function changeGender() {
    if (!profileData) return;

    try {
        const endpoints = API_ENDPOINTS[currentRegion];
        
        currentGender = currentGender === 'Boy' ? 'Girl' : 'Boy';
        
        const getResponse = await makeAuthenticatedRequest(`${endpoints.profileattributes}/${profileData.profileId}/games/j68d/attributes`, {
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        if (getResponse.ok) {
            const currentData = await getResponse.json();
            
            const updatedData = {
                ...currentData,
                additionalData: {
                    ...currentData.additionalData,
                    Gender: currentGender
                }
            };

            const putResponse = await makeAuthenticatedRequest(`${endpoints.profileattributes}/${profileData.profileId}/games/j68d/attributes`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${profileData.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });

            if (putResponse.ok) {
                showNotification(`Gender changed to ${currentGender}`, 'success');
            } else {
                showNotification('Failed to change gender', 'error');
            }
        }
    } catch (error) {
        console.error('Error changing gender:', error);
        showNotification('Error changing gender', 'error');
    }
}

// Change Password
function showChangePassword() {
    hideAllScreens();
    document.getElementById('changePasswordScreen').style.display = 'block';
    
    document.getElementById('currentPasswordInput').value = '';
    document.getElementById('newPasswordInput').value = '';
    document.getElementById('confirmPasswordInput').value = '';
    
    updateUserInfo();
}

async function handlePasswordChange() {
    const currentPassword = document.getElementById('currentPasswordInput').value.trim();
    const newPassword = document.getElementById('newPasswordInput').value.trim();
    const confirmPassword = document.getElementById('confirmPasswordInput').value.trim();

    if (!currentPassword) {
        showNotification('Please enter your current password', 'error');
        return;
    }

    if (!newPassword) {
        showNotification('Please enter a new password', 'error');
        return;
    }

    if (newPassword !== confirmPassword) {
        showNotification('New passwords do not match', 'error');
        return;
    }

    if (newPassword.length < 6) {
        showNotification('New password must be at least 6 characters long', 'error');
        return;
    }

    showNotification('Password change functionality not implemented', 'info');
}

// Gift Functions - FIXED IMPLEMENTATION
async function showGifts() {
    hideAllScreens();
    document.getElementById('giftsScreen').style.display = 'block';

    const giftsList = document.getElementById('giftsList');
    giftsList.innerHTML = '';

    if (giftsData.length === 0) {
        giftsList.innerHTML = '<div style="text-align: center; color: rgba(255,255,255,0.5); padding: 20px;">No gifts available</div>';
        return;
    }

    for (const gift of giftsData) {
        const giftItem = document.createElement('div');
        giftItem.className = 'gift-item';
        
        const isVip = gift.giverProfile.membership && new Date(gift.giverProfile.membership.lastTierExpiry) > new Date();
        
        const latestAvatarUrl = await getLatestAvatarUrlForGift(gift.giverProfile.id);
        
        giftItem.innerHTML = `
            <img class="gift-avatar" src="${latestAvatarUrl}" alt="${gift.giverProfile.name}">
            <div class="gift-info">
                <div class="gift-sender">
                    ${gift.giverProfile.name} 
                    ${isVip ? '<span class="vip-badge">VIP</span>' : ''}
                </div>
                <div class="gift-level">From: ${gift.giverProfile.name}</div>
            </div>
            <button class="open-gift-btn" onclick="openGift('${gift.giftId}')">Open</button>
        `;
        
        giftsList.appendChild(giftItem);
    }
}

async function openGift(giftId) {
    if (!profileData || isOpeningGifts) {
        showNotification('Please wait...', 'info');
        return;
    }

    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    
    try {
        showNotification(translations.giftOpening, 'info');
        
        const endpoints = API_ENDPOINTS[currentRegion];
        const response = await makeAuthenticatedRequest(endpoints.edgegifts, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${profileData.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `mutation OpenGift($giftId: ID!, $receiverProfileId: ID!) { 
                    openGift(input: {giftId: $giftId, receiverProfileId: $receiverProfileId }) { 
                        success 
                        error 
                        item { 
                            id 
                            objectId 
                            objectSource 
                            additionalData 
                            tags { 
                                id 
                                source 
                            } 
                        } 
                    } 
                }`,
                variables: JSON.stringify({
                    giftId: giftId,
                    receiverProfileId: profileData.profileId
                })
            })
        });

        if (response.ok) {
            const result = await response.json();
            
            if (result.data?.openGift?.success) {
                showNotification(translations.giftOpenSuccess, 'success');
                
                // Remove the opened gift from the gifts list
                const giftButton = document.querySelector(`button[onclick="openGift('${giftId}')"]`);
                if (giftButton) {
                    const giftItem = giftButton.closest('.gift-item');
                    if (giftItem) {
                        giftItem.remove();
                    }
                }
                
                // Update gifts data
                giftsData = giftsData.filter(gift => gift.giftId !== giftId);
                updateGiftsCount();
                
                // Reload gifts list if empty
                if (giftsData.length === 0) {
                    document.getElementById('giftsList').innerHTML = '<div style="text-align: center; color: rgba(255,255,255,0.5); padding: 20px;">No gifts available</div>';
                }
                
            } else {
                const errorMessage = result.data?.openGift?.error || 'Unknown error';
                showNotification(`${translations.giftOpenError}: ${errorMessage}`, 'error');
            }
        } else {
            showNotification(translations.giftOpenError, 'error');
        }
    } catch (error) {
        console.error('Error opening gift:', error);
        showNotification(translations.giftOpenError, 'error');
    }
}

async function openAllGifts() {
    if (!profileData || giftsData.length === 0 || isOpeningGifts) {
        if (giftsData.length === 0) {
            showNotification('No gifts to open', 'info');
        } else {
            showNotification('Please wait...', 'info');
        }
        return;
    }

    const translations = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    isOpeningGifts = true;
    
    try {
        showNotification(`${translations.openingGifts} (${giftsData.length})...`, 'info');
        
        const giftIds = giftsData.map(gift => gift.giftId);
        let successCount = 0;
        let errorCount = 0;

        // Process gifts in smaller batches to avoid overwhelming the API
        const batchSize = 5;
        for (let i = 0; i < giftIds.length; i += batchSize) {
            const batch = giftIds.slice(i, i + batchSize);
            
            // Process batch in parallel
            const promises = batch.map(async (giftId) => {
                try {
                    const endpoints = API_ENDPOINTS[currentRegion];
                    const response = await makeAuthenticatedRequest(endpoints.edgegifts, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${profileData.accessToken}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            query: `mutation OpenGift($giftId: ID!, $receiverProfileId: ID!) { 
                                openGift(input: {giftId: $giftId, receiverProfileId: $receiverProfileId }) { 
                                    success 
                                    error 
                                } 
                            }`,
                            variables: JSON.stringify({
                                giftId: giftId,
                                receiverProfileId: profileData.profileId
                            })
                        })
                    });

                    if (response.ok) {
                        const result = await response.json();
                        if (result.data?.openGift?.success) {
                            return { success: true, giftId };
                        } else {
                            return { success: false, giftId, error: result.data?.openGift?.error };
                        }
                    } else {
                        return { success: false, giftId, error: 'HTTP Error' };
                    }
                } catch (error) {
                    return { success: false, giftId, error: error.message };
                }
            });

            const results = await Promise.all(promises);
            
            // Count successes and update UI
            results.forEach(result => {
                if (result.success) {
                    successCount++;
                    // Remove gift from UI
                    const giftButton = document.querySelector(`button[onclick="openGift('${result.giftId}')"]`);
                    if (giftButton) {
                        const giftItem = giftButton.closest('.gift-item');
                        if (giftItem) {
                            giftItem.remove();
                        }
                    }
                } else {
                    errorCount++;
                    console.error(`Failed to open gift ${result.giftId}:`, result.error);
                }
            });

            // Add small delay between batches
            if (i + batchSize < giftIds.length) {
                await delay(500);
            }
        }

        // Update gifts data
        giftsData = giftsData.filter(gift => {
            const giftButton = document.querySelector(`button[onclick="openGift('${gift.giftId}')"]`);
            return giftButton !== null; // Keep gifts that still have buttons (weren't opened)
        });
        
        updateGiftsCount();
        
        // Show results
        if (successCount > 0) {
            if (errorCount > 0) {
                showNotification(`Opened ${successCount}/${giftIds.length} gifts successfully`, 'warning');
            } else {
                showNotification(translations.allGiftsOpened, 'success');
            }
        } else {
            showNotification('Failed to open any gifts', 'error');
        }

        // Update gifts list display if empty
        if (giftsData.length === 0) {
            document.getElementById('giftsList').innerHTML = '<div style="text-align: center; color: rgba(255,255,255,0.5); padding: 20px;">No gifts available</div>';
        }
        
    } catch (error) {
        console.error('Error opening all gifts:', error);
        showNotification('Error opening gifts', 'error');
    } finally {
        isOpeningGifts = false;
    }
}

// Avatar functions
async function getLatestAvatarVersion(profileId) {
    try {
        const response = await fetch(`https://cdn.moviestarplanet2.com/avatars/${profileId}/games/j68d/version.txt`);
        if (response.ok) {
            const version = await response.text();
            return version.trim();
        }
    } catch (error) {
        console.error('Error getting avatar version:', error);
    }
    return 'latest';
}

async function generateLatestAvatarUrl(profileId) {
    try {
        const version = await getLatestAvatarVersion(profileId);
        return `https://cdn.moviestarplanet2.com/avatars/${profileId}/games/j68d/face/${version}.png`;
    } catch (error) {
        console.error('Error generating avatar URL:', error);
        return `https://cdn.moviestarplanet2.com/avatars/${profileId}/games/j68d/face/latest.png?t=${Date.now()}`;
    }
}

async function getLatestAvatarUrlForGift(profileId) {
    try {
        const version = await getLatestAvatarVersion(profileId);
        return `https://cdn.moviestarplanet2.com/avatars/${profileId}/games/j68d/face/${version}.png`;
    } catch (error) {
        console.error('Error getting gift avatar URL:', error);
        return `https://cdn.moviestarplanet2.com/avatars/${profileId}/games/j68d/face/latest.png?t=${Date.now()}`;
    }
}

// Language functions
function loadLanguage() {
    const savedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        applyLanguage(currentLanguage);
    }
}

function switchLanguage(language) {
    currentLanguage = language;
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
    applyLanguage(language);
    updateLanguageDialog();
    const languageNames = { en: 'English', tr: 'Türkçe', az: 'Azərbaycan Türkcəsi' };
    showNotification(`Language changed to ${languageNames[language]}`, 'success');
}

function applyLanguage(language) {
    const translations = TRANSLATIONS[language] || TRANSLATIONS.en;
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[key]) {
            element.placeholder = translations[key];
        }
    });

    document.title = translations.title || 'MSP2 Tool - OBFX®';
}

function showLanguageDialog() {
    updateLanguageDialog();
    document.getElementById('languageDialog').style.display = 'flex';
}

function hideLanguageDialog() {
    document.getElementById('languageDialog').style.display = 'none';
}

function updateLanguageDialog() {
    const currentLanguageName = document.getElementById('currentLanguageName');
    const englishBtn = document.getElementById('englishBtn');
    const turkishBtn = document.getElementById('turkishBtn');
    const azerbaijaniBtn = document.getElementById('azerbaijaniBtn');
    
    const languageNames = {
        en: 'English',
        tr: 'Türkçe',
        az: 'Azərbaycan Türkcəsi'
    };
    
    currentLanguageName.textContent = languageNames[currentLanguage];
    
    englishBtn.classList.toggle('active', currentLanguage === 'en');
    turkishBtn.classList.toggle('active', currentLanguage === 'tr');
    azerbaijaniBtn.classList.toggle('active', currentLanguage === 'az');
}

// Zoom functions
function loadZoom() {
    const savedZoom = localStorage.getItem(STORAGE_KEYS.ZOOM_LEVEL);
    if (savedZoom) {
        currentZoom = parseFloat(savedZoom);
        applyZoom(currentZoom);
    }
}

function applyZoom(zoomLevel) {
    const content = document.querySelector('.content');
    content.style.transform = `scale(${zoomLevel})`;
    content.style.transformOrigin = 'center center';
    content.classList.add('zoomed');
    updateZoomDisplay();
}

function updateZoomDisplay() {
    const zoomLevelElement = document.getElementById('zoomLevel');
    if (zoomLevelElement) {
        zoomLevelElement.textContent = Math.round(currentZoom * 100) + '%';
    }
    
    document.querySelectorAll('.zoom-preset').forEach(btn => {
        const zoomValue = parseFloat(btn.dataset.zoom);
        btn.classList.toggle('active', Math.abs(zoomValue - currentZoom) < 0.01);
    });
}

function setZoom(zoomLevel) {
    currentZoom = Math.max(0.5, Math.min(2.0, zoomLevel));
    localStorage.setItem(STORAGE_KEYS.ZOOM_LEVEL, currentZoom);
    applyZoom(currentZoom);
}

function zoomIn() {
    setZoom(currentZoom + 0.1);
}

function zoomOut() {
    setZoom(currentZoom - 0.1);
}

function showZoomDialog() {
    updateZoomDisplay();
    document.getElementById('zoomDialog').style.display = 'flex';
}

function hideZoomDialog() {
    document.getElementById('zoomDialog').style.display = 'none';
}

function hideAllScreens() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('successScreen').style.display = 'none';
    document.getElementById('bannedScreen').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('changeMoodScreen').style.display = 'none';
    document.getElementById('changePasswordScreen').style.display = 'none';
    document.getElementById('autographScreen').style.display = 'none';
    document.getElementById('commentsScreen').style.display = 'none';
    document.getElementById('friendsSettingsScreen').style.display = 'none';
    document.getElementById('giftsScreen').style.display = 'none';
    document.getElementById('receiptScreen').style.display = 'none';
    document.getElementById('scammerTestScreen').style.display = 'none';
}

function handleExit() {
    const currentZoomPreserve = currentZoom;

    if (autoSendInterval) {
        clearInterval(autoSendInterval);
        autoSendInterval = null;
    }

    if (tokenExpiryTimer) {
        clearTimeout(tokenExpiryTimer);
        tokenExpiryTimer = null;
    }
    
    if (tokenWarningTimer) {
        clearTimeout(tokenWarningTimer);
        tokenWarningTimer = null;
    }

    localStorage.removeItem(STORAGE_KEYS.PROFILE_DATA);
    localStorage.removeItem(STORAGE_KEYS.REGION);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    localStorage.removeItem(STORAGE_KEYS.GIFTS_DATA);
    localStorage.removeItem(STORAGE_KEYS.FRIENDS_DATA);
    localStorage.removeItem(STORAGE_KEYS.LOGIN_ID);
    localStorage.removeItem(STORAGE_KEYS.TOKEN_TIMESTAMP);

    sessionStorage.clear();

    if ('caches' in window) {
        caches.keys().then(names => {
            names.forEach(name => {
                if (name.includes('moviestarplanet2') || name.includes('mspapis')) {
                    caches.delete(name);
                }
            });
        });
    }

    profileData = null;
    userData = null;
    giftsData = [];
    friendsData = { relationships: [], requestsIn: [], blocked: [] };
    friendsProfiles = {};
    currentRegion = 'us';
    currentGender = 'Boy';
    currentTargetProfileId = null;
    currentTargetUsername = null;
    isAutoGreeting = false;
    greetingStats = { count: 0, type: 'Autograph' };
    isProcessing = false;
    isOpeningGifts = false;
    currentMoodIndex = 0;
    loginId = null;
    currentWaydId = null;
    currentCommentsData = [];
    tokenTimestamp = null;
    currentFriendsTab = 'friends';
    allComments = [];
    currentCommentsPage = 0;
    currentUserPlan = 'Free';
    currentFriendsPage = 0;
    currentRequestsPage = 0;
    currentBlockedPage = 0;
    isVipFilterActive = false;

    currentZoom = currentZoomPreserve;

    if (window.tempProfileData) {
        delete window.tempProfileData;
    }
    if (window.tempCredentials) {
        delete window.tempCredentials;
    }

    document.getElementById('websocketInput').value = '';
    document.getElementById('usernameInput').value = '';
    document.getElementById('passwordInput').value = '';
    document.getElementById('autographUsernameInput').value = '';
    document.getElementById('greetingTypeSelector').selectedIndex = 0;
    document.getElementById('scammerTestUsernameInput').value = '';
    document.getElementById('vipFilterBtn').classList.remove('active');

    switchLoginMethod('websocket');

    document.getElementById('autographLog').innerHTML = '';
    document.getElementById('progressContainer').style.display = 'none';
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('progressText').textContent = '0%';
    document.getElementById('progressStatus').textContent = '';
    document.getElementById('giftsCount').textContent = '0';
    document.getElementById('commentsCount').textContent = '(0)';
    document.getElementById('scammerTestResult').style.display = 'none';

    document.getElementById('username').textContent = 'Loading...';
    document.getElementById('userPlan').textContent = 'Free';
    document.getElementById('userPlan').className = 'user-plan free';
    document.getElementById('starcoins').textContent = '0';
    document.getElementById('diamonds').textContent = '0';
    document.getElementById('userLevel').textContent = '1';
    document.getElementById('xpProgress').style.width = '0%';
    document.getElementById('xpText').textContent = '0 / 100';
    document.getElementById('userAvatar').src = '';

    document.getElementById('regionDialog').style.display = 'none';
    document.getElementById('languageDialog').style.display = 'none';
    document.getElementById('planDialog').style.display = 'none';
    document.getElementById('zoomDialog').style.display = 'none';
    document.getElementById('deleteAllDialog').style.display = 'none';
    document.getElementById('fastStartDialog').style.display = 'none';

    document.getElementById('exitBtn').style.display = 'none';
    document.getElementById('languageBtn').style.display = 'none';
    document.getElementById('planBtn').style.display = 'none';
    document.getElementById('zoomBtn').style.display = 'none';
    document.getElementById('autographBtn').style.display = 'none';
    document.getElementById('changePasswordBtn').style.display = 'none';

    hideAllScreens();
    document.getElementById('loginScreen').style.display = 'flex';

    showNotification('Successfully logged out. Account credentials and zoom setting preserved.', 'success');
}

function parseWebSocketData(input) {
    try {
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

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');

    notification.className = `notification ${type}`;
    notification.textContent = message;

    container.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

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
window.openGift = openGift;
window.removeFriend = removeFriend;
window.acceptRequest = acceptRequest;
window.rejectRequest = rejectRequest;
window.unblockUser = unblockUser;
window.deleteComment = deleteComment;
