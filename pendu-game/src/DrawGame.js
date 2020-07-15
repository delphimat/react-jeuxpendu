import React from 'react'
import PropTypes from "prop-types"

const DrawGame = ({urlToDisplay, nbrLetter}) => (
    <div>

        <img src={urlToDisplay}
             alt="Le pendu en image" border="1" width="181" height="175"/>
            <p>Trouvez un mot de {nbrLetter} lettres en 13 coups</p>
    </div>
)

export default DrawGame