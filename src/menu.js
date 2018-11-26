class Menu {
  constructor(options) {
    this.elem;
    this.options = options;
  }

  getElem() {
    if (!this.elem) {
      this.render();
    }
    return this.elem;
  }

  render() {
    this.elem = document.createElement("div");
    this.elem.className = "menu";
    let titleElem = document.createElement("span");
    this.elem.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = this.options.title;
    this.elem.onmousedown = () => false;
    this.elem.onclick = event => {
      if (event.target.closest(".title")) {
        this.toggle();
      }
    }
  }

  renderItems() {
    let items = this.options.items || [];
    let list = document.createElement("ul");
    for (let it in items) {
      let li = document.createElement("li");
      li.textContent = items[it];
      list.appendChild(li);
    }
    this.elem.appendChild(list);
  }

  open() {
    if (!this.elem.querySelector("ul")) {
      this.renderItems();
    }
    this.elem.classList.add("open");
  }

  close() {
    this.elem.classList.remove("open");
  }

  toggle() {
    if (this.elem.classList.contains('open')) this.close();
    else this.open();
  }
}