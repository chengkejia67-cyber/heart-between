# V2.0 实现与验收

日期：2026-11-06。题库与应用升级至 2.0.0。

## 本轮改动

- 按用户确认的审阅稿落实 52 道题修改，12 道题保持原选项及顺序。
- 50 道主计分题、4 道干预行为辅助题、8 道态度题、1 道表达方式题、1 道纪念日题。
- 允许同分，区分情绪与具体行为，不把要求删照片或选择离开直接当作干预。
- 报告增加最多 9 张情境态度卡；生气但保持自我判断、急于表达、先防御后修复分别解读。
- 确定感主量尺调整为至少 4 / 6；修复和承诺分别至少 4 / 5；其他门槛按 PRD。
- 旧题库记录提示重新作答，不将旧答案索引套入新选项。
- 同步 PRD、完整题库和部署说明。
- 用户取消全站计数需求，本版不包含计数显示或统计后台。

## 已执行检查

- 10 项计分回归测试与 11 项题库、存储、路由、构建测试通过。
- 全部 64 题逐字匹配批准的题干、情境与选项；52 修改、12 保留。
- 名义标签不改变主图、标题或表达方式，旧版记录隔离通过。
- 浏览器完整作答 64 题、Q17 新选项、9 张情境卡、报告刷新、补答通过。
- PNG 实际导出为有效 1080px 宽图片；分享仅包含首页地址。
- 示例不覆盖个人进度，跨标签页同步/清除和禁用存储时答题通过。
- 320、390、768、1440px 的首页、答题和报告无横向溢出；查看了桌面报告和手机题卡截图。
- 未发现 JavaScript 运行错误或 CSP 资源错误。

测试使用 Chromium 自动化与本地生产构建，不代替真实 iOS、微信内置浏览器及用户网络实测。题库仍是自我探索工具，未宣称心理测量有效性。

## 发布方式

通过现有 main → GitHub Actions → GitHub Pages 工作流发布。线上站点沿用原地址；旧资源用内容哈希隔离。题库更改需提高版本；不要将旧记录直接转换到新选项索引。

---

以下为历史 V1.1 发布记录，仅用于版本追溯。

# V1.1 实现与验收

日期：2026-11-06。基于用户确认的设计与 64 题方案，实现可通过 GitHub Pages 部署的网站。

## 本轮改动

- 保留已确认的暖白、珊瑚红和八维画像视觉，补充手机正文可读性。
- 产品导航改为“关于测试”和“示例报告”；PRD 移至仓库文档。
- 页面路由可刷新恢复，浏览器前进／返回正常工作。
- 完成后首页提供“查看我的报告”；全部浏览但样本不足时直接进入补答总览。
- 记录读取支持版本验证、坏数据过滤、存储拒绝提示与旧 Demo 记录恢复。
- 跨标签页同步答案和清除操作，并避免同步写入循环。
- PNG 导出增加预览弹窗、下载和手机长按保存；支持文件分享的浏览器提供分享图片。
- 个人报告可以调用浏览器打印，打印版隐藏导航和交互控件。
- 页面加载失败展示重试，不清除已有答题记录。
- 生产构建仅包含网站文件，并为脚本和样式生成内容哈希。
- 使用相对资源路径与 hash 路由，兼容 GitHub Pages 仓库子路径。
- GitHub Actions 执行测试并发布；拉取请求仅检查、不发布。

## 数据行为

无服务器端答案数据库、用户账号或隐形统计。换域名／浏览器后的数据不自动迁移；页面 URL 不携带答案。分享到外部的图片不受本机“清除记录”操作影响。

## 测试范围

已执行计分逻辑、存储清洗、路由、构建测试；浏览器验收记录见测试交付说明。布局检查覆盖 320、390、768、1440px。

本轮没有将自我探索题库变为临床或已验证心理量表。真实 iOS、微信内置浏览器与不同国内网络仍需目标设备实测；不将 Chromium 模拟检查等同于全部设备验证。

## 后续修改与回滚

主分支修改会触发测试和发布。回滚应用可恢复到已验证提交后重新推送；不要直接手改 Actions 产物。更改题目、选项映射或计分需评估版本兼容，正式研究应另行验证信效度。

## 本次已执行验收

- 10 项计分测试通过。
- 6 项记录、路由与生产构建测试通过。
- 浏览器通过：Production content-hashed modules load under CSP; no document links in product navigation
- 浏览器通过：Question URL, refresh restoration and browser back preserve the selected answer
- 浏览器通过：Complete 64-question submission and report refresh remain usable
- 浏览器通过：Mobile-friendly image preview, valid PNG download and Escape dismissal work
- 浏览器通过：Share omits result routes and answers
- 浏览器通过：Completed homepage opens saved report; example route survives refresh without overwriting answers
- 浏览器通过：All three core pages fit 320, 390, 768 and 1440px without horizontal overflow
- 浏览器通过：Second-tab edits and data clearing synchronize without resurrecting progress
- 浏览器通过：Insufficient answers guard report URL and preserve supplement navigation
- 浏览器通过：Disabled browser storage still allows answering with explicit save limitation
- 浏览器通过：No JavaScript errors or CSP console errors
