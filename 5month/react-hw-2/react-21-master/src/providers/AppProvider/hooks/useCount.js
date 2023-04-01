import { AppContext } from "../config"
import { useContext } from 'react';

export const useCount = () => {
    const { count, setCount } = useContext(AppContext)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return {count, increment, decrement}
}