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
        if (frame == undefined) return;
        elem.innerText = frame;
    }, 100);
}
