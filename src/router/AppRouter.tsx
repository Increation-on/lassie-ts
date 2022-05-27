import { FC } from 'react';
import {Routes, Route} from 'react-router-dom';
import { router } from './routes';

const AppRouter:FC = () => {
    return (
        <Routes>
            {router.map((el)=>{
                return <Route path={el.path} element={<el.Component/>}  key={el.id} />
            })}
        </Routes>
    )
}

export default AppRouter;