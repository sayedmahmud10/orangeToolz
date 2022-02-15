const x = document.querySelector("input");

x.addEventListener("change",()=>{
	maxFileSize=10*1024;
	fileSize = x.files[0].size;	
	if(fileSize>maxFileSize){
		window.alert("SORRY file size limit exceeded") 
		return;
	} 
	const fr = new FileReader();

	fr.onloadend = e =>{
		
		
		let r = fr.result.split("\n").map (e =>{
			return e.split(",");
		})
		r.forEach(e=>{
			let m = e.map(e =>{
				return `<td>${e}</td>`
			}).join("")
		
		const ce = document.createElement("tr");
		ce.innerHTML = m;
		if(ce.innerHTML !== ""){
			document.querySelector("table").append(ce)
		}	
		});		
	}
	fr.readAsText(x.files[0])
})
