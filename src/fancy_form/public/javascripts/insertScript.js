function check(event) {
	// Get Values
	var cname  = document.getElementById('cname' ).value;
	var area    = document.getElementById('area'   ).value;

	if(cname.length == 0) {
		alert("Invalid customer name");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
	if(area.length == 0) {
		alert("Invalid area");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
}