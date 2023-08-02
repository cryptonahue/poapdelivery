import months from "./months";

let month = "";

function datos2 (date){
	
	let newDate1 = date.split('T');
	let newDate2 = newDate1[0];
	let newDate3 = newDate2.split('-');

	if (newDate3[1] == 1) {
		month = "Enero";
	}
	if (newDate3[1] == 2) {
		month = "Febrero";
	}
	if (newDate3[1] == 3) {
		month = "Marzo";
	}
	if (newDate3[1] == 4) {
		month = "Abril";
	}
	if (newDate3[1] == 5) {
		month = "Mayo";
	}
	if (newDate3[1] == 6) {
		month = "Junio";
	}
	if (newDate3[1] == 7) {
		month = "Julio";
	}
	if (newDate3[1] == 8) {
		month = "Agosto";
	}
	if (newDate3[1] == 9) {
		month = "Septiembre";
	}
	if (newDate3[1] == 10) {
		month = "Octubre";
	}
	if (newDate3[1] == 11) {
		month = "Noviembre";
	}
	if (newDate3[1] == 12) {
		month = "Diciembre";
	}
	return newDate3[2]+ ", " + month+" del "+newDate3[0];
}




export default datos2;
