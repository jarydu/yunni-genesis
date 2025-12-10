import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './UI';

const navItems = [
  { labelCN: '首页', labelEN: 'Home', path: '/' },
  { 
    labelCN: '解决方案', 
    labelEN: 'Solutions', 
    path: '/solutions',
    subItems: [
      { labelCN: 'APS 工业AI排产', labelEN: 'Industrial APS', path: '/solutions/aps' },
      { labelCN: 'AIOps 危情管控', labelEN: 'AIOps Risk Control', path: '/solutions/aiops' },
      { labelCN: 'AI 高端教育', labelEN: 'AI Education', path: '/solutions/ai-education' },
      { labelCN: 'AI 定制服务', labelEN: 'Custom AI', path: '/solutions/custom-ai' },
    ]
  },
  { labelCN: '行业', labelEN: 'Industries', path: '/industries' },
  { labelCN: '案例库', labelEN: 'Case Studies', path: '/cases' },
  { labelCN: '技术', labelEN: 'Technology', path: '/technology' },
  { labelCN: '资源中心', labelEN: 'Resources', path: '/resources' },
  { labelCN: '关于我们', labelEN: 'About', path: '/about' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">Y</div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none tracking-tight transition-colors ${scrolled ? 'text-brand-text' : 'text-brand-text lg:text-slate-700'}`}>云泥归真</span>
              <span className="text-brand-muted text-xs tracking-widest uppercase">Yunni Genesis AI</span>
            </div>
          </Link>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <div key={item.path} className="relative group">
                  <Link
                    to={item.subItems ? '#' : item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path || (item.subItems && location.pathname.startsWith(item.path))
                        ? 'text-brand-primary' 
                        : 'text-slate-600 hover:text-brand-primary'
                    }`}
                  >
                    <span className="block text-center">{item.labelCN}</span>
                    <span className="block text-center text-[10px] opacity-70 leading-none mt-0.5">{item.labelEN}</span>
                  </Link>
                  
                  {item.subItems && (
                    <div className="absolute left-0 mt-0 w-48 rounded-md shadow-xl bg-white border border-slate-100 ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                      <div className="py-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                          >
                            <span className="block font-medium">{sub.labelCN}</span>
                            <span className="block text-xs text-slate-400 mt-0.5">{sub.labelEN}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
             <span className="text-slate-500 text-sm cursor-pointer hover:text-brand-primary">EN / 中</span>
             <Button to="/contact" variant="primary" className="!py-2 !px-4 text-sm">
                预约 Demo
             </Button>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-brand-primary hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-b border-slate-200 shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div key={item.path}>
              {item.subItems ? (
                 <div className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-slate-700">{item.labelCN} <span className="text-xs opacity-50 ml-1">{item.labelEN}</span></div>
                    {item.subItems.map(sub => (
                       <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-3 py-2 pl-6 rounded-md text-sm font-medium text-slate-500 hover:text-brand-primary hover:bg-slate-50"
                      >
                        {sub.labelCN}
                      </Link>
                    ))}
                 </div>
              ) : (
                <Link
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-primary hover:bg-slate-50"
                >
                  {item.labelCN} <span className="text-xs opacity-50 ml-1">{item.labelEN}</span>
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 px-3">
             <Button to="/contact" className="w-full">预约 Demo / Request Demo</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white font-bold shadow-md">Y</div>
                <span className="text-brand-text font-bold text-lg">云泥归真</span>
             </div>
             <p className="text-sm mb-4">重塑工业智能新范式。<br/>Reshaping Industrial Intelligence.</p>
             <div className="flex space-x-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors cursor-pointer text-slate-600">Wx</div>
               <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors cursor-pointer text-slate-600">In</div>
             </div>
          </div>
          
          <div>
            <h3 className="text-brand-text font-semibold mb-4">解决方案 / Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions/aps" className="hover:text-brand-primary">APS 智能排产</Link></li>
              <li><Link to="/solutions/aiops" className="hover:text-brand-primary">AIOps 危情管控</Link></li>
              <li><Link to="/solutions/ai-education" className="hover:text-brand-primary">AI 高端教育</Link></li>
              <li><Link to="/solutions/custom-ai" className="hover:text-brand-primary">AI 定制服务</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-brand-text font-semibold mb-4">快速链接 / Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-primary">关于我们 / About</Link></li>
              <li><Link to="/cases" className="hover:text-brand-primary">成功案例 / Cases</Link></li>
              <li><Link to="/resources" className="hover:text-brand-primary">资源中心 / Resources</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary">联系我们 / Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-brand-text font-semibold mb-4">联系信息 / Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>苏州工业园区 xxx 大道</li>
              <li>contact@yunnigenesis.com</li>
              <li>+86 512 1234 5678</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Yunni Genesis AI. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>隐私政策 Privacy Policy</span>
            <span>服务条款 Terms of Service</span>
            <span>苏ICP备xxxxxxxx号</span>
          </div>
        </div>
      </div>
    </footer>
  );
};