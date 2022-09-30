import {Link} from "@material-ui/core";
import {useNavigate} from "react-router";


export const SideLi = ({link, name, svg}) => {

    const navigate = useNavigate()

    return <>
        <li>
            <Link
                className={'hover:cursor-pointer flex items-center p-6 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}
                onClick={() => {
                  navigate(link)
                }
                }>
                {svg}
                <span className="flex-1 ml-3 text-md whitespace-nowrap font-semibold">{name}</span>
            </Link>
        </li>


    </>
}