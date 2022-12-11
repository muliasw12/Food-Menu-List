const food = [
    {
        id:1, 
        name: "BURGER",
        img: "https://wallpapercave.com/wp/wp3151363.jpg",
        price: 3,
        category: "FASTFOOD"
    },
    {
        id: 2,
        name: "CHEESE BURGER",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Cw7DLr9RY9FnQBQn7WS5J-1un-895x5pQg&usqp=CAU",
        price: 4,
        category: "FASTFOOD"
    },
    {
        id: 3,
        name: "FRENCH FRIES",
        img: "https://image.freepik.com/free-photo/front-view-tasty-ham-sandwiches-with-french-fries-dark-surface_179666-34646.jpg",
        price: 2.8,
        category: "FASTFOOD"
    },
    {
        id: 4,
        name: "DAL",
        img: "https://image.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-background_2829-4752.jpg",
        price: 7,
        category: "LUNCH/DINNER"
    },
    {
        id: 5,
        name: "RICE",
        img: "https://image.freepik.com/free-photo/cooked-plain-white-basmati-rice-steamed-rice-bowl_466689-74933.jpg",
        price: 5,
        category: "LUNCH/DINNER"
    },
    {
        id: 6,
        name: "PLAIN ROTI",
        img: "https://image.freepik.com/free-photo/chapati-tanturi-roti_57665-1758.jpg",
        price: 1,
        category: "LUNCH/DINNER"
    },
    {
        id: 7,
        name: "FRUIT SALAD",
        img: "https://image.freepik.com/free-photo/fresh-fruit-berry-salad-healthy-eating_114579-20466.jpg",
        price: 1.5,
        category: "BREAKFAST"
    },
    {
        id: 8,
        name: "SALAD",
        img: "https://image.freepik.com/free-photo/greek-salad-with-fresh-tomato-cucumber-red-onion-basil-feta-cheese-black-olives-italian-herbs_2829-4480.jpg",
        price: 1.5,
        category: "LUNCH/DINNER"
    },
    {
        id: 9,
        name: "SAAHI PANEER",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lPaLy7Hf9pOD2j66L0-N7Y6pUX4AnfNa9g&usqp=CAU",
        price: 7,
        category: "LUNCH/DINNER"
    },
    {
        id: 10,
        name: "KADAHI PANEER",
        img: "https://c.ndtvimg.com/hoqnolg8_kadai-paneer,-recipe_625x300_20_July_18.jpg",
        price: 6,
        category: "LUNCH/DINNER"
    },
    {
        id: 11,
        name: "CHOLLE BHATURE",
        img: "https://img-global.cpcdn.com/recipes/ff515314282d0608/751x532cq70/punjabi-chole-bhature-recipe-chole-bhature-recipe-recipe-main-photo.jpg",
        price: 7,
        category: "LUNCH/DINNER"
    },
    {
        id: 12,
        name: "CHOLLE KULCHE",
        img: "https://static.toiimg.com/thumb/73514385.cms?imgsize=1468833&width=800&height=800",
        price: 5,
        category: "LUNCH/DINNER"
    },
    {
        id: 13,
        name: "NAAN",
        img: "https://spicesnflavors.com/wp-content/uploads/2019/09/naan-bread-3-500x500.jpg",
        price: 3,
        category: "LUNCH/DINNER"
    },
    {
        id: 14,
        name: "BUTTERED NAAN",
        img: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/mekhla-rashmi2018050315402018.jpeg",
        price: 2.4,
        category: "LUNCH/DINNER"
    },
    {
        id: 15,
        name: "MASALA DAAL",
        img: "https://i.ytimg.com/vi/7ws90bPThx0/maxresdefault.jpg",
        price: 4,
        category: "LUNCH/DINNER"
    },
    {
        id: 16,  
        name: "PIZZA",  
        img: "https://image.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",  
        price: 4,  
        category: "FASTFOOD"
    },
    {
        id: 17,  
        name: "CHEESY CORN PIZZA",  
        img: "https://image.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg",  
        price: 5,  
        category: "FASTFOOD"
    },
    {
        id: 18,  
        name: "VEG FRIED RICE",  
        img: "https://image.freepik.com/free-photo/vegetarian-hyderabadi-dum-biryani-ramadan-food_158388-2268.jpg",  
        price: 5,  
        category: "FASTFOOD"
    },
    {
        id: 19,  
        name: "CHAAT/TIKKI",  
        img: "https://static.toiimg.com/thumb/52727664.cms?width=1200&height=900",  
        price: 5,  
        category: "FASTFOOD"
    }, 
    {
        id: 20,  
        name: "CHOWMEIN",  
        img: "https://image.freepik.com/free-photo/fried-noodles-plate_1339-2157.jpg",  
        price: 5,  
        category: "FASTFOOD"
    },
    {
        id: 21,  
        name: "PANI PURI",  
        img: "https://static.toiimg.com/thumb/61048461.cms?imgsize=1981854&width=800&height=800",  
        price: 3,  
        category: "FASTFOOD"
    },
    {
        id: 22,  
        name: "MANCHURIAN BALLS",  
        img: "https://i.ytimg.com/vi/xkMbJCtaaqA/maxresdefault.jpg",  
        price: 5,  
        category: "FASTFOOD"
    },
    {
        id: 23,  
        name: "AALOO PARATHA",  
        img: "https://static.toiimg.com/thumb/53109843.cms?imgsize=244340&width=800&height=800",  
        price: 4,  
        category: "BREAKFAST"
    },
    {
        id: 24,  
        name: "PYAZ PARATHA",  
        img: "https://cdn3.foodviva.com/static-content/food-images/roti-paratha-recipes/onion-paratha-recipe/onion-paratha-recipe.jpg",  
        price: 4,  
        category: "BREAKFAST"
    },
    {
        id: 25,  
        name: "SATOO PARATHA",  
        img: "https://static.toiimg.com/thumb/54444357.cms?imgsize=128894&width=800&height=800",  
        price: 4,  
        category: "BREAKFAST" 
    }, 
    {
        id: 26,  
        name: "PLAIN PARATHA",  
        img: "https://indianvegrecipe.com/wp-content/uploads/2019/10/paratha-recipe.jpg",  
        price: 3,  
        category: "BREAKFAST"  
    },
    {
        id: 27,  
        name: "BREAD AND BUTTER",  
        img: "https://media.istockphoto.com/photos/bread-and-butter-picture-id463179229",  
        price: 2,  
        category: "BREAKFAST"
    },
    {
        id: 28,  
        name: "BREAD AND JAM",  
        img: "https://media.istockphoto.com/photos/strawberry-preserves-on-bread-picture-id525057795",  
        price: 2,  
        category: "BREAKFAST"
    },
    {
        id: 29,  
        name: "BOILED EGGS",  
        img: "https://images.media-allrecipes.com/userphotos/9188544.jpg",  
        price: 4,  
        category: "BREAKFAST"
    },
    {
        id: 30,  
        name: "EGG OMELATE",  
        img: "https://i2.wp.com/mygorgeousrecipes.com/wp-content/uploads/2018/02/Worlds-Best-Vegetarian-Omelette-Quick-and-Easy-500x375.jpg",  
        price: 5,  
        category: "BREAKFAST"
    },
    {
        id: 31,  
        name: "TEA",  
        img: "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/22/tea.jpg",  
        price: 3,  
        category: "DRINKS"
    },
    {
        id: 32,  
        name: "COFFEE",  
        img: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg",  
        price: 3,  
        category: "DRINKS"
    },
    {
        id: 33,  
        name: "COLD DRINK",  
        img: "https://cdn.cdnparenting.com/articles/2018/07/361921454-H.jpg",  
        price: 5,  
        category: "DRINKS"
    },
    {
        id: 34,  
        name: "SHAKES",  
        img: "https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/summer-of-shakes.jpg.jpeg?itok=OUDvbdfl",  
        price: 4.5,  
        category: "DRINKS"
    },
    {
        id: 35,  
        name: "COLD COFFEE",  
        img: "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-cold-coffee-recipe.jpg",  
        price: 3,  
        category: "DRINKS"
    },
    {
        id: 36,  
        name: "NIMBU PAANI",  
        img: "https://simmertoslimmer.com/wp-content/uploads/2016/07/Nimbu-Pani.jpg",  
        price: 2,  
        category: "DRINKS"
    }
];

