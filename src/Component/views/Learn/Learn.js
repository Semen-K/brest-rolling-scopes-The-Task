import React from 'react'
import './Learn.css'

import { createClient } from '@google/maps'

let { geocode } = createClient({key: 'AIzaSyCfj7lIs7AmRbzNfGSIjgFcem-yoe6wmA4'});

geocode({
  address: 'Брестб Альшанская 24'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});

export default function Learn() {	
	return(
		<div onClick={this.geocode}className='map' >
			Здесь будет Обучение!!!				
		</div>	
	)
}