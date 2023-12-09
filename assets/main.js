/*
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

*/

//array
//for - forEach
// DOM
//String

//array di oggetti con le informazioni NOME / RUOLO / FOTO
let user = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  },
];

// stampare in console ogni singolo membro del team con relative informazioni
user.forEach((member) => {
  console.log(
    `Nome: ${member.name}, Ruolo: ${member.role}, Foto: ${member.photo}`
  );

  // inserire in html le informazioni di ogni singolo utente

  console.log(user);

  const div = document.createElement("div");
  div.className = "card m-3";
  div.style.width = "18rem";
  console.log(div);

  const img = document.createElement("img");
  //Trasformare la stringa foto in una immagine
  img.src = `./assets/img/${member.photo}`;
  img.className = "img-thumbnail card-img-top ";
  img.style.width = "500px";
  img.style.height = "300px";
  img.style.objectFit = "cover";

  img.alt = "ImgUser";
  console.log(img);

  const secondDiv = document.createElement("div");
  secondDiv.className = "card-body";
  console.log(secondDiv);

  const titleUser = document.createElement("h5");
  titleUser.className = "card-title text-center";
  titleUser.textContent = member.name;
  console.log(titleUser);

  const roleUser = document.createElement("p");
  roleUser.className = "card-text text-center pb-3";
  roleUser.textContent = member.role;
  console.log(roleUser);

  secondDiv.appendChild(titleUser);
  div.appendChild(img);
  div.appendChild(secondDiv);
  div.appendChild(roleUser);
  document.getElementById("card-container").appendChild(div);
});
