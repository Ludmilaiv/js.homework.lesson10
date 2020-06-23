let body = document.querySelector("body");
let books = document.querySelector(".books");
let book = document.querySelectorAll(".book");
let chap2 = book[0].querySelectorAll("li");
let chap5 = book[5].querySelectorAll("li");
let chap6 = book[2].querySelectorAll("li");

books.prepend(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
books.append(book[2]);

body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

book[4].querySelector("h2>a").textContent = "Книга 3. this и Прототипы Объектов";

document.querySelector(".adv").remove();

chap2[3].after(chap2[6]);
chap2[6].after(chap2[8]);
chap2[10].before(chap2[2]);

chap5[2].before(chap5[9]);
chap5[9].after(chap5[3]);
chap5[4].after(chap5[2]);
chap5[8].before(chap5[5]);

let li = document.createElement('li');
li.textContent = "Глава 8: За пределами ES6";
chap6[8].after(li);


