module.exports = {
  'rules': {
    // http://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 0,

    // http://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 2,

    // http://eslint.org/docs/rules/complexity
    'complexity': 0,

    // http://eslint.org/docs/rules/consistent-return
    'consistent-return': 2,

    // 制御構文では必ずブロックを作る
    // http://eslint.org/docs/rules/curly
    'curly': 2,

    // switch文のdefault caseを必須とする
    // http://eslint.org/docs/rules/default-case
    'default-case': 2,

    // オブジェクトのプロパティ、メソッド呼び出し時の`.`の位置を強制
    // 詳細は以下
    // http://eslint.org/docs/rules/dot-location
    'dot-location': [2, 'property'],

    // http://eslint.org/docs/rules/dot-notation
    'dot-notation': [2, { allowKeywords: true }],

    // 厳密比較を強制
    // `null`相当との比較には`==`と`!=`を許容する
    // http://eslint.org/docs/rules/eqeqeq
    'eqeqeq': [2, 'allow-null'],

    // `for in`で自身のプロパティかの未チェックを警告
    // http://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 1,

    // `arguments.caller`, `arguments.callee`の使用を警告
    // http://eslint.org/docs/rules/no-caller
    'no-caller': 1,

    // `switch`文内では適切にブロックをつくる
    // http://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 2,

    // http://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 0,

    // `if else`文で無用な`else if`や`else`内での`return`を許可せず複雑さを避ける
    // http://eslint.org/docs/rules/no-else-return
    'no-else-return': 2,

    // http://eslint.org/docs/rules/no-empty-label
    'no-empty-label': 2,

    // `null`相当との比較時のため許容
    // http://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 0,

    // `eval`の使用を許可しない
    // http://eslint.org/docs/rules/no-eval
    'no-eval': 2,

    // ネイティブオブジェクトの拡張を許可しない
    // http://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 2,

    // 不要な`.bind()`の使用を許可しない
    // http://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 2,

    // http://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 2,

    // http://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 2,

    // http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 0,

    // `setTimeout`, `setInterval`で文字列でコールバックを渡すことを許可しない
    // http://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 2,

    // http://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 0,

    // http://eslint.org/docs/rules/no-iterator
    'no-iterator': 2,

    // http://eslint.org/docs/rules/no-labels
    'no-labels': 2,

    // http://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 2,

    // ループ内での関数の利用を許可しない
    // http://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 2,

    // マルチスペースは許可しない
    // http://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 2,

    // http://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 2,

    // ネイティブオブジェクトへの再代入を許可しない
    // http://eslint.org/docs/rules/no-native-reassign
    'no-native-reassign': 2,

    // Functionコンストラクタでの関数の生成は許可しない
    // http://eslint.org/docs/rules/no-new-func
    'no-new-func': 2,

    // 代入のしない`new`演算子によるコンストラクタ関数の実行をを許可しない
    // http://eslint.org/docs/rules/no-new
    'no-new': 2,

    // プリミティブ値を`new`キーワードを用いたコンストラクタでの生成を許可しない
    // http://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 2,

    // http://eslint.org/docs/rules/no-octal
    'no-octal': 2,

    // http://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 2,

    // 引数の再代入を許容
    // http://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 0,

    // `process.env`の利用を許容
    // http://eslint.org/docs/rules/no-process-env
    'no-process-env': 0,

    // `__propo__`の利用を許可しない
    // http://eslint.org/docs/rules/no-proto
    'no-proto': 2,

    // 同じ変数名の再宣言を許可しない
    // 合わせてビルトイングローバル変数への再代入も許可しない
    // http://eslint.org/docs/rules/no-redeclare
    'no-redeclare': [2, { builtinGlobals: true }],

    // http://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 2,

    // http://eslint.org/docs/rules/no-script-url
    'no-script-url': 2,

    // 自身での比較を許可しない
    // `NaN`は適切に`isNaN`で比較する
    // http://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 2,

    // あまり一般的ではないためカンマ演算子の使用を許可しない
    // http://eslint.org/docs/rules/no-sequences
    'no-sequences': 2,

    // `throw`で投げられるものを強制
    // http://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 2,

    // 不必要な`call`, `apply`の利用を許可しない
    // http://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 2,

    // `void`演算子の利用を許容
    // http://eslint.org/docs/rules/no-void
    'no-void': 0,

    // http://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 0,

    // `with`文の利用を許可しない
    // http://eslint.org/docs/rules/no-with
    'no-with': 2,

    // 不必要な文字列、テンプレートリテラルの結合を許可しない
    // http://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 2,

    // `parseInt`は第2引数に基数を指定して利用する
    // http://eslint.org/docs/rules/radix
    'radix': 2,

    // `var`の宣言場所を上部以外も許容
    // http://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 0,

    // 即時関数は`()`でラップし、外側に`()`で実行する
    // http://eslint.org/docs/rules/wrap-iife
    'wrap-iife': [2, 'inside'],

    // http://eslint.org/docs/rules/yoda
    'yoda': 2
  }
};
