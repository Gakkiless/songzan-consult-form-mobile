window.slideDataMap.set(9, `
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
`);
