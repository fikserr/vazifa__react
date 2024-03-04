import { useContext } from "react";
import UserPng from  "../img/user.png";
import Work from "../img/work.png";
import { Context } from "../context/Context";





function Main() {

    const { lang } = useContext(Context);

    const rasm = [
        {
            id: 1 ,
            title: lang.adress,
            text: lang.make,
            btn: lang.see
        },
        {
            id: 2 ,
            title: lang.adress,
            text: lang.make,
            btn: lang.see
        },
        {
            id: 3 ,
            title: lang.adress,
            text: lang.make,
            btn: lang.see
        },
        {
            id: 4 ,
            title: lang.adress,
            text: lang.make,
            btn: lang.see
        },
        {
            id: 5 ,
            title: lang.adress,
            text: lang.make,
            btn: lang.see
        },
        {
            id: 6 ,
            title: lang.adress,
            text: lang.make,
            btn: lang.see
        },
        {
            id:  7,
            title: lang.adress,
            text: lang.make,
            btn: lang.see
        },
        {
            id: 8,
            title: lang.adress,
            text: lang.make,
            btn: lang.see
        },
        {
            id: 9,
            title: lang.adress,
            text: lang.make,
            btn: lang.see
        },
        
 ]

    
  return (

   
    
    <div>
        <main>
        <section className="about">
            <div className="container">
                <h2 className="about__title">{lang.aboutTwo}</h2>
                <div className="about__content">
                    <div className="about__left">
                        <img src={UserPng} alt="user"/>
                    </div>
                    <div className="about__right">
                        <p className="about__name">Зубенко Михаил Петрович</p>
                        <p className="about__text">{lang.mystory}</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="work">
            <div className="container">
                <h2 className="work__title">{lang.mywork}</h2>
                <div className="work__content">
                    {
                        rasm.map((item)=>{
                            return <div className="work__box" key={item.id}>
                                <img src={Work} alt=""  className='work__image'/>
                                <h3 className="work__name">{lang.adress}</h3>
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