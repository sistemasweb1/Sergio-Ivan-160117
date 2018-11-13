function validar() {
	var nombre, apellido paterno, apellido materno, fecha, correo, usuario, contraseña, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apellido paterno = document.getElementById("apellido paterno").value;
    apellido materno = document.getElementById("apellido materno").value;
    fecha = document.getElementById("fecha").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    telefono = document.getElementById("telefono").value;
  

if(nombre === ""|| apellido paterno === "" || apellido materno === "" 
|| fecha === "" || correo === "" || usuario === "" || contraseña ==="" || telefono === "") {
	alert("Los campos son obligatorios");
	return false;
}

else if(nombre.lenght>30) {
	alert("El nombre es muy largo");
	return false;
}

else if(apellido paterno.lenght>30 || apellido materno.lenght>30) {
	alert("El apellido es muy largo");
	return false;
}

else if(correo.lenght>60) {
	alert("El correo es muy largo"); 
	return false; 
}

else if(fecha.lenght>8) {
	alert("Fecha invalida"); 
	return false; 
}

else if(correo.lenght>50 || usuario.lenght>50) {
	alert("Demasiado largo"); 
	return false; 
}

else if(contraseña.lenght>20) {
	alert("La contraseña es muy larga"); 
	return false; 
}

else if(telefono.lenght>10) {
	alert("Ingrese numero de 10 digitos"); 
	return false; 
}

}