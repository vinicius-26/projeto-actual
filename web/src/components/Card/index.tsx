import React from 'react';
import styles from './styles.module.css'
import Link from 'next/link';
import { useState } from 'react';

interface CardProps{
  title: string,
  text: string,
  img: string,
}

const Card: React.FC<CardProps> = (props) => {

    return(
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={props.img} alt="" />
      </div>

      <div className={styles.title}>
        <p>{props.title}</p>
      </div>

      <div className={styles.text}>
        <p>{props.text}</p>
      </div>

    </div>
    )
}

export default Card;