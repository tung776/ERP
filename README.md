# ERP

> Cat Tuong Enterprise Resource Planning

## Build Setup

```bash
#1. Tải ứng dụng từ github bằng:
git clone https://github.com/tung776/EasyERP_open_source.git

# install dependencies
$ npm install

#2. Cài đặt regis server
#2.1 Nếu cài redis-server trên môi trường window thì tải tại địa chỉ:
https://github.com/dmajkic/redis/downloads
#2.2nếu cài trên linux thì làm theo hướng dẫn trên trang chủ:
https://redislabs.com/

#3 Cài bower:
npm install bower -g

#4 cài đặt mongod

#5 Giải nén file dum.rar và file .bat #6 chạy lệnh:
npm run dev

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# Cài đặt pm2
npm install -g pm2
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
