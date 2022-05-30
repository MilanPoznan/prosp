import React, { useState, useEffect } from 'react'

import { Heading1, Heading2 } from '../styles/globalComponents.styled'

export default function TextShuffle({ value, isPageLoadingAnimation = true }) {


  const [start, setStart] = useState(false)
  const [characterShuffle, setCharacterShuffle] = useState(value)
  useEffect(() => {
    setStart(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let timer = null;

    if (start) {
      // creating array and spliting value string into an array of characters 
      const originalText = value.split('')
      let counter = 0;

      // random shuffling characters in array
      const randomShuffle = (characters) => {
        // temporary variable to store characters from array while random shuffling
        let tempCharacters;

        for (let i = characters.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          tempCharacters = characters[i];
          characters[i] = characters[j];
          characters[j] = tempCharacters;
        }

        return characters;
      }

      const repeatShuffle = (times, index) => {
        isPageLoadingAnimation && counter++

        if (index === times) {
          setCharacterShuffle(value);

          return;
        }

        timer = setTimeout(() => {
          let randomCharacters = randomShuffle(originalText)

          // adding some other charachters to shuffle array
          index === 0 && randomCharacters.push('!', '#', '$', '&', '1', '2', '3', '4', '5', '6');

          for (let i = 0; i < index; i++) {
            randomCharacters[i] = value[i];
          }
          randomCharacters = randomCharacters.join('');
          // removing randomly from the end, the same number of characters as added(!, @...), so the word won't have more characters while shuffling
          randomCharacters = randomCharacters.substring(0, randomCharacters.length - (randomCharacters.length - value.length));

          setCharacterShuffle(randomCharacters);
          if (isPageLoadingAnimation) {
            counter > 5 && index++
          } else {
            index++
          }
          repeatShuffle(times, index);
        }, 55)
      }
      repeatShuffle(originalText.length, 0);
    }
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start])
  return (
    <Heading1>{characterShuffle}</Heading1>
  )
}
