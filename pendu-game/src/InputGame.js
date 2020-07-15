import React, {Component} from 'react'
import PropTypes from "prop-types"
import LetterCard from "./LetterCard";

import "./InputGame.css"

class InputGame extends Component {

    constructor (props) {
        super()

        this.letterUsed = props.letterUsed
        this.listAtoZ   = 'abcdefghijklmnopqrstuvwxyz'
    }

    genClassLetter(c) {
        console.log("test" + this.letterUsed)
        if (this.letterUsed.includes(c)) {
            return '_me   _ds_bp'
        }

        return '_me'
    }

    render()
    {
        return (
            <center>
                <div>
                    {this.listAtoZ.split("").map((c, index) =>
                        (
                            <a href="#" key={index}  title="Essayez la lettre {c}">
                                <div className={this.genClassLetter(c)}>{c}</div>
                            </a>
                        ))}
                </div>
                <p>
                    Il vous reste <b>{13 - this.letterUsed.length} essai(s)</b>
                </p>
            </center>
        )
    }
}

export default InputGame