const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {
    getCompliment,
    getFortune,
    getPosters,
    addPosters,
    deletePosters,
    moveCounter
} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get(`/api/fortune/`, getFortune)
app.get(`/api/poster/`, getPosters)
app.post(`/api/poster/`, addPosters)
app.delete(`/api/poster/:id/`, deletePosters)
app.put("/api/counter/:id", moveCounter)

app.listen(4000, () => console.log("Server running on loclahost:4000 Captain"));
