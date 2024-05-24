const searchBox = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-button");
const showMore = document.querySelector(".showmore-button");
const warning = document.querySelector(".warning");
const imageContainer = document.querySelector(".image-container");

warning.textContent = "";
let page = 1;
let currentSearchItem = "";

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const searchItem = searchBox.value.trim();
    if (searchItem) {
        warning.textContent = "";
        currentSearchItem = searchItem;
        page = 1; // Reset to first page for new search
        imageContainer.innerHTML = ""; // Clear previous results for new search
        getImages(searchItem);
    } else {
        warning.textContent = "Enter something to search";
    }
});

const getImages = (searchItem) => {
    const apiid = "aWfqCAGTYhdrk21QEYYn4cXShyeAhzaz9y4eUE-lnR8";
    fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${searchItem}&client_id=${apiid}&per_page=12`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayImages(data.results);
            showMore.style.display = data.total_pages > page ? "block" : "none";
        })
        .catch(e => {
            console.error("Error fetching images:", e);
        });
};

const displayImages = (images) => {
    images.forEach(image => {
        const imageElement = document.createElement("img");
        imageElement.src = image.urls.small;
        imageElement.alt = image.alt_description;
        imageContainer.appendChild(imageElement);
    });
};

showMore.addEventListener("click", (e) => {
    e.preventDefault();
    page++;
    getImages(currentSearchItem);
});
