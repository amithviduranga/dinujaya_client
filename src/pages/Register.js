// Registration.js

import React from "react";
import { Button, Checkbox, Form, Input, Typography,theme,Grid } from "antd";
import { LockOutlined, MailOutlined,UserOutlined ,EnvironmentOutlined } from "@ant-design/icons";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function Registration() {
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: "50px",
      width: "500px",
      border: `1px solid ${token.colorBorder}`,
      borderRadius: token.borderRadiusLG,
      backgroundColor: token.colorBgContainer,
      textAlign: "center",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXXL,
    },
    section: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
      backgroundColor: token.colorBgLayout,
    },
    text: {
      color: token.colorTextSecondary,
      fontSize: screens.md ? token.fontSizeLG : token.fontSizeMD,
    },
    boldText: {
      fontWeight: "bold",
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading1 : token.fontSizeHeading2,
    },
    input: {
      height: "48px",
      fontSize: token.fontSizeLG,
    },
    button: {
      height: "48px",
      fontSize: token.fontSizeLG,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Title style={styles.title}>Register Now</Title>
          <Text>
            Create your account to start exploring. Already have an account?{" "}
            <Link href="/">Sign in here</Link>
          </Text>
        </div>
        <Form
          name="register"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="firstname"
            rules={[
              {
                type: "text",
                required: true,
                message: "Please input your First name!",
              },
            ]}
          >
            
            <Input prefix={<UserOutlined />} placeholder="First Name" style={styles.input} />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[
              {
                type: "text",
                required: true,
                message: "Please input your Last name!",
              },
            ]}
          >
            
            <Input prefix={<UserOutlined />} placeholder="Last Name" style={styles.input} />
          </Form.Item>
          <Form.Item
            name="address"
            rules={[
              {
                type: "address",
                required: true,
                message: "Please input your Address!",
              },
            ]}
          >
            
            <Input prefix={<EnvironmentOutlined />} placeholder="Address" style={styles.input} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" style={styles.input} />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                type: "text",
                required: true,
                message: "Please input your User Name!",
              },
            ]}
          >
            
            <Input prefix={<UserOutlined />} placeholder="User Name" style={styles.input} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              style={styles.input}
            />
            
          </Form.Item>
          <Form.Item
            name="conformpassword"
            rules={[
              {
                required: true,
                message: "Please conform your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="conform password"
              style={styles.input}
            />
            
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit" style={styles.button}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
