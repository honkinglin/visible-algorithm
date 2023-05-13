import { initCanvas } from '@/utils';
import { animateCache } from '@/config/animate'

const digit = [
  [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
  ], //0
  [
    [0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
  ], //1
  [
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ], //2
  [
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
  ], //3
  [
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1],
  ], //4
  [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
  ], //5
  [
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
  ], //6
  [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
  ], //7
  [
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
  ], //8
  [
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
  ], //9
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ], //:
];

let RADIUS = 8;
let MARGIN_TOP = 24;
let MARGIN_LEFT = 24;

let CANVAS_WIDTH = 1280;
let CANVAS_HEIGHT = 720;

// let endTime = new Date();
// endTime.setTime(endTime.getTime() + 3600 * 1000);
let currentShowTimeSeconds = 0;
const balls: any[] = [];

let ctx: CanvasRenderingContext2D;

const colors = [
  "#33B5E5",
  "#0099CC",
  "#AA66CC",
  "#9933CC",
  "#99CC00",
  "#669900",
  "#FFBB33",
  "#FF8800",
  "#FF4444",
  "#CC0000",
];

export default function CountDown() {
  const { canvas } = initCanvas();

  CANVAS_WIDTH = canvas.width;
  CANVAS_HEIGHT = canvas.height;

  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  MARGIN_LEFT = Math.round(CANVAS_WIDTH / 10);
  MARGIN_TOP = Math.round(CANVAS_HEIGHT / 5);
  RADIUS = Math.round((CANVAS_WIDTH * 4) / 5 / 108) - 1;

  currentShowTimeSeconds = getCurrentTimeSeconds();

  animate();
}

function getCurrentTimeSeconds() {
  const currentTime = new Date();
  const ret =
    currentTime.getHours() * 3600 +
    currentTime.getMinutes() * 60 +
    currentTime.getSeconds();
  return ret;
  // 倒计时
  // let ret = endTime.getTime() - currentTime.getTime();
  // ret = Math.round(ret / 1000);

  // return ret >= 0 ? ret : 0;
}

function update(ctx: CanvasRenderingContext2D) {
  const nextShowTimeSeconds = getCurrentTimeSeconds();

  const nextHours: number = (nextShowTimeSeconds / 3600) | 0;
  const nextMinutes: number =
    ((nextShowTimeSeconds - nextHours * 3600) / 60) | 0;
  const nextSeconds: number = nextShowTimeSeconds % 60;

  const currHours: number = (currentShowTimeSeconds / 3600) | 0;
  const currMinutes: number =
    ((currentShowTimeSeconds - currHours * 3600) / 60) | 0;
  const currSeconds: number = currentShowTimeSeconds % 60;

  if (nextSeconds !== currSeconds) {
    if (((currHours / 10) | 0) !== ((nextHours / 10) | 0)) {
      addBalls(MARGIN_LEFT + 0, MARGIN_TOP, (currHours / 10) | 0);
    }
    if ((currHours % 10 | 0) !== (nextHours % 10 | 0)) {
      addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, currHours % 10 | 0);
    }

    if (((currMinutes / 10) | 0) !== ((nextMinutes / 10) | 0)) {
      addBalls(MARGIN_LEFT + 39, MARGIN_TOP, (currMinutes / 10) | 0);
    }
    if ((currMinutes % 10 | 0) !== (nextMinutes % 10 | 0)) {
      addBalls(
        MARGIN_LEFT + 54 * (RADIUS + 1),
        MARGIN_TOP,
        currMinutes % 10 | 0
      );
    }

    if (((currSeconds / 10) | 0) !== ((nextSeconds / 10) | 0)) {
      addBalls(MARGIN_LEFT + 78, MARGIN_TOP, (currSeconds / 10) | 0);
    }
    if ((currSeconds % 10 | 0) !== (nextSeconds % 10 | 0)) {
      addBalls(
        MARGIN_LEFT + 93 * (RADIUS + 1),
        MARGIN_TOP,
        currSeconds % 10 | 0
      );
    }

    currentShowTimeSeconds = nextShowTimeSeconds;
  }

  updateBalls(ctx);
}

function addBalls(x: number, y: number, num: number) {
  for (let i = 0; i < digit[num].length; i++) {
    for (let j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] === 1) {
        const aBall = {
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          g: 1.5 + Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
          vy: -5,
          colors: colors[Math.floor(Math.random() * colors.length)],
        };

        balls.push(aBall);
      }
    }
  }
}

function updateBalls(ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < balls.length; i++) {
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
    balls[i].vy += balls[i].g;

    if (balls[i].y >= ctx.canvas.height) {
      balls[i].y = ctx.canvas.height - RADIUS;
      balls[i].vy = -balls[i].vy * 0.78;
    }
  }

  let cnt = 0;
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].x - RADIUS < ctx.canvas.width && balls[i].x + RADIUS > 0) {
      balls[cnt++] = balls[i];
    }
  }

  while (balls.length > cnt) {
    balls.pop();
  }
}

function render(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const hours: number = (currentShowTimeSeconds / 3600) | 0;
  const minutes: number = ((currentShowTimeSeconds - hours * 3600) / 60) | 0;
  const seconds: number = currentShowTimeSeconds % 60;

  renderDigit(MARGIN_LEFT, MARGIN_TOP, (hours / 10) | 0, ctx);
  renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, hours % 10 | 0, ctx);
  renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
  renderDigit(
    MARGIN_LEFT + 39 * (RADIUS + 1),
    MARGIN_TOP,
    (minutes / 10) | 0,
    ctx
  );
  renderDigit(
    MARGIN_LEFT + 54 * (RADIUS + 1),
    MARGIN_TOP,
    minutes % 10 | 0,
    ctx
  );
  renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, ctx);
  renderDigit(
    MARGIN_LEFT + 78 * (RADIUS + 1),
    MARGIN_TOP,
    (seconds / 10) | 0,
    ctx
  );
  renderDigit(
    MARGIN_LEFT + 93 * (RADIUS + 1),
    MARGIN_TOP,
    seconds % 10 | 0,
    ctx
  );

  update(ctx);

  for (let i = 0; i < balls.length; i++) {
    ctx.fillStyle = balls[i].colors;
    ctx.beginPath();
    ctx.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI);
    ctx.closePath();

    ctx.fill();
  }
}

function renderDigit(
  x: number,
  y: number,
  num: number,
  ctx: CanvasRenderingContext2D
) {
  ctx.fillStyle = "#266FE8";

  for (let i = 0; i < digit[num].length; i++) {
    for (let j = 0; j < digit[num][i].length; j++) {
      // 第 (i, j) 个圆的圆心位置
      // CenterX: x + j * 2 * (r + 1) + (r + 1);
      // CenterY: y + i * 2 * (r + 1) + (r + 1);
      if (digit[num][i][j] === 1) {
        ctx.beginPath();
        ctx.arc(
          x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          RADIUS,
          0,
          2 * Math.PI
        );
        ctx.closePath();
        ctx.fill();
      }
    }
  }
}

function animate() {
  render(ctx);
  animateCache.animateId = requestAnimationFrame(animate);
}
