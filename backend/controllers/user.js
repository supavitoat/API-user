const prisma = require('../prisma/prisma')
const bcrypt = require('bcrypt');

exports.read = async(req,res)=>{
    try{
        const readUser = await prisma.user.findMany()
        res.send(readUser)
    } catch(err){
        console.log(err)
        res.send('Server Error').status(500)
    }
}


exports.create = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // เข้ารหัสรหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10);  // 10 คือจำนวนรอบการเข้ารหัส

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,  // ใช้รหัสผ่านที่เข้ารหัสแล้ว
      }
    });

    res.status(200).json({
      status: "CREATE SUCCESS",
      message: `User has been created`,
      user: newUser  // เปลี่ยนชื่อจาก product เป็น user
    });

    console.log(name);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
};


exports.readById = async (req, res) => {
    try {
      const { id } = req.params; // รับ id จาก params
  
      const user = await prisma.user.findUnique({
        where: {
          id: Number(id), // ใช้ id ในการค้นหาผู้ใช้
        }
      });
  
      if (!user) {
        return res.status(404).json({ message: `User with ID = ${id} not found` }); // ถ้าไม่พบผู้ใช้
      }
  
      res.status(200).json(user); // ส่งข้อมูลผู้ใช้ที่พบ
      console.log(id);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  


exports.update = async (req, res) => {
  try {
    const { id } = req.params; 
    const { name, email, password } = req.body; // รับข้อมูลจาก body

    // ถ้ามีการส่งรหัสผ่านใหม่, ให้เข้ารหัสรหัสผ่าน
    let hashedPassword = undefined;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัสรหัสผ่าน
    }

    // อัปเดตข้อมูลผู้ใช้
    const newUser = await prisma.user.update({
      where: {
        id: Number(id) 
      },
      data: {
        name: name,
        email: email,
        password: hashedPassword ? hashedPassword : undefined // ถ้ามีการส่งรหัสผ่านใหม่, ให้ใช้รหัสที่เข้ารหัส
      }
    });

    res.status(200).json({
      status: "UPDATE",
      message: `User with ID = ${id} has been updated`,
      user: newUser 
    });

    console.log(id);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server Error' });
  }
};



exports.remove = async (req,res)=>{
    try{
        const {id} = req.params
        const deleteProduct = await prisma.user.delete({
            where: {
                id: Number(id)
            }
        })
        res.status(200).json({
            status: "DELETE",
            message: `User with ID = ${id} has been deleted`,
          });
        console.log(id)
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
}