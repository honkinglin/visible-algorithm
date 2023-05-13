import { initCanvas } from "@/utils";
import { animateCache } from '@/config/animate';

let ctx: CanvasRenderingContext2D;

export default function SelectSort() {
  const { canvas } = initCanvas();

  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
}
