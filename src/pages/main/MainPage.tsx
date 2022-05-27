import { FC } from 'react';
import MainPagePopular from './Content/MainPagePopular';
import MainSlider from './Content/MainSlider';


const MainPage: FC = () => {
    return (
        <main className="content index">
            <MainSlider />
            <MainPagePopular />
        </main>
    )
}

export default MainPage;