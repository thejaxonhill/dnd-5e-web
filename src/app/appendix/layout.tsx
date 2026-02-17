import {ReactNode} from "react";
import AppendixLayoutClient from "@/components/appendix/AppendixLayoutClient";
import {Box, Typography} from "@mui/material";

const AppendixLayout = ({children}: Readonly<{ children: ReactNode }>) => {
    return (
        <AppendixLayoutClient header={
            <Typography variant="h3" component="h1" gutterBottom align="center" sx={{
                fontWeight: 'bold',
                mt: { xs: 2, md: 4 },
                mb: { xs: 2, md: 6 },
                fontSize: { xs: '2rem', md: '3rem' },
                px: 2
            }}>
                Dungeons & Dragons Appendix
            </Typography>
        }>
            <Box sx={{ml: 5}}>
                {children}
            </Box>
        </AppendixLayoutClient>
    )
}

export default AppendixLayout