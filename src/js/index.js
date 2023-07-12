const clubes = document.querySelectorAll(".clube");


clubes.forEach((clube) => {
    clube.addEventListener("mouseenter", () => {
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior:"smooth"});
        }

        const
        clubeSelecionado = document.querySelector(".selecionado");
        clubeSelecionado.classList.remove("selecionado")

        clube.classList.add("selecionado");

        const
        imagemClubeGrande = document.querySelector(".clube-grande");

        const idClube = clube.attributes.id.value;

        imagemClubeGrande.src = `./src/imagens/card-${idClube}.png`;

        const nomeClube = document.getElementById("nome-clube");

        nomeClube.innerText = clube.getAttribute("data-name");

        const descricaoClube = document.getElementById("descricao-clube");descricaoClube.innerText = clube.getAttribute("data-description");

    })
}
)