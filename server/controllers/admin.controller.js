const adminService = require('../services/admin.service');


// Create and Save Admin
exports.create = (req, res, next) => {
    var model = {
        email: req.body.email,
        password: req.body.password,
    };

    adminService.CreateAdmin(model, (error, results) => {
        if (error) {
            return next(error);
        } else {
            return res.status(200).send({
                status: true,
                data: results,
            });
        }
    })
}