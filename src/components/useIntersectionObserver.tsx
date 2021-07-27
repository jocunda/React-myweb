import { MutableRefObject, useEffect, useState } from "react";

export default function useIntersectionObserver<T extends Element>(
    ref: MutableRefObject<T>
): boolean {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires

                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.unobserve(ref.current);
                }
            },
            {
                rootMargin: "0px",
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}