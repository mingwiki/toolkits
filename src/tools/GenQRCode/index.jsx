import React, { useState, useEffect, useDeferredValue, useContext } from 'react'
import { observer } from 'mobx-react'
import {
  Cascader,
  notification,
  Button,
  Space,
  Popover,
  Radio,
  Checkbox,
  Typography,
} from 'antd'
import {
  AlipayCircleOutlined,
  DoubleRightOutlined,
  GroupOutlined,
  GlobalOutlined,
  EditOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'
import { copyToClipboard } from '../../utils'
import context from '../../stores'
const QRCode = React.lazy(() => import('qrcode.react'))
const StyledInput = styled.input`
  min-width: 30%;
  max-width: 100%;
  &:invalid {
    background-color: red;
  }
`
const Component = observer(() => {
  const { HeaderStore } = useContext(context)
  const { setHeaders } = HeaderStore
  const [link, setLink] = useState('')
  notification.config({
    placement: 'bottomRight',
    duration: 3,
  })
  useEffect(() => {
    document.title = '二维码生成工具'
    setHeaders({
      ghost: false,
      onBack: () => window?.history.back(),
      title: 'No. 2',
      subTitle: '帮助运营快速二维码生成工具',
      extra: [
        // <Button
        //   key={1}
        //   danger
        //   onClick={() => {
        //     setTextInfo('小程序名称和对应页面')
        //     setIsShowPopover(false)
        //     clear()
        //     notification.warning({ description: '页面数据已全部清除' })
        //   }}>
        //   清空页面
        // </Button>,
      ],
    })
  }, [])
  return (
    <>
      <StyledInput
        type='text'
        placeholder='请输入一个链接或任意文字'
        value={link}
        autoFocus={true}
        onChange={(e) => {
          setLink(e.target.value.trim())
        }}
      />
      {link && <QRCode value={link} size={200} />}
    </>
  )
})

export default Component
