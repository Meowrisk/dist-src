(function() {
const menu = document.querySelector("#horizontalMenu");
const items = document.querySelectorAll(".products-menu__item");

const getItemWidth = (item) => {
  let resultWidth = 524;

  const windowWidth = window.innerWidth;
  const itemWidth = item.offsetWidth;

  const isTablet = window.matchMedia("(max-width: 768px)").matches;
  const isMobile = window.matchMedia("(max-width: 480px)").matches;
  if (isTablet) {
    resultWidth = windowWidth - itemWidth * items.length;
  }
  if (isMobile) {
    resultWidth = windowWidth - itemWidth;
  }
  return resultWidth;
};

const setItemWidth = (item, width) => {
  const itemContent = item.nextElementSibling;
  const itemText = itemContent.firstElementChild;
  itemContent.style.width = `${width}px`;
  itemText.style.width = `${width}px`;
};

const closeItem = (item) => {
  const itemParent = item.parentElement;
  itemParent.classList.remove("products-menu__item--active");
  item.classList.remove("products-menu__button--active");
  setItemWidth(item, 0);
};

const openItem = (item) => {
  const itemParent = item.parentElement;
  itemParent.classList.add("products-menu__item--active");
  item.classList.add("products-menu__button--active");
  const width = getItemWidth(item);
  setItemWidth(item, width);
};

menu.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  const isActive = target.classList.contains("products-menu__button--active");
  const activeElement = document.querySelector(".products-menu__button--active");

  if (target.classList.contains("products-menu__button") && isActive) {
    if (activeElement) {
      closeItem(activeElement);
    }
  }
  if (target.classList.contains("products-menu__button") && !isActive) {
    if (activeElement) {
      closeItem(activeElement);
    }
    openItem(target);
  }
});

window.addEventListener("resize", () => {
  const activeButton = document.querySelector(".products-menu__button--active");
  if (activeButton) {
    closeItem(activeButton);
  }
});
})();