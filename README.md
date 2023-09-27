# 🛒 Shopping tick list         [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)
โปรเจคที่ผมทำเป็นwad application todo list เป็นแอพที่เอาไว้เขียนรายการของที่ต้องซื้อและNavbatเอาไว้เลื่อนเลือกระดับความสำคัญของของที่จะซื้อได้ สามารถลบและแก้ไข้รายการได้ และมีหน้า Sign up, Log in เอาไว้สมัครสมาชิกแล้วก็ล๊อคอินได้ โอสที่ใช้ Deploy ใช้เป็น vercel.com

#### เว็บไซต์ทดสอบ
https://shopping-tick-list.vercel.app/


#### ขั้นตอนการติดตั้ง

### server
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
run
```bash
npm run start
```

<p/>

### client

```bash
cd client
```
สร้างไฟล์ package.json
```bash
npm init
```
ติดตั้ง package

```bash
npm i react-cookie
```
```bash
npm i particles-bg
```

run
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

แล้วไปตรง.env แก้ไข USERNAME, PASSWORD, HOST, DBPORT, REACT_APP_SERVERURL เป็นของตัวเอง


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
