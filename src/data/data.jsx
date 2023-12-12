// import icons
import { 
    FaArchive, FaBars, FaBuilding, FaClock,  FaCuttlefish, 
    FaFileArchive, FaMale, FaMoneyBill, FaPowerOff, 
    FaRegFile, FaSearch, FaTachometerAlt, FaTasks, FaUserCircle
} from 'react-icons/fa'


// import Arrays Sidebar
export const sidebarTitle = [
    {logo:'/images/logo.png', title:'Tech Solutions'},
]
export const sidebarMenu_adm = [
    {name:'Área administrativa', path:'/', icon: <FaTachometerAlt />},
    {name:'Lojas', path:'/', icon: <FaBuilding />},
    {name:'Produtos', path:'/', icon: <FaArchive />},
    {name:'Categorias', path:'/', icon: <FaBars />},
    {name:'Pedidos', path:'/', icon: <FaCuttlefish />},
    {name:'Área administrativa', path:'/', icon: <FaTachometerAlt />},
]
export const sidebarMenu_use = [
    {name:'Administradores', path:'/', icon: <FaMale />},
    {name:'Usuários', path:'/', icon: <FaUserCircle />},
    {name:'Pagamentos e custos', path:'/', icon: <FaMoneyBill />},
    {name:'A plataforma', path:'/', icon: <FaTasks />},
    {name:'Politica de privacidade', path:'/', icon: <FaRegFile />},
]
export const Log_off = [{name:'Log out', path:'/', icon: <FaPowerOff />}]

// import Arrays Navbar
export const navbar = [
    {icon: <FaSearch />, path:'/'},
    {icon: <FaClock />, path:'/'},
]

// import Arrays Navbar
export const main = [
    {icon: <FaFileArchive className='text-lightblue'/>, title:'Números de pedidos', desc:'654'},
    {icon: <FaMoneyBill className='text-red'/>, title:'Pagamentos', desc:'R$2.467'},
    {icon: <FaArchive className='text-yellow'/>, title:'Numeros de produtos', desc:'467'},
    {icon: <FaBars className='text-green'/>, title:'Categorias', desc:'30'},
]

// {avatar_Login:'/', path:'/'},









