
import React from 'react'
import './headerMenu.css'

export default function HeaderMenu({menus}){
	return(
		<div>
			<table>
				<tbody>
				<tr>
					{menus.map((item, index)=>
						<td key={index}> 
							<a href={item.path} >
								<div className={item.classNemeDiv}> 
								</div>	
							</a>    
						</td>
					)}
				</tr>
				</tbody>
			</table>	
		</div>	
	)
}