const xhr = new XMLHttpRequest()

xhr.open('GET', 'http://www.baidu.com')
xhr.timeout = 1000

xhr.onreadystatechange = () => {
  if(xhr.readyState === 4) {
    console.log('请求完毕')
    if(xhr.status >= 200 && xhr.status < 300) {
      console.log('响应成功')
      const res = xhr.responseText
      console.log(JSON.parse(res))
    } else if(xhr.status >= 400) {
      console.log('响应失败')
    }
  }
}

xhr.ontimeout = () => {
  console.log('请求超时了')
}
xhr.send() 