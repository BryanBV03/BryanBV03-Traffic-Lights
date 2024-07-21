import React, { useEffect, useState } from "react";

const TrafficLight = () => {
    // Parte de javascrip

    //Hook useState

 //[estado en si mismo, unica funcion para cambiar el estado] = useState (asi se inicializa el estado)

    const [encender, setEncender] = useState("red")
    const [iniciar, setIniciar] = useState("false")

   

    const cambiarColor = (color) => {
        setEncender(color)
    }

    //Hook useEffect

    useEffect(() => {
        if (iniciar) {
            const interval = setInterval(() => {
                if (encender === "red") {
                    setEncender("yellow")
                } else if (encender === "yellow") {
                    setEncender("green")
                } else if (encender === "green") {
                    setEncender("red")
                }
            }, 2000)
            return () => clearInterval(interval)
        }
    }, [iniciar, encender])



    // Parte del HTML

    return (
        <main>
            <div className="p-box"></div>
            <div className="box-light">

                <div
                    className={`red ${encender === "red" ? "light-on" : ""}`}
                    onClick={() => cambiarColor("red")}
                ></div>
                <div
                    className={`yellow  ${encender === "yellow" ? "light-on" : ""}`}
                    onClick={() => cambiarColor("yellow")}
                ></div>
                <div
                    className={`green ${encender === "green" ? "light-on" : ""}`}
                    onClick={() => cambiarColor("green")}
                ></div>
            </div>
            <div onClick={() => setIniciar(!iniciar)} className="divBoton"><button className="boton"><strong>Iniciar</strong></button></div>
        </main>
    )
}
export default TrafficLight

