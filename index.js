
// content des pages
const content = {
  acceuil: {
    title: 'Acceuil',
    text: 'Lorem ipsum dolor sit amet. Aut fugiat fugiat cum quam rerum aut fuga culpa et mollitia cupiditate et vero molestiae sit quasi aliquid a error repellendus! Qui iste fugit ea voluptas consequuntur non ratione eius At optio quod sit expedita nisi. Et dicta autem eos corrupti quaerat nam velit eaque. Id labore nostrum non tenetur voluptatem vel aliquam illum. At omnis atque qui totam nostrum sit officiis adipisci ea omnis error et iure fuga. Non dolorum doloribus rem adipisci saepe qui quaerat voluptates in praesentium doloremque nam laborum odit. At eveniet ut tenetur iure aut repellendus molestiae. Ea eveniet fuga ut eligendi culpa hic quaerat vero est ipsum culpa est quia saepe et cupiditate tenetur. Eos repellat voluptates est placeat et velit maiores qui quia consectetur qui necessitatibus odit eos labore odit eos aliquam saepe. Ut reiciendis facere qui ducimus tenetur eum iste delectus aut magni aspernatur!'
  }
}

main();

function main(){
  acceuilContentManager();
}

function acceuilContentManager(){

  const htmlMainTemplate = `
  <p>${content.acceuil.text}</p>
  <p>${content.acceuil.text}</p>
  <p>${content.acceuil.text}</p>
  <p>${content.acceuil.text}</p>
  <p>${content.acceuil.text}</p>
  <p>${content.acceuil.text}</p>
  <p>${content.acceuil.text}</p>
  <p>${content.acceuil.text}</p>
  <p>${content.acceuil.text}</p>
  `;

  const htmlHeadTemplate = `
  <h2>${content.acceuil.title}</h2>
  `

  const acceuilHeadDiv = document.getElementById('acceuilHead');
  acceuilHeadDiv.innerHTML = htmlHeadTemplate;
  const acceuilContentDiv = document.getElementById('acceuilContent');
  acceuilContentDiv.innerHTML = htmlMainTemplate;
}