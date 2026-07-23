<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ko_KR">
<context>
    <name>ConfigWidget</name>
    <message>
        <source>Math expression evaluator based on the powerful qalculate library. See the [Qalculate! docs](https://qalculate.github.io/manual/index.html).

The global handler evaluates basic math expressions. Use the trigger handler to enable the full feature set.</source>
        <translation>강력한 qalculate 라이브러리를 기반으로 한 수학 표현식 평가 도구입니다. [Qalculate! 문서](https://qalculate.github.io/manual/index.html)를 참조하세요.

글로벌 핸들러는 기본 수학 표현식을 평가합니다. 전체 기능을 활성화하려면 트리거 핸들러를 사용하세요.</translation>
    </message>
    <message>
        <source>Angle unit:</source>
        <translation>각도 단위:</translation>
    </message>
    <message>
        <source>The angle unit for trigonometric functions.</source>
        <translation>삼각 함수의 각도 단위입니다.</translation>
    </message>
    <message>
        <source>None</source>
        <translation>없음</translation>
    </message>
    <message>
        <source>Radian</source>
        <translation>라디안</translation>
    </message>
    <message>
        <source>Degree</source>
        <translation>도</translation>
    </message>
    <message>
        <source>Gradian</source>
        <translation>그라디안</translation>
    </message>
    <message>
        <source>Parsing mode:</source>
        <translation>구문 분석 모드:</translation>
    </message>
    <message>
        <source>&lt;p&gt;In the &lt;/b&gt;implicit multiplication first&lt;/b&gt; parse mode, implicit multiplication is parsed before explicit multiplication, i.e. 12/2(1+2) = 12/(2*3) = 2. &lt;/p&gt;
&lt;p&gt;In the &lt;/b&gt;conventional&lt;/b&gt; parse mode implicit multiplication does not differ from explicit multiplication, i.e. 12/2(1+2) = 12/2*3 = 18.&lt;/p&gt;
&lt;p&gt;The &lt;/b&gt;adaptive&lt;/b&gt; parse mode works as the implicit multiplication first mode, unless spaces are found. I.e. 1/5x = 1/(5*x), but 1/5 x = (1/5)*x. In the adaptive mode unit expressions are parsed separately 5 m/5 m/s = (5*m)/(5*(m/s)) = 1 s.&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;/b&gt;암시적 곱셈 우선&lt;/b&gt; 구문 분석 모드에서는 암시적 곱셈이 명시적 곱셈보다 먼저 분석됩니다. 즉, 12/2(1+2) = 12/(2*3) = 2입니다.&lt;/p&gt;
&lt;p&gt;&lt;/b&gt;관습적&lt;/b&gt; 구문 분석 모드에서는 암시적 곱셈이 명시적 곱셈과 다르지 않습니다. 즉, 12/2(1+2) = 12/2*3 = 18입니다.&lt;/p&gt;
&lt;p&gt;&lt;/b&gt;적응형&lt;/b&gt; 구문 분석 모드는 공백이 발견되지 않는 한 암시적 곱셈 우선 모드로 작동합니다. 즉, 1/5x = 1/(5*x)이지만 1/5 x = (1/5)*x입니다. 적응형 모드에서는 단위 표현식이 별도로 분석됩니다: 5 m/5 m/s = (5*m)/(5*(m/s)) = 1 s.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Adaptive</source>
        <translation>적응형</translation>
    </message>
    <message>
        <source>Implicit multiplication first</source>
        <translation>암시적 곱셈 우선</translation>
    </message>
    <message>
        <source>Conventional</source>
        <translation>관습적</translation>
    </message>
    <message>
        <source>Precision:</source>
        <translation>정밀도:</translation>
    </message>
    <message>
        <source>Precision for approximate calculations.</source>
        <translation>근사 계산을 위한 정밀도.</translation>
    </message>
    <message>
        <source>Functions in global query</source>
        <translation>글로벌 쿼리의 함수</translation>
    </message>
    <message>
        <source>Units in global query</source>
        <translation>글로벌 쿼리의 단위</translation>
    </message>
</context>
<context>
    <name>Plugin</name>
    <message>
        <source>&lt;math expression&gt;</source>
        <translation>&lt;수학 표현식&gt;</translation>
    </message>
    <message>
        <source>Copy result to clipboard</source>
        <translation>결과를 클립보드에 복사</translation>
    </message>
    <message>
        <source>Copy equation to clipboard</source>
        <translation>수식을 클립보드에 복사</translation>
    </message>
    <message>
        <source>Result of %1</source>
        <translation>%1의 결과</translation>
    </message>
    <message>
        <source>Approximate result of %1</source>
        <translation>%1의 근사 결과</translation>
    </message>
    <message>
        <source>Evaluation error.</source>
        <translation>평가 오류.</translation>
    </message>
    <message>
        <source>Visit documentation</source>
        <translation>문서 방문</translation>
    </message>
</context>
</TS>
