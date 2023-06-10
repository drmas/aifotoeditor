export const Header = ({ credit }: { credit?: number }) => (
  <header className="border border-b-gray-300 bg-white shadow-sm">
    <div className="mx-auto flex items-center gap-2 px-4   py-3 lg:px-8">
      <img src="/images/logo.png" alt="AIFotoEditor Logo" className="h-12" />
      <img src="/images/logo.svg" alt="AIFotoEditor Logo" className="h-8" />
      <div className="flex-1"></div>
      <div className="flex items-center gap-2">
        <a
          href="/more-credit"
          className="text-gray-600 underline transition-colors duration-200 hover:text-gray-900"
        >
          Get More Credit
        </a>
        <img src="/images/coin.svg" alt="Coin" className="h-6" />
        {credit}
      </div>
    </div>
  </header>
);
