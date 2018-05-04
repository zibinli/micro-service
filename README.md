# 微服务

这是一个基于Koa 2的微服务框架。它包含了docker编排配置和jenkins自动构建配置。

# 测试
基于jest

将包含测试代码的文件命名带上`.test.js`后缀。则`jest`会自动检测并运行测试。

# 配置
基于这个模板创建好微服务后,修改Jenkinsfile里的name以便更新docker镜像的名称。

# 路由与文件树结构

建议路由与文件树对应。例如
- `/status`路由到`src/status.js`处理函数
- `/user/info`端点由`src/user/info.js`里的函数处理

子路由对应文件树下的`route.js`文件。例如
- `/user/`下的路由由`src/user/route.js`模块定义

# 基于此模板新建项目流程
假如新的项目名为anyway

1. 复制git仓库在新的文件夹
```
git clone git@github.com:GuangZhouShanyouGame/micro-service.git anyway
```

2. 将旧的远端名origin修改为upstream
```
git remote rename origin upstream
```

3. 增加新的origin远端为github的新仓库
```
git remote add origin <new_url>
```

4. 推送分支
```
git push origin -u master
```
