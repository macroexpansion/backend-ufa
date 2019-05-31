const express = require('express')
const router = express.Router()
const auth = require('./middlewares/auth')
const multer = require('multer')

const rootController = require('./controllers/rootController')

// router.get('/', rootController.home)
// router.post('/platform027', rootController.addAuthor)
// router.get('/ping', rootController.home)
// router.get('/errorExample', rootController.fakeError)

const teacher = require('./controllers/teacherController')
router.get('/teachers', teacher.getTeachers)
router.get('/teacher/:id', teacher.getOneTeacher)
router.post('/teacher/:id', teacher.editProfile)
router.patch('/teacher/:id', teacher.addField)
router.delete('/teacher/:id', teacher.deleteTeacher)

const department = require('./controllers/departmentController')
router.get('/departments', department.getAllDepartments)
router.post('/departments', department.addDepartment)
router.patch('/departments/:id', department.editDepartment)
router.delete('/departments/:id', department.deleteDepartment)

const fields = require('./controllers/fieldController')
router.get('/fields', fields.getFields)
router.post('/fields', fields.addFields)
router.patch('/fields/:id', fields.editFields)
router.delete('/fields/:id', fields.deleteField)

const user = require('./controllers/userController')
router.post('/user/changepassword', user.changePassword)

router.get('/users', user.getAllUsers)
router.post('/user/login', user.login)

router.post('/manage/user/add', auth.isAdmin, user.addUser)
router.delete('/manage/user/delete/:id', auth.isAdmin, user.deleteUser)
router.post('/manage/user/edit/:id', auth.isAdmin, user.editUser)


module.exports = router
