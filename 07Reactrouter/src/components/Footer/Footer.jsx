function Footer(){
    return(
        <>
            <div className="flex justify-between p-4">
                <div className="w-[30%]  text-center text-3xl font-bold py-8">Your Logo</div>
                <div className="mx-8 py-8">
                        <h1 className="font-bold">Page Links</h1>
                        <ul className=" w-[40%]">
                            <li className="mx-8 my-3 font-medium">Home</li>
                            <li className="mx-8 my-3 font-medium">About</li>
                            <li className="mx-8 my-3 font-medium">Contact</li>
                        </ul>
                </div>
                <div className="mx-8 py-8">
                        <h1 className="font-bold">Follor us</h1>
                        <ul className=" w-[40%]">
                            <li className="mx-8 my-3 font-medium">GitHub</li>
                            <li className="mx-8 my-3 font-medium">LinkedIn</li>
                            <li className="mx-8 my-3 font-medium">LeetCode</li>
                        </ul>
                </div>
                
            </div>
        </>
    );
}

export default Footer;