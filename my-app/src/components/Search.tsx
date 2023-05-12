import s from '../styles/Search.module.css'
import {useState} from "react";

const sections = ['лабораторный корпус', 'конгресс центр', 'главный корпус', 'музей истории электросвязи', 'дисит', 'библиотечный корпус', 'улк(учебно-лабораторный корпус)']

const Search = () => {
  const [value, setValue] = useState('');
  return (
    <div className={s.wrapper}>
      <input className={s.input} type={'text'} placeholder={'Поиск...'} onChange={(e) => setValue(e.target.value.toLowerCase())}/>
      <ul className={s.ul}>
        {
          sections.filter(section => section.match(new RegExp(value, "i"))).map(section => {
            return <li className={s.li} key={section}>
              {section}
            </li>
          })
        }
      </ul>
    </div>
  );
};

export default Search;
