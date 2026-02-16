"use client"

import {createContext, ReactNode, RefObject, useContext, useEffect, useRef, useState} from "react";
import DiceBox from "@3d-dice/dice-box";

export type DiceRollContainerContextType = {
    diceBox: DiceBox | null;
    containerRef: RefObject<HTMLDivElement | null>;
};

const DiceRollContainerContext = createContext<DiceRollContainerContextType | null>(null);

const DiceRollContainer = (props: { children: ReactNode; }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [diceBox, setDiceBox] = useState<DiceBox | null>(null);

    useEffect(() => {
        if (containerRef.current && !diceBox) {
            const box = new DiceBox({
                container: "#dice-box",
                assetPath: '/assets/',
                origin: window.location.origin,
                theme: "rust"
            });

            box.init().then(() => {
                setDiceBox(box);
            }).catch(err => {
                console.error("Failed to initialize DiceBox:", err);
            });
        }
    }, [diceBox]);

    return (
        <DiceRollContainerContext.Provider value={{ diceBox, containerRef }}>
            <div
                ref={containerRef}
                id="dice-box"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    margin: 0,
                    padding: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    zIndex: 1000
                }}
            ></div>
            {props.children}
        </DiceRollContainerContext.Provider>
    )
}
export default DiceRollContainer

export function useDiceBox(): DiceRollContainerContextType {
    const ctx = useContext(DiceRollContainerContext);
    if (!ctx) {
        throw new Error("useDiceBox must be used within DiceRollContainer");
    }
    return ctx;
}