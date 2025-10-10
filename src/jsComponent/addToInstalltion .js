
const getStoredProduc = () => {

    const storedDataSTR = localStorage.getItem("Install Now")
    if (storedDataSTR) {
        const storedProducts = JSON.parse(storedDataSTR);
        return (storedProducts);
    } else {
        return [];
    }
};

const addToProductDB = (id) => {
    const storedData = getStoredProduc();
    if (storedData.includes(id)) {

        alert("already installation")
    } else {
        storedData.push(id);
        const data = JSON.stringify(storedData);
        localStorage.setItem("Install Now", data)
    }
};

export { addToProductDB, getStoredProduc };