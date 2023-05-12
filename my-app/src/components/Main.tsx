import styles from '../styles/Main.module.css'
import cn from 'classnames';
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";

// @ts-ignore
// @ts-ignore
// @ts-ignore
const Main = () => {
  const [activeId, setActiveId] = useState<null | number>(null);
  const handleMouseEnter = (id: number) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(null);
  };


  const activeSectionButton = (id: number,  style1: any) => activeId ? activeId === id ? style1 : styles.greyBG : style1

  return (
    <div className={styles.wrapper}>
      <svg width="583" height="761" viewBox="0 0 583 761" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_77_201)" >
          {/*лаборатория*/}
          <Link to={'/about/Лабораторный корпус'}>
            <g id='1' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
              <path d="M560.6 567.903H504.943L511.127 579.987H569.595L560.6 567.903Z" fill={activeId ? (activeId === 1 ? '#86C66F' : '#585858') : '#86C66F'} />
              <path d="M569.594 579.987H511.127L512.251 750H571L569.594 579.987Z"  fill={activeId ? (activeId === 1 ? '#A2E48A' : '#878787') : '#A2E48A'}/>
              <path d="M512.251 750L505.786 723.023L504.943 567.903L511.127 579.987L512.251 750Z" fill={activeId ? (activeId === 1 ? '#719A62' : '#585858') : '#719A62'}/>
            </g>
            </Link>
          {/*конгресс*/}
          <Link to={'/about/Конгресс центр'}>
            <g id='2' onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
              <path d="M248.303 132.051L253.925 114.909L258.704 123.059L252.801 139.638L248.303 132.051Z" fill={activeId ? (activeId === 2 ? '#C582AA' : '#585858') : '#C582AA'} />
              <path d="M159.478 106.76L158.072 101.702L236.779 127.836L235.092 132.894L159.478 106.76Z"  fill={activeId ? (activeId === 2 ? '#BC83A5' : '#585858') : '#BC83A5'} />
              <path d="M189.274 7L158.072 101.702L248.585 131.77L280.348 35.9444L189.274 7Z" fill={activeId ? (activeId === 2 ? '#ffb4e1' : '#878787') : '#ffb4e1'}/>
              <path d="M281.754 39.5976L280.348 35.9444L279.224 38.7545L281.754 39.5976Z" fill={activeId ? (activeId === 2 ? '#C582AA' : '#878787') : '#C582AA'} />
            </g>
          </Link>
          <path d="M505.505 687.615L508.878 690.706L461.092 691.549V687.615H505.505Z" fill="#585858"/>
          <path d="M508.878 722.742H461.092V691.542L508.878 690.706V722.742Z" fill="#878787"/>
          {/*гл. корпус*/}
          <Link to={'/about/Главный корпус'}>
            <g id="3" onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
              <path d="M179.997 638.156L188.43 632.255L209.231 685.929L461.092 684.243L461.373 695.764L202.485 696.607L179.997 638.156Z" fill={activeId ? (activeId === 3 ? '#BFA27F' : '#585858') : '#BFA27F'}/>
              <path d="M139.52 254.854L148.796 258.788L72.9005 493.434L124.06 538.678L114.502 545.703L60.2512 496.244L139.52 254.854Z" fill={activeId ? (activeId === 3 ? '#BFA27F' : '#585858') : '#BFA27F'}/>
              <path d="M238.746 735.668L231.719 744.379V727.519H238.746V735.668Z"  fill={activeId ? (activeId === 3 ? '#BFA27F' : '#585858') : '#BFA27F'}/>
              <path d="M31.5796 454.935L19.4925 458.87L36.6393 464.209L39.1691 457.465L31.5796 454.935Z"  fill={activeId ? (activeId === 3 ? '#BFA27F' : '#585858') : '#BFA27F'}/>
              <path d="M53.2239 383.558L43.3856 385.244L60.8134 390.864L62.7811 385.806L53.2239 383.558Z" fill={activeId ? (activeId === 3 ? '#BFA27F' : '#585858') : '#BFA27F'}/>
              <path d="M312.674 735.106L308.458 744.38L308.177 727.238H312.674V735.106Z" fill={activeId ? (activeId === 3 ? '#BFA27F' : '#585858') : '#BFA27F'}/>
              <path d="M179.997 727.8L154.137 658.951L88.6418 566.217L22.8657 506.361L6 500.741L19.4925 458.87L36.0771 463.928L49.5696 427.958L31.5796 421.495L43.3856 385.244L60.5323 390.583L73.7438 353.209L56.3159 347.307L68.1219 310.775L84.9876 315.272L96.2313 282.393L79.0846 275.93L91.4527 238.836L139.52 254.854L60.5323 496.525L114.502 545.422L308.6 408.494L373.672 500.741L180.56 638.437L202.485 695.764H380.137H395.316H461.373V744.379H417.241V726.957H385.759V744.379H340.502V727.8H308.458V744.379H264.045V727.8H231.719V744.379H179.997V727.8Z"  fill={activeId ? (activeId === 3 ? '#FFD4A1' : '#878787') : '#FFD4A1'}/>
            </g>
          </Link>
          {/*музей*/}
          <Link to={'/about/музей'}>
            <g id="4" onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
              <path d="M376.201 643.215L380.137 695.764H395.316L390.818 639.562L447.599 621.858L445.07 614.832L428.204 563.407L338.254 590.665L357.087 649.397L376.201 643.215Z" fill={activeId ? (activeId === 4 ? '#B0434A' : '#878787') : '#B0434A'}/>
              <path d="M340.784 586.45L338.254 590.665L428.204 563.407L425.112 560.316L340.784 586.45Z" fill={activeId ? (activeId === 4 ? '#782F33' : '#878787') : '#782F33'}/>
            </g>
          </Link>
          {/*дисит*/}
          <Link to={'/about/ДИСиТ'}>
            <g id="5" onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
              <path d="M214.853 402.948L216.54 474.045L229.189 465.052L227.784 385.806L264.607 328.761L227.784 305.717L174.094 388.897L209.512 411.66L214.853 402.948Z" fill={activeId ? (activeId === 5 ? '#F19E9E' : '#878787') : '#F19E9E'} />
              <path d="M215.134 414.47C213.448 413.533 209.737 411.884 209.512 411.66L214.853 402.948L215.134 414.47Z" fill={activeId ? (activeId === 5 ? '#AE6E6E' : '#585858') : '#AE6E6E'} />
              <path d="M227.502 386.087L229.189 464.49L234.249 460.837L233.124 383.558L267.418 329.322H264.326L227.502 386.087Z" fill={activeId ? (activeId === 5 ? '#AE6E6E' : '#585858') : '#AE6E6E'} />
            </g>
          </Link>
          <path d="M124.06 212.983L113.097 245.862L128.557 251.201L140.082 218.041L124.06 212.983Z" fill="#878787"/>
          <path d="M140.082 218.041L128.557 251.201L134.179 253.168L143.174 226.191L140.082 218.041Z" fill="#585858"/>
          {/*библиотека*/}
          <Link to={'/about/Библиотека'}>
            <g id="6" onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
              <path d="M241.838 250.639L100.448 205.396L120.405 149.474L260.953 194.155L241.838 250.639Z" fill={activeId ? (activeId === 6 ? '#8CA5FF' : '#878787') : '#8CA5FF'}/>
              <path d="M143.174 226.191L140.082 218.041L242.119 250.358L256.736 262.16L143.174 226.191Z"  fill={activeId ? (activeId === 6 ? '#50619D' : '#585858') : '#50619D'}/>
              <path d="M241.838 250.358L260.953 194.155L274.445 210.735L256.455 261.879L241.838 250.358Z"  fill={activeId ? (activeId === 6 ? '#6279CC' : '#686868') : '#6279CC'}/>
              <path d="M114.502 212.983L100.448 205.396L124.06 212.983L123.216 216.074L114.502 212.983Z" fill={activeId ? (activeId === 6 ? '#50619D' : '#585858') : '#50619D'}/>
            </g>
          </Link>
          {/*улк*/}
          <Link to={'/about/УЛК'}>
            <g id="7" onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>
              <path d="M435.231 90.7421L414.711 148.912V175.046L434.388 122.778L435.231 90.7421Z" fill={activeId ? (activeId === 7 ? '#EAE7A5' : '#585858') : '#EAE7A5'}/>
              <path d="M435.231 90.4611L258.985 32.0102L238.746 89.899L414.711 148.912L435.231 90.4611Z" fill={activeId ? (activeId === 7 ? '#FFFCA9' : '#585858') : '#FFFCA9'}/>
              <path d="M258.704 123.059L238.746 89.899L414.712 148.912V175.046L258.704 123.059Z" fill={activeId ? (activeId === 7 ? '#D9D690' : '#585858') : '#D9D690'}/>
            </g>
          </Link>
          <path d="M253.363 137.952L237.06 186.567L231.157 184.881L248.585 131.77L251.115 134.861L253.363 137.952Z" fill="#585858"/>
          <path d="M160.04 105.636L142.612 156.78L158.353 161.557L174.657 110.694L160.04 105.636Z" fill="#878787"/>
          <path d="M218.789 181.228L236.779 127.555L248.585 131.77L231.157 185.163L218.789 181.228Z" fill="#878787"/>
          <path d="M163.694 163.244L158.353 161.557L174.657 110.694L179.435 113.785L163.694 163.244Z" fill="#585858"/>
        </g>
        <defs>
          <filter id="filter0_d_77_201" x="0" y="0" width="583" height="761" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="3" dy="2"/>
            <feGaussianBlur stdDeviation="4.5"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0125 0 0 0 0 0.0125 0 0 0 0 0.0125 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_77_201"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_77_201" result="shape"/>
          </filter>
        </defs>
      </svg>
      <div className={styles.buttonList}>
        <NavLink to={'/about/Лабораторный корпус'} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave} className={cn(styles.button, activeSectionButton(1, styles.labor))} >Лабораторный корпус</NavLink>
        <NavLink to={'/about/Конгресс центр'}  onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave} className={cn(styles.button, activeSectionButton(2, styles.kongress)) }>Конгресс центр</NavLink>
        <NavLink to={'/about/Главный корпус'} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave} className={cn(styles.button,  activeSectionButton(3, styles.glavniy))}>Главный корпус</NavLink>
        <NavLink to={'/about/Музей истории электросвязи'}  onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave} className={cn(styles.button, activeSectionButton(4, styles.museum))}>Музей истории электросвязи</NavLink>
        <NavLink to={'/about/ДИСиТ'} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave} className={cn(styles.button, activeSectionButton(5, styles.disit))}>ДИСиТ</NavLink>
        <NavLink to={'/about/Библиотечный корпус'} onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave} className={cn(styles.button, activeSectionButton(6, styles.library))}>Библиотечный корпус</NavLink>
        <NavLink to={'/about/УЛК'} onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave} className={cn(styles.button,  activeSectionButton(7, styles.ulk))}>УЛК</NavLink>
      </div>
    </div>
  );
};

export default Main;
