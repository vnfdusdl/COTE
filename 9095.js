const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `3
4
7
10`;

const [n, ...arr] = stdin.toString().trim().split('\n').map(x => +x);

const dp = [0, 1, 2, 4];

for(let i = 4; i < 11; i++) {
  dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
}

for(let i = 0; i < arr.length; i++) {
  console.log(dp[arr[i]]);
}
