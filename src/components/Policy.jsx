import policy1 from '../assets/image/policy1.png'
import policy2 from '../assets/image/policy2.png'
import policy3 from '../assets/image/policy3.png'

const Policy = () => {
    return (
        <div className="w-11/12 mx-auto py-10 mt-5 text-center">
            <div className='grid grid-cols-1 gap-4 md:gap-0  md:grid-cols-3 '>
                <div className='flex flex-col items-center'>
                    <img className='mb-4' src={policy1} alt="" />
                    <p className='md:text-base text-sm font-bold'>30 DAYS RETURN</p>
                    <p className='md:text-sm text-xs font-medium '>Simply return it within 30 days for an exchange.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='mb-4' src={policy2} alt="" />
                    <p className='md:text-base text-sm font-bold'>FREE US DELIVERY</p>
                    <p className='md:text-sm text-xs font-medium '>On orders over $200!</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='mb-4' src={policy3} alt="" />
                    <p className='md:text-base text-sm font-bold'>SUPPORT 24/7</p>
                    <p className='md:text-sm text-xs font-medium '>Contact us 24 hours a day, 7 days a week</p>
                </div>
            </div>
            
        </div>
    );
};

export default Policy;