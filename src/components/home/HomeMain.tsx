import {
    MOCK_COURSES,
    MOCK_DAILY_GOAL,
    MOCK_USER,
} from "@/components/home/data/mock-data";
import { ContinueCard } from "@/components/home/sections/ContinueCard";
import { CourseList } from "@/components/home/sections/CourseList";
import { DailyGoalCard } from "@/components/home/sections/DailyGoalCard";
import { HomeHeader } from "@/components/home/sections/HomeHeader";
import { AppShell } from "@/components/ui/navigation/AppShell";

export function HomeMain() {
    const [current] = MOCK_COURSES;

    return (
        <AppShell>
            <HomeHeader user={MOCK_USER} />
            <DailyGoalCard goal={MOCK_DAILY_GOAL} />
            <ContinueCard course={current} />
            <CourseList courses={MOCK_COURSES} />
        </AppShell>
    );
}
