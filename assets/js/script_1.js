$(document).ready(function(){

// CAPTURAR INPUT DE DATOS EN UN FORM ===========================================================
	$('form').submit(function(event){
		event.preventDefault();
		let valueInput = $('#pokemonInput').val();
		 if(valueInput == parseInt(valueInput)){
		 //alert('es numero')
		 }else{
		 alert('debes ingresar un numero')
		 }
		
// ==============================================================================================

		// https://player.vimeo.com/video/500163099


// CONECTAR CON LA API DE SUPERHERO ===========================================================
			
		// AJAX, acrónimo de Asynchronous JavaScript And XML (JavaScript asíncrono y XML)
		$.ajax({
			url:'https://www.superheroapi.com/api.php/10162342950256959/'+valueInput, // el URL de la API
			success: function(data){
			let datos = data;
				let nombre = data.name;
				let imagen = data.image.url;
				let publicado_por = data.biography.publisher;
				let ocupacion = data.work.occupation;
				let primera_aparicion = data.biography.publisher;
				let altura = data.appearance.height[1];
				let peso   = data.appearance.weight[1];
				//let alianzas = eval('data.connections.group'+'-affiliation');
				let alianzas = data.connections.relatives;
				
			//alert(alianzas)	
				//let peso   = data.weight;
			
			//url = 'https://images-na.ssl-images-amazon.com/images/I/513bikNmxvL._AC_SY355_.jpg';
			let url = imagen ;
			
// PINTADO DE LOS DATOS ==========================================================================

			document.getElementById('imagen_pokemon').innerHTML = `<img src="${url}" class="fade-in-image" ></img>`;
			document.getElementById('nombre_pokemon').innerHTML = `<h1>${nombre}</h1>`;
			document.getElementById('nombre_hero').innerHTML = `${nombre}`;
			document.getElementById('publicado_por').innerHTML = `${publicado_por}`;
			document.getElementById('ocupacion').innerHTML = `${ocupacion}`;
			document.getElementById('primera_aparicion').innerHTML = `${primera_aparicion}`;
			document.getElementById('altura').innerHTML = `${altura}`;
			document.getElementById('peso').innerHTML = `${peso}`;
			document.getElementById('alianzas').innerHTML = `${alianzas}`;
			
			document.getElementById('encontrado').innerHTML = `SuperHero Encontrado`;
			
// ============================================================================================================
			
			// consume de la api la variables estadisticas del superheroe
			let estadisticas = [];
			
			/*alert(data.powerstats.intelligence)
			alert(data.powerstats.strength)
			alert(data.powerstats.speed)
			alert(data.powerstats.durability)
			alert(data.powerstats.power)
			alert(data.powerstats.combat)*/

			
			//let label = ['hab_1','hab_2','hab_3','hab_4','hab_5'];
			let label = ['intelligence','strengh','speed','durability','power','combat'];
			//let label = [estadisticas[0].label,estadisticas[1].label,estadisticas[2].label,estadisticas[3].label,estadisticas[4].label];
			
			let y     = [10,15,25,30,28];
			y[0] = parseInt(data.powerstats.intelligence);
			y[1] = parseInt(data.powerstats.strength);
			y[2] = parseInt(data.powerstats.speed);
			y[3] = parseInt(data.powerstats.durability);
			y[4] = parseInt(data.powerstats.power);
			y[5] = parseInt(data.powerstats.combat);
			
			grafica(label,y,nombre) // funcion de usuario programador creada para graficar	

			},
			
			// ==================================== EN CASO QUE FALLARA LA PETICION
			error : function(xhr, status) {
			alert('Disculpe, existió un problema');
			},
			
			
		})
		

		
		
			//https://player.vimeo.com/video/500163318			
	});
});


 // ==============================================================================================
	function grafica(input_1,input_2,input_3) {

	//Ejemplo
	//input_1 = ['hab_1','hab_2','hab_3','hab_4','hab_5'];

	label_1 = input_1[0];
	label_2 = input_1[1];
	label_3 = input_1[2];
	label_4 = input_1[3];
	label_5 = input_1[4];

	//Ejemplo
	//input_2 = [10,15,25,30,28];

	y_1 = input_2[0];
	y_2 = input_2[1];
	y_3 = input_2[2];
	y_4 = input_2[3];
	y_5 = input_2[4];
	
	//Ejeplo
	//input_3 = 'Superman'

	var chart = new CanvasJS.Chart("chartContainer", {

		theme: "light1", // "light2", "dark1", "dark2"
		animationEnabled: true, // change to true
		//exportEnabled: true,
		title:{
			text: `Estadísticas de poder para ${input_3}`
		},
		data: [
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			// https://canvasjs.com/javascript-charts/animated-chart/
			type: "pie",
			startAngle: 25,
			toolTipContent: "<b>{label}</b>: {y}%",
			showInLegend: "true",
			legendText: "{label}",
			indexLabelFontSize: 16,
			indexLabel: "{label} - {y}%",
			
			
			
			dataPoints: [
				{ label: `${label_1}`,  y: input_2[0]  },
				{ label: `${label_2}`,  y: input_2[1]  },
				{ label: `${label_3}`,  y: input_2[2]  },
				{ label: `${label_4}`,  y: input_2[3]  },
				{ label: `${label_5}`,  y: input_2[4]  }
			]
		}
		]
	});
	
 

	chart.render();


	}

 // ==============================================================================================

