---
title: 微信小程序用户使用指引
sidebarDepth: 3
---

:::tip 本文档将持续更新
最后更新时间：2021/10/26
:::

:::tip
这是微信小程序文档，要查看Web文档请[点击](./guide.md)
:::

## 平台特性

1. 一站式的作业收集功能，同时提高提交者和收集者的效率，具体表现在：
   1. 直观可视所有作业及其提交情况，避免漏交
   2. 对于提交者，无需费心重命名文件，一键提交，系统自动重命名
   3. 允许自行删除之前提交的文件，作业截止前无需联系作业发布者
   4. 对于发布者，无需一个个整理作业文件，手动修改文件命名，一键发布，一键下载
   5. 新作业发布后，自动邮件通知所有发布对象
2. 完善的权限管理系统，允许班级内部成员自由分配职务
3. 成绩查询，无需再登录教务网站查询
4. 课表功能，智能抓取教务处课表数据并生成每周课表，还能自动整合物理实验和选修课课程数据
5. 健康申报，让每日体温三报更加便捷
6. 查询图书馆信息，借书、续借一站式搞定
7. （开发中）开放平台，用我们的API构建你自己的酷炫应用
8. （开发中）资源共享，允许用户互助共享学习文件
9. （开发中）更多教务查询功能
10. （未完待续....）

## 快速入门

### 亦习校园能做什么？

#### 文件（电子档作业）的统一收集

亦习校园最核心的功能就是经过长时间打磨优化的文件收集系统。你可以在如下场景应用：

1. 收集青年大学习截图
2. 收集湖工大特色：课程三问、文献阅读、思维导图
3. 收集课程设计、实验报告
4. 收集电子档作业
5. ...

