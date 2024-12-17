import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "../components/Card"; // exportdirecto a la funcion
import Navbar  from "../components/Navbar"; // export default

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
    
			<h1 className="text-center mt-5">Este es un ejemplo de como funciona React.js</h1>
			<div className="d-flex flex-row">
			<Card 
			image = {rigoImage}
			title = "Clase de React"
			content= "Hola esto es un repaso de React.js"
			/>
			<Card 
			image = {rigoImage}
			title = "Clase de JavaScript"
			content= "Hola esto es un repaso de javaScript"
			/>
			<Card 
			image = {rigoImage}
			title = "Clase de HTML"
			content= "Hola esto es un repaso de HTML"
			/>
			</div>
			

			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;