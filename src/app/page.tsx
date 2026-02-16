import type {Metadata} from "next";
import {Box, Stack, Typography} from "@mui/material";
import {navItems} from "@/ts/common";
import Link from "@/components/common";

export const metadata: Metadata = {
    title: "Dungeons & Dragons 5e SRD Handbook - Home",
    description: "Quickly find information from the Dungeons & Dragons 5e System Reference Document",
};

const Home = () => {
    return (
        <Box sx={{textAlign: 'center', my: 5}}>
            <Typography sx={{typography: {xs: 'h3', sm: 'h1'}, mb: 5}}>
                Dungeons & Dragons Handbook
            </Typography>
            <Stack spacing={3}>
                {navItems.map(c =>
                    <Box key={c.href}>
                        <Link href={c.href} variant='h4'>
                            {c.title}
                        </Link>
                    </Box>
                )}
            </Stack>
        </Box>
    );
}

export default Home
