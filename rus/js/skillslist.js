function getFileNameFromUrl() {
  return decodeURI(url.split('/').pop());
}

function thisPath() {
  return window.location.href;
}
//console.log(thisPath());

function thisPage() {
    return window.location.pathname;
}
url = thisPath();
file = url.split('/').pop();
// console.log(url);
// console.log(file);

function imageLink(image) {
  if (file == "index.html") {
    image = image;
  } else {
    image = '../' + image;
  }
//console.log(image);
  return image;
}

class SkillsItem {
    constructor(id, title, image) {
      this.id = id;
      this.title = title;
      this.image = imageLink(image);
    }
    render() {
        return `<div class="section-content-item-skills">
        <a href="#" title="${this.title}">
          <img
            class="section-content-item-img" 
            src="./${this.image}"
            alt="item"
          />
        </a>
      </div>`
    }
  }
  
  class SkillsList {
    constructor() {
      this.sskills = [];
    }
    fetchSkills() {
      this.sskills = skills;
    }
    render() {
      let listHtml = "";
      this.sskills.forEach((sskill) => {
        const skillItem = new SkillsItem(
          sskill.id,
          sskill.title,
          sskill.image,
        );
        listHtml += skillItem.render();
      });
      document.getElementById("skills-list").innerHTML = listHtml;
    }
  }
  
  const list = new SkillsList();
  list.fetchSkills();
  list.render();
  