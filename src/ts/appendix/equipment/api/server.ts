import {EquipmentPage, GetAllEquipmentParams} from "@/ts/appendix/equipment/model";

import createClient from "openapi-fetch";
import type { paths } from "@/types/dnd-5e-schema"; // Your generated file

const client = createClient<paths>({ baseUrl: process.env.API });


const host = process.env.API

export const getAllEquipment = async (
    params?: GetAllEquipmentParams
): Promise<EquipmentPage> => {
    const { data, error } = await client.GET("/api/equipment", {params: {query: params}});
    if (error) throw error;
    return data;
}
