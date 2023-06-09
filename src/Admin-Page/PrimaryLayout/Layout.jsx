import { Layout, Space } from 'antd';
import { styled } from 'styled-components';
const { Header, Footer, Sider, Content } = Layout;
const SiderComponet = styled.div`
.logo{
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap%22");
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 34px;
line-height: 40px;
color: #1E2832;
}
    
`

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};
const siderStyle = {

    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',


};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};
const LayoutAdmin = () => (
    <Space
        direction="vertical"
        style={{
            width: '100%',
        }}
        size={[0, 48]}
    >

        <Layout>
            <Sider style={siderStyle}>
                <SiderComponet>
                    <div className='logo'>Lisa Admin</div>
                </SiderComponet>

            </Sider>
            <Layout>
                <Header style={headerStyle}>Header</Header>
                <Content style={contentStyle}>Content</Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Layout>
    </Space>
);
export default LayoutAdmin;