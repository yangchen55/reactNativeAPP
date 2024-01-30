import { createContext } from "react";
import React, { useState, useEffect, } from "react"
import { api } from "./api";
import { Alert } from "react-native";

export const ConversionContext = createContext()
const DEFAULT_BASE_CURRENCY = 'USD'
const DEFAULT_QUOTE_CURRENCY = 'GBP'


// conversionContext.Provider
// conversionContext.Consumer

export const ConversionContextProvider = ({ children }) => {
    const [baseCurrency, _setBaseCurrency] = useState("USD")
    const [quoteCurrency, setQuoteCurrency] = useState("GBP")
    const [date, setDate] = useState()
    const [rates, setRates] = useState({})
    const [isLoading, setIsLoading] = useState(true)




    const setBaseCurrency = (currency) => {
        setIsLoading(true)
        return api(`./latest?base=${currency} `)
            .then(response => {
                _setBaseCurrency(currency)
                setDate(response.date)
                setRates(response.rates)
                setIsLoading(false)
            })
            .catch(error => {
                console.log("error", error)
                Alert.alert("sorry, something went wrong", error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })


    }
    const swapCurrencies = () => {
        setBaseCurrency(quoteCurrency)
        setQuoteCurrency(baseCurrency)
    };
    const contextValue = {
        baseCurrency,
        quoteCurrency,
        swapCurrencies,
        setBaseCurrency,
        setQuoteCurrency,
        date, rates, isLoading
    }
    useEffect(() => {
        setBaseCurrency("USD")

    }, [])
    return (
        <ConversionContext.Provider value={contextValue}>
            {children}
        </ConversionContext.Provider>
    )

}

