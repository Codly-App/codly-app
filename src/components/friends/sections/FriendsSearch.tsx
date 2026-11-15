"use client";
import { SearchInput } from "@/components/ui/buttons/SearchInput";

interface FriendsSearchProps { value: string; onChange: (value: string) => void; }

export function FriendsSearch({ value, onChange }: FriendsSearchProps) {
    return (
        <section aria-label="Buscar pessoas">
            <SearchInput
                label="Buscar amigos"
                value={value}
                onChange={onChange}
                placeholder="Buscar por nome, @usuário ou UID"
            />
        </section>
    );
}