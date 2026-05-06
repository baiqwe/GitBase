import type { Locale } from '@/lib/i18n-config'

type IntentLandingContent = {
  introTitle: string
  introBody: string
  featureTitle: string
  featureLead: string
  features: Array<{ title: string; body: string }>
  categoryTitle: string
  categoryLead: string
  useCasesTitle: string
  useCases: string[]
  faqTitle: string
  faqs: Array<{ question: string; answer: string }>
}

type IntentPageCopy = {
  heroEyebrow: string
  title: string
  description: string
  visualTitle: string
  visualDescription: string
  bulkTitle: string
  bulkDescription: string
  seoTitle: string
  seoDescription: string
  landing: IntentLandingContent
}

export type IntentPageConfig = {
  slug:
    | 'random-object-to-draw'
    | 'random-objects-for-kids'
    | 'random-objects-for-charades'
    | 'random-objects-for-esl'
    | 'random-objects-for-storytelling'
    | 'random-objects-for-classroom'
    | 'random-objects-for-party-games'
    | 'random-things-to-describe'
    | 'random-objects-for-writing-prompts'
  categories: string[]
  defaultVisualCount: number
  i18n: Record<Locale, IntentPageCopy>
}

export const intentPages: IntentPageConfig[] = [
  {
    slug: 'random-object-to-draw',
    categories: ['animals', 'household', 'food', 'nature'],
    defaultVisualCount: 4,
    i18n: {
      en: {
        heroEyebrow: 'Drawing prompts',
        title: 'Random Object To Draw',
        description:
          'Generate visual object prompts that are easier to sketch, study, and turn into drawing warmups.',
        visualTitle: 'Get a fresh object drawing prompt',
        visualDescription:
          'This mode keeps the results visual and compact so you can grab a prompt and start drawing right away.',
        bulkTitle: 'Build a batch for sketch practice',
        bulkDescription:
          'Generate a longer drawing list when you need warmups for a class, challenge, or daily sketch routine.',
        seoTitle: 'Random Object To Draw Generator With Visual Cards',
        seoDescription:
          'Generate random things to draw with visual object cards, copyable lists, and focused prompts for sketch practice.',
        landing: {
          introTitle: 'A drawing-focused object generator should help you sketch faster, not slow you down.',
          introBody:
            'This page is tuned for people who specifically want random things to draw. The goal is to surface objects that are easy to visualize, easy to sketch, and flexible enough for warmups, classroom prompts, or longer illustration challenges. Keeping this intent separate from the homepage gives the page stronger topical relevance and a clearer use case for artists, students, and teachers.',
          featureTitle: 'What makes this page useful for drawing',
          featureLead: 'The page is designed around sketch-friendly object prompts, not generic noun clutter.',
          features: [
            {
              title: 'More drawable categories',
              body: 'Animals, food, household items, and nature prompts are easier to sketch than abstract or overly gimmicky objects.',
            },
            {
              title: 'Visual-first results',
              body: 'The cards keep the prompt readable at a glance so you can move from browsing to drawing without friction.',
            },
            {
              title: 'Bulk prompt support',
              body: 'If you need a whole sketch session plan, bulk mode lets you generate and copy a larger list instantly.',
            },
          ],
          categoryTitle: 'Best categories for drawing prompts',
          categoryLead:
            'These categories are the strongest fit for drawing because they produce recognizable silhouettes, textures, and scene ideas.',
          useCasesTitle: 'Common drawing use cases',
          useCases: [
            'Daily sketch warmups',
            'Classroom drawing prompts',
            'Inktober-style random challenges',
            'Character prop studies',
            'Still life brainstorming',
            'Storyboard object cues',
          ],
          faqTitle: 'Random object to draw FAQ',
          faqs: [
            {
              question: 'What is a random object to draw generator useful for?',
              answer:
                'It helps you find sketch prompts quickly when you need a warmup, a classroom activity, or a way to break creative block.',
            },
            {
              question: 'Why have a separate page for drawing prompts?',
              answer:
                'Because drawing intent is specific. A dedicated page can emphasize sketch-friendly categories and more visual presentation without competing with the broader homepage.',
            },
            {
              question: 'Can I generate multiple drawing prompts at once?',
              answer:
                'Yes. You can enter a custom quantity and create a longer list for a full practice session or a class exercise.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '绘画提示',
        title: '随机绘画物品生成器',
        description:
          '生成更适合拿来画的物品提示，帮助你快速进入素描、速写和创作热身状态。',
        visualTitle: '马上抽一个可开画的物品',
        visualDescription:
          '这里的结果更偏向好画、好观察、好展开的对象，方便你立刻开始画。',
        bulkTitle: '批量生成一组绘画练习题',
        bulkDescription:
          '如果你想做整组速写、课堂练习或每日挑战，可以一次生成更长的绘画清单。',
        seoTitle: '随机绘画物品生成器 - 适合速写和创作热身',
        seoDescription:
          '生成适合拿来画的随机物品，支持视觉卡片和批量清单，适合速写、课堂和创作练习。',
        landing: {
          introTitle: '真正适合绘画的随机物品页，应该让你更快开始画，而不是先筛结果。',
          introBody:
            '这个页面专门面向“想找随机东西来画”的用户。相比混合型首页，这里更强调动物、食物、家居和自然物体这类更容易观察轮廓、质感和结构的题材。这样做不仅更贴近搜索意图，也更适合画师、学生和老师直接拿来练习。',
          featureTitle: '这个页面为什么更适合绘画',
          featureLead: '重点不是词越杂越好，而是对象要更容易画、更容易延展。',
          features: [
            {
              title: '更偏可画对象',
              body: '动物、食物、家居和自然物体更容易形成轮廓、质感和构图线索。',
            },
            {
              title: '结果更直观',
              body: '视觉卡片能让你更快判断这个对象适不适合拿来做速写或创作。',
            },
            {
              title: '适合整组练习',
              body: '批量模式可以直接生成一组练习题，用于课堂、挑战或每日打卡。',
            },
          ],
          categoryTitle: '更适合画画的分类',
          categoryLead:
            '这些分类更容易给出清晰的外形、表面细节和场景感，是绘画练习里最常用的对象池。',
          useCasesTitle: '常见使用场景',
          useCases: [
            '每日速写热身',
            '课堂绘画提示',
            '挑战赛题库',
            '角色道具练习',
            '静物灵感发散',
            '分镜物件提示',
          ],
          faqTitle: '绘画物品页常见问题',
          faqs: [
            {
              question: '随机绘画物品生成器适合做什么？',
              answer: '适合速写热身、打破创作卡顿、课堂出题和给自己找一个马上能画的对象。',
            },
            {
              question: '为什么要单独做一个绘画页？',
              answer:
                '因为“想找东西来画”是非常明确的需求。独立页面可以把更适合画的对象和更直观的展示方式集中起来。',
            },
            {
              question: '可以一次生成很多个绘画对象吗？',
              answer: '可以。你可以输入数量，批量生成一组练习对象，方便做整套训练。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: '描画プロンプト',
        title: '描くためのランダムオブジェクト',
        description:
          'スケッチやお絵描きのウォームアップに使いやすいモノを、視覚的にすばやく引けます。',
        visualTitle: '今すぐ描けるモノを引く',
        visualDescription:
          '描きやすさを重視した見せ方で、迷う時間を減らしてすぐに手を動かせます。',
        bulkTitle: 'スケッチ練習用にまとめて生成',
        bulkDescription:
          '授業、練習会、毎日のドローイング習慣向けに、複数のお題をまとめて作れます。',
        seoTitle: '描くためのランダムオブジェクトジェネレーター',
        seoDescription:
          '描きやすいランダムオブジェクトを視覚カードと一覧で生成。スケッチ練習や授業のお題に便利です。',
        landing: {
          introTitle: '描画向けページは、使う前に考え込ませないことが大切です。',
          introBody:
            'このページは「描くものを探したい」人向けに調整されています。動物、食べ物、日用品、自然物など、形や質感を取りやすい対象を中心にしているため、トップページよりもお絵描き用途に向いています。意図を分けることで、検索にも実用にも強い着地先になります。',
          featureTitle: '描画向けに役立つポイント',
          featureLead: '単語の数ではなく、描きやすさと視認性を重視しています。',
          features: [
            {
              title: '描きやすいカテゴリ中心',
              body: '動物、食べ物、日用品、自然物は輪郭や質感を取りやすく、練習向きです。',
            },
            {
              title: '視覚カードで判断しやすい',
              body: 'カード表示なので、実際に描きたいかどうかを一目で決めやすくなります。',
            },
            {
              title: 'まとめて練習にも対応',
              body: '一括生成で、そのままドローイング課題セットを作れます。',
            },
          ],
          categoryTitle: '描くのに向いたカテゴリ',
          categoryLead:
            'シルエット、表面、場面づくりのヒントを得やすいカテゴリを優先して並べています。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            '毎日のスケッチ練習',
            '授業のお題',
            'チャレンジ課題',
            '小道具の研究',
            '静物の発想出し',
            '絵コンテの物体ヒント',
          ],
          faqTitle: '描画ページ FAQ',
          faqs: [
            {
              question: 'このページは何に使えますか？',
              answer: 'スケッチのウォームアップ、授業のお題、創作ブロックの解消などに使えます。',
            },
            {
              question: 'なぜ描画専用ページが必要ですか？',
              answer:
                '描く対象を探す意図は明確だからです。描きやすいカテゴリと視覚的な見せ方を集中させることで使いやすくなります。',
            },
            {
              question: '複数のお題を一度に作れますか？',
              answer: 'はい。数量を入力して、練習用のリストをまとめて作れます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-kids',
    categories: ['animals', 'household', 'food', 'funny'],
    defaultVisualCount: 4,
    i18n: {
      en: {
        heroEyebrow: 'Kids prompts',
        title: 'Random Objects For Kids',
        description:
          'Generate playful, classroom-friendly object prompts for guessing games, drawing, and speaking activities.',
        visualTitle: 'Kid-friendly random object cards',
        visualDescription:
          'These prompts are better suited to classrooms, family activities, and quick games with younger learners.',
        bulkTitle: 'Build a kids activity list',
        bulkDescription:
          'Create a longer object list for worksheets, speaking rounds, charades, or group icebreakers.',
        seoTitle: 'Random Objects For Kids Generator',
        seoDescription:
          'Generate kid-friendly random object prompts for games, classroom warmups, speaking practice, and drawing activities.',
        landing: {
          introTitle: 'A kids-oriented random object page should feel simple, visual, and ready for activities.',
          introBody:
            'This page is designed for teachers, parents, and activity leaders who need safe, familiar object prompts for children. By focusing on friendly categories and clear visual cards, it becomes easier to run guessing games, drawing rounds, and speaking warmups without first filtering out odd results.',
          featureTitle: 'Why this page works better for kids',
          featureLead: 'The categories and presentation are tuned for fast comprehension and playful use.',
          features: [
            {
              title: 'Familiar object pool',
              body: 'The page leans toward objects and animals that children can recognize quickly and talk about easily.',
            },
            {
              title: 'Visual support',
              body: 'Card-based results make it easier for younger learners to respond before they lose focus.',
            },
            {
              title: 'Useful for groups',
              body: 'Bulk generation helps teachers and facilitators prepare object lists for multiple rounds or stations.',
            },
          ],
          categoryTitle: 'Best categories for kids',
          categoryLead:
            'These categories produce safer, simpler, more game-friendly prompts for younger learners and family activities.',
          useCasesTitle: 'Popular kid-friendly uses',
          useCases: [
            'Classroom warmups',
            'Kids charades',
            'Speaking practice',
            'Family game night',
            'Simple drawing prompts',
            'Vocabulary review',
          ],
          faqTitle: 'Kids object generator FAQ',
          faqs: [
            {
              question: 'What is this page best for?',
              answer:
                'It works well for teachers, parents, and group leaders who need quick object prompts for children.',
            },
            {
              question: 'Why not just use the homepage?',
              answer:
                'A dedicated page for kids lets us emphasize simpler, friendlier categories and more suitable use cases.',
            },
            {
              question: 'Can I make a larger list for classroom activities?',
              answer:
                'Yes. You can generate a longer batch and copy it into a worksheet, slide deck, or activity sheet.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '儿童活动',
        title: '适合孩子的随机物品',
        description:
          '生成更适合课堂、亲子和游戏场景的随机物品提示，方便孩子快速理解和参与。',
        visualTitle: '面向孩子的随机物品卡片',
        visualDescription:
          '这里的结果更偏简单、熟悉、容易表达，适合课堂热身和亲子活动。',
        bulkTitle: '生成一组儿童活动清单',
        bulkDescription:
          '需要做课堂题卡、口语练习或多人游戏时，可以一次生成更长的物品列表。',
        seoTitle: '适合孩子的随机物品生成器',
        seoDescription:
          '生成适合孩子的随机物品提示，适用于课堂热身、你演我猜、口语练习和简单绘画活动。',
        landing: {
          introTitle: '面向孩子的随机物品页，应该简单、直观，而且拿来就能用。',
          introBody:
            '这个页面主要服务于老师、家长和活动组织者，他们需要的是熟悉、安全、容易理解的物品提示，而不是太奇怪或太发散的结果。把这类需求独立出来，可以让页面更适合课堂、亲子活动和轻游戏场景。',
          featureTitle: '为什么孩子场景更适合这个页面',
          featureLead: '重点是让孩子看得懂、说得出、玩得起来。',
          features: [
            {
              title: '更熟悉的对象池',
              body: '优先展示孩子更容易识别和表达的动物、食物、日常物品和趣味对象。',
            },
            {
              title: '视觉反馈更直接',
              body: '卡片式展示能帮助孩子更快理解题目，不容易在读文字时掉线。',
            },
            {
              title: '适合群体活动',
              body: '批量模式可以直接生成一整组题目，方便课堂或家庭活动连续使用。',
            },
          ],
          categoryTitle: '更适合孩子的分类',
          categoryLead:
            '这些分类更简单、更有趣，也更容易用于课堂热身、游戏和词汇表达练习。',
          useCasesTitle: '常见儿童使用场景',
          useCases: [
            '课堂热身',
            '儿童版你演我猜',
            '口语表达练习',
            '家庭游戏夜',
            '简单绘画提示',
            '词汇复习',
          ],
          faqTitle: '儿童物品页常见问题',
          faqs: [
            {
              question: '这个页面最适合拿来做什么？',
              answer: '最适合课堂活动、亲子游戏、口语练习和帮助孩子快速进入状态的小任务。',
            },
            {
              question: '为什么不直接用首页？',
              answer:
                '因为儿童场景更适合简单、熟悉的对象。独立页面可以把更友好的分类和玩法集中起来。',
            },
            {
              question: '可以一次生成很多题目吗？',
              answer: '可以。你可以批量生成并复制，用来做整套课堂活动或游戏轮次。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: '子ども向け',
        title: '子ども向けランダムオブジェクト',
        description:
          '授業、家族ゲーム、会話練習に使いやすい、子ども向けのランダムなお題を生成します。',
        visualTitle: '子ども向けオブジェクトカード',
        visualDescription:
          'より分かりやすく、親しみやすい結果を中心に表示し、活動にすぐ使える構成にしています。',
        bulkTitle: '子ども向けお題リストを作る',
        bulkDescription:
          '授業、ジェスチャーゲーム、会話練習用に複数のお題をまとめて作れます。',
        seoTitle: '子ども向けランダムオブジェクトジェネレーター',
        seoDescription:
          '子ども向けのランダムオブジェクトを生成。授業の導入、会話練習、お絵描き、ゲームに便利です。',
        landing: {
          introTitle: '子ども向けページは、わかりやすさと使いやすさが最優先です。',
          introBody:
            'このページは先生、保護者、アクティビティ担当者向けに、子どもが理解しやすいモノを中心にまとめています。親しみやすいカテゴリに絞ることで、授業、家族遊び、会話練習にすぐ使える実用ページになります。',
          featureTitle: '子ども向けに向いている理由',
          featureLead: '見てすぐ伝わり、遊びや練習に流し込みやすい構成です。',
          features: [
            {
              title: 'わかりやすい対象',
              body: '動物、食べ物、日用品、楽しい小物など、子どもが反応しやすい対象を中心にしています。',
            },
            {
              title: 'カード表示で理解しやすい',
              body: '視覚的に見せることで、文字だけよりも活動への入りがスムーズになります。',
            },
            {
              title: '複数ラウンドにも便利',
              body: '一括生成で、授業やゲームのためのお題セットをまとめて準備できます。',
            },
          ],
          categoryTitle: '子ども向けに使いやすいカテゴリ',
          categoryLead:
            '理解しやすく、遊びや学習につなげやすいカテゴリを優先して並べています。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            '授業のウォームアップ',
            '子ども向けジェスチャーゲーム',
            '会話練習',
            '家族ゲーム',
            '簡単なお絵描き',
            '語彙の復習',
          ],
          faqTitle: '子ども向けページ FAQ',
          faqs: [
            {
              question: 'このページはどんな場面で使えますか？',
              answer: '授業、家庭での遊び、会話練習、簡単なお絵描き活動などで使いやすいです。',
            },
            {
              question: 'なぜ子ども向けの専用ページがあるのですか？',
              answer:
                '子ども向けには、より親しみやすく分かりやすい対象を優先した方が使いやすいからです。',
            },
            {
              question: '複数のお題を一気に作れますか？',
              answer: 'はい。活動や授業用にまとめて生成してコピーできます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-charades',
    categories: ['animals', 'household', 'food', 'funny'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Charades prompts',
        title: 'Random Objects For Charades',
        description:
          'Generate playful object prompts that are easy to act out, guess, and use in party games or classroom rounds.',
        visualTitle: 'Charades-ready random object cards',
        visualDescription:
          'This page emphasizes recognizable, game-friendly prompts that work well for fast acting and guessing.',
        bulkTitle: 'Build a charades prompt list',
        bulkDescription:
          'Generate a larger batch when you need multiple rounds for a party, family night, or speaking activity.',
        seoTitle: 'Random Objects For Charades Generator',
        seoDescription:
          'Generate random objects for charades with visual cards and copyable lists for party games, classrooms, and team icebreakers.',
        landing: {
          introTitle: 'A charades page should surface objects people can act out instantly.',
          introBody:
            'Users looking for charades prompts want recognizable objects with strong visual cues and simple actions. That intent is different from broad random object discovery, so this page narrows the pool to categories that work better in games. It gives you faster rounds, cleaner prompts, and a more search-relevant landing page for party, classroom, and team-building use.',
          featureTitle: 'What makes a good charades prompt page',
          featureLead: 'The best prompts are easy to imagine, easy to mime, and easy to guess.',
          features: [
            {
              title: 'Recognizable objects first',
              body: 'Animals, food, household items, and funny objects are easier to act out than vague nouns or abstract concepts.',
            },
            {
              title: 'Faster game flow',
              body: 'Visual cards help players scan prompts quickly before the round starts, which keeps the game moving.',
            },
            {
              title: 'Works for groups',
              body: 'Bulk generation makes it easy to prepare multiple rounds for parties, classes, or facilitation sessions.',
            },
          ],
          categoryTitle: 'Best charades categories',
          categoryLead:
            'These categories produce prompts that are more expressive, more physical, and easier to guess in live group settings.',
          useCasesTitle: 'Popular charades use cases',
          useCases: [
            'Party charades',
            'Family game night',
            'Classroom warmups',
            'ESL speaking games',
            'Team icebreakers',
            'Kids guessing rounds',
          ],
          faqTitle: 'Charades generator FAQ',
          faqs: [
            {
              question: 'Why use a dedicated random objects for charades page?',
              answer:
                'Because charades works best with objects people can recognize and mime quickly. A focused page creates stronger prompts than a fully generic object pool.',
            },
            {
              question: 'Can I generate enough prompts for multiple rounds?',
              answer:
                'Yes. You can enter your own quantity and make a longer list for a full party, class, or workshop session.',
            },
            {
              question: 'Is this useful for classrooms too?',
              answer:
                'Definitely. The prompt set works well for vocabulary games, speaking warmups, and short movement-based activities.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '你演我猜',
        title: '适合你演我猜的随机物品',
        description:
          '生成更容易表演、更容易被猜到的物品提示，适合聚会、课堂和破冰互动。',
        visualTitle: '适合你演我猜的物品卡片',
        visualDescription:
          '这里更强调容易演、容易猜、容易带动气氛的对象，而不是泛泛的随机名词。',
        bulkTitle: '生成一整组你演我猜题目',
        bulkDescription:
          '如果你要跑多轮游戏或课堂活动，可以一次批量生成并复制整组提示。',
        seoTitle: '适合你演我猜的随机物品生成器',
        seoDescription:
          '生成适合你演我猜的随机物品，支持视觉卡片和批量清单，适用于聚会、课堂和团队破冰。',
        landing: {
          introTitle: '你演我猜页面的重点，不是词越多越好，而是对象要越容易演越好。',
          introBody:
            '想找你演我猜题目的人，真正需要的是“容易理解、容易表演、容易被猜到”的对象，而不是抽象名词或太奇怪的概念。所以这个页面会更偏向动物、日用品、食物和有点搞笑感的小物件，让游戏更顺，也更适合聚会、课堂和团队活动。',
          featureTitle: '为什么这个页面更适合游戏场景',
          featureLead: '重点是提高可表演性，而不是把所有词都混在一起。',
          features: [
            {
              title: '更容易猜',
              body: '优先使用更常见、更直观的物品和角色型对象，减少冷门词带来的卡顿。',
            },
            {
              title: '更容易带节奏',
              body: '视觉卡片能帮助出题前快速扫一眼，让游戏节奏更快更顺。',
            },
            {
              title: '适合多人轮次',
              body: '批量模式可以直接生成一整组题目，方便连续跑多轮。'
            }
          ],
          categoryTitle: '更适合你演我猜的分类',
          categoryLead:
            '这些分类里的对象动作感更强、辨识度更高，更适合现场互动和猜词游戏。',
          useCasesTitle: '常见使用场景',
          useCases: [
            '聚会游戏',
            '家庭游戏夜',
            '课堂热身',
            '英语口语游戏',
            '团队破冰',
            '儿童猜词活动',
          ],
          faqTitle: '你演我猜页常见问题',
          faqs: [
            {
              question: '为什么要单独做一个你演我猜页面？',
              answer: '因为游戏场景更适合可表演、可联想的对象。独立页面能给出更适合现场互动的结果。',
            },
            {
              question: '可以生成很多轮题目吗？',
              answer: '可以。你可以输入数量，一次性生成整组题目，用于派对、课堂或工作坊活动。',
            },
            {
              question: '课堂里也适合用吗？',
              answer: '很适合。它可以拿来做词汇热身、英语口语练习和短时间活动。'
            }
          ],
        },
      },
      ja: {
        heroEyebrow: 'ジェスチャーゲーム',
        title: 'ジェスチャー向けランダムオブジェクト',
        description:
          '演じやすく、当てやすいお題を生成。パーティーや授業のゲームに使いやすい構成です。',
        visualTitle: 'ジェスチャー向けオブジェクトカード',
        visualDescription:
          '見ただけで動きに変えやすい対象を中心に、ゲーム向けの結果を出します。',
        bulkTitle: 'ジェスチャー用お題リストを作る',
        bulkDescription:
          'パーティーや授業で複数ラウンド回したいときに、まとめてお題を用意できます。',
        seoTitle: 'ジェスチャー向けランダムオブジェクトジェネレーター',
        seoDescription:
          'ジェスチャーゲーム向けのランダムオブジェクトを生成。パーティー、授業、アイスブレイクに便利です。',
        landing: {
          introTitle: 'ジェスチャー用ページは、すぐ演じられる対象を出せることが大切です。',
          introBody:
            'ジェスチャーゲームで使うお題は、分かりやすく、動きにしやすく、見た人が当てやすいことが重要です。このページはその意図に合わせて、動物、日用品、食べ物、少しユーモラスな物体を中心に構成しています。トップページとは違う使い道を明確にした専用ページです。',
          featureTitle: 'ジェスチャー向けに向いている理由',
          featureLead: '演じやすさと分かりやすさを優先したお題構成です。',
          features: [
            {
              title: '分かりやすい対象が多い',
              body: '身近でイメージしやすい対象を優先することで、ゲームのテンポを落としにくくなります。',
            },
            {
              title: 'カード表示で準備しやすい',
              body: '視覚カードで素早くお題を確認できるので、進行がスムーズになります。',
            },
            {
              title: '複数ラウンドにも対応',
              body: '一括生成を使えば、授業やパーティー向けにまとめてお題を作れます。',
            },
          ],
          categoryTitle: 'ジェスチャーに向いたカテゴリ',
          categoryLead:
            '表現しやすく、見た人が想像しやすいカテゴリを優先して使えます。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            'パーティーゲーム',
            '家族でのゲーム',
            '授業の導入',
            '英会話ゲーム',
            'チームのアイスブレイク',
            '子ども向け当てっこ',
          ],
          faqTitle: 'ジェスチャーページ FAQ',
          faqs: [
            {
              question: 'なぜジェスチャー専用ページがあるのですか？',
              answer:
                'ジェスチャーでは、すぐに演じやすい対象の方が使いやすいからです。専用ページにするとゲーム向けの結果を出しやすくなります。',
            },
            {
              question: '何ラウンド分でも作れますか？',
              answer:
                'はい。数量を入れて、一度に複数ラウンド分のリストを作成できます。',
            },
            {
              question: '授業でも使えますか？',
              answer:
                '使えます。語彙ゲーム、会話のウォームアップ、短いアクティビティに向いています。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-esl',
    categories: ['animals', 'household', 'food', 'nature'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'ESL prompts',
        title: 'Random Objects For ESL',
        description:
          'Generate easy object prompts for speaking games, vocabulary review, and classroom warmups in ESL lessons.',
        visualTitle: 'ESL-friendly object cards',
        visualDescription:
          'This page focuses on concrete, teachable objects that are easier to describe, guess, and use in short speaking tasks.',
        bulkTitle: 'Build an ESL prompt list',
        bulkDescription:
          'Generate a longer set for worksheets, pair work, pronunciation drills, or quick vocabulary rounds.',
        seoTitle: 'Random Objects For ESL Generator',
        seoDescription:
          'Generate random objects for ESL lessons, speaking games, vocabulary review, and classroom warmups with visual cards and copyable lists.',
        landing: {
          introTitle: 'An ESL object page should surface clear, teachable nouns instead of random noise.',
          introBody:
            'Teachers and tutors using random objects in ESL classes usually need simple, concrete prompts that students can describe quickly. This page narrows the object pool to categories that work well in vocabulary lessons and speaking activities. It keeps the results more usable for learners and makes the page more focused for search engines.',
          featureTitle: 'Why this page works for ESL',
          featureLead: 'The best ESL prompts are concrete, familiar, and easy to turn into speaking tasks.',
          features: [
            {
              title: 'Concrete object choices',
              body: 'Animals, food, nature, and household items are easier for learners to describe than abstract concepts or novelty prompts.',
            },
            {
              title: 'Fast visual comprehension',
              body: 'Image-based cards help learners understand the prompt faster and lower the barrier to participation.',
            },
            {
              title: 'Useful for pair and group work',
              body: 'Bulk mode makes it easy to prepare object sets for guessing games, pair speaking rounds, or worksheet activities.',
            },
          ],
          categoryTitle: 'Best categories for ESL',
          categoryLead:
            'These categories produce nouns that are simple enough for vocabulary practice while still being varied enough for speaking games.',
          useCasesTitle: 'Popular ESL use cases',
          useCases: [
            'Vocabulary review',
            'Speaking warmups',
            'Guessing games',
            'Pair discussion prompts',
            'Pronunciation drills',
            'Worksheet creation',
          ],
          faqTitle: 'ESL object generator FAQ',
          faqs: [
            {
              question: 'How can I use random objects in ESL lessons?',
              answer:
                'They work well for vocabulary practice, speaking prompts, guessing games, and short warmup activities where learners need concrete nouns.',
            },
            {
              question: 'Why have a dedicated ESL page instead of the main generator?',
              answer:
                'A focused ESL page can avoid overly weird prompts and emphasize objects that are easier to teach, describe, and reuse in class.',
            },
            {
              question: 'Can I make a list for a worksheet or class game?',
              answer:
                'Yes. You can generate multiple objects at once and copy the list into your lesson plan or worksheet.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: 'ESL 教学',
        title: '适合 ESL 的随机物品',
        description:
          '生成更适合英语课堂的物品提示，方便做词汇练习、口语热身和猜词游戏。',
        visualTitle: '适合 ESL 的物品卡片',
        visualDescription:
          '这里优先展示更具体、更容易描述的对象，适合初中级英语学习场景。',
        bulkTitle: '生成一组 ESL 教学题目',
        bulkDescription:
          '需要做课堂题卡、练习纸或分组游戏时，可以一次性生成更长的清单。',
        seoTitle: '适合 ESL 的随机物品生成器',
        seoDescription:
          '生成适合 ESL 课堂的随机物品，适用于词汇练习、口语热身、猜词活动和练习纸制作。',
        landing: {
          introTitle: 'ESL 场景下真正有用的物品页，应该先保证对象具体、好讲、好用。',
          introBody:
            '英语老师和学习者在使用随机物品时，最需要的是具体名词，而不是太抽象或太奇怪的结果。所以这个页面把对象集中在动物、食物、自然和日用品上，让它更适合拿来做词汇复习、看图说话、配对活动和口语热身。',
          featureTitle: '为什么这个页面更适合 ESL',
          featureLead: '重点不是随机，而是教学可用性更高。',
          features: [
            {
              title: '对象更具体',
              body: '优先使用更容易讲解、更容易被学生描述的物品和生物类名词。',
            },
            {
              title: '看图更容易进入状态',
              body: '图片卡片可以降低理解成本，让学生更快参与到口语或猜词活动里。',
            },
            {
              title: '适合课堂成组使用',
              body: '批量模式方便老师一次性准备多组对象，用于练习纸、配对活动或游戏。'
            }
          ],
          categoryTitle: '更适合 ESL 的分类',
          categoryLead:
            '这些分类的名词辨识度更高、使用频率更高，也更适合课堂里的描述和互动练习。',
          useCasesTitle: '常见 ESL 使用场景',
          useCases: [
            '词汇复习',
            '口语热身',
            '猜词游戏',
            '双人对话题',
            '发音练习',
            '练习纸制作',
          ],
          faqTitle: 'ESL 页面常见问题',
          faqs: [
            {
              question: '随机物品可以怎么用在 ESL 课堂里？',
              answer: '可以用来做词汇复习、描述练习、猜词游戏、口语热身和练习纸出题。',
            },
            {
              question: '为什么要单独做一个 ESL 页面？',
              answer:
                '因为 ESL 更需要可教学、可描述的具体名词。独立页面可以减少不适合课堂的结果。',
            },
            {
              question: '可以批量生成课堂用清单吗？',
              answer: '可以。你可以一次生成多个对象，并直接复制到课件或练习纸里。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: 'ESL 学習',
        title: 'ESL向けランダムオブジェクト',
        description:
          '語彙練習、スピーキング、ウォームアップに使いやすいオブジェクトをランダム生成します。',
        visualTitle: 'ESL向けオブジェクトカード',
        visualDescription:
          '説明しやすく、授業に使いやすい対象を中心に表示する構成です。',
        bulkTitle: 'ESL用お題リストを作る',
        bulkDescription:
          'ワークシートや会話ゲーム、授業の小テスト用に複数のお題をまとめて準備できます。',
        seoTitle: 'ESL向けランダムオブジェクトジェネレーター',
        seoDescription:
          'ESL授業向けのランダムオブジェクトを生成。語彙練習、会話活動、ウォームアップに便利です。',
        landing: {
          introTitle: 'ESL向けページでは、まず教えやすい名詞を出せることが重要です。',
          introBody:
            'ESL授業で使うランダムオブジェクトは、学習者がすぐ理解できる具体的な名詞であることが大切です。このページは動物、食べ物、自然、日用品を中心にしているため、語彙練習やスピーキング活動でそのまま使いやすくなっています。',
          featureTitle: 'ESLで使いやすい理由',
          featureLead: '授業で再利用しやすい具体名詞を優先しています。',
          features: [
            {
              title: '教えやすい対象',
              body: '抽象語よりも説明しやすい具体物を優先しているため、授業で扱いやすいです。',
            },
            {
              title: '視覚カードで理解しやすい',
              body: '画像があることで、学習者が意味を早くつかみやすくなります。',
            },
            {
              title: '一括生成で教材化しやすい',
              body: 'まとめて生成して、ワークシートやゲーム用リストに流用できます。',
            },
          ],
          categoryTitle: 'ESL向けに使いやすいカテゴリ',
          categoryLead:
            '頻出で説明しやすい名詞が出やすいカテゴリを優先しています。',
          useCasesTitle: 'よくあるESLでの使い方',
          useCases: [
            '語彙練習',
            'スピーキング導入',
            '当てっこゲーム',
            'ペア会話',
            '発音練習',
            '教材作成',
          ],
          faqTitle: 'ESLページ FAQ',
          faqs: [
            {
              question: 'ESL授業でどう使えますか？',
              answer:
                '語彙確認、会話の導入、当てっこゲーム、短い説明練習などに使えます。',
            },
            {
              question: 'なぜESL専用ページが必要ですか？',
              answer:
                '授業向けには、より具体的で説明しやすい対象を優先した方が使いやすいからです。',
            },
            {
              question: '授業用にまとめて生成できますか？',
              answer:
                'はい。複数のお題を一度に作って教材に流用できます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-storytelling',
    categories: ['animals', 'household', 'food', 'nature', 'funny'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Story prompts',
        title: 'Random Objects For Storytelling',
        description:
          'Generate object prompts that can kick off scenes, character props, and story ideas without overthinking.',
        visualTitle: 'Story-friendly object cards',
        visualDescription:
          'Use these cards when you want an object that can anchor a scene, clue, conflict, or visual hook in a story.',
        bulkTitle: 'Build a storytelling object list',
        bulkDescription:
          'Generate a larger set for writing exercises, prompt jars, improv scenes, or classroom story rounds.',
        seoTitle: 'Random Objects For Storytelling Generator',
        seoDescription:
          'Generate random objects for storytelling, writing prompts, improv scenes, and creative exercises with visual cards and bulk lists.',
        landing: {
          introTitle: 'Storytelling prompts work better when the object suggests a scene, not just a noun.',
          introBody:
            'Writers and facilitators often use random objects to unlock scenes, characters, or small story tensions. This page is built around that use case. By combining everyday objects, animals, nature items, and playful oddities, it creates a better object pool for storytelling than a broad utility homepage alone.',
          featureTitle: 'Why this page helps storytelling',
          featureLead: 'Objects become more useful when they feel like story anchors instead of random filler.',
          features: [
            {
              title: 'Scene-building object pool',
              body: 'The mix of categories is broad enough for variety but focused enough to keep results concrete and usable in stories.',
            },
            {
              title: 'Visual sparks for writers',
              body: 'Card-based prompts make it easier to imagine how an object looks, where it appears, and who might interact with it.',
            },
            {
              title: 'Good for workshops and exercises',
              body: 'Bulk generation is ideal for writing classes, improv rounds, and prompt sets where every participant needs a different object.',
            },
          ],
          categoryTitle: 'Useful object categories for storytelling',
          categoryLead:
            'These categories give you a mix of familiar objects, strong visuals, and a little oddity to keep scenes interesting.',
          useCasesTitle: 'Popular storytelling use cases',
          useCases: [
            'Creative writing warmups',
            'Improv scene prompts',
            'Character prop ideas',
            'Story circle activities',
            'Prompt jar creation',
            'Classroom writing rounds',
          ],
          faqTitle: 'Storytelling object generator FAQ',
          faqs: [
            {
              question: 'How do random objects help storytelling?',
              answer:
                'A single object can trigger a setting, a clue, a memory, or a character action. Random prompts help break blank-page paralysis.',
            },
            {
              question: 'Why have a storytelling-specific page?',
              answer:
                'Because storytelling intent is different from party games or generic browsing. This page is tuned for scene-worthy, reusable prompts.',
            },
            {
              question: 'Can I generate a full writing exercise list?',
              answer:
                'Yes. You can create a larger batch and copy it for classroom prompts, writing circles, or workshop rounds.',
            },
          ],
        },
      },
      zh: {
        heroEyebrow: '故事灵感',
        title: '适合讲故事的随机物品',
        description:
          '生成更适合做故事线索、场景道具和创作提示的随机物品，帮你更快进入写作状态。',
        visualTitle: '适合故事创作的物品卡片',
        visualDescription:
          '这些对象更容易成为场景、线索、冲突或人物道具，而不只是一个普通名词。',
        bulkTitle: '生成一组讲故事用物品清单',
        bulkDescription:
          '适合写作练习、课堂活动、即兴表演和故事接龙时批量使用。',
        seoTitle: '适合讲故事的随机物品生成器',
        seoDescription:
          '生成适合讲故事和写作练习的随机物品，支持视觉卡片和批量列表，适合课堂、工作坊和创作热身。',
        landing: {
          introTitle: '好的故事提示，不只是给你一个词，而是给你一个能长出场景的对象。',
          introBody:
            '写作者和活动组织者用随机物品时，往往不是想“随机一下”，而是想找到一个能引出角色、场景、回忆或冲突的具体对象。所以这个页面的对象池会兼顾日常物品、自然物、动物和少量有趣元素，让它更适合拿来做写作热身、即兴创作和故事活动。',
          featureTitle: '为什么这个页面更适合讲故事',
          featureLead: '重点是让物品更像“剧情锚点”，而不是纯填空。',
          features: [
            {
              title: '更有场景感的对象池',
              body: '这些分类既足够具体，又能带出更多画面和人物动作，不容易卡死在表面词义上。',
            },
            {
              title: '视觉提示更快触发联想',
              body: '卡片模式能帮助你立刻脑补这个物品会出现在哪里、谁会碰到它、它意味着什么。',
            },
            {
              title: '适合多人创作活动',
              body: '批量模式适合给课堂、工作坊、故事接龙或即兴表演准备成组提示。',
            },
          ],
          categoryTitle: '更适合故事创作的分类',
          categoryLead:
            '这些分类能在“熟悉感”和“新鲜感”之间保持平衡，更容易延展成场景、道具和小冲突。',
          useCasesTitle: '常见故事创作场景',
          useCases: [
            '写作热身',
            '即兴表演提示',
            '角色道具灵感',
            '故事接龙',
            '提示词罐子制作',
            '课堂写作轮次',
          ],
          faqTitle: '故事页常见问题',
          faqs: [
            {
              question: '随机物品为什么适合讲故事？',
              answer:
                '一个具体物品常常能引出一个场景、一段记忆、一个线索或一个人物动作，能帮助你摆脱空白页焦虑。',
            },
            {
              question: '为什么还要单独做故事页？',
              answer:
                '因为故事创作的意图和聚会游戏不一样。这个页面会更强调能承载场景和剧情的对象。',
            },
            {
              question: '可以一次生成整组写作题目吗？',
              answer:
                '可以。你可以批量生成并复制，用于课堂、工作坊或自己的写作练习。',
            },
          ],
        },
      },
      ja: {
        heroEyebrow: '物語の発想',
        title: '物語向けランダムオブジェクト',
        description:
          'シーン、手がかり、小道具、キャラクターの行動につながるようなオブジェクトを生成します。',
        visualTitle: '物語に使いやすいオブジェクトカード',
        visualDescription:
          'ただの名詞ではなく、場面や出来事を連想しやすい対象を中心に使えます。',
        bulkTitle: '物語用オブジェクトリストを作る',
        bulkDescription:
          '創作練習、ワークショップ、即興シーン、授業のストーリー活動用にまとめて生成できます。',
        seoTitle: '物語向けランダムオブジェクトジェネレーター',
        seoDescription:
          '物語づくりや創作練習向けのランダムオブジェクトを生成。視覚カードと一覧で使いやすく整理できます。',
        landing: {
          introTitle: '物語向けページでは、オブジェクトが場面の入口になることが大切です。',
          introBody:
            '書き手や進行役がランダムオブジェクトを使うとき、本当に欲しいのは“ただの単語”ではなく、場面や行動につながる具体的なきっかけです。このページは日用品、自然物、動物、少しユーモラスな対象を組み合わせ、物語の発想に向いたオブジェクトプールを作っています。',
          featureTitle: '物語向けに役立つ理由',
          featureLead: 'オブジェクトを、場面や展開の起点として使いやすくしています。',
          features: [
            {
              title: '場面につながりやすい対象',
              body: '具体的な見た目や使い道が想像しやすいので、シーンや登場人物の行動を広げやすくなります。',
            },
            {
              title: '視覚から発想しやすい',
              body: 'カード表示で見た瞬間に、どこで誰が使うかを考えやすくなります。',
            },
            {
              title: '創作ワークにも便利',
              body: '一括生成で、授業やワークショップ、即興シーン用のお題セットをまとめて用意できます。',
            },
          ],
          categoryTitle: '物語向けに使いやすいカテゴリ',
          categoryLead:
            '身近さと意外性のバランスがよく、シーンや小道具の発想に広げやすいカテゴリです。',
          useCasesTitle: 'よくある使い方',
          useCases: [
            '創作ウォームアップ',
            '即興シーンのお題',
            'キャラクター小道具の発想',
            '物語の連想ゲーム',
            'プロンプト瓶づくり',
            '授業の作文活動',
          ],
          faqTitle: '物語ページ FAQ',
          faqs: [
            {
              question: 'ランダムオブジェクトは物語にどう役立ちますか？',
              answer:
                'ひとつの物体から、場面、記憶、伏線、登場人物の行動などを考え始めることができます。',
            },
            {
              question: 'なぜ物語向け専用ページがあるのですか？',
              answer:
                '物語の発想は、ゲームや一般的なランダム表示とは少し違うため、場面化しやすい対象に寄せたページにしています。',
            },
            {
              question: '創作練習用にまとめて作れますか？',
              answer:
                'はい。複数のお題をまとめて生成して、授業やワークショップに使えます。',
            },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-classroom',
    categories: ['animals', 'household', 'food', 'nature'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Classroom prompts',
        title: 'Random Objects For Classroom Activities',
        description:
          'Generate object prompts that work well for classroom warmups, quick games, vocabulary review, and short group activities.',
        visualTitle: 'Classroom-ready object cards',
        visualDescription:
          'This page prioritizes concrete, familiar objects that teachers can use in low-prep activities right away.',
        bulkTitle: 'Build a classroom prompt list',
        bulkDescription:
          'Generate a longer set for worksheets, station cards, group games, or daily warmup routines.',
        seoTitle: 'Random Objects For Classroom Activities',
        seoDescription:
          'Generate random objects for classroom warmups, games, vocabulary activities, and quick teaching prompts.',
        landing: {
          introTitle: 'A classroom object page should be practical before it is clever.',
          introBody:
            'Teachers using random objects in lessons usually need fast prompts they can trust. This page narrows the results toward familiar, teachable objects that fit warmups, speaking tasks, guessing games, and vocabulary practice. It gives classroom users a clearer landing page than a fully general object generator.',
          featureTitle: 'Why this page works in class',
          featureLead: 'The strongest classroom prompts are simple, concrete, and easy to adapt.',
          features: [
            { title: 'Low-prep object pool', body: 'The categories lean toward objects students can recognize and use without much explanation.' },
            { title: 'Useful in multiple formats', body: 'The same prompt set works for speaking, drawing, charades, quick writing, and pair activities.' },
            { title: 'Easy to batch for teaching', body: 'Bulk generation makes it simple to create lists for slides, worksheets, or group cards.' },
          ],
          categoryTitle: 'Best classroom categories',
          categoryLead:
            'These categories are broad enough for reuse but specific enough to stay easy for learners and teachers.',
          useCasesTitle: 'Popular classroom uses',
          useCases: [
            'Bell ringers',
            'Vocabulary review',
            'Speaking warmups',
            'Guessing games',
            'Quick writing tasks',
            'Pair and group work',
          ],
          faqTitle: 'Classroom object generator FAQ',
          faqs: [
            { question: 'What age groups can this page support?', answer: 'It works for kids, teens, and adults because the object pool stays concrete and flexible.' },
            { question: 'Why not just use the main generator?', answer: 'A classroom-focused page keeps the results closer to teaching use cases and reduces distracting prompt types.' },
            { question: 'Can I make a list for tomorrow’s lesson?', answer: 'Yes. Generate a longer batch and copy it directly into your lesson notes or materials.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '课堂活动',
        title: '适合课堂活动的随机物品',
        description:
          '生成适合课堂热身、词汇练习、小组互动和快速活动的随机物品提示。',
        visualTitle: '适合课堂的物品卡片',
        visualDescription:
          '这里更偏具体、熟悉、低准备成本的对象，老师拿来就能用。',
        bulkTitle: '生成一组课堂题目',
        bulkDescription:
          '适合做练习纸、活动卡片、小组任务或每日课堂热身。',
        seoTitle: '适合课堂活动的随机物品生成器',
        seoDescription:
          '生成适合课堂活动的随机物品，适用于热身、词汇练习、口语互动和小组任务。',
        landing: {
          introTitle: '课堂页最重要的不是有趣，而是老师能马上拿来用。',
          introBody:
            '课堂活动场景里的随机物品，需要具体、熟悉、容易被理解，最好还能适配词汇、口语、写作和小游戏等多种玩法。这个页面就是为这种低准备成本的教学需求设计的。',
          featureTitle: '为什么这个页面更适合课堂',
          featureLead: '重点是可复用、可理解、可快速组织。',
          features: [
            { title: '更适合教学的对象池', body: '优先使用学生容易识别和描述的物品，减少冷门和过度发散内容。' },
            { title: '适合多种任务', body: '同一套对象既能做口语活动，也能做速写、词汇和猜词练习。' },
            { title: '方便批量备课', body: '批量模式可以快速生成题目列表，直接放进课件或练习纸。' },
          ],
          categoryTitle: '更适合课堂的分类',
          categoryLead:
            '这些分类既够具体又够通用，方便老师反复复用在不同活动里。',
          useCasesTitle: '常见课堂使用场景',
          useCases: ['上课热身', '词汇复习', '口语练习', '猜词活动', '快速写作', '双人或小组任务'],
          faqTitle: '课堂页常见问题',
          faqs: [
            { question: '这个页面适合什么年龄段？', answer: '从儿童到成人都能用，因为对象足够具体，也足够灵活。' },
            { question: '为什么还要单独做课堂页？', answer: '课堂场景更需要稳定、可教学的对象，独立页面能减少不适合教学的随机结果。' },
            { question: '可以直接做明天的题库吗？', answer: '可以。你可以批量生成并复制，直接放进教案、课件或活动卡片里。' },
          ],
        },
      },
      ja: {
        heroEyebrow: '授業向け',
        title: '授業で使えるランダムオブジェクト',
        description:
          '授業のウォームアップ、語彙練習、グループ活動に使いやすいオブジェクトを生成します。',
        visualTitle: '授業向けオブジェクトカード',
        visualDescription:
          '先生がそのまま活動に流し込みやすい、具体的で分かりやすい対象を優先しています。',
        bulkTitle: '授業用のお題リストを作る',
        bulkDescription:
          'ワークシート、活動カード、グループゲーム、日々の導入に使える一覧をまとめて作れます。',
        seoTitle: '授業向けランダムオブジェクトジェネレーター',
        seoDescription:
          '授業の導入、語彙練習、会話活動に使えるランダムオブジェクトを生成します。',
        landing: {
          introTitle: '授業向けページは、すぐ使えることが何より大切です。',
          introBody:
            '授業で使うランダムオブジェクトは、教師が説明しやすく、学習者が理解しやすいものである必要があります。このページはそうした低準備・高再利用の授業用途に合わせて設計しています。',
          featureTitle: '授業で使いやすい理由',
          featureLead: '分かりやすく、活動に変換しやすい対象を優先しています。',
          features: [
            { title: '授業に向く対象', body: '説明しやすい具体物が中心なので、導入や練習に使いやすいです。' },
            { title: '複数の活動に転用できる', body: '会話、語彙、絵、当てっこなどに同じ対象を再利用できます。' },
            { title: '教材化しやすい', body: '一括生成で、スライドやワークシート用の一覧をすぐ作れます。' },
          ],
          categoryTitle: '授業向けに使いやすいカテゴリ',
          categoryLead: '扱いやすさと再利用しやすさのバランスがよいカテゴリを使えます。',
          useCasesTitle: 'よくある授業での使い方',
          useCases: ['導入活動', '語彙復習', 'スピーキング', '当てっこゲーム', '短い作文', 'ペア・グループ活動'],
          faqTitle: '授業ページ FAQ',
          faqs: [
            { question: 'どの年齢層に向いていますか？', answer: '子どもから大人まで使えます。対象が具体的なので幅広い授業に合わせやすいです。' },
            { question: 'なぜ授業専用ページが必要ですか？', answer: '授業では、より安定して扱いやすい対象を出したいので、専用ページの方が使いやすくなります。' },
            { question: '授業用にまとめて作れますか？', answer: 'はい。一括生成で教材用の一覧をすぐに作れます。' },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-party-games',
    categories: ['animals', 'food', 'funny', 'household'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Party games',
        title: 'Random Objects For Party Games',
        description:
          'Generate object prompts that are lively, recognizable, and easy to turn into party rounds and fast group games.',
        visualTitle: 'Party-game-ready object cards',
        visualDescription:
          'Use this page when you want faster, more playful prompts for guessing, acting, or improvising with friends.',
        bulkTitle: 'Build a party-game prompt list',
        bulkDescription:
          'Generate enough prompts for multiple rounds, teams, or group stations in one pass.',
        seoTitle: 'Random Objects For Party Games',
        seoDescription:
          'Generate random objects for party games, guessing rounds, and group activities with visual cards and copyable lists.',
        landing: {
          introTitle: 'Party-game prompts work best when they are lively and instantly recognizable.',
          introBody:
            'A party-game page should not feel like a generic word list. It should deliver prompts that people can react to fast, laugh at, and use without stopping the flow of the room. This page biases toward familiar, expressive objects that work well in guessing, acting, and improv-style activities.',
          featureTitle: 'Why this page fits party play',
          featureLead: 'Fast recognition and playful energy matter more than category breadth.',
          features: [
            { title: 'More game-friendly results', body: 'The prompt mix favors objects that are easier to act out, describe, and laugh about in a group setting.' },
            { title: 'Better pacing', body: 'Visual cards make it easier to scan prompts quickly and keep party rounds moving.' },
            { title: 'Enough prompts for a full night', body: 'Bulk generation lets you prepare longer lists for teams, rounds, or rotating activities.' },
          ],
          categoryTitle: 'Best categories for party games',
          categoryLead: 'These categories are expressive, familiar, and lively enough to support fast social gameplay.',
          useCasesTitle: 'Popular party-game uses',
          useCases: ['Guessing rounds', 'Act-it-out games', 'Team competitions', 'Icebreakers', 'Family game night', 'Improv challenges'],
          faqTitle: 'Party-games generator FAQ',
          faqs: [
            { question: 'What kinds of party games is this good for?', answer: 'It works well for charades, guessing games, improv rounds, family play, and quick social warmups.' },
            { question: 'Why not just use the main random object page?', answer: 'This page is tuned for faster, more playful prompts instead of broad general-purpose browsing.' },
            { question: 'Can I generate enough prompts for teams?', answer: 'Yes. You can make a longer list for multiple rounds or team-based play.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '聚会游戏',
        title: '适合聚会游戏的随机物品',
        description:
          '生成更适合聚会、猜词、即兴游戏和多人互动的随机物品提示。',
        visualTitle: '适合聚会游戏的物品卡片',
        visualDescription:
          '这里的对象更容易带气氛、更容易被理解，也更适合拿来现场玩。',
        bulkTitle: '生成一组聚会游戏题目',
        bulkDescription:
          '适合一次准备多轮、分组游戏或轮换活动的题目清单。',
        seoTitle: '适合聚会游戏的随机物品生成器',
        seoDescription:
          '生成适合聚会游戏的随机物品，适用于猜词、即兴、团队互动和家庭游戏夜。',
        landing: {
          introTitle: '聚会游戏更需要“马上能玩”的对象，而不是一长串普通词语。',
          introBody:
            '聚会里的随机物品，重点是反应快、理解快、能带动情绪。所以这个页面会优先选择更容易表演、更容易猜、也更有趣味感的对象，让它更适合多人互动场景。',
          featureTitle: '为什么它更适合聚会',
          featureLead: '重点是提高游戏感和节奏感。',
          features: [
            { title: '对象更适合游戏', body: '结果会更偏向容易演、容易猜、容易制造笑点的对象。' },
            { title: '更利于控场', body: '卡片式展示能帮助组织者更快扫题，不打断游戏节奏。' },
            { title: '能支撑多轮', body: '批量模式适合一次性准备足够长的题库。' },
          ],
          categoryTitle: '更适合聚会游戏的分类',
          categoryLead: '这些分类更轻松、更有画面感，也更适合多人轮次互动。',
          useCasesTitle: '常见聚会使用场景',
          useCases: ['猜词游戏', '表演游戏', '团队竞赛', '破冰活动', '家庭游戏夜', '即兴挑战'],
          faqTitle: '聚会页常见问题',
          faqs: [
            { question: '适合什么类型的聚会游戏？', answer: '适合你演我猜、猜词、即兴表演、家庭互动和快速热场活动。' },
            { question: '为什么不直接用首页？', answer: '这个页面会更强调“适合玩”的对象，而不是泛用型的随机浏览。' },
            { question: '可以准备整晚的题目吗？', answer: '可以。你可以一次生成更长的列表，给多轮或多组活动使用。' },
          ],
        },
      },
      ja: {
        heroEyebrow: 'パーティー向け',
        title: 'パーティーゲーム向けランダムオブジェクト',
        description:
          'パーティー、当てっこ、即興ゲームに使いやすいオブジェクトをランダム生成します。',
        visualTitle: 'パーティー向けオブジェクトカード',
        visualDescription:
          'その場で使いやすく、盛り上がりやすい対象を中心にした構成です。',
        bulkTitle: 'パーティー用お題リストを作る',
        bulkDescription:
          '複数ラウンドやチーム戦に使える長めのリストをまとめて作れます。',
        seoTitle: 'パーティーゲーム向けランダムオブジェクトジェネレーター',
        seoDescription:
          'パーティーゲーム、当てっこ、即興アクティビティ向けのランダムオブジェクトを生成します。',
        landing: {
          introTitle: 'パーティーゲームでは、その場で使いやすい対象がいちばん大事です。',
          introBody:
            'パーティー向けのお題は、見た瞬間に反応できて、すぐ遊びに変えられることが大切です。このページはそうした意図に合わせて、分かりやすく盛り上がりやすい対象を集めています。',
          featureTitle: 'パーティー向けに向いている理由',
          featureLead: 'テンポと楽しさを優先したお題構成です。',
          features: [
            { title: '遊びやすい対象', body: 'すぐ演じたり説明したりしやすい対象を中心にしています。' },
            { title: '進行しやすい', body: 'カード表示で、お題を素早く確認しながら進められます。' },
            { title: '長いリストを作りやすい', body: '一括生成で、複数ラウンド分をまとめて準備できます。' },
          ],
          categoryTitle: 'パーティー向けに使いやすいカテゴリ',
          categoryLead: '盛り上がりやすく、反応しやすいカテゴリを優先しています。',
          useCasesTitle: 'よくある使い方',
          useCases: ['当てっこゲーム', '演技ゲーム', 'チーム対抗', 'アイスブレイク', '家族ゲーム', '即興チャレンジ'],
          faqTitle: 'パーティーページ FAQ',
          faqs: [
            { question: 'どんなゲームに向いていますか？', answer: 'ジェスチャー、当てっこ、即興、家族ゲームなどに向いています。' },
            { question: 'なぜ専用ページがあるのですか？', answer: 'パーティーでは、より遊びやすい対象の方が使いやすいためです。' },
            { question: '何ラウンド分でも作れますか？', answer: 'はい。一括生成で長めのリストをまとめて作れます。' },
          ],
        },
      },
    },
  },
  {
    slug: 'random-things-to-describe',
    categories: ['animals', 'food', 'household', 'nature'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Description prompts',
        title: 'Random Things To Describe',
        description:
          'Generate concrete objects that are useful for speaking practice, descriptive writing, and observation exercises.',
        visualTitle: 'Description-friendly object cards',
        visualDescription:
          'This page favors objects with strong visual details, shapes, textures, and everyday familiarity.',
        bulkTitle: 'Build a description practice list',
        bulkDescription:
          'Generate a longer set for speaking exercises, descriptive paragraphs, or classroom writing rounds.',
        seoTitle: 'Random Things To Describe Generator',
        seoDescription:
          'Generate random things to describe for speaking practice, descriptive writing, observation tasks, and classroom exercises.',
        landing: {
          introTitle: 'Description prompts work best when the object has clear detail to talk about.',
          introBody:
            'People searching for things to describe usually want concrete prompts with visible shape, color, texture, or function. This page is designed around that need. It keeps the object pool grounded in categories that make descriptive speaking and writing easier to start and easier to teach.',
          featureTitle: 'Why this page is good for description practice',
          featureLead: 'Strong descriptive prompts are specific enough to observe but open enough to expand.',
          features: [
            { title: 'Objects with visible detail', body: 'The categories are chosen for surfaces, shapes, colors, and functions that give learners something real to describe.' },
            { title: 'Good for speaking and writing', body: 'The same prompt can support oral description, paragraph writing, or pair discussion tasks.' },
            { title: 'Easy to batch for exercises', body: 'Generate a longer list for classroom drills, workshop prompts, or self-study practice.' },
          ],
          categoryTitle: 'Best categories for describing',
          categoryLead: 'These categories create prompts with enough visual and functional detail to keep description tasks moving.',
          useCasesTitle: 'Popular uses',
          useCases: ['Speaking practice', 'Descriptive writing', 'Observation drills', 'Pair discussion', 'ESL vocabulary work', 'Classroom warmups'],
          faqTitle: 'Description generator FAQ',
          faqs: [
            { question: 'What makes a good object for description?', answer: 'A good prompt gives you something concrete to notice, such as texture, color, shape, use, or mood.' },
            { question: 'Why use a dedicated page for description prompts?', answer: 'Because descriptive practice benefits from objects that are easier to observe and talk about than generic random nouns.' },
            { question: 'Can I generate a full exercise list?', answer: 'Yes. Use bulk mode to build a longer list for writing or speaking practice.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '描述练习',
        title: '适合描述的随机物品',
        description:
          '生成更适合口语描述、观察练习和描写写作的随机物品提示。',
        visualTitle: '适合描述练习的物品卡片',
        visualDescription:
          '这里优先选择更有形状、材质、颜色和生活细节的对象。',
        bulkTitle: '生成一组描述练习题',
        bulkDescription:
          '适合课堂口语、描写写作、观察训练和自我练习时批量使用。',
        seoTitle: '适合描述的随机物品生成器',
        seoDescription:
          '生成适合描述练习的随机物品，适用于口语表达、描写写作、观察任务和课堂活动。',
        landing: {
          introTitle: '描述练习需要的不是随机，而是“有东西可说”的对象。',
          introBody:
            '想练描述的人，往往需要的是形状、颜色、材质、功能都比较明确的对象，这样才能真正展开表达。这个页面就是围绕这种需求设计的，让结果更适合口语练习、描写写作和观察任务。',
          featureTitle: '为什么这个页面更适合描述',
          featureLead: '重点是对象要足够具体，能真正撑起表达。',
          features: [
            { title: '更有细节可说', body: '这些分类里的对象更容易从颜色、形状、材质和用途上展开描述。' },
            { title: '口语写作都能用', body: '同一张卡既能做口语表达，也能做描写段落或观察练习。' },
            { title: '适合成组练习', body: '批量模式可以直接生成一整组练习题，适合课堂和自学。' },
          ],
          categoryTitle: '更适合描述的分类',
          categoryLead: '这些分类能提供更清晰的观察点，让描述不容易停在空泛层面。',
          useCasesTitle: '常见使用场景',
          useCases: ['口语练习', '描写写作', '观察训练', '双人表达', 'ESL 词汇练习', '课堂热身'],
          faqTitle: '描述页常见问题',
          faqs: [
            { question: '什么样的物品更适合描述？', answer: '越具体、越有细节、越能从外观和用途展开的物品，就越适合拿来练描述。' },
            { question: '为什么要单独做一个描述页？', answer: '因为描述练习更需要有细节的对象，而不是泛泛的随机词。' },
            { question: '可以一次生成整组练习题吗？', answer: '可以。批量模式可以帮你快速生成一整套口语或写作题目。' },
          ],
        },
      },
      ja: {
        heroEyebrow: '描写練習',
        title: '描写しやすいランダムオブジェクト',
        description:
          '話す・書く・観察する練習に使いやすい、具体的なオブジェクトを生成します。',
        visualTitle: '描写向けオブジェクトカード',
        visualDescription:
          '形、色、質感、用途などを言葉にしやすい対象を中心にしています。',
        bulkTitle: '描写練習用リストを作る',
        bulkDescription:
          'スピーキング、作文、観察課題、授業練習用にまとめて生成できます。',
        seoTitle: '描写しやすいランダムオブジェクトジェネレーター',
        seoDescription:
          '描写練習に向いたランダムオブジェクトを生成。スピーキング、作文、観察課題に便利です。',
        landing: {
          introTitle: '描写練習では、説明しがいのある対象が重要です。',
          introBody:
            '描写に向くお題は、形、色、手触り、用途などを言葉にしやすいことが大切です。このページはそうした具体性を持つ対象を中心にし、話す・書く・観察する練習に使いやすくしています。',
          featureTitle: '描写に向いている理由',
          featureLead: '見て言葉にしやすい対象を優先しています。',
          features: [
            { title: '細部を言いやすい', body: '色、形、質感、使い方などを具体的に説明しやすい対象が出やすいです。' },
            { title: '話す練習にも書く練習にも使える', body: '同じお題を会話、作文、観察活動に再利用できます。' },
            { title: 'まとめて練習しやすい', body: '一括生成で、授業や自習用のリストをすぐ作れます。' },
          ],
          categoryTitle: '描写向けに使いやすいカテゴリ',
          categoryLead: '観察ポイントが多く、説明を広げやすいカテゴリを使えます。',
          useCasesTitle: 'よくある使い方',
          useCases: ['スピーキング練習', '描写作文', '観察ドリル', 'ペア会話', 'ESL語彙練習', '授業の導入'],
          faqTitle: '描写ページ FAQ',
          faqs: [
            { question: '描写に向くオブジェクトとは？', answer: '見た目や用途を具体的に言葉にしやすい対象が、描写練習に向いています。' },
            { question: 'なぜ描写専用ページが必要ですか？', answer: '描写練習では、より具体的で観察しやすい対象の方が使いやすいからです。' },
            { question: 'まとめて練習用に作れますか？', answer: 'はい。一括生成で作文や会話練習用のリストをまとめて作れます。' },
          ],
        },
      },
    },
  },
  {
    slug: 'random-objects-for-writing-prompts',
    categories: ['animals', 'household', 'food', 'nature', 'funny'],
    defaultVisualCount: 5,
    i18n: {
      en: {
        heroEyebrow: 'Writing prompts',
        title: 'Random Objects For Writing Prompts',
        description:
          'Generate concrete object cues that can unlock scenes, paragraphs, character details, and quick writing exercises.',
        visualTitle: 'Writing-prompt object cards',
        visualDescription:
          'These cards help you start with an object and expand outward into scene, memory, conflict, or voice.',
        bulkTitle: 'Build a writing prompt list',
        bulkDescription:
          'Generate a larger batch for journaling, classroom writing, workshops, or creativity exercises.',
        seoTitle: 'Random Objects For Writing Prompts Generator',
        seoDescription:
          'Generate random objects for writing prompts, journaling, classroom writing, and creative exercises with visual cards and bulk lists.',
        landing: {
          introTitle: 'Writing prompts become more useful when the object feels like a story trigger.',
          introBody:
            'Writers often use objects as anchors for detail, scene, memory, or conflict. This page is designed around that creative use instead of generic randomness. It combines familiar objects with a bit of variety so the results feel concrete enough to write from but open enough to branch into many directions.',
          featureTitle: 'Why this page helps writing',
          featureLead: 'Objects are easier to write from when they suggest detail and possibility at the same time.',
          features: [
            { title: 'Concrete starting points', body: 'The object pool helps you begin with something visible and specific instead of a vague abstract cue.' },
            { title: 'Works for short or long writing', body: 'You can use one object for a paragraph warmup or generate many for a larger prompt set.' },
            { title: 'Good for teaching and workshops', body: 'Bulk mode supports classroom writing, journaling prompts, and group exercises.' },
          ],
          categoryTitle: 'Best categories for writing prompts',
          categoryLead: 'These categories create a balance between familiar detail and imaginative stretch, which is ideal for writing exercises.',
          useCasesTitle: 'Popular writing uses',
          useCases: ['Journaling prompts', 'Creative writing warmups', 'Classroom paragraphs', 'Workshop exercises', 'Character detail prompts', 'Scene starters'],
          faqTitle: 'Writing prompts generator FAQ',
          faqs: [
            { question: 'How can random objects help writing?', answer: 'A single object can suggest voice, memory, conflict, setting, or detail, which makes it easier to start writing.' },
            { question: 'Why a writing-specific page?', answer: 'Writing prompts benefit from objects that are concrete but flexible, which is a different use case from games or general browsing.' },
            { question: 'Can I generate a full prompt pack?', answer: 'Yes. Use bulk mode to create a larger list for class, journaling, or workshop use.' },
          ],
        },
      },
      zh: {
        heroEyebrow: '写作提示',
        title: '适合写作提示的随机物品',
        description:
          '生成更适合写作、日记、课堂练笔和创作热身的随机物品线索。',
        visualTitle: '适合写作的物品卡片',
        visualDescription:
          '这些对象更容易变成细节、场景、回忆和人物线索，而不是停留在表面词义上。',
        bulkTitle: '生成一组写作提示清单',
        bulkDescription:
          '适合课堂练笔、工作坊、日记训练和创意写作活动时批量使用。',
        seoTitle: '适合写作提示的随机物品生成器',
        seoDescription:
          '生成适合写作提示的随机物品，适用于日记、课堂写作、工作坊和创作热身。',
        landing: {
          introTitle: '写作提示真正有用的时候，是一个物品能把你带进一个段落，而不是只给你一个词。',
          introBody:
            '写作者用随机物品，并不是想机械地抽词，而是想找到一个能够展开成细节、回忆、冲突、人物道具或场景线索的对象。这个页面就是围绕这种写作用途设计的。',
          featureTitle: '为什么这个页面更适合写作',
          featureLead: '重点是让物品更像写作入口，而不是随机填空。',
          features: [
            { title: '更适合展开细节', body: '对象更具体，更容易转化成段落、场景和人物动作。' },
            { title: '短写长写都能用', body: '你可以用一个对象做热身，也可以批量生成一组做整套练习。' },
            { title: '适合课堂和工作坊', body: '批量模式方便老师和组织者准备一组写作题。' },
          ],
          categoryTitle: '更适合写作的分类',
          categoryLead: '这些分类既有现实感，又留有想象空间，更适合创作和练笔。',
          useCasesTitle: '常见写作使用场景',
          useCases: ['日记提示', '创意写作热身', '课堂短文', '工作坊练习', '人物细节提示', '场景开头练习'],
          faqTitle: '写作页常见问题',
          faqs: [
            { question: '随机物品为什么适合写作？', answer: '一个具体物品常常能引出记忆、场景、动作或冲突，让你更容易下笔。' },
            { question: '为什么需要单独的写作页？', answer: '写作场景更需要“可展开”的对象，这和游戏或泛浏览的意图不一样。' },
            { question: '可以一次生成整套写作提示吗？', answer: '可以。批量模式可以快速生成一组题目，适合课堂、日记或工作坊使用。' },
          ],
        },
      },
      ja: {
        heroEyebrow: 'ライティング',
        title: 'ライティング向けランダムオブジェクト',
        description:
          '作文、日記、授業の短文、創作ウォームアップに使いやすいオブジェクトを生成します。',
        visualTitle: 'ライティング向けオブジェクトカード',
        visualDescription:
          'ひとつの物体から、場面、記憶、人物、小さな衝突へ広げやすい対象を中心にしています。',
        bulkTitle: 'ライティング用お題リストを作る',
        bulkDescription:
          '授業、ジャーナリング、ワークショップ向けに複数のお題をまとめて作れます。',
        seoTitle: 'ライティング向けランダムオブジェクトジェネレーター',
        seoDescription:
          'ライティングや創作練習向けのランダムオブジェクトを生成。授業、日記、ワークショップに便利です。',
        landing: {
          introTitle: 'ライティングでは、オブジェクトが書き出しのきっかけになることが大切です。',
          introBody:
            '書き手がランダムオブジェクトを使うのは、ただの単語ではなく、描写・記憶・場面・行動に広げられる具体物が欲しいからです。このページはそうした創作の入口として機能する対象を集めています。',
          featureTitle: 'ライティング向けに役立つ理由',
          featureLead: '具体性と広がりやすさの両方を持つ対象を優先しています。',
          features: [
            { title: '細部に広げやすい', body: '具体的な物体なので、描写や動作に落とし込みやすいです。' },
            { title: '短文にも長文にも使える', body: 'ひとつの対象で短い練習も、まとめて複数の課題作成もできます。' },
            { title: '授業やワークショップにも便利', body: '一括生成でライティング用のお題セットをすぐ作れます。' },
          ],
          categoryTitle: 'ライティング向けに使いやすいカテゴリ',
          categoryLead: '具体性と想像の余地のバランスがよいカテゴリを優先しています。',
          useCasesTitle: 'よくある使い方',
          useCases: ['日記のテーマ', '創作ウォームアップ', '授業の短文', 'ワークショップ課題', '人物小道具の発想', 'シーンの書き出し'],
          faqTitle: 'ライティングページ FAQ',
          faqs: [
            { question: 'ランダムオブジェクトはライティングにどう役立ちますか？', answer: 'ひとつの物体が、場面、記憶、行動、細部の入口になってくれるからです。' },
            { question: 'なぜライティング専用ページが必要ですか？', answer: '創作では、遊び用のお題よりも、書きやすく広げやすい対象の方が役立つためです。' },
            { question: '複数のお題をまとめて作れますか？', answer: 'はい。一括生成で授業や自習向けのリストをすぐ作れます。' },
          ],
        },
      },
    },
  },
]

export function getIntentPageBySlug(slug: string) {
  return intentPages.find((page) => page.slug === slug) ?? null
}
