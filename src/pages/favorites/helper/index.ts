export async function getAllFavJokes() {
    const sessionUserId = localStorage.getItem("@joke-ui: user_id");
    try {
        const response: Users = await fetch(`http://localhost:8000/users/${sessionUserId}`).then(res => res.json());
        return response.favorites;
    } catch(e) {
    }
}

export async function removeFavJoke(favsArray: Ijoke[]) {
    const userId = localStorage.getItem("@joke-ui: user_id");
    
    const userBody: Users = JSON.parse(localStorage.getItem("@joke-ui: user_body")!);
    const rawPutBody = {
        id: userId,
        name: userBody.name,
        email: userBody.email,
        password: userBody.password,
        favorites: favsArray
    }
    try {
        let header = new Headers();
        header.append("Content-Type", "application/json");
        await fetch(`http://localhost:8000/users/${userId}`, {
            method: "PUT",
            headers: header,
            body: JSON.stringify(rawPutBody),
        });
        console.log("novo body",rawPutBody);
    } catch(e) {
        console.log(e);
    }
}

export async function addNewJokeToFavs({
    background,
    category,
    date,
    description,
    joke,
    title
}: IAddNewJokeToFavs) {
    const userId = localStorage.getItem("@joke-ui: user_id");
    let userBody: Users = JSON.parse(localStorage.getItem("@joke-ui: user_body")!);
    userBody.favorites.push({
        background,
        category,
        date,
        description,
        joke,
        title
    });
    try {
        let header = new Headers();
        header.append("Content-Type", "application/json");
        await fetch(`http://localhost:8000/users/${userId}`, {
            method: "PUT",
            headers: header,
            body: JSON.stringify(userBody),
        });
    } catch (e) {
        console.log(e);
    }
}