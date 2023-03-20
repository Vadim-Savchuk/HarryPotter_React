import { useState } from "react";

export function usePaginate(queryPage) {
    const [elemsLength] = useState(10);
    const lastIndex     = queryPage * elemsLength;
    const firstIndex    = lastIndex - elemsLength

    return {
        elemsLength,
        lastIndex,
        firstIndex
    }
}