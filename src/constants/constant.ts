export const SITE_TITLE = "yajium's site";
export const SITE_DESCRIPTION = "yajiumのホームページです";
export const NAME = "yajium";
export const SHORT_INTRO = "こんにちは";

export const snslinks = [
  {
    linkTitle: "Twitter",
    name: "yajium_",
    link: "https://twitter.com/yajium_",
  },
  {
    linkTitle: "Github",
    name: "yajium",
    link: "https://github.com/yajium",
  },
  {
    linkTitle: "Zenn",
    name: "rorisutarou",
    link: "https://zenn.dev/rorisutarou",
  },
  // {
  //   linkTitle: "SpeakerDeck",
  //   name: "aaa",
  //   link: "xxx",
  // },
];

export const myLikes = [
  {
    cate: "Tech",
    detail: ["React", "Next.js", "Typescript", "C#"],
  },
  {
    cate: "Hobby",
    detail: ["引きこもり", "ポケモンの対戦実況を見ること"],
  },
  {
    cate: "Music",
    detail: ["ヨルシカ"],
  },
  {
    cate: "Others",
    detail: ["ぬいぐるみ", "ポケモン", "パグちゃん", "冬"],
  },
];

export const myLife = [
  {
    date: "2022年4月～",
    detail: "某社で社会人",
  },
  {
    date: "2018年4月～",
    detail: "某塾で大学生",
  },
  {
    date: "1999年7月～",
    detail: "某所で誕生",
  },
];

export const homeCards = [
  {
    itemName: "About",
    description: "yajiumのことを紹介しています",
    href: "/about",
  },
  {
    itemName: "Works",
    description: "作ったものたちを紹介しています",
    href: "/works",
  },
  {
    itemName: "Blog",
    description: "文字を書いています",
    href: "blog",
  },
];

export const homeTitle = "yajium's site";

export const homeDesc = `こんにちは、yajiumです。
  ここまで見に来てくださり、ありがとうございます。

  今は東京に住んでおり、毎日ぬいぐるみたちと穏やかに暮らしています。
  最近の趣味はTwitterでパグを見て癒されることです。

  今の目標はソフトウェアエンジニアになることで、その目標に向けて日々を生きています。
  Webの技術が好きで、最近はフロントエンドへの興味が強いです。ただ、仕事ではC#を触っていて主にバックエンドをやっています。

  海と桜が好きなので、このサイトのデザインに要素を散りばめてみました🐳`;

export const worksCards = [
  {
    image: "/src/images/works/poketto.png",
    link: "https://poketto-mon.vercel.app/",
    title: "Poketto",
    desc: "好きなポケモンをシェアできるアプリ",
    stack: ["React", "Next.js", "Firebase"],
  },
  {
    image: "/src/images/works/yajium-blog.png",
    link: "https://chiisanaumi.vercel.app/",
    title: "Blog",
    desc: "初めて作ったブログ",
    stack: ["React", "Next.js"],
  },
];
