
import React from 'react'
import { NavLink } from 'react-router-dom'
import './componentMenu.css'
import LogotypeComponent from '../LogotypeComponent/LogotypeComponent.js'

export default function ComponentMenu({UpMenu}){
	return(
		<div className='UpMenuDiv'>
			<div> 
				<LogotypeComponent />
			</div>
			{UpMenu.map((item, index)=>
				<div className='MenuDiv' key={index}>
        			<NavLink exact activeClassName="active" className="UpMenu" to={item.path_url}>{item.nameUp}</NavLink>
				</div>  
			)}				
		</div>	
	)
}

				
