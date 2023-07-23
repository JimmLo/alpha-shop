# Alpha-Shop

這是一個用於練習 React 的專案，名為 Alpha-Shop。旨在實現一個具有三個操作階段的簡單購物網站。

## 操作流程

1. 請先確保您的電腦已安裝 Node.js 和 npm。
2. 開啟終端機 (Terminal)，進入您想要存放此專案的本地位置，然後執行以下指令來複製專案：

```
git clone https://github.com/gchin6/alpha_shop1.git
```

3. 進入存放此專案的資料夾，並在終端機中執行以下指令進行相依套件的安裝：

```
npm install
```

4. 安裝完成後，執行以下指令來啟動程式：

```
npm start
```

5. 在瀏覽器中輸入以下網址：http://localhost:3000，程式將會在瀏覽器中運行。如果成功執行，您將會看到以下訊息：

```
webpack compiled successfully
```

## 專案結構

components資料夾中有以下五個元件
- `StepProgress`：標示「寄送地址」、「運送方式」和「付款資訊」三個操作階段的元件。
- `form`：包含三個不同步驟的元件，用於輸入寄送地址、選擇運送方式和填寫付款資訊。
- `ProgressControl`：包含「上一步」、「下一步」和「確認下單」的按鈕，用於控制操作進度。

