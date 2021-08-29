import React, { FC, useEffect, useState } from 'react';
import { Card, Space, Rate, Popover, Button  } from 'antd';

import httpRequest from '../fetch';
const Users: FC =   () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        let response:any = httpRequest('alluser', {});
        // console.log(response)
    }, [])
    const RateContent = (id: string) => {
        return (<Popover
            content={<Rate allowHalf defaultValue={4}  onChange={(value: number) => {
                console.log(id, value)
            }}/> }
            title="打个星呗！"
            trigger="click"
        >
            <Button type="link" >戳我点评</Button>
        </Popover>)
    }
    return (
        <div className="users">
            <Space direction="vertical">
                <Card title="1号Tony" bordered={true} extra={RateContent('1')}>
                    <div className="card-inner-wrapper">
                        <div>
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width={"90%"} alt="1"/>
                        </div>
                        <div>
                            <h2>姓名：Tony</h2>
                            <h2>性别：男</h2>
                            <h2>工龄：3 年</h2>
                            <h2>价格：30 RMB</h2>
                            <h2>推荐指数：<Rate allowHalf defaultValue={4.5} disabled /></h2>
                            <p>个人简介：</p>
                            <p>人见人爱的Tony 老师，专治各种疑难杂症</p>
                        </div>
                    </div>
                    
                </Card>
                <Card title="2号Allen" bordered={true} extra={RateContent('2')} >
                    <div className="card-inner-wrapper">
                        <div>
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width={"90%"} alt="1"/>
                        </div>
                        <div>
                            <h2>姓名：Allen</h2>
                            <h2>性别：女</h2>
                            <h2>工龄：3 年</h2>
                            <h2>价格：30 RMB</h2>
                            <h2>推荐指数：<Rate allowHalf defaultValue={4.5} disabled /></h2>
                            <p>个人简介：</p>
                            <p>花见花开的Allen 老师，专治各种疑难杂症</p>
                        </div>
                    </div>
                </Card>
                <Card title="3号Berry" bordered={true} extra={RateContent('3')}>
                    <div className="card-inner-wrapper">
                        <div>
                            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" width={"90%"} alt="1"/>
                        </div>
                        <div>
                            <h2>姓名：Berry</h2>
                            <h2>性别：女</h2>
                            <h2>工龄：3 年</h2>
                            <h2>价格：30 RMB</h2>
                            <h2>推荐指数：<Rate allowHalf defaultValue={4.5} disabled /></h2>
                            <p>个人简介：</p>
                            <p>超人气偶像的Berry 老师，师奶杀手</p>
                        </div>
                    </div>
                </Card>
            </Space>
        </div>
    );
}

export default Users