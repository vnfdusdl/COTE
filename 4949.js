const stdin = process.platform === 'linux' 
? require('fs').readFileSync('/dev/stdin')
: `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`;

// stdin을 정제(?)하는 과정
const input = stdin.toString().trim().split('\n');

// 풀이 
/* 
  1. 일단 stack으로 쓸 빈 배열을 만든다. 
      let stack = [];
  2. input 배열의 각 요소를 돈다. 
  3. ( , [ -> 여는 소괄호, 대괄호가 나오면 stack에 push.
  4. ), ] -> 닫는 소괄호, 대괄호가 나오면 stack에 ( 나 [ 가 있는지 검사한다. 
     있으면 stack에서 pop(마지막 요소 제거)
     없으면 no. 
  5. .(마침표)가 나오면 멈추고 yes. 
  6. stack이 비어있으면 yes -> length가 0.
*/

// 풀이 작성
// let stack;
// for(let i = 0; i < input.length; i++) {
//   for(let j = 0; j < input[i]; j++) {
//     if(input[i][j] === '(' || input[i][j] === '[') stack.push();
//   }
// }
// MEMO:: 이중 for문 말고 map을 써보자! 
// input.map(x => {
//   console.log(`시작${x}`);
// });

// 풀이 작성 2 
// input.map(x => {
//   // 1. 문장 속에 여는 소괄호, 대괄호가 있으면 stack에 넣기 
//   if(x === '(' || x === '[') {
//     stack.push(x);
//     console.log(stack);
//   // 2. 문장 속에 닫는 소괄호가 있는데
//   } else if(x === ')') {
//     // 2-1. stack이 비어있거나 stack의 마지막 요소가 여는 소괄호가 아니라면 균형이 아니다! -> no
//     if(stack.length === 0 || stack[stack.length - 1] !== '(') {
//       console.log('no');
//     } 
//     // 2-2. stack의 마지막 요소를 제거한다. 
//     stack.pop();
//   // 3. 문장 속에 닫는 대괄호가 있는데
//   } else if(x === ']') {
//     // 3-1. stack이 비어있거나 stack의 마지막 요소가 여는 소괄호가 아니라면 균형이 아니다! -> no
//     if(stack.length === 0 || stack[stack.length - 1] !== ']') {
//       console.log('no');
//     }
//     // 3-2. stack의 마지막 요소를 제거한다. 
//     stack.pop();
//   }

//   if(stack.length !== 0) console.log('no');
//   console.log('yes');
// })

// 풀이3 
// for(let i = 0; i < input.length; i++) {
//   for(let j = 0; j < input[i].length; j++) {
//     if(input[i][j] === '(') {
//       stack.push('(');
//     } else if(input[i][j] === '[') {
//       stack.push('[');
//     } else if(input[i][j] === ')') {
//       if(stack.length === 0 || stack[stack.length - 1] !== '(') {
//         console.log('no'); 
//         break;
//       }
//       stack.pop();
//     } else if(input[i][j] === ']') {
//       if(stack.length === 0 || stack[stack.length - 1] !== '[') {
//         console.log('no'); 
//         break;
//       }
//       stack.pop();
//     }
//   }
//   if(stack.length !== 0) {
//     console.log('no'); 
//     break;
//   }
//   console.log('yes');
// }



// 풀이4 
input.map((sentence) => {
  let stack = [];
  let txt = sentence.split('');

  console.log(`sentence: ${sentence}`);
  console.log(`txt: ${txt}`);
  console.log(txt.length);
  console.log(txt[0]);
  
  // MEMO:: return과 break는 차이가 있다. break하면 런타임에러 남 
  if(txt.length === 1 && txt[0] === '.') return;

  txt.map((ele) => {
    if(ele === '(' || ele === '[') {
      stack.push(ele);
      console.log(`열린 괄호는 push → stack: ${stack}`);
    } else if(ele === ')') {
      if(stack[stack.length - 1] === '(') {
        stack.pop();
        console.log(`닫힌 소괄호+stack에 열린 소괄호 있음 → pop → stack: ${stack}`);
      } else {
        stack.push(ele);
        console.log(`닫힌 소괄호+stack에 열린 소괄호 없음 → push → stack: ${stack}`);
      }
    } else if(ele === ']') {
      if(stack[stack.length - 1] === '[') {
        stack.pop();
        console.log(`닫힌 대괄호+stack에 열린 대괄호 있음 → pop → stack: ${stack}`);
      } else {
        stack.push(ele);
        console.log(`닫힌 대괄호+stack에 열린 대괄호 없음 → push → stack: ${stack}`);
      }
    }
  });

  if(stack.length === 0) console.log('yes');
  else console.log('no');
});

//MEMO:: 새 배열이 필요한 게 아니면 map을 쓸 필요가 없다. 위와 같은 상황일 때는 foreach 쓰면 된다.