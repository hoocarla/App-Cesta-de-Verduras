import logo from  '../../../assets/assets/LOGO.png';
import tomate from '../../../assets/assets/frutas/Tomate.png';
import batata from '../../../assets/assets/frutas/Batata.png';
import brocolis from '../../../assets/assets/frutas/Brócolis.png';
import pepino from '../../../assets/assets/frutas/Pepino.png';
import abobora from '../../../assets/assets/frutas/Abóbora.png';
const cesta = {
    topo: {
        titulo: "Horti Fruti",
    }, 

    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Carla's Farm",
        descricao: "Seleção da Fazenda: os melhores produtos da terra direto para a sua mesa.",
        preco: "R$ 10,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da Cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Brócolis",
                imagem: brocolis,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }
        ]
    }
}

export default cesta;