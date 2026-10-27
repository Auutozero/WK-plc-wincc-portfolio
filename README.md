# 无空 PLC / WinCC 技术实践作品集

本仓库保存采用 Quartz 构建的中英文作品集网站。项目由本人从空白工程逐步搭建，覆盖PLC程序、WinCC画面与脚本、配套表格及调试记录。站点内容中的项目实践、技术学习资料及AI辅助文档整理分别说明。

- [中文作品集内容](content/index.md)
- [English portfolio](content/en/index.md)
- [粉料输送案例](content/zh/powder.md)
- [Excel资料](content/zh/tables.md)
- [工程构建归属与来源](content/zh/sources.md)

网站左侧提供目录和搜索，右侧提供反向链接、局部关系图及文章目录。知识点已拆为独立页面。

## 本地预览

环境要求：Node.js 22或更高，npm 10.9.2或更高。

```text
npm ci
npx quartz build --serve
```

在浏览器打开命令显示的本地地址。

## 发布到 GitHub Pages

将本仓库推送到自己的公开GitHub仓库。打开仓库Settings → Pages，在Source中选择GitHub Actions，再运行“Publish portfolio to GitHub Pages”工作流。工作流会按实际仓库自动设置网址并发布。

提交content、quartz、配置、依赖锁文件、scripts及.github工作流等源文件；node_modules与public为本地生成内容，不提交。项目中的3份XLSX位于content/tables，中英文页面共用这些文件。

Quartz网站引擎为第三方开源软件，依据LICENSE.txt中的MIT条款使用。作品集内容、项目材料和第三方软件界面按content/zh/sources.md的来源说明分别记录。
