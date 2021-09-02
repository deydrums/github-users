import React from 'react'
import { assets } from '../../helpers/getAssets'

export const UserScreen = () => {
    return (
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
                            <div className = "p__numbers-c">
                                <div className = "p__numbers-col">
                                    <h5>Repos</h5>
                                    <h4>8</h4>
                                </div>
                                <div className = "p__numbers-col">
                                    <h5>Fallowers</h5>
                                    <h4>3938</h4>
                                </div>
                                <div className = "p__numbers-col">
                                    <h5>Fallowing</h5>
                                    <h4>9</h4>
                                </div>
                            </div>
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
    )
}
