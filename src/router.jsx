import React, { Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Spin } from 'antd'
import { appTitle } from './tools/data'

const AppPageToUrl = React.lazy(() => import('./tools/AppPageToUrl'))

const Component = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Spin size="large" />} >
        <Routes>
          <Route path="/" element={<>
          <div style={{ fontSize: 50 }}>欢迎使用，《{appTitle}》</div>
          <div>有任何建议或意见请提Issue或Pull Request</div>
          <div>仓库地址：<a href="//github.com/mingwiki/littletools">github.com/mingwiki/littletools</a></div>
          <div>镜像地址：<a href="//gitee.com/mingwiki/littletools">gitee.com/mingwiki/littletools</a></div>
          <div>工具地址1: <a href="//zed.ink/littletools/">zed.ink/littletools</a></div>
          <div>工具地址2: <a href="//mingwiki.gitee.io/littletools">mingwiki.gitee.io/littletools</a></div>
          <div>邮件：mingwiki@gmail.com</div>
          </>} />
          <Route path="/AppPageToUrl" element={<AppPageToUrl />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
export default Component
