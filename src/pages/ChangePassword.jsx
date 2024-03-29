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
  const { AuthStore, UserStore } = useContext(context)
  const { currentUser } = UserStore
  let navigate = useNavigate()
  const onFinish = (values) => {
    AuthStore.setPassword(values.password)
    AuthStore.changePassword()
      .then((res) => {
        if (typeof res === 'object') {
          message.success('修改密码成功')
          navigate('/')
        } else {
          message.error('请登录后修改密码')
        }
      })
      .catch((err) => {
        message.error('修改密码失败,请重试')
      })
  }
  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo)
  }
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
                    new Error('请输入密码，不能包含特殊字符，最少3位'),
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
