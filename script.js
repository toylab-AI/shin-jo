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
            "calc-heading": "부식으로 인한 손실을 <br> 멈추십시오!!",
            "calc-highlight": "비싼 포장재 및 방청 비용 Zero.<br>40FT 1회 운송 시 절감효과",
            "row-total": "40FT 운송 시 절감액",
            "val-total-savings": "540만 원",
            "row-pkg": "포장 비용",
            "sav-pkg": "-250만원",
            "val-pkg-conv": "일반: 250만원",
            "val-pkg-es": "ES: 0원",
            "row-rust": "방청 처리",
            "sav-rust": "-200만원",
            "val-rust-conv": "일반: 200만원",
            "val-rust-es": "ES: 0원",
            "row-log": "물류 관리",
            "sav-log": "-90만원",
            "val-log-conv": "일반: 표준 비용",
            "val-log-es": "ES: 최적화 완료",
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
            "placeholder-name": "회사명을 입력하세요",
            "news-title": "뉴스",
            "news-subtitle": "2026년 2월, 한 주간의 주요 컨테이너 및 해운 물류 동향",
            "news-1-t": "IMO, 2030 탄소 배출 감축 조기 달성 전망",
            "news-1-s": "국제해사기구(IMO)는 최근 도입된 친환경 메탄올 추진 컨테이너선의 급격한 증가로 2030년 감축 목표가 2년 앞당겨질 수 있다고 밝혔습니다.",
            "news-2-t": "범용 스마트 컨테이너 표준 'SC-2026' 발효",
            "news-2-s": "전 세계 주요 선사가 합의한 새로운 IoT 통신 규격이 발효됨에 따라, 실시간 화물 추적의 정확도가 99.9%까지 향상되었습니다.",
            "news-3-t": "북미 서안 항만, 완전 자동화 터미널 확장",
            "news-3-s": "LA/LB 항만의 제3터미널이 완전 무인 자동화 시스템 업그레이드를 마치고 운영을 재개, 처리 속도가 기존 대비 40% 향상되었습니다.",
            "news-4-t": "2026년 1분기 컨테이너 운임지수(SCFI) 안정세",
            "news-4-s": "지난해 말 급등했던 해상 운임이 아시아-유럽 항로의 공급망 정상화에 힘입어 3주 연속 보합세를 유지하며 안정 구간에 진입했습니다.",
            "news-5-t": "'종이 없는 무역' 가속화... e-BL 도입률 85%",
            "news-5-s": "디지털 선하증권(e-BL)의 글로벌 도입률이 예상보다 빠르게 증가하며, 물류 서류 처리 시간이 평균 5일에서 4시간으로 대폭 단축되었습니다."
        },
        en: {
            "nav-tech": "Specs",
            "nav-benefits": "Benefits",
            "nav-comparison": "Comparison",
            "hero-badge": "2025 Supply Chain Leader Selected by MOF",
            "hero-title": "Rust-Free. <br>Moisture-Free.<br>Future of Protection.",
            "hero-subline": "10% of global cargo is damaged by moisture. ES aims for 0%.",
            "btn-tech": "View Specs",
            "btn-quote": "Contact Us",
            "comp-title": "Clear Difference",
            "comp-subtitle": "Conventional containers cause damage due to moisture.",
            "comp-after-label": "ES Container",
            "comp-after-sub": "Air-tight + Steel floor = Zero rust/mold",
            "comp-before-label": "Conventional",
            "comp-before-sub": "Wood floor moisture & vent issues",
            "calc-title": "✦ Economic Value ✦",
            "calc-heading": "Stop losses <br> from rust!!",
            "calc-highlight": "Zero cost for packaging and rust prevention.<br>Savings per 40FT shipment",
            "row-total": "Savings per 40FT shipment",
            "val-total-savings": "5.4M KRW",
            "row-pkg": "Packaging",
            "sav-pkg": "-2.5M KRW",
            "val-pkg-conv": "Conv: 2.5M KRW",
            "val-pkg-es": "ES: 0 KRW",
            "row-rust": "Rust Prevention",
            "sav-rust": "-2.0M KRW",
            "val-rust-conv": "Conv: 2.0M KRW",
            "val-rust-es": "ES: 0 KRW",
            "row-log": "Logistics Mgmt",
            "sav-log": "-0.9M KRW",
            "val-log-conv": "Conv: Standard",
            "val-log-es": "ES: Optimized",
            "tech-title": "Scientific Proof",
            "tech-subtitle": "ES Container scientifically proves quality through air-tight tech.",
            "tech-1-t": "Air-Tight Tech",
            "tech-1-d": "Perfectly block external moisture with dual gaskets.",
            "tech-1-p": "Patent 10-2024-0069601",
            "tech-2-t": "Active Dehumidification",
            "tech-2-d": "Active control system for 0% humidity.",
            "tech-2-p": "Patent 10-2023-0184259",
            "tech-3-t": "Steel Floor",
            "tech-3-d": "20-year lifespan with permanent durability.",
            "esg-title": "Eco Logistics",
            "esg-1-t": "Zero Wood",
            "esg-1-d": "Prevents deforestation with steel floors.",
            "esg-2-t": "Zero Waste",
            "esg-2-d": "Eliminates harmful industrial waste.",
            "esg-3-t": "Carbon Down",
            "esg-3-d": "Lower emissions through weight reduction.",
            "trust-title": "Trust & Certs",
            "cert-1": "Lloyd's Certified",
            "cert-1-s": "Mfg: Qingdao Double Friend",
            "cert-2": "18+ Patents",
            "cert-2-s": "Registered globally",
            "form-title": "Inquiry",
            "label-name": "Company",
            "label-cargo": "Cargo Type",
            "label-vol": "Monthly Vol (TEU)",
            "opt-select": "Select one",
            "opt-steel": "Steel / Metal",
            "opt-elec": "Electronics",
            "opt-grain": "Food / Grain",
            "opt-auto": "Auto Parts",
            "opt-gen": "General",
            "btn-submit": "Submit Request",
            "footer-info": "Shin-Jo Logitech | Busan, Korea | © 2026 Shin-Jo Logitech.",
            "placeholder-name": "Enter company name",
            "news-title": "News",
            "news-subtitle": "Feb 2026: Key trends in container and maritime logistics",
            "news-1-t": "IMO Predicts Early Achievement of 2030 Carbon Goals",
            "news-1-s": "The IMO states that the rapid adoption of eco-friendly methanol-powered vessels could bring forward the 2030 reduction targets by two years.",
            "news-2-t": "Smart Container Standard 'SC-2026' in Effect",
            "news-2-s": "With the new IoT communication standard agreed upon by major global carriers, real-time cargo tracking accuracy has improved to 99.9%.",
            "news-3-t": "US West Coast Ports Expand Automated Terminals",
            "news-3-s": "Terminal 3 at LA/LB ports has resumed operations after upgrading to a fully unmanned automated system, boosting processing speed by 40%.",
            "news-4-t": "Q1 2026 Container Freight Index (SCFI) Stabilizes",
            "news-4-s": "Sea freight rates, which spiked late last year, have entered a stable range with three consecutive weeks of flat growth due to supply chain normalization.",
            "news-5-t": "Paperless Trade Accelerates... e-BL Adoption Hits 85%",
            "news-5-s": "Global adoption of electronic Bills of Lading (e-BL) is rising faster than expected, slashing documentation processing time from 5 days to 4 hours."
        },
        jp: {
            "nav-tech": "技術仕様",
            "nav-benefits": "経済的価値",
            "nav-comparison": "比較結果",
            "hero-badge": "2025年サプライチェーン安定化リーダー選定",
            "hero-title": "防錆・<br>完全防湿。<br>貨物保護の未来。",
            "hero-subline": "全貨物の10%が湿気で損傷。ESは0%に挑戦します。",
            "btn-tech": "仕様を見る",
            "btn-quote": "お問い合わせ",
            "comp-title": "明確な違い",
            "comp-subtitle": "従来のコンテナは湿気によりサビが発生しやすいです。",
            "comp-after-label": "ESコンテナ",
            "comp-after-sub": "完全気密構造 + スチール床 = サビ/カビ遮断",
            "comp-before-label": "一般コンテナ",
            "comp-before-sub": "木材床の湿気、通気口による腐食",
            "calc-title": "✦ 経済的価値 ✦",
            "calc-heading": "サビによる損失を <br> 止めましょう！！",
            "calc-highlight": "梱包材・防錆費用ゼロ。<br>40FT 1回輸送時の節減効果",
            "row-total": "40FT輸送時の節減額",
            "val-total-savings": "540万ウォン",
            "row-pkg": "梱包費用",
            "sav-pkg": "-250万ウォン",
            "val-pkg-conv": "一般: 250万ウォン",
            "val-pkg-es": "ES: 0ウォン",
            "row-rust": "防錆処理",
            "sav-rust": "-200万ウォン",
            "val-rust-conv": "一般: 200万ウォン",
            "val-rust-es": "ES: 0ウォン",
            "row-log": "物流管理",
            "sav-log": "-90万ウォン",
            "val-log-conv": "一般: 標準費用",
            "val-log-es": "ES: 最適化済み",
            "tech-title": "科学的証明",
            "tech-subtitle": "ESコンテナは高品質を科学的に証明しています。",
            "tech-1-t": "完全気密技術",
            "tech-1-d": "二重ゴム気密ドアで外部湿気を遮断します。",
            "tech-1-p": "特許 10-2024-0069601",
            "tech-2-t": "能動型除湿",
            "tech-2-d": "能動型除湿システムで湿度0%に挑戦。",
            "tech-2-p": "特許 10-2023-0184259",
            "tech-3-t": "スチールフロア",
            "tech-3-d": "寿命20年、優れた耐久性を実現。",
            "esg-title": "環境保護",
            "esg-1-t": "ウッドゼロ",
            "esg-1-d": "木材不使用で森林保護に貢献。",
            "esg-2-t": "廃棄物ゼロ",
            "esg-2-d": "産業廃棄物の発生をゼロに。",
            "esg-3-t": "炭素削減",
            "esg-3-d": "軽量化により排出ガスを低減。",
            "trust-title": "信頼と認証",
            "cert-1": "ロイド船級認証",
            "cert-1-s": "製造: Qingdao Double Friend",
            "cert-2": "18件以上の特許",
            "cert-2-s": "グローバル特許登録済み",
            "form-title": "お問い合わせ",
            "label-name": "会社名",
            "label-cargo": "貨物の種類",
            "label-vol": "月間物流量 (TEU)",
            "opt-select": "選択...",
            "opt-steel": "鉄鋼 / 金属",
            "opt-elec": "電子機器",
            "opt-grain": "穀物 / 食品",
            "opt-auto": "車パーツ",
            "opt-gen": "一般貨物",
            "btn-submit": "送信する",
            "footer-info": "Shin-Jo Logitech | 釜山広域市 | © 2026 Shin-Jo Logitech.",
            "placeholder-name": "会社名を入力してください",
            "news-title": "ニュース",
            "news-subtitle": "2026年2月、コンテナおよび海運物流の主要動向",
            "news-1-t": "IMO、2030年炭素排出削減目標の早期達成を予測",
            "news-1-s": "IMOは、環境に優しいメタノール推進コンテナ船の急増により、2030年の削減目標が2年前倒しで達成される可能性があると発表しました。",
            "news-2-t": "汎用スマートコンテナ標準「SC-2026」発効",
            "news-2-s": "世界の主要船社が合意した新しいIoT通信規格が発効し、リアルタイム貨物追跡の精度が99.9%まで向上しました。",
            "news-3-t": "北米西岸港湾、完全自動化ターミナルを拡張",
            "news-3-s": "LA/LB港の第3ターミナルが完全無人自動化システムのアップグレードを完了し運営を再開、処理速度が従来比40%向上しました。",
            "news-4-t": "2026年第1四半期、コンテナ運賃指数(SCFI)が安定",
            "news-4-s": "昨年末に急騰した海上運賃は、アジア-欧州航路のサプライチェーン正常化により、3週間連続で横ばいを維持し安定圏に入りました。",
            "news-5-t": "「ペーパーレス貿易」加速…e-BL導入率85%",
            "news-5-s": "電子船荷証券(e-BL)のグローバル導入率が予想以上に速く増加しており、物流書類処理時間が平均5日から4時間に大幅短縮されました。"
        },
        cn: {
            "nav-tech": "技术规格",
            "nav-benefits": "经济价值",
            "nav-comparison": "对比结果",
            "hero-badge": "2025年供应链稳定领先单位 (海洋水产部)",
            "hero-title": "无锈运输·<br>彻底防潮。<br>货物保护的未来。",
            "hero-subline": "全球10%货损源于湿度。ES集装箱挑战0%损耗。",
            "btn-tech": "技术参数",
            "btn-quote": "咨询申请",
            "comp-title": "差异明显",
            "comp-subtitle": "普通集装箱常因湿度致货物生锈。",
            "comp-after-label": "ES集装箱",
            "comp-after-sub": "气密结构 + 钢地板 = 杜绝霉变",
            "comp-before-label": "普通箱型",
            "comp-before-sub": "木地板吸湿、通风口易锈。",
            "calc-title": "✦ 经济价值 ✦",
            "calc-heading": "停止因生锈 <br> 造成的经济损失！！",
            "calc-highlight": "包装及防锈成本为零。<br>每40FT运输次的节约效果",
            "row-total": "每40FT运输节约额",
            "val-total-savings": "540万韩元",
            "row-pkg": "包装成本",
            "sav-pkg": "-250万韩元",
            "val-pkg-conv": "常规: 250万",
            "val-pkg-es": "ES: 0元",
            "row-rust": "防锈处理",
            "sav-rust": "-200万韩元",
            "val-rust-conv": "常规: 200万",
            "val-rust-es": "ES: 0元",
            "row-log": "物流管理",
            "sav-log": "-90万韩元",
            "val-log-conv": "常规: 标准成本",
            "val-log-es": "ES: 已优化",
            "tech-title": "科学证实",
            "tech-subtitle": "ES集装箱通过尖端技术证明卓越品质。",
            "tech-1-t": "完全气密",
            "tech-1-d": "双重密封彻底阻隔外部湿气。",
            "tech-1-p": "专利 10-2024-0069601",
            "tech-2-t": "主动除湿",
            "tech-2-d": "主动式除湿系统，挑战零湿度。",
            "tech-2-p": "专利 10-2023-0184259",
            "tech-3-t": "全钢地板",
            "tech-3-d": "20年寿命，极高耐用性与易维护性。",
            "esg-title": "绿色低碳",
            "esg-1-t": "零木材",
            "esg-1-d": "无木地板，保护森林资源。",
            "esg-2-t": "零废物",
            "esg-2-d": "不产生危害环境的工业废物。",
            "esg-3-t": "低碳增效",
            "esg-3-d": "减重500kg，显著降低碳排放。",
            "trust-title": "权威认证",
            "cert-1": "劳氏船级社认证",
            "cert-1-s": "生产商: Qingdao Double Friend",
            "cert-2": "18项+专利",
            "cert-2-s": "已获全球多国专利授权",
            "form-title": "咨询",
            "label-name": "公司名称",
            "label-cargo": "货物种类",
            "label-vol": "月货量 (TEU)",
            "opt-select": "请选择",
            "opt-steel": "钢铁 / 金属",
            "opt-elec": "电子产品",
            "opt-grain": "粮食 / 食品",
            "opt-auto": "汽车零部件",
            "opt-gen": "一般货物",
            "btn-submit": "提交申请",
            "footer-info": "新造智运 | 釜山 | © 2026 Shin-Jo Logitech.",
            "placeholder-name": "请输入您的公司名称",
            "news-title": "新闻",
            "news-subtitle": "2026年2月，集装箱及海运物流的主要动态",
            "news-1-t": "IMO预测2030年碳减排目标有望提前实现",
            "news-1-s": "国际海事组织(IMO)表示，随着环保甲醇动力集装箱船的激增，2030年减排目标有望提前两年实现。",
            "news-2-t": "通用智能集装箱标准 'SC-2026' 生效",
            "news-2-s": "随着全球主要船公司达成一致的新IoT通信标准生效，实时货物追踪的准确率已提高至99.9%。",
            "news-3-t": "北美西岸港口扩展全自动化码头",
            "news-3-s": "洛杉矶/长滩港第3码头完成全无人自动化系统升级并恢复运营，处理速度较之前提高了40%。",
            "news-4-t": "2026年第一季度集装箱运价指数(SCFI)趋稳",
            "news-4-s": "得益于亚欧航线供应链的正常化，去年底飙升的海运费已连续三周保持持平，进入稳定区间。",
            "news-5-t": "“无纸化贸易”加速... e-BL采用率达85%",
            "news-5-s": "电子提单(e-BL)的全球采用率增长超预期，物流单证处理时间从平均5天大幅缩短至4小时。"
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
