import React from 'react';

import ClientModule from '@gqlapp/module-client-react';
import { translate, TranslateFunction } from '@gqlapp/i18n-client-react';
import loadable from '@loadable/component';

import { Route, NavLink } from 'react-router-dom';
import { MenuItem } from '@gqlapp/look-client-react';
import resources from './locales';

const NavLinkWithI18n = translate('video-upload')(({ t }: { t: TranslateFunction }) => (
  <NavLink to="/video-upload" className="nav-link" activeClassName="active">
    {t('video-upload:navLink')}
  </NavLink>
));

export default new ClientModule({
  route: [
    <Route
      exact
      path="/video-upload"
      component={loadable(() => import('./containers/VideoUpload').then(c => c.default))}
    />
  ],
  navItem: [
    <MenuItem key="/video-upload">
      <NavLinkWithI18n />
    </MenuItem>
  ],
  localization: [{ ns: 'video-upload', resources }]
});
