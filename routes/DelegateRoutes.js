const express = require("express");
const router = express.Router();
const DelegateController = require("../controllers/DelegateController");

router.post("/add", DelegateController.addDelegate);
router.delete("/delete/:id", DelegateController.deleteDelegate);
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

router.post("/admittedFirstname/:firstname", DelegateController.findAdmittedFirstname);
router.post("/admittedLastname/:lastname", DelegateController.findAdmittedLastname);
router.post("/guestFirstname/:firstname", DelegateController.findGuestFirstname);
router.post("/guestLastname/:lastname", DelegateController.findGuestLastname);


module.exports = router;
