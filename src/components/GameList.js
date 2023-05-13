/* eslint-disable no-underscore-dangle */
import { Card } from 'globalstyles/Card.styles';
import { CenteredText, SecondaryHeader } from 'globalstyles/Text.styles';
import { Wrapper } from 'globalstyles/Wrapper.styles';
import React, { useState, useEffect } from 'react';

export const GameList = () => {
  const [gamelist, setGameList] = useState([])
  const [loading, setLoading] = useState(false)
  const [gameyear, setGameYear] = useState('1996')

  const handleListSelection = (event) => {
    setGameYear(event.target.value)
  }

  useEffect(() => {
    setLoading(true);

    fetch(`https://project-mongo-api-wjvhdzdcja-lz.a.run.app/games?releaseyear=${gameyear}`)
      .then((response) => response.json())
      .then((data) => setGameList(data.body))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [gameyear])
  return (
    <Wrapper>
      {loading && (<p>loading</p>)}
      {!loading && (
        <>
          <SecondaryHeader>Nintendo Games</SecondaryHeader>
          <CenteredText>Select the year for the games you want to see:</CenteredText>
          <select onChange={handleListSelection}>
            <option value="">Please Select One:</option>
            <option value="">All Games</option>
            <option value="1996">1996</option>
            <option value="2000">2000</option>
            <option value="2010">2010</option>
            <option value="2021">2021</option>
          </select>
          {/* <CenteredText>There are {gamelist.length} books in this category.</CenteredText> */}
          <>
            {gamelist.map((game) => {
              return (
                <Card key={game._id}>
                  <p>{game.title}</p>
                  <p>Released: {game.year_released}</p>
                  <p>Platform: {game.platform}</p>
                  <p>ESRB Rating: {game.esrb_rating}</p>
                </Card>
              )
            })}
          </>
        </>
      )}
    </Wrapper>
  )
}