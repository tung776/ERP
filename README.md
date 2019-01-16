# ERP

> Cat Tuong Enterprise Resource Planning

## Build Setup

```bash
#1. Tải ứng dụng từ github bằng:
git clone https://github.com/tung776/ERP.git

# install dependencies
$ npm install

#2. Cài đặt regis server
#2.1 Nếu cài redis-server trên môi trường window thì tải tại địa chỉ:
[redis](https://github.com/dmajkic/redis/downloads)
#2.2nếu cài trên linux thì làm theo hướng dẫn trên trang chủ:
[redis] (https://redislabs.com/)

#3 Cài bower:
npm install bower -g

#4 cài đặt mongod

#5 Giải nén file server/data/dum.rar và chạy các file .bat

#6 # Cài đặt pm2
npm install -g pm2

#7 chạy lệnh:
npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

```