强烈建议您学习使用[自动更名](./wechat.md#自动更名)，这将极大提高作业提交者和作业收集者的效率！

::: tip

关于作业功能的详细功能说明，请参阅[作业功能](./wechat.md#作业功能)

:::

#### 教务信息一站式查询

亦习校园集成了湖北工业大学教务查询功能，目前支持课表、成绩查询、图书馆续借及查询、空教室查询。

其中，课表支持免登录教务系统账户查询，支持查询其他已加入亦习校园的班级的课表。

亦习校园还支持自动导入物理实验、选修课课程数据。

#### 灵活的权限分配

亦习校园设计了非常灵活的权限控制系统。简单来说，班级负责人拥有本班最高权限，只有班级负责人可以给其他人分配权限。

什么时候要给其他人分配权限呢？

1. 班级内有班委分工，每个人负责不同的收集工作，此时可以给每个班委分配“学习委员”权限，允许他们自行发布作业
2. 班级负责人懒得发布、收集作业，此时可以给负责的同学分配“学习委员”权限，让TA来进行作业发布。

::: tip

关于权限功能的分配说明，请参阅[分配权限](./wechat.md#分配权限)

:::

#### 健康申报

国内新冠疫情防控不可放松，我们对有需求进行学生每日体温三报的学院和学校开放此功能，学生可以便捷填报体温，教师可以一键导出数据。

### 如何使用亦习校园？

#### 登录/注册

对于目前已支持的学校学生（湖北工业大学、湖北工业大学工程技术学院），请扫码或微信搜索“**亦习校园**”，点击“**使用教务系统账号登录**”，输入您的教务系统用户名密码即可。

:::tip 隐私提示
亦习校园不会将您的用户名密码存储至云端，我们仅会将用户名密码存储于您的本地，方便后续教务查询功能免登录使用
:::

![扫码_搜索联合传播样式-标准色版.png](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/08/15/26f66a8312fa6.png)

![1635251153733.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/b3bcc427e32ab.jpg =231x500)

![1635251135403.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/12e5683bda015.jpg =231x500)

若您没有使用过亦习校园，将会进入简单的信息确认和注册流程，请核对我们给出的信息是否正确，并输入后续可用于登录亦习校园的密码。

![1635251242979.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/3e5a70ef0aaaf.jpg =231x500)

:::warning 微信绑定
第一次登录或注册成功后，亦习校园账号与微信一对一绑定，该微信不能再登录其他亦习校园账号，该亦习校园账号也不能在其他微信登录。若有疑问，请联系亦习校园客服QQ：yixicampus
:::

#### 开始使用

完成登录流程后，您就可以体验亦习校园的绝大多数功能。

要使用作业功能，您首先需要绑定邮箱(用于辅助发送作业提醒和反馈通知)：

![1635251605974.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/14a8803f5996f.jpg =231x500)

若作业页面出现上方弹窗，请班长或负责作业收集的班委联系我们（QQ:yixicampus）获取班级激活码。

![1635251798177.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/39acd97880bc3.jpg =231x500)

## 作业功能

### 发布作业

若您已被分配发布作业权限（若没有，请联系班级负责人参考[分配权限](./wechat.md#分配权限)分配权限），即可在作业页右下方看见悬浮+号：

![1635252143860.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/9b03485cacc78.jpg =231x500)

点击后，您可以选择发布作业的类型。

![1635252226776.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/cb53c61778278.jpg =231x500)

#### 发布青年大学习

如表单所示，发布者只需填写青年大学习期数、截止日期、自动更名格式。青年大学习默认开启自动更名功能。要了解自动更名功能使用方法，请[点击](./wechat.md#自动更名)

![1635252353268.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/38bab43a0e46a.jpg =231x500)

#### 发布自定义作业

表单相关参数解释：

1、	标题： 描述本次作业的名称，例：Oracle数据库学科三问；

2、	截止日期： 规定作业截止时间，需要主义的是截止时间过后同学依然可以正常提交，除非发布作业者手动关闭该项作业的提交，后面会提及；

3、	描述：对于作业提交需要交代清楚的其他事情；

4、	自动更名：选中后，将开启自动更名功能。对自动更名的详细介绍，请[点击](./wechat.md#自动更名)；

5、 自动更名格式：该项在自动更名功能**开启**时可设置。这里指定文件自动更名规则，详细介绍请[点击](./wechat.md#自动更名)；

6、 文件提交格式：该项在自动更名功能**未开启**时可设置。若不使用自动更名功能，你可以在这里描述所需的文件提交格式，通过微信小程序提交时将强制提交者自行更名。

5、	允许多文件上传：当关闭时，每个人只能提交一个文件，若要提交新的文件，需先删除之前提交的文件；当开启则对于用户提交文件数则没有限制。开启自动更名，将强制不允许多文件上传；

6、	标签：通过标签能够让作业更好分类，建议输入作业对应的学科名。

![1635252597098.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/3645139f78f7b.jpg =231x500)

#### 自动更名

开启自动命名后，将按照作业发布者编辑的格式统一命名大家提交的文件，我们给予了三个参数供大家使用（学号`<sid>`、班级`<class>`、姓名`<name>`），使用这三者会自动替换每一位同学各自的学号、班级、姓名，大家可以随意组合，以达到规定格式化的目的。你可以直接点击自动更名格式框上方的`学号`、`班级`、`姓名`快速输入参数。

**例：**

自动更名格式为

```
<sid>_<name>_Oracle数据库学科三问
```

则最终学号为1910300109的张谦煜同学提交文件名为

```
1910300109_张谦煜_Oracle数据库学科三问
```

即`<sid>`和`<name>`会自动获取每个同学的信息进行更换。

### 作业下载

:::tip
该功能仅作业发布者和有作业下载权限者可见
:::

在作业详情页点击“获取下载链接”即可下载作业所有文件的压缩包。

![1635259011985.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/cb826ab7700ed.jpg =231x500)

受微信小程序限制，无法直接在微信小程序直接下载文件，请复制链接到浏览器下载。

后台压缩需要时间，实际压缩时间受文件大小、当时压缩队列闲忙程度限制，**请等待1-5分钟后复制链接到浏览器尝试下载**。

若链接显示该页面：

![](https://errorpage.b0.upaiyun.com/shadowfish-404)

则文件仍在压缩中，请稍后**复制链接重试**，**请不要直接刷新浏览器**。

我们仍在优化作业下载时的用户体验，敬请期待。

### 提交作业

展示在作业列表中，且没有被关闭的作业均可提交。对于未开启自动更名的文件，会在提交时强制提示按要求手动更名。

:::tip
“已经截止”的作业依然可以提交。因此，为避免出现误会，建议作业发布者利用[关闭作业](./wechat.md#关闭作业)功能及时标记停止收集的作业。
:::

### 关闭作业

已超过截止时间的作业允许被“关闭”。关闭后，作业将停止收集，所有人都不能再提交文件。建议在确认作业不再接受提交时及时关闭作业，避免出现发布者已经不再收集作业，但同学仍在提交的误会。

:::tip
该操作不可逆
:::

## 班级管理

### 分配权限

:::tip 权限提示
该功能限班级负责人使用
:::

我的-我的班级-左滑成员即可看到成员权限配置入口。

![1635253854034.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/1a4763d56760b.jpg =231x500)

在权限配置页，你可以细粒度设置每个人的权限。这里推荐直接点击推荐权限一键配置。

![1635253927016.jpg](https://ufilecdn.shadowfish0.top/ShadowImageHost/2021/10/26/55b7608d93433.jpg =231x500)

