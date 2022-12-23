const wishList = [];


export const getWhishList = (req, res) => {

    res.send(wishList);

}


export const setNewWish = (req, res) => {

    const text = req.body.text;

    wishList.push(text);

    res.status(201).send(text);
    
}


export const removeWish = (req, res) => {

    const { index } = req.params;

    wishList.splice(index, 1);

    res.sendStatus(200);

}


export const clearWishtList = (req, res) => {

    wishList.splice(0, wishList.length);

    res.sendStatus(200);
    
}