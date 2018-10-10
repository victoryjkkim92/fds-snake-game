import {ROWS, COLS} from './config';

// NOTE: ROWS, COLS에는 행의 개수, 열의 개수가 저장되어 있습니다.
// 이 변수를 활용해서 코드를 작성하세요!

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  // 배열 앞쪽이 머리, 뒤쪽이 꼬리
  this.joints = [
    {x: 5, y: 0},
    {x: 4, y: 0},
    {x: 3, y: 0},
    {x: 2, y: 0},
    {x: 1, y: 0},
  ];

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
  
 //  화살표 키를 누르지 않아도 주기적으로 뱀이 움직이도록 만들어보세요. (힌트: 방금 전에 무슨 키를 눌렀더라..?)
  this.direction = "";
}


//  화살표 키를 눌렀을 때 뱀이 움직이도록 만들어보세요.

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  this.direction = 'up';
  console.log('up');
}

SnakeGameLogic.prototype.down = function () {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "down";
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  this.direction = "left";
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  this.direction = 'right';
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  let newHead;
  let newFruit;

//  화살표 키를 눌렀을 때 뱀이 자연스럽게 움직이도록 만들어보세요. (힌트: 꼬리를 떼서 머리 앞에 갖다붙이면..?)
  if (this.direction === 'up'){
    newHead = { 
    x: this.joints[0].x, 
    y: this.joints[0].y - 1 
   }
  } else if (this.direction ===  'down'){
    newHead = {
    x: this.joints[0].x, 
    y: this.joints[0].y + 1 
   }
  } else if (this.direction === 'right'){
    newHead = {
    x: this.joints[0].x + 1, 
    y: this.joints[0].y 
   }
  } else if (this.direction === 'left') {
    newHead = {
    x: this.joints[0].x - 1,
    y: this.joints[0].y
    }
  }

  //  뱀의 머리가 벽에 부딪혔을 때 게임이 끝나게 만들어보세요.
  // -> 머리의 y좌표가 row(열)이랑 같거나 클때, 0보다 작을때 | 머리의 x가 행보다 크거나 같을때, 0보다 작을때
  if (newHead.y >= ROWS || newHead.y < 0 || newHead.x >= COLS || newHead.x < 0 || 
    //  뱀의 머리가 자기 몸에 부딪혔을 때 게임이 끝나도록 만들어보세요.
    // -> 배열 안의 요소들 중에 조건을 만족하는 요소가 있는지 체크해봄 : 화살표 함수 사용
    this.joints.some(joint => joint.x === newHead.x && joint.y === newHead.y)) {
    return false;
  }
  //  먹이를 먹었을 때 뱀의 길이가 늘어나게 만들어보세요. (힌트: 꼬리를 떼지 않으면..?)
  if (!(newHead.x === this.fruit.x && newHead.y === this.fruit.y)) {
      // 먹이의 좌표와 뱀머리의 좌표가 같을 때가 아닐땐 꼬리를 때고!
    this.joints.pop();
  } else {
    //  먹이를 먹었을 때 다른 곳에 먹이가 생성되게 만들어보세요. 
    newFruit = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
    this.fruit = newFruit;
  }
  this.joints.unshift(newHead);
  
  
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  return true;
}

export default SnakeGameLogic;





//  설정 파일(config.js)를 편집해 게임 난이도를 바꾸어보세요.

// 도전 과제: 

