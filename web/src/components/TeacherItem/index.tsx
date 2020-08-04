import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';


function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/10510126?s=460&v=4" alt="Herculino Trotta"/>
                <div>
                    <strong>Herculino Trotta</strong>
                    <span>História</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget metus interdum, scelerisque augue in, aliquet nisi.
                <br/><br/>
                Nullam vel viverra lectus. Duis tristique orci nec lobortis ullamcorper. Curabitur vitae placerat tortor, quis congue nulla. Vestibulum nunc nibh, varius nec pretium et, fringilla venenatis nunc. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 30,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;