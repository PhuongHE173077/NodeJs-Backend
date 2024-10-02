const getHomePage = (req, res) => {
    res.send('hello the world')
}

const render = (req, res) => {
    res.render('sample.ejs')
}
module.exports = {
    getHomePage,
    render
}