export type SoundName = "toggle" | "success" | "error" | "complete";

interface Tone {
    frequency: number;
    start: number;
    duration: number;
}

const SOUNDS: Record<SoundName, Tone[]> = {
    toggle: [{ frequency: 660, start: 0, duration: 0.08 }],
    success: [
        { frequency: 660, start: 0, duration: 0.1 },
        { frequency: 880, start: 0.1, duration: 0.15 },
    ],
    error: [
        { frequency: 220, start: 0, duration: 0.2 },
        { frequency: 180, start: 0.18, duration: 0.25 },
    ],
    complete: [
        { frequency: 523, start: 0, duration: 0.12 },
        { frequency: 659, start: 0.12, duration: 0.12 },
        { frequency: 784, start: 0.24, duration: 0.12 },
        { frequency: 1047, start: 0.36, duration: 0.25 },
    ],
};

const VOLUME = 0.2;

let context: AudioContext | null = null;

export function playSound(name: SoundName) {
    if (typeof window === "undefined" || !window.AudioContext) return;

    context ??= new window.AudioContext();

    // Navegadores só liberam o áudio depois de um toque do usuário
    if (context.state === "suspended") void context.resume();

    const now = context.currentTime;

    for (const tone of SOUNDS[name]) {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const start = now + tone.start;
        const end = start + tone.duration;

        oscillator.type = "sine";
        oscillator.frequency.value = tone.frequency;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(VOLUME, start + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, end);

        oscillator.connect(gain).connect(context.destination);
        oscillator.start(start);
        oscillator.stop(end + 0.02);
    }
}
