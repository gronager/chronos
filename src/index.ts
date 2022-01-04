import { mouseClick, drawBaseline } from "./helper";
console.log("Start");
const canvas = document.getElementById("game") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
ctx!.strokeStyle = "red";
ctx!.fillStyle = "blue";
ctx!.lineWidth = 5;
drawBaseline(ctx!);
ctx!.save();

canvas.addEventListener("click", (event) => {
  mouseClick(event, ctx!, drawBaseline);
  return;
});
