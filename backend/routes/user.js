const express = require('express')
const router = express.Router()
const {create, read, readById, update, remove} = require('../controllers/user')


router.get('/users', read)
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: ดึงข้อมูลผู้ใช้ทั้งหมด
 *     description: ใช้เพื่อดึงข้อมูลผู้ใช้ทั้งหมดจากฐานข้อมูล
 *     responses:
 *       '200':
 *         description: ผู้ใช้ทั้งหมดถูกดึงมาเรียบร้อย
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: รหัสผู้ใช้
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: ชื่อของผู้ใช้
 *                     example: "John Doe"
 *                   email:
 *                     type: string
 *                     description: อีเมลของผู้ใช้
 *                     example: "johndoe@example.com"
 *                   password:
 *                     type: string
 *                     description: รหัสผ่านของผู้ใช้
 *                     example: "$2b$10$gTOS7Q4YtvLRu4h.5hfnP.uF7eXZFlZXaDTwpcX/lWj.h28cUGYly"
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: เวลาที่ผู้ใช้ถูกสร้าง
 *                     example: "2025-03-25T10:00:00Z"
 *       '500':
 *         description: เกิดข้อผิดพลาดที่เซิร์ฟเวอร์
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: ข้อความข้อผิดพลาด
 *                   example: "Server Error"
 */

router.post('/user', create)
/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: สร้างผู้ใช้ใหม่
 *     description: ใช้เพื่อสร้างผู้ใช้ใหม่ในระบบ โดยมีการเข้ารหัสรหัสผ่านก่อนที่จะบันทึกลงในฐานข้อมูล
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: ชื่อของผู้ใช้ *
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 description: อีเมลของผู้ใช้ *
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 description: รหัสผ่านของผู้ใช้ *
 *                 example: "password123"
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: ผู้ใช้ถูกสร้างสำเร็จ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: สถานะการดำเนินการ
 *                   example: "CREATE SUCCESS"
 *                 message:
 *                   type: string
 *                   description: ข้อความที่บอกสถานะ
 *                   example: "User has been created"
 *                 user:
 *                   type: object
 *                   description: ข้อมูลผู้ใช้ที่ถูกสร้าง
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: รหัสผู้ใช้
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: ชื่อของผู้ใช้
 *                       example: "John Doe"
 *                     email:
 *                       type: string
 *                       description: อีเมลของผู้ใช้
 *                       example: "johndoe@example.com"
 *                     password:
 *                       type: string
 *                       description: รหัสผ่านที่ถูกเข้ารหัส
 *                       example: "$2b$10$8VIh92pzuVLY0i4RAh0vw.3SVDkgk3XuRvWfghq4wkmA60rpj.krC"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: เวลาที่ผู้ใช้ถูกสร้าง
 *                       example: "2025-03-25T10:00:00Z"
 *       '500':
 *         description: เกิดข้อผิดพลาดที่เซิร์ฟเวอร์
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: ข้อความข้อผิดพลาด
 *                   example: "Server Error"
 */

router.get('/user/:id',readById)
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: ดึงข้อมูลผู้ใช้ตาม ID
 *     description: ใช้เพื่อดึงข้อมูลของผู้ใช้ที่ตรงกับ `id`
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: รหัสของผู้ใช้ที่ต้องการดึงข้อมูล
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       '200':
 *         description: ข้อมูลของผู้ใช้ถูกดึงมาเรียบร้อย
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: รหัสผู้ใช้
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: ชื่อของผู้ใช้
 *                   example: "John Doe"
 *                 email:
 *                   type: string
 *                   description: อีเมลของผู้ใช้
 *                   example: "johndoe@example.com"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: เวลาที่ผู้ใช้ถูกสร้าง
 *                   example: "2025-03-25T10:00:00Z"
 *       '404':
 *         description: ไม่พบผู้ใช้ที่ตรงกับ ID ที่ระบุ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: ข้อความข้อผิดพลาด
 *                   example: "User with ID = 1 not found"
 *       '500':
 *         description: เกิดข้อผิดพลาดที่เซิร์ฟเวอร์
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: ข้อความข้อผิดพลาด
 *                   example: "Server Error"
 */

router.put('/user/:id',update)
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: อัปเดตข้อมูลผู้ใช้
 *     description: ใช้เพื่ออัปเดตข้อมูลของผู้ใช้ตาม `id` โดยสามารถอัปเดต `name`, `email`, และ `password` ได้
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: รหัสของผู้ใช้ที่ต้องการอัปเดต
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: ชื่อของผู้ใช้ *
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 description: อีเมลของผู้ใช้ *
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 description: รหัสผ่านใหม่ของผู้ใช้ (ถ้ามีการอัปเดต)
 *                 example: "newpassword123"
 *             required:
 *               - name
 *               - email
 *     responses:
 *       '200':
 *         description: ข้อมูลผู้ใช้ถูกอัปเดตสำเร็จ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: สถานะการดำเนินการ
 *                   example: "UPDATE"
 *                 message:
 *                   type: string
 *                   description: ข้อความที่บอกสถานะ
 *                   example: "User with ID = 1 has been updated"
 *                 user:
 *                   type: object
 *                   description: ข้อมูลผู้ใช้ที่ถูกอัปเดต
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: รหัสผู้ใช้
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: ชื่อของผู้ใช้
 *                       example: "John Doe"
 *                     email:
 *                       type: string
 *                       description: อีเมลของผู้ใช้
 *                       example: "johndoe@example.com"
 *                     password:
 *                       type: string
 *                       description: รหัสผ่านที่ถูกเข้ารหัส
 *                       example: "$2b$10$8VIh92pzuVLY0i4RAh0vw.3SVDkgk3XuRvWfghq4wkmA60rpj.krC"
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: เวลาที่ผู้ใช้ถูกสร้าง
 *                       example: "2025-03-25T10:00:00Z"
 *       '500':
 *         description: เกิดข้อผิดพลาดที่เซิร์ฟเวอร์
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: ข้อความข้อผิดพลาด
 *                   example: "Server Error"
 */

router.delete('/user/:id',remove)
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: ลบผู้ใช้
 *     description: ใช้เพื่อทำการลบผู้ใช้ตาม `id`
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: รหัสของผู้ใช้ที่ต้องการลบ
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       '200':
 *         description: ผู้ใช้ถูกลบสำเร็จ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: สถานะการดำเนินการ
 *                   example: "DELETE"
 *                 message:
 *                   type: string
 *                   description: ข้อความที่บอกสถานะ
 *                   example: "Product with ID = 1 has been deleted"
 *       '500':
 *         description: เกิดข้อผิดพลาดที่เซิร์ฟเวอร์
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: ข้อความข้อผิดพลาด
 *                   example: "Server Error"
 */


module.exports = router