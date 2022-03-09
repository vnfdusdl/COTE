const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `380`;

// stdin을 정제(?)하는 과정
const input = stdin.toString().trim();

// 풀이 
/*
  500 100 50 10 5 1 
  -> 큰 액수의 동전이 한 단계 작은 액수의 동전의 배수일 경우라서 최적해를 보장한다! 
  -> 그리디 사용 가능 
  
  지불액은 무조건 1000원 
  상품 가격 input 
  잔돈 change 
  예시 
    1000 - 380(input) = 620(change) 
    500엔 1개, 100엔 1개, 10엔 2개 -> 총 4개
*/

/* 
  잔돈을 큰 동전부터 나눠준다 
    -> 동전을 배열에 큰 순대로 넣는다.
    -> [500, 100, 50, 10, 5, 1];
  잔돈을 나눌 때마다 count에 += 해준다. 
  잔돈을 동전으로 나눈 후 나머지값을 잔돈에 다시 할당한다. 
  나머지값을 다음으로 큰 동전으로 나눠준다
  나머지값이 0이 되면 끝난다! 
*/

/* 
  예시 1로 살펴보기
  * 잔돈 620을 가장 큰 동전 500으로 나누기
    -> 620 / 500 = 1.24 
    -> count += 1.24 -> 정수로 만들어야 한다 
    -> parseInt(620 / 500)
    -> count += 1 
    -> count += parseInt(620 / 500)
  * 잔돈을 동전으로 나눈 후 나머지값 구하기 -> %= 연산자 이용 
    -> 620 %= 500 
    -> 120 
  * 잔돈 120을 다음 큰 동전 100으로 나누기 
    -> 120 / 100 = 1.2
    -> count는 2 (parseInt)
  * 잔돈을 동전으로 나눈 후 나머지값 구하기
    -> 120 %= 100
    -> 20
  * 잔돈 20을 다음 큰 동전 50으로 나누기 
    -> 20 / 50 = 0.4
    -> count는 2 (parseInt)
  * 잔돈을 동전으로 나눈 후 나머지값 구하기
    -> 20 %= 100
    -> 20
  * 잔돈 20을 다음 큰 동전 10으로 나누기 
    -> 20 / 10 = 2
    -> count는 4 (parseInt)
  * 잔돈을 동전으로 나눈 후 나머지값 구하기
    -> 20 %= 10
    -> 0
*/

// 풀이 작성
let change = 1000 - input;
const coins = [500, 100, 50, 10, 5, 1];
let count = 0;

for(let i = 0; i < coins.length; i++) {
  if(change === 0) break; 
  count += parseInt(change / coins[i]);
  change %= coins[i];
}

console.log(count);
