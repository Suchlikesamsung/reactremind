# reactremind
리액트를 되새김질 중입니다.

# 2023-08-01
1. import 와 export의 사용처

- import는 트리쉐이킹을 통해 원하는 컴포넌트를 가져올때 사용한다.
- export는 atoms 단위의 컴포넌트를 내보낼때 사용한다

2. Fragment

- 리액트가 반환해야하는 하나의 최상위 요소를 반환해야하는데 여러개의 요소를 반환해야할때 사용한다. <></> 이런 형태다

# 8월 2일은 출장때문에 ㅂ2

# 2023-08-03
1. Props

- Props는 다른 컴포넌트에 담긴 속성을 다른 컴포넌트에 전달하기 위한것이다
이를 props라고 부른다. Props는 주는 쪽에서 데이터의 값들을 정하여 데이터를 
전달하면 표현하고자 하는 컴포넌트에서 props.title 같은 형태로 받아야한다.
왜냐하면 전달하는 데이터는 하나의 객체이기 때문이다. ★ 중요
- Props 전체를 컴포넌트가 받아도 되지만 객체분해할당으로 필요한 파라미터를 선별하여 할당할 수 도 있다. 이는 전달받는 데이터가 객체이기에 가능하다.

# 8월 5,6일은 주말인 관계로 ㅂ2(주말에 하루라도 해보도록 노력하겠읍니다.)

# 2023-08-07
1. 제너릭과 any

- 타입스크립트를 사용할때 아무런 타입을 받고자 한다면 인수에 any를 선언하면 어떠한 타입의 인수도 들어올수있다. 하지만 이를 그리 추천하는 방법이 아닌데
타입의 안전성을 잃을 수 있고 타입스크립트의 사용 이유를 잃는것이다.
그렇기에 우린 가급적 any 타입의 사용을 피하고 안정성을 유지하는것이 좋다.
그래서 우린 제너릭 타입을 선언한다.
제너릭은 타입의 안정성을 높히고 재사용성과 타입의 정보를 더욱 명확하게 전달 할 수있다. 만약 클래스 같은 코드의 일반화를 유도하고 싶다면 아래의 코드를 참조하자.

1-2. 제너릭의 사용 예시

function anyTypeFunction(arg: any): any {
  return arg;
}

우린 이 함수의 리턴타입이 어떤것인지 유추 할 수 없다. any로 들어왔기에 타입의
정보가 유실되었으며 리턴값에도 타입을 알수없게 된다.

function genericFunction<T>(arg: T): T {
  return arg;
}

위 코드는 인수의 타입을 들어오는 타입으로 맞추어 주며 타입의 정보를 기억하고
돌려줄떄 또한 타입의 정보가 보존된다.

2. 코드스플릿

- 컴포넌트의 재사용성을 위해선 기능 단위로 나누는것이 좋다. 실제로 그 행위가 좋은지 안좋은지는 프로젝트의 상황 규모와 컴포넌트의 동작 단위마다 다르겠지만
말하고자 하는 바는 일반적인 상황에서다. 코드를 스플릿하여 컴포넌트를 나눌땐
컴포넌트의 작명은 파스칼 케이스를 따르는것이 일반적이다.

# 2023-08-08

공부한거 푸시해서 형상에는 반영해놨는데 딱히 적을 내용은 없었음.

# 2023-08-09

오늘도 딱히 강의 중에 곱씹거나 처음보는 등 기록할만한 내용은 없음
그래도 막상 컴포넌트를 하나하나 구축하다보니 옛날 생각이 무럭 무럭 나는중



각 항목별 자세한 이야기는 블로그를 참조 

<a href="https://imverygroot.tistory.com/">블로그 바로가기</a>