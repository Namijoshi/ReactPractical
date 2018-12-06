import React,{Component} from 'react'
import styled from 'styled-components'
import '../App.css'



const Button = (props) => {
	// console.log(props.style);
	return(
	<button 
		// style= {divStyle} 
		// id="btnhover"
		className="btnhover"
		// className = {props.type=='primary'? 'btn btn-primary' : 'btn btn-secondary'}
		onClick= {props.onClick} > 
		{props.name} 
	</button>)
}


export default Button;



