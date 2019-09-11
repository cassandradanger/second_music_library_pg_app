const express = require('express');
const router = express.Router();
const pool = require ('../modules/pool.js');

let musicLibrary = [
    {
        artist: "Sturgill Simpson",
        track: "Keep It Between the Lines",
        rank: 1,
        published: "4-16-2016"
    },
    {
        artist: "Margo Price",
        track: "Since You Put Me Down",
        rank: 2,
        published: "3-25-2016"
    },
    {
        artist: "Jason Isbell",
        track: "Alabama Pines",
        rank: 3,
        published: "4-12-2011"
    },
    {
        artist: "Midland",
        track: "Check Cashin' Country",
        rank: 4,
        published: "9-22-2017"
    },
    {
        artist: "Nikki Lane",
        track: "Highway Queen",
        rank: 5,
        published: "2-17-2017"
    }
]

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "songs";`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    })
});

router.post('/', (req, res) => {
    console.log("HELLO FROM THE POST", req.body);
    res.sendStatus(200);
    musicLibrary.push(req.body);
})

module.exports = router;