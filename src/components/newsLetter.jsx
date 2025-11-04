const NewsletterSection = () => {
  return (
    <section className="py-20 px-6 bg-[#54615e]">
      <div className="container mx-auto max-w-2xl text-center space-y-8">
        <h2 className="font-cormorant text-3xl lg:text-5xl leading-tight text-white">
          GET EXCLUSIVE OFFERS,
          <br />
          EVENT UPDATES, AND INSIDER NEWS
        </h2>
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address..."
            className="bg-white text-gray-800 px-4 py-3 rounded-sm placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="bg-[#143F35] text-white hover:bg-[#143F35]/90 px-8 py-3 text-sm tracking-wider rounded-sm font-medium"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
