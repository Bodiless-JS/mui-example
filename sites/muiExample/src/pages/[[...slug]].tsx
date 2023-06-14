import getStaticProps from '@bodiless/next/lib/getStaticProps';
import getStaticPaths from '@bodiless/next/lib/getStaticPaths';
import PageRenderer from '@bodiless/next/lib/PageRenderer';
import _default from '../templates/_default';
import _withData from '../templates/_withData';

const Templates = {
  '_default.jsx': _default,
  '_withData.jsx': _withData,
};

export {
  getStaticProps,
  getStaticPaths
};

const Page = ({ component, ...rest }: any) => {
  const DefaultPage = Templates[component] || _default;
  return PageRenderer({
    Component: DefaultPage,
    ...rest
  });
};

export default Page;
