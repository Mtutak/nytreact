// Promise based request
var axios = require("axios");

const nytAPI = "cf143926ab5c4ca3b786083109a5d006";

var helper = {
    //Runs the NYT query
    getArticles: function (term, startMo, endMo) {
        console.log(term);
        console.log(start);
        var start = startMo.replace("-","") + "01";
        var end = endMo.replace("-", "") + "31";
        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&begin_date=${start}&end_date=${end}&api-key=${nytAPI}`;
        return axios.get(queryURL).then(function (response, err) {
            console.log(response);
            if (err) {
                console.log(err);
                return "";
            }
            return response.data;
        });
    },
    //Get Request to server for saved results
    getSaved: function () {
        return axios.get("/api/saved");
    },
    //Post Request to add new Article Results to our DB
    postArticle: function () {
        return axios.post("/api/saved", {data:data});
    },
    deleteArticle: function () {
        return axios.put("/api/saved", {data:data});
    }
};

module.exports = helper;