

module.exports = function(app, db, passport){
  //Reading Data
  app.get('/menu',function(req, res){
    // if (req.user.role){
        let sql = `SELECT * FROM menu`
        db.query(sql, (err, results) => {
          if (err) throw err;
          console.log("Let's Read!");
          res.render('wd', {wd: results});
        });
      // }
      // cook code
  });

  app.post('/wd', function(req, res){
  let item = req.body;
  // let item = data.item;
  // let price = data.price;
  // let modify = data.modify
  console.log(item)
  let sql = `INSERT INTO menu SET ?`
  db.query(sql, item, (err, result) => {
    if (err) throw err;
  res.json(result);
});
});

app.delete('/:id',function(req, res){
  console.log("Let's DESTROY!")
  // console.log(req.params.id)
  let sql = `DELETE FROM menu WHERE id = ${req.params.id};`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    // console.log(result.affectedRows + " record(s) updated");
    res.json(result)
  });
});

app.get('/tables',function(req, res){
    let sql = 'SELECT * FROM orders;';
    db.query(sql, (err, results) => {
      if (err) throw err;
      console.log("Let's Read!");
      res.render('tables', {tables: results});
    });
});

app.get('/cook',function(req, res){
    let sql = 'SELECT * FROM menu;';
    db.query(sql, (err, results) => {
      if (err) throw err;
      console.log("Let's Read!");
      res.render('cook', {wd: results});
    });
});

app.post('/tables', function(req, res){
    let item = req.body;
    console.log(item)
    let sql = 'INSERT INTO orders SET ?'
    db.query(sql, item, (err, result) => {
      if (err) throw err;
    res.json(result);
  });
});
app.get('/signup', function(req, res) {
  res.render('signup');
});

app.post('/signup', passport.authenticate('local-signup',  {
   successRedirect: '/',
   failureRedirect: '/signup',
 }
 ));


app.get('/', function(req,res){
  res.render('login');
});


app.post('/login', passport.authenticate('local-login',  {
   successRedirect: '/menu',
   failureRedirect: '/login',
 }
 ));

 exports.signup = function(req,res) {
   res.render('signup');
 }

 exports.login = function(req,res) {
   res.render('login');
 }

 exports.logout = function(req,res) {
   req.session.destroy(function(err){
     res.redirect('/');
   });
 }
};
