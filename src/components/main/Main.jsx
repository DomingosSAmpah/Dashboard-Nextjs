import React from 'react'
import style from './main.module.css'
import { main } from '../../data/data'
import Chart from '../charts/Chart'
import { FaChartArea, FaUsb } from 'react-icons/fa'

const Main = () => {
  return (
    <main className={`${style.main}`}>
        <div className= {`${style.main_container}`}>
            <div className={`${style.main_title}`}>
                <img src={'images/hello.png'} alt="welcome" />
                <div className={`${style.main_greeting}`}>
                    <h1> Olá Domingos </h1> 
                    <p>Bem vindo ao seu painel de controlo</p>
                </div>
            </div>

            <div className={`${style.main_cards}`}>
                {main.map((list, index) => (
                    <>
                        <div className={`${style.card}`} key={index}>
                            <i>
                                {list.icon}
                            </i>
                            <div className={`${style.card_inner}`}>
                                <p className="text-primary-p">{list.title}</p>
                                <span className="font-bold text-title">{list.desc}</span>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            <div className={`${style.charts}`}>
                <div className={`${style.charts_left}`}>
                    <div className={`${style.charts_left_title}`}>
                        <div>
                            <h1>Daily Reports</h1>
                            <p>Cazenga, Luanda, Angola</p>
                        </div>
                        <i>
                            <FaUsb/>
                        </i>
                    </div>
                        <Chart />
                </div>

                <div className={`${style.charts_right}`}>
                    <div className={`${style.charts_right_title}`}>
                        <div>
                            <h1>Daily Reports</h1>
                            <p>Cazenga, Luanda, Angola</p>
                        </div>
                        <i><FaChartArea/></i>
                    </div>

                    <div className={`${style.charts_right_cards}`}>
                        <div className={`${style.card1}`}>
                            <h1>Lucros</h1>
                            <p>R$3.256</p>
                        </div>
                        <div className={`${style.card2}`}>
                            <h1>Pagamentos</h1>
                            <p>R$256,00</p>
                        </div>
                        <div className={`${style.card3}`}>
                            <h1>Custos de hospedagem</h1>
                            <p>R$385,00</p>
                        </div>
                        <div className={`${style.card4}`}>
                            <h1>Banco de dados</h1>
                            <p>R$185,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main