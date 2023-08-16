class CaixaDaLanchonete {

    pagamento(metodoDePagamento, valorTotal) {
        let pagamento = 0;
        if(metodoDePagamento == "dinheiro") {
            pagamento = valorTotal - valorTotal * 0.05;
        }
        else if(metodoDePagamento == "credito") {
            pagamento = valorTotal + valorTotal * 0.03;
        }
        else {
            pagamento = valorTotal;
        }
        pagamento = `R$ ${pagamento.toFixed(2).replace('.', ',')}`;
        return pagamento;
    }

    calcularValorDaCompra(metodoDePagamento, itens) {

        const opcoes = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };

        let cafe = 0;
        let extraCafe = 0;
        let sanduiche = 0;
        let extraSanduiche = 0;
        let valorTotal = 0;
        let pagamentoFinal = 0;

        for (const item of itens) {
            const [opcao, quantidade] = item.split(',');
            if (!opcoes[opcao]) {
                return "Item inválido!";
            } else {
                if(quantidade <= 0) {
                    return "Quantidade inválida!";
                }
                if(opcao == "cafe") {
                    cafe += 1;
                }
                if(opcao == "chantily") {
                    extraCafe += 1;
                }
                if(opcao == "sanduiche") {
                    sanduiche += 1;
                }
                if(opcao == "queijo") {
                    extraSanduiche += 1;
                }
            }
            valorTotal += opcoes[opcao] * parseInt(quantidade);
        }
        
        if((extraCafe > 0 && cafe == 0) || (extraSanduiche > 0 && sanduiche == 0)) {
            return "Item extra não pode ser pedido sem o principal";
        }

        if (valorTotal === 0) {
            return "Não há itens no carrinho de compra!";
        }

        if(metodoDePagamento != "credito" && metodoDePagamento != "debito" && metodoDePagamento != "dinheiro") {
            return "Forma de pagamento inválida!";
        }

        pagamentoFinal = this.pagamento(metodoDePagamento, valorTotal);

        return pagamentoFinal;
    }

}

export { CaixaDaLanchonete };
