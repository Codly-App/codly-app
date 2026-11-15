import { useReducedMotion } from "framer-motion";
import { useSettings } from "@/hooks/useSettings";

export function useReduceMotion() {
    const system = useReducedMotion();
    const { data } = useSettings();

    return Boolean(system) || data.preferences.reduceMotion;
}