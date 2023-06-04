import 'app/layout.js'
export default function auth() {
    return   <body> 
                <main>
                    <div class="frame">
                        <div class="frame_reg">
                            <form id="forma" class="form" action="<адрес 1>">
                                <div>
                                    <h1 class="forma_text">Форма входа</h1>
                                </div>
                            <div class="email">
                                <input class="pole" type="email" maxlength="30" name="Email"
                                placeholder="Login" title="Поле для Email" form="forma"></input>
                            </div>

                            <div class="password">
                                <input class="pole" type="password" maxlength="20" name="Password"
                                placeholder="Password" pattern="[A-Za-z0-9]{10,}" title="Поле для пароля"
                                autocomplete="on" form="forma"></input>
                            </div>

                            <div class="reg_btn">
                                <input class="reg" id="btn" type="submit" value="Зарегестрироваться" formaction="<адрес 1>" form="forma"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            </body>

}