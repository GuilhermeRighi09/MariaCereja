const products = [
    {
        id: 1,
        name: "Vestido Longo Rosa",
        category: "roupas",
        description: "Modelo longo em alfaiataria rosa bebê, sem mangas com detalhe de laço no ombro e faixa para amarração na cintura.",
        sizes: ["M"],
        price: 135.00,
        image: "../assets/img/roupa1.jpeg"
    },
    {
        id: 2,
        name: "Vestido Off-White Bordado",
        category: "roupas",
        description: "Vestido longo off-white com decote em V e mangas borboleta.",
        sizes: ["M"],
        price: 155.00,
        image: "../assets/img/roupa2.jpeg"
    },
    {
        id: 3,
        name: "Conjunto Blusa Laise e Saia Lima",
        category: "roupas",
        description: "Blusa branca com mangas em laise delicada combinada com saia midi em camadas (três marias) na cor verde lima vibrante.",
        sizes: ["G"],
        price: 158.00,
        image: "../assets/img/roupa3.jpeg"
    },
    {
        id: 4,
        name: "Vestido Cascata Verde Menta",
        category: "roupas",
        description: "Vestido curto com decote transpassado e detalhe de babados em cascata no busto. Cor verde menta em tecido leve.",
        sizes: ["G"],
        price: 129.90,
        image: "../assets/img/roupa4.jpeg"
    },
    {
        id: 5,
        name: "Saia Midi Couro Eco com Camisaria",
        category: "roupas",
        description: "Saia midi em couro ecológico preto com barrado em camadas, acompanhada de camisa listrada clássica em preto e branco.",
        sizes: ["G"],
        price: 169.90,
        image: "../assets/img/roupa5.jpeg"
    },
    {
        id: 6,
        name: "Vestido Longo Royal Elegance",
        category: "roupas",
        description: "Vestido longo azul royal com mangas 3/4 detalhadas em guipir, decote em V e cinto largo do mesmo tecido para ajuste.",
        sizes: ["M"],
        price: 158.00,
        image: "../assets/img/roupa6.jpeg"
    },
    {
        id: 7,
        name: "Vestido Transpassado Verde Oliva",
        category: "roupas",
        description: "Vestido longo com modelagem envelope (wrap dress), decote transpassado, amarração lateral e saia fluida com babado na barra.",
        sizes: ["M"],
        price: 135.90,
        image: "../assets/img/roupa7.jpeg"
    }, 
    {
        id: 9,
        name: "Argola Corações Prata",
        category: "acessorios",
        description: "Brinco estilo argola aberta composta por corações vazados de aço inoxidável.",
        sizes: ["Único"],
        price: 13.00,
        image: "../assets/img/joia1.jpeg"
    },
    {
        id: 10,
        name: "Brinco Leque Cristal",
        category: "acessorios",
        description: "Brinco em formato de leque cravejado com cristais translúcidos e acabamento dourado.",
        sizes: ["Único"],
        price: 25.00,
        image: "../assets/img/joia2.jpeg"
    },
    {
        id: 11,
        name: "Brinco Coração Esmeralda",
        category: "acessorios",
        description: "Pedra em formato de coração na cor verde esmeralda com lapidação multifacetada.",
        sizes: ["Único"],
        price: 18.00,
        image: "../assets/img/joia3.jpeg"
    },
    {
        id: 12,
        name: "Brinco Textura Wave Prata",
        category: "acessorios",
        description: "Design orgânico com textura de linhas em relevo em aço inoxidável.",
        sizes: ["Único"],
        price: 28.00,
        image: "../assets/img/joia4.jpeg"
    },
    {
        id: 13,
        name: "Brinco de Flor",
        category: "acessorios",
        description: "Brinco em formato de flor com cinco pétalas texturizadas e douradas.",
        sizes: ["Único"],
        price: 29.90,
        image: "../assets/img/joia5.jpeg"
    },
    {
        id: 14,
        name: "Brinco Infinity",
        category: "acessorios",
        description: "Design fluido em formato de gota vazada estilizada, em aço inoxidável.",
        sizes: ["Único"],
        price: 28.00,
        image: "../assets/img/joia6.jpeg"
    },
    {
        id: 15,
        name: "Brinco Nó dourado",
        category: "acessorios",
        description: "Brinco circular com design de elos entrelaçados (nó) em aço inoxidável.",
        sizes: ["Único"],
        price: 35.00,
        image: "../assets/img/joia7.jpeg"
    },
    {
        id: 16,
        name: "Brinco Gota Turquesa Cravejada",
        category: "acessorios",
        description: "Brinco em formato de gota vazada, inteiramente cravejado com micro cristais na cor azul turquesa.",
        sizes: ["Único"],
        price: 20.00,
        image: "../assets/img/joia8.jpeg"
    }
];

const WHATSAPP_NUMBER = "5519983848977"; 
const productsGrid = document.getElementById('products-grid');


function renderProducts(productsToDisplay) {
    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Nenhum item encontrado nesta categoria.</p>`;
        return;
    }

    productsGrid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <button class="btn-details" onclick="openProductDetails(${product.id})">
                    <i class="fas fa-shopping-bag"></i> Ver Detalhes
                </button>
            </div>
        </div>
    `).join('');
}

function filterCategory(category) {
    
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
}


function openProductDetails(id) {
    currentProduct = products.find(p => p.id === id);
    selectedSize = null;
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="modal-content-grid">
            <div><img src="${currentProduct.image}" class="modal-img"></div>
            <div class="modal-details">
                <h3>${currentProduct.name}</h3>
                <p class="product-price" style="font-size: 2rem;">R$ ${currentProduct.price.toFixed(2).replace('.', ',')}</p>
                <div class="size-selector">
                    <label>Selecione o Tamanho:</label>
                    <div class="sizes">
                        ${currentProduct.sizes.map(size => `<div class="size-option" onclick="selectSize(this, '${size}')">${size}</div>`).join('')}
                    </div>
                </div>
                <div style="margin-bottom: 20px; color: #555;"><strong>Detalhes:</strong><br>${currentProduct.description}</div>
                <button class="btn-whatsapp" onclick="buyOnWhatsapp()"><i class="fab fa-whatsapp"></i> Solicitar na Malinha</button>
            </div>
        </div>
    `;
    document.getElementById('product-modal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function selectSize(element, size) {
    document.querySelectorAll('.size-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedSize = size;
}

function buyOnWhatsapp() {
    if (!selectedSize) { alert("Por favor, selecione um tamanho."); return; }
    const message = `Olá! Quero provar o modelo: ${currentProduct.name} (Tam: ${selectedSize})`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function scrollToProducts() {
    document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('overlay').onclick = closeProductModal;

renderProducts(products.filter(p => p.category === 'roupas'));