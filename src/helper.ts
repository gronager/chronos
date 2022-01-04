export const NUM = 10;
export const mouseClick = (
  ev: MouseEvent,
  ctx: CanvasRenderingContext2D | null,
  func: (ctx: CanvasRenderingContext2D) => void
) => {
  ev.preventDefault();
  console.log("click");
  ctx!.clearRect(0, 0, ctx!.canvas.clientWidth, ctx!.canvas.clientHeight);
  func(ctx!);
  ctx!.strokeRect(ev.clientX, ev.clientY, 100, 100);
  return;
};

export const drawBaseline = (ctx: CanvasRenderingContext2D) => {
  ctx!.fillRect(10, 10, 100, 100);
};
