const NeedHelp = () => {
  return (
    <div className="text-white">
      <h1 className="text-center mt-[160px] font-bold text-[40px]">
        Need More Help?
      </h1>
      <h1 className="text-center">
        Explore, Engage, and Vote on the Latest Tech Products without the Hassle
        of Coding
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-5  md:w-[770px] w-[350px] lg:w-[1200px] mx-auto mt-[30px] md:mt-[70px] md:mb-[70px] md:ml-[10px] ml-[30px] lg:ml-[350px]">
        <div className="card card-compact w-[250px] h-[400px] rounded-none ">
          <figure>
            <img className="h-[150px]" src="https://i.ibb.co/vzvvLks/p1.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Contact Us</h2>
            <p>
              Got questions, feedback, or just want to say hello? Reach out to
              us at ByteBliz – your go-to tech product hub. Our team is here to
              assist you. Drop a mail in our official mail!
            </p>
          </div>
        </div>
        <div className="card card-compact w-[250px] h-[400px] rounded-none ">
          <figure>
            <img className="h-[150px]" src="https://i.ibb.co/1dyYLhd/p2.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Awesome Support</h2>
            <p>
              Experience unparalleled support with ByteBliz – our dedicated team
              is committed to ensuring your journey on our tech product platform
              is seamless, offering swift and responsive assistance to address
              all your needs
            </p>
          </div>
        </div>
        <div className="card card-compact w-[250px] h-[400px] rounded-none ">
          <figure>
            <img className="h-[150px] w-[250px]" src="https://i.ibb.co/7JWHMxF/p3.webp" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Office Working Hours</h2>
            <p>
              Our office working hours are Monday to Friday, from 9:00 AM to
              5:00 PM, providing dedicated support and assistance during this
              time frame
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
