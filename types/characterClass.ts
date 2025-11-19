export interface CharacterClass {
    id: string,
    name: string
}

export const AMAZON: CharacterClass = {
    id: "amazon",
    name: "Amazon"
};

export const BARBARIAN: CharacterClass = {
    id: "barbarian",
    name: "Barbarian"
};

export const DRUID: CharacterClass = {
    id: "druid",
    name: "Druid"
};

export const SORCERESS: CharacterClass = {
    id: "sorceress",
    name: "Sorceress"
};

export const NECROMANCER: CharacterClass = {
    id: "necromancer",
    name: "Necromancer"
};

export const ASSASSIN: CharacterClass = {
    id: "assassin",
    name: "Assassin"
};

export const PALADIN: CharacterClass = {
    id: "paladin",
    name: "Paladin"
};

export const CharacterClasses: CharacterClass[] = [
    AMAZON,
    ASSASSIN,
    BARBARIAN,
    DRUID,
    NECROMANCER,
    PALADIN,
    SORCERESS
];