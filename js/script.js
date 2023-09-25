/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



import movies from "./db.js"
let genrew = document.querySelector(".promo__genre")
let title = document.querySelector(".promo__title")
let ul = document.querySelector(".promo__interactive-list")
let photo = document.querySelector(".promo__bg")
let desc = document.querySelector(".promo__descr")
let items = document.querySelectorAll(".promo__interactive-item")
let promo = document.querySelector(".promo__ratings")

movies.forEach(movie => {
    let li = document.createElement("li")
    let del = document.createElement("div")
    let p = document.createElement("p")
    li.classList.add("promo__interactive-item")
    del.classList.add("delete")
    p.innerHTML = movie.Title
    li.append(del, p)
    ul.append(li)
    let items = document.querySelectorAll(".promo__interactive-item")
    items.forEach(item => {
        item.onclick = () => {
            for (let i = 0; i < movies.length; i++) {
                if (item.lastElementChild.innerHTML === movies[i].Title) {
                    film(i)
                    localStorage.setItem("film", i)
                }
            }

        }
    });
    del.onclick = () =>{
        
        if (confirm()) {
            del.parentElement.remove()
        }
        
    }
});
film(localStorage.getItem("film"))

let children = document.querySelector(".promo__adv").children


function film(index) {
    photo.style.background = `url(${movies[index].Poster}) center center/contain no-repeat`
    genrew.innerHTML = movies[index].Genre
    title.innerHTML = movies[index].Title
    desc.innerHTML = movies[index].Plot
    promo.firstElementChild.innerHTML = `IMDb: ${movies[index].imdbRating}`
    promo.lastElementChild.innerHTML = `Metascore: ${movies[index].Metascore}`
    console.log(index);
}



let list = document.querySelectorAll(".promo__interactive-item")
let arr = Array.from(list)
let chils = Array.from(children)
chils.forEach(element => {
    element.remove()
});

let light = document.querySelector(".light")
let mode = document.querySelector("#mode")
if (localStorage.getItem("mode") == "light") {
    mode.href = ``
    light.innerHTML = 'Темный'
    localStorage.setItem("mode", "light")
} else {
    mode.href = `css/nightmode.css`
    light.innerHTML = 'Светлый'
    localStorage.setItem("mode", "dark")
}
light.onclick = () => {
    if (mode.getAttribute('href') == "") {
        mode.href = `css/nightmode.css`
        light.innerHTML = 'Светлый'
        localStorage.setItem("mode", "dark")
    } else {
        mode.href = ``
        light.innerHTML = 'Темный'
        localStorage.setItem("mode", "light")
    }
}


