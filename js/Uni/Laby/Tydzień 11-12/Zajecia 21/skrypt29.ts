class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public getDescription(): string {
        return `ID: ${this.id}, Tytuł: "${this.title}", Autor: ${this.author}`;
    }

    public hasTitle(searchTitle: string): boolean {
        return this.title.toLowerCase() === searchTitle.toLowerCase();
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book){
        this.books.push(book);
    }

    public findBookByTitle(title: string){
        for (const book of this.books) {
            if (book.hasTitle(title)) {
                return book;
            }
        }
        return null;
    }

    public displayBooks(){
        if (this.books.length === 0) {
            console.log("Biblioteka jest pusta.");
        } else {
            console.log("Książki w bibliotece:");
            this.books.forEach((book) => {
                console.log(book.getDescription());
            });
        }
    }
}

const library = new Library();

const booksData = [
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

booksData.forEach((bookData) => {
    const book = new Book(bookData.id, bookData.title, bookData.author);
    library.addBook(book);
});

library.displayBooks();


const searchTitle = "Solaris";
const foundBook = library.findBookByTitle(searchTitle);
if (foundBook) {
    console.log(`Znaleziono książkę: ${foundBook.getDescription()}`);
} else {
    console.log(`Nie znaleziono książki o tytule "${searchTitle}".`);
}


const missingTitle = "Nieistniejąca książka";
const notFoundBook = library.findBookByTitle(missingTitle);
if (notFoundBook) {
    console.log(`Znaleziono książkę: ${notFoundBook.getDescription()}`);
} else {
    console.log(`Nie znaleziono książki o tytule "${missingTitle}".`);
}