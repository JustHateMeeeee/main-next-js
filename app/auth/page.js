import 'app/layout.js'
import styles from "app/page.module.css"
export default function auth() {
    return   <body> 
                <main>
                    <div className={styles.frame}>
                        <div className={styles.frame_reg}>
                            <form id="forma" class="form" action="<адрес 1>">
                            <div>
                                <h1 className={styles.forma_text}>Форма входа</h1>
                            </div>
                            <div className={styles.email}>
                                <input className={styles.pole} type="email" maxlength="30" name="Email"
                                placeholder="Login" title="Поле для Email" form="forma"></input>
                            </div>

                            <div className={styles.password}>
                                <input className={styles.pole} type="password" maxlength="20" name="Password"
                                placeholder="Password" pattern="[A-Za-z0-9]{10,}" title="Поле для пароля"
                                autocomplete="on" form="forma"></input>
                            </div>

                            <div className={styles.reg_btn}>
                                <input className={styles.reg} id="btn" type="submit" value="Зарегестрироваться" formaction="http://localhost:3000/comments" form="forma"></input>
                            </div>
                            </form>
                    </div>
                </div>
            </main>
            </body>

}