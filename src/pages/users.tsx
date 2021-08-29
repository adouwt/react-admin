import React, { useEffect, useState } from 'react';
import { Card, Space, Rate, Popover, Button, message } from 'antd';

import httpRequest from '../utils/axios';
interface IUserItem {  
    _id?: string | undefined
    avatar_url?: string
    age?: string
    name?: string
    price?: string
    rate?: number
    user_desc?: string
}


const Users =  () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        alluserandrate();
    }, [])
    const alluserandrate = () => {
        let response:any = httpRequest('get/alluserandrate', {});
            response.then((res: any) => {
                console.log(res);
                setUserList(res.users);
            }, (err: any) => {
                console.log(err, 'err')
            })
    }
    const onChange = (id:string | undefined, value: number) => {
        console.log(id, value)
        httpRequest({
            url: 'post/oneUserRate',
            method: 'post',
            data: {
                id: id,
                rate: value
            }
        }).then((res:any) => {
            if(res.success) {
                // message.success(res.message)
                message.success(`感谢您的${value}分的评分，欢迎下次再来`);
                alluserandrate();
            }
        })
    }

    const RateContent = (id: string | undefined) => {
        return (<Popover
            content={<Rate allowHalf defaultValue={4}  onChange={(value:number) => onChange(id, value)}/> }
            title="打个星呗！"
            trigger="click"
        >
            <Button type="link" >戳我点评</Button>
        </Popover>)
    }
    return (
        <div className="users">
            <Space direction="vertical">
                {userList.map((item:IUserItem, index:number) => {
                    return (
                        <Card  key={index} title={index+1 + '号老师'} bordered={true} extra={RateContent(item._id)}>
                            <div className="card-inner-wrapper">
                                <div>
                                    <img src={item.avatar_url} width={"90%"} alt="1"/>
                                </div>
                                <div>
                                    <h2>姓名：{item.name}</h2>
                                    <h2>工龄：{item.age} 年</h2>
                                    <h2>价格：{item.price} RMB</h2>
                                    <h2>推荐指数：<Rate allowHalf defaultValue={item.rate} disabled /></h2>
                                    <p>个人简介：</p>
                                    <p>{item.user_desc}</p>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </Space>
        </div>
    );
}

export default Users