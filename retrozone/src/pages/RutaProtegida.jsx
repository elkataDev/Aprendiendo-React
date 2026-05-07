
import Usuarios from './Usuarios';

const RutaProtegida = ({ children, esAdmin }) => {
    if (!esAdmin) {
        return <Usuarios />
    }
    return children;
};
export default RutaProtegida