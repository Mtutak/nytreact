// Promise based request
var axios = require("axios");

const nytAPI = "cf143926ab5c4ca3b786083109a5d006";

var helper = {
    //Runs the NYT query
    getArticles: function (term, startMo, endMo) {
        console.log(term);
        var start = startMo.replace("-","") + "01";
        var end = endMo.replace("-", "") + "31";
        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&begin_date=${start}&end_date=${end}&api-key=${nytAPI}`;
        return axios.get(queryURL).then(function (response, err) {
            console.log(response);
            if (err) {
                console.log(err);
                return "";
            }
            //only want to return part of the response we will need other than entire object
            //return back allArticles to promise in Main where this was called
            var allArticles = [];
            var res = response.data.response.docs;
            for (var i=0; i < res.length; i++) {
                var eachArt = res[i];
                var article = {
                    title: eachArt.headline.main,
                    url: eachArt.web_url
                };
                allArticles.push(article);
            }
            return allArticles;
        });
    },
    //Get Request to server for saved results
    getSaved: function () {
        return axios.get("/api/saved");
    },
    //Post Request to add new Article Results to our DB
    postArticle: function (data) {
        return axios.post("/api/saved", {data:data});
    },
    deleteArticle: function () {
        return axios.put("/api/saved", {data:data});
    }
};

module.exports = helper;