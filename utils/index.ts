export function initCanvas() {
  const canvas: HTMLCanvasElement = document.getElementById(
    "Canvas"
  ) as HTMLCanvasElement;

  canvas.width = window.innerWidth - 256 - 64;
  canvas.height = window.innerHeight - 120;

  return { canvas };
}
