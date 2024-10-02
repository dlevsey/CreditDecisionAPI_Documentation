document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll('.dropdown .rubric');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            var container = dropdown.parentElement;
            if (container.classList.contains('expanded')) {
                container.classList.remove('expanded');
            } else {
                container.classList.add('expanded');
            }
        });
    });
});
