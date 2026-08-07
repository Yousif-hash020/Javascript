const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = [];


// ==================== GET ALL USERS ====================

app.get("/api/users", (req, res) => {

    res.status(200).json(users);

});


// ==================== GET SINGLE USER ====================

app.get("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json(user);

});


// ==================== POST USER ====================

app.post("/api/users", (req, res) => {

    const newUser = {
        id: Date.now(),
        ...req.body
    };

    users.push(newUser);

    console.log("POST:", newUser);

    res.status(201).json(newUser);

});


// ==================== PUT USER ====================

app.put("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const updatedUser = {
        id,
        ...req.body
    };

    users[index] = updatedUser;

    console.log("PUT:", updatedUser);

    res.status(200).json(updatedUser);

});


// ==================== PATCH USER ====================

app.patch("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    Object.assign(user, req.body);

    console.log("PATCH:", user);

    res.status(200).json(user);

});


// ==================== DELETE USER ====================

app.delete("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const deletedUser = users.splice(index, 1);

    console.log("DELETE:", deletedUser[0]);

    res.status(200).json({
        message: "User deleted successfully",
        user: deletedUser[0]
    });

});


// ==================== SERVER ====================

app.listen(5000, () => {

    console.log("Server running on http://localhost:5000");

});