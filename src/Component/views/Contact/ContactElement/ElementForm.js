import React from 'react'
import './ElementForm.css'


export default function ElementForm() {	
	return(
		<div className='ElementForm'>
			<div className="blockForm">
				<div className="main">
					<header>
						<h3>Свяжитесь со мной</h3>
						<p>Задайте свой вопрос прямо здесь</p>
					</header>
					<article>
						<form className="auth" action="/login/ll" method="post">
							<div>
								<label htmlFor="username">Ваше имя.</label>
								<input id="username" type="text" name="username" placeholder="Екатерина" form="auth"/>
							</div>
							<div>
							<label htmlFor="E-mail">
							Ваш E-mail							
							</label>
								<input id="E-mail" type="text" name="E-mail" placeholder="Можно вводить соц.сети" form="auth"/>
							</div>
							<div >
								<label htmlFor="qustion">Задайте свой вопрос.</label>
								<input id="qustion" type="text" name="qustion" placeholder="Когда можно записаться?" form="auth"/>
							</div>
							<div>
								<input type="submit" value="Отправить" />
							</div>
						</form>
					</article>
				</div>
			</div>
		</div>	
	)
}

