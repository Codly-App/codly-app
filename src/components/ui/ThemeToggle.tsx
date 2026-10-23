"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { IconButton } from "@/components/ui/IconButton";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    function toggleTheme() {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }

    return (
        <IconButton
            label="Alternar tema"
            onClick={toggleTheme}
            icon={
                <>
                    <FiMoon className="dark:hidden" />
                    <FiSun className="hidden dark:block" />
                </>
            }
        />
    );
}