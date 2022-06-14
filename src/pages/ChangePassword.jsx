import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, message, Space } from 'antd'
import context from '../stores/index'
import styled from 'styled-components'

const AbsoluteTips = styled.div`
  font-size: 36px;
  margin: 50px 0;
`
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Component = () => {
  const { AuthStore, HeaderStore } = useContext(context)
  let navigate = useNavigate()
  const onFinish = (values) => {
    AuthStore.setUsername(values.username)
    AuthStore.setPassword(values.password)
    AuthStore.changePassword()
      .then(() => {
        message.success('修改密码成功')
        navigate('/')
      })
      .catch((err) => {
        message.error('修改密码失败,请重试:', err)
      })
  }
  const onFinishFailed = (errorInfo) => {
    message.error('修改密码失败,请重试:', errorInfo)
  }
  const { setHeaders } = HeaderStore
  useEffect(() => {
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
      <InnerWrapper>
        <AbsoluteTips>修改密码页面</AbsoluteTips>
        <Form
          name='basic'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='on'>
          <Form.Item
            label='用户名'
            name='username'
            hasFeedback
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (/^[a-zA-Z]+$/.test(value)) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error('请输入英文字符，不能包含特殊字符或中文，最少1位')
                  )
                },
              }),
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='密码'
            name='password'
            hasFeedback
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (/^[\w\d]{3,}$/.test(value)) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error('请输入密码，不能包含特殊字符，最少3位')
                  )
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            label='输入密码'
            name='re-password'
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('两次密码不匹配'))
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Space>
              <Button type='primary' onClick={() => navigate('/login')}>
                前往登录
              </Button>
              <Button type='primary' htmlType='submit'>
                提交
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </InnerWrapper>
    </>
  )
}

export default Component