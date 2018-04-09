class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = '500px',
		this.width = '1000px',
		this.bg = 'red', 
		this.fontSize = '22px', 
		this.textAlign = 'center'
	}

	createDiv() {
		let div = document.createElement('div');

		div.innerHTML = "УРА";

		div.style.cssText = `height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign};`;


		document.body.appendChild(div);
	}
}


let task = new options;

task.createDiv();


