import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserScreen } from './UserScreen';
import { useForm } from '../../hooks/useForm';


export const PrincipalScreen = () => {

    const [formValues, handleInputChange, reset] = useForm({
        user: 'deydrums',
    });

    const {user} = formValues;

    const handleSearchSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
    }

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
                            <form className = "p__search-2" onSubmit = {handleSearchSubmit}>
                                <div className = "p__search-2-input">
                                    <input
                                        type="text"
                                        placeholder="Buscar usuario de GitHub..."
                                        name = "user"
                                        value = {user}
                                        onChange = {handleInputChange}
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
                        <UserScreen></UserScreen>
                        {/* <div className="loader"></div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}
