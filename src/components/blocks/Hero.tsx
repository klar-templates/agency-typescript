export default function Hero(data: any) {
  const {_id, _type, show_button, show_subtitle, show_title, title, subtitle, link, link_text, style, image } = data.block;
  return (
    <div className="g-surface-variant ontainer px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-2xl font-semibold text-on-surface uppercase lg:text-3xl">Best Place To Choose Your Clothes</h1>
                    <p className="mt-2 text-on-surface-variant dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    <button className="bg-primary text-on-primary w-full tracking-wider px-6 py-2.5 mt-6 text-sm uppercase transition-colors duration-300 transform rounded-md lg:w-auto hover:drop-shadow-lg focus:outline-none focus:drop-shadow-sm">Shop Now</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-2xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg" />
            </div>
        </div>
    </div>
  );
}