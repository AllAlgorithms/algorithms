const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

class Categories extends React.Component {

  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  };

  render() {
    const { config: siteConfig } = this.props;
    if ((siteConfig.algorithms || []).length === 0) {
      return null;
    }

    const algorithmNameToId = (name) => {
      return (name.charAt(0).toLowerCase() + name.slice(1)).split(' ').join('-');
    };

    const categories = siteConfig.algorithms.map((categoriy) => (
      <details key={categoriy.category}>
        <summary>{categoriy.category}</summary>
        <ul className='algorithmsCategories' style={{ listStyleType: 'none' }}>
          {categoriy.algorithmList.map((algoritm) => (
            <li key={algoritm[0]}>
              <a href={this.docUrl(algorithmNameToId(algoritm))}>{algoritm}</a>
            </li>
          ))}
        </ul>
      </details>
    ));

    return (
      <div className='mainContainer'>
        <div className='showcaseSection categoriesSection'>
          <div className='prose'>
            <h1>Categories of Algorithms</h1>
            <p>The All ▲lgorithms Project Structure Categories</p>
          </div>
          {categories}
        </div>
      </div>
    );
  }
}

module.exports = Categories;
