import CharacterList from '@/components/characters/CharacterList'
import { getCharacters } from '@/queries/characters';
import { GetServerSideProps } from 'next';
import React from 'react'

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getCharacters();
  return { props: { data } };
};

const Index = ({data}) => {
console.log(data.characters.results);
  return (
    <div>
      {/* meow */}
      <CharacterList characters={data.characters.results}/>
    </div>
  )
}

export default Index
