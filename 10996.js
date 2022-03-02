const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `2`;

// stdin을 정제(?)하는 과정
const input = stdin.toString().trim();

/* 
  규칙 생각하기
  1. 행의 갯수는 input * 2 
  2. 열의 갯수는 input
  3. 별과 공백의 위치
    -> (1)행이 홀수일 때
            열이 홀수라면 -> 별
            열이 짝수라면 -> 공백
       (2)행이 짝수일 때
            열이 홀수라면 -> 공백
            열이 짝수라면 -> 별 
  4. 열이 끝날 때마다 줄바꿈
*/

// 풀이 작성
let result = '';
//행
for(let i = 0; i < input * 2; i++) {
  if(input == 1) {
    result ='*';
    break;
  }
  //열
  for(let j = 0; j < input; j++) {
    // 행이 짝수
    if(i % 2 == 0) {
      // 열이 짝수 -> 별
      if(j % 2 == 0) {
        result += '*';
      // 열이 홀수 -> 공백 
      } else {
        result += ' ';
      }
    // 행이 홀수  
    } else {
      // 열이 짝수 -> 공백
      if(j % 2 == 0) {
        result += ' ';
      // 열이 홀수 -> 별 
      } else {
        result += '*';
      }
    }
  }
  // 열이 끝날 때 줄바꿈 
  result += '\n';
}
console.log(result);