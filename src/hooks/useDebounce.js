import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const hanlder = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(hanlder);
    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;
