import * as React from 'react';
import * as Scrivito from 'scrivito';
import Helmet from 'react-helmet';

class Snipcart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSnipcartInstalled: false,
    };
  }

  componentDidMount() {
    Scrivito.load(() => getSnipcartKey()).then(snipcartKey => {
      if (snipcartKey) {
        this.setState({ isSnipcartInstalled: true });
      }
    });
  }

  render() {
    if (!this.state.isSnipcartInstalled) {
      return null;
    }

    return (
      <Helmet>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" id="snipcart" data-api-key={ `${getSnipcartKey()}` }></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" type="text/css" rel="stylesheet" />
      </Helmet>
    );
  }
}

function getSnipcartKey() {
  const rootPage = Scrivito.Obj.root();

  if (!rootPage) {
    return;
  }

  return rootPage.get('snipcartApiKey');
}

export default Scrivito.connect(Snipcart);
