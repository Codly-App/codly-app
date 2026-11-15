import { FiAward } from "react-icons/fi";
import { EmptyState } from "@/components/ui/display/EmptyState";
import { AppShell } from "@/components/ui/navigation/AppShell";

export function RankMain() {
    return (
        <AppShell>
            <EmptyState
                icon={<FiAward />}
                title="Ranking em breve"
                description="Aqui você vai ver a classificação dos alunos por XP."
            />
        </AppShell>
    );
}
