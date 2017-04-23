import React from 'react'
import './ComponentControl.css'

export default function ComponentControl({movit, unmovit}) {

	return(
		<div className="Control" >
			<div onClick={movit} className='BackSlider'></div>
			<div onClick={unmovit} className='NextSlider'></div>	
		</div>	
	)
	
}