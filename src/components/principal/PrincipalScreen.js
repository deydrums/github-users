import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faSearch } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../helpers/getAssets'

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
                        <div className = "p__search">
                            <div className = "p__search-1">
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>
                            <form className = "p__search-2">
                                <div className = "p__search-2-input">
                                    <input
                                        type="text"
                                        placeholder="Buscar usuario de GitHub..."
                                    >
                                    
                                    </input>
                                </div>
                                <div className = "p__search-2-btn">
                                    <button
                                        type="submit"
                                        className="btn btn-submit"
                                    >
                                        Buscar
                                    </button>
                                </div>
                                    
                            </form>

                        </div>
                    </div>
                </div>

                <div className ="p__box-c p__box-3">
                    <div className = "p__box-3-c">
                        <div className = "p__box-3-container">
                            <div className = "p__box-3-a">
                                <div className = "p_box-img">
                                    <div className = "p__img-cont">
                                        <img src = {assets(`./GitHub.png`).default} alt='profile-img'/>
                                    </div>
                                </div>
                                <div className = "p_box-usr-d">
                                    <h1>The Octocat</h1>
                                    <h2>@octocat</h2>
                                    <h3>Unido 25 Junio 2011</h3>
                                </div>
                            </div>
                            <div className = "p__box-3-b">
                                <div className = "p__blankspace">

                                </div>
                                <div className = "p__bio">
                                    <p>
                                    try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                    </p>
                                    <div className = "p__numbers">
                                        
                                    </div>

                                    <div className = "p__minfo">
                                        <div className = "col">
                                            <h4>San Fransisco</h4>
                                            <h4>https://github.com</h4>
                                        </div>
                                        <div className = "col">
                                            <h4>Not Available</h4>
                                            <h4>agithub</h4>   
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
