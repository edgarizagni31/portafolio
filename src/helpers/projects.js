import { tecs } from "./tecs.js";
/*
    git => 0
    html => 1
    pug => 2
    css => 3
    bootstrap => 4
    sass => 5
    js =>6
    react => 7
    jest => 8
    webpack => 9
*/
export const projects = [
  {
    id: parseInt(Math.random() * (25 - 5 + 1) - 5),
    title: "Social Media Dashboard",
    desc:
      "Es una página estática que muestra ciertos datos de una determinada red social.",
    url: "https://socialmediadash.netlify.app",
    repo: "https://github.com/edgarizagni31/social-media-dashboard",
    tecs: [tecs[1], tecs[3], tecs[6], tecs[9]],
  },
  {
    id: parseInt(Math.random() * 100),
    title: "Loopstudios ",
    desc: "Landing page sobre la empresa loopstudios",
    url: "https://lp-loopstudios.netlify.app",
    repo: "https://github.com/edgarizagni31/landing-page",
    tecs: [tecs[2], tecs[5], tecs[6], tecs[9]],
  },
  {
    id: parseInt(Math.random() * 100),
    title: "Expense Tracker",
    desc:
      "Permite registrar tus gastos y ingresos. Ademas obtener un resumen de los mismos.",
    url: "https://expense-tracker75.netlify.app",
    repo: "https://github.com/edgarizagni31/expense-tracker",
    tecs: [tecs[7], tecs[4], tecs[8]],
  },
  {
    id: parseInt(Math.random() * 100),
    title: "Todo App",
    desc:
      "Permite registrar tus tares, visualizarlas, marcar como completas y filtralas.",
    url: "https://todoapp75.netlify.app",
    repo: "https://github.com/edgarizagni31/TodoApp",
    tecs: [tecs[7], tecs[3]],
  },
];
