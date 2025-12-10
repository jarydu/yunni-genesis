import React from 'react';
import { Section, SectionHeader, Card, Button } from '../components/UI';
import { CaseStudy } from '../types';

// --- Industries ---
export const Industries: React.FC = () => (
  <div className="pt-20">
    <Section>
      <SectionHeader titleCN="行业解决方案" titleEN="Industry Solutions" />
      <div className="space-y-12">
        {[
          {
             nameCN: '化工', nameEN: 'Chemical',
             descCN: '高危、高能耗、连续生产的典型场景。', descEN: 'Typical scenarios of high risk, high energy consumption.',
             pain: '安全事故代价大 / High safety costs',
             sol: 'AIOps 安全监控 + 配方优化'
          },
          {
             nameCN: '制造', nameEN: 'Manufacturing',
             descCN: '追求精益生产与极致效率。', descEN: 'Pursuing lean production and ultimate efficiency.',
             pain: '订单多变 / Volatile orders',
             sol: 'APS 智能排产'
          },
          {
             nameCN: '能源', nameEN: 'Energy',
             descCN: '电力、光伏与新能源管理。', descEN: 'Power, PV and New Energy management.',
             pain: '负荷预测不准 / Inaccurate forecasting',
             sol: '能源调度优化算法'
          }
        ].map((ind, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start hover:border-brand-primary/50 hover:shadow-lg transition-all">
             <div className="w-full md:w-1/3">
               <h3 className="text-2xl font-bold text-brand-text mb-1">{ind.nameCN}</h3>
               <p className="text-brand-primary text-sm uppercase tracking-wide mb-4">{ind.nameEN}</p>
               <div className="h-1 w-12 bg-slate-200"></div>
             </div>
             <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <h4 className="text-brand-muted text-xs uppercase mb-2">Pain Points</h4>
                  <p className="text-brand-text font-medium">{ind.pain}</p>
               </div>
               <div>
                  <h4 className="text-brand-muted text-xs uppercase mb-2">Our Solution</h4>
                  <p className="text-brand-primary font-bold">{ind.sol}</p>
               </div>
               <div className="col-span-full">
                 <p className="text-slate-500 text-sm italic">"{ind.descCN} {ind.descEN}"</p>
               </div>
             </div>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

// --- Technology ---
export const Technology: React.FC = () => (
  <div className="pt-20">
    <Section>
      <SectionHeader titleCN="核心技术栈" titleEN="Technology Stack" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <Card>
           <h3 className="text-xl font-bold text-brand-text mb-4">Platform Architecture</h3>
           <p className="text-brand-muted">云原生、微服务化的弹性架构 (Cloud-native, microservices-based).</p>
           <ul className="list-disc list-inside mt-4 text-slate-500 space-y-2">
             <li>Kubernetes Containerization</li>
             <li>Edge Computing Support</li>
             <li>High Availability Clusters</li>
           </ul>
         </Card>
         <Card>
           <h3 className="text-xl font-bold text-brand-text mb-4">Optimization Engine</h3>
           <p className="text-brand-muted">核心运筹学求解器 (Core Operations Research solver).</p>
           <div className="mt-4 p-4 bg-slate-50 rounded border border-slate-200 font-mono text-xs text-green-600">
             Constraints + Variables + Objective Function = Optimal Plan
           </div>
         </Card>
      </div>
    </Section>
  </div>
);

// --- Resources ---
export const Resources: React.FC = () => (
  <div className="pt-20">
    <Section>
      <SectionHeader titleCN="资源中心" titleEN="Resources" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[1,2,3].map(i => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[3/4] bg-slate-100 rounded-lg mb-4 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
               <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-4xl">PDF</div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
               <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs bg-brand-primary text-white px-2 py-0.5 rounded font-bold">Whitepaper</span>
                  <h4 className="text-white font-bold mt-2 group-hover:underline">202{i} Industrial AI Trends</h4>
               </div>
            </div>
          </div>
        ))}
      </div>
      
      <SectionHeader align="left" titleCN="常见问题" titleEN="FAQ" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {[
           {q: "系统部署需要多长时间？", a: "标准 SaaS 版 2 周内，定制化部署通常 2-3 个月。"},
           {q: "数据安全如何保障？", a: "支持私有化部署，数据不出厂区。"}
         ].map((faq, i) => (
           <Card key={i} hoverEffect={false}>
             <h4 className="text-brand-text font-bold mb-2">Q: {faq.q}</h4>
             <p className="text-brand-muted">A: {faq.a}</p>
           </Card>
         ))}
      </div>
    </Section>
  </div>
);

// --- About ---
export const About: React.FC = () => (
  <div className="pt-20">
     <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h1 className="text-4xl font-bold text-brand-text mb-6">我们是谁 / Who We Are</h1>
           <p className="text-xl text-brand-muted">使命：用 AI 还原工业数据的本质价值。<br/><span className="text-base text-slate-400">Mission: To restore the essential value of industrial data with AI.</span></p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
           {[2021, 2022, 2023, 2024].map((year, i) => (
             <div key={year} className="border-t-2 border-slate-200 pt-4 relative">
                <div className="absolute -top-1.5 left-0 w-3 h-3 bg-brand-primary rounded-full"></div>
                <h3 className="text-2xl font-bold text-brand-text mb-2">{year}</h3>
                <p className="text-sm text-slate-500">
                  {i === 0 && "成立于苏州 (Founded)"}
                  {i === 1 && "发布 APS 1.0 (Released APS)"}
                  {i === 2 && "完成 A 轮融资 (Series A)"}
                  {i === 3 && "服务客户突破 100 家 (100+ Clients)"}
                </p>
             </div>
           ))}
        </div>
     </Section>
  </div>
);

// --- Contact ---
export const Contact: React.FC = () => (
  <div className="pt-20 min-h-screen bg-slate-50">
     <Section>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader align="left" titleCN="联系我们" titleEN="Contact Us" />
            <p className="text-slate-600 mb-8">
              无论您是寻求解决方案的客户，还是寻求合作的伙伴，我们都期待您的来信。<br/>
              <span className="text-sm opacity-60">Whether you are a client seeking solutions or a partner seeking cooperation, we look forward to hearing from you.</span>
            </p>
            <div className="space-y-4">
               <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                 <h4 className="text-brand-text font-bold mb-1">商务合作 / Business</h4>
                 <p className="text-brand-primary">business@yunnigenesis.com</p>
               </div>
               <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                 <h4 className="text-brand-text font-bold mb-1">加入我们 / Careers</h4>
                 <p className="text-brand-primary">hr@yunnigenesis.com</p>
               </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
             <h3 className="text-2xl font-bold text-brand-text mb-6">预约演示 / Request Demo</h3>
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">姓名 / Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-300 rounded p-3 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">公司邮箱 / Work Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-300 rounded p-3 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 mb-1">需求描述 / Inquiry</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-300 rounded p-3 text-slate-900 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"></textarea>
                </div>
                <Button className="w-full">提交申请 / Submit</Button>
             </form>
          </div>
       </div>
     </Section>
  </div>
);