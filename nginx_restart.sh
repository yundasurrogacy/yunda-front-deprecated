docker rm -f dev-nginx
docker run --rm -d \
--name dev-nginx \
-p 80:80 \
-v $(pwd)/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro \
nginx

#docker rm -f dev-nginx
#docker run --rm -d \
#--name dev-nginx \
#-p 80:80 \
#-v <admin_backend_dir>/dist:/usr/share/nginx/html/admin \
#-v $(pwd)/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro \
#nginx
