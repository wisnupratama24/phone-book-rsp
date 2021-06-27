import { SideImage } from ".."


const WrapperAuth = (props:any) => {
    const { title, errorMessage } = props;
    return (
        <div className="flex m-auto p-auto h-screen w-screen justify-center items-center">
            <div className="flex-1 lg:block hidden ">
                <SideImage/>
            </div>
            <div className="flex-1">
                <div className="text-center">
                    <h3 className="text-3xl font-medium uppercase text-black">{title}</h3>
                    <div className="lg:w-3/5 w-4/5 mx-auto my-5">
                        {
                            errorMessage && <div className="my-5 py-2 rounded-sm text-red-500 w-auto"> {errorMessage} </div>
                        } 
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WrapperAuth
