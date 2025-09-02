import Book from './Book';
import bookdata from './bookdata';
import './book.css';

function App(){
    return (
        <div className = "App">
            <h1>Book List</h1>
            <div className = "Book-list">
            {bookdata.map(book => <Book key={book.id}  book={book} name="BOB"/>)} 
            </div>

        </div>
    );
};

export default App;