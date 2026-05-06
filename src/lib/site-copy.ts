import type { Locale } from '@/lib/i18n-config'

export const trustPageCopy: Record<
  Locale,
  {
    about: {
      title: string
      description: string
      eyebrow: string
      body: string[]
    }
    privacy: {
      title: string
      description: string
      eyebrow: string
      body: string[]
    }
    terms: {
      title: string
      description: string
      eyebrow: string
      body: string[]
    }
    ui: {
      home: string
      about: string
      privacy: string
      terms: string
      legal: string
      quickLinks: string
      connect: string
      relatedGenerators: string
      howToUse: string
      breadcrumbHome: string
      featureRandomTitle: string
      featureRandomBody: string
      featureRandomValue: string
      featureCopyTitle: string
      featureCopyBody: string
      visualMode: string
      bulkMode: string
      count: string
      allowRepeats: string
      limitedTo: string
      generateCta: string
      generateAgainCta: string
      jumpToCards: string
      jumpToList: string
      refreshList: string
      copyList: string
      copied: string
      object: string
      descriptionLabel: string
      bestFor: string
      chipDrawing: string
      chipClassroom: string
      chipBrainstorm: string
      chipGames: string
      whyThisExists: string
      howToLabel: string
      featuredCategoriesLabel: string
      categoryLabel: string
      openGenerator: string
      useCasesLabel: string
      faqLabel: string
      drawPromptsLink: string
      kidsObjectsLink: string
    }
  }
