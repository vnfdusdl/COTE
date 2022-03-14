const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `2
8 8 
4 8
`;

// stdin을 정제(?)하는 과정
const [n, ...arr] = stdin.toString().trim().split('\n');
// console.log(n);
// console.log(arr);

// 풀이
/* 
  1. 조건  
    [a, b], [c,d] 
    회의 시작 시간이 종료 시간보다 크거나 같아야 한다.
    c는 b보다 크거나 같아야 한다. 
    
    ex) [1, 3], [3, 5] O 
        [1, 4], [6, 12] O 
    
    조건의 기준을 종료 시간으로.

  2. [ [시작 시간, 종료 시간], [시작 시간, 종료 시간], ... [시작 시간, 종료 시간] ] 형태로 만들기 
*/

// [[시작시간, 종료시간]] 형태로 만들기 
let timeArr = arr.map((x) => x.split(' ').map(v => +v));
// console.log(timeArr);

// 오름차순 정렬
/* 
  a와 b의 종료 시간이 같은 경우 
  -> 시작 시간을 기준으로 비교할 수 있게 시작 시간을 오름차순으로 정렬한다.
  같지 않은 경우
  -> 종료 시간을 오름차순으로 정렬한다. 
*/
timeArr.sort((a,b) => {
  if(a[1] === b[1]) { 
    return a[0] - b[0] 
  } else { 
    return a[1] - b[1]; 
  }
});

/* 
  배열에 종료 시간이 빠른 순서대로 들어가 있기 때문에 첫 회의는 배열의 첫 요소이다. 
  첫 회의가 이미 정해진 상태이기 때문에 count의 기본값을 1로 두고 for문도 1부터 시작해야 한다. 
  다음 회의의 시작 시간과 비교할 종료 시간 end도 첫 회의 값으로 할당한다. 
*/
let count = 1; 
let end = timeArr[0][1];

for(let i = 1; i < timeArr.length; i++) { 
  if(end <= timeArr[i][0]) { 
    end = timeArr[i][1]; 
    count += 1; 
  } 
} 

console.log(count);
