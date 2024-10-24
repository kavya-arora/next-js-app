import CharacterList from '@/components/characters/CharacterList'
import { getCharacters } from '@/queries/characters';
import { CharacterDataType } from '@/types/types';
import React from 'react'

export const getStaticProps = async () => {
  const { characters: { results: characterData } } = await getCharacters();
  return { props: { characterData } };
};

const Index = ({ characterData }: { characterData: CharacterDataType[] }) => {
  return (
    <CharacterList characters={characterData} />
  )
}

export default Index;
