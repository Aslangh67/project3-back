// npm packages
const router = require("express").Router();

// required files
// const authRoutes = require('./authController');
const authRoutes = require('./authController.js');
const inventoryRoutes = require('./inventory.js');
const donationRoutes = require('./donation.js');
const locationRoutes = require('./location.js');
const scheduleRoutes = require('./schedule.js');
const userRoutes = require('./userProfile.js');
const companyRoutes = require('./companyProfile.js');

// Routes
// Auth routes
router.route('/api/auth/login').post(authRoutes.logIn);
router.route('/api/auth/logout').get(authRoutes.logOut);
router.route('/api/auth/verifylogin').get(authRoutes.verifyLogin);
router.route('/api/auth/readsession').get(authRoutes.readSessions);


// User Routes
router.route('/api/user').get(userRoutes.getUsers);

router.route('/api/user/new').post(userRoutes.newUser);
router.route('/api/user/').get(userRoutes.getUsers);
router.route('/api/user/email/:email').get(userRoutes.checkUserEmail);
router.route('/api/user/:id')
  .get(userRoutes.getSingleUser)
  .put(userRoutes.editUser)
  .delete(userRoutes.deleteUser)

// Company Profile Routes
router.route('/api/company/new').post(companyRoutes.newCompany);
router.route('/api/company/').get(companyRoutes.getCompanies);
router.route('/api/company/:id')
  .get(companyRoutes.getSingleCompany)
  .put(companyRoutes.editCompany)
  .delete(companyRoutes.deleteCompany)

// Inventory Routes


router.route('/api/inventory/new').post(inventoryRoutes.newInventory);
router.route('/api/inventory/').get(inventoryRoutes.getInventory);
router.route('/api/inventory/update').put(inventoryRoutes.editInventory);
router.route('/api/inventory/update/bulk').put(inventoryRoutes.editInventory);
router.route('/api/inventory/all/:id').get(inventoryRoutes.getInventory);
router.route('/api/inventory/:id')
  .get(inventoryRoutes.getSingleInventory)
  // .put(inventoryRoutes.editInventory)
  .delete(inventoryRoutes.deleteInventory)

// Location Routes


router.route('/api/location/').get(locationRoutes.getLocations);
router.route('/api/location/new').post(locationRoutes.newLocation);
router.route('/api/location/all/:city').get(locationRoutes.getLocations);
router.route('/api/location/:id')
  .get(locationRoutes.getSingleLocation)
  .put(locationRoutes.editLocation)
  .delete(locationRoutes.deleteLocation)

// schedule Routes

router.route('/api/schedule').get(scheduleRoutes.getSchedule);

router.route('/api/schedule/new').post(scheduleRoutes.newSchedule);
router.route('/api/schedule/').get(scheduleRoutes.getSchedule);
router.route('/api/schedule/:id')
  .get(scheduleRoutes.getSingleSchedule)
  .put(scheduleRoutes.editSchedule)
  .delete(scheduleRoutes.deleteSchedule)

// donation Routes
router.route('/api/donation').get(donationRoutes.getDonations);

router.route('/api/donation/new').post(donationRoutes.newDonation);
router.route('/api/donation/').get(donationRoutes.getDonations);
router.route('/api/donation/:id')
  .get(donationRoutes.getSingleDonation)
  .put(donationRoutes.editDonation)
  .delete(donationRoutes.deleteDonation)


// company Routes
router.route('/api/company').get(companyRoutes.getCompanies);
router.route('/api/company/thisuser').get(companyRoutes.getCompanies);
router.route('/api/company/new').post(companyRoutes.newCompany);
router.route('/api/company/ein/:ein').get(companyRoutes.companyEin);
router.route('/api/company/:id')
  .get(companyRoutes.getSingleCompany)
  .put(companyRoutes.editCompany)
  .delete(companyRoutes.deleteCompany)




module.exports = router