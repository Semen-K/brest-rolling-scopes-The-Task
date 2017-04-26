import React from 'react'
import './Contact.css'
import ElementTextContact from './ContactElement/ElementTextContact'
import ElementForm from './ContactElement/ElementForm'
import ElementMap from './ContactElement/ElementMap'


export default function Contact({srcMap}) {	
	return(
		<div className='Contact'>
			<ElementMap src={srcMap}/>
			<ElementTextContact/>
			<ElementForm/>				
		</div>	
	)
}