import React,{Component} from 'react';
import './Poll.css';

export default class Poll extends Component{
    render(){
        return(
            <section className="poll">
                <div className="container">
                    <div className="header animated fadeIn">
                        <h3>Как проходит регистрация на джанкет тур</h3>
                        <p>Всю информацию необходимую информацию, мы предоставим после анкетирования</p>
                    </div>
                    <div className="poll-timeline">
                        <ul>
                            <li className="item_1 transition animate-box animated fadeIn">
                                <div className="title">Заполните анкету</div>
                                <div className="info">Введите все данные для связи,
                                                        после чего вам расскажут о всех предложения</div>
                                <div className="number">
                                    <span>1.</span>
                                </div>
                            </li>
                            <li className="item_2 transition animate-box animated fadeIn">
                                <div className="title">Сделайте свой выбор</div>
                                <div className="info">Консультант поможет сделать вам выбор относительно ваших предпочтений</div>
                                <div className="number">
                                    <span>2.</span>
                                </div>
                            </li>
                            <li className="item_3 transition animate-box animated fadeIn">
                                <div className="title">Составте договор</div>
                                <div className="info">Договор включает обязательства казино и ваши,
                                                         относительно игры в данном казино</div>
                                <div className="number">
                                    <span>3.</span>
                                </div>
                            </li>
                            <li className="item_4 transition animate-box animated fadeIn">
                                <div className="title">Планируйте день поездки</div>
                                <div className="info">Бронируйте маршрут вылета и прилета,
                                                        а также совершаете предоплату билетов</div>
                                <div className="number">
                                    <span>4.</span>
                                </div>
                            </li>
                            <li className="item_5 transition animate-box animated fadeIn">
                                <div className="title">Совершаете поздку</div>
                                <div className="info">Перелет в город местонахождения казино, 
                                                        после чего вас встречает представитель казино</div>
                                <div className="number">
                                    <span>5.</span>
                                </div>
                            </li>
                            <li className="item_6 transition animate-box animated fadeIn">
                                <div className="title">Начало игры</div>
                                <div className="info">Покупка в кассе казино фишек на оговоренную в договоре суму,
                                                         играете согласно оговоренным условиям в договоре</div>
                                <div className="number">
                                    <span>6.</span>
                                </div>
                            </li>
                            <li className="item_7 transition animate-box animated fadeIn">
                                <div className="title">Возврат компенсации</div>
                                <div className="info">После выполнения условия договора по игре, 
                                                        казино компенсирует затраты на перелет и пакетные предложения</div>
                                <div className="number">
                                    <span>7.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}