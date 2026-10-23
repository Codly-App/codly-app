import { FaHtml5, FaJs, FaPython } from "react-icons/fa";
import type { DailyGoal, HomeCourse, HomeUser } from "@/components/home/types";

export const MOCK_USER: HomeUser = {
    name: "Guilherme",
    streak: 7,
    xp: 1240,
    level: 5,
};

export const MOCK_DAILY_GOAL: DailyGoal = {
    earnedXp: 30,
    targetXp: 50,
};

export const MOCK_COURSES: HomeCourse[] = [
    { id: "js", title: "JavaScript do zero", lessonsDone: 12, lessonsTotal: 30, icon: FaJs },
    { id: "html", title: "HTML e CSS", lessonsDone: 8, lessonsTotal: 20, icon: FaHtml5 },
    { id: "python", title: "Python para iniciantes", lessonsDone: 0, lessonsTotal: 25, icon: FaPython },
];