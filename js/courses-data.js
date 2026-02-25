// Finance Academy - Complete Course Data (48 Courses)
// Organized by 6 Categories

const courseData = {
    categories: [
        {
            id: 'macro',
            name: '宏观经济学',
            nameEn: 'Macroeconomics',
            description: '理解经济运行规律，掌握货币政策、财政政策、经济增长等核心理论',
            color: 'blue',
            icon: 'trending-up',
            stats: { courses: 8, hours: 48, components: 16 }
        },
        {
            id: 'micro',
            name: '微观经济学',
            nameEn: 'Microeconomics',
            description: '从个体决策到市场均衡，剖析供给需求、市场结构与博弈论',
            color: 'green',
            icon: 'pie-chart',
            stats: { courses: 8, hours: 48, components: 16 }
        },
        {
            id: 'corp',
            name: '公司金融',
            nameEn: 'Corporate Finance',
            description: '企业财务分析、投融资决策、资本结构与价值创造',
            color: 'amber',
            icon: 'building-2',
            stats: { courses: 8, hours: 48, components: 16 }
        },
        {
            id: 'pricing',
            name: '资产定价',
            nameEn: 'Asset Pricing',
            description: '从CAPM到多因子模型，从债券到期权，系统学习资产估值理论',
            color: 'purple',
            icon: 'line-chart',
            stats: { courses: 8, hours: 48, components: 16 }
        },
        {
            id: 'metrics',
            name: '计量经济学',
            nameEn: 'Econometrics',
            description: '掌握实证研究方法，从线性回归到机器学习，构建数据分析能力',
            color: 'red',
            icon: 'calculator',
            stats: { courses: 8, hours: 48, components: 16 }
        },
        {
            id: 'ai',
            name: '人工智能金融',
            nameEn: 'AI in Finance',
            description: '大模型应用、RAG系统、NLP分析，探索金融科技前沿',
            color: 'teal',
            icon: 'brain',
            stats: { courses: 8, hours: 48, components: 16 }
        }
    ],

    courses: [
        // ========== 宏观经济学 (8门) ==========
        {
            id: 'macro-01',
            title: '宏观经济数据体系与衡量指标',
            category: '宏观经济学',
            categoryId: 'macro',
            description: 'GDP、通胀、就业等核心指标的定义、计算与解读',
            tags: ['GDP', 'CPI', '失业率', '数据解读'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'macro-02',
            title: '货币理论与通货膨胀机制',
            category: '宏观经济学',
            categoryId: 'macro',
            description: '货币供给、需求与通货膨胀的形成机制与治理',
            tags: ['货币政策', '货币乘数', '费雪方程', '通胀目标'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'macro-03',
            title: '就业市场与劳动力经济学',
            category: '宏观经济学',
            categoryId: 'macro',
            description: '失业类型、劳动力市场均衡与政策干预',
            tags: ['失业类型', '自然失业率', '奥肯定律', '最低工资'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'macro-04',
            title: '消费理论与投资决策分析',
            category: '宏观经济学',
            categoryId: 'macro',
            description: '凯恩斯消费函数、跨期选择与投资乘数效应',
            tags: ['MPC', '消费函数', '投资乘数', '储蓄转化'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'macro-05',
            title: '经济增长理论与实证研究',
            category: '宏观经济学',
            categoryId: 'macro',
            description: '索洛模型、内生增长与全要素生产率分析',
            tags: ['索洛模型', 'TFP', '收敛理论', '增长核算'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'macro-06',
            title: '汇率机制与国际收支平衡',
            category: '宏观经济学',
            categoryId: 'macro',
            description: '汇率决定理论、国际收支调节与政策选择',
            tags: ['购买力平价', '利率平价', '不可能三角', '汇率制度'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'macro-07',
            title: '宏观政策工具与效果评估',
            category: '宏观经济学',
            categoryId: 'macro',
            description: '财政政策与货币政策的IS-LM与AD-AS分析',
            tags: ['IS-LM模型', 'AD-AS', '政策时滞', '政策组合'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        },
        {
            id: 'macro-08',
            title: '宏观分析综合研究报告',
            category: '宏观经济学',
            categoryId: 'macro',
            description: '宏观经济分析框架与研究报告撰写方法论',
            tags: ['宏观框架', '预测模型', '报告写作', '情景分析'],
            stats: { models: 5, cases: 1, interactives: 2 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        },

        // ========== 微观经济学 (8门) ==========
        {
            id: 'micro-01',
            title: '微观数据与市场基本力量分析',
            category: '微观经济学',
            categoryId: 'micro',
            description: '弹性理论、边际分析与市场力量测度',
            tags: ['需求弹性', '供给弹性', '边际分析', '市场均衡'],
            stats: { models: 5, cases: 5, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'micro-02',
            title: '供给需求理论与市场均衡',
            category: '微观经济学',
            categoryId: 'micro',
            description: '价格机制、税收楔子与比较静态分析',
            tags: ['供需均衡', '税收楔子', '无谓损失', '价格管制'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'micro-03',
            title: '市场效率与福利经济学',
            category: '微观经济学',
            categoryId: 'micro',
            description: '帕累托最优、福利定理与市场失灵',
            tags: ['帕累托最优', '福利定理', '剩余分析', '效率损失'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'micro-04',
            title: '公共部门与政府干预经济学',
            category: '微观经济学',
            categoryId: 'micro',
            description: '外部性、公共品与科斯定理',
            tags: ['外部性', '公共品', '科斯定理', '庇古税'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'micro-05',
            title: '企业行为与产业组织理论',
            category: '微观经济学',
            categoryId: 'micro',
            description: '市场结构、博弈论与反垄断政策',
            tags: ['市场结构', '博弈论', '纳什均衡', '反垄断'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'micro-06',
            title: '劳动市场与人力资源配置',
            category: '微观经济学',
            categoryId: 'micro',
            description: '人力资本理论、明瑟方程与工资决定',
            tags: ['人力资本', '明瑟方程', '教育回报', '工资差距'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'micro-07',
            title: '前沿微观理论专题研究',
            category: '微观经济学',
            categoryId: 'micro',
            description: '博弈论、信息经济学与机制设计',
            tags: ['博弈论', '信息不对称', '机制设计', '拍卖理论'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        },
        {
            id: 'micro-08',
            title: '微观经济分析研究报告',
            category: '微观经济学',
            categoryId: 'micro',
            description: '微观经济分析方法与报告撰写',
            tags: ['分析框架', '数据收集', '模型分析', '政策建议'],
            stats: { models: 4, cases: 1, interactives: 2 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        },

        // ========== 公司金融 (8门) ==========
        {
            id: 'corp-01',
            title: '公司金融理论基础与分析方法',
            category: '公司金融',
            categoryId: 'corp',
            description: '财务报表分析、杜邦分析与财务诊断',
            tags: ['财务报表', '杜邦分析', '比率分析', '财务健康'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'corp-02',
            title: '公司治理机制与股东价值',
            category: '公司金融',
            categoryId: 'corp',
            description: '股权结构、代理问题与激励机制',
            tags: ['股权结构', '代理成本', '激励机制', 'ESG'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'corp-03',
            title: '企业融资渠道与资本成本',
            category: '公司金融',
            categoryId: 'corp',
            description: '债务融资、股权融资与WACC计算',
            tags: ['融资渠道', 'WACC', '资本结构', '税盾效应'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'corp-04',
            title: '投资决策理论与实物期权',
            category: '公司金融',
            categoryId: 'corp',
            description: 'NPV分析、IRR与实物期权估值',
            tags: ['NPV', 'IRR', '实物期权', '投资评估'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'corp-05',
            title: '资本结构理论与优化策略',
            category: '公司金融',
            categoryId: 'corp',
            description: 'MM定理、权衡理论与优序融资理论',
            tags: ['MM定理', '权衡理论', '优序融资', '最优结构'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'corp-06',
            title: '企业创新与价值创造',
            category: '公司金融',
            categoryId: 'corp',
            description: 'R&D投资、创新估值与护城河分析',
            tags: ['创新投资', 'R&D估值', '护城河', '价值捕获'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'corp-07',
            title: '公司金融前沿专题研究',
            category: '公司金融',
            categoryId: 'corp',
            description: 'ESG投资、可持续金融与公司价值',
            tags: ['ESG', '可持续金融', '绿色转型', '长期价值'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        },
        {
            id: 'corp-08',
            title: '公司金融分析研究报告',
            category: '公司金融',
            categoryId: 'corp',
            description: '企业估值方法论与研究报告撰写',
            tags: ['DCF估值', '相对估值', '敏感性分析', '报告框架'],
            stats: { models: 4, cases: 1, interactives: 2 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        },

        // ========== 资产定价 (8门) ==========
        {
            id: 'pricing-01',
            title: '金融市场体系与定价理论基础',
            category: '资产定价',
            categoryId: 'pricing',
            description: '风险度量、CAPM与有效前沿',
            tags: ['CAPM', '风险度量', '有效前沿', 'SML'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'pricing-02',
            title: '有效市场假说与多因子模型',
            category: '资产定价',
            categoryId: 'pricing',
            description: 'EMH、FF三因子与资产定价异象',
            tags: ['EMH', 'FF模型', '因子投资', '市场异象'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'pricing-03',
            title: '固定收益证券与衍生品定价',
            category: '资产定价',
            categoryId: 'pricing',
            description: '债券定价、久期管理与期权基础',
            tags: ['债券定价', '久期', '期权', 'BSM模型'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'pricing-04',
            title: '企业资本运作与上市决策',
            category: '资产定价',
            categoryId: 'pricing',
            description: 'IPO流程、估值与上市后运作',
            tags: ['IPO', '上市估值', '路演定价', '再融资'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'pricing-05',
            title: '公募与私募基金投资策略',
            category: '资产定价',
            categoryId: 'pricing',
            description: '资产配置、组合优化与业绩归因',
            tags: ['资产配置', '组合优化', '夏普比率', '业绩归因'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'pricing-06',
            title: '投资者行为与财富管理',
            category: '资产定价',
            categoryId: 'pricing',
            description: '行为金融学、认知偏差与财富管理',
            tags: ['行为金融', '前景理论', '损失厌恶', '财富管理'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'pricing-07',
            title: '资产定价前沿技术应用',
            category: '资产定价',
            categoryId: 'pricing',
            description: '量化投资、因子挖掘与ML应用',
            tags: ['量化投资', '因子挖掘', '机器学习', '另类数据'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        },
        {
            id: 'pricing-08',
            title: '资产定价综合研究报告',
            category: '资产定价',
            categoryId: 'pricing',
            description: '投资策略研究与报告撰写方法论',
            tags: ['策略研究', '因子分析', '组合构建', '风险管理'],
            stats: { models: 4, cases: 1, interactives: 2 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        },

        // ========== 计量经济学 (8门) ==========
        {
            id: 'metrics-01',
            title: '统计学基础与金融数据描述',
            category: '计量经济学',
            categoryId: 'metrics',
            description: '描述统计、分布检验与统计推断',
            tags: ['描述统计', '正态分布', '假设检验', '统计推断'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'metrics-02',
            title: '线性回归模型与实证应用',
            category: '计量经济学',
            categoryId: 'metrics',
            description: 'OLS估计、模型检验与诊断',
            tags: ['OLS', '回归检验', 'R²', '残差诊断'],
            stats: { models: 5, cases: 4, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'metrics-03',
            title: '内生性问题与因果识别策略',
            category: '计量经济学',
            categoryId: 'metrics',
            description: '工具变量、DID与RDD方法',
            tags: ['工具变量', 'DID', 'RDD', '因果识别'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'metrics-04',
            title: '资产定价实证方法与因子模型',
            category: '计量经济学',
            categoryId: 'metrics',
            description: '因子构建、时序与截面回归',
            tags: ['因子构建', '时序回归', '截面回归', 'GRS检验'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'metrics-05',
            title: '时间序列分析与预测模型',
            category: '计量经济学',
            categoryId: 'metrics',
            description: 'ARMA、GARCH与VAR模型',
            tags: ['ARMA', 'GARCH', 'VAR', '预测'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'metrics-06',
            title: '受限选择模型与匹配方法',
            category: '计量经济学',
            categoryId: 'metrics',
            description: 'Logit、Probit与PSM方法',
            tags: ['Logit', 'Probit', 'PSM', '倾向得分'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'metrics-07',
            title: '非线性模型与机器学习应用',
            category: '计量经济学',
            categoryId: 'metrics',
            description: 'ML算法、交叉验证与金融应用',
            tags: ['机器学习', '交叉验证', '正则化', '可解释性'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        },
        {
            id: 'metrics-08',
            title: '计量经济实证研究报告',
            category: '计量经济学',
            categoryId: 'metrics',
            description: '实证研究设计与论文写作方法',
            tags: ['研究设计', '稳健性检验', '论文写作', '发表策略'],
            stats: { models: 4, cases: 1, interactives: 2 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        },

        // ========== AI金融 (8门) ==========
        {
            id: 'ai-01',
            title: '大模型基础与金融应用概览',
            category: '人工智能金融',
            categoryId: 'ai',
            description: 'LLM架构、Scaling Law与金融场景应用',
            tags: ['LLM', 'Transformer', 'Scaling Law', '金融应用'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'ai-02',
            title: '增强检索生成与大模型微调',
            category: '人工智能金融',
            categoryId: 'ai',
            description: 'RAG系统、Embedding与模型微调',
            tags: ['RAG', 'Embedding', '向量检索', 'LoRA'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'ai-03',
            title: '提示工程与AI工作流设计',
            category: '人工智能金融',
            categoryId: 'ai',
            description: 'Prompt设计、Agent架构与工作流编排',
            tags: ['Prompt', 'CoT', 'Agent', '工作流'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'ai-04',
            title: '金融数据获取与处理技术',
            category: '人工智能金融',
            categoryId: 'ai',
            description: 'API接入、数据清洗与特征工程',
            tags: ['数据获取', '数据清洗', '特征工程', '数据质量'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '基础',
            duration: '6小时'
        },
        {
            id: 'ai-05',
            title: '文本分析与自然语言处理',
            category: '人工智能金融',
            categoryId: 'ai',
            description: '情感分析、实体识别与文本摘要',
            tags: ['NLP', '情感分析', '实体识别', 'FinBERT'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'ai-06',
            title: '多模态金融数据分析',
            category: '人工智能金融',
            categoryId: 'ai',
            description: '文本、数值与视觉模态融合分析',
            tags: ['多模态', '注意力机制', '模态融合', '交叉注意力'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        },
        {
            id: 'ai-07',
            title: '金融应用设计与实验方法',
            category: '人工智能金融',
            categoryId: 'ai',
            description: 'AI产品设计、A/B测试与上线运维',
            tags: ['产品设计', 'A/B测试', '实验设计', 'MLOps'],
            stats: { models: 4, cases: 3, interactives: 3 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '中级',
            duration: '6小时'
        },
        {
            id: 'ai-08',
            title: 'AI金融创新项目报告',
            category: '人工智能金融',
            categoryId: 'ai',
            description: 'AI金融项目全流程管理与报告撰写',
            tags: ['项目管理', '技术开发', '测试验收', '部署运营'],
            stats: { models: 4, cases: 1, interactives: 2 },
            hasCanvas: true,
            hasHTML: true,
            difficulty: '高级',
            duration: '6小时'
        }
    ],

    // Learning path recommendations
    learningPaths: [
        {
            id: 'beginner',
            name: '初学者路径',
            description: '从零开始系统学习金融学基础',
            courses: ['macro-01', 'macro-02', 'micro-01', 'micro-02', 'corp-01', 'pricing-01', 'metrics-01', 'metrics-02']
        },
        {
            id: 'analyst',
            name: '分析师路径',
            description: '侧重财务分析与资产定价',
            courses: ['corp-01', 'corp-02', 'corp-03', 'corp-04', 'pricing-01', 'pricing-02', 'pricing-03', 'metrics-02', 'metrics-03', 'metrics-04']
        },
        {
            id: 'quant',
            name: '量化路径',
            description: '计量方法与编程技术并重',
            courses: ['metrics-01', 'metrics-02', 'metrics-05', 'metrics-07', 'ai-04', 'ai-05', 'pricing-07', 'ai-02']
        },
        {
            id: 'fintech',
            name: '金融科技路径',
            description: 'AI与大模型在金融的应用',
            courses: ['ai-01', 'ai-02', 'ai-03', 'ai-04', 'ai-05', 'ai-06', 'ai-07', 'pricing-07']
        }
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = courseData;
}
