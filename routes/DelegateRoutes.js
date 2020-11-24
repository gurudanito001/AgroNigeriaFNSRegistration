const express = require("express");
const router = express.Router();
const DelegateController = require("../controllers/DelegateController");

router.post("/add", DelegateController.addDelegate);
router.post("/findfirstname/:firstname", DelegateController.findFirstname);
router.post("/findlastname/:lastname", DelegateController.findLastname);
router.post("/findemail/:email", DelegateController.findEmail);
router.post("/findcompanyname/:companyname", DelegateController.findCompanyName);
router.get("/getvip", DelegateController.getVip);
router.get("/getadmitted", DelegateController.getAdmitted);

module.exports = router;
