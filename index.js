import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".page-menu");
  const navigation = document.querySelector(".header__nav");
  const close = document.querySelector(".fa-xmark");
  const asideNavLinks = document.querySelectorAll(".aside__nav-link");

  burger.addEventListener("click", () => {
    menu.classList.add("active");
  });
  close.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  asideNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });

  function handleBurgerVisibility() {
    const burger = document.querySelector(".header__burger");

    if (window.innerWidth <= 639) {
      burger.style.display = "inline";
      navigation.style.display = "none";
    } else {
      burger.style.display = "none";
      navigation.style.display = "flex";
    }
  }

  handleBurgerVisibility();
  window.addEventListener("resize", handleBurgerVisibility);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form__container");
  const addressInput = document.querySelector(".bsc-address");
  const button = document.querySelector(".form__button");

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const address = addressInput.value;
    const isAddressValid = /^0x[a-fA-F0-9]{40}$/.test(address);

    if (isAddressValid) {
      showTippy(button, "Registered!");
    } else {
      showTippy(addressInput, '❌ Invalid BSC address. Please check again.');
    }
  });

  function showTippy(element, message) {
    const instance = tippy(element, {
      content: message,
      trigger: 'manual',
      duration: [300, 250],
      onHidden(instance) {
        instance.destroy();
      }
    });
    
    instance.show();
  }
});


function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  const footerTextElements = document.querySelectorAll('.footer__text');
  
  footerTextElements.forEach(element => {
    element.textContent = `Binance© ${currentYear}`;
  });
}

document.addEventListener('DOMContentLoaded', updateCopyrightYear);


