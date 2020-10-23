import React from 'react';
import './Nav.css';
import { Layout, Menu, Typography } from 'antd';
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
//import './index.css';
import { Input } from 'antd';



const { Header} = Layout;
const { Text } = Typography;
const { Search } = Input;


const onSearch = value => console.log(value);

function  Nav (){
    return(
        <>
             <Header className="headerStyle">
                <Text style={{color:'#FFF'}}> Beans Love Beers</Text>
                <Menu style={{float:'right'}}  mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Favourite</Menu.Item>
                </Menu>
            </Header>
            <Search className='searchbar' placeholder="Search for Beer" enterButton="Search" size="large" onSearch={onSearch} />

            

        </>
    );
}



export default Nav;