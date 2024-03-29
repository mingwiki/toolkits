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
  const { AuthStore } = useContext(context)
  let navigate = useNavigate()
  const onFinish = (values) => {
    AuthStore.setRealname(values.realname)
    AuthStore.setUsername(values.username)
    AuthStore.setPassword(values.password)
    AuthStore.register()
      .then((res) => {
        if (typeof res === 'object') {
          message.success('注册成功')
          navigate('/')
        } else {
          message.error(res)
        }
      })
      .catch((err) => {
        message.error('注册失败,请重试')
      })
  }
  const onFinishFailed = (errorInfo) => {
    message.error(errorInfo)
  }
  return (
    <>
      <InnerWrapper>
        <AbsoluteTips>注册页面</AbsoluteTips>
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
            label='姓名或昵称'
            name='realname'
            hasFeedback
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (/^[\u4E00-\u9FA5]{2,5}$/.test(value)) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error('请输入中文字符，不能包含特殊字符或英文，2~5位'),
                  )
                },
              }),
            ]}>
            <Input />
          </Form.Item>
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
                    new Error(
                      '请输入英文字符，不能包含特殊字符或中文，最少1位',
                    ),
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
