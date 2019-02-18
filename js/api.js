const fetchUser = async (user) => {

    try {
        const response = await fetch(`https://api.github.com/users/${user}?client_id=093a5d687a4aebabac3f&client_secret=8a9f30cd6f1124eb31e0ec7560b49fc1551f7027`);
        const github = await response.json();
        return {
            github
        }
    }
    catch (err) {
        console.log(err);
    }

}

const fetchUserRepos = async (user) => {
 try{
     const response = await fetch(`https://api.github.com/users/${user}/repos?client_id=093a5d687a4aebabac3f&client_secret=8a9f30cd6f1124eb31e0ec7560b49fc1551f7027&sort=created&per_page=5`);
     const repos = await response.json();
     return{
         repos
     }
 }
 catch (err){
    console.log(err);
 }
}

export {fetchUser,fetchUserRepos};