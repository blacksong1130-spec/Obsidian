# Outlook 报错指南：UserHasNoMailboxAndNoLicenseAssignedException

## 问题表现
当尝试登录微软网页版邮箱（如 outlook.office.com）时，页面崩溃并显示 "Something went wrong."
错误代码详细信息中包含核心报错句：
`err: Microsoft.Exchange.Clients.Owa2.Server.Core.OwaUserHasNoMailboxAndNoLicenseAssignedException`
`emsg: UserHasNoMailboxAndNoLicenseAssignedError`

## 根本原因
这个错误代码的意思非常明确：**“该用户没有分配邮箱，也没有分配对应的许可证 (License)”**。

通常发生在以下几种情况：
1. **账号切换错误 (最常见)**：你可能在同一个浏览器里登录了多个微软账号。你尝试访问 Outlook 时，浏览器**自动读取了你的另一个微软账号**（比如一个没有开通 Exchange 邮箱服务的纯个人账号，或者是另一个没有分配邮箱的机构账号），导致系统找不到对应的收件箱。
2. **学校/机构订阅过期**：如果你是用 RCA 的校友/学生账号登录，这可能意味着学校 IT 部门收回了你的 Exchange Online 许可证（通常发生在毕业后的一段时间，或者账号正在进行系统迁移）。
3. **域名路由问题**：你正在尝试用一个只绑定了 Office 办公软件（如 Word, Excel）但**没有开通收发邮件功能**的账号来强行访问网页版 Outlook。

## 解决步骤 (SOP)

### 步骤 1：使用“无痕模式”重新登录 (推荐)
为了排除是浏览器自动串号（Cookie 混淆）导致的问题：
1. 在你当前的浏览器里，按 `Ctrl + Shift + N` (Windows) 或 `Cmd + Shift + N` (Mac) 打开一个**无痕/隐身窗口 (Incognito Window)**。
2. 在无痕窗口中访问 `https://outlook.office.com/`。
3. 纯净地输入你需要登录的那个账号和密码，看是否能正常进入。如果能进入，说明是你浏览器里之前的账号串了，清理一下浏览器缓存或退出所有微软账号即可。

### 步骤 2：确认账号类型
如果你确实是想登录截图 1 里的那个学校邮箱 (`10066513@network.rca.ac.uk`)：
1. 这个报错强烈暗示学校的 IT 系统可能正在调整，或者你的邮箱服务（Exchange Online）出现了临时故障/被禁用。
2. 如果你在无痕模式下用 RCA 邮箱登录**依然报这个错**，你需要联系 RCA 的 IT Support 部门，附上这个报错截图，告诉他们："My account seems to have lost its Exchange Online license and I cannot access my mailbox."

### 步骤 3：关于我们自动化脚本的建议
如果你的 RCA 邮箱暂时无法登录网页版，导致你无法设置“自动转发”，请**暂缓设置自动转发**。
你可以直接使用你的**私人 Outlook 邮箱**（就是你之前生成了 `xkjpsaluzsazkgpr` 应用密码的那个账号），在你的私人邮箱里发几封测试邮件给自己，然后运行我们的 `ultimate_automator_demo.py` 脚本，它一样能完美工作！