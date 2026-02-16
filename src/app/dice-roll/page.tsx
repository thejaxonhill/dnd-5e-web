"use client"

import {Box, Stack} from "@mui/material";
import dynamic from 'next/dynamic'

const DiceRollButton = dynamic(() => import('@/components/common/DiceRollButton/DiceRollButton'), {
    ssr: false,
    loading: () => <p>Loading 3D Dice Roller...</p>,
});

const DiceRollPage = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Stack direction="row" spacing={2}>
                <DiceRollButton notation="1d20" variant="contained" />
                <DiceRollButton notation="2d6" variant="outlined" />
                <DiceRollButton notation="4d10" variant="contained" color="secondary" />
            </Stack>
        </Box>
    )
}

export default DiceRollPage