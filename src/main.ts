import {worksheet} from "@shared/worksheet";
import {calculate} from "./calculate";

const fields=[
  {
    "name": "Photo width",
    "unit": "px",
    "initial": 1920,
    "min": 1,
    "max": 16000,
    "step": 10
  },
  {
    "name": "Photo height",
    "unit": "px",
    "initial": 1080,
    "min": 1,
    "max": 16000,
    "step": 10
  },
  {
    "name": "Paper width",
    "unit": "mm",
    "initial": 150,
    "min": 1,
    "max": 1500,
    "step": 1
  },
  {
    "name": "Paper height",
    "unit": "mm",
    "initial": 100,
    "min": 1,
    "max": 1500,
    "step": 1
  }
];
worksheet({name:"Print Margin",fields,calculate,accent:"#ED8B86",motion:{"motif":"folio","color":"#ED8B86","shine":"#FFF0DB"}});
