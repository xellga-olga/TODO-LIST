import React from "react"

import styles from './Header.module.css'

interface HeaderProps {
   todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({todoCount}) => (

   <div className={styles.headerContainer}>
      <div className={styles.headerTitle}>
         Todo list <b>{todoCount}</b> task(s)
      </div>
   </div>
)