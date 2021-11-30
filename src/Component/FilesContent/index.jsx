import React from 'react';

import { Card } from './../Card';
import { card_header } from './../../data';

import './index.css'

const isArrEmpty = (arr) =>{
    return arr == null || arr.length === 0;
}

const renderFilesData = (file_list) => {
    if(!isArrEmpty(file_list)){
        return (
            <>
                <Card card_elements = {card_header} />
                {file_list.map((val, idx) => {
                    return <Card key={idx} card_elements = {val} />
                })}
            </>
        )
    }
    else{
        return <div className="no-data">
            No data to show
        </div>
    }
}

export const FilesContent = (props) => {
    return (
        <div className="file_content">
            <label className="title">{props.name}</label>
            {renderFilesData(props.file_list)}
        </div>
    )
}