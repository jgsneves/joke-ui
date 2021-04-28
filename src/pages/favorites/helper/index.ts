
export async function getAllFavJokes() {
    const sessionUserId = localStorage.getItem("@joke-ui: user_id");
    try {
        const response: Users = await fetch(`http://localhost:8000/users/${sessionUserId}`).then(res => res.json());
        localStorage.setItem("@joke-ui: favs_jokes", JSON.stringify(response.favorites));
        return response.favorites;
    } catch(e) {
    }
}

export async function removeFavJoke(jokeId: string) {
    const favsJokes = localStorage.getItem("@joke-ui: favs_jokes");
    const userId = localStorage.getItem("@joke-ui: user_id");
    const parsedFavsJokes = JSON.parse(favsJokes!);
    const indexOfJoke = parsedFavsJokes.indexOf((item: Ijoke) => item.joke.id === jokeId);
    const newArray = parsedFavsJokes.splice(indexOfJoke, 1);
    const userBody: Users = JSON.parse(localStorage.getItem("@joke-ui: user_body")!);
    const rawPutBody = {
        id: userId,
        name: userBody.name,
        email: userBody.email,
        password: userBody.password,
        favorites: newArray
    }
    try {
        let header = new Headers();
        header.append("Content-Type", "application/json");
        await fetch(`http://localhost:8000/users/${userId}`, {
            method: "PUT",
            headers: header,
            body: JSON.stringify(rawPutBody),
        });
    } catch(e) {
        console.log(e);
    }
}