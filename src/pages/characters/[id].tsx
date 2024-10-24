import { Character } from '@/components/characters/Character'
import { followCharacter } from '@/mutations/follow';
import { getCharacterById } from '@/queries/characterById';
import { getFollowedCharacters } from '@/queries/followedCharacters';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react'


export const getServerSideProps: GetServerSideProps = async (context) => {
  let initiallyFollowed = false;
  const { id } = context.params;
  const data = await getCharacterById({ id });
  const character = data.character;
  const followedCharacters = await getFollowedCharacters();
  followedCharacters.forEach(character=>{
    if(character.id === id) initiallyFollowed=true;
  });
  return { props: { character, initiallyFollowed } };
};

const CharacterPage = ({ character, initiallyFollowed }) => {
  const [isFollowed, setIsFollowed] = useState(initiallyFollowed);
  const router = useRouter();
  const { id } = router.query;

  const onFollow = () => {
    followCharacter( {id : id} );
    setIsFollowed(prev => !prev);
  }

  return (
      <Character character={character} isFollowed={isFollowed} onFollow={onFollow} />
  )
}

export default CharacterPage
