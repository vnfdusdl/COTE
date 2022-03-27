const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `6
10
20
15
25
10
20`;

// stdin을 정제(?)하는 과정
const [n, ...arr] = stdin.toString().trim().split(/\s+/).map(x => +x);

const dp = Array(n);
dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1]);
dp[2] = Math.max(arr[1] + arr[2], arr[0] + arr[2]);

for(let i = 3; i <= n; i++) {
  dp[i] = Math.max(dp[i-3] + arr[i-1] + arr[i], dp[i-2] + arr[i]);
}

// 풀이 작성
// console.log(arr);
console.log(dp[n-1]);