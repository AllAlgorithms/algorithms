const React = require('react');

class Categories extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  render() {
    const { config: siteConfig } = this.props;
    if ((siteConfig.algorithms || []).length === 0) {
      return null;
    }

    const categories = siteConfig.libraries.map((library) => (
      <div key={library.repo}>
        <h2>
          <img src={library.languageLogo} width='20' height='20' />{' '}
          <a href={library.url}>{library.language.charAt(0).toUpperCase() + library.language.slice(1)}</a>
        </h2>
        The All ▲lgorithms {library.language} library can be installed using{' '}
        <a href={`${library.registryURL}/${library.navigateToPkg}/allalgorithms`}>{library.registry}</a>
        <br />
        <br />
        <section className='container small center' style={{ textAlign: 'left' }}>
          <pre className='fake-term'>
            <span className='dollar'>{library.dollar}</span> <span className='cmd'>{library.cmd}</span>{' '}
            {library.installation}
          </pre>
        </section>
      </div>
    ));
    return (
      <div className='mainContainer'>
        <div className='showcaseSection categoriesSection'>
          <div className='prose'>
            <h1>All ▲lgorithms Libraries</h1>
            <p>Collection of the All ▲lgorithms libraries in multiple programming languages</p>
          </div>
          {categories}
        </div>
      </div>
    );
  }
}

module.exports = Categories;
