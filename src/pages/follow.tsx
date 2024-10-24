import CharacterList from '@/components/characters/CharacterList';
import { EmptyPlaceholder } from '@/components/EmptyPlaceholder';
import { getFollowedCharacters } from '@/queries/followedCharacters';
import { CharacterDataType } from '@/types/types';
import { GetServerSideProps } from 'next';
import React from 'react'


export const getServerSideProps: GetServerSideProps = async () => {
  const characterData = await getFollowedCharacters();
  return { props: { characterData } };
};


const Follow = ({ characterData }: { characterData: CharacterDataType[] }) => {
  return (
    characterData.length === 0 ? <EmptyPlaceholder /> : <CharacterList characters={characterData} />
  )
}

export default Follow
