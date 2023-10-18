import blog1 from '../assets/image/blog-1_540x.png'
import blog2 from '../assets/image/blog-2_540x.png'
import blog3 from '../assets/image/blog-3_540x.png'



const Blog = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="text-center">
      <h1 className="text-3xl font-light">
        “There are no ugly women, there are just the ones who <br /> don't know how to
        make them look good.” <br /> <span className="text-sm font-medium">___ SaleHub Fashion</span>
      </h1>
      </div>
      <h2 className="text-3xl font-bold text-center mt-10">FROM OUR BLOG</h2>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-3'>
        <div>
            <img src={blog1} alt="" />
            <p>20 September, 2023</p>
            <h3 className='md:text-lg lg:text-xl font-medium'>5 Sweet Outfits Ideas You'll Wear Well Beyond Valentie's Day</h3>
        </div>
        <div>
            <img src={blog2} alt="" />
            <p>10 October, 2023</p>
            <h3 className='md:text-lg lg:text-xl font-medium'>How To Be “Good With Money” According To 4 Female Financial Experts</h3>
        </div>
        <div>
            <img src={blog3} alt="" />
            <p>03 August, 2023</p>
            <h3 className='md:text-lg lg:text-xl font-medium'>This Scandi Influencer’s Shoe Collaboration Is The Gift That Keeps On Giving</h3>
        </div>

      </div>
    </div>
  );
};

export default Blog;
