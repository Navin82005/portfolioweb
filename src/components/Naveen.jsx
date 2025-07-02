import logo from '../assets/icon/letter-n.png';
import { Link } from 'react-router-dom';
import { cn } from '../utils/aceternity.jsx';

const Naveen = ({ className, NSize, NHeight, NWidth, fontSize }) => {
    return <Link to="/" className={cn('flex flex-row items-start justify-start', className)}>
        <div>
            <img src={logo} height={NHeight} width={NWidth} size={NSize} alt="" />
        </div>
        <div className={`flex flex-col items-end justify-end`}>
            <span className={`text-${fontSize} font-naveen max-h-fit`}>aveen</span>
        </div>
    </Link>;
}

export default Naveen;