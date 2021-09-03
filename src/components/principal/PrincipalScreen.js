import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserScreen } from './UserScreen';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startSearchUser } from '../../actions/user';
import queryString from 'query-string';


export const PrincipalScreen = ({history}) => {
    const {location} = history;
    const {q = ''} = queryString.parse(location.search);


    const dispatch = useDispatch();

    useEffect(() => {
        q !== '' ? dispatch(startSearchUser(q)) : dispatch(startSearchUser())
    }, [dispatch, q])

    const {fetch} = useSelector(state => state.ui)
    const {user} = useSelector(state => state.user)

    const [formValues, handleInputChange] = useForm({
        username: q,
    });

    const {username} = formValues;

    const handleSearchSubmit = (e) =>{
        e.preventDefault();
        history.push(`?q=${username}`);
        dispatch(startSearchUser(username));
    }

    
    return (
        <div className = 'p__container'>
            <div className = 'p__box'>
                <div className ="p__box-c p__box-1">
                    <div className = "p__box-1-c">
                        <h2>GitHubUsers</h2>
                        {/* <h3>LIGHT <FontAwesomeIcon icon={faSun} /></h3> */}
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
                                        name = "username"
                                        value = {username}
                                        onChange = {handleInputChange}
                                    >
                                    
                                    </input>
                                </div>
                                <div className = "p__search-2-btn">
                                    <button
                                        type="submit"
                                        className="btn btn-submit"
                                        disabled={!username}
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
                        {
                            fetch ?
                            <div className="loader"></div>
                            :
                                user
                                ?
                                <UserScreen 
                                key={user.id}
                                {...user}
                                />
                                :
                                <div className = "p__user-notfound"><i class="fas fa-exclamation-circle m-1"></i>El usuario no existe</div>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
