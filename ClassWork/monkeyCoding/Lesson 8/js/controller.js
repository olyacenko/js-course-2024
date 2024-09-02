let html = document.querySelector("#contactList");
//contactList.render(contactBook.contacts, html);

let template = document.querySelector("#template").innerHTML;
contactList.renderTemplate(contactBook.contacts, html, template);