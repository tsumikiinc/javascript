module.exports = {
  'rules': {
    // 末尾カンマを許可しない
    // レガシーIEを考慮しない場合でもスタイルを揃えるため
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': 2,

    // 制御構文の条件式でtypoと思われる代入は許可しない
    // http://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': 2,

    // `console`の残留を警告
    // http://eslint.org/docs/rules/no-console
    'no-console': 1,

    // 制御構文の条件に定数式を入れるのを許可しない
    // http://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 2,

    // 正規表現での制御文字を許可しない
    // http://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 2,

    // `debugger;`の残留を警告
    // http://eslint.org/docs/rules/no-debugger
    'no-debugger': 1,

    // 同名引数を許可しない
    // http://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 2,

    // キー名の重複を許可しない
    // http://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 2,

    // caseラベルの重複を許可しない
    // http://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 2,

    // 正規表現リテラルで空の文字セットを許可しない
    // http://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 2,

    // ブロック内がカラなのを許可しない
    // http://eslint.org/docs/rules/no-empty
    'no-empty': 2,

    // catch文の受け取るerror引数への再代入を許可しない
    // http://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 2,

    // 複雑すぎるBooleanのキャストを許可しない
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 2,

    // 関数定義、即時関数で不必要な`()`を許可しない
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': [2, 'functions'],

    // 不必要なセミコロンを許可しない
    // http://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 2,

    // 関数宣言で定義した関数への再代入を許可しない
    // http://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 2,

    // ブロック内で関数宣言、`var`による変数宣言を許可しない
    // http://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': [2, 'both'],

    // RegExpコンストラクタで無効な正規表現の文字列を許可しない
    // http://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 2,

    // 不可視文字やZero-widthスペースなどイレギュラーな文字列を許可しない
    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 2,

    // `in`演算子で左のオペランドの否定を許可しない
    // http://eslint.org/docs/rules/no-negated-in-lhs
    'no-negated-in-lhs': 2,

    // 想定されていないビルトインオブジェクトの関数呼び出しを許可しない
    // 具体的にはMathやJSON これらはコンストラクタ関数に見えるため
    // http://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 2,

    // 正規表現リテラルで2文字以上のスペースを許可しない
    // http://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 2,

    // 配列リテラルでイレギュラーなカンマは許可しない => [1, , 2, 3].length // 4
    // http://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 2,

    // 2つの無関係なコードが単一の式として評価されないように適切にセミコロンをうつ
    // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 2,

    // `return`, `throw`, `break`, `continue`文より後ろのコードを許可しない
    // http://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 2,

    // `isNaN()`を利用しない`NaN`との比較を許可しない
    // http://eslint.org/docs/rules/use-isnan
    'use-isnan': 2,

    // 無効なJSDocのコメントを許容
    // http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': 0,

    // `typeof`演算子が有効な文字列と比較されていること
    // http://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 2
  }
};
