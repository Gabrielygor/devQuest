
document.getElementById('tirarCarta').addEventListener('click', ()=>{
    tirarCartaDoBaralho()
});


async function criarBaralhoEmbaralhado() {

    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
};

async function tirarUmaCarta(deck_id) {

    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url);
    return await resposta.json()

};


async function tirarCartaDoBaralho() {

    const baralho = await criarBaralhoEmbaralhado()
    const carta = await tirarUmaCarta(baralho.deck_id)
    const imagemCarta = await(carta.cards[0].image)

    document.getElementById('carta').src = imagemCarta 

};

tirarCartaDoBaralho()

