const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `10 500
93 181 245 214 315 36 185 138 216 295`;

// stdin을 정제(?)하는 과정
const input = stdin.toString().trim().split(/\s+/).map(v => +v);
const m = input[1];
const arr = input.slice(2);

/* 
  정인이 블랙잭 규칙
  1. N장의 카드가 있다. 
  2. 숫자 M이 주어진다.
  3. N장의 카드 중에서 3장의 카드로 M가 가장 가까운 합을 만든다. 
  4. 합이 M을 넘어선 안된다. 

  입력값 
  - 카드개수 M
  - 카드에 쓰여진 수 
*/

/* 
  생각해!! 
  1. for문을 돌려서 경우의 수 전부 계산하기! 
    sum = arr[0] + arr[1] + arr[2]
    sum = arr[0] + arr[1] + arr[3]... 
  2. 인덱스값으로 카드를 구별해주면 된다. 
  3. 인덱스값을 뽑기 위해 for문도 3개가 필요하다. 
  4. sum 중에서 m보다 작거나 같은 애들만 새로운 배열에 push한다.
  5. 그 배열에서 최댓값을 구한다. 
  
  추가!! 
  동일한 카드를 뽑으면 안된다! 
  sum = arr[0] + arr[0] + arr[0] 노노1! 
*/

// 풀이 작성
console.log(input);

let result = 0;
let max = [];
let sum = 0;
for(let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr.length; j++) {
    for(let k = 0; k < arr.length; k++) {
      if(i == j || i == k || j == k) {
        break;
      }
      sum = arr[i] + arr[j] + arr[k];
      if(sum <= m) {
        max.push(sum);
      }
    }
  }
}
result = Math.max(...max);

console.log(m);
console.log(arr);
console.log(max);
console.log(result);