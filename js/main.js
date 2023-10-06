
let frames = [];
let current_message = "";

const COWSAY_ASCII =
    "   o         ,        ,\n" +
    "    o       /(        )`\n" +
    "     o      \\ \\___   / |\n" +
    "            /- _  `-/  '\n" +
    "           (/\\/ \\ \\   /\\\n" +
    "           / /   | `    \\\n" +
    "           O O   ) /    |\n" +
    "           `-^--'`<     '\n" +
    "          (_.)  _  )   /\n" +
    "           `.___/`    /\n" +
    "             `-----' /\n" +
    "<----.     __ / __   \\\n" +
    "<----|====O)))==) \\) /====\n" +
    "<----'    `--' `.__,' \\\n" +
    "             |        |\n" +
    "              \\       /\n" +
    "        ______( (_  / \\______\n" +
    "      ,'  ,-----'   |        \\\n" +
    "      `--{__________)        \\/\n";

// Code source: https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din
// With several modifications...
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 15) + 1;
const ypos = Array(cols).fill(h + 100);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix() {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';

    ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 15;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 21;
    });
}

function cowsay(message) {
    let msg = ' ' + '_'.repeat(message.length + 2) + ' \n';
    msg += '( ' + message + ' )\n';
    msg += ' ' + '-'.repeat(message.length + 2) + ' \n';
    msg += COWSAY_ASCII;
    return msg;
}

function cowsay_gen_frames(message) {
    new_frames = []
    for (let i = 0; i <= message.length; i ++) {
        new_frames.push(cowsay(message.substring(0, i)));
    }

    return new_frames;
}

function add_animation(msg) {
    current_message = msg;
    let new_frames = cowsay_gen_frames(msg);
    frames = new_frames;
}

function animation_handler() {

    let elem = document.getElementById("cowsay");

    setInterval(() => {
        let frame = frames.shift();
        if (frame != undefined)
            elem.innerText = frame;

        matrix();
    }, 100);
}

add_animation("Welcome to RandomCTF!");
animation_handler();
