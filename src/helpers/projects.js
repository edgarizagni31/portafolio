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
    id: 1,
    title: "Social Media Dashboard",
    desc: "Página estática que muestra ciertos datos de una determinada red social.",
    url: "https://socialmediadash.netlify.app",
    repo: "https://github.com/edgarizagni31/social-media-dashboard",
    tecs: [tecs[2], tecs[3], tecs[6], tecs[9]],
  },
  {
    id: 2,
    title: "Loopstudios ",
    desc: "Landing page.",
    url: "https://lp-loopstudios.netlify.app",
    repo: "https://github.com/edgarizagni31/landing-page",
    tecs: [tecs[2], tecs[5], tecs[6], tecs[9]],
  },
  {
    id: 3,
    title: "Rock and EDM Festival",
    desc: "Landing page",
    url: "https://festival-music75.netlify.app/",
    repo: "https://github.com/edgarizagni31/festival-music",
    tecs: [tecs[1], tecs[5], tecs[6], tecs[10]],
  },
  {
    id: 4,
    title: "IP tracker",
    desc: "Localizar ip publicas, ademas se genera un mapa con dicha dirreción",
    url: "https://iptracker75.netlify.app",
    repo: "https://github.com/edgarizagni31/ip-tacker",
    tecs: [tecs[1], tecs[3], tecs[6], tecs[9]],
  },
  {
    id: 5,
    title: "Expense Tracker",
    desc: "Registrar tus gastos e ingresos. Además obtener un resumen de los mismos.",
    url: "https://expense-tracker75.netlify.app",
    repo: "https://github.com/edgarizagni31/expense-tracker",
    tecs: [tecs[7], tecs[4], tecs[8]],
  },
  {
    id: 6,
    title: "Todo App",
    desc: "Registrar tus tareas, visualizarlas, marcar como completadas y filtrarlas.",
    url: "https://todoapp75.netlify.app",
    repo: "https://github.com/edgarizagni31/TodoApp",
    tecs: [tecs[7], tecs[3], tecs[8]],
  },
];
