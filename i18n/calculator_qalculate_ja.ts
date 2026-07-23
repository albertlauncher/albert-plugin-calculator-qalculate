<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ja_JP">
<context>
    <name>ConfigWidget</name>
    <message>
        <source>Math expression evaluator based on the powerful qalculate library. See the [Qalculate! docs](https://qalculate.github.io/manual/index.html).

The global handler evaluates basic math expressions. Use the trigger handler to enable the full feature set.</source>
        <translation>強力な qalculate ライブラリに基づいた数式評価ツールです。[Qalculate! ドキュメント](https://qalculate.github.io/manual/index.html)をご覧ください。

グローバルハンドラは基本的な数式を評価します。全機能を有効にするにはトリガーハンドラをご使用ください。</translation>
    </message>
    <message>
        <source>Angle unit:</source>
        <translation>角度単位：</translation>
    </message>
    <message>
        <source>The angle unit for trigonometric functions.</source>
        <translation>三角関数の角度単位。</translation>
    </message>
    <message>
        <source>None</source>
        <translation>なし</translation>
    </message>
    <message>
        <source>Radian</source>
        <translation>ラジアン</translation>
    </message>
    <message>
        <source>Degree</source>
        <translation>度</translation>
    </message>
    <message>
        <source>Gradian</source>
        <translation>グラジアン</translation>
    </message>
    <message>
        <source>Parsing mode:</source>
        <translation>解析モード：</translation>
    </message>
    <message>
        <source>&lt;p&gt;In the &lt;/b&gt;implicit multiplication first&lt;/b&gt; parse mode, implicit multiplication is parsed before explicit multiplication, i.e. 12/2(1+2) = 12/(2*3) = 2. &lt;/p&gt;
&lt;p&gt;In the &lt;/b&gt;conventional&lt;/b&gt; parse mode implicit multiplication does not differ from explicit multiplication, i.e. 12/2(1+2) = 12/2*3 = 18.&lt;/p&gt;
&lt;p&gt;The &lt;/b&gt;adaptive&lt;/b&gt; parse mode works as the implicit multiplication first mode, unless spaces are found. I.e. 1/5x = 1/(5*x), but 1/5 x = (1/5)*x. In the adaptive mode unit expressions are parsed separately 5 m/5 m/s = (5*m)/(5*(m/s)) = 1 s.&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;/b&gt;暗黙の乗算を優先&lt;/b&gt;解析モードでは、暗黙の乗算は明示的な乗算より先に解析されます。つまり、12/2(1+2) = 12/(2*3) = 2 です。&lt;/p&gt;
&lt;p&gt;&lt;/b&gt;従来&lt;/b&gt;解析モードでは、暗黙の乗算は明示的な乗算と同一に扱われます。つまり、12/2(1+2) = 12/2*3 = 18 です。&lt;/p&gt;
&lt;p&gt;&lt;/b&gt;適応的&lt;/b&gt;解析モードは、スペースが見つからない限り暗黙の乗算を優先モードとして動作します。つまり、1/5x = 1/(5*x) ですが、1/5 x = (1/5)*x です。適応モードでは単位式が別々に解析されます: 5 m/5 m/s = (5*m)/(5*(m/s)) = 1 s。&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Adaptive</source>
        <translation>適応的</translation>
    </message>
    <message>
        <source>Implicit multiplication first</source>
        <translation>暗黙の乗算を優先</translation>
    </message>
    <message>
        <source>Conventional</source>
        <translation>従来</translation>
    </message>
    <message>
        <source>Precision:</source>
        <translation>精度：</translation>
    </message>
    <message>
        <source>Precision for approximate calculations.</source>
        <translation>近似計算の精度。</translation>
    </message>
    <message>
        <source>Functions in global query</source>
        <translation>グローバルクエリの関数</translation>
    </message>
    <message>
        <source>Units in global query</source>
        <translation>グローバルクエリの単位</translation>
    </message>
</context>
<context>
    <name>Plugin</name>
    <message>
        <source>&lt;math expression&gt;</source>
        <translation>&lt;数式&gt;</translation>
    </message>
    <message>
        <source>Copy result to clipboard</source>
        <translation>結果をクリップボードにコピー</translation>
    </message>
    <message>
        <source>Copy equation to clipboard</source>
        <translation>数式をクリップボードにコピー</translation>
    </message>
    <message>
        <source>Result of %1</source>
        <translation>%1 の結果</translation>
    </message>
    <message>
        <source>Approximate result of %1</source>
        <translation>%1 の近似結果</translation>
    </message>
    <message>
        <source>Evaluation error.</source>
        <translation>評価エラー。</translation>
    </message>
    <message>
        <source>Visit documentation</source>
        <translation>ドキュメントを表示</translation>
    </message>
</context>
</TS>
