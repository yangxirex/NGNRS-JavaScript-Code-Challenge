function show() {
	// Get Values
	var cname  = document.getElementById('cname' ).value;
	//var area    = document.getElementById('area' ).value;
	var area = $('#area').val();
	
	// Alert
	alert("--- Your Input ---\nCustomer Name: " + cname + "\nArea: " + area);
}