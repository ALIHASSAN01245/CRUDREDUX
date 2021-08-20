import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const AuthorHome = ({ authors, deleteAuthors }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <br />
        <h1
          style={
            ({ color: "green" }, { padding: "10px" }, { textAlign: "center" })
          }
        >
          Author Portal
        </h1>
        <Link to="/auth" className="btn" style={{ color: "blue" }}>
          Add Author
        </Link>
        <div className="col-md-12 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-primary text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">No of Books</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Achievement</th>
                <th scope="col">Action</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {authors.length > 0 ? (
                authors.map((author, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{author.authname}</td>
                    <td>{author.noofbooks}</td>
                    <td>{author.DOB}</td>
                    <td>{author.Achievements}</td>
                    <td>
                      <Link
                        to={`/editauth/${author.id}`}
                        className="btn btn-sm btn-success mr-1"
                      >
                        ♦ Edit
                      </Link>
                      <br />
                      <button
                        type="button"
                        onClick={() => deleteAuthors(author.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No Authors found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  authors: state.AuthorReducer,
});
const mapDispatchToProps = (dispatch) => ({
  deleteAuthors: (id) => {
    dispatch({ type: "DELETE_AUTHORS", payload: id });
    toast.success("Author deleted successfully!!");
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AuthorHome);

/////////////////////////////////////////
// import React from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// const Home = ({ books, deleteBook }) => {
//   return (
//     <div className="container">
//       <div className="row d-flex flex-column">
//         <br />
//         <h1
//           style={
//             ({ color: "green" }, { padding: "10px" }, { textAlign: "center" })
//           }
//         >
//           Book Portal
//         </h1>
//         <Link to="/add" className="btn" style={{ color: "blue" }}>
//           Add Book
//         </Link>
//         <div className="col-md-12 mx-auto my-4">
//           <table className="table table-hover">
//             <thead className="table-header bg-primary text-white">
//               <tr>
//                 <th scope="col">Id</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Author</th>
//                 <th scope="col">Publish Date</th>
//                 <th scope="col">Description</th>
//                 <th scope="col">Action</th>
//                 <th scope="col"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {books.length > 0 ? (
//                 books.map((book, id) => (
//                   <tr key={id}>
//                     <td>{id + 1}</td>
//                     <td>{book.name}</td>
//                     <td>{book.author}</td>
//                     <td>{book.startDate}</td>
//                     <td>{book.desc}</td>
//                     <td>
//                       <Link
//                         to={`/edit/${book.id}`}
//                         className="btn btn-sm btn-success mr-1"
//                       >
//                         ♦ Edit
//                       </Link>
//                       <br />
//                       <button
//                         type="button"
//                         onClick={() => deleteBook(book.id)}
//                         className="btn btn-sm btn-danger"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <th>No Books found</th>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
// const mapStateToProps = (state) => ({
//   books: state.BookReducer,
// });
// const mapDispatchToProps = (dispatch) => ({
//   deleteBook: (id) => {
//     dispatch({ type: "DELETE_BOOK", payload: id });
//     toast.success("Book deleted successfully!!");
//   },
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
