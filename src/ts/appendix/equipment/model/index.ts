import {components, paths} from "@/types/dnd-5e-schema";

export type EquipmentPage = components["schemas"]["PagedModelEquipmentView"]

export type GetAllEquipmentParams = paths['/api/equipment']['get']['parameters']['query']

export type SearchEquipmentParams = paths['/api/equipment/search']['get']['parameters']['query']

export type Equipment = components["schemas"]["EquipmentView"]