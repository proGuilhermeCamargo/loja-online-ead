


function calcularTotal (itens) {
    let total = 0 

    for (let i = 0; i < itens.length; i++) {
        total += itens[i].preco
    }

    // aplica desconto de fidelidade
    // Isso e um teste

    return total
}