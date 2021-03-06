import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix, markdownify} from '../utils';

export default class Partner extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post post-full">
                <header className="post-header inner-sm">
                  <h1 className="post-title underline">{_.get(this.props, 'page.title', null)}</h1>
                  {_.get(this.props, 'page.subtitle', null) && (
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'page.subtitle', null))}
                  </div>
                  )}
                </header>
                {_.get(this.props, 'page.img_path', null) && (
                <div className="post-image">
                  <img src={withPrefix(_.get(this.props, 'page.img_path', null))} alt={_.get(this.props, 'page.img_alt', null)} />
                </div>
                )}
              </article>
            </Layout>
        );
    }
}
