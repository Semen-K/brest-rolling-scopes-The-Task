import React from 'react'
import './Portfolio.css'
import CopmponentListFoto from './ComponentPortfolio/CopmponentListFoto'
import ComponentPortfolioSlaider from './ComponentPortfolio/ComponentPortfolioSlaider'

export default function Portfolio() {	
	return(
		<div className='Portfolio'>
			<ComponentPortfolioSlaider/>				
			<CopmponentListFoto/>
		</div>	
	)
}