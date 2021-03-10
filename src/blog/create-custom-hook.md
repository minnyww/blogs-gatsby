---
title: Reuse logic ด้วย Customhook
author: Min
date: 2021-03-08
---

## มาสร้าง Custom Hook ไว้ให้คนอื่นใช้กันเถอะ

ในการเขียน React บางครั้งก็มี logic ที่ถูกใช้บ่อยๆ และถูกใช้ซ้ำอยู่เยอะ วันนี้จะมาสร้าง Custom hook เพื่อ reuse logic กัน

### วันนี้จะมาสร้าง custom hook สำหรับการ เพิ่ม ลบ ของเลขกัน

```js
// useCounter.js

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter => counter + 1)
  const decrement = () => setCounter(counter => counter - 1)

  return { counter, increment, decrement }
}

export default useCounter
```

### ส่วนวิธีใช้ก็ import ไปใช้ได้เลย

```js
// App.js

const { counter, increment, decrement } = useCounter()

// counter คือค่า result
// increment คือ function ที่เมื่อกดแล้วจะเพิ่ม counter ทีละ 1
// decrement คือ function ที่เมื่อกดแล้วจะลด counter ทีละ 1
```
