const { exec, spawn } = require("child_process");
const CFonts = require("cfonts");
const chalk = require("chalk");

const showServerInfo = () => {
    exec("neofetch --stdout", (error, stdout, stderr) => {
        if (error || stderr) {
        } else {
            let [name, value] = stdout.split(":");
            console.log(`${chalk.red.bold(name) + ":"} ${chalk.white.bold(value)}`);
        }
    });
};

console.clear();
CFonts.say("NekoHost", {
    font: "block",
    align: "center",
    colors: ["white", "red"],
});
CFonts.say("Hosting panel pterodactyl - by AxellNetwork", {
    font: "console",
    align: "center",
    colors: ["red", "white"],
});

console.log(
    chalk.whiteBright(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    )
);
console.log(
    chalk.greenBright(
        "Terimakasih telah menggunakan server kami,\n" +
        "semoga layanan server menjadi yang terbaik untuk anda ⭐"
    )
);
console.log(
    chalk.whiteBright(
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
    )
);
showServerInfo();
console.log(chalk.white.bold('ℹ️ Masukan perintah pada "type a command", untk menjalankan server :'));

spawn('bash', [], {
  stdio: ['inherit', 'inherit', 'inherit', 'ipc']
})
