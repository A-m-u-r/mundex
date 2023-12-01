import React from "react";
import {NavLink} from "react-router-dom";
import {Menu, MenuItem, MenuButton} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import styles from "./style.module.css"


function Navigation() {
    return (<div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.block}>
                <NavLink className={styles.afisha} to="/">
                    Афиша
                </NavLink>

                <div className={styles.menu}>
                    <Menu menuButton={<MenuButton>Menu</MenuButton>} transition>
                        <MenuItem><NavLink className="nav-link" to="/about">
                            Оценки
                            <span className="sr-only">(current)</span>
                        </NavLink></MenuItem>

                        <MenuItem><NavLink className="nav-link" to="/">
                            Мероприятия
                            <span className="sr-only">(current)</span>
                        </NavLink></MenuItem>

                        <MenuItem> <NavLink className="nav-link" to="/contact">
                            Портфолио
                        </NavLink></MenuItem>

                    </Menu>
                </div>
            </div>
        </div>
        <div className={styles.text}> <div className={styles.textIn}>Мероприятия <br/> от студентов - студентам <br/> И не только</div> </div>
    </div>);
}

export default Navigation;
