// Dados dos produtos
const produtos = {
    camiseta: {
        name: 'Camiseta Classic',
        tag: 'Camisetas',
        price: 'R$ 59,90',
        img: 'Imagens/camiseta.jpeg',
        alt: 'Camiseta Classic preta com estampa dourada',
        desc: 'Camiseta exclusiva da coleção Danilo\'s Wear, confeccionada em algodão 100% premium com acabamento de alta qualidade. Design único e confortável para o dia a dia.',
        specs: [
            ['Material', '100% Algodão'],
            ['Peso', '180 g/m²'],
            ['Tamanhos', 'P, M, G, GG, GGG'],
            ['Lavagem', 'Máquina até 30°C'],
            ['Origem', 'Nacional'],
        ],
        hasSize: true,
    },
    caneca: {
        name: 'Caneca Premium',
        tag: 'Canecas',
        price: 'R$ 39,90',
        img: 'Imagens/caneca.jpeg',
        alt: 'Caneca Premium de porcelana 325ml',
        desc: 'Caneca de porcelana de alta qualidade com design exclusivo da Danilo\'s Wear. Apta para microondas e lava-louças.',
        specs: [
            ['Material', 'Porcelana'],
            ['Capacidade', '325 ml'],
            ['Microondas', 'Sim'],
            ['Lava-louças', 'Sim'],
            ['Origem', 'Nacional'],
        ],
        hasSize: false,
    },
    capinha: {
        name: 'Capinha de Celular',
        tag: 'Acessórios',
        price: 'R$ 34,90',
        img: 'Imagens/capinha.jpeg',
        alt: 'Capinha de celular personalizada',
        desc: 'Capinha personalizada com estampa exclusiva da Danilo\'s Wear. Material em silicone flexível com proteção nas bordas.',
        specs: [
            ['Material', 'Silicone'],
            ['Proteção', 'Bordas e cantos'],
            ['Modelos', 'Vários disponíveis'],
            ['Acabamento', 'Fosco'],
            ['Origem', 'Nacional'],
        ],
        hasSize: false,
    },
    chaveiro: {
        name: 'Chaveiro Metal Gold',
        tag: 'Chaveiros',
        price: 'R$ 19,90',
        img: 'Imagens/chaveiro.jpeg',
        alt: 'Chaveiro Metal Gold em aço inox dourado',
        desc: 'Chaveiro em aço inox com acabamento dourado premium. Resistente e elegante, perfeito como lembrança ou presente.',
        specs: [
            ['Material', 'Aço Inox'],
            ['Acabamento', 'Dourado'],
            ['Dimensões', '5 x 3 cm'],
            ['Peso', '25 g'],
            ['Origem', 'Nacional'],
        ],
        hasSize: false,
    },
    funko: {
        name: 'Funko Pop Exclusivo',
        tag: 'Colecionáveis',
        price: 'R$ 89,90',
        img: 'Imagens/funko.jpeg',
        alt: 'Funko Pop edição exclusiva',
        desc: 'Funko Pop edição limitada e exclusiva da Danilo\'s Wear. Acompanha caixa colecionável especial. Ideal para fãs e colecionadores.',
        specs: [
            ['Altura', '9 cm'],
            ['Material', 'Vinil'],
            ['Edição', 'Limitada'],
            ['Acompanha', 'Caixa colecionável'],
            ['Origem', 'Nacional'],
        ],
        hasSize: false,
    },
    garrafa: {
        name: 'Garrafa Térmica',
        tag: 'Canecas',
        price: 'R$ 64,90',
        img: 'Imagens/garrafa.jpeg',
        alt: 'Garrafa térmica inox 500ml',
        desc: 'Garrafa térmica de aço inox com dupla parede. Mantém a temperatura por até 12 horas e possui estampa exclusiva da Danilo\'s Wear.',
        specs: [
            ['Material', 'Aço Inox'],
            ['Capacidade', '500 ml'],
            ['Térmica', '12 horas'],
            ['Tampa', 'Rosca hermética'],
            ['Origem', 'Nacional'],
        ],
        hasSize: false,
    },
    pelucia: {
        name: 'Pelúcia Exclusiva',
        tag: 'Colecionáveis',
        price: 'R$ 79,90',
        img: 'Imagens/pelucia.jpeg',
        alt: 'Pelúcia exclusiva colecionável',
        desc: 'Pelúcia exclusiva da coleção Danilo\'s Wear com material antialérgico e acabamento premium. Ótima opção de presente.',
        specs: [
            ['Altura', '30 cm'],
            ['Material', 'Pelúcia antialérgica'],
            ['Recheio', 'Fibra siliconada'],
            ['Lavagem', 'À mão'],
            ['Origem', 'Nacional'],
        ],
        hasSize: false,
    },
    poster: {
        name: 'Poster Artístico',
        tag: 'Acessórios',
        price: 'R$ 29,90',
        img: 'Imagens/poster.jpeg',
        alt: 'Poster artístico em papel premium',
        desc: 'Poster com arte exclusiva da Danilo\'s Wear impresso em papel premium de alta resolução. Perfeito para decorar qualquer ambiente.',
        specs: [
            ['Dimensões', '30 x 42 cm (A3)'],
            ['Papel', 'Couché 250g'],
            ['Impressão', 'Alta resolução'],
            ['Acabamento', 'Fosco'],
            ['Moldura', 'Não inclusa'],
        ],
        hasSize: false,
    },
    ursinho: {
        name: 'Ursinho de Pelúcia',
        tag: 'Colecionáveis',
        price: 'R$ 49,90',
        img: 'Imagens/urso.jpeg',
        alt: 'Ursinho de pelúcia clássico 25cm',
        desc: 'Ursinho de pelúcia clássico com estampa exclusiva da Danilo\'s Wear. Macio e fofo, ideal para presentes e coleções.',
        specs: [
            ['Altura', '25 cm'],
            ['Material', 'Pelúcia macia'],
            ['Recheio', 'Fibra siliconada'],
            ['Lavagem', 'À mão'],
            ['Origem', 'Nacional'],
        ],
        hasSize: false,
    },
};

