const FAQ = () => {
  return (
    <div className="text-white">
      <h1 className="text-center mt-[50px] font-bold text-[40px]">
        Frequently Asked Questions
      </h1>
      <div className="w-[1000px] mx-auto mt-[50px] text-black">
        <div className="collapse collapse-arrow bg-base-200 border-2 border-blue-700">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium text-blue-700">
            CAN I SELL STUFF WITH ByteBlitz
          </div>
          <div className="collapse-content">
            <p>
              ByteBliz primarily focuses on product reviews, user engagement,
              and community interaction. It doesn't facilitate direct selling of
              products. The platform is designed for users to explore, vote on
              featured products, and share insights, fostering a collaborative
              environment centered around technology. If you have specific
              selling needs, consider dedicated e-commerce platforms for
              transactions.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 border-2 border-blue-700">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-blue-700">
            WHAT IF I NEED SUPPORT?
          </div>
          <div className="collapse-content">
            <p>
              If you require support on ByteBliz, our platform offers a
              dedicated support system to address any concerns or queries you
              may have. You can reach out to our support team through the
              provided channels, such as a contact form or community forums. We
              are committed to ensuring a positive user experience and will
              assist you promptly with any issues or questions you encounter.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 border-2 border-blue-700">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-blue-700">
            DO I NEED TO KNOW HOW TO CODE?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              No coding skills are required to use ByteBliz. The platform is
              designed to be user-friendly, allowing you to explore and engage
              without the need for coding knowledge. Whether you're voting on
              products, maintaining your profile, or participating in the
              community, ByteBliz is accessible to users with various levels of
              technical expertise. Enjoy the platform without the need for
              coding skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
