import { FiStar } from 'react-icons/fi';
import { BsShareFill } from 'react-icons/bs';
import { FiBookmark } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive'
import { useEffect} from 'react';
import store from '../../globalState/state';
import {Item} from '../../globalState/state'

type Props = {
    inSingle?: boolean,
    handler?: Function,
    isAdded?: boolean,
    id: Item["id"]
    
}

const ControlsSingle:React.FC<Props> = ({inSingle, id}) => {
    const isDesktop = useMediaQuery({query: '(min-width: 1200px)'})
    const [added, setAdded] = store.useGlobalState('added');
    const isAdded = added?.some(elem => elem === id)
    const storage = JSON.parse(localStorage.getItem("added"))

    useEffect(() => {
        if(storage?.length <= 0){
            localStorage.setItem("added", JSON.stringify(added))
        }
        if(storage?.length > 0){
            setAdded(JSON.parse(localStorage.getItem("added")))
        }
    }, [])

    useEffect(() => {
        if(added){
            localStorage.setItem("added", JSON.stringify(added))
        }
    }, [added])

    const handleClickAdd = () => {
        if(isAdded){
            setAdded(prev => prev.filter(elem => elem !== id))
            return
        }
        if(added){
            setAdded(prev => [...prev, id])
        }
        if(!added){
            setAdded([id])
        }
    }
    return(
        <div className={`flex ${!isDesktop && "pt-[24px] pb-[32px]"} ${!inSingle && "ml-auto"}`}>
            <span onClick={handleClickAdd} className={`flex items-center ${inSingle ? "mr-9" : "mr-0"}`}>
                {inSingle && (isDesktop ?
                    <FiBookmark 
                        color='#70778B' 
                        fill={isAdded ? '#70778B' : 'transparent'} 
                        size={20} 
                        className='mr-[11px] lg:mr-[8px]'
                    /> 
                    : <FiStar 
                        className='mr-[11px]'
                        fill={isAdded ? '#FFFF00' : 'transparent'}
                    />)}
                {isDesktop && !inSingle && 
                    <FiBookmark 
                        color='#70778B' 
                        fill={isAdded ? '#70778B' : 'transparent'}
                        size={20}
                    />}
                {inSingle && "Save to my list"}
            </span>
            {inSingle && 
            <span className='flex items-center'>
                <BsShareFill 
                    color='#70778B' 
                    className='mr-[11px] lg:mr-[8px]'
                />
                Share
            </span>}           
        </div>
    )
}


export default ControlsSingle