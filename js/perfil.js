document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".category_btn");
    const categories = document.querySelectorAll(".category_content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            categories.forEach(category => category.style.display = "none");
            const categoryId = "cat_" + button.id;
            document.getElementById(categoryId).style.display = "block";
        });
    });

    buttons[0].click();
});