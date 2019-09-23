module.exports = function (app) {

  // Code supplied by Gary for dealing with query strings

  app.use(function(req, res, next){
    Object.assign(res.locals,{
      postData: (req.body ? req.body : false)
    });

    Object.assign(res.locals,{
      getData: (req.query ? req.query : false)
    });

    next();
  });

  // CONDITION

  app.post('/3/condition', function (req, res) {

    var index = req.session.data['index']
    var count = req.session.data['count']

    // let otherconditions = req.session.data['other-conditions']

    if (index == 3) {
      res.render('3/condition', {'index': 3})
    } else if (index == 2) {
      res.render('3/condition', {'index': 2})
    } else {
      res.render('3/condition', {'index': 1})
    }

  })

  // OTHER CONDITIONS

  app.post('/3/other-conditions', function (req, res) {

    var index = req.session.data['index']
    var count = req.session.data['count']

    // let otherconditions = req.session.data['other-conditions']

    if (count == 3) {
      res.render('3/other-conditions', {'count': 3})
    } else if (count == 2) {
      res.render('3/other-conditions', {'count': 2})
    } else {
      res.render('3/other-conditions', {'count': 1})
    }

  })

  // END OF VERSION A ROUTES

}