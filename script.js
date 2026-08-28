document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(event) {

    const target = document.querySelector(
      this.getAttribute('href')
    );

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth'
      });

    }

  });

});

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(event) {

    const target = document.querySelector(
      this.getAttribute('href')
    );

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth'
      });
    }

  });

});
function copyPix() {
  const pix = document.getElementById("pixKey").innerText;

  navigator.clipboard.writeText(pix);

  alert("Chave Pix copiada!");
}
