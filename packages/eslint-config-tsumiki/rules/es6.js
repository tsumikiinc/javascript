module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'babel'
  ],
  'env': {
    'es6': true
  },
  'ecmaFeatures': {
    'modules': true
  },
  'rules': {
    // Arrow functionのボディ部分の省略できる`{}`は省略する
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-body-style': [2, 'as-needed'],

    // Arrow functionの引数部分の省略できる`()`は省略する
    // http://eslint.org/docs/rules/arrow-parens
    'babel/arrow-parens': [2, 'as-needed'],

    // Arrow functionの`=>`の前後にはスペースを入れる
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 2,

    // `class`の`constructor`で適切に`super`を呼ぶ
    // http://eslint.org/docs/rules/constructor-super
    'constructor-super': 2,

    // Generator functionの`*`の前後のスペースは後ろのみ
    // http://eslint.org/docs/rules/generator-star-spacing
    'babel/generator-star-spacing': [2, 'after'],

    // 制御構文の条件式等でArrow functionを許可しない
    // http://eslint.org/docs/rules/no-arrow-condition
    'no-arrow-condition': 2,

    // クラス宣言の再代入は許可しない
    // http://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 2,

    // `const`変数（定数）への再代入を許可しない
    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 2,

    // クラスのメンバ変数やメソッド、スタティック変数の名前の重複を許可しない
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 2,

    // クラスで`super`を呼ぶ前に`this`を触らない
    // http://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 2,

    // `var`での変数宣言を許可しない
    // http://eslint.org/docs/rules/no-var
    'no-var': 2,

    // オブジェクトリテラルのプロパティやメソッドの定義は可能な限り
    // ショートハンドを利用する
    // http://eslint.org/docs/rules/object-shorthand
    'babel/object-shorthand': [2, 'always'],

    // 可能な限りコールバック関数はArrow functionで渡す
    // http://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 1,

    // 再代入のない変数は`const`を利用する
    // http://eslint.org/docs/rules/prefer-const
    'prefer-const': 2,

    // http://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 0,

    // `apply()`ではなくSpread演算子を利用する
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 2,

    // 文字列結合はテンプレートリテラルを利用する
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 2,

    // `yield`を持っていないGenerator functionを許可しない
    // http://eslint.org/docs/rules/require-yield
    'require-yield': 2
  }
};
