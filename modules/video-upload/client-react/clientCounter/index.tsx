import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import loadable from '@loadable/component';

import resources from './locales';
import { resolvers } from '@gqlapp/counter-common';
import ClientCounter from './containers/ClientCounter';
import CounterModule from '../CounterModule';
import { MenuItem } from '@gqlapp/look-client-react';

export default new CounterModule({
  resolver: [resolvers],
  localization: [{ ns: 'clientCounter', resources }],
  counterComponent: [<ClientCounter />],
  route: [
    <Route
      exact
      path="/video-upload"
      component={loadable(() => import('./containers/ClientCounter').then(c => c.default))}
    />
  ],
  navItem: [
    <MenuItem key="/video-upload">
      <NavLink to="/video-upload" className="nav-link" activeClassName="active" />
    </MenuItem>
  ]
});
