import React, { useContext, useEffect,  useReducer } from 'react';
import EmployeeData from '../data/EmployeeData'
import TaskData from '../data/TaskData';
import reducer from '../reducer/reducer'

const url = ""

const AppContext = React.createContext()

const initialState = {
  employees: EmployeeData,
  task: TaskData,

}

export function useGlobalContext() {
    return useContext(AppContext);
}

export default function ContextProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState)

  const addEmployee = (item) =>{
    dispatch({
        type: 'ADD_EMPLOYEE',
        payload: item
    });
  }

  const assignTask = (item) =>{
      dispatch({
          type: 'ASSIGN_TASK',
          payload: item
      });
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
    
  }
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }
  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const employees = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: employees })
  }

  const fetchData1 = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const task = await response.json()
    dispatch({ type: 'DISPLAY_ITEM', payload: task })
  }
 
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }
  useEffect(() => {
    fetchData()
    fetchData1()
  }, [])

  // useEffect(() => {
  //   dispatch({ type: 'GET_TOTALS' })
  // }, [state.employees])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
        addEmployee,
        assignTask
      }}
    >
      {children}
    </AppContext.Provider>
  )
  }
    

