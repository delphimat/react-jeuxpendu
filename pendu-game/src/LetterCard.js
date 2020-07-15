import React from 'react'
import PropTypes from "prop-types"

import './LetterCard.css'

const LetterCard = ({letter}) => (
    letter !== ' ' ? <div className="_lettre">{letter}</div> : <div className="_lettre">&nbsp;</div>
)

export default LetterCard