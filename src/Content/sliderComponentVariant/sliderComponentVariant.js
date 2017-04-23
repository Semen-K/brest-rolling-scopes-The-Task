import React from 'react'
import './sliderComponentVariant.css'
import ComponentTextName from '../ComponentTextSlider/ComponetText/TextName';
import ComponentTextBrest from '../ComponentTextSlider/ComponetText/ComponentTextBrest';
import ComponentTextMake from '../ComponentTextSlider/ComponetText/ComponentTextMake';
import ComponentTextWedding from '../ComponentTextSlider/ComponetText/ComponentTextWedding.js'


export default function SliderComponentVariant() {
	return(
		<div className="sliderVariant" >
			<div className="sliderVariantItem">
			</div>
			<div className='TextSliderVariant'>
	            <div className='ComponentTextNameVariant'>
			   		<ComponentTextName/>
			   	</div>
				<div className='ComponentTextWedding'>
			   		<ComponentTextWedding/>
			   		<ComponentTextMake/>
				</div>
			   	<div className='ComponentTextBrestVariant'>	
			   		<ComponentTextBrest/>
			   	</div>			   					
		   	</div>				
		</div>
	)
}