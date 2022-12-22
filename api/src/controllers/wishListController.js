const wishList = [];


export const getWhishList = (req, res) => {

    res.send(wishList);

}


export const setNewWish = (req, res) => {

    const text  = req.body.text;

    wishList.push(text);

    console.log(wishList);

    res.send(wishList);
    
}


export const removeWish = (req, res) => {

    const { index } = req.params;

    wishList.splice(index, 1);

    res.send(wishList);

}


export const clearWishtList = (req, res) => {

    wishList.splice(0, wishList.length);

    res.send([]);
    
}