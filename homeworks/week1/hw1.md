## 交作業流程

1. 將未來要修改、更新的專案內容，完整從遠端複製一份到 local 的電腦端：`Git clone HTTPS/SSH key`

2. 在 terminal 將位置切到專案資料夾下，並初始化，讓 Git 對這份內容開始進行版本控制：`Git init`

3. 在 master branch 切出新的 feature branch，並切到該 branch 做檔案的更新：`Git checkout -b feature master`

4. 將變動的檔案交給 Git，讓 Git 開始「追蹤」它們，並放到一個暫存的 Staging Area：`Git add .` 

5. 完成所有修改後，要將 Staging Area 的檔案中，一起更新為一個版本、內容永久的存下來，並寫下關於這個版本的相關訊息：`Git commit -m ""`

6. 在 local 電腦端完成版本的新增，與遠端的專案內容同步：`Git push origin feature`

7. 到自己的遠端 repo 去，並且發起 PR（Pull Request），說明專案資料夾裡的檔案有更新，並選擇這次推到遠端的 branch 要 merge 到哪支 branch

8. 把 PR 的連結複製起來，並且在學習系統上繳交作業