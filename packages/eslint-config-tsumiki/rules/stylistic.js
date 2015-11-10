module.exports = {
  'rules': {
    // 配列の要素間のスペースは`[1, 2, 3]`というスタイルを利用する
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': [2, 'never'],

    // ブロック文を一行で書く場合は前後にスペースを入れる
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': [2, 'always'],

    // Brace Styleを強制 詳細は以下
    // http://eslint.org/docs/rules/brace-style
    'brace-style': [2, '1tbs', { allowSingleLine: true }],

    // キャメルケースを利用する
    // 先頭、末尾や定数のアンダースコアは許容
    // http://eslint.org/docs/rules/camelcase
    'camelcase': [2, { properties: 'always' }],

    // オブジェクトや引数のカンマのスペースの入れ方を強制 詳細は以下
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': [2, { before: false, after: true }],

    // カンマの入れ方を強制 詳細は以下
    // http://eslint.org/docs/rules/comma-style
    'comma-style': [2, 'last'],

    // オブジェクトのプロパティへのブラケットアクセスでブラケット内にスペースを入れることを許可しない
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': [2, 'never'],

    // コールバック等で参照する`this`を束縛するために対比しておく変数名は`_this`
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': [2, '_this'],

    // 最終行の後ろで改行することを強制
    // http://eslint.org/docs/rules/eol-last
    'eol-last': 2,

    // 無名関数の利用を警告
    // http://eslint.org/docs/rules/func-names
    'func-names': 1,

    // 関数式、関数宣言どちらも許容
    // http://eslint.org/docs/rules/func-style
    'func-style': 0,

    // 変数名、プロパティ名等の命名で文字数の制限はしない
    // http://eslint.org/docs/rules/id-length
    'id-length': 0,

    // 変数名、プロパティ名等の命名でパターンマッチの制限はしない
    // http://eslint.org/docs/rules/id-match
    'id-match': 0,

    // インデントはスペース2 switch文で条件式はインデントしない
    // http://eslint.org/docs/rules/indent
    'indent': [2, 2, { SwitchCase: 0 }],

    // JSXで属性はダブルクォートを利用する
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [2, 'prefer-double'],

    // オブジェクトリテラルのコロンの前後のスペースを強制
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': [2, { beforeColon: false, afterColon: true }],


    // 改行コードはUnix(LF)に統一
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': [2, 'unix'],

    // コメントを書くとき、前に空行を入れる
    // ブロック、オブジェクト、配列の1行目の場合は許容する
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowObjectStart: true,
      allowArrayStart: true
    }],

    // 関数のネストは3ブロックまで
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': [2, 3],

    // コンストラクタと思われる（パスカルケース）関数の呼び出し場合は`new`演算子とともに、
    // そうでない場合の関数呼び出しではつけない
    // http://eslint.org/docs/rules/new-cap
    'new-cap': 2,

    // `new`演算子と共に呼ばれる関数でも`()`は省略しない
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 2,

    // 変数宣言のあとの空行の有り無しの制限はしない
    // http://eslint.org/docs/rules/newline-after-var
    'newline-after-var': 0,

    // `Array`コンストラクタによる配列の生成
    // （引数を2以上渡しての要素定義）を許可しない
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 2,

    // http://eslint.org/docs/rules/no-continue
    'no-continue': 2,

    // コメントの入れる場所を制限しない
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 0,

    // `else if`を適宜利用し、if文での無駄な入れ子を許可しない
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 2,

    // スペースとタブの混在を許可しない
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 2,

    // 空行は3行まで 最終行の空行は1行とする
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [2, { max: 3, maxEOF: 1 }],

    // 条件式で否定形を最初にもっていくと警告
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 1,

    // ネストした複雑な三項演算子は許可しない
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 2,

    // Objectコンストラクタでのオブジェクト生成は許可しない
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 2,

    // `with`文の使用を許可しない
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [2, 'WithStatement'],

    // 関数呼び出しで関数名と`()`の間にスペースや改行を許可しない
    // http://eslint.org/docs/rules/no-spaced-func
    'no-spaced-func': 2,

    // 三項演算子の利用を許容
    // http://eslint.org/docs/rules/no-ternary
    'no-ternary': 0,

    // 行末に不要なスペースを許可しない 空行でも
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 2,

    // 命名で`_`を許容
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 0,

    // 条件式のみで代入できる場合など不要な三項演算子を利用しない
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': 2,

    // オブジェクトリテラルのスペースの入れ方を強制
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [2, 'always'],

    // 変数宣言時に1つの宣言でまとめない
    // http://eslint.org/docs/rules/one-var
    'one-var': [2, 'never'],


    // `x = x + 4`を`x += 4`に
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': [1, 'always'],

    // 複数行に跨ぐ場合演算子の後で改行する
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': [2, 'after'],

    // ブロック内にPadding入れない
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': [2, 'never'],

    // オブジェクトのキー名は使わなくて済む場合はクォートは使わない（予約語は別）
    // http://eslint.org/docs/rules/quote-props
    'quote-props': [2, 'consistent-as-needed', { keywords: true }],

    // シングルクォートを使う
    // http://eslint.org/docs/rules/quotes
    'quotes': [2, 'single', 'avoid-escape'],

    // JSDocコメントなしを許容
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': 0,

    // 必要な場合はセミコロンの後ろにスペースを入れる 前には入れない
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': [2, { before: false, after: true }],

    // セミコロンの省略を許可しない
    // http://eslint.org/docs/rules/semi
    'semi': [2, 'always'],

    // 変数宣言のソートしないのを許容
    // http://eslint.org/docs/rules/sort-vars
    'sort-vars': 0,

    // キーワードの後ろに適切にスペースを入れる
    // http://eslint.org/docs/rules/space-after-keywords
    'space-after-keywords': 2,

    // ブロックの前には適切にスペースを入れる
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': [2, 'always'],

    // functionの`()`の後ろにはスペースを入れない
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [2, 'never'],

    // キーワードの前に適切にスペースを入れる
    // http://eslint.org/docs/rules/space-before-keywords
    'space-before-keywords': [2, 'always'],

    // `()`の両内側にスペースを入れない
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': [2, 'never'],

    // 演算子の前後にはスペースを入れる
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 2,

    // `return`, `throw`, `case`の後ろにはスペースを入れる
    // http://eslint.org/docs/rules/space-return-throw-case
    'space-return-throw-case': 2,

    // 各単項演算子の後ろには適切にスペースを入れる
    // words - applies to unary word operators such as: new, delete, typeof, void, yield
    // nonwords - applies to unary operators such as: -, +, --, ++, !, !!
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [2, { words: true, nonwords: false }],

    // ラインコメント、ブロックコメントそれぞれの前後には適切にスペースを入れる
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [2, 'always', {
      block: {
        exceptions: ['*', '!']
      }
    }],

    // 正規表現リテラルを`()`でラップしないのを許容
    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 0
  }
};
