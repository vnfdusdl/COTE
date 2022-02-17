// 백준에서는 서버의 stdin 파일에서, 로컬에서는 직접 입력한 문자열에서 입력을 받음
// 이 부분은 들여쓰기 하지 마시고 왼쪽에 딱 붙여서 쓰세요~
const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: ``;

// stdin을 정제(?)하는 과정
const input = stdin.toString().trim();

// 풀이 작성
const result = input.split(' ');
// console.log(result);
if(result[0] === '') {
  result.shift();
}
console.log(result.length);