import React from "react";
import styles from "../modules/bio.module.css";
import styles1 from "../modules/desc.module.css";

function Nav() {
  let myStyle = {
    fontSize: "0.875rem",
    padding: "0.5rem",
    backgroundColor: "#ffeeee",
  };
  return (
    <>
      <p className="text-start" style={myStyle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <p className={`${styles.bioDescription} ${styles1.desc} ${styles1.pad}`}>
        Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum
        explicabo reprehenderit optio amet ab temporibus asperiores quasi
        cupiditate. Voluptatum ducimus voluptates voluptas?
      </p>
    </>
  );
}

export default Nav;
