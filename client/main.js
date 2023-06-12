const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector(`#fortune-cookie`)
const randomFortune = document.querySelector(`#new-fortune`)
const posterSection = document.getElementById(`posters`)
const posterBtn = document.querySelector(`#get-posters`)
const posterList = document.getElementById(`poster-list`)
const form = document.querySelector(`.add-poster`)
const baseURL = "http://localhost:4000/api/poster/"



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = (evt) =>{
    console.log(`getting you're fortune...`)
    axios.get("http://localhost:4000/api/fortune/")
    .then(res =>{
        randomFortune.innerHTML= ``
        let prophecy = document.createElement(`p`)
        prophecy.textContent= res.data
        randomFortune.appendChild(prophecy)
    })
    .catch(err => console.log(err))
};


const getPosters = evt => {
    posterList.innerHTML = ``
    axios.get(baseURL)
    .then( res => {
        // console.log(res.data)
        showPosters(res.data)
    })
    .catch(err => console.log(err))
}

const addPoster = evt =>{
    let newTitle =  document.querySelector(`.title`)
    let newImg = document.querySelector(`.img`)
    posterObj ={
        title: newTitle.value,
        img: newImg.value
    }
    axios.post(baseURL, posterObj )
        .then( res => {
            console.log(res.data)
            showPosters(res.data)
        })
}

const deletePoster = evt => {
    axios.delete(`${baseURL}${evt.target.id}`)
    .then(res=>{
        showPosters(res.data)
    })
    .catch(err => console.log(err))
}

const showPosters = posterArr => {
    posterList.innerHTML = ``
    posterArr.forEach((posterObj, index) =>{
        console.log(posterObj)
        let {title, img} = posterObj
        let eachPoster = document.createElement(`li`)
        let posterTitle = document.createElement(`span`)
        let posterImg = document.createElement(`div`)
        posterTitle.textContent = title
        posterImg.innerHTML = `<img src=${img} class="poster-img"/>`

        let deleteBtn = document.createElement(`button`)
        deleteBtn.classList.add(`delete`)
        deleteBtn.textContent = `X`
        deleteBtn.id = index
        deleteBtn.addEventListener(`click`, deletePoster)

        posterTitle.appendChild(deleteBtn)
        eachPoster.appendChild(posterTitle)
        eachPoster.appendChild(posterImg)
        posterList.appendChild(eachPoster)
        posterSection.appendChild(posterList)
    })
}




complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener(`click`, getFortune)
posterBtn.addEventListener(`click`, getPosters)
form.addEventListener(`submit`, addPoster)