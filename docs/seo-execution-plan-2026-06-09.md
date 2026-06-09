# randomobject.co SEO 执行优化方案

数据来源：本地 GSC/GA4 脚本，报告目录：
`/Users/fanqienigehamigua/Documents/common/site-analytics-mvp/reports/site-analysis-2026-06-09/randomobject-co`

数据周期：

- GSC：2026-05-13 到 2026-06-08
- GA4：该周期内 15 天有自然流量数据

## 1. 当前判断

站点不是完全没有排名，而是处在早期可收割阶段。GSC 最近约 4 周有 20 clicks、532 impressions、3.76% CTR；核心页面已有 5-12 位排名，但没有 Top 3 页面。GA4 有 31 sessions、26 users，但 conversions 为 0，说明后续需要先补价值事件，否则只能判断流量，无法判断页面是否真正有用。

最近 7 天对比前 7 天：

- GSC clicks：6 -> 6，持平
- GSC impressions：182 -> 167，下降 8.24%
- GA4 sessions：13 -> 14，上升 7.69%
- GA4 conversions：0 -> 0

## 2. 页面优先级

### P1：`/random-animals-generator`

数据：6 clicks、210 impressions、CTR 2.86%、平均排名 11.4。

执行方向：

- 将 title、meta description、H1 从泛模板改成 `Random Animal Generator` 语义。
- 覆盖 `pick a random animal`、`random animal generator`、`animal prompts for drawing/games/classes`。
- 加强页面内文对 drawing、charades、ESL、classroom、storytelling 的使用场景覆盖。
- 从首页、kids、charades、drawing、ESL、storytelling 等页面持续加内链。

本次已落地：

- 新增分类页专用 SEO copy helper。
- 动物页英文 title/H1/description/工具文案已从模板文案升级为 `Random Animal Generator` 方向。
- 中文和日文动物页也同步获得独立标题与描述。

### P1：`/zh`

数据：4 clicks、124 impressions、CTR 3.23%、平均排名 5.3。

查询信号：

- `隨機物品產生器`
- `隨機物品`
- `random object 意思`

执行方向：

- 中文首页 title/meta 同时覆盖简体和繁体主词。
- FAQ 补解释型意图，承接 `random object 意思`。
- 页面正文自然出现 `随机物品` 与 `隨機物品`，不要堆词。

本次已落地：

- 中文首页 `seoTitle` 改为覆盖 `随机物品生成器 / 隨機物品產生器`。
- 中文 description 加入 `隨機物品`。
- FAQ 新增 `random object 是什么意思？`。
- FAQ 新增 `隨機物品產生器和随机物品生成器是同一个意思吗？`。

### P2：`/random-food-generator`

数据：3 clicks、67 impressions、CTR 4.48%、平均排名 10.8；GA4 平均参与时间偏低。

执行方向：

- 将页面主语从泛 `Food Random Generator` 调整为 `Random Food Generator`。
- 覆盖 `pick a random food`、`favorite food generator`、drawing/classroom/game/menu naming 场景。
- 检查首屏是否能快速传达“抽食物”的用途，减少模板感。

本次已落地：

- 食物分类页新增独立 title、metadata、H1、visual/bulk 文案。
- 中文和日文食物页同步补齐专用 copy。

### P2：`/random-kitchen-objects`

数据：1 click、28 impressions、CTR 3.57%、平均排名 6.9。

执行方向：

- 当前排名不错但量小，先做 title/meta 与首屏语义，不大改结构。
- 覆盖 `random kitchen`、`kitchen random`、`random kitchen objects`。
- 强调 kitchen tools、foods、utensils、home items。

本次已落地：

- 页面标题升级为 `Random Kitchen Objects Generator`。
- SEO title 升级为 `Random Kitchen Objects Generator for Games and Classes`。
- meta description 与 visual 文案加入 pick、kitchen tools、foods、utensils、scavenger hunts、ESL vocabulary。
- FAQ 新增单个 kitchen object 抽取问题。

## 3. GA4 价值事件

问题：所有站点 GA4 conversions 为 0。对 randomobject.co 来说，用户没有账号、支付或表单，应该把“生成”和“复制”定义成核心价值行为。

建议在 GA4 后台将以下事件设为 key event：

- `copy_result`
- `copy_bulk_list`
- `generate_click`
- `bulk_generate`

本次已落地：

- 视觉生成按钮发送 `generate_click`，同时保留旧的 `generate_visual`。
- 批量刷新按钮发送 `bulk_generate`，同时保留旧的 `refresh_bulk_list`。
- 批量复制事件 `copy_bulk_list` 改为 conversion 类别，并补充 `page_path`。
- 视觉卡片新增单个物品复制按钮，发送 `copy_result`。

## 4. 下一轮内容动作

上线后等待 GSC 重新抓取 7-14 天，再按以下顺序迭代：

1. 如果 `/random-animals-generator` 曝光继续增长但 CTR 低于 4%，继续测试 title/meta。
2. 如果 `/zh` 维持 4-8 位但 CTR 不增长，优先测试繁体主词在 title 前半段的位置。
3. 如果 `/random-food-generator` 排名停在 8-12 位，补更多 food examples、use cases 和 FAQ。
4. 如果 GA4 key events 开始有数据，按事件率而不是 sessions 决定下一批页面。
5. 把 analytics 引擎的 `repoPath` 指到本仓库，后续报告可直接映射源码与页面标题。

## 5. 验收指标

两周内观察：

- `/random-animals-generator`：平均排名从 11.4 推近 8-10，CTR 目标 4%+
- `/zh`：CTR 从 3.23% 提升到 5%+
- `/random-food-generator`：平均排名进入 Top 10
- GA4：key events 不再为 0，至少能区分生成和复制行为
- 报告质量：analytics 输出不再出现 `Untitled Page / unmapped`
