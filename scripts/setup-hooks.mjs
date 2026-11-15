import { execSync } from "node:child_process";

try {
    execSync("git config core.hooksPath .githooks", { stdio: "ignore" });
    console.log("Hooks do Git ativados (.githooks).");
} catch {
    // Sem Git (por exemplo, no deploy da Vercel): não faz nada
}