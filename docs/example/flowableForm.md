# 如何使用流程表单

## 创建表单

进入首页，点击我的表单，创建表单，此处选择流程表单类型

![image.png](https://oss.tduckcloud.com/1660373981501-0159785b-7cf2-4604-8709-985d141d3237.png)

## 编辑表单

根据实际流程业务，从左侧拖入组件进行配表单；此处以请假申请流程为演示，其中表单组件使用了函数计算组件，使用方法请参考：[函数计算的进阶用法](./functionCalculation)，图中工作交接人为“员工选择”组件，后续审批人需要使用

![image.png](https://oss.tduckcloud.com/1660374111251-68d01fa4-4810-4ebd-bcf8-0bc5fe719682.png)

## 外观设置

为了表单美观，选择了一个外观主题；外观主题中的头图、氛围颜色可在主题模板支持自定义配置，详见：使用说明-主题配置，此处还能显示题目序号、描述等

![image.png](https://oss.tduckcloud.com/1660374323628-547a0fed-a77c-4c9a-989c-7e82bdeffc87.png)

## 审批流程设置

点击头部彩蛋的“流程”，首先创建一个条件：如果请假天数>3天则需要部门主管审批，[如何设置部门主管](./departmentHead)，如果小于等于3天，则为表单中选择的工作交接人进行审批。

![image.png](https://oss.tduckcloud.com/1660374598354-0fcef32c-ee4a-4bbd-8e0d-c43a6ec8056e.png)

## 发布表单

![image.png](https://oss.tduckcloud.com/1660374639154-3c176e45-6d75-4ebf-bf43-2b280ccf1e47.png)

## 填写表单

![Kapture 2022-08-13 at 15.12.29.gif](https://oss.tduckcloud.com/1660374804107-2eb9e856-a681-44e8-b298-8d00a6e93994.gif)

## 查看审批流

使用test账号提交申请后，在“我的流程”菜单查看已经进入审批的表单，此处提交的请假日期为5天，满足>3天的条件，所以下一级审核人为test所在部门的主管：mage

![Kapture 2022-08-13 at 15.18.24.gif](https://oss.tduckcloud.com/1660375141586-fabbcb9f-08dc-451e-975f-cf7a26f0a153.gif)

## 审批人进行审批

登录审批人账号后，点击待办任务，即可查看当前流程，进行操作后流程完成

![Kapture 2022-08-13 at 15.23.55.gif](https://oss.tduckcloud.com/1660375489073-6f4e3604-5bcc-4e34-aede-5e13f9e8d373.gif)
