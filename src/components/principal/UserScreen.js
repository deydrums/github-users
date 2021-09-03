import React from 'react'
import { assets } from '../../helpers/getAssets'

export const UserScreen = (user) => {

    return (
            <div className = "p__box-3-container">
                <div className = "p__box-3-a">
                    <div className = "p_box-img">
                        <div className = "p__img-cont">
                            <img src = {assets(`./GitHub.png`).default} alt='profile-img'/>
                        </div>
                    </div>
                    <div className = "p_box-usr-d">
                        <h1>{user.name}</h1>
                        <h2>@{user.login}</h2>
                        <h3>Unido 25 Junio 2011</h3>
                    </div>
                </div>
                <div className = "p__box-3-b">
                    <div className = "p__blankspace">

                    </div>
                    <div className = "p__bio">
                        <p>
                            {user.bio}
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
                                <h4>{user.location}</h4>
                                <h4>{user.html_url}</h4>
                            </div>
                            <div className = "col">
                                <h4>{user.twitter_username}</h4>
                                <h4>agithub</h4>   
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}
