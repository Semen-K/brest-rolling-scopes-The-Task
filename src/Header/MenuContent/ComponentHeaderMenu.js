import React from 'react'
import ComponentMenu from './componentMenu';
import './ComponentHeaderMenu.css'



export default function ComponentHeaderMenu(){
const nameUpMenu=[
	{
		nameUp: 'O СЕБЕ',
		path_url: './user',		
	},
		{
		nameUp: 'ПОРТФОЛИО',
		path_url: './user',		
	},
	{
		nameUp: 'ОБУЧЕНИЕ',
		path_url: './user',		
	},
	{
		nameUp: 'КОНТАКТЫ',
		path_url: './user',		
	},
	{
		nameUp: 'ОТЗЫВЫ',
		path_url: './user',		
	},
];

	return(
		<div className='PositionMenu'>
			<ComponentMenu UpMenu={nameUpMenu} />
		</div>		
	)
}
