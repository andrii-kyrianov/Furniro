function btnSearch() {
    const btn = document.querySelector('.nav__btn');
    const search = document.querySelector('.nav__btn-search');
    
    search.onclick = function() {
        btn.classList.add('search-active');
    };
    
    const clear = document.querySelector('.nav__btn-clear');
    
    clear.onclick = function() {
        btn.classList.remove('search-active');
        document.getElementById("mySearch").value = '';
    };
    
// Варіант 2
    document.addEventListener("DOMContentLoaded", function () {
        const searchContainer = document.querySelector(".search-container");
        const searchBtn = document.querySelector(".search-btn");
    
        searchBtn.addEventListener("click", function () {
            searchContainer.classList.toggle("active");
        });
    });
}

export default btnSearch;