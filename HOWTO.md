## 백준에서 문제 풀기
<hr>
1. js파일을 하나 만들고 아래와 같이 작성한다.<br>
백준에서는 서버의 stdin 파일에서, 로컬에서는 직접 입력한 문자열에서 입력을 받음 <br>
이 부분은 들여쓰기 하지 마시고 왼쪽에 딱 붙여서 쓰세요~

```javascript
const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `입력값 예시`;

// stdin을 정제(?)하는 과정
const input = stdin.toString().trim();

// 풀이 작성
console.log(input);
```
<br>
2. 코드가 정상적으로 작동하는지 확인하기 위해 예시 입력값을 작성한다. (백준 예제 입력 예시 그대로 복사해서 넣는 것 추천) 

<br>
3. 터미널에서 node 파일이름.js로 파일을 실행하고, 결과를 확인한다. (복잡한 문제일수록 stdin에 여러 가지 넣어보면서 확인해본다)
(Node.js가 설치되어 있어야 합니다!) 

<br>
4. 이 코드가 답이 맞는 것 같으면 js파일에 있는 코드를 복사해서 백준 풀이에 입력 후 제출한다.
언어는 node.js로 설정하면 된다.

```javascript
const input = stdin.toString().trim();
```

<br><br>
*참고

위 코드에서 input은 입력 전체를 받은 문자열이다.
그러나 문제에 따라서 입력의 형태가 다양하기 때문에 아래의 코드를 참고해서 상황에 맞게 변경하면 된다.
```javascript
// 1. 하나의 값을 입력받을 때
const input = stdin.toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = stdin.toString().trim().split(' ');

// 3. 여러 줄의 값들을 입력받을 때
const input = stdin.toString().trim().split('\n');

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const [n, ...arr] = stdin.toString().trim().split(/\s+/);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const [n, ...arr] = stdin.toString().trim().split('\n');

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const input = stdin.toString().trim().split(/\s+/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

// 2~6에서 입력받는 값들을 모두 String에서 Number로 바꾸려면 split()뒤에 .map(v => +v)를 추가
```

