window.onpageshow = (event) => {
    var menuToggle = document.getElementById("menu-toggle");

    if (menuToggle.checked) {
      menuToggle.checked = false;
    }

    // Agrega el siguiente código para desmarcar el menú toggle cuando se recargue la página
    if (event.persisted) {
        menuToggle.checked = false;
      }
  };