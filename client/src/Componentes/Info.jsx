import React from 'react';
import s from './Info.module.css'

export default function Info() {

    return (
        <div className={s.containerPrincipal}>
            <h1>Copa Mundial de la Fifa</h1>
            
            <nav className={s.navbar}>
                <ul>
                <li><a href="#sec-historia">Historia</a></li>
                    <li><a href="#sec-formato">Formato</a></li>
                    <li><a href="#sec-campeones">Campeones</a></li>
                    <li><a href="#sec-qatar">Qatar2022</a></li>
                    <li><a href="#sec-estadios">Estadios</a></li>
                    <li>Tienda</li>
                </ul>
            </nav>

            <section className={s.secHistoria} id='sec-historia'>
                <p>La <b>Copa Mundial de la FIFA</b>, también conocida como Copa Mundial de Fútbol, Copa del Mundo o simplemente Mundial, cuyo nombre original fue Campeonato Mundial de Fútbol, es el principal torneo internacional oficial de fútbol masculino a nivel de selecciones nacionales en el mundo
                </p>

                <p><b>Este evento deportivo se realiza cada cuatro años desde 1930, con la excepción de 1942 y 1946, en los que se suspendió respectivamente debido al desarrollo y las consecuencias de la Segunda Guerra Mundial.</b>  Cuenta con dos etapas principales: un proceso clasificatorio en el que participan en la actualidad cerca de 200 selecciones nacionales y una fase final realizada cada cuatro años en una sede definida con anticipación en la que participan 32 equipos (48 a partir de la edición de 2026) durante un periodo cercano a un mes. El balón oficial es fabricado por la compañía alemana de equipamiento deportivo Adidas.</p>

                <p>La fase final del torneo es el evento deportivo de una sola disciplina más importante del mundo (la final de la Copa Mundial de Fútbol de 2002 fue vista por más de 1100 millones de personas), y el segundo más importante a nivel general después de los Juegos Olímpicos.</p>

                <p><b>La primera Copa Mundial de Fútbol se inauguró el 13 de julio de 1930 en el Estadio Centenario de Uruguay</b> y contó con la participación de trece países: siete de Sudamérica, cuatro de Europa y dos de Norteamérica. Cabe resaltar que esta es la única edición en la que no se llevó a cabo un proceso de clasificación y, a manera anecdótica, los combinados de Francia y Estados Unidos ganaron los primeros dos partidos realizados de manera simultánea, y Lucien Laurent anotó el primer gol en este tipo de competiciones. La final se disputó el 30 de julio y Uruguay se alzó con el triunfo tras derrotar por 4:2 a Argentina.</p>

                <p>La Copa Mundial de Fútbol en la actualidad consta de dos etapas: una fase clasificatoria y una ronda final, considerada esta última usualmente como el evento en sí mismo. El número de participantes en esta ronda final ha variado con el paso de los años: 16 participantes hasta 1978 (a excepción de los mundiales de 1930 y 1950 con 13 participantes cada uno, y el de 1938 con 15), 24 entre 1982 y 1994, 32 desde 1998, y eventualmente serán 48 a partir de 2026.</p>
            </section>

            <hr color='#D2001A' width= "70%"/>

            <section className={s.secFormato} id='sec-formato'>
                <h3>Fase de Clasificatoria:</h3>

                <p>La fase clasificatoria se ha disputado desde 1934. En ella, las selecciones nacionales que desean participar en el torneo se enfrentan en una serie de encuentros llamada <b>Eliminatorias</b>. Para ello, las asociaciones de fútbol que dirigen estas selecciones deben ser miembros plenos tanto de la FIFA como de alguna de las seis confederaciones continentales existentes en la actualidad.</p>

                <p>Cada una de estas confederaciones organizan un sistema de elección de sus representantes a través de encuentros deportivos. El número de representantes de cada confederación es definido previamente por la FIFA a través de la entrega de cupos, algunos de los cuales son completos equivalentes a un equipo en la fase final y otros son compartidos, en los que un equipo debe definir su clasificación a la ronda final ante un representante de otra confederación en un proceso denominado generalmente repechaje, repesca o play-offs.</p>

                <p>A estos cupos se suma el equipo del país organizador del torneo, que desde los orígenes del torneo (a excepción de 1934) ha tenido ese derecho. Los equipos campeones del torneo previo deben en la actualidad participar del proceso clasificatorio, aunque tuvieron el derecho de clasificación automática entre 1938 y 2002.</p>
            </section>

            <hr color='#D2001A' width= "70%"/>

            <section className={s.secCampeones} id='sec-campeones'>
                <h3>Paises Ganadores del Mundial:</h3>
                <div className={s.divImg}>
                </div>
            </section>

            <hr color='#D2001A' width= "70%"/>

            <section className={s.secQatar} id='sec-qatar' >
                <h3>Mundial Qatar 2022:</h3>

                <p><b>El Mundial de Qatar será entre el 21 de noviembre al 18 de diciembre de 2022</b>. En versiones anteriores se competía entre junio y julio, pero en esta época Qatar puede superar los 40 grados centígrados, así que el evento se realizará al finalizar el año cuando la temperatura promedio es de 20 grados.</p>

                <ul>
                    <li><p><b>Partido inaugural: el 21 de noviembre de 2022</b> se disputará el partido inaugural de la Copa Mundial en el estadio Al Bayt con capacidad para 60.000 espectadores, la selección anfitriona de Qatar abrirá el torneo frente a un rival todavía por definir.</p></li>
                    <li><p><b>Fase de grupos: del 21 de noviembre al 2 de diciembre comenzará la fase de grupos</b>,  durará 12 días y tendrá 4 partidos por día para que los equipos se puedan recuperar.</p></li>
                    <li><p><b>Octavos de final</b> se disputarán del <b>3 al 6 de diciembre</b></p></li>
                    <li><p><b>Cuartos de final</b> se realizarán el <b>9 y 10 de diciembre</b></p></li>
                    <li><p><b>Semifinal:</b> está prevista para el <b>13 y 14 de diciembre</b></p></li>
                    <li><p><b>La Gran Final</b>: el día en el que se conocerá al gran campeón de uno de los eventos deportivos más importantes del mundo será el <b>18 de diciembre</b> en el estadio Lusail con capacidad para 80.000 espectadores,</p></li>
                </ul>

                <div className={s.imgGrupos}>

                </div>

            </section>

            <hr color='#D2001A' width= "70%"/>

            <section className={s.secEstadios} id='sec-estadios'>
                <h3>Estadios Qatar 2022:</h3>

                <p><b>En total serán 8 estadios donde se disputarán los partidos</b> de este importante evento, los organizadores aseguran que hay sólo una hora de diferencia entre cada estadio.
                Los estadios se encuentran muy próximos unos a otros, así que esto facilitará la movilidad entre los aficionados para disfrutar al máximo el torneo.
                Según señalo la FIFA, los aficionados podrán ver en directo en el mismo día, más de un partido de la fase de grupos.
                </p>

                <ul>
                    <li><p><b>Estadio Nacional de Lusail(Lusail):</b> 86.250 espectadores.</p> </li>
                    <li><p><b>Estadio Ciudad de la Educación (Al-Rayyan):</b> 43.350 espectadores.</p></li>
                    <li><p><b>Estadio Internacional Khalifa (Doha): </b>50.000 espectadores.</p></li>
                    <li><p><b>Estadio Al Bayt (Jor):</b> 60.000 espectadores</p></li>
                    <li><p><b>Estadio Al Thumama (Doha):</b> 40.000 espectadores</p></li>
                    <li><p><b>Estadio Al-Rayyan (Rayyan):</b> 21.000 espectadores</p></li>
                    <li><p><b>Estadio Ras Abu Aboud (Doha):</b> 48.000 espectadores</p></li>
                    <li><p><b>Estadio Al Janoub (Al Wakrah):</b> 40.000 espectadores</p></li>
                </ul>

            </section>

        </div>
    )
}

