import movies from "./db.js"


let array = []
let genrew = document.querySelector(".promo__genre")
let title = document.querySelector(".promo__title")
let ul = document.querySelector(".promo__interactive-list")
let photo = document.querySelector(".promo__bg")
let desc = document.querySelector(".promo__descr")
let items = document.querySelectorAll(".promo__interactive-item")
let promo = document.querySelector(".promo__ratings")
let leftSide = document.querySelector("#ul")



function reload(data) {
    ul.innerHTML =""
    data.forEach(movie => {
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
        del.onclick = () => {
            if (confirm()) {
                del.parentElement.remove()
            }
    
        }
    
    
        array.push(movie.Genre)
    });
}
let genre_acc = []
function reload_genres(arr) {

    for(let item of arr) {
        let li = document.createElement('li')
        let a = document.createElement('a')

        a.classList.add("promo__menu-item")
        a.href = "#"
        a.innerText = item

        li.append(a)
        leftSide.append(li)
    }
    let active_btns = document.querySelectorAll(".promo__menu-item")

    active_btns.forEach(btn => {
        btn.onclick = () => {
            genre_acc = []
            active_btns.forEach(element => { element.classList.remove("promo__menu-item_active") });
            btn.classList.add("promo__menu-item_active")
            movies.forEach(movie => {
                // console.log(movie.Genre);
                if (btn.innerHTML== movie.Genre) {
                    genre_acc.push(movie)
                    console.log(genre_acc);
                    reload(genre_acc)
                }
            });

        }
        
    });
}





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






//LIGHT / DARK mode 
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
    console.log(1);
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




reload(movies)
array = [...new Set(array)]
reload_genres(array)


