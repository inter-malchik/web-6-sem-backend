(function () {
    function hideLoader() {
        const loader = document.getElementsByClassName("loader")[0];
        loader.classList.add("loader__hidden")
    }

    function renderComment(title, body) {
        const template = document.getElementById("reviewTemplate");
        console.log(template)

        const clone = template.content.cloneNode(true);
        const cloneTitle = clone.querySelectorAll(".review_title")[0];
        const cloneBody = clone.querySelectorAll(".review_body")[0];

        cloneTitle.textContent = title;
        cloneBody.textContent = body;

        const storager = document.getElementsByClassName('reviews_container')[0]

        storager.appendChild(clone);
    }

    window.addEventListener("load", async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${Math.floor(1 + Math.random() * 10)}`)
            hideLoader()
            const data = await response.json()
            console.log(data)
            data.forEach(review => {
                if (review.title && review.body) {
                    renderComment(review.title, review.body)
                }
            });
        } catch (e) {
            hideLoader()
            console.log(e)
            const alert = document.getElementsByClassName("error")[0];
            alert.classList.remove("error__hidden")
        }
    })
})();    
