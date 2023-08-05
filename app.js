import "./project-card.js"
// localStorage.removeItem("myprojects")
const cardData = [
    {
        imgurl: "https://picsum.photos/200/300",
        linkurl: "https://duckduckgo.com/",
        alttext: "image of nature",
        projectname: "My First Local Project",
        projectdescription: "Some Random text here."
    },
    {
        imgurl: "https://loremflickr.com/200/300",
        linkurl: "https://duckduckgo.com/",
        alttext: "some text",
        projectname: "My Second Local Project",
        projectdescription: "Some Random text here."
    },
    {
        imgurl: "https://source.unsplash.com/featured/200x300",
        linkurl: "https://duckduckgo.com/",
        alttext: "some text",
        projectname: "My Third Local Project",
        projectdescription: "Some Random text here."
    },
    {
        imgurl: "https://i.pickadummy.com/200x300",
        linkurl: "https://duckduckgo.com/",
        alttext: "some text",
        projectname: "My Forth Local Project",
        projectdescription: "Some Random text here."
    }
]

if (!localStorage.getItem("myprojects")) {
    localStorage.setItem("myprojects", JSON.stringify(cardData))
}

const loadlocal = document.getElementById("loadlocal")

const loadremote = document.getElementById("loadremote")

loadlocal.addEventListener('click', function (event) {
    const cardHolder = document.getElementById("card-holder")
    let mycontentdata = ``;

    cardHolder.innerHTML = ``;

    const local = JSON.parse(localStorage.getItem("myprojects"))

    local.map((data) => {
        return mycontentdata += `
        <profile-card imagesrc="${data.imgurl}" alt-text="${data.alttext}" project-link="${data.linkurl}">
                    <h2 slot="project-name">${data.projectname}</h2>
                    <p slot="project-description">${data.projectdescription}.</p>
        </profile-card>
        `
    })

    console.log("newL ", mycontentdata)

    cardHolder.innerHTML = mycontentdata;
})


loadremote.addEventListener('click', function (event) {
    const cardHolder = document.getElementById("card-holder")
    let mycontentdata = ``;
    
    cardHolder.innerHTML = ``;

    const BIN_ID = "64ce92539d312622a38c747c";
    const binUrl = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;

    fetch(binUrl)
        .then((response) => {
            return response.json()
        })
        .then((remote) => {
            // console.log("remote", remote.record.cardData)
            return remote.record.cardData;
        })
        .then((remotedata) => {
            remotedata.map((data) => {
                return mycontentdata += `
                <profile-card imagesrc="${data.imgurl}" alt-text="${data.alttext}" project-link="${data.linkurl}">
                            <h2 slot="project-name">${data.projectname}</h2>
                            <p slot="project-description">${data.projectdescription}.</p>
                </profile-card>
                `
            })

            console.log("newL ", mycontentdata)

            cardHolder.innerHTML = mycontentdata;
        })


})
