import React from 'react'
import PropTypes from "prop-types"
import LetterCard from "./LetterCard";

const OutputGame = ({word, letterUsed}) => (
    <span>
        {word.split("").map((character, index) => <LetterCard  key={index} letter={character}/>  )}
    </span>
)

export default OutputGame