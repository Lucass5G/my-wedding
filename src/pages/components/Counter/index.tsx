import React, {useState, useEffect} from 'react'
import {CountDownContent, Timers} from './styles'

function CountdownTimer ({targetDate}: { targetDate: Date }) {
    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentDate = new Date()
            const differenceInTime = targetDate.getTime() - currentDate.getTime()
            if (differenceInTime <= 0) {
                clearInterval(intervalId)
                return
            }
            const months = Math.floor(differenceInTime / (1000 * 60 * 60 * 24 * 30))
            const weeks = Math.floor((differenceInTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7))
            const days = Math.floor((differenceInTime % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24))
            const hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60))

            setTimeLeft({months, weeks, days, hours, minutes})
        }, 1000)
        return () => clearInterval(intervalId)
    }, [targetDate])
    return (
        <CountDownContent id="countdown">
            <h1>Contagem regressiva</h1>
            <Timers>
                <span>{timeLeft.months}</span>
                {timeLeft.months === 1 ? <p>Mês</p> : <p>Meses</p>}

                <span>{timeLeft.weeks}</span>
                {timeLeft.months === 1 ? <p>Semana</p> : <p>Semanas</p>}

                <span>{timeLeft.days}</span>
                {timeLeft.months === 1 ? <p>Dia</p> : <p>Dias</p>}

                <span>{timeLeft.hours}</span>
                {timeLeft.months === 1 ? <p>Hora</p> : <p>Horas</p>}

                <span>{timeLeft.minutes}</span>
                {timeLeft.months === 1 ? <p>Minuto</p> : <p>Minutos</p>}
            </Timers>
        </CountDownContent>
    )
}

export default CountdownTimer