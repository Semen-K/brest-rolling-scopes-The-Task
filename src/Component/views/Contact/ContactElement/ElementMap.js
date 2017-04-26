import React from 'react'
import './ElementMap.css'
import MapContent from '../MapContent/MapContent'

export default function ElementMap({src}) {	
	return(
		<div className='ElementMap'>
			<MapContent srct={src}/>			
		</div>	
	)
}