> = {
  en: {
    about: {
      title: 'About Random Object Generator',
      description:
        'Learn who made Random Object Generator, why it exists, and how it helps teachers, writers, artists, and facilitators find fast prompt ideas.',
      eyebrow: 'About this project',
      body: [
        'Random Object Generator is an independent tool built to make prompt generation feel more useful, visual, and reusable than the average random noun site.',
        'The project exists for people who need fast creative input without friction: teachers planning classroom warmups, artists looking for drawing prompts, facilitators running icebreakers, and writers who need a quick object to start from.',
        'Our goal is simple. Build a small but trustworthy multilingual utility site that is easy to understand, quick to use, and clear about what it offers.'
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'Read the privacy policy for Random Object Generator, including how basic analytics, logs, and voluntary interactions may be handled.',
      eyebrow: 'Privacy',
      body: [
        'Random Object Generator is designed as a lightweight public utility. We do not require an account to use the core generator and we do not ask for unnecessary personal information.',
        'Like most websites, basic server logs, anonymous analytics, and performance data may be collected to keep the service stable, improve usability, and understand which pages are being used.',
        'If third-party services such as hosting, analytics, or advertising are used in the future, they may process limited technical data according to their own policies. This page should be treated as the source of truth for how the site approaches privacy.'
      ],
    },
    terms: {
      title: 'Terms of Use',
      description:
        'Review the usage terms for Random Object Generator, including basic limitations, permitted use, and content ownership expectations.',
      eyebrow: 'Terms',
      body: [
        'Random Object Generator is provided as a free online utility. You may use the site for personal, educational, and general creative purposes.',
        'You agree not to abuse the service, automate excessive requests, attempt to disrupt availability, or misuse any content in a way that harms the project or other users.',
        'We may update, remove, or refine features at any time as the product evolves. Continued use of the site means you accept the current version of these terms.'
      ],
    },
    ui: {
      home: 'Home',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      legal: 'Trust & Legal',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      relatedGenerators: 'Related generators',
      howToUse: 'How to use this generator',
      breadcrumbHome: 'Home',
      featureRandomTitle: 'Random picks',
      featureRandomBody: 'Generate a fresh object instantly for drawing prompts, games, warmups, or creative sprints.',
      featureRandomValue: '1 click',
      featureCopyTitle: 'Copy-ready lists',
      featureCopyBody: 'Create a clean batch on the current page and copy it fast for docs, worksheets, or brainstorming.',
      visualMode: 'Visual mode',
      bulkMode: 'Bulk mode',
      count: 'Count',
      allowRepeats: 'Allow repeats',
      limitedTo: 'Limited to {count} unique items on this page.',
      generateCta: 'Generate now',
      generateAgainCta: 'Show {count} new objects',
      jumpToCards: 'Jump to cards',
      jumpToList: 'Open bulk list',
      refreshList: 'Refresh list',
      copyList: 'Copy list',
      copied: 'Copied',
      object: 'Object',
      descriptionLabel: 'Description',
      bestFor: 'Best for',
      chipDrawing: 'Drawing prompts',
      chipClassroom: 'Classroom warmups',
      chipBrainstorm: 'Brainstorming',
      chipGames: 'Party games',
      whyThisExists: 'Why this homepage exists',
      howToLabel: 'How to use',
      featuredCategoriesLabel: 'Featured categories',
      categoryLabel: 'Category',
      openGenerator: 'Open generator',
      useCasesLabel: 'Use cases',
      faqLabel: 'FAQ',
      drawPromptsLink: 'Random object to draw',
      kidsObjectsLink: 'Random objects for kids',
    },
  },
  zh: {
    about: {
      title: '关于 Random Object Generator',
      description:
        '了解这个网站是谁做的、为什么要做，以及它如何帮助老师、写作者、画师和活动组织者快速获得灵感。',
      eyebrow: '关于这个项目',
      body: [
        'Random Object Generator 是一个由独立开发者打造的小型工具站，目标是把随机提示词做得比普通随机名词网站更直观、更好用。',
        '这个项目主要服务于那些需要快速灵感输入的人，比如准备课堂热身的老师、寻找绘画提示的画师、组织破冰活动的主持人，以及需要一个起点的写作者。',
        '我们的目标很简单：做一个可信、轻量、多语言的实用网站，让用户一眼看懂、打开即用，并且清楚知道这个产品为什么存在。'
      ],
    },
    privacy: {
      title: '隐私政策',
      description:
        '查看 Random Object Generator 的隐私政策，包括基础日志、匿名统计以及必要的技术数据处理方式。',
      eyebrow: '隐私',
      body: [
        'Random Object Generator 是一个轻量级公开工具，核心生成器不需要注册，也不会主动索取不必要的个人信息。',
        '和大多数网站一样，为了保障稳定性、改进体验以及了解页面使用情况，系统可能会记录基础日志、匿名统计或性能数据。',
        '如果未来接入第三方托管、统计或广告服务，这些服务可能会按照各自政策处理有限的技术信息。本页面将作为站点隐私策略的主要说明。'
      ],
    },
    terms: {
      title: '服务条款',
      description:
        '查看 Random Object Generator 的使用条款，包括可接受使用方式、限制以及功能变更说明。',
      eyebrow: '条款',
      body: [
        'Random Object Generator 目前作为免费的在线工具提供服务，你可以将其用于个人、教育和一般创意场景。',
        '你不得滥用服务、进行过量自动请求、影响网站稳定性，或以损害项目和其他用户的方式使用网站内容。',
        '随着产品迭代，我们可能会随时调整、删除或新增功能。继续使用网站即表示你接受当前版本的条款。'
      ],
    },
    ui: {
      home: '首页',
      about: '关于我们',
      privacy: '隐私政策',
      terms: '服务条款',
      legal: '信任与合规',
      quickLinks: '快速入口',
      connect: '相关链接',
      relatedGenerators: '相关生成器',
      howToUse: '如何使用这个生成器',
      breadcrumbHome: '首页',
      featureRandomTitle: '随机生成',
      featureRandomBody: '一键刷新随机物品，适合绘画提示、课堂热身、小游戏和创意发散。',
      featureRandomValue: '一键',
      featureCopyTitle: '可复制清单',
      featureCopyBody: '在当前页面快速生成一批结果，并直接复制到文档、教案、表格或脑暴清单里。',
      visualMode: '卡片模式',
      bulkMode: '批量模式',
      count: '数量',
      allowRepeats: '允许重复',
      limitedTo: '当前页面最多可展示 {count} 个不重复结果。',
      generateCta: '立即生成',
      generateAgainCta: '再来 {count} 个新结果',
      jumpToCards: '查看卡片结果',
      jumpToList: '打开批量列表',
      refreshList: '刷新列表',
      copyList: '复制列表',
      copied: '已复制',
      object: '物品',
      descriptionLabel: '描述',
      bestFor: '适合用于',
      chipDrawing: '绘画灵感',
      chipClassroom: '课堂热身',
      chipBrainstorm: '头脑风暴',
      chipGames: '小游戏',
      whyThisExists: '为什么需要这个首页',
      howToLabel: '如何使用',
      featuredCategoriesLabel: '精选分类',
      categoryLabel: '分类',
      openGenerator: '打开生成器',
      useCasesLabel: '使用场景',
      faqLabel: '常见问题',
      drawPromptsLink: '随机绘画物品',
      kidsObjectsLink: '适合孩子的随机物品',
    },
  },
  ja: {
    about: {
      title: 'Random Object Generator について',
      description:
        'このサイトの目的、制作者、そして教師・ライター・イラスト制作者・進行役にどう役立つかを紹介します。',
      eyebrow: 'このプロジェクトについて',
      body: [
        'Random Object Generator は、一般的なランダム名詞サイトよりも、見やすく再利用しやすい発想ツールを目指して作られた独立系プロジェクトです。',
        '授業の導入を考える先生、絵のお題を探す人、アイスブレイクを用意するファシリテーター、書き出しのきっかけが欲しいライターなど、素早い発想入力が必要な人のために作られています。',
        '目標はシンプルです。小さくても信頼できる多言語ツールサイトとして、分かりやすく、使いやすく、存在理由が明確な形で運営することです。'
      ],
    },
    privacy: {
      title: 'プライバシーポリシー',
      description:
        'Random Object Generator のプライバシーポリシーです。基本ログ、匿名解析、技術データの扱いについて説明します。',
      eyebrow: 'プライバシー',
      body: [
        'Random Object Generator は、ログイン不要で使える軽量な公開ツールです。コア機能の利用にあたり、不要な個人情報の提出は求めません。',
        '多くのウェブサイトと同様に、安定運用、使い勝手の改善、利用状況の把握のために、基本的なサーバーログ、匿名解析、性能データが記録される場合があります。',
        '今後ホスティング、解析、広告などの外部サービスを利用する場合、それぞれのポリシーに従って限定的な技術データが処理されることがあります。本ページを当サイトのプライバシー方針の基準とします。'
      ],
    },
    terms: {
      title: '利用規約',
      description:
        'Random Object Generator の利用規約です。利用方法、制限事項、機能更新に関する基本方針を確認できます。',
      eyebrow: '利用規約',
      body: [
        'Random Object Generator は、個人利用、教育利用、一般的な創作用途を想定した無料オンラインツールです。',
        '過度な自動アクセス、サービス妨害、他ユーザーやプロジェクトに損害を与える使い方は禁止します。',
        '機能は今後の運用や改善に応じて追加、変更、削除されることがあります。継続利用は最新の規約への同意とみなされます。'
      ],
    },
    ui: {
      home: 'ホーム',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      legal: '信頼と法務',
      quickLinks: 'クイックリンク',
      connect: 'リンク',
      relatedGenerators: '関連ジェネレーター',
      howToUse: 'このジェネレーターの使い方',
      breadcrumbHome: 'ホーム',
      featureRandomTitle: 'ランダム生成',
      featureRandomBody: 'ワンクリックで新しいお題を出せるので、描画練習、授業導入、ゲーム、発想整理に使えます。',
      featureRandomValue: '1クリック',
      featureCopyTitle: 'コピーしやすい一覧',
      featureCopyBody: 'このページ内で複数の結果をすばやく作成し、ドキュメントやワークシートへそのままコピーできます。',
      visualMode: 'カード表示',
      bulkMode: '一括表示',
      count: '数',
      allowRepeats: '重複を許可',
      limitedTo: 'このページでは重複なしで最大 {count} 件まで表示できます。',
      generateCta: '今すぐ生成',
      generateAgainCta: '{count} 件の新しい結果を表示',
      jumpToCards: 'カードを見る',
      jumpToList: '一覧を見る',
      refreshList: '一覧を更新',
      copyList: '一覧をコピー',
      copied: 'コピー済み',
      object: '項目',
      descriptionLabel: '説明',
      bestFor: 'おすすめ用途',
      chipDrawing: '描画のお題',
      chipClassroom: '授業の導入',
      chipBrainstorm: '発想整理',
      chipGames: 'パーティーゲーム',
      whyThisExists: 'このホームページの役割',
      howToLabel: '使い方',
      featuredCategoriesLabel: '注目カテゴリ',
      categoryLabel: 'カテゴリ',
      openGenerator: 'ジェネレーターを開く',
      useCasesLabel: '活用シーン',
      faqLabel: 'FAQ',
      drawPromptsLink: '描くためのランダムオブジェクト',
      kidsObjectsLink: '子ども向けランダムオブジェクト',
    },
  },
}
