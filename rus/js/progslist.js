class ProgsItem {
  constructor(id, name, image, ref, text) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.ref = ref;
    this.text = text;
  }
  render() {
    return `<div class="item-box" id="porto-1">
              <div class="item-box-left">
                  <img src="${this.image}"> 
              </div>
              <div class="item-box-right">
                  <p class="item-title">${this.name}</p>
                  <a class="item-link" href="${this.ref}">смотреть на GitHub...</a>
                  <p class="item-description">${this.text}
                  </p>                                    
              </div>                                       
            </div>
            `;
  }
}

class ProgsList {
  constructor() {
    this.pprogs = [];
  }
  fetchProgs() {
    this.pprogs = progs;
  }
  render() {
    let listHtml = "";
    this.pprogs.forEach((pprog) => {
      const progItem = new ProgsItem(
        pprog.id,
        pprog.name,
        pprog.image,
        pprog.ref,
        pprog.text
      );
      listHtml += progItem.render();
    });
    document.querySelector(".item-list-block").innerHTML = listHtml;
  }
}

const list = new ProgsList();
list.fetchProgs();
list.render();
