const indexCtrl = {};

indexCtrl.renderIndex = (req,res) => {
    res.render('index');
};

indexCtrl.renderAbout = (req,res) => {
    res.render('about');
};

indexCtrl.renderFormat = (req,res) => {
    res.render('format');
};

module.exports = indexCtrl;