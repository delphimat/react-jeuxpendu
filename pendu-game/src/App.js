import React, {Component} from 'react';
import './App.css';

import DrawGame from "./DrawGame";
import InputGame from "./InputGame";
import OutputGame from "./OutPutGame";

class App extends Component {

    state = {
        word: "Mathieu is the best",
        lettersUsed: ['a', 'b', 'c', 'd', 'e', 'z'],
        urlPicture : "https://www.funmeninges.com/modules/game_pendu/images/pendu_image_1.jpg",
    }

    genRandomWord() {

    }

    genWordToDisplay() {
        return this.state.word;
    }

    genImageToDisplay() {
        return "https://www.funmeninges.com/modules/game_pendu/images/pendu_image_"+this.state.lettersUsed.length+".jpg";
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
                                <InputGame letterUsed={this.state.lettersUsed}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;
