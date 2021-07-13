import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
function Header() {
    return (
        <div className="sticky flex px-4 items-center shadow-md justify-between z-50">
            {/* Menu Bar */}
            <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="md:inline-flex h-20 w-20 border-0"
            >
                <Icon name="menu" size="2xl"></Icon>
            </Button>
        

            <Icon name="description" size="4xl" color="blue"></Icon>
            <h1 className="text-2xl px-2 text-gray-700">Docs</h1>
    
            
            <div className="flex flex-grow text-gray-600 bg-gray-100 focus-within:shadow-md focus-within:bg-white transition-colors rounded-md px-2 py-3 mx-5 items-center">
                <Icon name="search" size="2xl" color="gray"/>
                <input type="text" placeholder="Search" className="bg-transparent outline-none px-2 flex-grow"/>
            </div>


            <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="h-20 w-20 border-0"
            >
                <Icon name="apps" size="3xl"/>
            </Button>
            <img
            loading="lazy"
            src="images/pic.jpg"
            className="w-12 h-12 cursor-pointer rounded-full ml-2"
            />
        </div>
    )
}

export default Header;
