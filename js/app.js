//import fetch request
import {fetchUser, fetchUserRepos} from './api.js';
import  UI from './ui.js';



//Class UI

//Event
document.getElementById("form").addEventListener("submit", (e) => {
    // console.log("I am working");

    //Prevent the default submit
    e.preventDefault();

    //get the user input
    const userInput = document.getElementById("users").value;

    //check if input not blank
    if (userInput === '') {
        UI.showAlert("Please enter a user name!", "danger");
    } else {
        fetchUser(userInput)
            .then(data => {
                if (data.github.message === "Not Found") {
                    UI.showAlert("User not found", "warning");
                } else {
                    //console.log(data);
                    
                    //render html
                    UI.renderHtml(data);

                    //show repos
                    fetchUserRepos(userInput)
                    .then(data =>{
                        console.log(data);
                        UI.reposHTML(data);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }

            })
            .catch(err =>{console.log(err)});

        document.getElementById("users").value = '';
    }

})

