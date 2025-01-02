// // Animação da entrada das seções de texto no final

// const sections = document.querySelectorAll(".text-section");

// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//         entry.target.classList.remove("hidden");

//         // entry.target.scrollIntoView({
//         //   behavior: "smooth",
//         //   block: "center",
//         // });
//       } else {
//         entry.target.classList.remove("visible");
//         entry.target.classList.add("hidden");
//       }
//     });
//   },
//   { threshold: 0.5 }
// );
// // Observa todas as seções
// sections.forEach((section) => observer.observe(section));

// // Final da Animação da entrada das seções de texto no final

//divisor --------------------------------------------------------------------------------------------

// Animação da tela de carregamento

window.addEventListener("load", () => {
  // Aguarda o carregamento da página para iniciar a animação
  gsap.to(".screen-loader", {
    opacity: 0, // Anima a opacidade para desaparecer
    duration: 0.5, // Duração da animação em segundos
    delay: 1.5,
    PointerEvent: "none", // Desabilita eventos do mouse
    onComplete: () => {
      // Remove a tela de carregamento do DOM após a animação
      document.querySelector(".screen-loader").style.visibility = "hidden";
    },
  });
});

// Final da Animação da tela de carregamento

//divisor --------------------------------------------------------------------------------------------

// Animação scroll vertical portfolio inicio

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Função para aplicar animação apenas no desktop
function animateForDesktop() {
  // Verificar se a largura da janela é maior que 768px (exemplo de breakpoint)
  if (window.innerWidth > 768) {
    gsap.fromTo(
      ".case__portfolio__item",
      {
        y: 350, // Posição inicial
        opacity: 1, // Opacidade inicial
      },
      {
        y: -100, // Posição final
        opacity: 1, // Opacidade final
        scrollTrigger: {
          trigger: ".case__portfolio__item", // Elemento que ativa o scroll
          start: "top bottom", // Início da animação
          end: "bottom top", // Fim da animação
          scrub: true, // Anima suavemente com o scroll
        },
      }
    );
  }
}

// Chamar a função na inicialização
animateForDesktop();

// Reaplicar a animação em caso de redimensionamento da janela
window.addEventListener("resize", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Remove animações existentes
  animateForDesktop(); // Reaplica animações se necessário
});

// Final da Animação scroll vertical portfolio inicio

//divisor --------------------------------------------------------------------------------------------
