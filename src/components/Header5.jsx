export default function Header5({
  backgroundImage = '/images/bg-image.png',
  heading = 'Your One–Stop Solution for Custom Website Packages',
  subheading = 'Get a professionally built website in days, not weeks.',
}) {
  return (
    <section
      className={`relative bg-black bg-bottom bg-cover text-white h-screen flex items-center justify-center overflow-hidden`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Content */}
      <div className="text-center max-w-5xl px-4 sm:px-6 lg:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug md:leading-snug lg:leading-normal">
          {heading.split(' <br> ').map((line, index) => (
            <span key={index}>
              {line}
              <br className="hidden md:block" />
            </span>
          ))}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-6 sm:mt-8 md:mt-10 text-gray-300">
          {subheading}
        </p>
      </div>
    </section>
  );
}
