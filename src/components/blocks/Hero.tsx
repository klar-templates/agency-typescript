export default function Hero(data: any) {
  const {_id, _type, show_button, show_subtitle, show_title, title, subtitle, link, link_text, style, image } = data.block;
  return (
    <div className="g-primary g-surface-variant py-16">
        <div className="g-blue-900 g-primary g-surface-variant container px-6 mx-auto">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-on-background text-2xl font-semibold uppercase lg:text-3xl">Create an account and start making your own web sites.</h1>
                        <p className="text-on-surface-variant mt-2 dark:text-gray-400">Edit everything on this site and if you like it...</p>
                        <button type="button" className="bg-primary border text-on-primary hover:drop-shadow w-full outline-offset-3 focus:outline-2 ocus:drop-shadow-lg tracking-wider px-6 py-2.5 mt-6 text-sm uppercase transition-colors duration-300 transform rounded-md lg:w-auto">Shop Now</button>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img className="w-full h-full lg:max-w-2xl" src="https://raw.githubusercontent.com/klar-templates/agency/master/img/header-bg.jpg" alt="Catalogue-pana.svg" />
                </div>
            </div>
        </div>
    </div>
  );
}