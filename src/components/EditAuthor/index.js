import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const EditAuthor = ({ authors, updateAuthor }) => {
  const { id } = useParams();
  const history = useHistory();
  const CurrentAuthor = authors.find((book) => book.id === parseInt(id));
  useEffect(() => {
    setName(CurrentAuthor.authname);
    setnoofbooks(CurrentAuthor.noofbooks);
    setDOB(CurrentAuthor.DOB);
    setAchievements(CurrentAuthor.Achievements);
  }, [CurrentAuthor]);
  const [authname, setName] = useState("");
  const [noofbooks, setnoofbooks] = useState("");
  const [DOB, setDOB] = useState("");
  const [Achievements, setAchievements] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!noofbooks || !authname || !DOB || !Achievements) {
      return toast.warning("Please fill in all fields!!");
    }
    const data = {
      id: CurrentAuthor.id,
      authname,
      noofbooks,
      DOB,
      Achievements,
    };
    updateAuthor(data);
    toast.success("Author updated successfully!!");
    history.push("/author");
  };
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <h1 style={{ textAlign: "center" }}>Edit Author</h1>
        <div className="col-md-6 mx-auto shadow p-5">
          {CurrentAuthor ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Author Name</label>
                <input
                  className="form-control"
                  value={authname}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>No of Books</label>
                <input
                  className="form-control"
                  value={noofbooks}
                  placeholder={"no of books"}
                  onChange={(e) => setnoofbooks(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="birthday">Publish Date</label>
                <input
                  class="form-control"
                  type="date"
                  id="dateofpublication"
                  name="DateofBirth"
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
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Author
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/author")}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Author Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  authors: state.AuthorReducer,
});
const mapDispatchToProps = (dispatch) => ({
  updateAuthor: (data) => {
    dispatch({ type: "UPDATE_AUTHOR", payload: data });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(EditAuthor);
