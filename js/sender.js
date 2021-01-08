document.getElementsByClassName("send-data-btn")[0].addEventListener("click", () => {
	let data = getParameterData();
	request(data);
})


function getParameterData(){
	let data = {};

	for (let i = 0; i < $(".parameter-input-param").length; i++) {
		data[$(".parameter-input-param")[i].value] = $(".parameter-input-data")[i].value;
	}

	return data;
}


function request(data){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		let current_url = tabs[0].url;
		current_url = current_url.substr(0, current_url.indexOf("?")+1);
		
		for(let i = 0; i < Object.keys(data).length; i++){
			current_url += Object.keys(data)[i] + "=" + data[Object.keys(data)[i]]

			if(i + 1 == Object.keys(data).length)	break;

			current_url += "&";
		}

		if(checkNewTabOption()){
			chrome.tabs.create({url : current_url});
		}
		else{
			chrome.tabs.update(tabs[0].id, {url: current_url});
		}
	})
}


function checkNewTabOption(){
	return $("input[name=check_new_tab]").is(":checked");
}