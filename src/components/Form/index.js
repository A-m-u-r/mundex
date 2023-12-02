import React from "react";

function Form(){
    return (
        <div className="form-wrapper">
            <h1>Предложить мероприятие</h1>
            <form action="" method="POST">
                <div className="user-info">
                    <label>
                        <p>Ф.И.О</p>
                        <input type="text"/>
                    </label>
                    <label>
                        <p>Номер телефона</p>
                        <input type="text"/>
                    </label>
                    <label>
                        <p>Ссылка на профиль в VK или Telegram</p>
                        <input type="text"/>
                    </label>

                    <label>
                        <p>Название организации</p>
                        <input type="text"/>
                    </label>
                </div>

                <div className="event-info">
                    <div className="event-info">
                        <label>
                            <p>Название мероприятия</p>
                            <input type="text"/>
                        </label>
                        <label>
                            <p>Тип мероприятия</p>
                            <input type="text"/>
                        </label>
                        <label>
                            <p>Дата и время мероприятия</p>
                            <input type="text"/>
                        </label>
                        {/* этого нет в дизайне */}
                        <label>
                            <p>Место проведения мероприятия</p>
                            <input type="text"/>
                        </label>
                    </div>
                    <div className="event-photo">
                        {/* форма для загрузки изображения */}
                    </div>
                </div>
                <label>
                    <p>Описание мероприятия</p>
                    <textarea></textarea>
                </label>
                <input type="submit" value="Предложить мероприятие"/>
            </form>
        </div>
    )
}

export default Form;