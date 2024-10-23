import CharacterList from '@/components/characters/CharacterList';
import { EmptyPlaceholder } from '@/components/EmptyPlaceholder';
import { getFollowedCharacters } from '@/queries/followedCharacters';
import { GetServerSideProps } from 'next';
import React from 'react'


export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getFollowedCharacters();
  console.log("data", data);
  return { props: { data } };
};


const Follow = ({ data }) => {
  console.log(data);
  return (
    data.length == 0 ? <EmptyPlaceholder /> : <CharacterList characters={data} />
  )
}

export default Follow
