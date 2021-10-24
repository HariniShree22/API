const {
  create,
  getBrand,
} = require("./user.service");

module.exports={
  createBrand: (req, res) => {
    const body = req.body;
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
  },
  getBrand: (req, res) => {
      getBrand((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    }
  };
  