export default class UI {

    //render html for alert 
    static showAlert(msg, className) {
        const div = document.createElement("div");
        div.classList = `col text-center alert alert-${className}`;
        const txt = document.createTextNode(msg);
        div.appendChild(txt);
        const container = document.getElementsByTagName('body')[0];
        container.insertBefore(div, container.childNodes[0]);

        //vanish in 2 sec
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 2000);
    }

    //Render html for profile
    static renderHtml(data) {
        const div = document.createElement("div");
        const container = document.querySelector("#result");
        div.classList = "user-details mt-4";
        container.innerHTML = '';
        div.innerHTML = `
       
        <div class="card col-12">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img src="${data.github.avatar_url}" alt="" width="350" height="350" class="img-rounded img-responsive" />
                        <a href="${data.github.html_url}" target="_blank" class="mt-3 btn btn-block btn-danger">Visit profile</a>
                    </div>
                    <div class="col-sm-6 col-md-8">

                        <h4>${data.github.name}</h4>
                        
                        <p>${data.github.bio}</p>
                        
                        <p>
                            Company: ${data.github.company}<br>
                            Email: ${data.github.email}<br>
                            Location: ${data.github.location}<br>
                            Member Since: ${data.github.created_at}
                           </p>
                           <p>
                           <span class="label label-default">Public Repos: ${data.github.public_repos}</span>
                        <span class="label label-danger">Public Gists: ${data.github.public_gists}</span>
                        <span class="label label-success">Followers: ${data.github.followers}</span>
                        <span class="label label-info">Following: ${data.github.following}</span>
                           </p>
                    </div>
                </div>
            </div>
        
    </div>
    `;
        container.appendChild(div);
    }

    //Render html for repos
    static reposHTML(data) {
        const div = document.createElement("div");
        const container = document.querySelector("#result");
        div.classList = "user-repos mt-4";
        let html = '';
        div.innerHTML = '';
        data.repos.forEach(repos => {
            html += `
        <div class="card col-12 mt-2 bg-light pt-2 pb-2">
            <div class="row">
                <div class="col-7">
                <strong>${repos.name}:</strong> ${repos.description}
                </div>
                <div class="col-5 text-right">
                <span class="label label-default">Forks: ${repos.forks}</span>
                <span class="label label-danger">Watchers: ${repos.watchers}</span>
                <span class="label label-success">Star: ${repos.stargazers_count}</span>
                </div>
            </div>
        </div>
    `;
            container.appendChild(div);
        });
        div.innerHTML = html;



    }
}
