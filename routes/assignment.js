var express = require('express');
var router = express.Router();


router.post("books/:title", (req, res, next) => {
    const {title} = req.params;
    const {books} = req.locals.data;

    const nextId = books.length;

    books.push({
        id: nextId,
        title
    });
    res.send(books);
});

module.exports = router;