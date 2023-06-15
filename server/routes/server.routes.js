const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

/* Admin Route */
// Create a new Admin
router.post("/admin/create", adminController.create);

module.exports = router;