/* eslint-disable max-len */
import { EndpointHeader, Link, List, SecondaryHeader } from 'globalstyles/Text.styles';
import { Wrapper } from 'globalstyles/Wrapper.styles';
import React from 'react';

export const Documentation = () => {
  return (
    <Wrapper>
      <SecondaryHeader>Documentation</SecondaryHeader>
      <p>Nintendo Games is an API that allows users to fetch data about Nintendo Games released between 1996 and 2021.</p>

      <EndpointHeader>/games</EndpointHeader>

      <List>
        <li>methods: GET </li>
        <li>Accepts the following query params:</li>
        <ul>
          <li>platform: filters by the platform the game was released for</li>
          <ul>
            <li>This filter is case sensitive.</li>
            <li>The values of platform must be one of the following:</li>
            <ul>
              <li>3DS</li>
              <li>DS</li>
              <li>GBA</li>
              <li>GC</li>
              <li>iOS</li>
              <li>N64</li>
              <li>Switch</li>
              <li>WII</li>
              <li>WIIU</li>
            </ul>
            <li>Example: /games?platform=N64</li>
          </ul>
        </ul>
        <ul>
          <li>rating: filters by the ESRB rating for the game</li>
          <ul>
            <li>This filter is case sensitive.</li>
            <li>The values of platform must be one of the following:</li>
            <ul>
              <li>E</li>
              <li>E10+</li>
              <li>T</li>
              <li>M</li>
              <li>RP</li>
              <li>No Rating</li>
            </ul>
            <li>Example: /games?rating=E</li>
          </ul>
          <ul>
            <li>releaseyear: filters by the year in which the game was released</li>
            <ul>
              <li>This filter must include 4 digits.</li>
              <li>The values of platform can be any year between 1996 adn 2021, inclusive.</li>
              <li>Example: /games?releaseyear=1996</li>
            </ul>
          </ul>
          <li>author: filters by author name;</li>
          <ul>
            <li>This query accepts both exact author names and partial author names.</li>
            <li>Example: /games?author=alice</li>
            <li>Example: /games?author=Amrou Al-Kadhi</li>
          </ul>
        </ul>
        <li>Use <Link href="https://project-mongo-api-wjvhdzdcja-lz.a.run.app/games">/games</Link> </li>
      </List>
      <EndpointHeader>/games/id/:id </EndpointHeader>
      <List>
        <li>methods: GET </li>
        <li>Matches exact id numbers from the database.</li>
        <li>Use <Link href="https://project-mongo-api-wjvhdzdcja-lz.a.run.app/games/id/:id">/games/:isbn</Link> </li>
      </List>

    </Wrapper>
  )
}