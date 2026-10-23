import { ContinueCard } from "@/components/home/ContinueCard";
import { CourseList } from "@/components/home/CourseList";
import { DailyGoalCard } from "@/components/home/DailyGoalCard";
import { HomeHeader } from "@/components/home/HomeHeader";
import { MOCK_COURSES, MOCK_DAILY_GOAL, MOCK_USER } from "@/components/home/mock-data";
import { BottomNav } from "@/components/ui/BottomNav";

export function HomeMain() {
    const [current] = MOCK_COURSES;

    return (
        <>
            <main className="mx-auto flex w-full max-w-md flex-col gap-5 px-4 pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-28">
                <HomeHeader user={MOCK_USER} />
                <DailyGoalCard goal={MOCK_DAILY_GOAL} />
                <ContinueCard course={current} />
                <CourseList courses={MOCK_COURSES} />
            </main>
            <BottomNav />
        </>
    );
}