import {Metadata} from "next";
import {Box, Stack, Typography} from "@mui/material";
import {getAllEquipment} from "@/ts/appendix/equipment/action/equipment-actions";
import Link from "@/components/common";

export const metadata: Metadata = {
    title: 'Equipment - D&D Handbook'
}

const EquipmentPage = async () => {
    const equipmentPage = await getAllEquipment()
    return (
        <Box sx={{textAlign: 'center', my: 5}}>
            <Typography sx={{typography: {xs: 'h3', sm: 'h1'}, mb: 5}}>
                Equipment
            </Typography>
            <Stack spacing={3}>
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