import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddBook = ({ books, addBooks }) => {
  const [name, setName] = useState("");
  const [author, setauthor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [desc, setdes] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !name || !startDate || !desc) {
      return toast.warning("Please fill in all fields!!");
    }
    const data = {
      id: books[books.length - 1].id + 1,
      name,
      author,
      startDate,
      desc,
    };
    addBooks(data);
    toast.success("Book Added successfully!!");
    history.push("/");
  };
  return (
    <div className="container-fluid">
      <h1 style={{ textAlign: "center" }}>Add Book</h1>
      <div className="row">
        <div className="col-md-6 p- mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Boook Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Book Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Author Name</label>
              <input
                className="form-control"
                type="author"
                placeholder="Enter Author Name"
                value={author}
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
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={desc}
                onChange={(e) => setdes(e.target.value)}
              ></textarea>
            </div>
            <br />
            <div className="form-group d-flex align-items-center justify-content-between my-2">
              <button type="submit" className="btn btn-primary">
                Add Book
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
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  // data move from redux-store to  component
  books: state.BookReducer,
});
const mapDispatchToProps = (dispatch) => ({
  ///data move from component to redux-store
  addBooks: (data) => {
    dispatch({ type: "ADD_BOOK", payload: data });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
