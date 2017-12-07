function checkLogInhandler(req, res, next) {
    let login = req.session.isLogin;
    if (login) {
        next()
    } else {
        res.render("login")
    }
}



module.exports = checkLogInhandler;