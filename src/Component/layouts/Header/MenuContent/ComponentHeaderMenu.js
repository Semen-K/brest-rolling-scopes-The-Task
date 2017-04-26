import React from 'react'
import ComponentMenu from './componentMenu';
import './ComponentHeaderMenu.css'



export default function ComponentHeaderMenu(){
const nameUpMenu=[
	{
		nameUp: 'O СЕБЕ',
		path_url: '/',		
	},
		{
		nameUp: 'ПОРТФОЛИО',
		path_url: '/Portfolio',		
	},
	{
		nameUp: 'ОБУЧЕНИЕ',
		path_url: '/Learn',		
	},
	{
		nameUp: 'КОНТАКТЫ',
		path_url: '/Contact',		
	},
	{
		nameUp: 'ОТЗЫВЫ',
		path_url: '/Write',		
	},
	{
		nameUp: 'Чат',
		path_url: '/Chat',		
	},
];

	return(
		<div className='PositionMenu'>
			<ComponentMenu UpMenu={nameUpMenu} />
		</div>		
	)
}
