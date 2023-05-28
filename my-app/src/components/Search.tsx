import s from '../styles/Search.module.css'
import {Dispatch, FC, SetStateAction, useState} from "react";
import {NavLink} from "react-router-dom";
import cross from '../img/cross-svgrepo-com.svg'

const sections = [
  'Лабораторный корпус',
  'Конгресс центр',
  'Главный корпус',
  'Музей истории электросвязи',
  'Дисит',
  'Библиотечный корпус',
  'УЛК'
]

const Search: FC<IProps> = ({visible, setVisible}) => {
  const [value, setValue] = useState('')

  const mouseClick = (e: any) => {
    if (e.target === e.currentTarget) {
      setVisible(!visible)
    }
  }

  return (
    <>
      {visible ? <div className={s.wrapper} onClick={(e) => mouseClick(e)}>
        <input className={s.input} type={'text'} placeholder={'Поиск...'} onChange={(e) => setValue(e.target.value.toLowerCase())}/>
        <ul className={s.ul}>
          {
            sections.filter(section => section.match(new RegExp(value, "i"))).map(section => {
              return <li className={s.li} key={section}>
                <NavLink to={`/about/${section}`}  onClick={() => setVisible(!visible)}>
                  {section}
                </NavLink>
              </li>
            })
          }
        </ul>
      </div>
        : null}
    </>
  );
};

interface IProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export default Search;
