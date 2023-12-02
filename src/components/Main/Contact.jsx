import React, {useState} from "react";
import Get from "../Get";
import styles from "./style.module.css"
import {start} from "../d";
function Contact() {
    const [bloc, setBloc] = useState();

  return (
    <div className={styles.contact}>
              <Get setBloc={setBloc} bloc={bloc}/>
    </div>
  );
}

export default Contact;
