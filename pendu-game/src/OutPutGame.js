import React, {Component} from 'react'
import PropTypes from "prop-types"
import LetterCard from "./LetterCard";

class OutputGame extends Component
{
    constructor(props) {
        super();

        this.word = props.word;
        this.letterUsed = props.letterUsed;
    }

    genLetterToDisplay(c)
    {
        if (this.letterUsed.includes(c)) {
            return c;
        }

        if (c === ' ') {
            return ''
        }
        return '-'
    }

    render() {
        return (
            <span>
                {this.word.split("").map((character, index) => character === ' ' ? "_" :  <LetterCard  key={index} letter={this.genLetterToDisplay(character)}/>  )}
            </span>
        )
    }
}

export default OutputGame