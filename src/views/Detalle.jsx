import React from "react";
import { useHistory } from "react-router-dom";
import '../styles/detalle.css'
import goCloud from '../assets/icons/gc-icon_logo.svg'
import logOut from '../assets/icons/gc-icon_logout.svg'
import arrow from '../assets/icons/gc-icon_down-arrow.svg'
import dialog from '../assets/icons/gc-icon_dialog.svg'
import check from '../assets/icons/gc-icon_check.svg'
import waiting from '../assets/icons/gc-icon_waiting.svg'
import phone from '../assets/icons/gc-icon_phone.svg'
import close from '../assets/icons/gc-icon_close.svg'
import time from '../assets/icons/gc-icon_time.svg'

export default function Detalle () {

    let history = useHistory();

    return (
        <div className="detalle_container">
            <div className="detalle_logos">
                <div className="detalle_logo">
                    <img src={goCloud} alt='LogoGoCloud' className="detalle_img_gocloud" /> 
                </div>
                <div className="detalle_logout" onClick={() => history.push("/login")}>
                    <img src={logOut} alt='LogOut' className='detalle_img_logout' />   
                </div>
            </div>
            <div className="detalle_omnia">
                <p className="detalle_p_omnia">OMNI MIA</p>
            </div>
            <div className="detalle_container2">
                <p className="detalle_titulo">Detalle de campaña</p>
                <div className="detalle_container3">
                    <div>
                        <p>Nombre de la campaña</p>
                    </div>
                    <div className="detalle_subcontainer">
                        <p><span style={{fontWeight:'600'}}>Progreso discado:</span> 73%</p>
                        <p><span style={{fontWeight:'600'}}>Consumo total:</span> 02:07 min</p>
                        <p><span style={{fontWeight:'600'}}>Duración promedio llamada:</span> 24seg</p>
                    </div>
                </div>
                <div className="detalle_containercards">
                    <div className="detalle_card">
                        <p className="detalle_p_numero1">36</p>
                        <p className="detalle_p">transferidas</p>
                        <img src={arrow} alt='arrow' className="detalle_img" />
                        <div className="detalle_line1"></div>
                    </div>
                    <div className="detalle_card">
                        <p className="detalle_p_numero2">3728</p>
                        <p className="detalle_p">Iniciadas</p>
                        <img src={dialog} alt='arrow' className="detalle_img" />
                        <div className="detalle_line2"></div>
                    </div>
                    <div className="detalle_card">
                        <p className="detalle_p_numero3">11712</p>
                        <p className="detalle_p">Discadas</p>
                        <img src={check} alt='arrow' className="detalle_img" />
                        <div className="detalle_line3"></div>
                    </div>
                    <div className="detalle_card">
                        <p className="detalle_p_numero4">7984</p>
                        <p className="detalle_p">No iniciadas</p>
                        <img src={waiting} alt='arrow' className="detalle_img" />
                        <div className="detalle_line4"></div>
                    </div>
                    <div className="detalle_card">
                        <p className="detalle_p_numero5">11712</p>
                        <p className="detalle_p">Numeros</p>
                        <img src={phone} alt='arrow' className="detalle_img" />
                        <div className="detalle_line5"></div>
                    </div>
                    <div className="detalle_card">
                        <p className="detalle_p_numero6">10</p>
                        <p className="detalle_p">Fallidas</p>
                        <img src={close} alt='arrow' className="detalle_img" />
                        <div className="detalle_line6"></div>
                    </div>
                    <div className="detalle_card">
                        <p className="detalle_p_numero7">14</p>
                        <p className="detalle_p">Compromiso Pago</p>
                        <img src={time} alt='arrow' className="detalle_img" />
                        <div className="detalle_line7"></div>
                    </div>
                </div>
                    <table className="detalle_table" >
                            <tr className="detalle_tr">
                                <th className="detalle_thead th1">TELÉFONO</th>
                                <th className="detalle_thead">FECHA</th>
                                <th className="detalle_thead">HORA</th>
                                <th className="detalle_thead">DURACIÓN</th>
                                <th className="detalle_thead">ULT. ETAPA</th>
                                <th className="detalle_thead">ULT. PASO</th>
                                <th className="detalle_thead th7">INTENTOS</th>
                            </tr>
                        <tr>
                            <td className="detalle_td">934082419</td>
                            <td className="detalle_td">05 sep 2019</td>
                            <td className="detalle_td">17:30pm</td>
                            <td className="detalle_td">25seg</td>
                            <td className="detalle_td">No iniciada</td>
                            <td className="detalle_td">s2</td>
                            <td className="detalle_td">1</td>
                        </tr>
                        <tr>
                            <td className="detalle_td">934082419</td>
                            <td className="detalle_td">05 sep 2019</td>
                            <td className="detalle_td">17:30pm</td>
                            <td className="detalle_td">25seg</td>
                            <td className="detalle_td">No iniciada</td>
                            <td className="detalle_td">s2</td>
                            <td className="detalle_td">0</td>
                        </tr>
                        <tr>
                            <td className="detalle_td">934082419</td>
                            <td className="detalle_td">05 sep 2019</td>
                            <td className="detalle_td">17:30pm</td>
                            <td className="detalle_td">25seg</td>
                            <td className="detalle_td">No iniciada</td>
                            <td className="detalle_td">s1</td>
                            <td className="detalle_td">2</td>
                        </tr>
                    </table>
            </div>
        </div>
    )
}