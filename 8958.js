// 백준에서는 서버의 stdin 파일에서, 로컬에서는 직접 입력한 문자열에서 입력을 받음
// 이 부분은 들여쓰기 하지 마시고 왼쪽에 딱 붙여서 쓰세요~
const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`;

// stdin을 정제(?)하는 과정
const [n, ...arr] = stdin.toString().trim().split('\n');

// 생각하기

/* 
오우.. 이미 stdin을 정제하는 과정에서 테스트 숫자와 문자열이 나눠졌다.... 걍 바로 n, arr 갖다쓰면 된다
// console.log(n);
// console.log(arr);
// [
//   'OOXXOXXOOO',
//   'OOXXOOXXOO',
//   'OXOXOXOXOXOXOX',
//   'OOOOOOOOOO',
//   'OOOOXOOOOXOOOOX'
// ]
배열 각 요소의 내용(OX)중에 O만 구별해야 하니까 배열의 요소의 한글자씩 접근해서 확인하기 
console.log(arr[0][2] === 'O'); 
if문으로 조건 만들기 
if(arr[i][j] === 'O') // 일 때 score가 1씩 증가 
score가 1씩 증가한 값이 있을 때만 sum에 더해주기 

score가 1씩 증가되게 하기 -> 증감 연산자
ex) n = 10; n++ -> n = n +1 -> 11 = 10 +1 
let score = 0;
if(x[0][0] === 'O') score++ // 1
if(x[0][1] === 'O') score++ // 2
if(x[0][2] === 'O') score++ // undefinded
else 인 경우 score를 다시 초기값으로 
*/


// 답안
for(let i = 0; i < n; i++) {
  let sum = 0;
  let score = 0;
  for(let j = 0; j < arr[i].length; j++) {
    if(arr[i][j] === 'O') {
      score++;
      sum += score;
    } else {
      score = 0;
    }
  }
  console.log(sum);
}
