window.slideDataMap.set(7, `
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
`);
