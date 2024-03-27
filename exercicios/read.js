const clientes = require('./practice.json');
// console.log(clientes);

// find
function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor));
};

console.log(encontrar(clientes, 'nome', 'Kirby'));
console.log(encontrar(clientes, 'telefone', '1918820860'));

// filter
function filtrarApartementoSemCompleto(clientes) {
    return clientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty('complemento')
        );
    });
}

console.log(filtrarApartementoSemCompleto(clientes));

// sort
function ordenar(lista, propriedade) {
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if (a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0;
    });

    return resultado;
}

const clientesOrdenado = ordenar(clientes, 'nome')
console.log(clientesOrdenado);
console.log(clientesOrdenado.reverse());