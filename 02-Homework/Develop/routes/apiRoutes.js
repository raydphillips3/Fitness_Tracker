let db = require("../models");

const router = require("express").Router();

router.get("/api/workouts", function(req, res) {
    db.Workout.find({})
    .then(function(results) {
        res.json(results);
    })
});

router.put("/api/workouts/" + id, function(req, res) {
    db.Workout.update(req.body.id)
    .then(function(work) {
        res.json(work);

    })
});

router.post("/api/workouts", function(req, res) {
    db.Workout.create(req.body)
    .then(function(work) {
        res.json(work);
    })
});

router.get("/api/workouts/range", function(req, res) {
    db.Workout.find({})
    .then(function(results) {
        res.json(results);
    })
});

module.exports = router;