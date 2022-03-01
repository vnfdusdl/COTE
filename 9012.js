const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `3
((
))
())(()`;

// stdin을 정제(?)하는 과정
const [n, ...arr] = stdin.toString().trim().split('\n');

// 생각하기 
/*
  생각이 안된다면..? 감도 안잡힌다면..? 깡깡~!

  1. '('가 있으면 ')'가 무조건 있어야 한다. '('의 수와 ')'의 수가 같아야 한다 -> 실패~!! ())(() 와 같이 개수가 똑같은 경우가 있다.. 
*/

// 풀이
// console.log(arr[0][1]);


for(let i = 0; i < arr.length; i++) {
  let openBracket = 0;
  let closeBracket = 0;
  for(let j = 0; j < arr[i].length; j++) {
    if(arr[i][j] === '(') {
      openBracket += 1;
    } else if(arr[i][j] === ')') {
      closeBracket += 1;
    }
    if(openBracket < closeBracket) {
      break;
    }
  }
  if(openBracket === closeBracket) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

// MEMO:: ()) 인 순간부터 틀린거니까 break로 나옴 -> 수가 같지 않으니까 당연히 NO 해줌
// MEMO:: stack 알아보기! 선입후출 먼저 들어온 게 나중에 나감 