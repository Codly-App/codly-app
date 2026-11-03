import type { IconType } from "react-icons";
import { FaJs } from "react-icons/fa";
import { FiBookOpen, FiDatabase } from "react-icons/fi";

export const COURSE_ICONS: Record<string, IconType> = {
    sql: FiDatabase,
    javascript: FaJs,
};

export const DEFAULT_COURSE_ICON: IconType = FiBookOpen;
