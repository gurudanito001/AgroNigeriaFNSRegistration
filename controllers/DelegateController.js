const Delegate = require("../services/DelegateService");

//const validateRegisterInput = require("../validation/register");
//const validateLoginInput = require("../validation/login");

function DelegateController() {

  const addDelegate = function(req, res) {
    Delegate.add(req.body).then(data => res.json(data));
  };
  const findFirstname = function(req, res) {
    Delegate.findFirstname(req.params.firstname).then(data => res.json(data));
  };
  const findLastname = function(req, res) {
    Delegate.findLastname(req.params.lastname).then(data => res.json(data));
  };
  const findEmail = function(req, res) {
    Delegate.findEmail(req.params.email).then(data => res.json(data));
  };
  const findCompanyName = function(req, res) {
    Delegate.findCompanyName(req.params.companyname).then(data => res.json(data));
  };
  const getVip = function(req, res) {
    Delegate.getVip().then(data => res.json(data));
  };
  const getAdmitted = function(req, res) {
    Delegate.getAdmitted().then(data => res.json(data));
  };
  const makeVip = function(req, res) {
    Delegate.makeVip(req.params.id).then(data => res.json(data));
  };
  const makeDelegate = function(req, res) {
    Delegate.makeDelegate(req.params.id).then(data => res.json(data));
  };
  const admit = function(req, res) {
    Delegate.admit(req.params.id).then(data => res.json(data));
  };
  const exclude = function(req, res) {
    Delegate.exclude(req.params.id).then(data => res.json(data));
  };

  return {
    addDelegate: addDelegate,
    findFirstname: findFirstname,
    findLastname: findLastname,
    findEmail: findEmail,
    findCompanyName: findCompanyName,
    getVip: getVip,
    getAdmitted: getAdmitted,
    makeVip: makeVip,
    makeDelegate: makeDelegate,
    admit: admit,
    exclude: exclude
  };
}

module.exports = DelegateController();
