import React from 'react';
import { Section, SectionHeader, FeatureCard, Card, Button } from '../components/UI';

// Reusable Layout for Solutions
const SolutionLayout: React.FC<{
  titleCN: string;
  titleEN: string;
  heroImage: string;
  overviewCN: string;
  overviewEN: string;
  features: { titleCN: string; titleEN: string; descCN: string; descEN: string; icon?: React.ReactNode }[];
  archDesc: string;
  children?: React.ReactNode;
}> = ({ titleCN, titleEN, heroImage, overviewCN, overviewEN, features, archDesc, children }) => (
  <div className="pt-20">
    {/* Hero */}
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
       <img src={heroImage} alt={titleEN} className="absolute inset-0 w-full h-full object-cover opacity-20" />
       <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-brand-dark"></div>
       <div className="relative z-10 text-center px-4 max-w-4xl">
         <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-4">{titleCN}</h1>
         <p className="text-2xl text-brand-primary tracking-widest uppercase mb-8">{titleEN}</p>
         <p className="text-lg text-slate-600 border-l-4 border-brand-primary pl-6 text-left bg-white/70 p-6 rounded-r-lg backdrop-blur-sm shadow-sm">
            <span className="block mb-2 font-medium">{overviewCN}</span>
            <span className="block text-sm opacity-80 italic">{overviewEN}</span>
         </p>
       </div>
    </div>

    {/* Features */}
    <Section>
      <SectionHeader titleCN="核心功能" titleEN="Key Features" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </Section>

    {/* Architecture */}
    <Section className="bg-white border-y border-slate-100">
      <SectionHeader titleCN="系统架构" titleEN="System Architecture" />
      <div className="max-w-4xl mx-auto p-8 border border-slate-200 rounded-2xl bg-slate-50 text-center relative overflow-hidden group shadow-inner">
         <div className="absolute inset-0 bg-grid-slate-200/[0.5] bg-[length:20px_20px]"></div>
         <div className="relative z-10">
            <div className="text-6xl text-slate-400 mb-4 mx-auto w-24 h-24 border-2 border-slate-300 rounded-full flex items-center justify-center group-hover:border-brand-primary group-hover:text-brand-primary transition-colors bg-white">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed font-medium">{archDesc}</p>
         </div>
      </div>
    </Section>

    {/* Dynamic Children (Deployment, ROI, etc.) */}
    {children}

    {/* Bottom CTA */}
    <Section>
      <div className="bg-gradient-to-r from-brand-secondary/10 to-brand-primary/10 rounded-2xl p-12 text-center border border-brand-primary/20 shadow-lg">
         <h2 className="text-3xl font-bold text-brand-text mb-4">体验下一代 {titleCN}</h2>
         <Button to="/contact">预约演示 / Request Demo</Button>
      </div>
    </Section>
  </div>
);

// --- Specific Pages ---

export const APSPage: React.FC = () => (
  <SolutionLayout
    titleCN="APS 工业 AI 排产"
    titleEN="Industrial APS"
    heroImage="https://picsum.photos/seed/tech1/1920/1080"
    overviewCN="针对离散制造与流程工业的复杂约束，提供基于运筹学与强化学习的智能排产系统。解决订单延期、库存积压及资源冲突问题。"
    overviewEN="Intelligent scheduling systems based on Operations Research and RL, tailored for complex constraints. Solves order delays, inventory backlog, and resource conflicts."
    features={[
      { titleCN: "多目标优化", titleEN: "Multi-Objective Optimization", descCN: "平衡交期、成本与设备利用率。", descEN: "Balance delivery dates, costs, and equipment utilization." },
      { titleCN: "实时动态重排", titleEN: "Real-time Rescheduling", descCN: "应对插单、设备故障等突发状况。", descEN: "Respond to urgent orders and equipment failures instantly." },
      { titleCN: "物料需求同步", titleEN: "Material Requirement Sync", descCN: "生产计划与物料齐套性联动。", descEN: "Sync production plans with material kitting status." }
    ]}
    archDesc="[Data Layer: ERP/MES] -> [AI Engine: Genetic Algo + RL Agent] -> [App Layer: Gantt/Reports]"
  >
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
         <div>
            <SectionHeader align="left" titleCN="产品形态" titleEN="Deployment" />
            <p className="text-brand-muted mb-2">支持私有化部署以保障数据安全，也支持 SaaS 模式快速上线。</p>
            <p className="text-slate-500 text-sm">Supports on-premise deployment for data security, and SaaS mode for rapid implementation.</p>
         </div>
         <div>
            <SectionHeader align="left" titleCN="ROI 价值" titleEN="ROI" />
            <ul className="space-y-4">
               <li className="flex items-center gap-4 text-brand-text font-bold text-xl"><span className="text-brand-primary text-3xl">90%</span> 排产时间缩短 / Scheduling time reduced</li>
               <li className="flex items-center gap-4 text-brand-text font-bold text-xl"><span className="text-brand-primary text-3xl">20%</span> 设备利用率提升 / Equipment utilization up</li>
            </ul>
         </div>
      </div>
    </Section>
  </SolutionLayout>
);

