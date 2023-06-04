import 'app/layout.js'
export default function () {
    return   <body>
    <main>
        <div class="Frame_page">
            <div class="Frame">
                <div class="Comment_frame">
                    <form class="comment_form" action="<адрес1>">
                        <textarea name="coment" id="coment" 
                        maxlength="20023123" placeholder="Подсказывающий текст"
                        autocomplete="off"></textarea>
                        <div class="otprav">
                        <input class="otprav_btn" id="btn" type="submit" name="Btn_form_otprav"
                        value="Отпаравить" formaction="<адрес1>"></input>
                        </div>
                    </form>
                </div>
                <div class="comment_pole">
                    <form action="User_coment">
                        <ul class="comment_field">
                            <li>
                                <div class="Commentari">
                                    <div class="Pre_com">
                                        <div class="User">
                                            <p class="name">Иван Пупкин</p>
                                        </div>
                                        <div class="User">
                                            <p class="time"><time>32:23</time></p>
                                        </div>
                                        <div class="User">
                                            <p class="date"><time>11.12.2012</time></p>
                                        </div>
                                    </div>
    
                                    <div class="sam_com">
                                        <p>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Explicabo expedita, at
                                        vitae sed aliquam voluptates debitis vol
                                        uptas incidunt cupiditate sit maiores! As
                                        sumenda, natus numquam nesciunt 
                                        facere laudantium officiis asperiores accusantium.
                                        </p>
                                    </div>                                    
                                </div>
                            </li>
                            <li>
                                <div class="Commentari">
                                    <div class="Pre_com">
                                        <div class="User">
                                            <p class="name">Иван Пупкин</p>
                                        </div>
                                        <div class="User">
                                            <p class="time"><time>32:23</time></p>
                                        </div>
                                        <div class="User">
                                            <p class="date"><time>11.12.2012</time></p>
                                        </div>
                                    </div>
    
                                    <div class="sam_com">
                                        <p>Lorem ipsum dolor sit, amet consectetur 
                                        adipisicing elit. Explicabo expedita, at
                                        vitae sed aliquam voluptates debitis vol
                                        uptas incidunt cupiditate sit maiores! As
                                        sumenda, natus numquam nesciunt 
                                        facere laudantium officiis asperiores accusantium.
                                        </p>
                                    </div>                                    
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </main>
</body>

}