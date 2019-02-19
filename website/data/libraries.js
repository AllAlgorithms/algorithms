module.exports = [
  {
    language: 'python',
    repo: 'https://github.com/abranhe/allalgorithms-java',
    url: 'https://python.allalgorithms.com',
    author: 'abranhe',
    languageLogo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.2/src/python/python.svg',
    dollar: '$',
    installation: 'install allalgorithms',
    cmd: 'pip',
    registry: 'PIP',
    registryLogo: 'pip.png',
    registryURL: 'https://pypi.org',
    navigateToPkg: 'project',
    pinned: true,
  },
  {
    language: 'java',
    repo: 'https://github.com/abranhe/allalgorithms-java',
    url: 'https://java.allalgorithms.com',
    author: 'abranhe',
    languageLogo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.2/src/java/java.svg',
    installation: `
<dependency>
  <groupId>com.abranhe.allalgorithms</groupId>
  <artifactId>allalgorithms</artifactId>
  <version>0.0.1</version>
</dependency>
    `,
    registry: 'Maven',
    registryLogo: 'maven.png',
    registryURL: 'https://search.maven.org',
    navigateToPkg: 'artifact/com.abranhe',
    pinned: true
  },
  {
    language: 'javascript',
    repo: 'https://github.com/abranhe/allalgorithms-js',
    url: 'https://js.allalgorithms.com',
    author: 'abranhe',
    dollar: '$',
    installation: 'install allalgorithms',
    cmd: 'npm',
    languageLogo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.2/src/javascript/javascript.svg',
    registry: 'NPM',
    registryLogo: 'npm.png',
    registryURL: 'https://npmjs.org',
    navigateToPkg: 'package',
    pinned: true
  },
];