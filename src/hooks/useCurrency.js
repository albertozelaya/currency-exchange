import { useState } from 'react'
import banhcafeAPI from '../api/banhcafeAPI'


export const useCurrency = () => {

  // Estado para almacenar la tasa de cambio
    const [exchangeRate, setExchangeRate] = useState(null)

    // Función asincrónica para obtener la tasa de cambio desde la API
    const startGetCurrencyExchange = async () => {
      // Realiza una solicitud GET a la ruta "/exchangerate" de la API
        try {
            const {data} = await banhcafeAPI.get("/exchangerate")
            setExchangeRate(data)
        } catch (error) {
            console.log(error)
        }
    }    

  return {
    exchangeRate,
    startGetCurrencyExchange
  }
}
