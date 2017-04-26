import React from 'react'
import './MapContent.css'


export default function MapContent({srct}) {	
	return(    	
	<div>
		<iframe src={srct}  allowFullScreen></iframe>
	</div>
	)

}	

