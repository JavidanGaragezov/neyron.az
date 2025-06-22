class AIToolsCatalog {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = {
            en: {
                searchPlaceholder: "Search AI Tools...",
                categories: {
                    all: "📦 All",
                    image: "🖼️ Image",
                    text: "💬 Text",
                    video: "🎥 Video",
                    productivity: "✅ Productivity",
                    finance: "💰 Finance",
                    ecommerce: "🛒 E-commerce",
                    coding: "💻 Coding",
                    education: "🎓 Education",
                    research: "🔍 Research",
                    cybersecurity: "🛡️ Cybersecurity",
                    healthcare: "🏥 Healthcare",
                    webbuilders: "🌐 Web Builders",
                    audio: "🎵 Audio"
                },
                visitButton: "Visit Website"
            },
            az: {
                searchPlaceholder: "AI Alətləri axtar...",
                categories: {
                    all: "📦 Hamısı",
                    image: "🖼️ Şəkil",
                    text: "💬 Mətn",
                    video: "🎥 Video",
                    productivity: "✅ Məhsuldarlıq",
                    finance: "💰 Maliyyə",
                    ecommerce: "🛒 Elektron ticarət",
                    coding: "💻 Kodlaşdırma",
                    education: "🎓 Təhsil",
                    research: "🔍 Tədqiqat",
                    cybersecurity: "🛡️ Kibertəhlükəsizlik",
                    healthcare: "🏥 Səhiyyə",
                    webbuilders: "🌐 Veb qurucular",
                    audio: "🎵 Audio"
                },
                visitButton: "Sayta bax"
            }
        };
        
        this.tools = [
            {
                id: 1,
                name: "DALL-E",
                category: "image",
                description: "AI image generator creating pictures from text prompts quickly",
                description_az: "Mətn əsasında sürətli şəkildə şəkillər yaradan AI generator",
                url: "https://labs.openai.com/",
                logo: "dalle-logo.png",
                image: "dalle-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 2,
                name: "ChatGPT",
                category: "text",
                description: "Advanced AI chatbot capable of natural human-like conversations and answers",
                description_az: "Təbii insan söhbətləri apara bilən inkişaf etmiş AI çatbot",
                url: "https://chat.openai.com",
                logo: "chatgpt-logo.png",
                image: "chatgpt-image.jpg",
                azSupport: true,
                monetization: "Freemium"
            },
            {
                id: 3,
                name: "Arya AI",
                category: "finance",
                description: "AI-powered fraud detection system for financial transactions and banking",
                description_az: "Maliyyə əməliyyatlarında saxtakarlığı aşkarlayan AI əsaslı sistem",
                url: "https://arya.ai/",
                logo: "arya-logo.png",
                image: "arya-image.jpg",
                azSupport: false,
                monetization: "Paid"
            },
            {
                id: 4,
                name: "Zest AI",
                category: "finance",
                description: "AI platform that improves loan approvals using alternative data",
                description_az: "Alternativ məlumatlardan istifadə edərək kredit təsdiqlərini yaxşılaşdıran AI",
                url: "https://www.zest.ai/",
                logo: "zest-logo.png",
                image: "zest-image.jpg",
                azSupport: false,
                monetization: "Paid"
            },
            {
                id: 5,
                name: "AlphaSense",
                category: "finance",
                description: "AI-powered financial research platform analyzing market trends and data",
                description_az: "Bazar trendlərini və məlumatlarını təhlil edən maliyyə platforması",
                url: "https://www.alpha-sense.com/",
                logo: "alphasense-logo.png",
                image: "alphasense-image.jpg",
                azSupport: false,
                monetization: "Paid"
            },
            {
                id: 6,
                name: "PandaRocket",
                category: "ecommerce",
                description: "Comprehensive AI toolkit for e-commerce marketing and sales optimization",
                description_az: "Elektron ticarət marketinqi üçün geniş AI alətlər dəsti",
                url: "https://pandarocket.ai/",
                logo: "pandarocket-logo.png",
                image: "pandarocket-image.jpg",
                azSupport: false,
                monetization: "Paid"
            },
            {
                id: 7,
                name: "Copy.ai",
                category: "ecommerce",
                description: "AI content generator for marketing materials in multiple languages",
                description_az: "Çoxdilli marketinq materialları yaradan AI məzmun generatoru",
                url: "#",
                logo: "copyai-logo.png",
                image: "copyai-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 8,
                name: "Qodo",
                category: "coding",
                description: "AI coding assistant that generates and tests software code",
                description_az: "Proqram kodu yaradan və test edən AI köməkçisi",
                url: "https://www.qodo.ai/",
                logo: "qodo-logo.png",
                image: "qodo-image.jpg",
                azSupport: false,
                monetization: "Paid"
            },
            {
                id: 9,
                name: "UiPath",
                category: "coding",
                description: "Robotic process automation platform powered by artificial intelligence",
                description_az: "Süni intellekt əsaslı robotlaşdırılmış proses avtomatlaşdırma platforması",
                url: "https://www.uipath.com/ai",
                logo: "uipath-logo.png",
                image: "uipath-image.jpg",
                azSupport: false,
                monetization: "Paid"
            },
            {
                id: 10,
                name: "Flint",
                category: "education",
                description: "AI platform enabling teachers to create personalized learning tutors",
                description_az: "Müəllimlərə fərdiləşdirilmiş öyrənmə köməkçiləri yaratmağa imkan verən AI",
                url: "https://flintk12.com",
                logo: "flint-logo.png",
                image: "flint-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 11,
                name: "Magicschool",
                category: "education",
                description: "AI teaching assistant that automates lesson planning and grading",
                description_az: "Dərs planlamasını və qiymətləndirməni avtomatlaşdıran AI müəllim köməkçisi",
                url: "https://magicschool.ai",
                logo: "magicschool-logo.png",
                image: "magicschool-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 12,
                name: "Elicit",
                category: "research",
                description: "AI research assistant that summarizes academic papers automatically",
                description_az: "Akademik məqalələri avtomatik şəkildə xülasə edən AI köməkçisi",
                url: "https://elicit.com",
                logo: "elicit-logo.png",
                image: "elicit-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 13,
                name: "Darktrace",
                category: "cybersecurity",
                description: "AI cybersecurity platform detecting threats in enterprise networks instantly",
                description_az: "Korporativ şəbəkələrdə təhdidləri ani aşkarlayan kibertəhlükəsizlik platforması",
                url: "https://darktrace.com",
                logo: "darktrace-logo.png",
                image: "darktrace-image.jpg",
                azSupport: false,
                monetization: "Paid"
            },
            {
                id: 14,
                name: "ElevenLabs Scribe",
                category: "audio",
                description: "AI transcription service converting speech to text with precision",
                description_az: "Nitqi dəqiq şəkildə mətnə çevirən transkripsiya xidməti",
                url: "https://elevenlabs.io/scribe",
                logo: "elevenlabs-scribe-logo.png",
                image: "elevenlabs-scribe-image.jpg",
                azSupport: true,
                monetization: "Freemium"
            },
            {
                id: 15,
                name: "Voiser AI",
                category: "audio",
                description: "Speech recognition AI supporting Azerbaijani language with high accuracy",
                description_az: "Azərbaycan dilini yüksək dəqiqliklə tanıyan nitq analiz sistemi",
                url: "https://voiser.ai",
                logo: "voiser-logo.png",
                image: "voiser-image.jpg",
                azSupport: true,
                monetization: "Freemium"
            },
            {
                id: 16,
                name: "Ada Health",
                category: "healthcare",
                description: "AI medical assistant providing symptom analysis and health advice",
                description_az: "Simptom təhlili və sağlamlıq məsləhətləri verən tibbi köməkçi",
                url: "https://ada.com",
                logo: "ada-logo.png",
                image: "ada-image.jpg",
                azSupport: false,
                monetization: "Free"
            },
            {
                id: 17,
                name: "Softr",
                category: "webbuilders",
                description: "No-code platform for building AI-powered web applications easily",
                description_az: "Kodsuz şəkildə AI veb tətbiqlər yaratma platforması",
                url: "https://www.softr.io/ai-app-generator",
                logo: "softr-logo.png",
                image: "softr-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 18,
                name: "Glide",
                category: "webbuilders",
                description: "AI platform transforming spreadsheets into functional mobile apps",
                description_az: "Cədvəlləri funksional mobil tətbiqlərə çevirən AI platforması",
                url: "https://glideapps.com",
                logo: "glide-logo.png",
                image: "glide-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 19,
                name: "Google Bard (Gemini)",
                category: "text",
                description: "Google's conversational AI assistant answering questions comprehensively",
                description_az: "Google-un suallara geniş cavablar verən söhbət AI-sı",
                url: "https://gemini.google.com",
                logo: "bard-logo.png",
                image: "bard-image.jpg",
                azSupport: false,
                monetization: "Free"
            },
            {
                id: 20,
                name: "Microsoft Copilot (Bing)",
                category: "text",
                description: "AI assistant integrated with Microsoft products and services",
                description_az: "Microsoft məhsulları ilə inteqrasiya olunmuş AI köməkçisi",
                url: "https://copilot.microsoft.com",
                logo: "copilot-logo.png",
                image: "copilot-image.jpg",
                azSupport: true,
                monetization: "Freemium"
            },
            {
                id: 21,
                name: "Perplexity AI",
                category: "text",
                description: "AI search engine providing detailed answers with sources",
                description_az: "Mənbələri ilə birlikdə ətraflı cavablar verən axtarış sistemi",
                url: "https://perplexity.ai",
                logo: "perplexity-logo.png",
                image: "perplexity-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 22,
                name: "DeepL Translator",
                category: "text",
                description: "AI-powered translation tool with exceptional language accuracy",
                description_az: "Yüksək dəqiqlikli dil tərcüməsi edən AI aləti",
                url: "https://www.deepl.com",
                logo: "deepl-logo.png",
                image: "deepl-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 23,
                name: "ElevenLabs",
                category: "audio",
                description: "AI voice generator creating natural-sounding speech from text",
                description_az: "Mətndən təbii səs yaradan AI səs generatoru",
                url: "https://elevenlabs.io",
                logo: "elevenlabs-logo.png",
                image: "elevenlabs-image.jpg",
                azSupport: true,
                monetization: "Freemium"
            },
            {
                id: 24,
                name: "CapCut",
                category: "video",
                description: "Video editing tool with AI-powered creative features",
                description_az: "AI əsaslı yaradıcı xüsusiyyətləri olan video editor",
                url: "https://www.capcut.com",
                logo: "capcut-logo.png",
                image: "capcut-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 25,
                name: "Stable Diffusion (DreamStudio)",
                category: "image",
                description: "Open-source AI model generating images from text",
                description_az: "Mətndən şəkil yaradan açıq mənbəli AI modeli",
                url: "https://dreamstudio.ai",
                logo: "stablediffusion-logo.png",
                image: "stablediffusion-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 26,
                name: "Semantic Scholar",
                category: "research",
                description: "AI academic search engine analyzing research papers deeply",
                description_az: "Elmi məqalələri dərin təhlil edən axtarış sistemi",
                url: "https://semanticscholar.org",
                logo: "semanticscholar-logo.png",
                image: "semanticscholar-image.jpg",
                azSupport: false,
                monetization: "Free"
            },
            {
                id: 27,
                name: "Claude",
                category: "text",
                description: "AI assistant focused on helpful and harmless conversations",
                description_az: "Faydalı və təhlükəsiz söhbətlər üçün yaradılmış AI köməkçisi",
                url: "https://claude.ai",
                logo: "claude-logo.png",
                image: "claude-image.jpg",
                azSupport: true,
                monetization: "Freemium"
            },
            {
                id: 28,
                name: "Grammarly",
                category: "productivity",
                description: "AI writing assistant improving grammar and writing style",
                description_az: "Qrammatika və yazı üslubunu yaxşılaşdıran yazı köməkçisi",
                url: "https://grammarly.com",
                logo: "grammarly-logo.png",
                image: "grammarly-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 29,
                name: "Midjourney",
                category: "image",
                description: "AI art generator creating stunning images from text",
                description_az: "Mətndən gözəl sənət əsərləri yaradan AI generatoru",
                url: "https://midjourney.com",
                logo: "midjourney-logo.png",
                image: "midjourney-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 30,
                name: "Synthesis",
                category: "video",
                description: "AI video platform generating realistic avatar presentations",
                description_az: "Realistik avatar təqdimatları yaradan AI video platforması",
                url: "https://synthesis.io",
                logo: "synthesis-logo.png",
                image: "synthesis-image.jpg",
                azSupport: false,
                monetization: "Paid"
            },
            {
                id: 31,
                name: "GitHub Copilot",
                category: "coding",
                description: "AI pair programmer suggesting code in real-time",
                description_az: "Real vaxt kod tövsiyələri verən AI proqramçı",
                url: "https://copilot.github.com",
                logo: "githubcopilot-logo.png",
                image: "githubcopilot-image.jpg",
                azSupport: true,
                monetization: "Paid"
            },
            {
                id: 32,
                name: "DeepSeek Chat",
                category: "text",
                description: "AI chatbot with advanced long-context understanding capabilities",
                description_az: "Uzun mətni başa düşə bilən inkişaf etmiş çatbot",
                url: "https://deepseek.com",
                logo: "deepseek-logo.png",
                image: "deepseek-image.jpg",
                azSupport: false,
                monetization: "Free"
            },
            {
                id: 33,
                name: "Grok",
                category: "text",
                description: "AI chatbot with real-time knowledge and humor",
                description_az: "Real vaxt bilik və yumor hissi olan çatbot",
                url: "https://grok.x.ai",
                logo: "grok-logo.png",
                image: "grok-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 34,
                name: "Mistral AI",
                category: "text",
                description: "Open-weight AI models delivering high performance efficiently",
                description_az: "Yüksək performanslı açıq çəkili AI modelləri",
                url: "https://mistral.ai",
                logo: "mistral-logo.png",
                image: "mistral-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 35,
                name: "Anthropic Claude 3",
                category: "text",
                description: "Next-generation AI assistant emphasizing safety and reliability",
                description_az: "Təhlükəsizlik və etibarlılığa üstünlük verən yeni nəsil AI",
                url: "https://claude.ai",
                logo: "claude3-logo.png",
                image: "claude3-image.jpg",
                azSupport: true,
                monetization: "Freemium"
            },
            {
                id: 36,
                name: "Runway ML",
                category: "video",
                description: "AI creative suite for professional video editing",
                description_az: "Peşəkar video redaktə üçün AI alətlər dəsti",
                url: "https://runwayml.com",
                logo: "runway-logo.png",
                image: "runway-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 37,
                name: "Pika Labs",
                category: "video",
                description: "AI video generator creating clips from text prompts",
                description_az: "Mətn əsasında video klip yaradan AI generator",
                url: "https://pika.art",
                logo: "pika-logo.png",
                image: "pika-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 38,
                name: "HeyGen",
                category: "video",
                description: "AI video platform with lifelike digital avatars",
                description_az: "Həqiqətə bənzər rəqəmsal avatar ilə video platforması",
                url: "https://heygen.com",
                logo: "heygen-logo.png",
                image: "heygen-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 39,
                name: "Leonardo AI",
                category: "image",
                description: "AI art generator specializing in game assets",
                description_az: "Oyun dizaynı üçün xüsusi şəkillər yaradan AI",
                url: "https://leonardo.ai",
                logo: "leonardo-logo.png",
                image: "leonardo-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 40,
                name: "Ideogram",
                category: "image",
                description: "AI image generator with advanced text rendering",
                description_az: "İnkişaf etmiş mətn renderinqi ilə şəkil generatoru",
                url: "https://ideogram.ai",
                logo: "ideogram-logo.png",
                image: "ideogram-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 41,
                name: "Kaiber",
                category: "video",
                description: "AI video generator transforming ideas into visual stories",
                description_az: "Fikirləri vizual hekayələrə çevirən AI video generator",
                url: "https://kaiber.ai",
                logo: "kaiber-logo.png",
                image: "kaiber-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 42,
                name: "Suno AI",
                category: "audio",
                description: "AI music generator creating original songs from text",
                description_az: "Mətndən orijinal mahnılar yaradan AI musiqi generatoru",
                url: "https://suno.com",
                logo: "suno-logo.png",
                image: "suno-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 43,
                name: "Udio",
                category: "audio",
                description: "AI music generator producing high-quality audio tracks",
                description_az: "Yüksək keyfiyyətli audio yollar yaradan musiqi generatoru",
                url: "https://udio.com",
                logo: "udio-logo.png",
                image: "udio-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 44,
                name: "Notion AI",
                category: "productivity",
                description: "AI-powered workspace for notes, tasks, and databases",
                description_az: "Qeydlər, tapşırıqlar və verilənlər üçün AI iş sahəsi",
                url: "https://notion.so",
                logo: "notion-logo.png",
                image: "notion-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 45,
                name: "Otter AI",
                category: "audio",
                description: "AI meeting assistant recording and transcribing conversations",
                description_az: "Görüşləri qeyd edib yazıya çevirən AI köməkçisi",
                url: "https://otter.ai",
                logo: "otter-logo.png",
                image: "otter-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 46,
                name: "Fireflies AI",
                category: "productivity",
                description: "AI notetaker joining meetings and capturing discussions",
                description_az: "Görüşlərdə iştirak edib müzakirələri qeyd edən AI",
                url: "https://fireflies.ai",
                logo: "fireflies-logo.png",
                image: "fireflies-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 47,
                name: "Tome",
                category: "productivity",
                description: "AI storytelling platform for creating engaging presentations",
                description_az: "Maraqlı təqdimatlar yaratmaq üçün hekayə platforması",
                url: "https://tome.app",
                logo: "tome-logo.png",
                image: "tome-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 48,
                name: "Gamma",
                category: "productivity",
                description: "AI tool creating beautiful presentations and documents",
                description_az: "Gözəl təqdimatlar və sənədlər yaradan AI aləti",
                url: "https://gamma.app",
                logo: "gamma-logo.png",
                image: "gamma-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 49,
                name: "Rewind AI",
                category: "productivity",
                description: "AI search engine indexing everything you see",
                description_az: "Gördüyünüz hər şeyi indeksləyən AI axtarış sistemi",
                url: "https://rewind.ai",
                logo: "rewind-logo.png",
                image: "rewind-image.jpg",
                azSupport: false,
                monetization: "Paid"
            },
            {
                id: 50,
                name: "Cursor",
                category: "coding",
                description: "AI-first code editor understanding your entire codebase",
                description_az: "Bütün kod bazanızı başa düşən AI redaktor",
                url: "https://cursor.sh",
                logo: "cursor-logo.png",
                image: "cursor-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 51,
                name: "Tabnine",
                category: "coding",
                description: "AI code completion supporting multiple programming languages",
                description_az: "Çoxlu proqramlaşdırma dillərini dəstəkləyən kod tamamlama AI",
                url: "https://tabnine.com",
                logo: "tabnine-logo.png",
                image: "tabnine-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 52,
                name: "Phind",
                category: "coding",
                description: "AI search engine specifically for developers questions",
                description_az: "Proqramçıların sualları üçün xüsusi AI axtarış sistemi",
                url: "https://phind.com",
                logo: "phind-logo.png",
                image: "phind-image.jpg",
                azSupport: false,
                monetization: "Free"
            },
            {
                id: 53,
                name: "Poe",
                category: "text",
                description: "Platform to chat with multiple AI models simultaneously",
                description_az: "Eyni anda çoxlu AI modelləri ilə söhbət platforması",
                url: "https://poe.com",
                logo: "poe-logo.png",
                image: "poe-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            },
            {
                id: 54,
                name: "Character AI",
                category: "text",
                description: "AI platform for creating and chatting with characters",
                description_az: "Personajlar yaratmaq və onlarla söhbət etmək platforması",
                url: "https://character.ai",
                logo: "characterai-logo.png",
                image: "characterai-image.jpg",
                azSupport: false,
                monetization: "Freemium"
            }
        ];
    }

    init() {
        // Set initial switch position
        const switchElement = document.querySelector('.switch');
        if (this.currentLanguage === 'en') {
            switchElement.classList.add('en');
        }
        
        this.setupEventListeners();
        this.renderTools();
        this.updateLanguageUI();
    }

    setupEventListeners() {
        // Category filtering
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                this.filterTools(category);
                document.querySelector('.filter-btn.active').classList.remove('active');
                button.classList.add('active');
            });
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            this.searchTools(searchTerm);
        });

        // Modal handling
        const modal = document.getElementById('toolModal');
        const closeButton = document.querySelector('.close-button');

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Language switch
        const switchElement = document.querySelector('.switch');
        switchElement.addEventListener('click', () => {
            this.currentLanguage = this.currentLanguage === 'en' ? 'az' : 'en';
            if (this.currentLanguage === 'en') {
                switchElement.classList.add('en');
            } else {
                switchElement.classList.remove('en');
            }
            localStorage.setItem('language', this.currentLanguage);
            this.updateLanguageUI();
            this.renderTools();
        });
    }

    updateLanguageUI() {
        // Update search placeholder
        document.getElementById('searchInput').placeholder = 
            this.translations[this.currentLanguage].searchPlaceholder;
            
        // Update category buttons
        document.querySelectorAll('.filter-btn').forEach(button => {
            const category = button.dataset.category;
            button.textContent = this.translations[this.currentLanguage].categories[category];
        });
    }

    renderTools() {
        const toolsGrid = document.getElementById('toolsGrid');
        toolsGrid.innerHTML = '';

        this.tools.forEach(tool => {
            const card = this.createToolCard(tool);
            toolsGrid.appendChild(card);
        });
    }

    createToolCard(tool) {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.dataset.category = tool.category;

        const description = this.currentLanguage === 'az' && tool.description_az 
            ? tool.description_az 
            : tool.description;

        card.innerHTML = `
            ${tool.image ? `<img src="images/${tool.image}" class="tool-card-image" alt="${tool.name} background">` : ''}
            <div class="tool-card-content">
                <div class="tool-icon">
                    <img src="logos/${tool.logo}" alt="${tool.name} logo">
                </div>
                <h3 class="tool-name">${tool.name}</h3>
                <p class="tool-description">${description}</p>
                <div class="tool-meta">
                    <span class="az-support ${tool.azSupport ? 'supported' : 'not-supported'}">
                        ${tool.azSupport ? '✅ AZ' : '❌ AZ'}
                    </span>
                    <span class="monetization ${tool.monetization.toLowerCase()}">
                        ${tool.monetization}
                    </span>
                </div>
                <button class="visit-button" onclick="event.stopPropagation(); window.open('${tool.url}', '_blank')">
                    ${this.translations[this.currentLanguage].visitButton}
                </button>
            </div>
        `;

        card.addEventListener('click', () => {
            this.showToolDetails(tool);
        });

        return card;
    }

    showToolDetails(tool) {
        const modal = document.getElementById('toolModal');
        const modalBody = modal.querySelector('.modal-body');

        const description = this.currentLanguage === 'az' && tool.description_az 
            ? tool.description_az 
            : tool.description;

        modalBody.innerHTML = `
            ${tool.image ? `<img src="images/${tool.image}" alt="${tool.name}" class="modal-image">` : ''}
            <div class="tool-details">
                <div class="tool-icon" style="margin: 0 auto 1rem; width: 80px; height: 80px;">
                    <img src="logos/${tool.logo}" alt="${tool.name} logo" style="width: 60px; height: 60px;">
                </div>
                <h2 style="text-align: center; margin-bottom: 1rem;">${tool.name}</h2>
                <p style="text-align: center; margin-bottom: 1.5rem; font-size: 1.1rem;">${description}</p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                    <div>
                        <h4>Category</h4>
                        <p>${this.translations[this.currentLanguage].categories[tool.category]}</p>
                    </div>
                    <div>
                        <h4>Language Support</h4>
                        <p>${tool.azSupport ? '✅ Azerbaijani Supported' : '❌ No Azerbaijani Support'}</p>
                    </div>
                    <div>
                        <h4>Pricing Model</h4>
                        <p class="${tool.monetization.toLowerCase()}">${tool.monetization}</p>
                    </div>
                    <div>
                        <h4>Website</h4>
                        <a href="${tool.url}" target="_blank" style="color: var(--primary-color);">Visit Site</a>
                    </div>
                </div>
                
                <button class="visit-button" style="width: 100%;" onclick="window.open('${tool.url}', '_blank')">
                    ${this.translations[this.currentLanguage].visitButton}
                </button>
            </div>
        `;

        modal.style.display = 'block';
    }

    filterTools(category) {
        const cards = document.querySelectorAll('.tool-card');
        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchTools(searchTerm) {
        const cards = document.querySelectorAll('.tool-card');
        
        if (!searchTerm) {
            // If search is empty, show all cards
            cards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }

        cards.forEach(card => {
            const toolName = card.querySelector('.tool-name').textContent.toLowerCase();
            const toolDescription = card.querySelector('.tool-description').textContent.toLowerCase();
            
            // Search in both name and description
            if (toolName.includes(searchTerm)) {
                card.style.display = 'block';
            } else if (toolDescription.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Initialize the catalog when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const catalog = new AIToolsCatalog();
    catalog.init();
});