import React, {
  createContext,
  useState
} from 'react'

export const AppContext = createContext({})

export const AppProvider = ({children}) => {

  const [authenticated, setAuthenticated] = useState()
  const [currentUser, setCurrentUser] = useState()
  const [token, setToken] = useState()

  const [alert, setAlert] = useState()

  const [isLoading, setIsLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)


  const value = {
    currentUser,
    setCurrentUser,

    authenticated,
    setAuthenticated,

    token,
    setToken,

    alert,
    setAlert,

    isLoading,
    isLoaded,

    setIsLoaded,
    setIsLoading
  }

  return(
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  )
}
