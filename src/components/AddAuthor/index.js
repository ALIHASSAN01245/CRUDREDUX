import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddAuthor = ({ author, addAuthor }) => {
  const [authname, setName] = useState("");
  const [noofbooks, setnoofbooks] = useState("");
  const [DOB, setDOB] = useState("");
  const [Achievements, setAchievements] = useState("");

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noofbooks || !authname || !DOB || !Achievements) {
      return toast.warning("Please fill in all fields!!");
    }
    const data = {
      id: author[author.length - 1].id + 1,
      noofbooks,
      authname,
      DOB,
      Achievements,
    };
    addAuthor(data);
    toast.success("Author Added successfully!!");
    history.push("/author");
  };
  return (
    <div className="container-fluid">
      <h1 style={{ textAlign: "center" }}>Add Author</h1>
      <div className="row">
        <div className="col-md-6 p- mx-auto shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Author Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Book Name"
                value={authname}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>No of Books</label>
              <input
                className="form-control"
                type="author"
                placeholder="Enter Author Name"
                value={noofbooks}
                onChange={(e) => setnoofbooks(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="birthday">Date of Birth</label>
              <input
                class="form-control"
                type="date"
                id="dateofpublication"
                name="DateofPublication"
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Achievements</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={Achievements}
                onChange={(e) => setAchievements(e.target.value)}
              ></textarea>
            </div>
            <br />
            <div className="form-group d-flex align-items-center justify-content-between my-2">
              <button type="submit" className="btn btn-primary">
                Add Author
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
  author: state.AuthorReducer,
});
const mapDispatchToProps = (dispatch) => ({
  ///data move from component to redux-store
  addAuthor: (data) => {
    dispatch({ type: "ADD_AUTHOR", payload: data });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AddAuthor);
