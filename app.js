// let poy = document.querySelector(".poy");

// let array = [
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBXaiLqa2uR-PNiiq5Tc_F6yQIhqOVyu1NsHQdd1dqduPv2X4lJ_jvc6ZiLSCFNDGdSM&usqp=CAU",
//         h3: "Hartbee",
//         p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
//         button: "By Now",
//         price: "Price: 35$",
//         pr:"35$",
//         star: "⭐ ⭐ ⭐ ⭐ ⭐ ✰"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6LRWI_Oljc3gVw3789Sa7MSi-QDpN1V_9A&s",
//         h3: "vov",
//         p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
//         button: "By Now",
//         price: "Price: 5$",
//         pr:"5$",
//         star: "⭐ ⭐ ⭐ ⭐ ⭐ ⭐"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqgIzVGGMQLeb5YUTI-jfk11J5QviHqMpOFHSbWFej6q79ax396W3w05QOpeluYwUW2A&usqp=CAU",
//         h3: "dark",
//         p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
//         button: "By Now",
//         price: "Price: 25$",
//         pr:"25$",
//         star: "⭐ ⭐ ⭐ ⭐ ✰ ✰"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOu-Q0TtXSzE-9iDt7TN1TjxkSO9Jk95B_m8-Rulh6LwS-UpSp1-MwzRQqp36GnUYhcAY&usqp=CAU",
//         h3: "bad",
//         p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
//         button: "By Now",
//         price: "Price: 0.50$",
//         pr:"0.50$",
//         star: "⭐ ✰ ✰ ✰ ✰ ✰"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHCyXkZNse3ftRhpXW-hbBYDe0_PiSZsI3aenQ3pOmWNZNg4rX5woXkeYbwYcqcY-BCPc&usqp=CAU",
//         h3: "smal",
//         p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
//         button: "By Now",
//         price: "Price: 50$",
//         pr:"50$",
//         star: "⭐ ⭐ ⭐ ✰ ✰ ✰"
//     },
//     {
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JLSp2N_1wLq_rjFk9blyQ-gkpSlq1geM0g&s",
//         h3: "😊",
//         p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
//         button: "By Now",
//         price: "Price: 100$",
//         pr:"100$",
//         star: "⭐ ⭐ ⭐ ⭐ ⭐ ⭐"
//     },
// ];

// array.forEach(e => {
//     const mainCard = document.createElement("div");
//     const image = document.createElement("img");
//     const h3 = document.createElement("h3");
//     const stars = document.createElement("h4");
//     const price = document.createElement("h3");
//     const p = document.createElement("p");
//     const button = document.createElement("button");

//     image.src = e.image;
//     h3.innerHTML = e.h3;
//     stars.innerHTML = e.star;
//     p.innerHTML = e.p;
//     price.innerHTML = e.price;
//     button.innerHTML = e.button;

//     mainCard.classList.add("maincard");
//     image.classList.add("image");
//     h3.classList.add("h3");
//     p.classList.add("p");
//     stars.classList.add("stars");
//     button.classList.add("button");
    // button.onclick = () => {
    //     alert(`-${e.pr}`);
    // }

//     mainCard.append(image, h3, p, stars, price, button);
//     poy.appendChild(mainCard);
// });




let poy = document.querySelector(".poy");


let array = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBXaiLqa2uR-PNiiq5Tc_F6yQIhqOVyu1NsHQdd1dqduPv2X4lJ_jvc6ZiLSCFNDGdSM&usqp=CAU",
        h3: "Hartbee",
        p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
        button: "By Now",
        pr:"35$",
        price: "Price: 35$",
        star: "⭐ ⭐ ⭐ ⭐ ⭐ ✰"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6LRWI_Oljc3gVw3789Sa7MSi-QDpN1V_9A&s",
        h3: "vov",
        p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
        button: "By Now",
        price: "Price: 5$",
        pr:"5$",
        star: "⭐ ⭐ ⭐ ⭐ ⭐ ⭐"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqgIzVGGMQLeb5YUTI-jfk11J5QviHqMpOFHSbWFej6q79ax396W3w05QOpeluYwUW2A&usqp=CAU",
        h3: "dark",
        p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
        button: "By Now",
        price: "Price: 25$",
        pr:"25$",
        star: "⭐ ⭐ ⭐ ⭐ ✰ ✰"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOu-Q0TtXSzE-9iDt7TN1TjxkSO9Jk95B_m8-Rulh6LwS-UpSp1-MwzRQqp36GnUYhcAY&usqp=CAU",
        h3: "bad",
        p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
        button: "By Now",
        price: "Price: 0.50$",
        pr:"0.50$",
        star: "⭐ ✰ ✰ ✰ ✰ ✰"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHCyXkZNse3ftRhpXW-hbBYDe0_PiSZsI3aenQ3pOmWNZNg4rX5woXkeYbwYcqcY-BCPc&usqp=CAU",
        h3: "smal",
        p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
        button: "By Now",
        price: "Price: 50$",
        pr:"50$",
        star: "⭐ ⭐ ⭐ ✰ ✰ ✰"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JLSp2N_1wLq_rjFk9blyQ-gkpSlq1geM0g&s",
        h3: "😊",
        p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor saepe aliquam nobis, reiciendis esse optio porro aliquid atque vel corporis fugiat eligendi dicta earum nisi explicabo exercitationem impedit nemo a.",
        button: "By Now",
        price: "Price: 100$",
        pr:"100$",
        star: "⭐ ⭐ ⭐ ⭐ ⭐ ⭐"
    }
    
];

array.forEach((e, index) => {
    const mainCard = document.createElement("div");
    const image = document.createElement("img");
    const h3 = document.createElement("h3");
    const stars = document.createElement("h4");
    const price = document.createElement("h3");
    const p = document.createElement("p");
    const button = document.createElement("button");

    image.src = e.image;
    h3.innerHTML = e.h3;
    stars.innerHTML = e.star;
    p.innerHTML = e.p;
    price.innerHTML = e.price;
    button.innerHTML = e.button;

    mainCard.classList.add("maincard");
    image.classList.add("image");
    h3.classList.add("h3");
    p.classList.add("p");
    stars.classList.add("stars");
    button.classList.add("button");


    button.onclick = () => {
        alert(`-${e.pr}`);
    }

    mainCard.append(image, h3, p, stars, price, button);
    poy.appendChild(mainCard);
});
