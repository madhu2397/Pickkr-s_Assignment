import React, { useState, useEffect } from 'react';
import './Beers.css';
import { Card, Space, Typography } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import LinesEllipsis from "react-lines-ellipsis";

const { Title } = Typography;

function Beers() {
    const [beer, setBeer] = useState([]);
    // const [fav, setFav] =useState();
    // const [pageNumber, setPageNumber] = useState(1);
    // const [isFetching, setIsFetching] = useState(false);
    // const [searchData, setSearchData] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [query, setQuery] = useState("");

    // useEffect(() =>{
    //     fetchPosts();
    // },[]);

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // useEffect(() => {
    //     if (!isFetching) return;
    //     setPageNumber((prevPageNumber) => prevPageNumber + 1);
    //     fetchMoreListItems(pageNumber);
    // }, [isFetching]);

    // const fetchMoreListItems = async () => {

    //     const res = await fetch('https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=27');
    //     setBeer((prevBeer) => {
    //         return [...new Set([...beer, ...res.data.map((item) => item)])];
    //     });

    //     setIsFetching(false);

    // }


    // const handleScroll = () => {
    //     if (
    //         window.innerHeight + document.documentElement.scrollTop !==
    //         document.documentElement.offsetHeight || isFetching
    //     ) {
    //         return;
    //     }

    //     setIsFetching(true);

    // };


    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers')
            .then(res => res.json())
            .then(data => setBeer(data))


    }, []);

    return (
        <div className="card">
            {beer
                ? beer.map((item) => {
                    return (
                        <div style={{ backgroundColor: 'white', padding: '10px' }}>


                            <Card style={{ height: '70%' }} key={item.id}
                                hoverable>
                                <StarOutlined
                                    className="iconStyle"

                                />
                                <Space>
                                    <img src={item.image_url} alt={item.name} style={{ width: 100, height: 300 }}></img>
                                    <Space direction="vertical">
                                        <Title level={3}>{item.name}</Title>
                                        <LinesEllipsis
                                            text={item.description}
                                            maxLine="3"
                                            ellipsis="..."
                                            trimRight
                                            basedOn="letters"
                                        />
                                    </Space>

                                </Space>
                            </Card>


                        </div>
                    )
                })
                : "loading"}
            

        </div>

    )

}
export default Beers;