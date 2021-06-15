import React, { memo, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'
import ProForm, { ProFormText } from '@ant-design/pro-form'
import { MobileOutlined } from '@ant-design/icons'

import { ICaptcha, ILoginSubmit } from '@/models/ILogin'
import { getPermissionsByUserRole, loginSubmit } from '@/api/system'
import { getCaptcha } from '@/api/system'
import { setPermissions, setToken } from '@/utils/localStoreUtil'

interface IProperties {
}

const Login: React.FC<IProperties> = (props): React.ReactElement => {
  const history = useHistory()
  const [captcha, setCaptcha] = useState({} as ICaptcha)

  useEffect(() => {
    getCaptchaHandler()
  }, [])

  const getCaptchaHandler = () => {
    getCaptcha(captcha.key).then((res) => {
      setCaptcha(res)
    })
  }

  const onFinish = (values: ILoginSubmit | any): any => {
    loginSubmit(values, { key: captcha.key, code: values.code }).then((res) => {
      if (res) {
        setToken(res)
        getPermissionsByUserRole().then((permissions) => {
          message.success('登陆成功')
          setPermissions(permissions)
          setTimeout(() => {
            history.replace('/')
          }, 500)
        })
      }
    })
  }

  return (
    <div>
      <div
        style={{
          width: 330,
          margin: 'auto',
        }}
      >
        <ProForm
          onFinish={onFinish}
          submitter={{
            searchConfig: {
              submitText: '登录',
            },
            render: (_: any, dom: any) => dom.pop(),
            submitButtonProps: {
              size: 'large',
              style: {
                width: '100%',
              },
            },
          }}
        >
          <h1
            style={{
              textAlign: 'center',
            }}
          >
            <img
              style={{
                height: '44px',
                marginRight: 16,
              }}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            Ant Design
          </h1>
          <div
            style={{
              marginTop: 12,
              textAlign: 'center',
              marginBottom: 40,
            }}
          >
            Ant Design 是西湖区最具影响力的 Web 设计规范
          </div>
          <ProFormText
            fieldProps={{
              size: 'large',
              prefix: <MobileOutlined/>,
            }}
            name="username"
            placeholder="请输入用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText
            fieldProps={{
              size: 'large',
              prefix: <MobileOutlined/>,
            }}
            name="password"
            placeholder="请输入密码"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          />
          <ProFormText
            fieldProps={{
              size: 'large',
              prefix: <MobileOutlined/>,
            }}
            name="code"
            placeholder="请输入验证码"
            rules={[
              {
                required: true,
                message: '请输入验证码!',
              },
            ]}
          />
          <img src={captcha.image} alt="" onClick={getCaptchaHandler}/>
        </ProForm>
      </div>
    </div>
  )
}

export default memo(Login)
