import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section, SectionHeader, Card, Badge, Button } from '../components/UI';
import { CaseStudy } from '../types';

// Mock Data
const casesData: CaseStudy[] = [
  {
    id: "1",
    titleCN: "某大型化工集团 APS 改造",
    titleEN: "APS Transformation for a Major Chemical Group",
    industry: "Chemical",
    tags: ["APS", "Chemical", "Efficiency"],
    abstractCN: "通过 APS 系统实现排产自动化，产能提升 15%。",
    abstractEN: "Achieved automated scheduling via APS, increasing capacity by 15%.",
    clientBackgroundCN: "全球领先的精细化工制造商，年产值超 100 亿。",
    clientBackgroundEN: "A leading global fine chemical manufacturer with annual output over 10 billion.",
    challengeCN: "手工排产耗时 3 天，且难以应对插单。",
    challengeEN: "Manual scheduling took 3 days and couldn't handle urgent orders.",
    solutionCN: "部署云泥归真 APS 系统，集成 SAP。",
    solutionEN: "Deployed Yunni Genesis APS system integrated with SAP.",
    processCN: "数据清洗 -> 规则建模 -> 并行测试 -> 上线。",
    processEN: "Data cleaning -> Rule modeling -> Parallel testing -> Go-live.",
    resultsCN: ["排产耗时降至 5 分钟", "库存周转率提升 12%"],
    resultsEN: ["Scheduling time reduced to 5 mins", "Inventory turnover increased by 12%"],
    quoteCN: "云泥归真的 AI 技术真正懂我们的业务。",
    quoteEN: "Yunni Genesis's AI truly understands our business."
  },
  {
    id: "2",
    titleCN: "智慧园区危情管控平台",
    titleEN: "Smart Park Risk Control Platform",
    industry: "Government/Park",
    tags: ["AIOps", "Safety", "CV"],
    abstractCN: "全天候安全监控，事故率降低 90%。",
    abstractEN: "24/7 safety monitoring, reducing accident rate by 90%.",
    clientBackgroundCN: "省级重点工业园区。",
    clientBackgroundEN: "Provincial key industrial park.",
    challengeCN: "监管盲区多，人力巡检效率低。",
    challengeEN: "Many blind spots, low efficiency of manual inspection.",
    solutionCN: "AIOps 平台接入 500+ 摄像头与 IoT 传感器。",
    solutionEN: "AIOps platform connected to 500+ cameras and IoT sensors.",
    processCN: "边缘节点部署 -> 云端训练 -> 实时推理。",
    processEN: "Edge node deployment -> Cloud training -> Real-time inference.",
    resultsCN: ["识别准确率 98%", "响应时间 < 3秒"],
    resultsEN: ["Recognition accuracy 98%", "Response time < 3s"]
  }
];

export const CaseList: React.FC = () => (
  <div className="pt-20">
    <Section>
      <SectionHeader titleCN="成功案例" titleEN="Success Stories" />
      <div className="flex gap-2 justify-center mb-12">
        {['All', 'Chemical', 'Manufacturing', 'Energy'].map(filter => (
          <button key={filter} className="px-4 py-1 rounded-full border border-slate-200 text-slate-500 hover:border-brand-primary hover:text-brand-primary text-sm transition-colors bg-white">
            {filter}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {casesData.map(c => (
          <Link key={c.id} to={`/cases/${c.id}`} className="group">
            <Card className="h-full flex flex-col">
               <div className="aspect-video bg-slate-100 rounded mb-6 overflow-hidden">
                 <img src={`https://picsum.photos/seed/${c.id}/800/600`} alt={c.titleEN} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="flex gap-2 mb-3">
                 {c.tags.map(t => <Badge key={t}>{t}</Badge>)}
               </div>
               <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">{c.titleCN}</h3>
               <p className="text-xs text-brand-secondary uppercase mb-4">{c.titleEN}</p>
               <p className="text-slate-600 text-sm mb-4 flex-grow">{c.abstractCN} {c.abstractEN}</p>
               <div className="text-brand-primary text-sm font-medium flex items-center">Read Case Study &rarr;</div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  </div>
);

export const CaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = casesData.find(c => c.id === id);

  if (!data) return <div className="pt-32 text-center text-brand-text">Case not found</div>;

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-20 px-4 text-center">
         <div className="flex justify-center gap-2 mb-4">
            {data.tags.map(t => <Badge key={t}>{t}</Badge>)}
         </div>
         <h1 className="text-3xl md:text-5xl font-bold text-brand-text mb-4 max-w-4xl mx-auto">{data.titleCN}</h1>
         <p className="text-xl text-brand-primary max-w-4xl mx-auto">{data.titleEN}</p>
      </div>

      <Section>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
               <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">客户背景 / Client Background</h3>
                  <p className="text-slate-600 leading-relaxed">{data.clientBackgroundCN}<br/><span className="text-sm opacity-60 italic">{data.clientBackgroundEN}</span></p>
               </div>
               <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">面临挑战 / Challenge</h3>
                  <p className="text-slate-600 leading-relaxed">{data.challengeCN}<br/><span className="text-sm opacity-60 italic">{data.challengeEN}</span></p>
               </div>
               <div>
                  <h3 className="text-xl font-bold text-brand-text mb-2">实施过程 / Process</h3>
                  <p className="text-slate-600 leading-relaxed">{data.processCN}<br/><span className="text-sm opacity-60 italic">{data.processEN}</span></p>
               </div>
            </div>
            
            <div className="lg:col-span-1">
               <div className="bg-white border border-slate-200 rounded-xl p-6 sticky top-24 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-text mb-4">关键成果 / Key Results</h3>
                  <ul className="space-y-4 mb-8">
                     {data.resultsCN.map((r, i) => (
                        <li key={i} className="flex flex-col">
                           <span className="text-brand-primary font-bold text-lg">{r}</span>
                           <span className="text-xs text-slate-500">{data.resultsEN[i]}</span>
                        </li>
                     ))}
                  </ul>
                  {data.quoteCN && (
                     <blockquote className="border-l-4 border-brand-primary pl-4 italic text-slate-600 text-sm">
                        "{data.quoteCN}"
                        <div className="mt-2 text-xs not-italic font-bold text-brand-text">- {data.quoteEN}</div>
                     </blockquote>
                  )}
               </div>
            </div>
         </div>
      </Section>
      
      <div className="text-center pb-20">
         <Button to="/cases" variant="outline">返回案例列表 / Back to Cases</Button>
      </div>
    </div>
  );
};