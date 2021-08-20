import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const EditBook = ({ books, updateBook }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentBook = books.find((book) => book.id === parseInt(id));
  useEffect(() => {
    setName(currentBook.name);
    setauthor(currentBook.author);
    setStartDate(currentBook.publishdate);
    setdes(currentBook.desc);
  }, [currentBook]);
  const [name, setName] = useState("");
  const [author, setauthor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [desc, setdes] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !name || !startDate || !desc) {
      return toast.warning("Please fill in all fields!!");
    }
    const data = {
      id: currentBook.id,
      author,
      name,
      startDate,
      desc,
    };
    updateBook(data);
    toast.success("Book updated successfully!!");
    history.push("/");
  };
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <h1 style={{ textAlign: "center" }}>Edit Book</h1>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentBook ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Book Name</label>
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Author Name</label>
                <input
                  className="form-control"
                  value={author}
                  placeholder={"author"}
                  onChange={(e) => setauthor(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label for="birthday">Publish Date</label>
                <input
                  class="form-control"
                  type="date"
                  id="dateofpublication"
                  name="DateofPublication"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  className="form-control"
                  value={desc}
                  placeholder={"Enter Description"}
                  onChange={(e) => setdes(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Book
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Book Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.BookReducer,
});
const mapDispatchToProps = (dispatch) => ({
  updateBook: (data) => {
    dispatch({ type: "UPDATE_BOOK", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
