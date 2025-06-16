var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    Book.prototype.getDescription = function () {
        return "ID: ".concat(this.id, ", Tytu\u0142: \"").concat(this.title, "\", Autor: ").concat(this.author);
    };
    Book.prototype.hasTitle = function (searchTitle) {
        return this.title.toLowerCase() === searchTitle.toLowerCase();
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.findBookByTitle = function (title) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.hasTitle(title)) {
                return book;
            }
        }
        return null;
    };
    Library.prototype.displayBooks = function () {
        if (this.books.length === 0) {
            console.log("Biblioteka jest pusta.");
        }
        else {
            console.log("Książki w bibliotece:");
            this.books.forEach(function (book) {
                console.log(book.getDescription());
            });
        }
    };
    return Library;
}());
var library = new Library();
var booksData = [
    { id: 1, title: "Hobbit", author: "J.R.R. Tolkien" },
    { id: 2, title: "Rok 1984", author: "George Orwell" },
    { id: 3, title: "Zbrodnia i kara", author: "Fiodor Dostojewski" },
    { id: 4, title: "Duma i uprzedzenie", author: "Jane Austen" },
    { id: 5, title: "Wiedźmin", author: "Andrzej Sapkowski" },
    { id: 6, title: "Solaris", author: "Stanisław Lem" },
    { id: 7, title: "Mistrz i Małgorzata", author: "Michaił Bułhakow" },
    { id: 8, title: "Mały Książę", author: "Antoine de Saint-Exupéry" },
    { id: 9, title: "Gra o Tron", author: "George R.R. Martin" },
    { id: 10, title: "Harry Potter i Kamień Filozoficzny", author: "J.K. Rowling" },
];
booksData.forEach(function (bookData) {
    var book = new Book(bookData.id, bookData.title, bookData.author);
    library.addBook(book);
});
library.displayBooks();
var searchTitle = "Solaris";
var foundBook = library.findBookByTitle(searchTitle);
if (foundBook) {
    console.log("Znaleziono ksi\u0105\u017Ck\u0119: ".concat(foundBook.getDescription()));
}
else {
    console.log("Nie znaleziono ksi\u0105\u017Cki o tytule \"".concat(searchTitle, "\"."));
}
var missingTitle = "Nieistniejąca książka";
var notFoundBook = library.findBookByTitle(missingTitle);
if (notFoundBook) {
    console.log("Znaleziono ksi\u0105\u017Ck\u0119: ".concat(notFoundBook.getDescription()));
}
else {
    console.log("Nie znaleziono ksi\u0105\u017Cki o tytule \"".concat(missingTitle, "\"."));
}
