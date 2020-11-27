const express = require("express");
const router = express.Router();
const DelegateController = require("../controllers/DelegateController");

router.post("/add", DelegateController.addDelegate);
router.post("/firstname/:firstname", DelegateController.findFirstname);
router.post("/lastname/:lastname", DelegateController.findLastname);
router.post("/email/:email", DelegateController.findEmail);
router.post("/companyname/:companyname", DelegateController.findCompanyName);
router.get("/vip", DelegateController.getVip);
router.get("/admitted", DelegateController.getAdmitted);

router.post("/makevip/:id", DelegateController.makeVip);
router.post("/makedelegate/:id", DelegateController.makeDelegate);
router.post("/admit/:id", DelegateController.admit);
router.post("/exclude/:id", DelegateController.exclude);

module.exports = router;
