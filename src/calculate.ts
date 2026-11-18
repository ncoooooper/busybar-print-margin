import type {Result} from "@shared/worksheet";

export function calculate(v:number[]):Result[]{
const [w,h,pw,ph]=v,fill=Math.max(pw/w,ph/h),fit=Math.min(pw/w,ph/h);
 const cutX=Math.max(0,(w-pw/fill)/2),cutY=Math.max(0,(h-ph/fill)/2),borderX=(pw-w*fit)/2,borderY=(ph-h*fit)/2;
 return [{name:"Fill crop",value:Math.round(Math.max(cutX,cutY))+"px",detail:[cutX>cutY?"From each side":"From top and bottom","Fill entire paper"]},
 {name:"Fit border",value:Math.max(borderX,borderY).toFixed(1)+"mm",detail:[borderX>borderY?"At left and right":"At top and bottom","No image cropped"]},
 {name:"Print density",value:Math.round(25.4/fit)+"dpi",detail:["For fit-to-paper mode","Paper "+pw+" x "+ph+" mm"]}];
}
