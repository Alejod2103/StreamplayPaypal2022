export default function validateForm({ name, email, password, confirmPass }) {
	if (!name.trim()) {
		return 'El nombre de usuario es obligatorio';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Email es obligatorio';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Ingresa informacion de correo valida';
	}
	if (!password) {
		return 'La contraseña es obligatoria';
	} else if (password.length < 6) {
		return 'La contraseña debe tener mas de 6 caracteres';
	}

	if (!confirmPass) {
		return 'Confirme las contraseñas';
	} else if (confirmPass !== password) {
		return 'Las contraseñas no coinciden';
	}
	return null;
}
