document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // Multilanguage (i18n) Logic
    // ---------------------------------------------------------
    const translations = {
        ko: {
            "nav-tech": "기술 사양",
            "nav-benefits": "경제적 가치",
            "nav-comparison": "비교 결과",
            "hero-badge": "해양수산부 2025 공급망 안정화 선도사업자 선정",
            "hero-title": "부식 방지. <br>습기 완전 차단.<br>화물 보호의 미래.",
            "hero-subline": "전 세계 화물의 10%가 습기로 손상됩니다.<BR> ES 컨테이너는 손상률 0%에 도전합니다.",
            "btn-tech": "기술 사양 보기",
            "btn-quote": "상담 신청",
            "comp-title": "명확한 차이",
            "comp-subtitle": "일반 컨테이너로 운송되는 철강 화물은 컨테이너 내부의 습기로 인해 녹이 슬기 쉬우며,<br>일반 화물 또한 부식의 위험에 노출되어 있습니다.",
            "comp-after-label": "ES 컨테이너",
            "comp-after-sub": "완전 기밀 구조 + 스틸 플로어 = 부식/곰팡이 원천 차단",
            "comp-before-label": "일반 컨테이너",
            "comp-before-sub": "목재 바닥의 습기 흡수, 통풍구로 인한 부식 발생",
            "calc-title": "✦ 경제적 가치 창출 ✦",
            "calc-heading": "부식으로 인한 손실을 <br> 멈추십시요!!",
            "calc-highlight": "비싼 포장재 및 방청 비용 Zero.<br>40FT 컨테이너 1회 운송 시 절감효과",
            "calc-summary": "<span class=\"big-number\">540만 원</span>",
            "th-cat": "항목",
            "th-conv": "일반 컨테이너",
            "th-es": "ES 컨테이너",
            "th-save": "절감액",
            "row-pkg": "포장 비용",
            "row-rust": "방청 처리",
            "row-log": "물류 관리",
            "sav-pkg": "-250만원",
            "sav-rust": "-200만원",
            "sav-log": "-90만원",
            "val-pkg-cost": "250만원",
            "val-rust-cost": "200만원",
            "val-es-zero": "0",
            "val-std": "표준 비용",
            "val-opt": "최적화 완료",
            "row-total": "총 절감액",
            "val-total": "회당 총 540만원 절감",
            "tech-title": "과학적 증명",
            "tech-subtitle": "ES컨테이너는 완전 기밀기술, 내외부 압력차를 이용한 능동형 제습 그리고 수명 20년의 스틸 플로어를 통해 품질과 효과를 과학적으로 증명하고 있습니다.",
            "tech-1-t": "완전 기밀 기술",
            "tech-1-d": "통풍구를 없애고 이중 고무 기밀 도어를 적용하여 외부 습기를 완벽히 차단합니다.",
            "tech-1-p": "특허 10-2024-0069601",
            "tech-2-t": "능동형 제습",
            "tech-2-d": "내부/외부 압력차를 이용한 자연 제습 및 능동형 제습 시스템으로 습도 0% 도전.",
            "tech-2-p": "특허 10-2023-0184259",
            "tech-3-t": "스틸 플로어",
            "tech-3-d": "수명 20년(기존 15년 대비 +5년). 파손 시 부분 용접 수리가 가능한 영구적 내구성.",
            "esg-title": "친환경 물류",
            "esg-1-t": "나무 제로",
            "esg-1-d": "목재 바닥 미사용으로 산림 훼손 방지",
            "esg-2-t": "폐기물 제로",
            "esg-2-d": "비닐, 방청제 등 산업 폐기물 발생 없음",
            "esg-3-t": "탄소 저감",
            "esg-3-d": "기존 대비 500kg 경량화로 탄소 배출 저감",
            "trust-title": "신뢰와 인증",
            "cert-1": "로이드 선급 인증",
            "cert-1-s": "제조: Qingdao Double Friend",
            "cert-2": "18개 이상의 특허",
            "cert-2-s": "국내 및 글로벌 특허 등록 완료",
            "form-title": "상담 신청",
            "label-name": "회사명",
            "label-cargo": "화물 종류",
            "label-vol": "예상 물동량 (월/TEU)",
            "opt-select": "선택하세요",
            "opt-steel": "철강 / 금속",
            "opt-elec": "전자제품",
            "opt-grain": "곡물 / 식품",
            "opt-auto": "자동차 부품",
            "opt-gen": "일반 화물",
            "btn-submit": "상담 신청하기",
            "footer-info": "신조 로지텍 | 부산시 해운대구 센텀중앙로 90 | Copyright © 2026 Shin-Jo Logitech. All rights reserved.",
            "placeholder-name": "회사명을 입력하세요"
        },
        en: {
            "nav-tech": "Technology",
            "nav-benefits": "Benefits",
            "nav-comparison": "Result",
            "hero-badge": "Selected as 2025 Supply Chain Leader by MOF",
            "hero-title": "Rust-Free. <br>Moisture-Free.<br>The Future of Cargo Protection.",
            "hero-subline": "10% of global cargo is damaged by moisture.<BR>ES Container aims for 0% damage rate.",
            "btn-tech": "View Tech Specs",
            "btn-quote": "Contact Us",
            "comp-title": "The Difference is Clear",
            "comp-subtitle": "Steel cargo transported in conventional containers often becomes rusty due to moisture inside the container, and general cargo is also subject to corrosion.",
            "comp-after-label": "ES Container",
            "comp-after-sub": "Air-tight structure + Steel floor = Zero rust/mold",
            "comp-before-label": "Conventional",
            "comp-before-sub": "Wooden floor moisture absorption, vent-induced rust",
            "calc-title": "✦ Economic Value ✦",
            "calc-heading": "Stop losing money <br> to rust!!",
            "calc-highlight": "Reduce packaging and rust-prevention costs to zero.<br>Savings per 40FT container trip",
            "calc-summary": "<span class=\"big-number\">5.4M KRW</span>",
            "th-cat": "Category",
            "th-conv": "Conventional",
            "th-es": "ES Container",
            "th-save": "Savings",
            "row-pkg": "Packaging",
            "row-rust": "Rust Prevention",
            "row-log": "Logistics",
            "sav-pkg": "-2.5M KRW",
            "sav-rust": "-2.0M KRW",
            "sav-log": "-0.9M KRW",
            "val-pkg-cost": "2.5M KRW",
            "val-rust-cost": "2.0M KRW",
            "val-es-zero": "0",
            "val-std": "Standard",
            "val-opt": "Optimized",
            "row-total": "Total Savings",
            "val-total": "Total 5.4M KRW Saved / Trip",
            "tech-title": "Scientific Proof",
            "tech-subtitle": "ES Container scientifically proves its quality and effectiveness through total air-tight technology, active dehumidification using pressure differences, and a steel floor with a 20-year lifespan.",
            "tech-1-t": "Air-Tight Tech",
            "tech-1-d": "Eliminate vents and use dual rubber gaskets to perfectly block external moisture.",
            "tech-1-p": "Patent 10-2024-0069601",
            "tech-2-t": "Active Dehumidification",
            "tech-2-d": "Natural/Active dehumidification using pressure difference for 0% humidity.",
            "tech-2-p": "Patent 10-2023-0184259",
            "tech-3-t": "Steel Floor",
            "tech-3-d": "20-year lifespan (+5 years over wood). Durable and repairable by welding.",
            "esg-title": "Green Logistics",
            "esg-1-t": "Zero Wood",
            "esg-1-d": "Prevents deforestation by using steel floors instead of wood.",
            "esg-2-t": "Zero Waste",
            "esg-2-d": "No industrial waste like vinyl or rust inhibitors.",
            "esg-3-t": "Carbon Reduction",
            "esg-3-d": "500kg lighter than conventional for lower carbon emissions.",
            "trust-title": "Trust & Certification",
            "cert-1": "Lloyd's Register Certified",
            "cert-1-s": "Manufactured by Qingdao Double Friend",
            "cert-2": "18+ Patents",
            "cert-2-s": "Registered both domestically and globally",
            "form-title": "Inquiry",
            "label-name": "Company Name",
            "label-cargo": "Cargo Type",
            "label-vol": "Monthly volume (TEU)",
            "opt-select": "Select one",
            "opt-steel": "Steel / Metal",
            "opt-elec": "Electronics",
            "opt-grain": "Grains / Food",
            "opt-auto": "Automotive",
            "opt-gen": "General Cargo",
            "btn-submit": "Request Inquiry",
            "footer-info": "Shin-Jo Logitech | 90 Centum Jungang-ro, Haeundae-gu, Busan | Copyright © 2026 Shin-Jo Logitech.",
            "placeholder-name": "Enter company name"
        },
        jp: {
            "nav-tech": "技術仕様",
            "nav-benefits": "経済的価値",
            "nav-comparison": "比較結果",
            "hero-badge": "2025年海洋水産部サプライチェーン安定化リーダー選定",
            "hero-title": "防錆・<br>完全防湿。<br>貨物保護の未来。",
            "hero-subline": "世界の貨物の10%が湿気で損傷します。<BR>ESコンテナは損傷率0%に挑戦します。",
            "btn-tech": "技術仕様を見る",
            "btn-quote": "お問い合わせ",
            "comp-title": "違いは明確です",
            "comp-subtitle": "従来のコンテナで輸送される鋼鉄貨物は、内部の湿気により錆びやすく、一般貨物も腐食の危険にさらされています。",
            "comp-after-label": "ESコンテナ",
            "comp-after-sub": "完全気密構造 + スチールフロア = 錆・カビを根本遮断",
            "comp-before-label": "一般コンテナ",
            "comp-before-sub": "木材床の湿気吸収、通気口による腐食発生",
            "calc-title": "✦ 経済的価値の創出 ✦",
            "calc-heading": "錆による損失を <br> 止めましょう！！",
            "calc-highlight": "高価な梱包材と防錆費用をゼロにしてください。<br>40FTコンテナ1回輸送につき節減効果",
            "calc-summary": "<span class=\"big-number\">540万ウォン</span>",
            "th-cat": "項目",
            "th-conv": "一般コンテナ",
            "th-es": "ESコンテナ",
            "th-save": "節減額",
            "row-pkg": "梱包費用",
            "row-rust": "防錆処理",
            "row-log": "物流管理",
            "sav-pkg": "-250万ウォン",
            "sav-rust": "-200万ウォン",
            "sav-log": "-90万ウォン",
            "val-pkg-cost": "250万ウォン",
            "val-rust-cost": "200万ウォン",
            "val-es-zero": "0",
            "val-std": "標準費用",
            "val-opt": "最適化済み",
            "row-total": "総節減額",
            "val-total": "1回あたり計540万ウォン節減",
            "tech-title": "科学적 証明",
            "tech-subtitle": "ESコンテナは、完全気密技術、内外の圧力差を利用した能動型除湿、そして寿命20年のスチールフロアを通じて、品質と効果を科学的に証明しています。",
            "tech-1-t": "完全気密技術",
            "tech-1-d": "通気口をなくし、二重ゴム気密ドアを採用して外部の湿気を完全に遮断します。",
            "tech-1-p": "特許 10-2024-0069601",
            "tech-2-t": "能動型除湿",
            "tech-2-d": "内外部の圧力差を利用した自然除湿および能動型除湿システムで湿度0%に挑戦。",
            "tech-2-p": "特許 10-2023-0184259",
            "tech-3-t": "スチールフロア",
            "tech-3-d": "寿命20年（従来15年比+5年）。破損時は部分溶接修理が可能な永久的な耐久性。",
            "esg-title": "環境に優しい物流",
            "esg-1-t": "ウッドゼロ",
            "esg-1-d": "木材床不使用により森林破壊を防止",
            "esg-2-t": "廃棄物ゼロ",
            "esg-2-d": "ビニールや防錆剤などの産業廃棄物の発生なし",
            "esg-3-t": "炭素削減",
            "esg-3-d": "従来比500kg軽量化で炭素排出を低減",
            "trust-title": "信頼と認証",
            "cert-1": "ロイド船級認証",
            "cert-1-s": "製造: Qingdao Double Friend",
            "cert-2": "18件以上の特許",
            "cert-2-s": "国内およびグローバル特許登録済み",
            "form-title": "お問い合わせ",
            "label-name": "会社名",
            "label-cargo": "貨物の種類",
            "label-vol": "予想物流量 (月/TEU)",
            "opt-select": "選択してください",
            "opt-steel": "鉄鋼 / 金属",
            "opt-elec": "電子製品",
            "opt-grain": "穀物 / 食品",
            "opt-auto": "自動車部品",
            "opt-gen": "一般貨物",
            "btn-submit": "お問い合わせを送信",
            "footer-info": "Shin-Jo Logitech | 釜山市海雲台区センタム中央路90 | Copyright © 2026 Shin-Jo Logitech.",
            "placeholder-name": "会社名を入力してください"
        },
        cn: {
            "nav-tech": "技术规格",
            "nav-benefits": "经济价值",
            "nav-comparison": "对比结果",
            "hero-badge": "入选海洋水产部2025年供应链稳定领先企业",
            "hero-title": "防锈·<br>完全防潮。<br>货物保护的未来。",
            "hero-subline": "全球10%的货物因潮湿受损。<BR>ES集装箱挑战0%受损率。",
            "btn-tech": "查看技术参数",
            "btn-quote": "咨询申请",
            "comp-title": "差异显而易见",
            "comp-subtitle": "在常规集装箱中运输的钢铁货物由于箱内水分经常生锈，普通货物也容易受到腐蚀。",
            "comp-after-label": "ES集装箱",
            "comp-after-sub": "完全气密结构 + 钢制地板 = 彻底切断生锈/霉变",
            "comp-before-label": "普通集装箱",
            "comp-before-sub": "木质地板吸潮，通风口导致腐蚀",
            "calc-title": "✦ 创造经济价值 ✦",
            "calc-heading": "停止因生锈 <br> 造成的损失！！",
            "calc-highlight": "将昂贵的包装和防锈费用降至零。<br>40FT集装箱单次运输节约效果",
            "calc-summary": "<span class=\"big-number\">540万韩元</span>",
            "th-cat": "项目",
            "th-conv": "普通集装箱",
            "th-es": "ES集装箱",
            "th-save": "节约金额",
            "row-pkg": "包装成本",
            "row-rust": "防锈处理",
            "row-log": "物流管理",
            "sav-pkg": "-250万韩元",
            "sav-rust": "-200万韩元",
            "sav-log": "-90万韩元",
            "val-pkg-cost": "250万韩元",
            "val-rust-cost": "200万韩元",
            "val-es-zero": "0",
            "val-std": "标准成本",
            "val-opt": "已优化",
            "row-total": "总节约金额",
            "val-total": "每次运输共计节约 540万韩元",
            "tech-title": "科学证明",
            "tech-subtitle": "ES集装箱通过完全气密技术、利用内外压力差的主动除湿以及使用寿命长达20年的钢制地板，科学地证明了其品质和效果。",
            "tech-1-t": "完全气密技术",
            "tech-1-d": "取消通风口并使用双重橡胶气密门，完美隔绝外部湿气。",
            "tech-1-p": "专利 10-2024-0069601",
            "tech-2-t": "主动除湿",
            "tech-2-d": "利用内外部压力差的自然除湿及主动除湿系统，挑战0%湿度。",
            "tech-2-p": "专利 10-2023-0184259",
            "tech-3-t": "钢制地板",
            "tech-3-d": "寿命20年（比传统地板多5年）。损坏时可进行局部焊接维修。",
            "esg-title": "绿色物流",
            "esg-1-t": "零木材",
            "esg-1-d": "不使用木质地板，保护森林资源",
            "esg-2-t": "零废物",
            "esg-2-d": "不产生塑料、防锈剂等工业废物",
            "esg-3-t": "减碳",
            "esg-3-d": "比传统集装箱减重500kg，降低碳排放",
            "trust-title": "信任与认证",
            "cert-1": "劳氏船级社认证",
            "cert-1-s": "制造商: Qingdao Double Friend",
            "cert-2": "18项以上专利",
            "cert-2-s": "已完成韩国及全球专利注册",
            "form-title": "申请咨询",
            "label-name": "公司名称",
            "label-cargo": "货物类型",
            "label-vol": "预计货量 (月/TEU)",
            "opt-select": "请选择",
            "opt-steel": "钢铁 / 金属",
            "opt-elec": "电子产品",
            "opt-grain": "粮食 / 食品",
            "opt-auto": "汽车零部件",
            "opt-gen": "一般货物",
            "btn-submit": "提交咨询",
            "footer-info": "新造智运 | 釜山市海云台区 Centum 中央路 90 | Copyright © 2026 Shin-Jo Logitech.",
            "placeholder-name": "请输入公司名称"
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-placeholder]').forEach(el => {
            const key = el.getAttribute('data-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update body class for language-specific fonts
        document.body.classList.remove('lang-cn', 'lang-jp');
        if (lang === 'cn') {
            document.body.classList.add('lang-cn');
        } else if (lang === 'jp') {
            document.body.classList.add('lang-jp');
        }
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            updateLanguage(e.target.getAttribute('data-lang'));
        });
    });

    // Set initial language (Korean)
    updateLanguage('ko');

    // ---------------------------------------------------------
    // Comparison Slider Logic
    // ---------------------------------------------------------
    const container = document.getElementById('comparison-slider');
    if (container) {
        const beforeImage = container.querySelector('.before');
        const handle = container.querySelector('.handle');
        let isScanning = false;

        function move(x) {
            const containerRect = container.getBoundingClientRect();
            let posX = x - containerRect.left;
            if (posX < 0) posX = 0;
            if (posX > containerRect.width) posX = containerRect.width;
            const percentage = (posX / containerRect.width) * 100;
            beforeImage.style.width = percentage + '%';
            handle.style.left = percentage + '%';
        }

        container.addEventListener('mousedown', () => isScanning = true);
        window.addEventListener('mouseup', () => isScanning = false);
        container.addEventListener('mousemove', (e) => {
            if (!isScanning) return;
            move(e.clientX);
        });
        container.addEventListener('touchstart', () => isScanning = true);
        window.addEventListener('touchend', () => isScanning = false);
        container.addEventListener('touchmove', (e) => {
            if (!isScanning) return;
            move(e.touches[0].clientX);
        });
        container.addEventListener('click', (e) => {
            move(e.clientX);
        });
    }

    // ---------------------------------------------------------
    // Mobile Menu Toggle
    // ---------------------------------------------------------
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
});
