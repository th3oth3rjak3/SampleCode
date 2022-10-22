import express from "express";

const otherRoutes = express();

otherRoutes.get("/", (req, res) => {
    res.send("Hooray, you got otherRoutes!");

});

export {otherRoutes}