const authorInp = document.getElementById("author");
const messageInp = document.getElementById("message");
const sendButton = document.querySelector(".button1");

class Message {
  constructor(author, message) {
    this.author = author;
    this.time = gettime();
    this.message = message;
  }

  toString() {
    return `${this.time} ${this.author}: ${this.message}`;
  }

  toHtml() {
    return `<p>${this.time} ${this.author}: ${this.message}</p></b>`;
  }
}

class Messenger {
  constructor() {
    this.yeni = [];
    this.yenielement = document.querySelector(`.yeni`);
  }

  show_yeni() {
    this.yeni.forEach((message) => {
      console.log(message.toString());
    });
  }

  send(author, text) {
    const message = new Message(author, text);
    this.yeni.push(message);
    const p = document.createElement("p");
    p.innerHTML = message.toHtml();
    this.yenielement.appendChild(p);
  }
}

function gettime() {
  let now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

let messenger = new Messenger("messenger");

sendButton.addEventListener("click", () => {
  const author = authorInp.value;
  const message = messageInp.value;
  if (!author || !message) {
    console.error("Author or message is empty");
    return;
  }

  messenger.send(author, message);
  authorInp.value = "";
  messageInp.value = "";
});