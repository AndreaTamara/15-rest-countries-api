import { NavBar } from '../NavBar';
import { Countries } from '../Countries';

export function HomePage({mode}) {
    return (
        <>
            <NavBar mode={mode}/>
            <Countries mode={mode}/>
        </>
    )
}