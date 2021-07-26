export const state = () => ({
  category: [
    {
      id: 1,
      name: '技術'
    },
    {
      id: 2,
      name: '心持ち'
    },
    {
      id: 3,
      name: '業界知識'
    }
  ],
  recommendTags: ['セキュリティ', 'ROI', 'サブスクリプション'],
  favoriteList: [],
  selectedItems: [],
  itemFilter: '',
  cart: [],
  items: [
    {
      title: 'セキュリティ知識に詳しくなる',
      contents: 'セキュリティはECサイト制作において欠かせない要素の１つです。サイバー攻撃対策、Webサーバの防御、パスワードの暗号化など求められる知識はさまざま。<br>ネットワークセキュリティを管理するにあたり、ファイアウォールやIDS/IPS、WAFと呼ばれる防御壁を設置するなどの対策が多く採用されています。<br>セキュリティに詳しくなると、私生活でも迂闊にパスワードを簡単なものにしなくなったり、怪しいサイトかどうか判別できるようになったりとネットリテラシーが高くなるかもしれませんね。',
      thumbnailUrl: 'thumbnail/security.jpg',
      isFavorite: false,
      isCart: false,
      cardTags: ['セキュリティ', 'ファイアウォール'],
      category: 1
    },
    {
      title: 'お客様の困りごとを解決する『オーダーメイド』システムを作り上げる',
      contents: '受託開発は困っている顧客から話を聞いて問題点を洗い出し、顧客に合わせたシステムを開発するお仕事です。自分たちのチームが開発したシステムが実際に稼働し、「便利になった」「売上が上がった」という声をもらえるのは、うれしいものです。',
      thumbnailUrl: 'thumbnail/business.jpg',
      isFavorite: false,
      isCart: false,
      cardTags: ['受注'],
      category: 2
    },
    {
      title: '多岐に渡る業界の販売システムに関わることができる',
      contents: '消費者目線では商品購入から自宅に届くまでにすることは「商品を選択」「商品を購入」のみです。しかしECサイト制作者目線になると「購入→配送」までに多くのプロセスがあることを学ぶことができます。<br>例えばTシャツを一枚購入したとすると、その裏でシステムは「受注内容の登録」「売れたTシャツの在庫を1減らす」「購入者にメール送信」「決済システムと連携し、与信を取る」などECサイトと現実世界の調合性を取るために働きます。<br>またお客様の業種や売り物によって、販売システムは変わります。受発注商品なのか？定期注文があるのか？などお客様の都合に一番フィットする販売システムを一緒に考えていくのもおもしろいですね。',
      thumbnailUrl: '/thumbnail/siharai.jpg',
      isFavorite: false,
      isCart: false,
      cardTags: ['販売システム'],
      category: 2
    },
    {
      title: 'コンサルティング的な側面がある',
      contents: 'システムはただ作ればいいのではなく、顧客の売上がより上がるため、業務の負担をなくすためにあります。顧客の投資した資本がどの程度の利益を生んでいるか（ROI）を考え、投資金額よりリターンが大きくなるようなシステムを提案することが求められます。コンサルティングと聞くと難しく考えてしまいがちですが、実際に自分が使うとしたらどうか？を考え、利用者目線の提案をすると説得力が増すかと思います。',
      thumbnailUrl: 'thumbnail/consal.jpg',
      mainUrl: '/main/roi.png',
      isFavorite: false,
      isCart: false,
      cardTags: ['コンサルティング', 'ROI'],
      category: 3
    },
    {
      title: 'プログラミング技術をじっくり学べる',
      contents: 'プログラミング言語選択は群雄割拠の戦国時代状態ですが、ECサイト構築では実績の多いPHPやJava,.NETが主に使われています。案件にもよりますが、受注では開発期間が長いので１つの言語に対しじっくり取り組めることが多く、より理解を深めることができます。またチームにはなんでも知ってる人が１人か２人くらい居るので、わからないことがあっても教えてもらえます。',
      thumbnailUrl: 'thumbnail/PHP.jpg',
      isFavorite: false,
      isCart: false,
      cardTags: ['プログラミング', '受注'],
      category: 1
    },
    {
      title: 'ドキュメント作成技術が身に付く',
      contents: '見積書、設計書、画面遷移図、WBSなどECサイト制作で必要なドキュメントはさまざまです。どれも重要ですが、お客様に納品する資料に関してはフォーマットを整える必要があり、見栄えをよくする能力が格段に上がります。',
      thumbnailUrl: 'thumbnail/document.jpg',
      isFavorite: false,
      isCart: false,
      cardTags: ['ドキュメント'],
      category: 1
    },
    {
      title: '国内市場１９.４兆円のホットな業界',
      contents: '新型コロナウイルスにより最もプラスな影響を受けた業界の１つがeコマーズ（EC）業界です。ECは食品、日用品などの日常の買い物にも浸透し、市場拡大が続いています。またSNSなどネットの情報をみた上での購入をさすオムニチャネルコマーズも右肩上がりの成長が予想されます。ブランドイメージを大切にする業者は自社ECに注力する動きがあります。EC事業部の顧客は主にそのような方々となります。<br><br>引用元：<a target="_blank" href="https://www.meti.go.jp/press/2020/07/20200722003/20200722003.html">電子商取引に関する市場調査の結果を取りまとめました</a>',
      thumbnailUrl: 'thumbnail/shopping.svg',
      mainUrl: '/main/ec-date.png',
      isFavorite: false,
      isCart: false,
      cardTags: ['市場', 'オムニチャネル'],
      category: 3
    },
    {
      title: '顧客戦略をシステムを通して知ることができる',
      contents: '我々の顧客はいかに商品を売り、利益を上げるかを考えています。その考えは顕著にシステムに反映されるため、顧客がどのような戦略を取っているのかを知れる、というのはECソリューションならではです。<br>例えばモール型ECサイトでは自社で商品を販売しておらず、店舗に売り場を提供しています（有名なのは楽天やyahooショッピング）。モール型ECサイトの収入源は主に店舗からの出店料と、売上手数料です。売上手数料を徴収するシステムにはカテゴリごとに手数料を変更できたり、ユーザーが商品詳細にアクセスした際の斡旋した履歴を残したり、などがあります。このように顧客がどのように儲けているか間近で知ることができるのはEC事業部のおもしろさの一つです。',
      thumbnailUrl: '/thumbnail/management.jpg',
      mainUrl: '/main/sale.png',
      isFavorite: false,
      isCart: false,
      cardTags: ['販売システム'],
      category: 3
    },
    {
      title: '普段の生活で知らなかった商品を知る機会を得る',
      contents: '普段生活していて、購入する商品や興味のある商品の分野は基本的に同じだと思います。EC事業部では顧客を特定の業界に絞らないため案件ごとに取り扱う商品が異なり、自分の知らなかった世界に触れることができます。例えば今はサブスクリプションが流行っていますが、子供用おもちゃやワイシャツの定期購入まであることを知りました。自分が利用するかどうかは置いておいて、便利なサービスや興味のある商品を発掘するのも楽しみです。',
      thumbnailUrl: 'thumbnail/shopping.svg',
      isFavorite: false,
      isCart: false,
      cardTags: ['サブスクリプション'],
      category: 2
    }
  ]
})

