```aiignore
docker run --rm -d \
--name dev-nginx \
-p 80:80 \
-v $(pwd)/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro \
nginx
```

```aiignore
### ifadmin backend proxied
docker run --rm -d \
--name dev-nginx \
-p 80:80 \
-v <admin_backend_dir>/dist:/usr/share/nginx/html/admin \
-v $(pwd)/nginx/default.conf:/etc/nginx/conf.d/default.conf:ro \
nginx
```