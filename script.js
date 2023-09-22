function xxx() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/image-23.png")
    img.setAttribute("alt", "Foto do professor do curso no light1111")
  } else {
    // Se tiver dark mode, adicionar a imagem dark
    img.setAttribute("src", "./assets/image-22.png")
    img.setAttribute("alt", "Foto do professor do curso no darkzera")
  }
}