export const AIOpsPage: React.FC = () => (
  <SolutionLayout
    titleCN="AIOps 危情管控系统"
    titleEN="AIOps Risk Control"
    heroImage="https://picsum.photos/seed/tech2/1920/1080"
    overviewCN="融合计算机视觉与物联网数据的安全管控平台，实现工业现场的“全感知、全智能、全预测”。"
    overviewEN="A safety management platform fusing Computer Vision and IoT data, achieving 'Total Awareness, Total Intelligence, and Total Prediction'."
    features={[
      { titleCN: "CV 视觉识别", titleEN: "CV Recognition", descCN: "识别未戴安全帽、烟火、泄漏等违规异常。", descEN: "Detect PPE violations, smoke, fire, and leaks." },
      { titleCN: "设备预测性维护", titleEN: "Predictive Maintenance", descCN: "基于振动与温度数据的故障预警。", descEN: "Fault warning based on vibration and temperature data." },
      { titleCN: "根因分析", titleEN: "Root Cause Analysis", descCN: "自动关联告警，定位问题源头。", descEN: "Automatically correlate alarms to pinpoint root causes." }
    ]}
    archDesc="[Edge Nodes] -> [Cloud AI Hub] -> [Command Center]"
  >
    <Section>
       <SectionHeader titleCN="合规与安全" titleEN="Compliance" />
       <div className="text-center text-brand-muted max-w-3xl mx-auto">
          <p>符合 ISO 信息安全标准及国家“工业互联网+安全生产”要求。</p>
          <p className="text-sm mt-2 opacity-70">Compliant with ISO information security standards and national "Industrial Internet + Work Safety" requirements.</p>
       </div>
    </Section>
  </SolutionLayout>
);

export const EducationPage: React.FC = () => (
  <SolutionLayout
    titleCN="AI 高端教育"
    titleEN="AI Advanced Education"
    heroImage="https://picsum.photos/seed/tech3/1920/1080"
    overviewCN="面向高校与企业的 AI 实训平台，弥合学术理论与工业实战的鸿沟。"
    overviewEN="AI training platform for universities and enterprises, bridging the gap between academic theory and industrial practice."
    features={[
      { titleCN: "数字人导师", titleEN: "Digital Tutor", descCN: "24 小时在线的 AI 助教，提供代码纠错与知识点答疑。", descEN: "24/7 AI teaching assistant providing code debugging and concept Q&A." },
      { titleCN: "个性化学习", titleEN: "Personalized Learning", descCN: "基于知识图谱，为每个学员生成专属学习路径。", descEN: "Generate exclusive learning paths for each student based on knowledge graphs." },
      { titleCN: "产教融合", titleEN: "Integration", descCN: "真实工业数据实训案例。", descEN: "Real industrial data training cases." }
    ]}
    archDesc="[LMS Platform] -> [AI Tutor Agent] -> [Virtual Lab Environment]"
  />
);

export const CustomAIPage: React.FC = () => (
  <SolutionLayout
    titleCN="AI 定制服务"
    titleEN="Custom AI Services"
    heroImage="https://picsum.photos/seed/tech4/1920/1080"
    overviewCN="为具有独特数据资产与业务逻辑的企业提供量身定制的 AI 模型开发。"
    overviewEN="Tailor-made AI model development for enterprises with unique data assets and business logic."
    features={[
      { titleCN: "AI 咨询与规划", titleEN: "AI Consulting", descCN: "技术可行性分析与路线图设计。", descEN: "Technical feasibility analysis and roadmap design." },
      { titleCN: "PoC 原型验证", titleEN: "PoC Verification", descCN: "低成本快速验证核心算法。", descEN: "Low-cost rapid verification of core algorithms." },
      { titleCN: "算法定制开发", titleEN: "Algorithm Dev", descCN: "针对特定场景的深度学习模型训练。", descEN: "Deep learning model training for specific scenarios." }
    ]}
    archDesc="Analysis -> Data Governance -> Training -> Integration -> Ops"
  />
);