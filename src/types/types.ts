export type CharacterDataType = {
    id: string,
    name: string,
    image: string,
    species: string,
}

export type CharacterInfoType = {
    id: string,
    name: string,
    image: string,
    species: string,
    gender: string,
    status: string,
    type: string,
    location: {
        name: string,
        id: string,
    },
    origin: {
        name: string,
    }
}


