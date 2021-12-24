import React from "react";
import { useHistory } from "react-router-dom";

import '../styles/login.css'
import goCloud from '../assets/gc-logo-default.svg'
import robot from "../assets/gc-robot.svg"

export default function Login () {

    let history = useHistory();

    return (
        <div className="login_container">
            <div className='login_container1'>
                <div>
                    <div className="login_gocloud">
                        <img src={goCloud} alt='GoCloud' />
                    </div>
                    <div className="login_robot">
                        <img src={robot} alt="Robot" className="login_img_robot" />
                    </div>
                </div>
                <div className="login_form">
                    <label className="login_label">Correo<br/>Electronico
                        <input className="login_input" type='email' />
                    </label>
                    <label className="login_label">Contraseña
                        <input className="login_input" type='password' />
                    </label>
                </div>
                <div>
                    <button className="login_button" onClick={() => history.push("/detalle")}>Ingresar</button>
                </div>
            </div>
        </div>
    );
}