# 🛒 Shopping tick list

#### เว็บไซต์ทดสอบ
https://shopping-tick-list.vercel.app/


ขั้นตอนการติดตั้ง
```bash
cd server
```

สร้างไฟล์ package.json
```bash
npm init
```

ติดตั้ง package
```bash
npm i express cors bcrypt jsonwebtoken uuid dotenv nodemon
```

```bash
npm i pg
```
cd server
```bash
npm run start
```
cd client
```bash
npm run start
```



DATABASE
โหลด PostgreSQL
สร้าง Databaseแล้วสร้างตารางขึ้นมา 2 ตาราง 
โดยใช้คำสั่ง
```
CREATE DATABASE todoapp;
CREATE TABLE todos(
  id VARCHAR(255) PRIMARY KEY,
  user_email VARCHAR(255),
  title VARCHAR(30),
  Progress INT,
  date VARCHAR(300)
); 

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);
```

แล้วไปตรง.env แก้ไข USERNAME,PASSWORD เป็นของตัวเอง


<p align="center">
 <h2 align="center">EDIT&DELETE</h2>
</p>

![App ScreenShot](https://github.com/leavemealone086/ShoppingTickList/blob/main/img/Shopping_tick_list1.PNG)


<p align="center">
 <h2 align="center">ADD NEW</h2>
</p>

![App ScreenShot](https://github.com/leavemealone086/ShoppingTickList/blob/main/img/Shopping_tick_list2.PNG)

<p align="center">
 <h2 align="center">Log in</h2>
</p>

![App ScreenShot](https://github.com/leavemealone086/ShoppingTickList/blob/main/img/Shopping_tick_list4.PNG)


<p align="center">
 <h2 align="center">Sign up</h2>
</p>

![App ScreenShot](https://github.com/leavemealone086/ShoppingTickList/blob/main/img/Shopping_tick_list5.PNG)


<p align="center">
 <h2 align="center">DATA BASE</h2>
</p>

![App ScreenShot](https://github.com/leavemealone086/ShoppingTickList/blob/main/img/DATA_BASE.PNG)
