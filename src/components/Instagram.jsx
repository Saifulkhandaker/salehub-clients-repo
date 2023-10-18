import img1 from '../assets/image/instagram 1.png'
import img2 from '../assets/image/instagram 2.png'
import img3 from '../assets/image/instagram 3.png'
import img4 from '../assets/image/instagram 4.png'
import img5 from '../assets/image/instagram 5.png'
import img6 from '../assets/image/instagram 6.png'

const Instagram = () => {
    return (
        <div className='w-11/12 mx-auto py-10'>
            {/* content description */}
            <div className='text-center py-10'>
             <h2 className="text-3xl font-bold ">Follow us on Instagram</h2>
             <p className="text-xl text-[#D9B883] font-medium mb-2">@saleHub</p>
             <p className="text-xl">You can have anything you want in life if you dress for it. Style is a way <br /> to say who you are without having to speak.</p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-3  justify-around '>
                <img className='h-48 lg:h-60 lg:w-44 rounded-full hover:scale-75 lg:hover:scale-125' src={img1} alt="" />
                <img className='h-48 lg:h-60 lg:w-44 rounded-full hover:scale-75 lg:hover:scale-125' src={img2} alt="" />
                <img className='h-48 lg:h-60 lg:w-44 rounded-full hover:scale-75 lg:hover:scale-125' src={img3} alt="" />
                <img className='h-48 lg:h-60 lg:w-44 rounded-full hover:scale-75 lg:hover:scale-125' src={img4} alt="" />
                <img className='h-48 lg:h-60 lg:w-44 rounded-full hover:scale-75 lg:hover:scale-125' src={img5} alt="" />
                <img className='h-48 lg:h-60 lg:w-44 rounded-full hover:scale-75 lg:hover:scale-125' src={img6} alt="" />
            </div>
            
            
        </div>
    );
};

export default Instagram;