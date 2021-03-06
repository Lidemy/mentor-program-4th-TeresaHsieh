## 教你朋友 CLI

### **什麼是 command line 以及如何使用**

從啟動電腦電源，到打開文件總覽、上網、下載資料，到把電腦關機，這中間我們對電腦所做的一切行為，都可以視為是「人在對電腦下命令」。

不過因為過去養成的使用習慣與需求，現在的我們如果要做上述的事情，都可以透過產品的工程師大大們為用戶製作的介面 Graphical User Interface，來跟電腦下命令。介面中的視窗、按鈕、輸入框等元素，讓我們可以很容易地直接在畫面上接收、修改資訊。

但並非每個要對電腦下命令的時機、場合，都有被提供這種介面讓人使用，因此會需要另一種能跟電腦溝通的途徑，一種電腦支援給用戶，能直接跟電腦下所有命令的途徑，也就是 Command Line Interface。不管是使用哪種作業系統的電腦，都有一個這樣的介面，讓我們透過「指令」，直接操作電腦。

舉一個簡單的範例，如果今天我們想要找「下載資料夾」裡，有沒有「JS 大全」這個檔案，我們可以先開啟「檔案總管」，然後點進「下載的資料夾」，檢視跑出來的檔案清單中，有沒有「JS 大全」檔案。這樣的尋找方式，就是利用 Apple 工程師幫我們做好的資料夾介面，讓用戶可以依循著一個個畫面，找到資料夾之下的所有檔案。

但如果今天 Apple 工程師大大沒有要幫我們做一個這樣的介面，提供用戶點擊、查詢資訊，我們也能透過電腦裡的 Terminal，使用 Command Line 直接寫下想要對電腦做的命令：

1. `~/Downloads` (走吧電腦！帶我到我的電腦裡「下載資料夾」)
電腦就會帶我們到「下載資料夾」中的位置
2. `ls`（電腦，請給我下載資料夾中，所有檔案的清單，我想要找看看裡面有沒有我想要的檔案）
然後電腦會乖乖的給出下載中，所有的檔案名稱，做到跟使用 GUI 一樣的目的

### **h0w 的願望**

Command Line 可以做到所有 GUI 能做到的事情，h0w 哥的願望也一樣！想用 CLI 建立一個叫做 wifi 的資料夾，並在其中創一個叫 afu.js 的檔案：

可以先想想要在哪邊建立這個 wifi 資料夾，然後將電腦中的路經先切過去。如果今天是想要在桌面上新增，那我們可能可以下 `~/Desktop` 這個指令，然後使用 `mkdir wifi` 命令，建立資料夾，並將路徑切進入這個剛建立好的 wifi 資料夾 `cd wifi`，最後一樣用 touch 指令 `touch afu.js` 創建這個老婆大人的 JS 檔案！