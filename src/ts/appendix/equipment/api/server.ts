import {GetAllEquipmentParams, SearchEquipmentParams} from "@/ts/appendix/equipment/model";

import createClient from "openapi-fetch";
import type { paths } from "@/types/dnd-5e-schema"; // Your generated file

const client = createClient<paths>({ baseUrl: process.env.API });

export const getAllEquipment = async (
    params?: GetAllEquipmentParams
) => {
    const { data, error } = await client.GET("/api/equipment", {params: {query: params}});
    if (error) throw error;
    return data;
}

export const searchEquipment = async (
    params?: SearchEquipmentParams
) => {
    const { data, error } = await client.GET("/api/equipment/search", {params: {query: params}});
    if (error) throw error;
    return data;
}
