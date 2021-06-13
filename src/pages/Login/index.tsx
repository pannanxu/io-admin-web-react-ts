import React, { memo, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Row, Col, message } from 'antd'
import { ICaptcha, ILoginSubmit } from '@/models/ILogin'
import { loginSubmit } from '@/api/system'
import { getCaptcha } from '@/api/system'
import { setToken } from '@/utils/tokenUtil'

interface IProperties {}

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 5 },
}
const tailLayout = {
  wrapperCol: { offset: 10, span: 5 },
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

  const onFinish = (values: ILoginSubmit) => {
    loginSubmit(values, { key: captcha.key, code: values.code }).then((res) => {
      if (res) {
        message.success('登陆成功')
        setToken(res)
        setTimeout(() => {
          history.push('/')
        }, 500)
      }
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item name="code" noStyle rules={[{ required: true, message: 'Please input the captcha you got!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <img src={captcha.image} alt="" onClick={getCaptchaHandler} />
            </Col>
          </Row>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default memo(Login)
