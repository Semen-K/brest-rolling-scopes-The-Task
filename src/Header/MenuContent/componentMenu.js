
import React from 'react'
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
						<a className='UpMenu' href={item.path_url} >{item.nameUp}</a>  
					</div>  
			)}				
		</div>	
	)
}