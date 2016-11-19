var link = document.querySelector(".search-btn");
    var popup = document.querySelector(".modal-form");
    var form = popup.querySelector("form");
    var arrival_date = popup.querySelector("[name='arrival-date']");
    var departure_date = popup.querySelector("[name='departure-date']");

    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.toggle("modal-form-show");
      popup.classList.remove("modal-form-error");
      arrival_date.focus();
    });
    form.addEventListener("submit", function(event) {
      if (!arrival_date.value || !departure_date.value) {
        event.preventDefault();
        popup.classList.remove("modal-form-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-form-error");
    }
    });
    window.addEventListener("keydown", function(event) {
       if (event.keyCode === 27) {
         if (popup.classList.contains("modal-form-show")) {
           popup.classList.remove("modal-form-show");
           popup.classList.remove("modal-form-error");
         }
       }
     });