export const mutations = {
  // セッター
  setFavoriteList (state) {
    state.favoriteList = state.items.filter(item => item.isFavorite === true)
  },
  setSelectedItems (state) {
    state.selectedItems = state.items
  },
  // お気に入り追加
  changeFavorite (state, index) {
    state.items[index].isFavorite = !state.items[index].isFavorite
  },
  // 条件絞込み
  serchItemforWord (state, word) {
    state.selectedItems = state.items.filter(function (item) {
      return item.title.includes(word) ||
        item.contents.includes(word) ||
        item.cardTags.includes(word)
    })
    state.itemFilter = '(検索ワード：' + word + ')'
  },
  serchItemforTag (state, tag) {
    state.selectedItems = state.items.filter(function (item) {
      return item.cardTags.includes(tag)
    })
    state.itemFilter = '(タグ：' + tag + ')'
  },
  serchItemforCategory (state, category) {
    state.selectedItems = state.items.filter(function (item) {
      return item.category === category.id
    })
    state.itemFilter = '(カテゴリー：' + category.name + ')'
  },
  serchFavorite (state) {
    state.selectedItems = state.items.filter(item => item.isFavorite === true)
    state.itemFilter = '(お気に入り)'
  },
  // 絞込みリセット
  filterReset (state) {
    state.selectedItems = state.items
    state.itemFilter = ''
  },
  // カート処理
  addCart (state, { itemTitle, i }) {
    state.items[i].isCart = !state.items[i].isCart
    state.cart.push(itemTitle)
  },
  clearCart (state) {
    state.items.forEach((item) => {
      item.isCart = false
    })
    state.cart = []
  }
}

export const getters = {
  // カートに入っているitem数
  getCartCount: (state) => {
    return state.cart.length
  }
}
