
import { Watch } from 'react-loader-spinner';

const Loader: React.FC = () => {
    return (
        <div>
            <Watch
            visible={true}
            height="50"
            width="50"
            radius="48"
            color="#023020"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
        </div>

    );
};

export default Loader;