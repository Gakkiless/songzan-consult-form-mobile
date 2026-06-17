window.slideDataMap.set(10, `
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
`);
