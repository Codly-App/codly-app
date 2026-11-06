import { FiSearch, FiX } from "react-icons/fi";

interface SearchInputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export function SearchInput({
    label,
    placeholder,
    value,
    onChange,
}: SearchInputProps) {
    return (
        <div className="relative">
            <FiSearch
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-lg text-foreground/50"
            />
            <input
                type="search"
                aria-label={label}
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="w-full rounded-xl border border-selection bg-surface py-3 pr-11 pl-10 text-foreground outline-none placeholder:text-foreground/50 focus:border-primary [&::-webkit-search-cancel-button]:appearance-none"
            />
            {value && (
                <button
                    type="button"
                    aria-label="Limpar busca"
                    onClick={() => onChange("")}
                    className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-foreground/60"
                >
                    <FiX aria-hidden />
                </button>
            )}
        </div>
    );
}
