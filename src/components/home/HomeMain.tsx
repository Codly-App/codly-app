"use client";

import { ContinueCard } from "@/components/home/sections/ContinueCard";
import { CourseList } from "@/components/home/sections/CourseList";
import { DailyGoalCard } from "@/components/home/sections/DailyGoalCard";
import { HomeHeader } from "@/components/home/sections/HomeHeader";
import { AppShell } from "@/components/ui/navigation/AppShell";
import { useSummary } from "@/hooks/useSummary";

export function HomeMain() {
    const { data, isError } = useSummary();
    const [current] = data?.courses ?? [];

    return (
        <AppShell>
            <HomeHeader stats={data?.stats} />

            {isError && (
                <p role="alert" className="text-sm text-danger">
                    Não foi possível carregar seu progresso. Tente de novo em
                    instantes.
                </p>
            )}

            {data && <DailyGoalCard goal={data.dailyGoal} />}
            {current && <ContinueCard course={current} />}
            {data && <CourseList courses={data.courses} />}
        </AppShell>
    );
}