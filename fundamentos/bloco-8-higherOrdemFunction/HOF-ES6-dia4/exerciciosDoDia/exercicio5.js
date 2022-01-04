const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.
function containsA() {
    return names.reduce((acc, current) => {
        return acc + 
        current.split('').reduce((contador, letra) => {
            if (letra === 'a' || letra === 'A') {
                return contador += 1;
            }
            return contador
        }, 0);
    }, 0);
}
console.log(containsA());