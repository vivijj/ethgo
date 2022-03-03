export default {
    projectLink: 'https://github.com/umbracle/ethgo', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/umbracle/ethgo/blob/master/website', // base URL for the docs repository
    titleSuffix: ' – Ethgo',
    nextLinks: true,
    prevLinks: true,
    search: false,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: `Powered by Umbracle`,
    footerEditLink: `Edit this page on GitHub`,
    floatTOC: true,
    logo: (
        <>
          <span className="mr-2 font-extrabold hidden md:inline">Ethgo</span>
          <span className="text-gray-600 font-normal hidden md:inline">
            Go Ethereum SDK
          </span>
        </>
    ),
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Ethgo: the next docs builder" />
            <meta name="og:title" content="Ethgo: the next docs builder" />
        </>
    ),
}