const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `5
3 1 4 3 2`;

const [n, ...arr] = stdin.toString().trim().split(/\s+/).map(v => +v);

// 풀이
/* 
  arr 
  [ '3', '1', '4', '3', '2' ]
  
  최솟값을 출력해야 한다
  -> 시간이 짧은 순서대로 재정렬한다. 
  -> 오름차순 정렬 sort((a,b) => a-b))
      [ '1', '2', '3', '3', '4' ] 

  1 -> 1
  1+2 -> 3 
  1+2+3 -> 6
  1+2+3+3 -> 9
  1+2+3+3+4 -> 13
              => 32

  더하기 누적 += 더하기 할당 사용하기 
*/

// 풀이 작성
let result = 0;
let sum = 0;
arr.sort((a,b) => a-b);
// console.log(arr);
for(let i = 0; i < arr.length; i++) {
  sum += arr[i];
  result += sum;
}


console.log(result);

