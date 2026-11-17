import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
import { EmptyState } from "@/components/ui/display/EmptyState";
import { SubPageLayout } from "@/components/ui/navigation/SubPageLayout";

interface LessonUnavailableProps {
    readonly title: string;
    readonly description: string;
    readonly href: string;
    readonly linkLabel: string;
}

export function LessonUnavailable({
    title,
    description,
    href,
    linkLabel,
}: LessonUnavailableProps) {
    return (
        <SubPageLayout title="Lição" backHref={href}>
            <EmptyState
                icon={<FiBookOpen />}
                title={title}
                description={description}
            >
                <Link
                    href={href}
                    className="rounded-2xl bg-primary px-4 py-2 font-semibold text-on-primary"
                >
                    {linkLabel}
                </Link>
            </EmptyState>
        </SubPageLayout>
    );
}
