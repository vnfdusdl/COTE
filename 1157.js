const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `Mississipi`;

// stdin을 정제(?)하는 과정
const input = stdin.toString().trim();

// 생각하기
/*
  ['M', 'I', 'S', 'S', 'I', 'S', 'S', 'I', 'P', 'I']
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  'M' 1
  'I' 4
  'S' 4
  'P' 1

  count를 어떻게 하쥐... 

  1. 대문자 배열과 length가 같은 카운트 배열을 만든다, 배열 요소들의 초기값은 0이다.
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      [0,    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0]
  2. input 배열 요소가 대문자 배열 요소에 있으면 카운트 배열에 1을 더한다 -> 자리가 똑같으니까!! 
      ['M', 'I', 'S', 'S', 'I', 'S', 'S', 'I', 'P', 'I']
      ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      [0,    0,   0,   0,   0,   0,   0,   0,   1,   0,   0,   0,   1,   0,   0,   0,   2,   0,   2,   0,   0,   0,   0,   0,   0,   0]
  3. 카운트 배열의 최댓값을 구한다 
      MEMO:: Math.max, spread문법
  4. 최댓값의 자리(인덱스 번호)를 구한다. 
  5. 그 인덱스에 해당하는 대문자가 뭔지 대문자 배열[인덱스번호]로 구한다. 
      MEMO:: indexOf

  가장 많이 사용된 알파벳이 여러 개인 경우는 어떻게 구별하쥐...
  MEMO:: lastIndexof
*/

const inpArr = input.toUpperCase().split('');
const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const count = [];

for(let i = 0; i < upper.length; i++) {
  count.push(0);
}

for(let i = 0; i < inpArr.length; i++) {
  for(let j = 0; j < upper.length; j++) {
    if(inpArr[i] === upper[j]) {
      count[j] += 1;
    }
  }
}

const max = Math.max(...count); 
const maxIndex = count.indexOf(max);
const maxLastIndex = count.lastIndexOf(max);
const upperValue = upper[maxIndex];

let result;
if(maxIndex !== maxLastIndex) {
  result = '?'
} else {
  result = upperValue;
}
console.log(result);

// MEMO:: 이것도 삼항연산자 쓰기~ 
// MEMO:: 준홍님 코드 참고해서 charCodeAt 사용해보기
// MEMO:: 민찬님 Array.from 뭔지 찾아보기 
// MEMO:: 수영, 초이님 객체 생성... 잘 모르겠땅 ^^ 찾아보기