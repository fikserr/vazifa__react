
import UserPng from  "../img/user.png";
import Work from "../img/work.png";


const rasm = [
        {
            id: 1 ,
            title: "Chilonzor",
            text: "Fotosuratni birinchi marta Jozef Nisefor Nieps ixtiro qilgan. Bu 1822 yilda sodir bo'ldi, ammo Dager o'z ishini faqat 17 yil o'tgach nashr etdi. Jozef Niepce 1835 yilda birinchi salbiy tasvirni olishga muvaffaq bo'ldi",
            btn: "Посмотреть"
        },
        {
            id: 2 ,
            title: "Chilonzor",
            text: "Fotosuratni birinchi marta Jozef Nisefor Nieps ixtiro qilgan. Bu 1822 yilda sodir bo'ldi, ammo Dager o'z ishini faqat 17 yil o'tgach nashr etdi. Jozef Niepce 1835 yilda birinchi salbiy tasvirni olishga muvaffaq bo'ldi",
            btn: "Посмотреть"
        },
        {
            id: 3 ,
            title: "Chilonzor",
            text: "Fotosuratni birinchi marta Jozef Nisefor Nieps ixtiro qilgan. Bu 1822 yilda sodir bo'ldi, ammo Dager o'z ishini faqat 17 yil o'tgach nashr etdi. Jozef Niepce 1835 yilda birinchi salbiy tasvirni olishga muvaffaq bo'ldi",
            btn: "Посмотреть"
        },
        {
            id: 4 ,
            title: "Chilonzor",
            text: "Fotosuratni birinchi marta Jozef Nisefor Nieps ixtiro qilgan. Bu 1822 yilda sodir bo'ldi, ammo Dager o'z ishini faqat 17 yil o'tgach nashr etdi. Jozef Niepce 1835 yilda birinchi salbiy tasvirni olishga muvaffaq bo'ldi",
            btn: "Посмотреть"
        },
        {
            id: 5 ,
            title: "Chilonzor",
            text: "Fotosuratni birinchi marta Jozef Nisefor Nieps ixtiro qilgan. Bu 1822 yilda sodir bo'ldi, ammo Dager o'z ishini faqat 17 yil o'tgach nashr etdi. Jozef Niepce 1835 yilda birinchi salbiy tasvirni olishga muvaffaq bo'ldi",
            btn: "Посмотреть"
        },
        {
            id: 6 ,
            title: "Chilonzor",
            text: "Fotosuratni birinchi marta Jozef Nisefor Nieps ixtiro qilgan. Bu 1822 yilda sodir bo'ldi, ammo Dager o'z ishini faqat 17 yil o'tgach nashr etdi. Jozef Niepce 1835 yilda birinchi salbiy tasvirni olishga muvaffaq bo'ldi",
            btn: "Посмотреть"
        },
        {
            id:  7,
            title: "Chilonzor",
            text: "Fotosuratni birinchi marta Jozef Nisefor Nieps ixtiro qilgan. Bu 1822 yilda sodir bo'ldi, ammo Dager o'z ishini faqat 17 yil o'tgach nashr etdi. Jozef Niepce 1835 yilda birinchi salbiy tasvirni olishga muvaffaq bo'ldi",
            btn: "Посмотреть"
        },
        {
            id: 8,
            title: "Chilonzor",
            text: "Fotosuratni birinchi marta Jozef Nisefor Nieps ixtiro qilgan. Bu 1822 yilda sodir bo'ldi, ammo Dager o'z ishini faqat 17 yil o'tgach nashr etdi. Jozef Niepce 1835 yilda birinchi salbiy tasvirni olishga muvaffaq bo'ldi",
            btn: "Посмотреть"
        },
        {
            id: 9,
            title: "Chilonzor",
            text: "Fotosuratni birinchi marta Jozef Nisefor Nieps ixtiro qilgan. Bu 1822 yilda sodir bo'ldi, ammo Dager o'z ishini faqat 17 yil o'tgach nashr etdi. Jozef Niepce 1835 yilda birinchi salbiy tasvirni olishga muvaffaq bo'ldi",
            btn: "Посмотреть"
        },
        
 ]



function Main() {
  return (

   
    
    <div>
        <main>
        <section className="about">
            <div className="container">
                <h2 className="about__title">Обо мне</h2>
                <div className="about__content">
                    <div className="about__left">
                        <img src={UserPng} alt="user"/>
                    </div>
                    <div className="about__right">
                        <p className="about__name">Зубенко Михаил Петрович</p>
                        <p className="about__text">Я могу делать семейные портреты в студии, работать на показах мод, снимать моделей для рекламы или фотографировать на свадьбах. Отдельное направление -- съёмки предметов и еды, которые заказывают для рекламы или меню ресторанов. Я могу быть криминальным фотографом мест преступлений, охотником за знаменитостями или снимать диких животных для журналов о природе. Я востребованный специалист в новостных изданиях, работаю в паре с журналистом и могу оказаться где угодно: от гламурной вечеринки до места пожара, наводнения и даже вооруженного конфликта. Моя профессия будет востребована и в будущем, ведь 80% успеха фотографии -- это не качество техники, а профессионализм фотографа. </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="work">
            <div className="container">
                <h2 className="work__title">Мои работы</h2>
                <div className="work__content">
                    {
                        rasm.map((item)=>{
                            return <div className="work__box" key={item.id}>
                                <img src={Work} alt=""  className='work__image'/>
                                <h3 className="work__name">{item.title}</h3>
                                <p className="work__text">{item.text}</p>
                                <button className="work__button">{item.btn}</button>
                            </div>
                        })
                    }
                   
                </div>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Main