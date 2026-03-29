import {Metadata} from "next";
import {Box, Stack, TextField, Typography} from "@mui/material";
import {getAllEquipment, searchEquipment} from "@/ts/appendix/equipment/api/server";
import Link, {SearchBar} from "@/components/common";

export const metadata: Metadata = {
    title: 'Equipment - D&D Handbook'
}

type EquipmentPageParams = {
    searchParams: Promise<{
        q?: string
    }>
}

const EquipmentPage = async ({searchParams}: EquipmentPageParams) => {
    const params = await searchParams
    const equipmentPage = await searchEquipment({size: 1000, query: params.q})
    return (
        <Box sx={{textAlign: 'center', my: 5}}>
            <Typography sx={{typography: {xs: 'h3', sm: 'h1'}, mb: 5}}>
                Equipment
            </Typography>
            <Stack spacing={3}>
                <SearchBar path='/appendix/equipment'/>
                {equipmentPage.content.map(c =>
                    <Box key={c.index}>
                        <Link href={c.url} variant='h4'>
                            {c.name}
                        </Link>
                    </Box>
                )}
            </Stack>
        </Box>
    )
}

export default EquipmentPage