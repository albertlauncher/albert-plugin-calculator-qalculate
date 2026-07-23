<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>ConfigWidget</name>
    <message>
        <source>Math expression evaluator based on the powerful qalculate library. See the [Qalculate! docs](https://qalculate.github.io/manual/index.html).

The global handler evaluates basic math expressions. Use the trigger handler to enable the full feature set.</source>
        <translation>基于强大的 qalculate 库的数学表达式求值工具。请参阅 [Qalculate! 文档](https://qalculate.github.io/manual/index.html)。

全局处理器求值基本数学表达式。使用触发器处理器以启用完整功能集。</translation>
    </message>
    <message>
        <source>Angle unit:</source>
        <translation>角度单位：</translation>
    </message>
    <message>
        <source>The angle unit for trigonometric functions.</source>
        <translation>三角函数的角度单位。</translation>
    </message>
    <message>
        <source>None</source>
        <translation>无</translation>
    </message>
    <message>
        <source>Radian</source>
        <translation>弧度</translation>
    </message>
    <message>
        <source>Degree</source>
        <translation>度</translation>
    </message>
    <message>
        <source>Gradian</source>
        <translation>百分度</translation>
    </message>
    <message>
        <source>Parsing mode:</source>
        <translation>解析模式：</translation>
    </message>
    <message>
        <source>&lt;p&gt;In the &lt;/b&gt;implicit multiplication first&lt;/b&gt; parse mode, implicit multiplication is parsed before explicit multiplication, i.e. 12/2(1+2) = 12/(2*3) = 2. &lt;/p&gt;
&lt;p&gt;In the &lt;/b&gt;conventional&lt;/b&gt; parse mode implicit multiplication does not differ from explicit multiplication, i.e. 12/2(1+2) = 12/2*3 = 18.&lt;/p&gt;
&lt;p&gt;The &lt;/b&gt;adaptive&lt;/b&gt; parse mode works as the implicit multiplication first mode, unless spaces are found. I.e. 1/5x = 1/(5*x), but 1/5 x = (1/5)*x. In the adaptive mode unit expressions are parsed separately 5 m/5 m/s = (5*m)/(5*(m/s)) = 1 s.&lt;/p&gt;</source>
        <translation>&lt;p&gt;在 &lt;/b&gt;隐式乘法优先&lt;/b&gt;解析模式中，隐式乘法在显式乘法之前解析，即 12/2(1+2) = 12/(2*3) = 2。&lt;/p&gt;
&lt;p&gt;在 &lt;/b&gt;常规&lt;/b&gt;解析模式中，隐式乘法与显式乘法没有区别，即 12/2(1+2) = 12/2*3 = 18。&lt;/p&gt;
&lt;p&gt;&lt;/b&gt;自适应&lt;/b&gt;解析模式在未发现空格时作为隐式乘法优先模式工作。即 1/5x = 1/(5*x)，但 1/5 x = (1/5)*x。在自适应模式中，单位表达式被单独解析：5 m/5 m/s = (5*m)/(5*(m/s)) = 1 s。&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Adaptive</source>
        <translation>自适应</translation>
    </message>
    <message>
        <source>Implicit multiplication first</source>
        <translation>隐式乘法优先</translation>
    </message>
    <message>
        <source>Conventional</source>
        <translation>常规</translation>
    </message>
    <message>
        <source>Precision:</source>
        <translation>精度：</translation>
    </message>
    <message>
        <source>Precision for approximate calculations.</source>
        <translation>近似计算的精度。</translation>
    </message>
    <message>
        <source>Functions in global query</source>
        <translation>全局查询中的函数</translation>
    </message>
    <message>
        <source>Units in global query</source>
        <translation>全局查询中的单位</translation>
    </message>
</context>
<context>
    <name>Plugin</name>
    <message>
        <source>&lt;math expression&gt;</source>
        <translation>&lt;数学表达式&gt;</translation>
    </message>
    <message>
        <source>Copy result to clipboard</source>
        <translation>将结果复制到剪贴板</translation>
    </message>
    <message>
        <source>Copy equation to clipboard</source>
        <translation>将方程复制到剪贴板</translation>
    </message>
    <message>
        <source>Result of %1</source>
        <translation>%1 的结果</translation>
    </message>
    <message>
        <source>Approximate result of %1</source>
        <translation>%1 的近似结果</translation>
    </message>
    <message>
        <source>Evaluation error.</source>
        <translation>求值错误。</translation>
    </message>
    <message>
        <source>Visit documentation</source>
        <translation>查看文档</translation>
    </message>
</context>
</TS>
