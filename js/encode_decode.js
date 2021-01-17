document.getElementsByClassName("menu")[1].addEventListener("click", function() {
	$("#main").children().remove();
	$(".send-data").css("visibility" , "hidden");
	showFunction()
})


function showFunction(){
	$("#main").append(showFunctionHTML());
	convertBtnListener();
}

function convertBtnListener(){
	document.getElementsByClassName("convert-btn")[0].addEventListener("click", convert)
}

function convert(){
	let convertTo = $("#convertTo option:selected").val();
	let convertFrom = $("#convertFrom option:selected").val();
	let data = $(".convert-input").children().val();
	let result = data;

	if(convertFrom == "Text"){
		if(convertTo == "Hex")
			result = unhex(data);
		else if(convertTo == "Base64")
			result = base64decode(data);
		else if(convertTo == "Ascii")
			result = unAscii(data);
			
		printResult(result);
	}
	else if(convertFrom == "Hex")
		result = hex(data);
	else if(convertFrom == "Base64")
		result = base64encode(data);
	else if(convertFrom == "Ascii")
		result = ascii(data);

	printResult(result);
}

function hex(data){
	let result = '';
	for(let i = 0; i < data.length; i++){
		result += '' + data.charCodeAt(i).toString(16);
	}

	return result;
}

function unhex(data){
	let hex = data.toString().replace('0x', '');
	let result = '';

	for(let i = 0; i < hex.length; i += 2){
		result += String.fromCharCode(parseInt(hex.substr(i,2), 16));
	}

	return result;
}

function base64encode(data){
	return btoa(unescape(encodeURIComponent(data)));
}

function base64decode(data){
	return atob(decodeURIComponent(data));
}

function ascii(data){
	if(data.indexOf(' ') != -1){
		data = data.split(' ');
	}
	let result = '';

	for(let i = 0; i < data.length; i++){
		result += data.charCodeAt(i).toString() + ' ';
	}

	return result.trim();
}

function unAscii(data){
	if(data.indexOf(' ') != -1){
		data = data.split(' ');
	}
	let result = '';

	for(let i = 0; i < data.length; i++){
		result += String.fromCharCode(parseInt(data[i], 10));
	}

	return result;
}

function printResult(result){
	$(".convert-result").children().val(result);
}