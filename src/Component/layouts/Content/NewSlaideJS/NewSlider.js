import React, {Component} from 'react'
import './NewSlider.css'
import classNames from 'classnames'
import ComponentControl from './ComponentControl/ComponentControl.js'
import SliderComponent from '../sliderComponent/sliderComponent.js'
import SliderComponentVariant from '../sliderComponentVariant/sliderComponentVariant.js'


class NEwslider extends Component {
	constructor(props) {
		super(props);		
		this.state = { 
			classSliderNext: true,
			classSliderBack: false
		};
		this.onClickNext=this.onClickNext.bind(this);
		this.onClickBack=this.onClickBack.bind(this);
	}

	onClickNext(){
		this.setState({
			classSliderNext: !this.state.classSliderNext,
			classSliderBack: !this.state.classSliderBack
		})
	}	

	onClickBack(){
		this.setState({
			classSliderNext: !this.state.classSliderNext,
			classSliderBack: !this.state.classSliderBack
		})
	}

	 render() {  
	   return(
		   <div className='Newslider'>
			    <ComponentControl movit={this.onClickNext} unmovit={this.onClickBack}/>
			   
			   <div className={classNames('Slider1', {classSliderNext: this.state.classSliderNext})}>
			   		<SliderComponent/>
			   </div>
			   <div className={classNames('Slider2', {classSliderBack: this.state.classSliderBack})}>
			   		<SliderComponentVariant/>
			   </div>

		   </div>		
		)    
	  }
}

export default NEwslider;

	



