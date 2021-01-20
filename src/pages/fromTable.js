import { Table, Form, Input, Button } from 'antd';
const { Column } = Table;


const Demo = () => {
  const [form] = Form.useForm();
  // const [getFieldDecorator, getFieldValue, setFieldValue] = form
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  const submitFrom = () => {
    console.log(form.getFieldsValue());
  };
  return (
    <div>
      <Form initialValues={dataSource} form={form}>
        <Table dataSource={dataSource}>
          <Column title="姓名" dataIndex="name" key="name" />
          <Column
            title="年龄"
            dataIndex="age"
            render={(text, record, index) => {
              return (
                <div>
                  <Form.Item name={[index, 'age']} hidden={true}></Form.Item>
                  <span>{text}</span>
                </div>
              );
            }}
          />
          <Column
            title="住址"
            key="address"
            render={(text, record, index) => {
              return (
                <Form.Item
                  name={[index, 'address']}
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value) {
                          return Promise.reject('不能为空!');
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                >
                  <Input placeholder="请输入用户名" />
                </Form.Item>
              );
            }}
          />
        </Table>
      </Form>
      <Button type="primary" onClick={submitFrom}>
        submit
      </Button>
    </div>
  );
};

export default Demo;
