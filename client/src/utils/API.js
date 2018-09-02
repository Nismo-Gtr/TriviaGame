import axios from "axios";
const BASEURL = "https://opentdb.com/api.php?amount=10";
const CATSURL = "&category=";
const DIFFURL = "&difficulty=";
const ENDURL = "&type=multiple";


export default {
    //gets current users and high scores
    // getUsers: function() {
    //     return axios.get("/api/users");
    // },
    // //adds new users and their scores
    // addUsers: function() {
    //     return axios.post("/api/users", userData);
    // },
    getQuestions: function(category, difficulty) {
    return axios.get(BASEURL + CATSURL + category + DIFFURL + difficulty + ENDURL)
    }
  }