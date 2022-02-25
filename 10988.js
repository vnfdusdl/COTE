const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `noon`;

// stdin을 정제(?)하는 과정
const input = stdin.toString().trim();

// 생각하기
/* 
  문자열 reverse 하는 법
  문자열.split('').reverse().join('');
  reverse는 배열 메서드이다.
  그래서 문자열을 split으로 배열로 만든 다음에 reverse 해주고 다시 join으로 문자열로 만든다. 
*/

// 풀이 
const input2 = input.split('').reverse().join('');

let result;
if(input === input2) {
  result = '1'
} else {
  result = '0'
}

console.log(result);

// MEMO:: 삼항연산자