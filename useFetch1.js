import { useEffect,useState } from "react"


export const useFetch = (url, id) => {


    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError: null,
    })



    const getFetch = async()=>{

        setState({
            ...state,
            isLoading:true
        })
        const resp = await fetch(url);

        const dat = await resp.json();

        const data = dat.filter(elem=> elem.id === id )

        setState({
            data:data,
            isLoading:false,
            hasError:null,
        })

    }


    useEffect(()=>{
        getFetch()
    },[id])



  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}


