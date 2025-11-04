var esPrimo = (numero) => {
  // Los números menores o iguales a 1 no son primos.
  if (numero <= 1) {
    return false;
  }
  // Solo necesitamos verificar divisores hasta la raíz cuadrada del número.
  for (let i = 2; i * i <= numero; i++) {
    // Si encontramos un divisor, no es primo.
    if (numero % i === 0) {
      return false;
    }
  }
  // Si no encontramos divisores, es primo.
  return true;
}