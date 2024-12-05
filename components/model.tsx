"use client";
import {useCallback, useRef, useEffect, MouseEventHandler} from "react";
import {useRouter} from "next/navigation";

export default function Modal({children}: { children: React.ReactNode }) {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick: MouseEventHandler = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    return (
        <section
            ref={overlay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10 flex justify-center items-center"
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className={"container mx-auto my-10 rounded-b-lg"}
            >
                <div className={"w-1/2 mx-auto px-10 rounded-b-lg"}>
                    {children}
                </div>
            </div>
        </section>
    );
}