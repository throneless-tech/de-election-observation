import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix, markdownify} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post page post-full">
                <header className="post-header inner-sm">
                  <h1 className="post-title underline">{_.get(this.props, 'page.title', null)}</h1>
                  {_.get(this.props, 'page.subtitle', null) && (
                  <div className="post-subtitle inner-sm">
                    {htmlToReact(_.get(this.props, 'page.subtitle', null))}
                  </div>
                  )}
                </header>
                <div className="post-content inner-sm">
                  {markdownify(_.get(this.props, 'page.content', null))}
                </div>
              </article>
            </Layout>
        );
    }
}
