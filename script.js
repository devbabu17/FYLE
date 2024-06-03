document.addEventListener("DOMContentLoaded", function() {
    const projectContents = document.querySelectorAll(".project-content");
    const projectImage = document.getElementById("project-image");

    projectContents.forEach(content => {
        content.addEventListener("click", function() {
            projectContents.forEach(c => c.classList.remove("active"));
            content.classList.add("active");
            const newImage = content.getAttribute("data-image");
            projectImage.setAttribute("src", newImage);
        });
    });
});


// Change image on project-content click

function changeImage(imageSrc) {
    document.getElementById('projectImage').src = imageSrc;
}
// pro
// $(document).ready(function(){
//     // Set default image on page load
//     $('#project-image').attr('src', $('.project-content.active').data('image'));

//     // Change image on project-content click
//     $('.project-content').click(function(){
//         var imageSrc = $(this).data('image');
//         $('#project-image').attr('src', imageSrc);
//         $('.project-content').removeClass('active');
//         $(this).addClass('active');
//     });
// });
