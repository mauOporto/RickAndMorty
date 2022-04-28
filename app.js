document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})
//El DOMContentLoaded nos sirve para cargar todo nuestro sistema y luego arrojar los datos 

const fetchData = async () => {
    try {
        loadingData(true)

        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();

        pintarCard(data)

    } catch (error) {
        
    }finally {
        loadingData(false);
    }
}

const pintarCard = (data) => {
    const cards = document.getElementById('card-dinamica')
    const cardTemplate = document.getElementById('cardTemplate').content;
    const fragment = document.createDocumentFragment()


    data.results.forEach((item) => {
        console.log(item)
        const clone = cardTemplate.cloneNode(true)
        //* No olvidar que es importante siempre clonar el Template */
        clone.querySelector('h5').textContent = item.name
        clone.querySelector('p').textContent = item.species
        clone.querySelector('img').setAttribute('src', item.image)

        fragment.appendChild(clone)
    })

    cards.appendChild(fragment);
}

const loadingData = (estado) => {
    const loading = document.getElementById('loading')
    if (estado) {
        loading.classList.remove('d-none');
    } else {
        loading.classList.add('d-none')
    }

}

