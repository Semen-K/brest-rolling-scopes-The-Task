import React from 'react'
import HeaderMenu from './headerMenu.js';
import './SocSetiComponent.css'

export default function ComponentMenuSocSeti(){
const menu=[
	{
		path: 'vk.com',		
		classNemeDiv: 'icon vk'
	},	
	{
		path: 'vk.com',
		classNemeDiv: 'icon twitter',
	},
	{
		path: 'vk.com',
		classNemeDiv: 'icon facebook',
	},
	{
		path: 'vk.com',
		classNemeDiv: 'icon youtube',
	},
	{
		path: 'vk.com',
		classNemeDiv: 'icon google',
	},
	{
		path: 'vk.com',
		classNemeDiv: 'icon maill',
	}
];

	return(
		<div className='SocSetiPosition'>
			<HeaderMenu menus={menu} />
		</div>		
	)
}
