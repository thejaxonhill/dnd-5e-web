"use client";

import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    Fab,
    Popover,
    Stack,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";
import {useDiceBox} from "@/components/common/DiceRollContainer/DiceRollContainer";
import React, {useState} from "react";

const DICE_SIDES = [4, 6, 8, 10, 12, 20, 100] as const;

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

const DiceRollFab = () => {
    const {diceBox} = useDiceBox();

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);

    const [sides, setSides] = useState<(typeof DICE_SIDES)[number]>(20);
    const [count, setCount] = useState<number>(1);

    const notation = `${count}d${sides}`;

    const clear = () => diceBox?.clear()

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const roll = () => {
        if (!diceBox) {
            console.warn("DiceBox is not yet initialized.");
            return;
        }
        diceBox.roll(notation).then(res => console.log(res));
        setTimeout(clear, 30000);
    };

    return (
        <Box sx={{ position: "fixed", right: 16, bottom: 16, zIndex: (t) => t.zIndex.fab }}>
            <Fab
                color="primary"
                onClick={handleOpen}
                aria-label="Open dice roller"
                aria-controls={open ? "dice-roll-popover" : undefined}
                aria-haspopup="dialog"
                aria-expanded={open ? "true" : undefined}
            >
                <CasinoIcon />
            </Fab>

            <Popover
                id="dice-roll-popover"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                transformOrigin={{ vertical: "bottom", horizontal: "center" }}
                slotProps={{
                    paper: {
                        sx: { mt: 1, borderRadius: 3, width: 300, overflow: "visible" },
                        role: "dialog",
                        "aria-label": "Dice roller",
                    },
                }}
            >
                <Card elevation={0}>
                    <CardContent sx={{ pb: 1.5 }}>
                        <Stack spacing={1.25}>
                            <Box>
                                <Typography variant="subtitle2" sx={{ mb: 0.75 }}>
                                    Dice
                                </Typography>
                                <ToggleButtonGroup
                                    value={sides}
                                    exclusive
                                    onChange={(_, next) => {
                                        if (next !== null) setSides(next);
                                    }}
                                    size="small"
                                    aria-label="Dice type"
                                    sx={{ flexWrap: "wrap" }}
                                >
                                    {DICE_SIDES.map((d) => (
                                        <ToggleButton key={d} value={d} aria-label={`d${d}`}>
                                            d{d}
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </Box>

                            <Box>
                                <Typography variant="subtitle2" sx={{ mb: 0.75 }}>
                                    Amount
                                </Typography>
                                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                                    <ButtonGroup size="small" variant="outlined" aria-label="Amount stepper">
                                        <Button
                                            onClick={() => setCount((c) => clamp(c - 1, 1, 50))}
                                            aria-label="Decrease amount"
                                        >
                                            –
                                        </Button>
                                        <Button disabled sx={{ minWidth: 52, color: "text.primary" }}>
                                            {count}
                                        </Button>
                                        <Button
                                            onClick={() => setCount((c) => clamp(c + 1, 1, 50))}
                                            aria-label="Increase amount"
                                        >
                                            +
                                        </Button>
                                    </ButtonGroup>

                                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "monospace" }}>
                                        {notation}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </CardContent>

                    <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: "space-between" }}>
                        <ButtonGroup>
                            <Button onClick={handleClose} color="inherit">
                                Cancel
                            </Button>
                            <Button onClick={clear} color="inherit">
                                Clear
                            </Button>
                        </ButtonGroup>
                        <Button onClick={roll} variant="contained" disableElevation>
                            Roll
                        </Button>
                    </CardActions>
                </Card>
            </Popover>
        </Box>
    );
};

export default DiceRollFab;