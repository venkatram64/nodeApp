var express = require('express');

var loans = require('./../mappers').loans;
var router = express.Router();



router.get('/books', (req, res, next) => {
  const {books} = req.app.locals.data;
  res.send(books);
});

router.get('/users', (req, res, next) => {
  const {users} = req.app.locals.data;
  res.send(users);
});

router.get('/loans', (req, res, next) => {
  const {books:booksArr, loans: loansArr, users: usersArr} = req.app.locals.data;
  const mappedLoans = loans(booksArr, loansArr, usersArr);
  /*const {books, loans, users} = req.app.locals.data;

  const mappedLoans = loans.map(({bookId, userId}) => {
    const book = books.find(book => book.id === bookId);
    const user = users.find(user => user.id === userId);
    return {
      book,
      user
    };
  });*/
  
  res.send(mappedLoans);
});

module.exports = router;
