import React from 'react'
import ComponentMenuSocSeti from './SocSeti/SocSetiComponent.js';
import ComponentHeaderMenu from './MenuContent/ComponentHeaderMenu.js'
import Telefon from './Telefon/Telefon.js'
import './header.css'

export default function Header(){
	return(
		<div className="blockHeader">
			<div className="blockHeaderPosition">
				<ComponentMenuSocSeti />
				<Telefon />
			</div>
			<div className="blockHeaderPosition">		
				<ComponentHeaderMenu />
			</div>
		</div>	
	)
}