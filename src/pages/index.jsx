import React, { useEffect, useContext } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import context from '../stores'
import acct from '../20220614152412.png'

const Welcome = styled.div`
  font-size: 50px;
`
const Component = observer(() => {
  const { UserStore, HeaderStore } = useContext(context)
  const { currentUser } = UserStore
  const { setHeaders } = HeaderStore
  useEffect(() => {
    document.title = appTitle
    setHeaders({
      ghost: false,
      onBack: () => window?.history.back(),
      title: '',
      subTitle: '',
      extra: [],
    })
  }, [])
  return (
    <>
      <Welcome>欢迎使用，{`《${appTitle}》`}</Welcome>
      <Welcome>
        当前用户：{currentUser ? currentUser.nickname : '未登录'}
      </Welcome>
      <h1>原本是我个人服务器挂了，先已改用公司测试服务器。请使用下方的局域网链接访问。</h1>
      <h1>
        http://172.16.57.114:3001/
        <a href='http://172.16.57.114:3001/'>点击跳转</a>
      </h1>
      <h1>原有账户名不变，默认登录密码为123。现有账户名如下:</h1>
      <img src={acct} alt='accounts' />
    </>
  )
})
export default Component

export const appTitle = '小小工具箱'