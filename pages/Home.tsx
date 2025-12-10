import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Section, SectionHeader, Card, FeatureCard } from '../components/UI';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
           {/* Modern Abstract Architectural Background */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
           
           {/* Gradient Overlays for Depth */}
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/50 to-brand-dark"></div>
           
           {/* Animated Blobs */}
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] animate-pulse"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-text mb-6 leading-tight tracking-tight">
            重塑工业智能新范式<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-600">
              让复杂决策回归简单
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 font-light mb-8 max-w-3xl mx-auto">
            Reshaping Industrial Intelligence: Returning Complex Decisions to Simplicity.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
            <Button to="/contact" className="min-w-[200px] text-lg">
              预约演示 / Request Demo
            </Button>
            <Button to="/resources" variant="outline" className="min-w-[200px] text-lg bg-white/50 backdrop-blur-sm">
              观看视频 / Watch Video
            </Button>
          </div>
          
          <div className="border-t border-slate-200 pt-8">
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">50+ 头部企业信赖 / Trusted by 50+ Enterprise Leaders</p>
            <div className="flex justify-center gap-8 opacity-40 hover:opacity-100 transition-all">
               {/* Logo Placeholders */}
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="h-8 w-24 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-600">Client {i}</div>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Solutions */}
      <Section id="solutions">
        <SectionHeader 
          titleCN="核心解决方案" 
          titleEN="Core Solutions" 
          subtitleCN="覆盖工业生产全链路的智能化产品矩阵"
          subtitleEN="Intelligent product matrix covering the full industrial production chain"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/solutions/aps" className="group">
            <Card className="h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-1 group-hover:text-brand-primary transition-colors">APS 工业 AI 排产</h3>
              <p className="text-xs text-brand-secondary uppercase mb-4">Industrial APS</p>
              <p className="text-brand-muted mb-2">毫秒级运算，打破产能瓶颈。</p>
              <p className="text-slate-400 text-xs">Millisecond-level computation to break throughput bottlenecks.</p>
            </Card>
          </Link>

          <Link to="/solutions/aiops" className="group">
            <Card className="h-full">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-1 group-hover:text-brand-primary transition-colors">AIOps 危情管控</h3>
              <p className="text-xs text-brand-secondary uppercase mb-4">AIOps Risk Control</p>
              <p className="text-brand-muted mb-2">全天候隐患预测，保障生产安全。</p>
              <p className="text-slate-400 text-xs">24/7 hazard prediction ensuring production safety.</p>
            </Card>
          </Link>

          <Link to="/solutions/ai-education" className="group">
            <Card className="h-full">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-1 group-hover:text-brand-primary transition-colors">AI 高端教育</h3>
              <p className="text-xs text-brand-secondary uppercase mb-4">AI Advanced Education</p>
              <p className="text-brand-muted mb-2">产教融合，培育下一代 AI 人才。</p>
              <p className="text-slate-400 text-xs">Industry-education integration cultivating next-gen AI talent.</p>
            </Card>
          </Link>

          <Link to="/solutions/custom-ai" className="group">
            <Card className="h-full">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-1 group-hover:text-brand-primary transition-colors">AI 定制服务</h3>
              <p className="text-xs text-brand-secondary uppercase mb-4">Custom AI Services</p>
              <p className="text-brand-muted mb-2">深度场景定制，释放数据价值。</p>
              <p className="text-slate-400 text-xs">Deep scenario customization unlocking data value.</p>
            </Card>
          </Link>
        </div>
      </Section>

      {/* Why Us */}
      <Section className="bg-white border-y border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <SectionHeader align="left" titleCN="为什么选择云泥归真？" titleEN="Why Choose Yunni Genesis?" />
             <div className="space-y-8">
               <div className="flex gap-4">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-xl">1</div>
                 <div>
                   <h3 className="text-xl font-bold text-brand-text mb-1">深度行业认知 / Deep Industry Insight</h3>
                   <p className="text-brand-muted">懂 AI，更懂工业场景的复杂性。<br/>We understand AI, but more importantly, we understand industrial complexity.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-xl">2</div>
                 <div>
                   <h3 className="text-xl font-bold text-brand-text mb-1">自主可控算法 / Proprietary Algorithms</h3>
                   <p className="text-brand-muted">拥有完全自主知识产权的优化求解器。<br/>Fully proprietary optimization solvers and IP.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-xl">3</div>
                 <div>
                   <h3 className="text-xl font-bold text-brand-text mb-1">企业级交付 / Enterprise-Grade Delivery</h3>
                   <p className="text-brand-muted">高可用、高安全、易集成的系统架构。<br/>High availability, high security, and integration-ready system architecture.</p>
                 </div>
               </div>
             </div>
          </div>
          <div className="relative h-96 lg:h-full min-h-[400px] bg-gradient-to-br from-brand-secondary/5 to-brand-primary/10 rounded-2xl border border-slate-200 flex items-center justify-center overflow-hidden">
             {/* Abstract Visualization */}
             <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20">
                {Array.from({length: 36}).map((_, i) => (
                   <div key={i} className={`bg-brand-primary ${Math.random() > 0.7 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}></div>
                ))}
             </div>
             <div className="relative z-10 text-center">
                <div className="text-6xl font-bold text-brand-primary mb-2 drop-shadow-sm">99.9%</div>
                <div className="text-brand-secondary uppercase tracking-widest font-semibold">System Reliability</div>
             </div>
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeader titleCN="行业覆盖" titleEN="Industries" />
        <div className="flex flex-wrap justify-center gap-4">
           {['化工 / Chemical', '制造 / Manufacturing', '能源 / Energy', '教育 / Education', '政府 / Gov'].map((ind, idx) => (
             <div key={idx} className="px-8 py-4 bg-white border border-slate-200 shadow-sm rounded-lg text-slate-600 hover:border-brand-primary hover:text-brand-primary hover:shadow-md transition-all cursor-pointer text-center font-medium">
                {ind}
             </div>
           ))}
        </div>
      </Section>

      {/* Cases Preview */}
      <Section>
        <SectionHeader titleCN="典型案例" titleEN="Case Studies" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <Link to="/cases/1" className="relative group rounded-2xl overflow-hidden aspect-video shadow-lg">
              <img src="https://picsum.photos/seed/factory/800/600" alt="Case 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8">
                 <div className="inline-block px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded mb-3">产能提升 15% / +15% Capacity</div>
                 <h3 className="text-2xl font-bold text-white mb-1">某大型化工集团 APS 改造</h3>
                 <p className="text-slate-200 text-sm">APS Transformation for a Major Chemical Group</p>
              </div>
           </Link>
           <Link to="/cases/2" className="relative group rounded-2xl overflow-hidden aspect-video shadow-lg">
              <img src="https://picsum.photos/seed/park/800/600" alt="Case 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8">
                 <div className="inline-block px-3 py-1 bg-brand-secondary text-white text-xs font-bold rounded mb-3">事故率降低 90% / -90% Accidents</div>
                 <h3 className="text-2xl font-bold text-white mb-1">智慧园区危情管控平台</h3>
                 <p className="text-slate-200 text-sm">Smart Park Risk Control Platform</p>
              </div>
           </Link>
        </div>
      </Section>

      {/* Tech CTA */}
      <Section className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl mx-4 my-8 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        <div className="relative z-10 text-center py-16 px-4">
           <h2 className="text-3xl font-bold text-white mb-4">驱动智能的底层引擎 / The Engine Driving Intelligence</h2>
           <p className="text-blue-50 mb-8 max-w-2xl mx-auto text-lg">基于云原生架构，融合运筹学与深度学习。<br/>Based on cloud-native architecture, fusing Operations Research and Deep Learning.</p>
           <Button to="/technology" className="bg-white text-blue-600 hover:bg-blue-50 border-none shadow-none">探索技术细节 / Explore Technology →</Button>
        </div>
      </Section>

      {/* Bottom CTA */}
      <div className="py-24 text-center">
        <h2 className="text-4xl font-bold text-brand-text mb-6">准备好开启智能化转型了吗？<br/><span className="text-2xl font-normal text-slate-500 mt-2 block">Ready to start your intelligent transformation?</span></h2>
        <Button to="/contact" className="text-lg px-12 py-4 shadow-xl shadow-brand-primary/20">联系我们的专家 / Contact Our Experts</Button>
      </div>

    </div>
  );
};

export default Home;