```js
function isValid(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) return 'invalid';
  }
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + arr[i - 2]) return 'invalid';
  }
  return 'valid';
}

isValid([3, 5, 8, 13, 22, 35]);
```

## 執行流程

1. 跑到第 2 行時，發現一直到第 10 行，之間有一個叫做 isValid 的 function 被宣告了，而且可以接收一個參數，取名為 arr。
2. 跑到第 3 行時，發現裡面被定義一個 for 迴圈，init 一個名為 i 的變數，並設定條件：「只要 i 這個變數的 value 小於傳入的 arr 長度，就會進到這個 for 迴圈，執行裡面的程式碼，如果不符合條件，就會跳出這個 for 迴圈。且每一次做完 for 迴圈裡的程式碼，i 這個變數的 value 就會加一」。
3. 跑到第 4 行，發現迴圈中傳入的 arr 在特定 index 值小於或等於 0，就要回傳字串 invalid。
4. 跑到第 6 行，發現裡面被定義另一個 for 迴圈，init 一個名字也是 i 的變數，並設定條件：「只要 i 這個變數的 value 小於傳入的 arr 長度，就會進到這個 for 迴圈，執行裡面的程式碼，如果不符合條件，就會跳出這個 for 迴圈。且每一次做完 for 迴圈裡的程式碼，i 這個變數的 value 就會加一」。
5. 跑到第 7 行，發現 for 迴圈裡，只要傳入的「arr 在特定 index 值」時，與「arr 在特定 index-1 值」及「arr 在特定 index-2 值」相加卻不相等時，就要回傳字串 invalid。
6. 跑到第 9 行，發現這個 isValid function 需要 return 字串 valid，也就是說，如果程式能夠跑到這行，沒有在之前就被 return 出去、跳出 function，最終 isValid function 就會 return 'valid'。
7. 最後發現在第 12 行，做了 call isValid 這個 function 的動作，並且將「[3, 5, 8, 13, 22, 35]」這個 array 帶進 function。
8. 把 [3, 5, 8, 13, 22, 35] 帶進 isValid 這個 function 後，function 裡面做任何操作都會用 arr 這個名字代替 array argument。
9. 進到第一個 for 迴圈，開始依據條件（第 2 點有提到～），看看 i 符不符合條件，若符合條件，才會進到 for 裡面執行 if 的條件式。
10. 第一個 for 迴圈，i 一開始為 0，且滿足小於 arr 長度條件，因此進到 if 條件式。判斷 3 是不是小於等於 0，因為不是，所以不會 return 'invalid'，然後執行 i 加一，跑回迴圈，檢查 i 是否小於 arr 長度，此時 i 是 1，滿足條件，再次進到 for 迴圈裡面，判斷 5 是不是小於等於 0，因為不對，所以不會 return 'invalid'，再次跳回迴圈，進行 i 加一。
11. 持續進行 for 迴圈，直到做滿 6 次（[3, 5, 8, 13, 22, 35] 的長度），發現裡面沒有一個元素符合「小於等於 0」，所以從來沒有 return 字串，因此往下做第二個迴圈。
12. 進到第二個 for 迴圈，開始依據條件（第 4 點有提到～），看看 i 符不符合條件，若符合條件，才會進到 for 裡面執行 if 的條件式。
13. 第二個 for 迴圈，i 一開始為 2，且滿足小於 arr 長度條件，因此進到 if 條件式。判斷 8 是不是不等於 3 加上 5，因為不是，所以不會 return 'invalid'，然後執行 i 加一，跑回迴圈，檢查 i 是否小於 arr 長度，此時 i 是 3，滿足條件，再次進到 for 迴圈裡面，判斷 13 是不是不等於 5 加上 8，因為不對，所以不會 return 'invalid'，再次跳回迴圈，進行 i 加一。
14. 持續進行 for 迴圈，直到做到第 3 次（從 i 是 2 開始，每次加一，加到 i 是 4 時），發現 22 的確不會等於 8 加上 13，終於符合 if 條件，進到條件式，最後 return 'invalid'。
15. 因為在第二個 for 迴圈就被 return 字串，所以成為了 isValid function 的最終回傳值，而在第 9 行的 return 'valid' 也永遠不會被執行到。也就是說，當 call isValid 這個 function，且帶著 [3, 5, 8, 13, 22, 35] array 當作 argument 時，會得到字串 invalid 這個回傳值。

其實在觀察一段程式碼時，我會比較先看整體的結構，看看是否有在某個地方 call 某個 function，而那個 function 需要帶什麼 parameter，再看看 call function 的地方帶了什麼 argument，最後才去深入瞭解其 function 裡面的複雜邏輯、會拿傳入的 parameter 做什麼、最後回傳什麼。所以順序會跟上方寫的不太一樣～
