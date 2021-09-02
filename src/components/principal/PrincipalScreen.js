import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faSearch } from '@fortawesome/free-solid-svg-icons'

export const PrincipalScreen = () => {
    return (
        <div className = 'p__container'>
            <div className = 'p__box'>
                <div className ="p__box-c p__box-1">
                    <div className = "p__box-1-c">
                        <h2>GitHubUsers</h2>
                        <h3>LIGHT <FontAwesomeIcon icon={faSun} /></h3>
                    </div>
                </div>

                <div className ="p__box-c p__box-2">
                    <div className = "p__box-2-c">
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                </div>

                <div className ="p__box-c p__box-3">
                    <div className = "p__box-3-c"></div>
                </div>

            </div>
        </div>
    )
}
