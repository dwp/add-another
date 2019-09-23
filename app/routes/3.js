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

  // ENTER CONDITION DETAILS

  app.post('/3/condition', function (req, res) {

    var count = parseInt(req.session.data['count'], 10)
    var conditionID = parseInt(req.session.data['conditionID'], 10)

    if (count) {
      res.render('3/condition', {'count': (count+1), 'conditionID': (conditionID+1)})
    } else {
      res.render('error')
    }

  })

  // OTHER CONDITIONS

  app.post('/3/other-conditions', function (req, res) {

    var count = parseInt(req.session.data['count'], 10)
    var conditionID = parseInt(req.session.data['conditionID'], 10)

    if (count) {
      res.render('3/other-conditions', {'count': (count), 'conditionID': (conditionID)})
    } else {
      res.render('error')
    }

  })



  // END OF VERSION A ROUTES

}