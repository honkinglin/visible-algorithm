export function initCanvas() {
  const canvas: HTMLCanvasElement = document.getElementById(
    "Canvas"
  ) as HTMLCanvasElement;

  canvas.width = window.innerWidth - 260 - 48;
  canvas.height = window.innerHeight - 80;

  return { canvas };
}
