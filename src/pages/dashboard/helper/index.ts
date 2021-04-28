export async function getCategories(setCategories: React.Dispatch<React.SetStateAction<string[]>>) {
    try {  
        const response = await fetch("https://api.jokes.one/jod/categories").then(res => res.json());
        const categoriesList: ICategories[] = response.contents.categories;
        const categoriesNamesArray: string[] = [];
        categoriesList.forEach(item => categoriesNamesArray.push(item.name));
        setCategories(categoriesNamesArray);
    } catch (e) {
        console.log(e);
    }
}

export async function getJodByCategory({category, setJoke}: IGetJodByCategory) {
    try {
        const response = await fetch(`https://api.jokes.one/jod?category=${category}`).then(res => res.json());
        const jokeOfTheDay: Ijoke = response.contents.jokes[0];
        setJoke(jokeOfTheDay);
    } catch (e) {
        console.log(e);
    }
}