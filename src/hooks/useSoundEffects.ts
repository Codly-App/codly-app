import { useSettings } from "@/hooks/useSettings";
import { playSound, type SoundName } from "@/lib/sounds";

export function useSoundEffects() {
    const { data } = useSettings();
    const enabled = data.preferences.soundEffects;

    function play(name: SoundName) {
        if (enabled) playSound(name);
    }

    return { play };
}
