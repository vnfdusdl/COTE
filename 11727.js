const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `12`;

// stdin을 정제(?)하는 과정
const n = stdin.toString().trim();

const dp = [0, 1, 3, 5, 11];

for(let i = 5; i <= n; i++) {
  dp[i] = (dp[i-1] + dp[i-2]*2) % 10007;
}

// 풀이 작성
console.log(dp[n]);