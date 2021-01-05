$(document).ready(() => {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		let current_url = tabs[0].url;
		let params = getUrlParams(current_url);

		showData(params)
		
	})
})


/* URL query parsing function */
function getUrlParams(current_url) {
    var params = {};
    current_url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
}

/* Print result on popup.html */
function showData(data){
	if(Object.keys(data).length == 0){
		let html = `<div class="no-result center">
						No data :(
					</div>`;
		$("#main").append(html);
		$(".send-data-btn").attr("disabled", true);
		return;
	}

	for(let i=0; i<Object.keys(data).length; i++){
		let html = `<div class="row result-box">
						<div class="parameter-name">
							${Object.keys(data)[i]}
						</div>
						<div class="parameter-input">
							<input type="text" class="form-control parameter-input-data" value="${data[Object.keys(data)[i]]}">
						</div>
					`;

		if(i+1 == Object.keys(data).length){
			html += `<button type="button" class="btn btn-success" id="add-parameter">+</button> </div>`;
		}
		else{
			html += `</div>`;
		}
		$("#main").append(html);
	}

	addParameterClickListener();
}

/* Add event */
function addParameterClickListener(){
	document.getElementById("add-parameter").addEventListener("click", createParameter)
}

/* Create parameter form */
function createParameter(){
	$("#add-parameter").remove()
	let parameter = `<div class="row result-box">
						<div class="parameter-name">
							<input type="text" class="form-control parameter-input-data parameter-input-param">
						</div>
						<div class="parameter-input">
							<input type="text" class="form-control parameter-input-data">
						</div>
						<button type="button" class="btn btn-success" id="add-parameter">+</button>
					</div>`
	$("#main").append(parameter);

	addParameterClickListener();
}
