import {ItemType} from "./ItemType";
import {ItemCategory} from "./itemCategory";
import {ItemRarity} from "./rarity";

export interface ItemBase {
    id: string
    name: string,
    type: ItemType,
    category: ItemCategory,
    rarity: ItemRarity,
    can_desecrate: boolean,
    can_corrupt: boolean,
    sockets: number,
    can_identify: boolean
}