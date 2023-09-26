# 🛒 Shopping tick list

ขั้นตอนการติดตั้ง

cd server

สร้างไฟล์ package.json
npm init

ติดตั้ง package
npm i express cors bcrypt jsonwebtoken uuid dotenv nodemon

npm i pg


cd server
npm run start

cd client
npm run start



DATABASE
โหลด PostgreSQL
สร้าง Databaseแล้วสร้างตารางขึ้นมา 2 ตาราง 
โดยใช้คำสั่ง
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

แล้วไปตรง.env แก้ไข USERNAME,PASSWORD เป็นของตัวเอง

## EDIT&DELETE
![App ScreenShot](https://github.com/leavemealone086/ShoppingTickList/blob/main/img/Shopping_tick_list1.PNG)


## ADD NEW
![App ScreenShot](https://github.com/leavemealone086/ShoppingTickList/blob/main/img/Shopping_tick_list2.PNG)


## Log in
![App ScreenShot](https://github.com/leavemealone086/ShoppingTickList/blob/main/img/Shopping_tick_list4.PNG)


## Sign up
![App ScreenShot](https://github.com/leavemealone086/ShoppingTickList/blob/main/img/Shopping_tick_list5.PNG)


## DATA BASE
![App ScreenShot](https://github.com/leavemealone086/ShoppingTickList/blob/main/img/DATA_BASE.PNG)
