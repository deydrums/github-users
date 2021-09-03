import moment from 'moment';
import React from 'react';
import { assets } from '../../helpers/getAssets';


export const UserScreen = (user) => {
    moment.updateLocale('es', {
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
        weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
        weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
        weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
      })

    return (
            <div className = "p__box-3-container">
                <div className = "p__box-3-a">
                    <div className = "p_box-img">
                        <div className = "p__img-cont">
                            {
                                user.avatar_url
                                ?
                                <img src = {user.avatar_url} alt='profile-img'/>
                                :
                                <img src = {assets(`./GitHub.png`).default} alt='profile-img'/>
                            }
                            
                        </div>
                    </div>
                    <div className = "p_box-usr-d">
                        <h1>{
                            user.name
                            ?
                            user.name
                            :
                            <>Sin Nombre</>
                            
                            }</h1>
                        <h2>@{user.login}</h2>
                        <h3>Unido en {moment(user.created_at).format('LL')}</h3>
                    </div>
                </div>
                <div className = "p__box-3-b">
                    <div className = "p__blankspace">

                    </div>
                    <div className = "p__bio">
                        <p>
                            {
                                user.bio 
                                ?
                                user.bio
                                :
                                <>Este usuario no posee descripcion.</>
                            }
                        </p>
                        <div className = "p__numbers">
                            <div className = "p__numbers-c">
                                <div className = "p__numbers-col">
                                    <h5>Repos</h5>
                                    <h4>{user.public_repos}</h4>
                                </div>
                                <div className = "p__numbers-col">
                                    <h5>Fallowers</h5>
                                    <h4>{user.followers}</h4>
                                </div>
                                <div className = "p__numbers-col">
                                    <h5>Fallowing</h5>
                                    <h4>{user.following}</h4>
                                </div>
                            </div>
                        </div>

                        <div className = "p__minfo">
                            <div className = "col">
                                <h4>
                                    <i className="fas fa-map-marker m-1"></i>
                                    {
                                        user.location
                                        ?
                                        user.location
                                        :
                                        <>No disponible</>
                                    }
                                </h4>
                                <h4>
                                    <i className="fas fa-link m-1"></i>
                                    <a href={user.html_url} target="_blank" rel="noreferrer">
                                        {user.html_url.split("https://github.com")}
                                    </a>
                                </h4>
                            </div>
                            <div className = "col">
                                <h4>
                                <i className="fab fa-twitter m-1"></i> 
                                    {
                                        user.twitter_username 
                                        ?
                                        <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">
                                            {user.twitter_username }
                                        </a>
                                        :
                                        <>No disponible</>
                                    }
                                </h4>
                                <h4>
                                    <i className="fas fa-globe m-1"></i> 
                                    {
                                        user.blog
                                        ?
                                        <a href={user.blog} target="_blank" rel="noreferrer">
                                            website
                                        </a>
                                        :
                                        <>No disponible</>
                                    } 
                                </h4>   
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}
