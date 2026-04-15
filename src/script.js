window.addEventListener('load', function() {
    document.querySelector('body').style.display = 'flex';
});

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector("main").classList.add("transition");
    }, 500);
});

function turn(btn_id, sec_id) {
    lastsec = localStorage.getItem("LastSection");
    document.querySelectorAll("section, button").forEach(element => {
     	 element.classList.remove("visible");
    });
    btn_id.classList.add("visible");
    document.getElementById(sec_id).classList.add("visible");
    localStorage.setItem("LastSection", sec_id);
    window.scrollTo({
		top: 0,
		behavior: (sec_id === lastsec) ? "smooth" : "auto"
    });
};

window.onload = () => {
    section = localStorage.getItem("LastSection");
    if (section) {
        const button = document.querySelector(`[onclick*="${section}"]`);
        if (button) turn(button, section);
    }
};

hoje = new Date();

idade = hoje.getFullYear() - 2003;
if ( hoje.getMonth() < 6 || ( hoje.getMonth() == 6 && hoje.getDate() < 9 )) {
    idade--;
};
id_idade = document.getElementById("idade")
if (id_idade) {
    id_idade.textContent = idade;
};

var ano = hoje.getFullYear();
if (ano) {
document.getElementById("ano").textContent = ano;
};

const textarea = document.querySelector("textarea");

textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
  if (e.key === " " && textarea.value.endsWith(" ")) {
    e.preventDefault();
  }
});

textarea.addEventListener("input", (e) => {
  const originalValue = e.target.value;
  const cleanedValue = originalValue
    .replace(/[\n\r]/g, "")
    .replace(/ +(?= )/g, "");
  if (originalValue !== cleanedValue) {
    e.target.value = cleanedValue;
  }
});