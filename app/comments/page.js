'use client';
import 'app/globals.css'
import styles from "app/page.module.css"
import { useState, useEffect } from 'react';

const Contacts = () => {
    const [contacts, setContacts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8080/getAllNotes');
            const data = await response.json();
            setContacts(data);
        }
        fetchData();
    }, []);

    return   <body>
    <main className={styles.body}>
        <div className={styles.Frame_page}>
            <div className={styles.Frame}>
                <div className={styles.Comment_frame}>
                    <form className={styles.comment_form} action="https://jsonplaceholder.typicode.com/users">
                        <textarea name="coment" className={styles.coment} 
                        maxlength="80" placeholder="Подсказывающий текст"
                        autocomplete="off"></textarea>
                        <div className={styles.otprav}>
                        <input className={styles.otprav_btn} id="btn" type="submit" name="Btn_form_otprav"
                        value="Отпаравить" formaction="https://jsonplaceholder.typicode.com/users"></input>
                        </div>
                    </form>
                </div>
                <div className={styles.comment_pole}>
                    <form action="User_coment">
                        <ul className={styles.comment_field}>
                        {contacts && contacts.map(({ id, username, email }) => (       
                            <li key={id}>
                                <div className={styles.Commentari}>
                                    <div className={styles.sam_com}>
                                    {username}({email})
                                    </div>
                                    <button className={styles.close_btn} type="submit" name="close_btn">
                                        <svg  width="26px" height="26px" viewBox="-3.2 -3.2 38.40 38.40" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">
                                            <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,
                                            0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,
                                            0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z">
                                            </path>
                                        </svg>
                                    </button>                                   
                                </div>
                            </li>
                            ))}
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </main>
</body>

}

export default Contacts;