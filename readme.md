Run with docker: 


I ADDED A BIND MOUNT WHICH IS OPTIONAL TO AUTO-UPDATE ON DEVELOPMENT

```
docker run -p 3001:3001 -it --rm --name files-app-container -v "$(pwd)/src":/app/src files-app
```