window.slideDataMap.set(5, `
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
`);
