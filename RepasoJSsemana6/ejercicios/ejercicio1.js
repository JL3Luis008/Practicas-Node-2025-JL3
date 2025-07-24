
export function ejercicio1(cadena) {
  // Método 1: Usar métodos de array (más legible y funcional)
  // 1. split('') convierte la cadena en array de caracteres
  // 2. reverse() invierte el orden del array
  // 3. join('') convierte el array de vuelta a cadena
  return cadena.split('').reverse().join('');
}