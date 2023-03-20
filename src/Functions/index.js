// [] => network => [arr]
export const getResponseFetch = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.error('Сталась помилка при запиті на сервер.', response.status);
            return false;
        }

        return await response.json();
    } catch (error) {
        console.error('Сталась помилка при запиті на сервер: ' + error);
        return false;
    }
}

// (async () => {
//     const response = await getResponseFetch(url);
//     console.log(response);
// })();

// Select filter value
export const selectFilter = (arr, value) => {
    const filtered = arr.filter(elem => {
        if (value === '') {
            return elem;
        }

        return elem.house === value;
    })

    return filtered;
}

// Array Filter: [1, 2, 3, 4] => [1]
export const filteredArry = (arr, value) => {
    const filter = arr.filter(elem => {
        return elem.name.toLowerCase().includes(value.toLowerCase())
    })

    return filter;
}

// True and False: id => [1, 2, 3] === true
export const uniqTrue = (id, arr) => {
    let result = arr.some(function (elem) {
        return elem.id === id
    });

    return result
}

// Add a card to the page: push(elem) in arry