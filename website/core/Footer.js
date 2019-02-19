const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    const { config: siteConfig } = this.props;
    if ((siteConfig.repos || []).length === 0) return null;
    if ((siteConfig.libraries || []).length === 0) return null;
    if ((siteConfig.community || []).length === 0) return null;

    const repos = siteConfig.repos.filter((repo) => repo.pinned).map((repo) => (
      <a href={repo.link} key={repo.link}>
        <span>{repo.language.charAt(0).toUpperCase() + repo.language.slice(1)}</span>
      </a>
    ));

    const librariesDocs = siteConfig.libraries.map((library) => (
      <a href={library.url} key={library.url} target='_blank' rel='noreferrer noopener'>
        <span>{library.language.charAt(0).toUpperCase() + library.language.slice(1)}</span>
      </a>
    ));

    const communityPlatforms = siteConfig.community.filter((platform) => platform.pinned).map((platform) => (
      <a href={platform.url} key={platform.name} target='_blank' rel='noreferrer noopener'>
        {platform.name}
      </a>
    ));

    return (
      <footer className='footerSection nav-footer' id='footer'>
        <section className='sitemap'>
          <a href={this.props.config.baseUrl} className='nav-home'>
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width='66'
                height='58'
              />
            )}
          </a>
          <div>
            <h5>Implementations</h5>
            {repos}
            <a href={siteConfig.githubUrl}>More ...</a>
          </div>
          <div>
            <h5>Libraries Docs</h5>
            {librariesDocs}
            <a href={this.pageUrl('libraries')}>More ...</a>
          </div>
          <div>
            <h5>Community</h5>
            {communityPlatforms}
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href='https://www.redbubble.com/people/abranhe/works/34285088'>Stickers & T-Shirts</a>
            <a href='https://github.com/AllAlgorithms/algorithms/blob/master/.github/contributing.md'>Contributing</a>
            <a href={this.pageUrl('categories')}>Categories</a>
          </div>
        </section>

        <a href='https://tryhtml.org' target='_blank' rel='noreferrer noopener' className='fbOpenSource'>
          <img src={`${this.props.config.baseUrl}img/tryhtml.png`} alt='Powered by Tryhtml' width='170' height='45' />
        </a>
        <section className='copyright'>{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
