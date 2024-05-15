import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

    const { pathname } = useLocation();
    
    const navigate = useNavigate()

    return (
        <header className='fixed z-50 w-full h-24 px-8 py-4 flex justify-center items-center'>
            <section className='w-full h-full px-5 rounded-lg bg-slate-500 bg-opacity-10 backdrop-blur flex justify-between items-center'>
                <div className='w-1/4 hidden md:block'>
                    {
                        pathname != '/' &&
                        <NavLink to='/' className='text-cyan-700 font-medium text-lg'>
                            <p className='text-sm md:text-base'>
                                Back to Home
                            </p>
                        </NavLink>
                    }
                </div>
                <div className='w-1/4 flex justify-end items-center gap-8'>
                    {
                        pathname == '/' &&
                        <button className="bg-cyan-700 hover:bg-cyan-800 text-white font-medium py-2 px-3 rounded-xl" onClick={() => navigate('/addproduct')}>
                            <p className='text-sm md:text-base'>
                                Add Product
                            </p>
                        </button>
                    }
                    {
                        <div className="h-10 w-10 rounded-full  bg-slate-500 flex justify-center items-center cursor-pointer hover:bg-red-700">
                            <p className='font-medium text-white'>
                                JM
                            </p>
                        </div>
                    }
                </div>
            </section>
        </header>
    )
}

export default Header
