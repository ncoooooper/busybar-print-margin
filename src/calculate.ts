import {rect, type Frame} from "@shared/surface";
import type {Result} from "@shared/worksheet";

function preview(outerAspect: number, innerAspect: number, fill: boolean): Frame {
  function fit(aspect: number, width: number, height: number) {
    return {width: Math.max(1, Math.round(Math.min(width, height * aspect))),
      height: Math.max(1, Math.round(Math.min(height, width / aspect)))};
  }
  const outer = fit(outerAspect, 25, 14);
  const inner = fit(innerAspect, outer.width, outer.height);
  const x = 45 + Math.floor((25 - outer.width) / 2);
  const y = 1 + Math.floor((14 - outer.height) / 2);
  return [
    rect("bounds", x, y, outer.width, outer.height, fill ? "#BA695DFF" : "#F3E8D5FF"),
    rect("image", x + Math.floor((outer.width - inner.width) / 2), y + Math.floor((outer.height - inner.height) / 2),
      inner.width, inner.height, "#618F90FF"),
  ];
}

export function calculate(v: number[]): Result[] {
  const [w,h,pw,ph] = v;
  const fill = Math.max(pw / w, ph / h), fit = Math.min(pw / w, ph / h);
  const cutX = Math.max(0, (w - pw / fill) / 2), cutY = Math.max(0, (h - ph / fill) / 2);
  const borderX = Math.max(0, (pw - w * fit) / 2), borderY = Math.max(0, (ph - h * fit) / 2);
  return [
    {name:"Fill crop", value:Math.round(Math.max(cutX,cutY))+"px",
      detail:[cutX>cutY?"From each side":"From top and bottom","Coral: discarded image"], preview:preview(w/h,pw/ph,true)},
    {name:"Fit border", value:Math.max(borderX,borderY).toFixed(1)+"mm",
      detail:[borderX>borderY?"At left and right":"At top and bottom","Cream: paper margin"], preview:preview(pw/ph,w/h,false)},
    {name:"Print density", value:Math.round(25.4/fit)+"dpi",
      detail:["For fit-to-paper mode","Paper "+pw+" x "+ph+" mm"]},
  ];
}
