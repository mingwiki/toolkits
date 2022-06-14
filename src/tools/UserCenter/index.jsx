import { observer } from 'mobx-react'
import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Typography,
  notification,
  Space,
  Badge,
  Card,
  Popover,
  Spin,
  Cascader,
  Empty,
  Radio,
} from 'antd'
import { DeleteOutlined, DoubleRightOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import context from '../../stores'
import {
  cascaderData,
  miniAppIds,
  miniAppPages,
  miniAppPageExtra,
} from '../../data'

const QRCode = React.lazy(() => import('qrcode.react'))

const CardFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const MarginRightDiv = styled.div`
  border: 1px dashed grey;
  border-radius: 10px;
  padding: 0 5px;
`
const NameLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 35px;
`
const StyledSpace = styled.div`
  border: 1px dashed gray;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const StyledDeleteOutlined = styled(DeleteOutlined)`
  color: red;
`
const WrapSpace = styled(Space)`
  flex-wrap: wrap;
`
const { Text } = Typography
const Component = () => {
  const { AuthStore, UserStore, UrlStore, UserCenterStore, HeaderStore } =
    useContext(context)
  const { logout } = AuthStore
  const { currentUser } = UserStore
  const { isSyncing, localUrls, setIsSyncing, setLocalUrls } = UserCenterStore
  const {
    textInfo,
    appId,
    pagePath,
    isQueryAll,
    setTextInfo,
    setAppId,
    setPagePath,
    setPageCheckData,
    setIsQueryAll,
    queryAll,
    deleteUrl,
    getPageType,
  } = UrlStore
  const navigate = useNavigate()
  const { setHeaders } = HeaderStore
  const [isShowDrawerQR, setIsShowDrawerQR] = useState([])
  const syncPull = () => {
    setIsSyncing(true)
    queryAll()
      .then(
        (res) => {
          setIsShowDrawerQR(new Array(Object.entries(res).length).fill(false))
          setLocalUrls(res)
          if (Object.entries(res).length === 0) {
            notification.info({
              description: `暂无数据`,
            })
          } else {
            notification.success({
              description: `同步成功`,
            })
          }
        },
        (error) => {
          notification.error({ description: `拉取失败请联系开发人员` })
          notification.error({ description: JSON.stringify(error) })
        }
      )
      .finally(() => {
        setIsSyncing(false)
      })
  }
  const syncPullByCondition = (appId, pagePath) => {
    setIsSyncing(true)
    queryAll(appId, pagePath)
      .then(
        (res) => {
          setIsShowDrawerQR(new Array(Object.entries(res).length).fill(false))
          setLocalUrls(res)
          if (Object.entries(res).length === 0) {
            notification.info({
              description: `暂无数据`,
            })
          } else {
            notification.success({
              description: `同步成功`,
            })
          }
        },
        (error) => {
          notification.error({ description: `上传失败请联系开发人员` })
          notification.error({ description: JSON.stringify(error) })
        }
      )
      .finally(() => {
        setIsSyncing(false)
      })
  }
  const onChangeAppPage = (value) => {
    setTextInfo(
      <>
        {value[0]} <DoubleRightOutlined /> {value[1]}
      </>
    )
    setAppId(miniAppIds[value[0]])
    setPagePath(miniAppPages[value[0]][value[1]])
    if (
      miniAppPageExtra[miniAppIds[value[0]]][miniAppPages[value[0]][value[1]]]
    ) {
      setPageCheckData(
        Object.entries(
          miniAppPageExtra[miniAppIds[value[0]]][
            miniAppPages[value[0]][value[1]]
          ]
        ).map((e) => {
          if (typeof e[1] === 'boolean') {
            e[1] = e[1].toString()
          }
          if (!Array.isArray(e[1])) {
            e[1] = [e[1]]
          }
          return e
        })
      )
    } else {
      setPageCheckData([])
    }
  }
  const RadioChange = (e) => {
    setIsQueryAll(e.target.value)
  }
  useEffect(() => {
    document.title = '个人中心'
    setHeaders({
      ghost: false,
      onBack: () => window?.history.back(),
      title: 'No. 3',
      subTitle: '个人中心管理面板',
      extra: [
        <Button key={2} onClick={() => navigate('/changePassword')}>
          修改密码
        </Button>,
        <Button key={3} type='primary' danger onClick={() => logout()}>
          注销
        </Button>,
      ],
    })
  }, [])
  return (
    <>
      <StyledSpace>
        <WrapSpace>
          <Text strong>选择查询</Text>
          <Radio.Group
            onChange={RadioChange}
            value={isQueryAll}
            defaultValue={false}>
            <Radio value={true}>所有用户</Radio>
            <Radio value={false}>当前用户</Radio>
          </Radio.Group>
        </WrapSpace>
        <Button type='primary' danger onClick={() => syncPull()}>
          查询所有页面数据
        </Button>
      </StyledSpace>
      <StyledSpace>
        <WrapSpace>
          <Cascader
            options={cascaderData}
            onChange={onChangeAppPage}
            size='large'
            notFoundContent='无数据'>
            <a href='/#'>
              <Button type='primary'>点击选择或切换</Button>
            </a>
          </Cascader>
          <Text
            style={{
              backgroundColor: '#ffc9c9',
              color: 'black',
              padding: '5px 10px',
            }}>
            {textInfo}
          </Text>
        </WrapSpace>
        <WrapSpace>
          <Button
            type='primary'
            onClick={() => {
              if (appId && pagePath) {
                syncPullByCondition(appId, pagePath)
              } else {
                notification.error({ description: '请选择页面' })
              }
            }}>
            查询当前页面数据
          </Button>
        </WrapSpace>
      </StyledSpace>

      {!isSyncing ? (
        localUrls?.length > 0 ? (
          localUrls.map((e, idx) => (
            <div key={idx}>
              <Badge.Ribbon text={idx + 1}>
                <Card
                  title={
                    <CardFlex>
                      <Text strong>{e?.linkName}</Text>
                      <NameLabel>
                        <MarginRightDiv>{e?.nickname}</MarginRightDiv>
                        <MarginRightDiv>{getPageType(e?.url)}</MarginRightDiv>
                      </NameLabel>
                    </CardFlex>
                  }
                  size='small'
                  hoverable={true}
                  type='inner'>
                  <CardFlex>
                    <WrapSpace>
                      {e?.enterId?.length > 0 && (
                        <Text code>入口ID: {e?.enterId}</Text>
                      )}
                      {e?.sourceOrigin?.length > 0 && (
                        <Text code>订单来源: {e?.sourceOrigin}</Text>
                      )}
                    </WrapSpace>
                    <WrapSpace>
                      <Button
                        type='dashed'
                        shape='round'
                        onClick={() => {
                          navigator.clipboard.writeText(e?.url)
                          notification.success({
                            description: '链接已复制到剪切板',
                          })
                        }}>
                        点击复制链接
                      </Button>
                      <Popover
                        content={<QRCode value={e?.url} size={200} />}
                        title='请扫描二维码'
                        trigger='click'
                        visible={isShowDrawerQR[idx]}
                        onVisibleChange={() => {
                          const temp = [...isShowDrawerQR]
                          temp[idx] = !temp[idx]
                          setIsShowDrawerQR(temp)
                        }}>
                        <Button
                          type='dashed'
                          shape='round'
                          onClick={() => {
                            notification.info({
                              description: '查看历史链接二维码',
                            })
                          }}>
                          点击查看二维码
                        </Button>
                      </Popover>
                      <StyledDeleteOutlined
                        onClick={() => {
                          if (e?.username === currentUser.username) {
                            localUrls.splice(idx, 1)
                            setLocalUrls(localUrls)
                            deleteUrl(e.id)
                            notification.success({
                              description: '删除成功',
                            })
                          } else {
                            notification.error({
                              description: '只能删除自己的历史链接',
                            })
                          }
                        }}
                      />
                    </WrapSpace>
                  </CardFlex>
                </Card>
              </Badge.Ribbon>
            </div>
          ))
        ) : (
          <Empty />
        )
      ) : (
        <Spin tip='正在和云服务器同步数据' size='large' />
      )}
    </>
  )
}
export default observer(Component)