import {Equipment} from "@/ts/appendix/equipment/model";
import {PagedModel} from "@/ts/common";

const host = process.env.API

export const getAllEquipment = async (): Promise<PagedModel<Equipment>> =>
    await fetch(host + '/api/equipment?sort=name,asc').then(res => res.json())