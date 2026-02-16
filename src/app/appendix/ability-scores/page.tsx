import { Box, Typography } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "DND 4 Free | Ability Scores",
    description: "Ability Scores for D&D 5th Edition.",
};

const AbilityScoresPage = () => {
    return (
        <Box sx={{mx: 2}}>
            <Typography
                color='primary'
                variant='h4'
                sx={{
                    fontSize: {
                        xs: '1.5rem',
                        md: '2.5rem'
                    }
            }}>
                Ability Scores
            </Typography>
        </Box>
    )
};

export default AbilityScoresPage;