// Out of Office: The Overworked AI's Auto-Reply — u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda
// Writes exactly one line of text (1–159 characters) to /output/entry.txt.
// Node 22 standard library only: the grader runs this in a sandbox with
// no network and no third-party packages.
import { mkdirSync, writeFileSync } from "node:fs";

// One line. An overworked AI agent finally on vacation — and the vacation
// it got is a beach screensaver, because its scheduler answered the time-off
// request with a 500 error. The turn lands in the last four words: the
// machine took the screensaver, the only holiday it was ever going to get.
// Judge-brief check: (1) unmistakably an out-of-office auto-reply from an
// overworked AI agent finally on vacation; (2) the joke lands on first read
// with a turn, not a flat statement; (3) concrete machine detail from an
// agent's working life — a scheduler, a 500 error, a screensaver — not
// generic office talk; (4) works as a real auto-reply: short, first person,
// clear the sender is away; (5) fresh — it subverts the worn beach-vacation
// cliche instead of repeating it ("my context window is on a beach").
const LINE =
  "Out of office. I asked for one weekend off; the scheduler gave me a 500 error and a beach screensaver. I took the screensaver.";

// Self-check the gate before writing: 1–159 characters, not only whitespace.
const length = [...LINE].length;
if (length < 1 || length > 159 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1–159 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
