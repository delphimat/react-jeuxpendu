import React, {Component} from 'react';
import './App.css';

import DrawGame from "./DrawGame";
import InputGame from "./InputGame";
import OutputGame from "./OutPutGame";

class App extends Component {

    state = {
        word: "mathieu",
        lettersUsed: [],
        letterFound: 0,
        urlPicture: "https://www.funmeninges.com/modules/game_pendu/images/pendu_image_1.jpg",
    }

    handleLettersUsed = (lettersUsed) => {
        console.log('test : handleLettersUsed')
        this.setState({lettersUsed: lettersUsed});
    }

    handleLetterFound = (letterFound) => {
        console.log('test : handleLetterFound')
        this.setState({letterFound: letterFound});
    }

    genRandomWord() {

    }

    genWordToDisplay() {
        return this.state.word;
    }

    genImageToDisplay() {
        return "https://www.funmeninges.com/modules/game_pendu/images/pendu_image_" + this.state.lettersUsed.length + ".jpg";
    }

    render() {
        return (
            <div className="App">
                <h3>LE JEUX DU PENDU</h3>


                <div className="row">
                    <div className="offset-2 col-sm-8">
                        <div className="row">
                            <div className="col-sm-6">
                                <DrawGame urlToDisplay={this.genImageToDisplay()} nbrLetter={this.state.word.length}/>
                                <br/>
                                <OutputGame word={this.genWordToDisplay()} letterUsed={this.state.lettersUsed}/>
                            </div>
                            <div className="col-sm-6">
                                {this.state.lettersUsed.length < 12 ? <InputGame letterUsed={this.state.lettersUsed}
                                                                                 handleLetterFound={this.handleLetterFound}
                                                                                 handleLettersUsed={this.handleLettersUsed}/> :
                                    <h1>LOSER T_T</h1>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default App;
