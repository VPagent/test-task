import { ReactNode } from "react"
import s from './container.module.scss'


type Props = {
    children: ReactNode
}

const Container:React.FC<Props>  = ({children}:Props) =>{

    return(
        <div className={s.container}>
            {children}
        </div>
    )
}


export default Container