// Elementos do DOM
const switchBtns = document.querySelectorAll('.product-switcher .btn-cat');
const detailImg = document.getElementById('detail-img');
const detailName = document.getElementById('detail-name');
const detailTag = document.getElementById('detail-tag');
const detailPrice = document.getElementById('detail-price');
const detailDesc = document.getElementById('detail-desc');
const detailSpecs = document.getElementById('detail-specs');
const sizeSelector = document.getElementById('size-selector');
const breadcrumbName = document.getElementById('breadcrumb-name');

// Troca o produto exibido
function loadProduct(key) {
    const p = produtos[key];
    if (!p) return;

    detailImg.src = p.img;
    detailImg.alt = p.alt;
    detailName.textContent = p.name;
    detailTag.textContent = p.tag;
    detailPrice.textContent = p.price;
    detailDesc.textContent = p.desc;
    breadcrumbName.textContent = p.name;

    // Atualiza miniaturas
    document.querySelectorAll('.thumb-btn img').forEach(img => {
        img.src = p.img;
        img.alt = p.alt;
    });

    // Atualiza specs
    detailSpecs.querySelector('tbody').innerHTML = p.specs
        .map(([key, val]) => `<tr><th scope="row">${key}</th><td>${val}</td></tr>`)
        .join('');

    // Mostra/esconde seletor de tamanho
    sizeSelector.style.display = p.hasSize ? 'block' : 'none';
}

// Eventos dos botões de produto
switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        switchBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadProduct(btn.dataset.product);
    });
});

// Seletor de tamanho
document.querySelectorAll('.btn-size').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-size').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Miniaturas
document.querySelectorAll('.thumb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        detailImg.src = btn.querySelector('img').src;
    });
});

// Carrega o produto vindo da URL, ou camiseta como padrão
const params = new URLSearchParams(window.location.search);
const produtoURL = params.get('produto');
const produtoInicial = produtoURL && produtos[produtoURL] ? produtoURL : 'camiseta';

// Marca o botão correto como ativo
switchBtns.forEach(btn => {
    if (btn.dataset.product === produtoInicial) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});

loadProduct(produtoInicial);