import React, {FC} from 'react'
import s from './Progress.module.scss'

export const Progress: FC = () => {
    return (
        <div>
            <div className={s.progressContainer}>
                <div className={s.progressBar}/>
            </div>
        </div>
    )
}
