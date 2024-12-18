import React, { useState } from 'react'
import MenuCard from '../card';
import controller from "../../constants/regfunctions";
import { useEffect } from 'react';
import { endpoints } from '../../constants/constants';

const Menu = () => {
    const [menuItem, setMenuItem] = useState([]);



    useEffect(() => {
        const getAllFoods = async () => {
            const data = await controller.getAllData(endpoints.recipes)

            setMenuItem(data);
        }
        getAllFoods();
    }, []);



    // console.log(menuItem);

    return (
        <>
            <MenuCard menuItem={menuItem} setMenuItem={setMenuItem} />
        </>

    )
}

export default Menu