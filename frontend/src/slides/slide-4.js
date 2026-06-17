window.slideDataMap.set(4, `
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
`);
