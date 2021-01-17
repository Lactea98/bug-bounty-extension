/***********   Sender menu   **********/
function noResultHTML(){
	return `<div class="no-result center">
				No data :(
			</div>`;
}

function showDataHTML(val1, val2){
	return `<div class="row result-box">
				<div class="parameter-name">
					<input type="text" class="form-control parameter-input-param" value="${val1}">
				</div>
				<div class="parameter-input">
					<input type="text" class="form-control parameter-input-data" value="${val2}">
				</div>
			`;
}

function createParameterHTML(){
	return `<div class="row result-box">
				<div class="parameter-name">
					<input type="text" class="form-control parameter-input-param">
				</div>
				<div class="parameter-input">
					<input type="text" class="form-control parameter-input-data">
				</div>
				<button type="button" class="btn btn-success" id="add-parameter">+</button>
			</div>`;
}
/****************************************/


/**********  En / Decode Menu  **********/
function showFunctionHTML(){
	let option = `<option>Text</option>
					<option>Hex</option>
					<option>Base64</option>
					<option>Ascii</option>`;

	return `<div class="row">
				<div class="form-group option">
					<select class="form-control" id="convertTo">
						${option}
					</select>
				</div>
				<div class="text">
					>>>>
				</div>
				<div class="form-group option">
					<select class="form-control" id="convertFrom">
						${option}
					</select>
				</div>
			</div>
			<div class="row convert-container">
				<div class="convert-input">
					<textarea></textarea>
				</div>
				<div class="convert-btns">
					<br><br>
					<button type="button" class="btn btn-info convert-btn">>></button>
				</div>
				<div class="convert-result">
					<textarea readonly></textarea>
				</div>
			</div>`
}