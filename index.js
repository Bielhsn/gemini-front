let { API_URL: $601cd29f857748e3$var$API_URL } = process.env;
async function $601cd29f857748e3$export$2e2bcd8739ae039() {
    try {
        const response = await fetch(process.env.API_URL); // Usando a URL importada
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}


const $47262ac12c2d5005$var$modal = document.getElementById("modal");
const $47262ac12c2d5005$var$modalImg = document.getElementById("modal-img");
const $47262ac12c2d5005$var$captionText = document.getElementById("caption");
const $47262ac12c2d5005$var$closeBtn = document.querySelector(".close");
$47262ac12c2d5005$var$modal.style.display = "none";
const $47262ac12c2d5005$var$imageGrid = document.querySelector(".image-grid");
// Função para buscar e exibir os dados do endpoint
async function $47262ac12c2d5005$var$displayImages() {
    const data = await (0, $601cd29f857748e3$export$2e2bcd8739ae039)();
    try {
        const postsList = data.map((item)=>{
            return `
            <article data-description="${item.descricao}">
              <figure>
                <img src="${item.imgUrl}" alt="${item.alt}" />
              </figure>
            </article>
          `;
        }).join("");
        $47262ac12c2d5005$var$imageGrid.insertAdjacentHTML("beforeend", postsList);
        // Adicionando eventos de clique para cada imagem carregada
        $47262ac12c2d5005$var$addImageClickEvents();
    } catch (error) {
        console.error("Erro ao popular p\xe1gina", error);
    }
}
// Função para adicionar os eventos de clique às imagens
function $47262ac12c2d5005$var$addImageClickEvents() {
    const images = document.querySelectorAll(".image-grid img");
    images.forEach((img)=>{
        img.addEventListener("click", function() {
            $47262ac12c2d5005$var$captionText.textContent = "";
            $47262ac12c2d5005$var$modal.style.display = "block";
            $47262ac12c2d5005$var$modalImg.src = this.src;
            const article = this.closest("article");
            const description = article ? article.dataset.description : "";
            const caption = description || this.alt;
            $47262ac12c2d5005$var$captionText.innerHTML = `<p>${caption}</p>`;
        });
    });
}
// Evento de fechar o modal
$47262ac12c2d5005$var$closeBtn.addEventListener("click", function() {
    $47262ac12c2d5005$var$modal.style.display = "none";
});
// Fechar o modal clicando fora dele
window.addEventListener("click", function(event) {
    if (event.target === $47262ac12c2d5005$var$modal) $47262ac12c2d5005$var$modal.style.display = "none";
});
// Chamar a função para buscar e exibir as imagens ao carregar a página
document.addEventListener("DOMContentLoaded", $47262ac12c2d5005$var$displayImages);


//# sourceMappingURL=index.js.map
