import React from 'react'
import './sliderComponent.css'
import ComponentTextName from '../ComponentTextSlider/ComponetText/TextName';
import ComponentTextBrest from '../ComponentTextSlider/ComponetText/ComponentTextBrest';
import ComponentTextMake from '../ComponentTextSlider/ComponetText/ComponentTextMake';

export default function SliderComponent() {	
	return(
		<div className="slider" >
			<div className="slider_item">

			</div>			
			<div className='TextSlider'>
				<div className='ComponentTextName'>		
			   		<ComponentTextName/>
			   	</div>
			   	<div className='ComponentTextSlider'>
			   		<ComponentTextMake />
					<ComponentTextBrest />
				</div>
		   	</div>				
		</div>	
	)
}