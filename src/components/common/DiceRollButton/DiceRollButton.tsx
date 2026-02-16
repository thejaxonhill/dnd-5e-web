"use client"

import React from 'react';
import {Button, ButtonProps} from "@mui/material";
import {useDiceBox} from "@/components/common/DiceRollContainer/DiceRollContainer";

export type DiceRollButtonProps = Omit<ButtonProps, 'onClick'> & {
    notation?: string;
}

const DiceRollButton = ({ notation = "1d20", ...props }: DiceRollButtonProps) => {
    const { diceBox } = useDiceBox();

    const rollDice = () => {
        if (diceBox) {
            diceBox.roll(notation);
        } else {
            console.warn("DiceBox is not yet initialized.");
        }
    };

    return (
        <Button onClick={rollDice} {...props}>Roll {notation}</Button>
    );
};

export default DiceRollButton;
