import React from 'react'
import { assets } from '../../helpers/getAssets'

export const UserScreen = (user) => {

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
                        <h3>Unido 25 Junio 2011</h3>
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