categories = document.querySelector(".categories");
container = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", function() {
    filterMenu("ALL")
    var cat = food.reduce(function(values, items){
        if (!values.includes(items.category)) {
            values.push(items.category);
        }
        return values;
    }, ["ALL"])
    var catBtns = cat.map(function(item) {
        return `<a href="#" class="ctitle ${item}">${item}</a>`;
    })
    var catBtns = catBtns.join("")
    categories.innerHTML = catBtns;
    var button = document.getElementsByClassName("ctitle")
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", (e) => {
            var val = e.target.className.split(" ");
            filterMenu(val[1])
        })
    }
})

function displayMenu(food) {
    var displayMenu =  food.map(function(item){
        return(
            `<div class="items">
                <div class="img-container"><img src="${item.img}" alt="${item.title}" class="img"></img></div>
                <div class="details">
                    <div class="title">${item.name}</div>
                    <div class="price">$${item.price}</div>
                </div>
                <div class="category">${item.category}</div>
            </div>`
        )
    })
    displayMenu = displayMenu.join("");
    container.innerHTML = displayMenu 
}
var lists = food.reduce(function(values, items) {
    if (!values.includes(items.category)) {
        values.push(items.category);
    }
    return values;
}, ["ALL"]);

function filterMenu(category) {
    var filter1 = food.filter(function(item) {
        if (item.category === category) {
            return item;
        }
    })
    if (category === "ALL") {
        displayMenu(food);
    } else {
        displayMenu(filter1);
    }
}