import clsx from "clsx";
import Image from "next/image";

interface AvatarProps {
    name: string;
    src?: string | null;
    size?: "md" | "lg";
}

export function Avatar({ name, src, size = "md" }: AvatarProps) {
    const initial = name.trim().charAt(0).toUpperCase();
    const sizeClass = size === "lg" ? "size-24 text-4xl" : "size-12 text-xl";

    return (
        <div
            className={clsx(
                "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary font-bold text-on-primary",
                sizeClass,
            )}
        >
            {src ? (
                <Image
                    src={src}
                    alt={`Foto de ${name}`}
                    width={96}
                    height={96}
                    className="size-full object-cover"
                />
            ) : (
                <span aria-hidden>{initial}</span>
            )}
        </div>
    );
}
