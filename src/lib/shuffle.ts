export function shuffle<T>(list: readonly T[]): T[] {
    const copy = [...list];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

/** Embaralha de novo (até 10 vezes) enquanto o resultado não for aceito. */
export function shuffleUntil<T>(
    list: readonly T[],
    isRejected: (shuffled: T[]) => boolean,
): T[] {
    let result = shuffle(list);

    for (let tries = 0; tries < 10 && isRejected(result); tries++) {
        result = shuffle(list);
    }

    return result;
}
