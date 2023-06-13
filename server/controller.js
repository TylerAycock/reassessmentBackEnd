const { response } = require("express");

const fortunes = ["A good time to finish up old tasks.", "A new perspective will come with the new year.", "A truly rich life contains love and art in abundance.", "All will go well with your new project.", "An important person will offer you support." ]

const posters = [
    {
        title: `Hang in there`,
        img: "https://m.media-amazon.com/images/I/61UxTTMY86L._AC_SX679_.jpg"
    },
    {
        title: `Ambition`,
        img: "https://m.media-amazon.com/images/I/51AjFAtuqpL._AC_SX679_.jpg"
    },
    {
        title: `Triumph`,
        img: "https://m.media-amazon.com/images/I/41REi2fTT9L._AC_SX679_.jpg"
    }
]

let counter = 0

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, resp) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let newFortune = fortunes[randomIndex]

        resp.status(200).send(newFortune)
    },
    getPosters: (req,resp) => {
        resp.status(200).send(posters)

    },
    addPosters: (req,resp)=>{
        posters.push(req.body)
        resp.status(200).send(posters)
    },
    deletePosters: (req,resp) =>{
        console.log(req.params)
        let {id} = req.params
        posters.splice(id, 1)
        resp.status(200).send(posters)
    },
    moveCounter: (req,resp) =>{
        console.log(req.params)
        let {id}= req.params
        console.log(id)
        if (id === `minus`){
            counter--
        }
        if(id === `plus`){
            counter++
        }
        console.log(`the count is now ${counter}`)
        resp.send(200).send(counter)
    }

}