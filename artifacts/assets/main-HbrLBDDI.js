(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const d of t)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const d={};return t.integrity&&(d.integrity=t.integrity),t.referrerPolicy&&(d.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?d.credentials="include":t.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(t){if(t.ep)return;t.ep=!0;const d=s(t);fetch(t.href,d)}})();class o{constructor(){this.currentIndex=0,this.slides=[],this.totalSlides=0,this.viewport=document.getElementById("ppt-viewport"),this.prevBtn=document.getElementById("prevBtn"),this.nextBtn=document.getElementById("nextBtn"),this.progressBarFill=document.getElementById("progressBarFill"),this.pageIndicator=document.getElementById("pageIndicator"),this.init(),this.initWindowMessage()}init(){this.loadSlides(),this.bindEvents(),this.initializePage(),this.updateUI(),this.updateViewportScale()}initWindowMessage(){window.addEventListener("message",e=>{if(!e.data||typeof e.data!="object")return;const{type:s,data:i}=e.data;s==="childrenstart"?(this.prevBtn.style.visibility="hidden",this.nextBtn.style.visibility="hidden",this.progressBarFill.style.visibility="hidden",this.pageIndicator.style.visibility="hidden"):s==="childrenstop"&&(this.prevBtn.style.visibility="visible",this.nextBtn.style.visibility="visible",this.progressBarFill.style.visibility="visible",this.pageIndicator.style.visibility="visible")})}initializePage(){const e=new URLSearchParams(window.location.search);let s=e.get("page");if(!s){s="1",e.set("page","1");const d=`${window.location.pathname}?${e.toString()}`;window.history.replaceState({},"",d)}const i=parseInt(s,10),t=i-1;if(!isNaN(i)&&t>=0&&t<this.totalSlides)this.slides[0]&&this.slides[0].classList.remove("active"),this.currentIndex=t,this.slides[t]&&this.slides[t].classList.add("active");else{console.warn(`无效的页码参数: ${s}，将显示第 1 页`),e.set("page","1");const d=`${window.location.pathname}?${e.toString()}`;window.history.replaceState({},"",d)}}loadSlides(){if(typeof window.slideDataMap>"u"){console.error("未找到 slideDataMap");return}const e=Array.from(window.slideDataMap.keys()).sort((s,i)=>s-i);if(this.totalSlides=e.length,this.totalSlides===0){console.warn("slideDataMap 为空，没有幻灯片可加载");return}e.forEach((s,i)=>{const t=document.createElement("div");t.className="slide",i===0&&t.classList.add("active");const d=window.slideDataMap.get(s);if(!d||typeof d!="string"){this.totalSlides--,console.error(`未找到页码 ${s} 的内容, 或者页码 ${s} 的内容为空`);return}const l=document.createElement("div");l.innerHTML=d.trim(),t.appendChild(l),this.viewport.appendChild(t),this.slides.push(t)})}bindEvents(){this.prevBtn.addEventListener("click",()=>this.prevSlide()),this.nextBtn.addEventListener("click",()=>this.nextSlide()),document.addEventListener("keydown",s=>{s.key==="ArrowLeft"?this.prevSlide():s.key==="ArrowRight"||s.key===" "?(s.preventDefault(),this.nextSlide()):s.key==="Home"?this.goToSlide(0):s.key==="End"&&this.goToSlide(this.totalSlides-1)});let e=0;this.viewport.addEventListener("touchstart",s=>{e=s.touches[0].clientX}),this.viewport.addEventListener("touchend",s=>{const i=s.changedTouches[0].clientX,t=e-i;Math.abs(t)>50&&(t>0?this.nextSlide():this.prevSlide())}),window.addEventListener("resize",()=>this.updateViewportScale())}prevSlide(){this.currentIndex>0&&this.goToSlide(this.currentIndex-1)}nextSlide(){this.currentIndex<this.totalSlides-1&&this.goToSlide(this.currentIndex+1)}goToSlide(e){e<0||e>=this.totalSlides||(this.slides[this.currentIndex].classList.remove("active"),this.currentIndex=e,this.slides[this.currentIndex].classList.add("active"),this.updateUrlPage(e+1),this.updateUI())}updateUrlPage(e){const s=new URLSearchParams(window.location.search);s.set("page",e.toString());const i=`${window.location.pathname}?${s.toString()}`;window.history.replaceState({},"",i)}updateUI(){if(this.totalSlides===0){this.prevBtn.disabled=!0,this.nextBtn.disabled=!0,this.progressBarFill.style.width="0%",this.pageIndicator.textContent="制作中";return}this.prevBtn.disabled=this.currentIndex===0,this.nextBtn.disabled=this.currentIndex===this.totalSlides-1;const e=(this.currentIndex+1)/this.totalSlides*100;this.progressBarFill.style.width=`${e}%`,this.pageIndicator.textContent=`${this.currentIndex+1} / ${this.totalSlides}`}updateViewportScale(){const t=window.innerWidth-40,d=window.innerHeight-40,l=t/1440,n=d/810,r=Math.min(l,n,1);this.viewport.style.transform=`scale(${r})`,console.log(`窗口: ${window.innerWidth}x${window.innerHeight}, 缩放: ${r.toFixed(3)}`)}}class x{constructor(){this.validRoutes=["/","/index.html"],this.checkRoute()}checkRoute(){const e=window.location.pathname;if(e.includes("404.html"))return;this.validRoutes.some(i=>i==="/"?e==="/"||e==="/index.html":e===i)||(console.warn(`Invalid route detected: ${e}, redirecting to 404`),window.location.href="/404.html")}addRoute(e){this.validRoutes.includes(e)||this.validRoutes.push(e)}isValidRoute(e){return this.validRoutes.includes(e)}}window.addEventListener("DOMContentLoaded",()=>{new x,new o});window.slideDataMap.set(1,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1B3A6B] to-[#0d2345]"></div>
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E67C00]/5 rounded-full blur-3xl"></div>
    <div class="absolute top-12 right-16 w-1 h-48 bg-[#E67C00]/30"></div>
    <div class="absolute top-12 right-20 w-1 h-32 bg-white/10"></div>
    <div class="relative z-10 w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col justify-center">
      <div class="flex items-center gap-6 mb-10">
        <div class="w-[4px] h-28 bg-[#E67C00]"></div>
        <div>
          <div class="text-[#E67C00] text-base font-semibold tracking-[0.3em] mb-4 uppercase">Sales Training Guide · v1.0</div>
          <h1 class="text-[4.5rem] font-bold text-white leading-tight" style="font-family:'Noto Sans SC',sans-serif;">用户关系助手</h1>
          <h2 class="text-[2.2rem] font-light text-blue-200 mt-2" style="font-family:'Noto Sans SC',sans-serif;">销售使用培训指南</h2>
        </div>
      </div>
      <div class="flex items-center gap-8 ml-10 text-gray-300 text-lg">
        <div class="flex items-center gap-3">
          <div class="w-3 h-3 bg-[#E67C00] rounded-full"></div>
          <span>全体一线销售</span>
        </div>
        <div class="w-[1px] h-5 bg-gray-600"></div>
        <div class="flex items-center gap-3">
          <div class="w-3 h-3 bg-[#E67C00] rounded-full"></div>
          <span>销售负责人</span>
        </div>
        <div class="w-[1px] h-5 bg-gray-600"></div>
        <span>2026年5月</span>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(2,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex">
      <div class="w-[380px] bg-gradient-to-br from-[#1B3A6B] to-[#0d2345] flex items-center justify-center flex-shrink-0">
        <div class="text-white text-center px-8">
          <div class="text-[#E67C00] text-base font-semibold tracking-[0.2em] mb-4 uppercase">Contents</div>
          <h1 class="text-4xl font-bold mb-4" style="font-family:'Noto Sans SC',sans-serif;">培训内容</h1>
          <div class="w-20 h-1 bg-[#E67C00] mx-auto"></div>
          <p class="text-blue-200 text-sm mt-6 leading-relaxed">本次培训将帮助你<br/>在5分钟内掌握<br/>用户关系助手的核心用法</p>
        </div>
      </div>
      <div class="flex-1 flex flex-col justify-center px-14 bg-gradient-to-br from-slate-50 to-blue-50">
        <div class="space-y-5">
          <div class="flex items-center gap-5 group">
            <div class="w-14 h-14 bg-[#1B3A6B] flex items-center justify-center flex-shrink-0">
              <span class="text-xl font-bold text-white">01</span>
            </div>
            <div class="flex-1 border-l-2 border-gray-200 pl-5">
              <h3 class="text-xl font-semibold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">这个工具能帮你做什么</h3>
              <p class="text-sm text-gray-500 mt-1">工具价值与核心定位</p>
            </div>
          </div>
          <div class="flex items-center gap-5 group">
            <div class="w-14 h-14 bg-[#1B3A6B]/80 flex items-center justify-center flex-shrink-0">
              <span class="text-xl font-bold text-white">02</span>
            </div>
            <div class="flex-1 border-l-2 border-gray-200 pl-5">
              <h3 class="text-xl font-semibold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">界面布局一眼看懂</h3>
              <p class="text-sm text-gray-500 mt-1">四个区域，快速定位</p>
            </div>
          </div>
          <div class="flex items-center gap-5 group">
            <div class="w-14 h-14 bg-[#E67C00] flex items-center justify-center flex-shrink-0">
              <span class="text-xl font-bold text-white">03</span>
            </div>
            <div class="flex-1 border-l-2 border-[#E67C00]/40 pl-5">
              <h3 class="text-xl font-semibold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">三大核心功能详解</h3>
              <p class="text-sm text-gray-500 mt-1">我的待办 · 维护记录 · 会员查询</p>
            </div>
          </div>
          <div class="flex items-center gap-5 group">
            <div class="w-14 h-14 bg-[#1B3A6B]/60 flex items-center justify-center flex-shrink-0">
              <span class="text-xl font-bold text-white">04</span>
            </div>
            <div class="flex-1 border-l-2 border-gray-200 pl-5">
              <h3 class="text-xl font-semibold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">四个常用操作场景</h3>
              <p class="text-sm text-gray-500 mt-1">照着走，不用思考</p>
            </div>
          </div>
          <div class="flex items-center gap-5 group">
            <div class="w-14 h-14 bg-[#1B3A6B]/40 flex items-center justify-center flex-shrink-0">
              <span class="text-xl font-bold text-white">05</span>
            </div>
            <div class="flex-1 border-l-2 border-gray-200 pl-5">
              <h3 class="text-xl font-semibold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">重点提醒 & FAQ</h3>
              <p class="text-sm text-gray-500 mt-1">5条必记 + 常见问题解答</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(3,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
      <div class="flex items-center justify-between mb-8 pb-5 border-b-4 border-[#1B3A6B]">
        <div>
          <h2 class="text-[38px] font-bold text-slate-800" style="font-family:'Noto Sans SC',sans-serif;">它帮你做三件事</h2>
          <p class="text-base text-slate-500 mt-1">用户关系助手 = 管客户 · 记跟进 · 看待办 的一站式工作台</p>
        </div>
        <div class="px-5 py-3 bg-[#1B3A6B] text-white text-base font-semibold">工具价值</div>
      </div>
      <div class="grid grid-cols-3 gap-6 mb-6">
        <div class="bg-white border border-gray-100 shadow-md rounded-lg p-6 border-t-4 border-t-[#1B3A6B]">
          <div class="w-12 h-12 bg-[#1B3A6B] rounded flex items-center justify-center text-white text-2xl mb-4">📅</div>
          <h3 class="text-[20px] font-bold text-gray-800 mb-3" style="font-family:'Noto Sans SC',sans-serif;">知道今天该联系谁</h3>
          <p class="text-gray-600 text-base leading-relaxed mb-4">每天打开，左栏「我的待办」告诉你今日优先任务，按红→橙顺序处理，不再遗漏任何跟进。</p>
          <div class="bg-slate-50 rounded p-3 text-sm text-[#1B3A6B] font-semibold">
            → 「我的待办」模块
          </div>
        </div>
        <div class="bg-white border border-gray-100 shadow-md rounded-lg p-6 border-t-4 border-t-[#E67C00]">
          <div class="w-12 h-12 bg-[#E67C00] rounded flex items-center justify-center text-white text-2xl mb-4">📝</div>
          <h3 class="text-[20px] font-bold text-gray-800 mb-3" style="font-family:'Noto Sans SC',sans-serif;">记录跟进，查找会员</h3>
          <p class="text-gray-600 text-base leading-relaxed mb-4">通话后一键新增维护记录，填写反馈与出行需求；随时搜索任意会员档案，历史跟进一目了然。</p>
          <div class="bg-orange-50 rounded p-3 text-sm text-[#E67C00] font-semibold">
            → 「维护记录」+ 会员查询
          </div>
        </div>
        <div class="bg-white border border-gray-100 shadow-md rounded-lg p-6 border-t-4 border-t-[#2E86C1]">
          <div class="w-12 h-12 bg-[#2E86C1] rounded flex items-center justify-center text-white text-2xl mb-4">👥</div>
          <h3 class="text-[20px] font-bold text-gray-800 mb-3" style="font-family:'Noto Sans SC',sans-serif;">掌握重点维护名单</h3>
          <p class="text-gray-600 text-base leading-relaxed mb-4">系统自动圈出「优先维护」和「建议维护」客户，点击数字即可查看完整名单，主动触达不靠感觉。</p>
          <div class="bg-blue-50 rounded p-3 text-sm text-[#2E86C1] font-semibold">
            → 复购/首购非核心快捷入口
          </div>
        </div>
      </div>
      <div class="bg-[#1B3A6B]/5 border border-[#1B3A6B]/20 rounded-lg p-4 flex items-center gap-4">
        <div class="w-8 h-8 bg-[#1B3A6B] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">✓</div>
        <p class="text-gray-700 text-base"><span class="font-bold text-[#1B3A6B]">数据自动同步：</span>所有操作实时同步会员中台及 CDP，无需二次录入，改一处全链路更新。</p>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(4,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg bg-gradient-to-br from-slate-50 to-blue-50">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
      <div class="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200">
        <h2 class="text-[36px] font-bold text-slate-800" style="font-family:'Noto Sans SC',sans-serif;">界面一眼看懂</h2>
        <div class="px-5 py-2 bg-[#1B3A6B] text-white text-sm font-semibold">界面布局</div>
      </div>
      <div class="flex flex-col gap-3 flex-1">
        <!-- 顶栏 -->
        <div class="bg-[#1B3A6B] rounded-lg p-4 flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="text-white font-bold text-lg">松赞<span class="text-[#E67C00]">用户关系助手</span></div>
          </div>
          <div class="flex items-center gap-4">
            <div class="bg-white/20 text-white text-sm px-3 py-1 rounded">切换销售员 ▼</div>
            <div class="w-8 h-8 bg-[#E67C00] rounded-full flex items-center justify-center text-white text-sm font-bold">赵</div>
          </div>
          <div class="absolute left-1/2 -translate-x-1/2 text-blue-200 text-xs">① 顶栏 — 品牌标识 + 销售员切换 + 当前用户</div>
        </div>
        <!-- 快捷入口 -->
        <div class="bg-white border border-gray-200 rounded-lg p-3 flex items-center gap-4 relative">
          <div class="text-gray-500 text-sm font-semibold">快捷入口：</div>
          <div class="bg-[#1B3A6B] text-white text-sm px-4 py-2 rounded font-semibold">+ 新建咨询单</div>
          <div class="bg-white border-2 border-[#1B3A6B] text-[#1B3A6B] text-sm px-4 py-2 rounded font-semibold">🔍 会员查询及维护</div>
          <div class="ml-auto text-gray-400 text-xs">② 快捷入口条 — 两个最常用操作入口</div>
        </div>
        <!-- 双栏主区域 -->
        <div class="flex gap-3 flex-1">
          <!-- 左栏 -->
          <div class="w-[48%] bg-white border-2 border-[#1B3A6B]/30 rounded-lg p-4 flex flex-col">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-5 h-5 bg-[#1B3A6B] rounded-full flex items-center justify-center text-white text-xs font-bold">③</div>
              <h3 class="font-bold text-[#1B3A6B] text-base" style="font-family:'Noto Sans SC',sans-serif;">📋 我的待办（左栏）</h3>
            </div>
            <div class="flex gap-2 mb-3">
              <div class="px-3 py-1 bg-red-100 text-red-700 text-xs rounded font-semibold border border-red-200">⚠️ 已过期</div>
              <div class="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded border border-orange-200">🕐 今日到期</div>
              <div class="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded border border-blue-200">📅 即将到期</div>
              <div class="px-3 py-1 bg-green-100 text-green-700 text-xs rounded border border-green-200">✅ 已完成</div>
            </div>
            <div class="bg-red-50 border border-red-200 rounded p-3 text-sm text-gray-600">每天开工先看这里，红色优先！</div>
          </div>
          <!-- 右栏 -->
          <div class="flex-1 bg-white border-2 border-[#E67C00]/30 rounded-lg p-4 flex flex-col">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-5 h-5 bg-[#E67C00] rounded-full flex items-center justify-center text-white text-xs font-bold">④</div>
              <h3 class="font-bold text-[#E67C00] text-base" style="font-family:'Noto Sans SC',sans-serif;">📝 维护记录（右栏）</h3>
            </div>
            <div class="grid grid-cols-4 gap-2 mb-3">
              <div class="text-center bg-red-50 rounded p-2">
                <div class="text-2xl font-bold text-red-600">8</div>
                <div class="text-[10px] text-gray-500 leading-tight">当年复购<br/>非核心</div>
              </div>
              <div class="text-center bg-orange-50 rounded p-2">
                <div class="text-2xl font-bold text-orange-500">23</div>
                <div class="text-[10px] text-gray-500 leading-tight">当年首购<br/>非核心</div>
              </div>
              <div class="text-center bg-green-50 rounded p-2">
                <div class="text-2xl font-bold text-green-600">156</div>
                <div class="text-[10px] text-gray-500 leading-tight">名下<br/>会员数</div>
              </div>
              <div class="text-center bg-blue-50 rounded p-2">
                <div class="text-2xl font-bold text-blue-600">12</div>
                <div class="text-[10px] text-gray-500 leading-tight">本月维护<br/>次数</div>
              </div>
            </div>
            <div class="bg-orange-50 border border-orange-200 rounded p-2 text-sm text-gray-600">客户状态仪表盘 + 维护记录列表</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(5,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg bg-white">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
      <div class="flex items-center justify-between mb-6 pb-4 border-b-4 border-[#1B3A6B]">
        <div>
          <h2 class="text-[36px] font-bold text-slate-800" style="font-family:'Noto Sans SC',sans-serif;">我的待办：每天从这里开始</h2>
          <p class="text-base text-slate-500 mt-1">打开系统第一件事 → 看左栏待办，按颜色处理优先级</p>
        </div>
        <div class="px-5 py-2 bg-[#1B3A6B] text-white text-sm font-semibold">核心功能 01</div>
      </div>
      <div class="grid grid-cols-2 gap-6 flex-1">
        <!-- 四色系统 -->
        <div class="flex flex-col gap-4">
          <h3 class="text-[18px] font-bold text-gray-700 mb-1" style="font-family:'Noto Sans SC',sans-serif;">4 个 Tab，颜色即优先级</h3>
          <div class="flex items-start gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
            <div class="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center text-xl flex-shrink-0">⚠️</div>
            <div>
              <div class="flex items-center gap-3 mb-1">
                <p class="font-bold text-red-700 text-base">已过期 — 红色</p>
                <span class="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">今日最优先</span>
              </div>
              <p class="text-gray-600 text-sm">超过截止日期未处理，立即跟进，不能拖延</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
            <div class="w-12 h-12 bg-orange-400 text-white rounded-lg flex items-center justify-center text-xl flex-shrink-0">🕐</div>
            <div>
              <p class="font-bold text-orange-700 text-base mb-1">今日到期 — 橙色</p>
              <p class="text-gray-600 text-sm">今天必须完成，不留到明天</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <div class="w-12 h-12 bg-blue-400 text-white rounded-lg flex items-center justify-center text-xl flex-shrink-0">📅</div>
            <div>
              <p class="font-bold text-blue-700 text-base mb-1">即将到期 — 蓝色</p>
              <p class="text-gray-600 text-sm">未来几天内到期，提前准备话术和方案</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
            <div class="w-12 h-12 bg-green-400 text-white rounded-lg flex items-center justify-center text-xl flex-shrink-0">✅</div>
            <div>
              <p class="font-bold text-green-700 text-base mb-1">标记完成 — 绿色</p>
              <p class="text-gray-600 text-sm">已完成的记录，可查看历史跟进详情</p>
            </div>
          </div>
        </div>
        <!-- 操作说明 + 注意事项 -->
        <div class="flex flex-col gap-4">
          <div class="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <h3 class="text-[18px] font-bold text-gray-700 mb-4" style="font-family:'Noto Sans SC',sans-serif;">📌 操作说明</h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <p class="text-gray-700 text-sm">点击任意待办卡片</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <p class="text-gray-700 text-sm">弹出维护记录详情面板</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <p class="text-gray-700 text-sm">可直接查看历史记录或编辑更新</p>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-7 h-7 bg-[#E67C00] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <p class="text-gray-700 text-sm">处理完毕后手动标记完成</p>
              </div>
            </div>
          </div>
          <div class="bg-amber-50 border-2 border-amber-400 rounded-lg p-5">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-amber-500 text-xl">⚠️</span>
              <h3 class="text-[17px] font-bold text-amber-800" style="font-family:'Noto Sans SC',sans-serif;">重要提醒</h3>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed">系统<span class="font-bold text-amber-700">不会自动发微信通知</span>，需要你<span class="font-bold">主动登录查看</span>待办。建议每天上班第一件事打开系统，养成习惯。</p>
            <div class="mt-3 bg-white rounded p-3 text-xs text-gray-500">待办由「新增维护记录」时填写的提醒事项自动生成</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(6,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative flex items-center justify-center">
      <div class="relative max-w-4xl">
        <div class="absolute top-0 left-0 w-20 h-20 border-t-[6px] border-l-[6px] border-[#1B3A6B]"></div>
        <div class="absolute bottom-0 right-0 w-20 h-20 border-b-[6px] border-r-[6px] border-[#E67C00]"></div>
        <div class="px-24 py-16 text-center">
          <div class="flex items-center justify-center gap-5 mb-5">
            <div class="w-16 h-px bg-[#1B3A6B]"></div>
            <span class="text-xl font-semibold text-[#1B3A6B]" style="font-family:'Noto Sans SC',sans-serif;">核心功能 02</span>
            <div class="w-16 h-px bg-[#1B3A6B]"></div>
          </div>
          <h1 class="text-[42px] font-bold text-gray-900 mb-4" style="font-family:'Noto Sans SC',sans-serif;">维护记录</h1>
          <p class="text-xl text-gray-600" style="font-family:'Noto Sans SC',sans-serif;">管好客户的唯一数据来源</p>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(7,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
      <div class="flex items-center justify-between mb-6 pb-4 border-b-4 border-[#1B3A6B]">
        <div>
          <h2 class="text-[36px] font-bold text-slate-800" style="font-family:'Noto Sans SC',sans-serif;">四个数字，看懂你的客户状况</h2>
          <p class="text-base text-slate-500 mt-1">维护记录顶部的客户状态仪表盘</p>
        </div>
        <div class="px-5 py-2 bg-[#1B3A6B] text-white text-sm font-semibold">核心功能 02</div>
      </div>
      <div class="grid grid-cols-4 gap-5 mb-6">
        <div class="bg-white rounded-xl shadow-md border-2 border-red-200 overflow-hidden">
          <div class="bg-red-500 p-4 text-center">
            <div class="text-[42px] font-bold text-white mb-1">8</div>
            <div class="text-sm text-red-100 font-semibold" style="font-family:'Noto Sans SC',sans-serif;">🔴 当年复购非核心</div>
          </div>
          <div class="p-4">
            <div class="flex items-center gap-1 mb-2">
              <span class="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-bold">优先维护</span>
              <span class="bg-red-50 text-red-500 text-xs px-1.5 py-0.5 rounded">每周必看</span>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">今年已下单但无复购迹象的客户，<span class="font-bold text-red-600">主动触达信号</span></p>
            <div class="mt-3 bg-red-50 rounded p-2 text-xs text-red-600 text-center font-semibold">👉 点击数字查看名单</div>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-md border-2 border-orange-200 overflow-hidden">
          <div class="bg-orange-400 p-4 text-center">
            <div class="text-[42px] font-bold text-white mb-1">23</div>
            <div class="text-sm text-orange-100 font-semibold" style="font-family:'Noto Sans SC',sans-serif;">🟠 当年首购非核心</div>
          </div>
          <div class="p-4">
            <div class="flex items-center gap-1 mb-2">
              <span class="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-bold">建议维护</span>
              <span class="bg-orange-50 text-orange-500 text-xs px-1.5 py-0.5 rounded">潜力客户池</span>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed">今年首次下单、尚未深度激活，<span class="font-bold text-orange-600">你最大的增长来源</span></p>
            <div class="mt-3 bg-orange-50 rounded p-2 text-xs text-orange-600 text-center font-semibold">👉 点击数字查看名单</div>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div class="bg-green-500 p-4 text-center">
            <div class="text-[42px] font-bold text-white mb-1">156</div>
            <div class="text-sm text-green-100 font-semibold" style="font-family:'Noto Sans SC',sans-serif;">🟢 名下会员数</div>
          </div>
          <div class="p-4">
            <div class="mb-2">
              <span class="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">仅展示</span>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed">你负责的全部会员总数，不可点击，用于了解管理规模</p>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div class="bg-blue-500 p-4 text-center">
            <div class="text-[42px] font-bold text-white mb-1">12</div>
            <div class="text-sm text-blue-100 font-semibold" style="font-family:'Noto Sans SC',sans-serif;">🔵 本月维护次数</div>
          </div>
          <div class="p-4">
            <div class="mb-2">
              <span class="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">仅展示</span>
            </div>
            <p class="text-gray-500 text-sm leading-relaxed">本月已记录的维护行为次数，反映你的活跃度</p>
          </div>
        </div>
      </div>
      <div class="bg-amber-50 border-2 border-amber-400 rounded-xl p-5 flex items-start gap-4">
        <div class="w-10 h-10 bg-amber-400 text-white rounded-full flex items-center justify-center text-lg flex-shrink-0">💡</div>
        <div>
          <p class="text-amber-900 font-bold text-base mb-1" style="font-family:'Noto Sans SC',sans-serif;">重点提示</p>
          <p class="text-gray-700 text-sm leading-relaxed">红色和橙色是<span class="font-bold text-red-600">主动触达信号</span>，不是被动等待——建议每周至少消化一遍这两个数字背后的客户名单。</p>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(8,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
      <div class="flex items-center justify-between mb-5 pb-4 border-b-4 border-[#1B3A6B]">
        <div>
          <h2 class="text-[36px] font-bold text-slate-800" style="font-family:'Noto Sans SC',sans-serif;">如何新增维护记录</h2>
          <p class="text-base text-slate-500 mt-1">入口：右栏右上角「+ 新增维护记录」或通过会员查询进入</p>
        </div>
        <div class="px-5 py-2 bg-[#1B3A6B] text-white text-sm font-semibold">核心功能 02</div>
      </div>
      <div class="flex gap-6 flex-1">
        <div class="flex-1 flex flex-col gap-2.5">
          <h3 class="text-[17px] font-bold text-gray-700 mb-1" style="font-family:'Noto Sans SC',sans-serif;">📋 7 步操作流程</h3>
          <div class="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-[#1B3A6B] transition-colors">
            <div class="w-7 h-7 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
            <div><p class="text-gray-800 text-sm font-semibold">点击按钮</p><p class="text-gray-500 text-xs">点击「+ 新增维护记录」</p></div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg">
            <div class="w-7 h-7 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
            <div><p class="text-gray-800 text-sm font-semibold">选择会员</p><p class="text-gray-500 text-xs">选择要记录的会员</p></div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg">
            <div class="w-7 h-7 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
            <div><p class="text-gray-800 text-sm font-semibold">填写日期</p><p class="text-gray-500 text-xs">填写维护日期</p></div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg">
            <div class="w-7 h-7 bg-[#E67C00] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
            <div><p class="text-gray-800 text-sm font-semibold">选择维护行为 <span class="text-red-500 text-xs">*必填</span></p><p class="text-gray-500 text-xs">线下拜访 / 电话回访 / 活动邀约 / 微信沟通</p></div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg">
            <div class="w-7 h-7 bg-[#E67C00] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
            <div><p class="text-gray-800 text-sm font-semibold">填写客户反馈</p><p class="text-gray-500 text-xs">尽量详细，是日后回顾客情唯一依据</p></div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg">
            <div class="w-7 h-7 bg-[#2E86C1] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
            <div><p class="text-gray-800 text-sm font-semibold">填写出行需求</p><p class="text-gray-500 text-xs">时节、组合、预算、天数、偏好 — 是你的销售素材</p></div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg">
            <div class="w-7 h-7 bg-[#2E86C1] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">7</div>
            <div><p class="text-gray-800 text-sm font-semibold">设置提醒 → 保存</p><p class="text-gray-500 text-xs">填写提醒事项和时间，系统自动生成待办</p></div>
          </div>
        </div>
        <div class="w-[380px] flex flex-col gap-4">
          <div class="bg-amber-50 border-2 border-amber-400 rounded-xl p-5">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-amber-500 text-xl">⚠️</span>
              <h3 class="text-[17px] font-bold text-amber-800" style="font-family:'Noto Sans SC',sans-serif;">重要提醒</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">•</span>维护行为<span class="font-bold text-amber-700">必须填写</span>（红色星号项），不可为空</li>
              <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">•</span>出行需求建议尽量填完整，是给你自己的销售素材</li>
              <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">•</span>所有操作记录留存于操作日志，不可删除</li>
            </ul>
          </div>
          <div class="bg-[#1B3A6B]/5 border border-[#1B3A6B]/20 rounded-xl p-5">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-[#1B3A6B] text-lg">💡</span>
              <h3 class="text-[17px] font-bold text-[#1B3A6B]" style="font-family:'Noto Sans SC',sans-serif;">操作技巧</h3>
            </div>
            <ul class="space-y-2 text-sm text-gray-700">
              <li class="flex items-start gap-2"><span class="text-[#1B3A6B] mt-0.5">→</span>通话结束后立即记录，趁记忆新鲜</li>
              <li class="flex items-start gap-2"><span class="text-[#1B3A6B] mt-0.5">→</span>客户反馈写具体，别只写"已联系"</li>
              <li class="flex items-start gap-2"><span class="text-[#1B3A6B] mt-0.5">→</span>有跟进才有数据，有数据才有转化</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(9,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
      <div class="flex items-center justify-between mb-5 pb-4 border-b-4 border-[#1B3A6B]">
        <div>
          <h2 class="text-[36px] font-bold text-slate-800" style="font-family:'Noto Sans SC',sans-serif;">会员查询及维护</h2>
          <p class="text-base text-slate-500 mt-1">入口：顶部快捷入口「🔍 会员查询及维护」</p>
        </div>
        <div class="px-5 py-2 bg-[#1B3A6B] text-white text-sm font-semibold">核心功能 03</div>
      </div>
      <div class="grid grid-cols-2 gap-5 mb-5">
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-[#1B3A6B] rounded-lg flex items-center justify-center text-white text-lg">🔍</div>
            <h3 class="text-[18px] font-bold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">搜索会员</h3>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed mb-3">输入<span class="font-bold">姓名、卡号或手机号</span>即可快速定位目标会员，无需记忆完整信息</p>
          <div class="bg-slate-50 rounded p-2 text-xs text-gray-500">支持模糊搜索，部分匹配即可</div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-[#E67C00] rounded-lg flex items-center justify-center text-white text-lg">📋</div>
            <h3 class="text-[18px] font-bold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">查看完整档案</h3>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed mb-3">查看会员<span class="font-bold">等级、归属销售、累计消费、最近联系记录</span>，全貌一目了然</p>
          <div class="bg-orange-50 rounded p-2 text-xs text-orange-600">支持快速浏览历史维护记录</div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-[#2E86C1] rounded-lg flex items-center justify-center text-white text-lg">✏️</div>
            <h3 class="text-[18px] font-bold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">修改会员信息</h3>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed mb-3">修改会员<span class="font-bold">姓名或所在地</span>，修改后<span class="font-bold text-[#2E86C1]">实时同步 CDP</span>，无需额外操作</p>
          <div class="bg-blue-50 rounded p-2 text-xs text-blue-600">同步范围：会员中台 + CDP</div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white text-lg">👤</div>
            <h3 class="text-[18px] font-bold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">认领 / 新增记录</h3>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed mb-3">认领<span class="font-bold">无归属销售</span>的会员，或为该会员新增维护记录</p>
          <div class="bg-green-50 rounded p-2 text-xs text-green-600">已归属会员显示灰色「✓ 不可认领」</div>
        </div>
      </div>
      <div class="bg-red-50 border-2 border-red-300 rounded-xl p-5">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-red-500 text-lg">⚠️</span>
          <h3 class="text-[17px] font-bold text-red-800" style="font-family:'Noto Sans SC',sans-serif;">认领须知：请谨慎操作</h3>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">认领后该会员<span class="font-bold text-red-600">归属于你</span>，业绩和维护责任<span class="font-bold text-red-600">同步转移</span>，不可回退。已有归属销售的会员按钮显示灰色「✓ 已有归属销售」，无法认领。</p>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(10,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
      <div class="flex items-center justify-between mb-5 pb-4 border-b-4 border-[#1B3A6B]">
        <div>
          <h2 class="text-[36px] font-bold text-slate-800" style="font-family:'Noto Sans SC',sans-serif;">四个常用操作场景</h2>
          <p class="text-base text-slate-500 mt-1">学会这四招，工具就用起来了</p>
        </div>
        <div class="px-5 py-2 bg-[#1B3A6B] text-white text-sm font-semibold">操作指南</div>
      </div>
      <div class="grid grid-cols-2 gap-5 flex-1">
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">01</div>
            <h3 class="text-[18px] font-bold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">今天要跟进哪些客户？</h3>
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-600 flex-wrap mb-4">
            <span class="bg-gray-100 px-2 py-1 rounded text-xs">左栏</span>
            <span class="text-gray-400">→</span>
            <span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">已过期</span>
            <span class="text-gray-400">→</span>
            <span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">今日到期</span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">打开系统先看左栏，<span class="font-bold">红色最优先</span>，依次处理红色→橙色→蓝色</p>
          <div class="mt-auto pt-3 border-t border-gray-100">
            <span class="text-xs text-gray-400">🕐 每日习惯</span>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-[#1B3A6B] rounded-lg flex items-center justify-center text-white font-bold text-sm">02</div>
            <h3 class="text-[18px] font-bold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">通完电话，记录跟进结果</h3>
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-600 flex-wrap mb-4">
            <span class="bg-gray-100 px-2 py-1 rounded text-xs">快捷入口</span>
            <span class="text-gray-400">→</span>
            <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">会员查询</span>
            <span class="text-gray-400">→</span>
            <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">+ 新增记录</span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">通话结束立即搜索会员，<span class="font-bold">趁记忆新鲜</span>填写维护行为和客户反馈</p>
          <div class="mt-auto pt-3 border-t border-gray-100">
            <span class="text-xs text-gray-400">📞 每次通话后</span>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">03</div>
            <h3 class="text-[18px] font-bold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">本周主动开发潜力客户</h3>
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-600 flex-wrap mb-4">
            <span class="bg-gray-100 px-2 py-1 rounded text-xs">右栏</span>
            <span class="text-gray-400">→</span>
            <span class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">首购非核心</span>
            <span class="text-gray-400">→</span>
            <span class="bg-gray-100 px-2 py-1 rounded text-xs">名单→详情→新增</span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">每周<span class="font-bold">主动查看橙色数字</span>背后的客户，不坐等客户找上门</p>
          <div class="mt-auto pt-3 border-t border-gray-100">
            <span class="text-xs text-gray-400">📅 每周一次</span>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">04</div>
            <h3 class="text-[18px] font-bold text-gray-800" style="font-family:'Noto Sans SC',sans-serif;">查看自己的操作历史</h3>
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-600 flex-wrap mb-4">
            <span class="bg-gray-100 px-2 py-1 rounded text-xs">右栏</span>
            <span class="text-gray-400">→</span>
            <span class="bg-gray-100 px-2 py-1 rounded text-xs">右上角</span>
            <span class="text-gray-400">→</span>
            <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">📋 操作日志</span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">所有操作自动留痕，一键查看自己的<span class="font-bold">操作时间和内容</span></p>
          <div class="mt-auto pt-3 border-t border-gray-100">
            <span class="text-xs text-gray-400">📝 随时查询</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(11,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative flex items-center justify-center">
      <div class="relative max-w-4xl">
        <div class="absolute top-0 left-0 w-20 h-20 border-t-[6px] border-l-[6px] border-[#1B3A6B]"></div>
        <div class="absolute bottom-0 right-0 w-20 h-20 border-b-[6px] border-r-[6px] border-[#E67C00]"></div>
        <div class="px-24 py-16 text-center">
          <div class="flex items-center justify-center gap-5 mb-5">
            <div class="w-16 h-px bg-[#E67C00]"></div>
            <span class="text-xl font-semibold text-[#E67C00]" style="font-family:'Noto Sans SC',sans-serif;">培训总结</span>
            <div class="w-16 h-px bg-[#E67C00]"></div>
          </div>
          <h1 class="text-[42px] font-bold text-gray-900 mb-4" style="font-family:'Noto Sans SC',sans-serif;">重点提醒</h1>
          <p class="text-xl text-gray-600" style="font-family:'Noto Sans SC',sans-serif;">这 5 条，新手必记</p>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(12,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
      <div class="flex items-center justify-between mb-5 pb-4 border-b-4 border-[#E67C00]">
        <div>
          <h2 class="text-[36px] font-bold text-slate-800" style="font-family:'Noto Sans SC',sans-serif;">5 条，新手必记</h2>
          <p class="text-base text-slate-500 mt-1">把这几条变成习惯，你就是工具高手</p>
        </div>
        <div class="px-5 py-2 bg-[#E67C00] text-white text-sm font-semibold">行为准则</div>
      </div>
      <div class="flex flex-col gap-3 flex-1">
        <div class="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div class="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
          <div class="flex-1">
            <p class="text-gray-800 font-bold text-sm mb-1" style="font-family:'Noto Sans SC',sans-serif;">每天打开先看左栏「已过期」和「今日到期」</p>
            <p class="text-gray-500 text-sm leading-relaxed">这是当日工作优先级——先红后橙，闭环处理</p>
          </div>
          <span class="text-xs text-red-500 bg-red-50 px-2 py-1 rounded flex-shrink-0">📅 每日习惯</span>
        </div>
        <div class="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div class="w-10 h-10 bg-orange-400 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
          <div class="flex-1">
            <p class="text-gray-800 font-bold text-sm mb-1" style="font-family:'Noto Sans SC',sans-serif;">每周查看红色「优先维护」和橙色「建议维护」名单</p>
            <p class="text-gray-500 text-sm leading-relaxed">主动出击，不坐等客户找上门——这是你的业绩来源</p>
          </div>
          <span class="text-xs text-orange-500 bg-orange-50 px-2 py-1 rounded flex-shrink-0">📅 每周习惯</span>
        </div>
        <div class="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div class="w-10 h-10 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
          <div class="flex-1">
            <p class="text-gray-800 font-bold text-sm mb-1" style="font-family:'Noto Sans SC',sans-serif;">每次跟进后必须记录维护记录</p>
            <p class="text-gray-500 text-sm leading-relaxed">有跟进才有数据，有数据才有转化机会。别只打电话不记录</p>
          </div>
          <span class="text-xs text-[#1B3A6B] bg-blue-50 px-2 py-1 rounded flex-shrink-0">✍️ 核心动作</span>
        </div>
        <div class="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div class="w-10 h-10 bg-[#2E86C1] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
          <div class="flex-1">
            <p class="text-gray-800 font-bold text-sm mb-1" style="font-family:'Noto Sans SC',sans-serif;">新增记录时出行需求尽量填完整</p>
            <p class="text-gray-500 text-sm leading-relaxed">时节、组合、预算、天数、偏好——这是给你自己的销售素材，日后复盘全靠它</p>
          </div>
          <span class="text-xs text-[#2E86C1] bg-blue-50 px-2 py-1 rounded flex-shrink-0">📝 好习惯</span>
        </div>
        <div class="flex items-start gap-4 p-4 bg-white border-2 border-red-300 rounded-xl shadow-sm bg-red-50/50">
          <div class="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
          <div class="flex-1">
            <p class="text-gray-800 font-bold text-sm mb-1" style="font-family:'Noto Sans SC',sans-serif;">认领客户需谨慎</p>
            <p class="text-gray-500 text-sm leading-relaxed">认领后业绩和维护责任<span class="font-bold text-red-600">同步转移</span>，不可回退。已归属的会员不可认领</p>
          </div>
          <span class="text-xs text-red-500 bg-red-100 px-2 py-1 rounded flex-shrink-0">⚠️ 警告</span>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(13,`
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col">
      <div class="flex items-center justify-between mb-5 pb-4 border-b-4 border-[#1B3A6B]">
        <div>
          <h2 class="text-[36px] font-bold text-slate-800" style="font-family:'Noto Sans SC',sans-serif;">常见问题 FAQ</h2>
          <p class="text-base text-slate-500 mt-1">新人最容易遇到的 4 个问题</p>
        </div>
        <div class="px-5 py-2 bg-[#1B3A6B] text-white text-sm font-semibold">常见问题</div>
      </div>
      <div class="grid grid-cols-2 gap-5 flex-1">
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div class="flex items-start gap-3 mb-3">
            <div class="w-8 h-8 bg-[#1B3A6B] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">Q</div>
            <p class="text-gray-800 font-bold text-sm pt-1" style="font-family:'Noto Sans SC',sans-serif;">看不到某个会员怎么办？</p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-[#E67C00] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">A</div>
            <p class="text-gray-600 text-sm leading-relaxed pt-1">确认是否切换到正确的<span class="font-bold">销售员视图</span>（顶栏右上角）；仍看不到联系管理员确认归属。</p>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div class="flex items-start gap-3 mb-3">
            <div class="w-8 h-8 bg-[#1B3A6B] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">Q</div>
            <p class="text-gray-800 font-bold text-sm pt-1" style="font-family:'Noto Sans SC',sans-serif;">待办里有很多过期的，需要逐条处理吗？</p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-[#E67C00] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">A</div>
            <p class="text-gray-600 text-sm leading-relaxed pt-1">是的，确认处理结果后<span class="font-bold">手动标记完成</span>；无效提醒可直接完成。</p>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div class="flex items-start gap-3 mb-3">
            <div class="w-8 h-8 bg-[#1B3A6B] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">Q</div>
            <p class="text-gray-800 font-bold text-sm pt-1" style="font-family:'Noto Sans SC',sans-serif;">维护记录可以删除吗？</p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-[#E67C00] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">A</div>
            <p class="text-gray-600 text-sm leading-relaxed pt-1"><span class="font-bold">不可以删除</span>，只能编辑；所有操作记录留存于操作日志。</p>
          </div>
        </div>
        <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
          <div class="flex items-start gap-3 mb-3">
            <div class="w-8 h-8 bg-[#1B3A6B] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">Q</div>
            <p class="text-gray-800 font-bold text-sm pt-1" style="font-family:'Noto Sans SC',sans-serif;">修改会员姓名/所在地会同步系统吗？</p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-8 h-8 bg-[#E67C00] text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">A</div>
            <p class="text-gray-600 text-sm leading-relaxed pt-1">会，修改后<span class="font-bold">实时同步</span>会员中台及 CDP，无需额外操作。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`);window.slideDataMap.set(14,`
  <div class="w-[1440px] h-[810px] relative overflow-hidden" style="background: linear-gradient(135deg, #1B3A6B 0%, #0F2440 50%, #1B3A6B 100%);">
    <div class="absolute top-[-12%] left-[-8%] w-[400px] h-[400px] rounded-full" style="background: radial-gradient(circle, rgba(230,124,0,0.12) 0%, transparent 70%);"></div>
    <div class="absolute bottom-[-12%] right-[-8%] w-[450px] h-[450px] rounded-full" style="background: radial-gradient(circle, rgba(46,134,193,0.12) 0%, transparent 70%);"></div>
    <div class="absolute top-[22%] right-[15%] w-[100px] h-[1px] -rotate-45 bg-[rgba(230,124,0,0.4)]"></div>
    <div class="absolute bottom-[25%] left-[15%] w-[120px] h-[1px] rotate-45 bg-[rgba(46,134,193,0.4)]"></div>
    <div class="absolute top-[18%] left-[12%] w-[12px] h-[12px] rotate-45 border-2 border-[rgba(230,124,0,0.5)]"></div>
    <div class="absolute bottom-[20%] right-[12%] w-[14px] h-[14px] rotate-45 border-2 border-[rgba(46,134,193,0.5)]"></div>
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex items-center justify-center">
      <div class="text-center w-[75%]">
        <h1 class="text-[64px] text-white font-bold mb-5 tracking-[6px]" style="font-family:'Noto Sans SC',sans-serif;">开始使用</h1>
        <div class="w-[140px] h-[3px] mx-auto mb-8" style="background: linear-gradient(to right, #E67C00, #2E86C1);"></div>
        <p class="text-[22px] text-[#b8c8d8] font-light leading-[1.8] tracking-[2px] mb-3" style="font-family:'Noto Sans SC',sans-serif;">遇到问题，随时联系产品团队</p>
        <p class="text-[18px] text-[#8a9bae] mt-6" style="font-family:'Noto Sans SC',sans-serif;">松赞用户关系助手 · 陪你做好每一次跟进</p>
        <p class="text-[14px] text-[#5a6b7e] mt-8" style="font-family:'Noto Sans SC',sans-serif;">感谢参与培训</p>
      </div>
    </div>
  </div>
`);
